import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './input.styles';
import { Component } from '../../models';
import { DEFAULTS } from './input.constants';
import { getHelperIcon } from './input.utils';
import { ValidationType } from './input.type';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

/**
 * input component, which ...
 *
 * @tagname mdc-input
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Input extends DisabledMixin(Component) {
  @property({ type: String }) label = '';

  @property({ type: String }) value = '';

  @property({ type: String }) placeholder = '';

  @property({ type: Boolean }) required = false;

  @property({ type: Number }) minLength?: number;

  /**
   * @beta this attribute is in beta, and is subject to change (given the toggletip component is not ready yet)
   */
  @property({ type: String }) labelInfoText = '';

  @property({ type: String }) helpText = '';

  @property({ type: String }) prefixText = '';

  @property() helpTextType?: ValidationType = DEFAULTS.VALIDATION;

  @property({ type: String }) validationType?: ValidationType = DEFAULTS.VALIDATION;

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
    return html`<mdc-icon name=${DEFAULTS.INFO_ICON_NAME}></mdc-icon>`;
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
    const helperIcon = getHelperIcon(this.helpTextType || DEFAULTS.VALIDATION);
    if (helperIcon) {
      return html`<mdc-icon name=${helperIcon}></mdc-icon>`;
    }
    return nothing;
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
        <slot name="label">${this.renderLabel()} ${this.required ? '(required)' : ''}</slot>
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
