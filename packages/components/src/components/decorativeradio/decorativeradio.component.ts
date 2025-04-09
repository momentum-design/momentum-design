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
 * @tagname mdc-decorative-radio
 *
 */
class DecorativeRadio extends DisabledMixin(Component) {
  @property({ type: Boolean, reflect: true }) checked = false;

  public override render() {
    return html`<div class="mdc-radio__icon-container mdc-focus-ring">
    <span class="mdc-radio__icon"></span>
  </div>`;
  }

  public static override styles: Array<CSSResult> = [...radioStyles];
}

export default DecorativeRadio;
