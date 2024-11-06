import { CSSResult, html, TemplateResult } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS } from './presence.constants';
import styles from './presence.styles';

/**
 * The `mdc-presence` component is a versatile UI element used to
 * display the presence status of a user or entity within an avatar component.
 *
 * This component is ideal for use within avatar UIs where the presence status
 * needs to be visually represented.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-presence
 */
class Presence extends Component {
  /**
   * Supported presence types:
   * - `active`
   * - `away`
   * - `away-calling`
   * - `busy`
   * - `dnd`
   * - `meeting`
   * - `on-call`
   * - `on-device`
   * - `on-mobile`
   * - `pause`
   * - `pto`
   * - `presenting`
   * - `quiet`
   * - `scheduled`
   *
   */
  @property({ type: String, reflect: true })
  type = DEFAULTS.TYPE;

  /**
   * Size of the presence icon in rem
   *
   * Acceptable values include:
   * - XX_SMALL: 0.875,
   * - X_SMALL: 0.875,
   * - SMALL: 0.875,
   * - MIDSIZE: 1.15,
   * - LARGE: 1.3,
   * - X_LARGE: 1.6,
   * - XX_LARGE: 2.25,
   *
   */
  @property({ type: String, reflect: true })
  size = DEFAULTS.SIZE;

  /**
   * Get the size of the presence based on the given size type
   */
  private get presenceSize() {
    switch (this.size) {
      case 'midsize':
        return 1.15;
      case 'large':
        return 1.3;
      case 'x_large':
        return 1.6;
      case 'xx_large':
        return 2.25;
      case 'xx_small':
      case 'x_small':
      case 'small':
      default:
        return 0.875;
    }
  }

  /**
   * Get the icon name based on the presence type
   */
  private get icon() {
    switch (this.type) {
      case 'away':
        return 'recents-presence-badge-filled';
      case 'away-calling':
        return 'away-calling-presence-filled';
      case 'busy':
        return 'busy-presence-bold';
      case 'dnd':
        return 'dnd-presence-badge-filled';
      case 'meeting':
        return 'camera-filled';
      case 'on-call':
        return 'handset-filled';
      case 'on-device':
        return 'generic-device-video-badge-filled';
      case 'on-mobile':
        return 'phone-badge-filled';
      case 'pause':
        return 'pause-badge-filled';
      case 'pto':
        return 'pto-presence-filled';
      case 'presenting':
        return 'share-screen-badge-filled';
      case 'quiet':
        return 'quiet-hours-presence-filled';
      case 'scheduled':
        return 'meetings-presence-badge-filled';
      case 'active':
      default:
        return 'active-presence-small-filled';
    }
  }

  /**
   * This method generates the CSS classes for the presence.
   * @returns - an object containing the CSS classes for the presence div.
   */
  private getPresenceClasses(): { [key: string]: boolean } {
    const sizeClass = { [`mdc-presence__${this.size}`]: true };
    return {
      ...sizeClass,
    };
  }

  /**
   * This method generates the CSS classes for the presence icon.
   * @returns - an object containing the CSS classes for the icon.
   */
  private getIconClasses(): { [key: string]: boolean } {
    const backgroundClass = { [`mdc-presence-icon__${this.type}`]: true };
    return {
      ...backgroundClass,
    };
  }

  /**
   * Method to generate the presence icon.
   * @returns the template result of the icon.
   */
  private getPresenceIcon(): TemplateResult {
    return html`
      <mdc-icon
        class="mdc-presence-icon ${classMap(this.getIconClasses())}"
        name="${this.icon}"
        size="${this.presenceSize}"
      ></mdc-icon>
    `;
  }

  public override render() {
    return html` <div class="mdc-presence ${classMap(this.getPresenceClasses())}">${this.getPresenceIcon()}</div> `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Presence;
