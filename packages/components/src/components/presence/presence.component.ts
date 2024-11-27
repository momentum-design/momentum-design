import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS, SIZE, TYPE } from './presence.constants';
import styles from './presence.styles';
import type { PresenceType, PresenceSize } from './presence.types';

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
  type: PresenceType = DEFAULTS.TYPE;

  /**
   * Acceptable values include:
   * - XX_SMALL
   * - X_SMALL
   * - SMALL
   * - MIDSIZE
   * - LARGE
   * - X_LARGE
   * - XX_LARGE
   *
   * Presence icons are minimum 14px in size, meaning XX_Small, X_Small and Small presence
   * icons will be no smaller than 14px.
   * @default small
   */
  @property({ type: String, reflect: true })
  size: PresenceSize = DEFAULTS.SIZE;

  /**
   * Get the size of the presence icon based on the given size type
   */
  private get iconSize() {
    switch (this.size) {
      case SIZE.MIDSIZE:
        return 1.16125;
      case SIZE.LARGE:
        return 1.30625;
      case SIZE.X_LARGE:
        return 1.596875;
      case SIZE.XX_LARGE:
        return 2.25;
      case SIZE.XX_SMALL:
      case SIZE.X_SMALL:
      case SIZE.SMALL:
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
      case TYPE.AWAY:
        return 'recents-presence-badge-filled';
      case TYPE.AWAY_CALLING:
        return 'away-calling-presence-filled';
      case TYPE.BUSY:
        return 'busy-presence-bold';
      case TYPE.DND:
        return 'dnd-presence-badge-filled';
      case TYPE.MEETING:
        return 'camera-filled';
      case TYPE.ON_CALL:
        return 'handset-filled';
      case TYPE.ON_DEVICE:
        return 'generic-device-video-badge-filled';
      case TYPE.ON_MOBILE:
        return 'phone-badge-filled';
      case TYPE.PAUSE:
        return 'pause-badge-filled';
      case TYPE.PTO:
        return 'pto-presence-filled';
      case TYPE.PRESENTING:
        return 'share-screen-badge-filled';
      case TYPE.QUIET:
        return 'quiet-hours-presence-filled';
      case TYPE.SCHEDULED:
        return 'meetings-presence-badge-filled';
      case TYPE.ACTIVE:
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
