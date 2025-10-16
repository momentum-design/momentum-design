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
 * It has 5 properties - checked, size, disabled, readonly and soft-disabled. <br/>
 * We are using the same styling that has been created for the `mdc-toggle` component.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-statictoggle
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssproperty --mdc-toggle-width - The width of the toggle
 * @cssproperty --mdc-toggle-height - The height of the toggle
 * @cssproperty --mdc-toggle-border-radius - The border radius of the toggle
 * @cssproperty --mdc-toggle-border-color - The border color of the toggle
 * @cssproperty --mdc-toggle-background-color - The background color of the toggle
 * @cssproperty --mdc-toggle-icon-color - The icon color of the toggle
 * @cssproperty --mdc-toggle-icon-background-color - The icon background color of the toggle
 *
 * @csspart slider - The slider part of the toggle
 * @csspart toggle-icon - The icon part of the toggle
 *
 * @slot - Default slot for adding label text.
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

  /**
   * Determines whether the toggle is soft-disabled.
   *
   * @default false
   */
  @property({ type: Boolean, attribute: 'soft-disabled', reflect: true }) softDisabled = false;

  public override render() {
    return html`
      <slot></slot>
      <div part="slider">
        <mdc-icon
          name="${this.checked ? ICON_NAME.CHECKED : ICON_NAME.UNCHECKED}"
          part="toggle-icon"
          length-unit="rem"
          size="${ICON_SIZE_IN_REM[this.size]}"
        ></mdc-icon>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticToggle;
