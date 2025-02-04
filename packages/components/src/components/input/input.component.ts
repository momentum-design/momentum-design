import { CSSResult, html, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './input.styles';
import FormfieldWrapper from '../formfieldwrapper';
import { NameMixin } from '../../utils/mixins/NameMixin';
import { PREFIX_TEXT_OPTIONS } from './input.constants';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import type { IconNames } from '../icon/icon.types';
import type { AutoCapitalizeType } from './input.types';
/**
 * mdc-input is a component that allows users to input text.
 *  It contains:
 * - label field - describe the input field.
 * - label info icon - displayed next to the label.
 * - input field - contains the value
 * - help text or validation message - displayed below the input field.
 * - clear button - clear the input field.
 * - prefix text - displayed before the input field.
 * - leading icon - displayed before the input field.
 *
 * @tagname mdc-input
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-button
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
class Input extends NameMixin(FormfieldWrapper) {
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
   * The prefix text that is displayed before the input field. It has a max length of 10 characters.
   */
  @property({ type: String, attribute: 'prefix-text' }) prefixText = '';

  /**
   * The leading icon that is displayed before the input field.
   */
  @property({ type: String, attribute: 'leading-icon' }) leadingIcon = '';

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
  @property({ type: String }) override autocapitalize: AutoCapitalizeType = 'off';

  /**
   * The autocomplete attribute of the input field.
   * @default 'off'
   */
  @property({ type: String }) autocomplete: any = 'off';

  /**
   * If true, the input field is focused when the component is rendered.
   * @default false
   */
  @property({ type: Boolean }) override autofocus = false;

  /**
   * Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).
   * @default ''
   */
  @property({ type: String }) dirname?: string;

  /**
   * The pattern attribute of the input field.
   * Specifies a regular expression that the input value must match for validation purposes.
   * @default ''
   */
  @property({ type: String }) pattern?: string;

  /**
   * The list attribute of the input field.
   * Identifies a list of pre-defined options to suggest to the user.
   * @default ''
   */
  @property({ type: String }) list = '';

  /**
   * The size attribute of the input field.
   * Specifies the width of the input field.
   * @default undefined
   */
  @property({ type: Number }) size?: number | undefined;

  @state() internalValue = '';

  @property()
  set value(val: string) {
    this.internalValue = val;
    this.internals.setFormValue(val);

    this.updateComplete.then(() => {
      this.setValidityFromInput();
    }).catch((error) => {
      if (this.onerror) {
        this.onerror(error);
      }
    });
  }

  get value(): string {
    return this.internalValue;
  }

  checkValidity(): boolean {
    this.setValidityFromInput();
    return this.internals.checkValidity();
  }

  reportValidity() {
    this.setValidityFromInput();
    return this.internals.reportValidity();
  }

  /** @internal */
  private internals: ElementInternals;

  /** @internal */
  static formAssociated = true;

  /** @internal */
  get form(): HTMLFormElement | null {
    return this.internals.form;
  }

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

    /**
   * @internal
   * The input element
   */
    @query('input') private inputElement!: HTMLInputElement;

    override connectedCallback(): void {
      super.connectedCallback();

      this.updateComplete.then(() => {
        this.inputElement.checkValidity();
        this.setValidityFromInput();
        this.internals.setFormValue(this.inputElement.value);
      }).catch((error) => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
    }

  /**
   * @internal
   */
  @state() prevHelperText = '';

  /**
   * @internal
   */
  @state() prevHelperTextType: ValidationType = 'default';

  override attributeChangedCallback(
    name: string,
    old: string | null,
    value: string | null,
  ): void {
    super.attributeChangedCallback(name, old, value);

    const validationRelatedAttributes = [
      'maxlength',
      'minlength',
      'pattern',
      'required',
    ];

    if (validationRelatedAttributes.includes(name)) {
      this.updateComplete.then(() => {
        this.setValidityFromInput();
      }).catch((error) => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
    }
  }

  private setValidityFromInput() {
    if (this.inputElement) {
      this.internals.setValidity(
        this.inputElement.validity,
        this.inputElement.validationMessage,
        this.inputElement,
      );
    }
  }

  private updateValue() {
    this.internalValue = this.inputElement.value;
    this.internals.setFormValue(this.inputElement.value);
  }

  private onInput() {
    this.updateValue();
    this.setValidityFromInput();
  }

  private onChange(event: Event) {
    this.updateValue();
    this.setValidityFromInput();
    this.dispatchEvent(new Event('change', event));
  }

  protected renderLeadingIcon() {
    if (!this.leadingIcon) {
      return nothing;
    }
    return html`
      <mdc-icon 
        class="leading-icon" 
        part="leading-icon"
        name=${this.leadingIcon as IconNames} 
        size="1" 
        length-unit="rem">
      </mdc-icon>
    `;
  }

  protected renderPrefixText() {
    if (!this.prefixText) {
      return nothing;
    }
    if (this.prefixText.length > PREFIX_TEXT_OPTIONS.MAX_LENGTH) {
      if (this.prevHelperText === '' && this.helpText) {
        this.prevHelperText = this.helpText;
        this.prevHelperTextType = this.helpTextType;
      }
      this.helpText = PREFIX_TEXT_OPTIONS.HELPERTEXT;
      this.helpTextType = PREFIX_TEXT_OPTIONS.VALIDATION;
      return nothing;
    }
    if (this.prevHelperText !== '' && this.helpText === PREFIX_TEXT_OPTIONS.HELPERTEXT) {
      this.helpText = this.prevHelperText;
      this.helpTextType = this.prevHelperTextType;
      this.prevHelperText = '';
    }
    return html`<mdc-text class="prefix-text" tagname='span' type='body-midsize-regular'>${this.prefixText}</mdc-text>`;
  }

  private clearInputText() {
    this.value = '';
    // focus the input field after clearing the text
    this.inputElement?.focus();
  }

  protected renderTrailingButton() {
    if (!this.trailingButton) {
      return nothing;
    }
    return html`
      <mdc-button 
        class='clear-button ${!this.value ? 'hidden' : ''}'
        prefix-icon='cancel-bold'
        variant='tertiary'
        size="20"
        aria-label="Clear"
        @click=${this.clearInputText}
        ?disabled=${this.disabled || this.readonly || !this.value}
      ></mdc-button>
    `;
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div class="input-container mdc-focus-ring" part="input-container">
        <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
       <section class="input-section" part="input-section">
       <slot name="input-prefix-text">${this.renderPrefixText()}</slot>
        <slot name="input">
          <input 
            class='input' 
            id="${this.id}"
            .value="${this.internalValue}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            type="text"
            placeholder=${ifDefined(this.placeholder)}
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
          />
        </slot>
       </section>
        <slot name="trailing-button">${this.renderTrailingButton()}</slot>
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Input;
