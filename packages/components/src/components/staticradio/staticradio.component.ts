import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import styles from './staticradio.style';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

/**
 * This is a decorative component that is styled to look as a radio option.
 * It has 2 properties - checked and disabled.
 *
 * We are using the same styling that has been created for the `mdc-radio` component.
 *
 * @tagname mdc-staticradio
 *
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
    return html`
      <slot></slot>
      <span part="radio-icon" class="icon"></span>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StaticRadio;
