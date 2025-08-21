import { CSSResult, html, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';

import { Component } from '../../models';

import { DEFAULTS, PRESENCE_SIZE } from './presence.constants';
import styles from './presence.styles';
import type { PresenceType, PresenceSize } from './presence.types';
import { getIconValue, getPresenceIconSize } from './presence.utils';

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
 *
 * @cssproperty --mdc-presence-active-background-color - The background color of the presence type active.
 * @cssproperty --mdc-presence-away-background-color - The background color of the presence type away.
 * @cssproperty --mdc-presence-away-calling-background-color - The background color of the presence type away-calling.
 * @cssproperty --mdc-presence-busy-background-color - The background color of the presence type busy.
 * @cssproperty --mdc-presence-dnd-background-color - The background color of the presence type dnd.
 * @cssproperty --mdc-presence-meeting-background-color - The background color of the presence type meeting.
 * @cssproperty --mdc-presence-on-call-background-color - The background color of the presence type on-call.
 * @cssproperty --mdc-presence-on-device-background-color - The background color of the presence type on-device.
 * @cssproperty --mdc-presence-on-mobile-background-color - The background color of the presence type on-mobile.
 * @cssproperty --mdc-presence-pause-background-color - The background color of the presence type pause.
 * @cssproperty --mdc-presence-pto-background-color - The background color of the presence type pto.
 * @cssproperty --mdc-presence-presenting-background-color - The background color of the presence type presenting.
 * @cssproperty --mdc-presence-quiet-background-color - The background color of the presence type quiet.
 * @cssproperty --mdc-presence-scheduled-background-color - The background color of the presence type scheduled.
 * @cssproperty --mdc-presence-overlay-background-color - The background color of the presence type overlay.
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
   * Acceptable numeric values include:
   * - 24
   * - 32
   * - 48
   * - 64
   * - 72
   * - 88
   * - 124
   *
   * Presence icons are minimum 14px in size, meaning 24, 32, and 48 presence
   * icons will be no smaller than 14px (for sizes 24, 32, 48).
   * @default 32
   */
  @property({ type: Number, reflect: true })
  size: PresenceSize = DEFAULTS.SIZE;

  /**
   * @internal
   * State to track the current icon type (previous type until the new icon is loaded)
   */
  @state()
  private currentIconType: PresenceType = DEFAULTS.TYPE;

  override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('size')) {
      this.setSize(this.size);
    }
  }

  private setSize(size: PresenceSize): void {
    this.setAttribute('size', Object.values(PRESENCE_SIZE).includes(size) ? `${size}` : DEFAULTS.SIZE.toString());
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
      <div part="presence-content">
        <mdc-icon
          class="mdc-presence-icon mdc-presence-icon__${this.currentIconType}"
          name="${this.icon}"
          size="${getPresenceIconSize(this.size)}"
          @load="${this.handleOnLoad}"
          @error="${this.handleOnError}"
        ></mdc-icon>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Presence;
