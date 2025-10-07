import type { CSSResult, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';

import { Component } from '../../models';

import { DEFAULTS } from './screenreaderannouncer.constants';
import styles from './screenreaderannouncer.styles';
import { AriaLive } from './screenreaderannouncer.types';

/**
 * `mdc-screenreaderannouncer` can be used to announce messages with the screen reader.
 *
 * To make an announcement set `announcement` attribute on the `mdc-screenreaderannouncer` element.
 *
 * **Internal logic**
 *
 * When the screenreader announcer is connected to the DOM, if the `identity` attribute is not
 * provided, it is set to `mdc-screenreaderannouncer-identity` and a `<div>` element with this id is created
 * in the DOM. If the `identity` attribute is provided, the identity element is used and no new element
 * is created in the DOM.
 *
 * When the `announcement` attribute is set, the screenreader announcer will create a `<div>` element with
 * `aria-live` attribute set to the value of `data-aria-live` attribute and append it to the `identity` element.
 * After delay of `delay` milliseconds, a <p> element with the announcement text is appended to the `<div>` element.
 *
 * The announcement `<div>` element is removed from the DOM after `timeout` milliseconds.
 *
 * When the screen announcer component is disconnected from the DOM, all the timeouts are cleared and
 * all the announcement elements added are removed from the DOM and timeouts cleared.
 *
 * **Note**
 * 1. The default delay of 150 miliseconds is used as we dynamically generate the
 * aria-live region in the DOM and add the announcement text to it.
 * 3. If no `identity` is provided, all the screen reader components will create and use only one
 * `<div>` element with id `mdc-screenreaderannouncer-identity` in the DOM.
 *
 * Reference: https://patrickhlauke.github.io/aria/tests/live-regions/
 *
 * @tagname mdc-screenreaderannouncer
 */
class ScreenreaderAnnouncer extends Component {
  /**
   * The announcement attribute is a string that is used to announce messages to the screen reader.
   * The announcement is made when the announcement attribute is set to a non-empty string.
   *
   * @default ''
   */
  @property({ type: String, reflect: true })
  announcement: string = '';

  /**
   * The id of the element in the light dom, to which announcement elements will be appended.
   *
   * If id is not provided, it will be set to `mdc-screenreaderannouncer-identity` and
   * a div element with this id will be created in the light dom.
   */
  @property({ type: String, reflect: true })
  identity: string = '';

  /**
   * Aria live value for announcement.
   *
   * @default 'polite'
   */
  @property({ type: String, reflect: true, attribute: 'data-aria-live' })
  dataAriaLive: AriaLive = DEFAULTS.ARIA_LIVE;

  /**
   * Milliseconds to wait before adding the announcement to the identiy region in
   * DOM, which will announce the message to the screen reader.
   *
   * @default 150
   */
  @property({ type: Number, reflect: true })
  delay: number = DEFAULTS.DELAY;

  /**
   * Milliseconds to wait after which the announcement element will be removed from
   * identity region in DOM, causing the screen reader to not announcing the message.
   * @default 20_000
   */
  @property({ type: Number, reflect: true })
  timeout: number = DEFAULTS.TIMEOUT;

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

  /** @internal */
  private debounceTime = 500;

  /**
   * Announces the given announcement to the screen reader.
   *
   * A div element with aria-live attribute set to the given ariaLive value is created
   * and a p element with the announcement text is appended to it.
   *
   * The div element is appended to the element in the DOM identified with id as
   * identity attribute.
   *
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
      document.getElementById(this.identity)?.appendChild(announcementContainer);
      const timeOutId = window.setTimeout(() => {
        const announcementElement = document.createElement('p');
        announcementElement.textContent = announcement;
        announcementContainer.appendChild(announcementElement);

        this.ariaLiveAnnouncementIds.push(announcementId);
        const timeOutId = window.setTimeout(() => {
          document.getElementById(announcementId)?.remove();
        }, timeout);
        this.timeOutIds.push(timeOutId);
      }, delay);
      this.timeOutIds.push(timeOutId);
    }
  }

  /**
   * Clears all timeouts and removes all announcements from the screen reader.
   */
  private clearTimeOutsAndAnnouncements() {
    this.timeOutIds.forEach(timeOutId => {
      window.clearTimeout(timeOutId);
    });
    this.ariaLiveAnnouncementIds.forEach(announcementId => {
      document.getElementById(announcementId)?.remove();
    });
  }

  /**
   * Creates a div element with id as identity attribute in the DOM.
   *
   * If the identity attribute is not provided, it is set internally to
   * `mdc-screenreaderannouncer-identity`.
   */
  private createAnnouncementAriaLiveRegion() {
    let liveRegionLightDom = document.getElementById(this.identity);
    if (!liveRegionLightDom) {
      liveRegionLightDom = document.createElement('div');
      liveRegionLightDom.id = this.identity;

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
    if (this.identity.length === 0) {
      this.identity = DEFAULTS.IDENTITY;
    }
    this.createAnnouncementAriaLiveRegion();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.clearTimeOutsAndAnnouncements();
  }

  /**
   * Returns a debounced version of the provided callback function.
   * The returned function will delay calling the provided callback function
   * by the specified timeout (in milliseconds). The default timeout is 500 ms.
   * If the returned function is called again before the timeout has expired,
   * the timeout will be reset.
   *
   * @param callback - The function to debounce.
   * @param timeout - The timeout in milliseconds.
   */
  private debounceAnnouncement(callback: Function, timeout: number): Function {
    let timer: number;
    return (...args: any[]) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        callback.apply(this, args);
      }, timeout);
    };
  }

  protected override updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (changedProperties.has('identity') && this.identity.length === 0) {
      this.identity = DEFAULTS.IDENTITY;
      this.createAnnouncementAriaLiveRegion();
    }
    if (changedProperties.has('announcement') && this.announcement.length > 0) {
      this.debounceAnnouncement(() => {
        this.announce(this.announcement, this.delay, this.timeout, this.dataAriaLive);
        this.announcement = '';
      }, this.debounceTime)();
    }
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default ScreenreaderAnnouncer;
