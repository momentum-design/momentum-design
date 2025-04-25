import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { DEFAULTS, ICON_NAME, ICON_SIZE_IN_REM } from '../toggle/toggle.constants';
import styles from './statictoggle.styles';
import { ToggleSize } from '../toggle/toggle.types';

/**
 * statictoggle component, which ...
 *
 * @tagname mdc-statictoggle
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class StaticToggle extends DisabledMixin(Component) {
  /**
  * Determines whether the toggle is active or inactive.
  * @default false
  */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Determines toggle size in rem (height is specified here).
   * - **Default**: 1.5
   * - **Compact**: 1
   * @default default
   */
  @property({ type: String, reflect: true }) size: ToggleSize = DEFAULTS.SIZE;

  public override render() {
    return html`
      <slot></slot>
      <div part="slider">
        <mdc-icon
          name="${this.checked ? ICON_NAME.CHECKED : ICON_NAME.UNCHECKED}"
          class="icon"
          length-unit="rem"
          size="${ICON_SIZE_IN_REM[this.size]}"
        ></mdc-icon>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticToggle;
