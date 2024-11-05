import { CSSResult, html, PropertyValues } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { PRESENCE_TYPE, DEFAULTS } from './presence.constants';
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
  @property({ type: PRESENCE_TYPE, reflect: true })
  type = DEFAULTS.TYPE;

  /**
   * Size of the presence icon
   */
  @property({ type: Number })
  size = DEFAULTS.SIZE;

  /**
   * This method generates the CSS classes for the presence icon.
   * @returns - an object containing the CSS classes for the icon.
   */
  private getIconClasses(): { [key: string]: boolean } {
    const sizeClass = { [`mdc-presence-icon__${this.size}`]: true };
    const backgroundClass = { [`mdc-presence-icon__${this.type.name}`]: true };
    return {
      ...backgroundClass,
      ...sizeClass,
    };
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
  }

  public override render() {
    return html`
      <mdc-icon
        class="mdc-presence-icon ${classMap(this.getIconClasses())}"
        name="${this.type.icon}"
        length-unit="${DEFAULTS.LENGTH_UNIT}"
        size="${this.size}"
      ></mdc-icon>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Presence;
