import { CSSResult, html } from 'lit';
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
   * @default active
   */
  @property({ type: String, reflect: true })
  type = DEFAULTS.TYPE;

  /**
   * Acceptable values include:
   * - XX_SMALL
   * - X_SMALL
   * - SMALL
   * - MIDSIZE
   * - LARGE
   * - X_LARGE
   * - XX_LARGE
   * @default small
   */
  @property({ type: String, reflect: true })
  size = DEFAULTS.SIZE;

  /**
   * Get the size of the presence icon based on the given size type
   */
  private get iconSize() {
    switch (this.size) {
      case 'midsize':
        return 1.16125;
      case 'large':
        return 1.30625;
      case 'x_large':
        return 1.596875;
      case 'xx_large':
        return 2.25;
      case 'xx_small':
      case 'x_small':
      case 'small':
      default:
        this.size = DEFAULTS.SIZE;
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
        this.type = DEFAULTS.TYPE;
        return 'active-presence-small-filled';
    }
  }

  public override render() {
    return html`
      <div class="mdc-presence mdc-presence__${this.size}">
        <mdc-icon
          class="mdc-presence-icon mdc-presence-icon__${this.type}"
          name="${this.icon}"
          size="${this.iconSize}"
        ></mdc-icon>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Presence;
