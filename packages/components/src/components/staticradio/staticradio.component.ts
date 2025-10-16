import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

import styles from './staticradio.styles';

/**
 * This is a decorative component that is styled to look as a radio.
 * It has 4 properties - checked, disabled, readonly and soft-disabled.
 *
 * We are using the same styling that has been created for the `mdc-radio` component.
 *
 * @tagname mdc-staticradio
 *
 * @cssproperty --mdc-radio-inner-circle-size - size of the inner circle
 * @cssproperty --mdc-radio-outer-circle-size - size of the outer circle
 * @cssproperty --mdc-radio-inner-circle-background-color - background color of the inner circle
 * @cssproperty --mdc-radio-outer-circle-border-color - border color of the outer circle
 * @cssproperty --mdc-radio-outer-circle-background-color - background color of the outer circle
 *
 * @csspart radio-icon - The radio icon.
 *
 * @slot - Default slot for the label of the radio.
 */
class StaticRadio extends DisabledMixin(Component) {
  /**
   * Determines whether the radio is selected or unselected.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * Determines whether the radio is read-only.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * Determines whether the radio is soft-disabled.
   *
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
