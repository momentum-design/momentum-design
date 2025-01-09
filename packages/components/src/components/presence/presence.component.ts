import { CSSResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS, SIZE } from './presence.constants';
import styles from './presence.styles';
import type { PresenceType, PresenceSize } from './presence.types';
import { getIconValue } from './presence.utils';

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
   * @internal
   * State to track the current icon type (previous type until the new icon is loaded)
   */
  @state()
  private currentIconType: PresenceType = DEFAULTS.TYPE;

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
    const iconName = getIconValue(this.type);
    if (iconName === 'active-presence-small-filled') {
      this.type = DEFAULTS.TYPE;
    }
    return iconName;
  }

  /**
    * Handles the successful load of an icon.
    * Sets the `currentIconType` property to match the `type` property.
  */
  private handleOnLoad(): void {
    this.currentIconType = this.type;
  }

  /**
   * Handles an error that occurs when loading an icon.
  */
  private handleOnError(): void {
    if (this.onerror) {
      this.onerror('There was a problem while fetching the icon. Please check the icon name and try again.');
    }
  }

  public override render() {
    return html`
      <div class="mdc-presence mdc-presence__${this.size}">
        <mdc-icon
          class="mdc-presence-icon mdc-presence-icon__${this.currentIconType}"
          name="${this.icon}"
          size="${this.iconSize}"
          @load="${this.handleOnLoad}"
          @error="${this.handleOnError}"
        ></mdc-icon>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Presence;
