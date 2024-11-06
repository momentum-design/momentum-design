import { CSSResult, html, PropertyValues } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS, PRESENCE_TYPE } from './presence.constants';
import styles from './presence.styles';

/**
 * The `mdc-presence` component is a versatile UI element used to
 * display the presence status of a user or entity within an avatar component.
 *
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
 * This component is ideal for use within avatar UIs where the presence status
 * needs to be visually represented.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-presence
 */
class Presence extends Component {
  /**
   * Type of the presence
   */
  @property({ type: String, reflect: true })
  type = DEFAULTS.TYPE;

  /**
   * Size of the presence icon
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
        return 'active-presence-small-filled';
    }
  }

  /**
   * This method generates the CSS classes for the presence icon.
   * @returns - an object containing the CSS classes for the icon.
   */
  private getIconClasses(): { [key: string]: boolean } {
    const sizeClass = { [`mdc-presence-icon__${this.size}`]: true };
    const backgroundClass = { [`mdc-presence-icon__${this.type}`]: true };
    return {
      ...backgroundClass,
      ...sizeClass,
    };
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (!Object.values(PRESENCE_TYPE).includes(this.type)) {
      this.type = DEFAULTS.TYPE;
    }
  }

  public override render() {
    return html`
      <mdc-icon
        class="mdc-presence-icon ${classMap(this.getIconClasses())}"
        name="${this.icon}"
        length-unit="${DEFAULTS.LENGTH_UNIT}"
        size="${this.presenceSize}"
      ></mdc-icon>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Presence;
