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
 * @cssproperty --mdc-staticradio-inner-circle-size - size of the inner circle
 * @cssproperty --mdc-staticradio-text-disabled-color - color of the label when disabled
 * @cssproperty --mdc-staticradio-normal-border-color - color of the radio button border when normal
 * @cssproperty --mdc-staticradio-disabled-border-color - color of the radio button border when disabled
 * @cssproperty --mdc-staticradio-inner-circle-normal-background - background color of the inner circle when normal
 * @cssproperty --mdc-staticradio-inner-circle-disabled-background - background color of the inner circle when disabled
 * @cssproperty --mdc-staticradio-control-inactive-color - color of the radio button when inactive
 * @cssproperty --mdc-staticradio-control-inactive-disabled-background - background color of the radio button when
 *  inactive and disabled
 * @cssproperty --mdc-staticradio-control-active-color - color of the radio button when active
 * @cssproperty --mdc-staticradio-control-active-disabled-background - background color of the radio button
 *  when active and disabled
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
      <span part="radio-icon" class="icon"></span>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticRadio;
