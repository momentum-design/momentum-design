import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

import styles from './staticradio.styles';

/**
 * This is a decorative component that is styled to look as a radio.
 * It has 2 properties - checked and disabled.
 *
 * We are using the same styling that has been created for the `mdc-radio` component.
 *
 * @tagname mdc-staticradio
 *
 * @slot default - This is a default/unnamed slot
 *
 * @csspart radio-icon - The radio icon element that indicates the state of the radio (checked/unchecked).
 *
 * @cssproperty --mdc-radio-inner-circle-size - size of the inner circle
 * @cssproperty --mdc-radio-text-disabled-color - color of the label when disabled
 * @cssproperty --mdc-radio-control-border-color - border color of the radio control
 * @cssproperty --mdc-radio-control-background-color - background color of the radio control
 * @cssproperty --mdc-radio-inner-circle-background-color - background color of the inner circle
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

  public override render() {
    return html` <slot></slot>
      <span part="radio-icon" class="icon"></span>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticRadio;
