import type { CSSResult } from 'lit';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

import { DEFAULTS, ICON_NAME, ICON_SIZE_IN_REM } from './statictoggle.constants';
import styles from './statictoggle.styles';
import type { ToggleSize } from './statictoggle.types';

/**
 * The StaticToggle component is a decorative, non-interactive toggle switch used for visual
 * presentation. It shares the same styling as the interactive `mdc-toggle` component but does
 * not provide user interaction functionality.
 *
 * This component supports multiple visual states: checked, disabled, readonly, soft-disabled,
 * and size variations (default, compact).
 *
 * ## When to use
 * Use StaticToggle to display toggle states in read-only contexts such as summary views,
 * confirmation screens, or as a building block within custom interactive components. For
 * interactive toggles, use `mdc-toggle` instead.
 *
 * ## Accessibility
 * - StaticToggle is decorative and non-interactive by design
 * - When used within parent components, ensure proper ARIA attributes are provided by the parent
 * - Do not use this as a replacement for interactive toggles in forms
 *
 * @tagname mdc-statictoggle
 *
 * @dependency mdc-icon
 *
 * @cssproperty --mdc-statictoggle-width - Width of the static toggle.
 * @cssproperty --mdc-statictoggle-height - Height of the static toggle.
 * @cssproperty --mdc-statictoggle-border-radius - Border radius of the static toggle.
 * @cssproperty --mdc-statictoggle-border-color - Border color of the static toggle.
 * @cssproperty --mdc-statictoggle-background-color - Background color of the static toggle.
 * @cssproperty --mdc-statictoggle-icon-color - Icon color of the static toggle.
 * @cssproperty --mdc-statictoggle-icon-background-color - Icon background color of the static toggle.
 *
 * @csspart slider - The slider part of the toggle.
 * @csspart toggle-icon - The icon part of the toggle.
 *
 * @slot - Default slot for slotted content (typically used by parent `mdc-toggle` for the checkbox input).
 */
class StaticToggle extends DisabledMixin(Component) {
  /**
   * Controls the visual state of the toggle.
   * When true, the toggle appears in the "on" or "active" state.
   * When false, the toggle appears in the "off" or "inactive" state.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Specifies the size of the toggle component.
   * - **default**: Standard size with 1.5rem height
   * - **compact**: Smaller size with 1rem height
   * @default default
   */
  @property({ type: String, reflect: true }) size: ToggleSize = DEFAULTS.SIZE;

  /**
   * When true, the toggle appears in a read-only visual state.
   * This is a decorative property that changes the visual appearance only.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * When true, the toggle appears in a soft-disabled visual state.
   * Soft-disabled elements maintain visual presence but appear non-interactive.
   * This is a decorative property that changes the visual appearance only.
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
