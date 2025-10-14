import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { v4 as uuidv4 } from 'uuid';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import type { PopoverPlacement, PopoverStrategy } from '../popover/popover.types';
import { BUTTON_VARIANTS } from '../button/button.constants';

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
 * @dependency mdc-text
 * @dependency mdc-icon
 * @dependency mdc-button
 * @dependency mdc-toggletip
 *
 * @slot label - Slot for the label element. If not provided, the `label` property will be used to render the label.
 * @slot toggletip - Slot for the toggletip info icon button. If not provided, the `toggletip-text` property will be used to render the info icon button and toggletip.
 * @slot help-icon - Slot for the helper/validation icon. If not provided, the icon will be rendered based on the `helpTextType` property.
 * @slot help-text - Slot for the helper/validation text. If not provided, the `helpText` property will be used to render the helper/validation text.
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 *
 * @cssproperty --mdc-label-font-size - Font size for the label text.
 * @cssproperty --mdc-label-font-weight - Font weight for the label text.
 * @cssproperty --mdc-label-line-height - Line height for the label text.
 * @cssproperty --mdc-label-color - Color for the label text.
 * @cssproperty --mdc-help-text-font-size - Font size for the help text.
 * @cssproperty --mdc-help-text-font-weight - Font weight for the help text.
 * @cssproperty --mdc-help-text-line-height - Line height for the help text.
 * @cssproperty --mdc-help-text-color - Color for the help text.
 * @cssproperty --mdc-required-indicator-color - Color for the required indicator text.
 */
class FormfieldWrapper extends DisabledMixin(Component) {
  /**
   * Indicates the unique identifier for the native input element.
   * Required for acccessibility.
   * @internal
   */
  protected inputId = `mdc-el-${uuidv4()}`;

  /**
   * The label of the input field. It is linked to the input field using the `for` attribute.
   */
  @property({ reflect: true, type: String }) label?: string;

  /**
   * The required attribute to indicate that the input field is required.
   * It is used to append a required indicator (*) to the label.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'required' }) required = false;

  /**
   * The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.
   */
  @property({ reflect: true, attribute: 'help-text-type' }) helpTextType: ValidationType = DEFAULTS.VALIDATION;

  /**
   * The help text that is displayed below the input field.
   */
  @property({ type: String, reflect: true, attribute: 'help-text' }) helpText?: string;

  /**
   * The toggletip text that is displayed when the label is hovered.
   * It is used to provide additional information about the label.
   */
  @property({ type: String, reflect: true, attribute: 'toggletip-text' }) toggletipText?: string;

  /**
   * The placement of the toggletip that is displayed when the info icon is hovered.
   * @default 'top'
   */
  @property({ type: String, reflect: true, attribute: 'toggletip-placement' })
  toggletipPlacement: PopoverPlacement = DEFAULTS.TOGGLETIP_PLACEMENT;

  @property({ type: String, reflect: true, attribute: 'toggletip-strategy' })
  toggletipStrategy: PopoverStrategy = DEFAULTS.TOGGLETIP_STRATEGY;

  /**
   * Aria label for the info icon that is displayed next to the label when `toggletipText` is set.
   * This is used for accessibility purposes to provide a description of the icon.
   */
  @property({ type: String, reflect: true, attribute: 'info-icon-aria-label' })
  infoIconAriaLabel?: string;

  /**
   * Determines whether the form field is read-only.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  readonly = false;

  /**
   * Determines whether the form field is soft-disabled.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'soft-disabled' })
  softDisabled = false;

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
      ? html`<label for="${this.inputId}" id="${DEFAULTS.HEADING_ID}" part="label">${this.label}</label>`
      : html` <mdc-text
          id="${DEFAULTS.HEADING_ID}"
          tagname="${MDC_TEXT_OPTIONS.TAGNAME}"
          type="${MDC_TEXT_OPTIONS.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`;
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
   * renders the label container that contains the label and labelInfoToggleTip.
   * @returns void
   */
  protected renderLabel() {
    if (!this.label) return nothing;
    const triggerId = `toggletip-trigger-${uuidv4()}`;
    const shouldDisableToggletip = this.disabled || this.softDisabled;

    return html`<div part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      ${this.required ? html`<span part="required-indicator">*</span>` : nothing}
      <slot name="toggletip">
        ${this.toggletipText
          ? html` <mdc-button
                part="info-icon-btn"
                prefix-icon="${DEFAULTS.INFO_ICON}"
                size="${DEFAULTS.ICON_SIZE}"
                variant="${BUTTON_VARIANTS.TERTIARY}"
                aria-label="${ifDefined(this.infoIconAriaLabel)}"
                ?disabled="${shouldDisableToggletip}"
                ?soft-disabled="${this.softDisabled}"
                id="${triggerId}"
              ></mdc-button>
              <mdc-toggletip
                part="label-toggletip"
                triggerid="${triggerId}"
                id="label-toggletip-id"
                placement="${this.toggletipPlacement}"
                strategy="${this.toggletipStrategy}"
                show-arrow
                >${this.toggletipText}</mdc-toggletip
              >`
          : nothing}
      </slot>
    </div>`;
  }

  /**
   * renders the help-text container that contains the helpertext icon and helpertext.
   * @returns void
   */
  protected renderHelperText() {
    if (!this.helpText) {
      return nothing;
    }
    return html`<div part="help-text-container">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default FormfieldWrapper;
