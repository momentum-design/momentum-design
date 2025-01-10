import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './input.styles';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { DEFAULTS } from './input.constants';
import { getHelperIcon } from './input.utils';
import type { ValidationType } from './input.type';
import type { IconNames } from '../icon/icon.types';

/**
 * mdc-input is a component that allows users to input text.
 *
 *  It contains:
 *
 * label field - describe the input field.
 *
 * label info icon - displayed next to the label.
 *
 * input field - contains the value
 *
 * help text or validation message - displayed below the input field.
 *
 * clear button - clear the input field.
 *
 * prefix text -displayed before the input field.
 *
 * leading icon - displayed before the input field.
 *
 * @tagname mdc-input
 *
 * @slot default - This is a default/unnamed slot
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-button
 */
class Input extends DisabledMixin(Component) {
  /**
   * The label of the input field. It is linked to the input field using the `for` attribute.
   */
  @property({ type: String }) label = '';

  /**
 * The value of the input field. It is a two-way binding property.
 */
  @property({ type: String, reflect: true }) value = '';

  /**
   * The placeholder text that is displayed when the input field is empty.
   */
  @property({ type: String }) placeholder = '';

  /**
   * required attribute of the input field.
   * If true, the consumer should indicate it on the label that the input field is required.
   */
  @property({ type: Boolean }) required = false;

  /**
   * readonly attribute of the input field. If true, the input field is read-only.
   */
  @property({ type: Boolean }) readonly = false;

  /**
   * The maximum number of characters that the input field can accept.
   */
  @property({ type: Number }) maxLength?: number;

  /**
   * The minimum number of characters that the input field can accept.
   */
  @property({ type: Number }) minLength?: number;

  /**
   * The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.
   */
  @property() helpTextType: ValidationType = DEFAULTS.VALIDATION;

  /**
   * The help text that is displayed below the input field.
   */
  @property({ type: String }) helpText = '';

  /**
   * @beta this attribute is in beta, and is subject to change (given the toggletip component is not ready yet)
   */
  @property({ type: String }) labelInfoText = '';

  /**
   * The prefix text that is displayed before the input field.
   */
  @property({ type: String }) prefixText = '';

  /**
   * The leading icon that is displayed before the input field.
   */
  @property({ type: String }) leadingIcon = '';

  protected renderLabel() {
    if (!this.label) {
      return nothing;
    }
    return html`<label for="${this.id}" class='input-label'>${this.label}</label>`;
  }

  protected renderLabelInfoToggleTip() {
    if (!this.labelInfoText) {
      return nothing;
    }
    return html`<mdc-icon name=${DEFAULTS.INFO_ICON_NAME} size="1.25" length-unit="rem"></mdc-icon>`;
  }

  protected renderPrefixText() {
    if (!this.prefixText) {
      return nothing;
    }
    return html`<mdc-text class="prefix-text" tagname='span' type='body-midsize-regular'>${this.prefixText}</mdc-text>`;
  }

  protected renderLeadingIcon() {
    if (!this.leadingIcon) {
      return nothing;
    }
    return html`
      <mdc-icon 
        class="leading-icon" 
        name=${this.leadingIcon as IconNames} 
        size="1" 
        length-unit="rem">
      </mdc-icon>
    `;
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
    return html`
      <mdc-button 
        class='clear-button ${!this.value ? 'hidden' : ''}'
        prefix-icon='cancel-regular'
        variant='tertiary'
        size="20"
        aria-label="Clear"
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
      <div class="input-container focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
       <section class="text-container">
       <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
        <slot name="input">
          <input 
            class='input' 
            id="${this.id}"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            placeholder=${ifDefined(this.placeholder)}
            aria-required=${this.required}
            aria-invalid=${this.helpTextType === 'error'}
            @input=${(e: Event) => { this.value = (e.target as HTMLInputElement).value; }}
          />
        </slot>
       </section>
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
