import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { DEFAULTS, MDC_TEXT_OPTIONS } from './formfieldwrapper.constants';
import styles from './formfieldwrapper.styles';
import type { ValidationType } from './formfieldwrapper.types';
import { getHelperIcon } from './formfieldwrapper.utils';

/**
 * formfieldwrapper is a component that contains the label and helper/validation text
 *  that can be configured in various ways to suit different use cases (most of the input related components).
 * It is used as an internal component and is not intended to be used directly by consumers.
 *
 * @tagname mdc-formfieldwrapper
 *
 * @slot label-info - slot to add the label info icon
 *
 */
class FormfieldWrapper extends DisabledMixin(Component) {
  /**
   * The label of the input field. It is linked to the input field using the `for` attribute.
   */
  @property({ reflect: true, type: String }) label?: string;

  /**
   * The required label of the input field.
   * When an appropriate string value is set,
   * the input field is marked as required and the label is appended with this text.
   */
  @property({ type: String, reflect: true, attribute: 'required-label' }) requiredLabel?: string;

  /**
   * The unique id of the input field. It is used to link the input field with the label.
   * @default `mdc-input-${uuidv4()}`
   */
  @property({ type: String }) override id = '';

  /**
   * The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.
   */
  @property({ reflect: true, attribute: 'help-text-type' }) helpTextType: ValidationType = DEFAULTS.VALIDATION;

  /**
   * The help text that is displayed below the input field.
   */
  @property({ type: String, reflect: true, attribute: 'help-text' }) helpText?: string;

  /** @internal */
  protected shouldRenderLabel: Boolean = true;

  /**
   * creates the label element when the label property is set.
   * id is used to link the label with the input field.
   * @returns void
   */
  protected renderLabelElement() {
    if (!this.label) {
      return nothing;
    }

    return this.shouldRenderLabel
      ? html`<label for="${this.id}" id="${DEFAULTS.HEADING_ID}" class="mdc-label" part="label">${this.label}</label>`
      : html` <mdc-text
          id="${DEFAULTS.HEADING_ID}"
          tagname="${MDC_TEXT_OPTIONS.TAGNAME}"
          type="${MDC_TEXT_OPTIONS.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`;
  }

  protected renderRequiredLabel() {
    if (!this.requiredLabel) {
      return nothing;
    }

    return html`
      <mdc-text part="required-label" tagname=${MDC_TEXT_OPTIONS.TAGNAME} type=${MDC_TEXT_OPTIONS.TYPE}>
        (${this.requiredLabel})
      </mdc-text>
    `;
  }

  /**
   * creates the helpertext icon based on the helpTextType for validation.
   * If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.
   * @returns void
   */
  protected renderHelpTextIcon() {
    if (!this.helpText) {
      return nothing;
    }
    const helperIcon = getHelperIcon(this.helpTextType || DEFAULTS.VALIDATION);
    if (helperIcon && !this.disabled) {
      return html`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${helperIcon}></mdc-icon>`;
    }
    return nothing;
  }

  /**
   * creates the helper text component when the helpertext value is set.
   * It is also used to display the validation message based on the helpTextType.
   * @returns void
   */
  protected renderHelpText() {
    if (!this.helpText) {
      return nothing;
    }
    return html`
      <mdc-text
        id="${DEFAULTS.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${MDC_TEXT_OPTIONS.TAGNAME}
        type=${MDC_TEXT_OPTIONS.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `;
  }

  /**
   * renders the mdc-label-text container that contains the label and labelInfoToggleTip.
   * @returns void
   */
  protected renderLabel() {
    if (!this.label) return nothing;
    return html`<div class="mdc-label-text" part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      <slot name="required-label">${this.renderRequiredLabel()}</slot>
      <slot name="label-info"></slot>
    </div>`;
  }

  /**
   * renders the mdc-help-text container that contains the helpertext icon and helpertext.
   * @returns void
   */
  protected renderHelperText() {
    if (!this.helpText) {
      return nothing;
    }
    return html`<div class="mdc-help-text" part="mdc-help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default FormfieldWrapper;
