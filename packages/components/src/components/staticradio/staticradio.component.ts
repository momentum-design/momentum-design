import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import radioStyles from '../radio/radio.styles';

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
  @property({ type: Boolean, reflect: true }) checked = false;

  public override render() {
    return html`
      <slot></slot>
      <span class="icon"></span>`;
  }

  public static override styles: Array<CSSResult> = [...radioStyles];
}

export default StaticRadio;
