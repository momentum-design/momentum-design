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

  @property({ type: String, reflect: true }) value = '';

  @property({ type: String }) placeholder = '';

  @property({ type: Boolean }) required = false;

  @property({ type: Boolean }) readonly = false;

  @property({ type: Number }) maxLength?: number;

  @property({ type: Number }) minLength?: number;

  /**
   * @beta this attribute is in beta, and is subject to change (given the toggletip component is not ready yet)
   */
  @property({ type: String }) labelInfoText = '';

  @property({ type: String }) helpText = '';

  @property({ type: String }) prefixText = '';

  @property() helpTextType?: ValidationType = DEFAULTS.VALIDATION;

  protected renderLabel() {
    if (!this.label) {
      return nothing;
    }
    return html`<label for="${this.id}" class='input-label'>${this.label} ${this.required ? '(required)' : ''}</label>`;
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
    return html`<mdc-text tagname='span' type='body-midsize-regular'>${this.prefixText}</mdc-text>`;
  }

  protected renderHelpTextIcon() {
    if (!this.helpText) {
      return nothing;
    }
    const helperIcon = getHelperIcon(this.helpTextType || DEFAULTS.VALIDATION);
    if (helperIcon) {
      return html`<mdc-icon size="1" length-unit="rem" name=${helperIcon}></mdc-icon>`;
    }
    return nothing;
  }

  protected renderHelpText() {
    if (!this.helpText) {
      return nothing;
    }
    return html` <mdc-text tagname='span' type='body-midsize-regular'>${this.helpText}</mdc-text> `;
  }

  protected renderClearButton() {
    if (!this.value) {
      return nothing;
    }
    return html`
      <mdc-button 
        class='clear-button'
        prefix-icon='cancel-regular'
        variant='tertiary'
        size="20"
        @click=${() => { this.value = ''; }}
        ?disabled=${this.disabled}
      ></mdc-button>
    `;
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
          <input 
            class='input focusringElement' 
            id="${this.id}" 
            type='text'
            value="${this.value}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            placeholder=${ifDefined(this.placeholder)} 
            @input=${(e: Event) => { this.value = (e.target as HTMLInputElement).value; }}
          />
        </slot>
        <slot name="trailing-button">${this.renderClearButton()}</slot>
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
