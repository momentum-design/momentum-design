import type { CSSResult } from 'lit';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

import { DEFAULTS, ICON_NAME, ICON_SIZE_IN_REM } from './statictoggle.constants';
import styles from './statictoggle.styles';
import type { ToggleSize } from './statictoggle.types';

/**
 * This is a decorative component that is styled to look as a toggle. <br/>
 * It has 3 properties - checked, size and disabled. <br/>
 * We are using the same styling that has been created for the `mdc-toggle` component.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-statictoggle
 *
 * @slot default - This is a default/unnamed slot
 *
 * @csspart slider - The slider element that contains the icon and moves based on the `checked` property.
 * @csspart icon - The icon element that indicates the state of the toggle (checked/unchecked).
 *
 * @cssproperty --mdc-toggle-width - Width of the toggle
 * @cssproperty --mdc-toggle-height - Height of the toggle
 * @cssproperty --mdc-toggle-width-compact - Width of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-height-compact - Height of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-border-radius - Border radius of the toggle
 * @cssproperty --mdc-toggle-border-radius-compact - Border radius of the toggle when it's size is compact
 * @cssproperty --mdc-toggle-border - Border of the toggle
 * @cssproperty --mdc-toggle-inactive-rest-color - Background color of the inactive toggle in rest state
 * @cssproperty --mdc-toggle-inactive-disabled-color - Background color of the inactive toggle in disabled state
 * @cssproperty --mdc-toggle-active-rest-color - Background color of the active toggle in rest state
 * @cssproperty --mdc-toggle-active-disabled-color - Background color of the active toggle in disabled state
 * @cssproperty --mdc-toggle-icon-color-normal - Color of the icon in normal state
 * @cssproperty --mdc-toggle-icon-color-disabled - Color of the icon in disabled state
 * @cssproperty --mdc-toggle-icon-background-color-normal - Background color of the icon in normal state
 * @cssproperty --mdc-toggle-icon-background-color-disabled - Background color of the icon in disabled state
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
          part="icon"
          length-unit="rem"
          size="${ICON_SIZE_IN_REM[this.size]}"
        ></mdc-icon>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticToggle;
