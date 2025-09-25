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
 * It has 4 properties - checked, size, disabled and readonly. <br/>
 * We are using the same styling that has been created for the `mdc-toggle` component.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-statictoggle
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssproperty --mdc-statictoggle-width - Width of the toggle
 * @cssproperty --mdc-statictoggle-height - Height of the toggle
 * @cssproperty --mdc-statictoggle-width-compact - Width of the toggle when it's size is compact
 * @cssproperty --mdc-statictoggle-height-compact - Height of the toggle when it's size is compact
 * @cssproperty --mdc-statictoggle-border-radius - Border radius of the toggle
 * @cssproperty --mdc-statictoggle-border-radius-compact - Border radius of the toggle when it's size is compact
 * @cssproperty --mdc-statictoggle-border - Border of the toggle
 * @cssproperty --mdc-statictoggle-inactive-rest-color - Background color of the inactive toggle in rest state
 * @cssproperty --mdc-statictoggle-inactive-disabled-color - Background color of the inactive toggle in disabled state
 * @cssproperty --mdc-statictoggle-active-rest-color - Background color of the active toggle in rest state
 * @cssproperty --mdc-statictoggle-active-disabled-color - Background color of the active toggle in disabled state
 * @cssproperty --mdc-statictoggle-icon-color-normal - Color of the icon in normal state
 * @cssproperty --mdc-statictoggle-icon-color-disabled - Color of the icon in disabled state
 * @cssproperty --mdc-statictoggle-icon-background-color-normal - Background color of the icon in normal state
 * @cssproperty --mdc-statictoggle-icon-background-color-disabled - Background color of the icon in disabled state
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

  /**
   * Determines whether the toggle is read-only.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) readonly = false;

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
