import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

import styles from './staticradio.styles';

/**
 * StaticRadio is a decorative component styled as a radio button for visual presentation.
 * Unlike the interactive `mdc-radio`, this component does not handle user interactions or form submissions.
 * It is used purely for displaying radio button states in read-only scenarios.
 *
 * This component supports four display states: checked, disabled, readonly, and soft-disabled.
 *
 * @tagname mdc-staticradio
 *
 * @cssproperty --mdc-staticradio-inner-circle-size - The size of the inner circle when checked.
 * @cssproperty --mdc-staticradio-outer-circle-size - The size of the outer circle border.
 * @cssproperty --mdc-staticradio-inner-circle-background-color - The background color of the inner circle when checked.
 * @cssproperty --mdc-staticradio-outer-circle-border-color - The border color of the outer circle.
 * @cssproperty --mdc-staticradio-outer-circle-background-color - The background color of the outer circle.
 *
 * @csspart radio-icon - The radio icon element
 *
 * @slot - Default slot for the label of the radio
 */
class StaticRadio extends DisabledMixin(Component) {
  /**
   * Determines whether the radio appears checked (selected) or unchecked.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Determines whether the radio appears in a read-only state.
   * Note: This is purely visual as StaticRadio is non-interactive by design.
   * @default false
   */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * Determines whether the radio appears in a soft-disabled state.
   * Soft-disabled provides a less prominent disabled appearance than the standard disabled state.
   * Note: This is purely visual as StaticRadio is non-interactive by design.
   * @default false
   */
  @property({ type: Boolean, attribute: 'soft-disabled', reflect: true }) softDisabled = false;

  public override render() {
    return html` <slot></slot>
      <span part="radio-icon" class="radio-icon"></span>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticRadio;
