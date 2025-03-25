import type { CSSResult, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';
import { Component } from '../../models';
import { DEFAULTS } from './screenreaderannouncer.constants';
import styles from './screenreaderannouncer.styles';
import { AriaLive } from './screenreaderannouncer.types';

/**
 * `mdc-screenreaderannouncer` is ScreenreaderAnnouncer component,
 * which can be used to announce messages with the screen reader.
 *
 * We can make an announcement by setting the announcement attribute.
 *
 * @tagname mdc-screenreaderannouncer
 */
class ScreenreaderAnnouncer extends Component {
  /**
   * The announcement attribute is a string that is used to announce
   * messages to the screen reader. The announcement is made when the
   * announcement attribute is set to a non-empty string.
   *
   * @default ''
   */
  @property({ type: String, reflect: true })
  announcement: string = '';

  /**
   * Aria live value for announcement
   *
   * @default 'polite'
   */
  @property({ type: String, reflect: true, attribute: 'data-aria-live' })
  dataAriaLive: AriaLive = 'polite';

  /**
   * Milliseconds to wait before announcing the message to the screen reader.
   * @default 150
   */
  @property({ type: Number, reflect: true })
  delay: number = DEFAULTS.DELAY;

  /**
   * Milliseconds to wait before removing the announcement from the screen reader.
   * @default 20_000
   */
  @property({ type: Number, reflect: true })
  timeout: number = DEFAULTS.TIMEOUT;

  /**
   * The id of the aria live region element in the light dom.
   * @internal
   */
  private ariaLiveRegionId = 'mdc-screenreaderannouncer-aria-live-region-id';

  /**
   * The data test id of the aria live region element in the light dom.
   * @internal
   */
  private ariaLiveRegionDataTestId = 'mdc-screenreaderannouncer-aria-live-region-data-test-id';

  /**
   * Array to store timeOutIds for clearing timeouts later.
   * @internal
   */
  private timeOutIds: Array<number> = [];

  /**
   * Array to store the ids of the announcement elements.
   * @internal
   */
  private ariaLiveAnnouncementIds: Array<string> = [];

  /**
   * Announces the given announcement to the screen reader.
   * An announcement is appended to aria live region in light dom
   * @param announcement - The announcement to be made.
   * @param delay - The delay in milliseconds before announcing the message.
   * @param timeout - The timeout in milliseconds before removing the announcement.
   * @param ariaLive - The aria live value for the announcement.
   */
  announce(announcement: string, delay: number, timeout: number, ariaLive: AriaLive) {
    if (announcement.length > 0) {
      const announcementId = `mdc-screenreaderannouncer-announcement-${uuidv4()}`;
      const announcementContainer = document.createElement('div');
      announcementContainer.id = announcementId;
      announcementContainer.ariaLive = ariaLive;
      document.getElementById(this.ariaLiveRegionId)?.appendChild(announcementContainer);
      const timeOutId = window.setTimeout(
        () => {
          const announcementElement = document.createElement('p');
          announcementElement.textContent = announcement;
          announcementContainer.appendChild(announcementElement);

          this.ariaLiveAnnouncementIds.push(announcementId);
          const timeOutId = window.setTimeout(
            () => {
              document.getElementById(announcementId)?.remove();
            },
            timeout,
          );
          this.timeOutIds.push(timeOutId);
        },
        delay,
      );
      this.timeOutIds.push(timeOutId);
    }
  }

  /**
   * Clears all timeouts and removes all announcements from the screen reader.
   */
  private clearTimeOutsAndAnnouncements() {
    // Clear timeouts and remove aria live region announcements
    this.timeOutIds.forEach((timeOutId) => {
      window.clearTimeout(timeOutId);
    });
    this.ariaLiveAnnouncementIds.forEach((announcementId) => {
      document.getElementById(announcementId)?.remove();
    });
  }

  /**
   * Creates an aria live region for mdc screen reader in the light dom.
   */
  private createAnnouncementAriaLiveRegion() {
    let liveRegionLightDom = document.getElementById(this.ariaLiveRegionId);
    if (!liveRegionLightDom) {
      liveRegionLightDom = document.createElement('div');
      liveRegionLightDom.id = this.ariaLiveRegionId;
      liveRegionLightDom.setAttribute('data-testid', this.ariaLiveRegionDataTestId);

      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .mdc-screenreaderannouncer__visually-hidden {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
      `;
      liveRegionLightDom.appendChild(styleElement);
      liveRegionLightDom.classList.add('mdc-screenreaderannouncer__visually-hidden');
      document.body.appendChild(liveRegionLightDom);
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.createAnnouncementAriaLiveRegion();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.clearTimeOutsAndAnnouncements();
  }

  protected override updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (changedProperties.has('announcement') && this.announcement.length > 0) {
      this.announce(this.announcement, this.delay, this.timeout, this.dataAriaLive);
      this.announcement = '';
    }
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default ScreenreaderAnnouncer;
