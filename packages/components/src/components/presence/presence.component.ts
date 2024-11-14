import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS, PRESENCE_SIZE, PRESENCE_TYPE } from './presence.constants';
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
   * @default small
   */
  @property({ type: String, reflect: true })
  size: PresenceSize = DEFAULTS.SIZE;

  /**
   * Get the size of the presence icon based on the given size type
   */
  private get iconSize() {
    switch (this.size) {
      case PRESENCE_SIZE.MIDSIZE:
        return 1.16125;
      case PRESENCE_SIZE.LARGE:
        return 1.30625;
      case PRESENCE_SIZE.X_LARGE:
        return 1.596875;
      case PRESENCE_SIZE.XX_LARGE:
        return 2.25;
      case PRESENCE_SIZE.XX_SMALL:
      case PRESENCE_SIZE.X_SMALL:
      case PRESENCE_SIZE.SMALL:
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
      case PRESENCE_TYPE.AWAY:
        return 'recents-presence-badge-filled';
      case PRESENCE_TYPE.AWAY_CALLING:
        return 'away-calling-presence-filled';
      case PRESENCE_TYPE.BUSY:
        return 'busy-presence-bold';
      case PRESENCE_TYPE.DND:
        return 'dnd-presence-badge-filled';
      case PRESENCE_TYPE.MEETING:
        return 'camera-filled';
      case PRESENCE_TYPE.ON_CALL:
        return 'handset-filled';
      case PRESENCE_TYPE.ON_DEVICE:
        return 'generic-device-video-badge-filled';
      case PRESENCE_TYPE.ON_MOBILE:
        return 'phone-badge-filled';
      case PRESENCE_TYPE.PAUSE:
        return 'pause-badge-filled';
      case PRESENCE_TYPE.PTO:
        return 'pto-presence-filled';
      case PRESENCE_TYPE.PRESENTING:
        return 'share-screen-badge-filled';
      case PRESENCE_TYPE.QUIET:
        return 'quiet-hours-presence-filled';
      case PRESENCE_TYPE.SCHEDULED:
        return 'meetings-presence-badge-filled';
      case PRESENCE_TYPE.ACTIVE:
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
