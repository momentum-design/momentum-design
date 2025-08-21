import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import FormfieldWrapper from '../formfieldwrapper';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import type { IconNames } from '../icon/icon.types';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { FormInternalsMixin, AssociatedFormControl } from '../../utils/mixins/FormInternalsMixin';
import { KEYS } from '../../utils/keys';

import type { AutoCapitalizeType, AutoCompleteType, InputType } from './input.types';
import { AUTO_CAPITALIZE, AUTO_COMPLETE, DEFAULTS, PREFIX_TEXT_OPTIONS } from './input.constants';
import styles from './input.styles';
/**
 * mdc-input is a component that allows users to input text.
 *  It contains:
 * - label field - describe the input field.
 * - input field - contains the value
 * - help text or validation message - displayed below the input field.
 * - trailing button - it displays a clear the input field.
 * - prefix text - displayed before the input field.
 * - leading icon - displayed before the input field.
 * - clear-aria-label - aria label for the trailing button.
 * - all the attributes of the input field.
 *
 * @tagname mdc-input
 *
 * @event input - (React: onInput) This event is dispatched when the value of the input field changes (every press).
 * @event change - (React: onChange) This event is dispatched when the value of the input field changes (on blur).
 * @event focus - (React: onFocus) This event is dispatched when the input receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the input loses focus.
 * @event clear - (React: onClear) This event is dispatched when the input text is cleared.
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-button
 * @dependency mdc-toggletip
 *
 * @cssproperty --mdc-input-disabled-border-color - Border color for the input container when disabled
 * @cssproperty --mdc-input-disabled-text-color - Text color for the input field when disabled
 * @cssproperty --mdc-input-disabled-background-color - Background color for the input field when disabled
 * @cssproperty --mdc-input-border-color - Border color for the input container
 * @cssproperty --mdc-input-text-color - Text color for the input field
 * @cssproperty --mdc-input-background-color - Background color for the input field
 * @cssproperty --mdc-input-selection-background-color - Background color for the selected text
 * @cssproperty --mdc-input-selection-text-color - Text color for the selected text
 * @cssproperty --mdc-input-support-text-color - Text color for the help text
 * @cssproperty --mdc-input-hover-background-color - Background color for the input field when hovered
 * @cssproperty --mdc-input-focused-background-color - Background color for the input field when focused
 * @cssproperty --mdc-input-focused-border-color - Border color for the input container when focused
 * @cssproperty --mdc-input-error-border-color - Border color for the input container when error
 * @cssproperty --mdc-input-warning-border-color - Border color for the input container when warning
 * @cssproperty --mdc-input-success-border-color - Border color for the input container when success
 * @cssproperty --mdc-input-primary-border-color - Border color for the input container when primary
 *
 */

class Input extends FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)) implements AssociatedFormControl {
  /**
   * The placeholder text that is displayed when the input field is empty.
   */
  @property({ type: String }) placeholder = '';

  /**
   * readonly attribute of the input field. If true, the input field is read-only.
   */
  @property({ type: Boolean }) readonly = false;

  /**
   * The prefix text that is displayed before the input field. It has a max length of 10 characters.
   * When the prefix text is set, make sure to set the 'data-aria-label'
   * attribute with the appropriate value for accessibility.
   */
  @property({ type: String, attribute: 'prefix-text' }) prefixText?: string;

  /**
   * The leading icon that is displayed before the input field.
   */
  @property({ type: String, attribute: 'leading-icon' }) leadingIcon?: IconNames;

  /**
   * The trailing button when set to true, shows a clear button that clears the input field.
   * @default false
   */
  @property({ type: Boolean, attribute: 'trailing-button' }) trailingButton = false;

  /**
   * The maximum number of characters that the input field can accept.
   */
  @property({ type: Number }) maxlength?: number;

  /**
   * The minimum number of characters that the input field can accept.
   */
  @property({ type: Number }) minlength?: number;

  /**
   * The autocapitalize attribute of the input field.
   * @default 'off'
   */
  @property({ type: String }) override autocapitalize: AutoCapitalizeType = AUTO_CAPITALIZE.OFF;

  /**
   * The autocomplete attribute of the input field.
   * @default 'off'
   */
  @property({ type: String }) autocomplete: AutoCompleteType = AUTO_COMPLETE.OFF;

  /**
   * If true, the input field is focused when the component is rendered.
   * @default false
   */
  @property({ type: Boolean }) override autofocus = false;

  /**
   * Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).
   */
  @property({ type: String }) dirname?: string;

  /**
   * The pattern attribute of the input field.
   * Specifies a regular expression that the input value must match for validation purposes.
   */
  @property({ type: String }) pattern?: string;

  /**
   * The list attribute of the input field.
   * Identifies a list of pre-defined options to suggest to the user.
   */
  @property({ type: String }) list?: string;

  /**
   * The size attribute of the input field.
   * Specifies the width of the input field.
   * @default undefined
   */
  @property({ type: Number }) size?: number | undefined;

  /**
   * Aria label for the trailing button. If trailing button is set to true, this label is used for the clear button.
   * @default ''
   */
  @property({ type: String, attribute: 'clear-aria-label' }) clearAriaLabel = '';

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateComplete
      .then(() => {
        if (this.inputElement) {
          this.setInputValidity();
          this.internals.setFormValue(this.inputElement.value);
        }
      })
      .catch(error => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
  }

  /** @internal */
  formResetCallback(): void {
    this.value = '';
    this.inputElement.value = '';
    this.setInputValidity();
    this.requestUpdate();
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    this.value = state;
  }

  /**
   * This function is called when the attribute changes.
   * It updates the validity of the input field based on the input field's validity.
   *
   * @param name - attribute name
   * @param old - old value
   * @param value - new value
   */
  override attributeChangedCallback(name: string, old: string | null, value: string | null): void {
    super.attributeChangedCallback(name, old, value);

    if (name === 'validation-message') {
      this.updateComplete
        .then(() => {
          this.setInputValidity();
        })
        .catch(error => {
          if (this.onerror) {
            this.onerror(error);
          }
        });
    }
  }

  private setInputValidity() {
    this.inputElement.setCustomValidity('');
    if (!this.inputElement.validity.valid && this.validationMessage) {
      this.inputElement.setCustomValidity(this.validationMessage);
    }
    this.setValidity();
  }

  /**
   * Updates the value of the input field.
   * Sets the form value.
   * @returns void
   */
  private updateValue() {
    this.value = this.inputElement.value;
    this.internals.setFormValue(this.inputElement.value);
  }

  /**
   * Handles the input event of the input field.
   * Updates the value and sets the validity of the input field.
   *
   */
  private onInput() {
    this.updateValue();
    this.setInputValidity();
    this.checkValidity();
  }

  /**
   * Handles the change event of the input field.
   * Updates the value and sets the validity of the input field.
   *
   * The 'change' event does not bubble up through the shadow DOM as it was not composed.
   * Therefore, we need to re-dispatch the same event to ensure it is propagated correctly.
   * Read more: https://developer.mozilla.org/en-US/docs/Web/API/Event/composed
   *
   * @param event - Event which contains information about the value change.
   */
  private onChange(event: Event) {
    this.updateValue();
    this.setInputValidity();
    const EventConstructor = event.constructor as typeof Event;
    this.dispatchEvent(new EventConstructor(event.type, event));
  }

  /**
   * Handles the keydown event of the input field.
   * If the key pressed is 'Enter', it submits the form.
   * @param event - Keyboard event
   */
  protected handleKeyDown(event: KeyboardEvent) {
    if (event.key === KEYS.ENTER) {
      this.form?.requestSubmit();
    }
  }

  /**
   * Renders the leading icon before the input field.
   * If the leading icon is not set, it will not be displayed.
   *
   * @returns void
   */
  protected renderLeadingIcon() {
    if (!this.leadingIcon) {
      return nothing;
    }
    return html`
      <mdc-icon
        class="leading-icon"
        part="leading-icon"
        name=${this.leadingIcon}
        size="${DEFAULTS.ICON_SIZE_VALUE}"
        length-unit="${DEFAULTS.ICON_SIZE_UNIT}"
      >
      </mdc-icon>
    `;
  }

  /**
   * Renders the prefix text before the input field.
   * If the prefix text is more than 10 characters,
   * - it will not be displayed.
   * - the validation messsage will be displayed.
   *
   *  Note: We are setting aria-hidden so that the screen reader does not read the prefix text.
   *  The consumers should set the appropriate aria-label for the input field using 'data-aria-label' attribute.
   * @returns void
   */
  protected renderPrefixText() {
    if (!this.prefixText) {
      return nothing;
    }
    return html`
      <mdc-text
        class="prefix-text"
        tagname="${DEFAULTS.PREFIX_TEXT_TAG}"
        type="${DEFAULTS.PREFIX_TEXT_TYPE}"
        aria-hidden="true"
      >
        ${this.prefixText.slice(0, PREFIX_TEXT_OPTIONS.MAX_LENGTH)}
      </mdc-text>
    `;
  }

  /**
   * Clears the input field.
   */
  protected clearInputText() {
    this.value = '';
    // focus the input field after clearing the text
    this.inputElement?.focus();
    this.dispatchEvent(new CustomEvent('clear', { bubbles: true, composed: true }));
  }

  /**
   * Renders the trailing button to clear the input field if the trailingButton is set to true.
   * @returns void
   */
  protected renderTrailingButton(show = false) {
    const showBtn = show || (this.value && this.trailingButton);
    if (!showBtn) {
      return nothing;
    }
    return html`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${!showBtn ? 'hidden' : ''}"
        prefix-icon="${DEFAULTS.CLEAR_BUTTON_ICON}"
        variant="${DEFAULTS.CLEAR_BUTTON_VARIANT}"
        size="${DEFAULTS.CLEAR_BUTTON_SIZE}"
        aria-label="${this.clearAriaLabel}"
        @click=${this.clearInputText}
        ?disabled=${this.disabled || this.readonly || !showBtn}
      ></mdc-button>
    `;
  }

  protected renderInputElement(type: InputType, hidePlaceholder = false) {
    const placeholderText = hidePlaceholder ? '' : this.placeholder;

    return html`<input
      aria-label="${this.dataAriaLabel ?? ''}"
      class="input"
      part="mdc-input"
      id="${this.id}"
      name="${this.name}"
      .value="${live(this.value)}"
      ?disabled="${this.disabled}"
      ?readonly="${this.readonly}"
      ?required="${this.required}"
      type="${type}"
      aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
      aria-invalid="${this.helpTextType === 'error' ? 'true' : 'false'}"
      placeholder=${ifDefined(placeholderText)}
      minlength=${ifDefined(this.minlength)}
      maxlength=${ifDefined(this.maxlength)}
      autocapitalize=${this.autocapitalize}
      autocomplete=${this.autocomplete}
      ?autofocus="${this.autofocus}"
      dirname=${ifDefined(this.dirname)}
      pattern=${ifDefined(this.pattern)}
      list=${ifDefined(this.list)}
      size=${ifDefined(this.size)}
      @input=${this.onInput}
      @change=${this.onChange}
      @keydown=${this.handleKeyDown}
    />`;
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div class="input-container mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
        <div class="input-section" part="input-section">
          <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
          <slot name="input">${this.renderInputElement(DEFAULTS.INPUT_TYPE)}</slot>
        </div>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.helpText ? this.renderHelperText() : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Input;
