import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './input.styles';
import { Component } from '../../models';

/**
 * input component, which ...
 *
 * @tagname mdc-input
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Input extends Component {
  @property()
  label = undefined;

  /**
   * @beta this attribute is in beta, and is subject to change (given the toggletip component is not ready yet)
   */
  @property()
  labelInfoText = undefined;

  @property()
  helpText = undefined;

  @property()
  prefixText = undefined;

  @property()
  helpTextType?: 'error' | 'default' = 'default';

  @property()
  value = undefined;

  protected renderLabel() {
    if (!this.label) {
      return nothing;
    }
    return html`<label for="${this.id}">${this.label}</label>`;
  }

  protected renderLabelInfoToggleTip() {
    if (!this.labelInfoText) {
      return nothing;
    }
    return html`<mdc-icon name=""></mdc-icon>`;
  }

  protected renderPrefixText() {
    if (!this.prefixText) {
      return nothing;
    }
    return html`<mdc-text>${this.prefixText}</mdc-text>`;
  }

  protected renderHelpTextIcon() {
    if (!this.helpText) {
      return nothing;
    }
    switch (this.helpTextType) {
      case 'error':
        return html`<mdc-icon name="error-regular"></mdc-icon>`;

      default:
        return nothing;
    }
  }

  protected renderHelpText() {
    if (!this.helpText) {
      return nothing;
    }
    return html` <mdc-text>${this.helpText}</mdc-text> `;
  }

  public override render() {
    return html`
      <div class="input-header">
        <slot name="label">${this.renderLabel()}</slot>
        <slot name="label-icon">${this.renderLabelInfoToggleTip()}</slot>
      </div>
      <div class="input-container" part="input-container">
        <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
        <slot name="input">
          <input id="${this.id}" value="${ifDefined(this.value)}" />
        </slot>
        <slot name="trailing-button"></slot>
      </div>
      <div class="input-footer" part="input-footer">
        <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
        <slot name="help-text">${this.renderHelpText()}</slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Input;
