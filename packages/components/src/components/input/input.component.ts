import { CSSResult, html, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './input.styles';
import FormfieldWrapper from '../formfieldwrapper';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { DEFAULTS, PREFIX_TEXT_OPTIONS } from './input.constants';
import type { InputType } from './input.types';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import type { IconNames } from '../icon/icon.types';

/**
 * mdc-input is a component that allows users to input text.
 *  It contains:
 * - label field - describe the input field.
 * - label info icon - displayed next to the label.
 * - input field - contains the value
 * - help text or validation message - displayed below the input field.
 * - clear button - clear the input field.
 * - prefix text -displayed before the input field.
 * - leading icon - displayed before the input field.
 *
 * @tagname mdc-input
 *
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-button
 */
class Input extends DisabledMixin(FormfieldWrapper) {
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
  @property({ type: Number }) maxlength?: number;

  /**
   * The minimum number of characters that the input field can accept.
   */
  @property({ type: Number }) minlength?: number;

  /**
 * The type of the input field. It can be
 * - text
 * - password
 * - email
 * - number
 * - tel
 * - url
 * - search
 *
 * @default text
 */
  @property({ type: String }) type: InputType = DEFAULTS.TYPE;

/**
 * The prefix text that is displayed before the input field. It has a max length of 10 characters.
 */
@property({ type: String }) prefixText = '';

/**
 * The leading icon that is displayed before the input field.
 */
@property({ type: String }) leadingIcon = '';

  /**
   * @internal
   * The input element
   */
  @query('input') private inputElement!: HTMLInputElement;

  /**
   * @internal
   */
  @state() prevHelperText = '';

  /**
   * @internal
   */
  @state() prevHelperTextType: ValidationType = 'default';

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
    return html`
      <mdc-button 
        class='clear-button ${!this.value ? 'hidden' : ''}'
        prefix-icon='cancel-regular'
        variant='tertiary'
        size="20"
        aria-label="Clear"
        @click=${this.clearInputText}
        ?disabled=${this.disabled || this.readonly}
      ></mdc-button>
    `;
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div class="input-container mdc-focus-ring" part="input-container">
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
            type="${this.type}"
            placeholder=${ifDefined(this.placeholder)}
            minlength=${ifDefined(this.minlength)}
            maxlength=${ifDefined(this.maxlength)}
            @input=${(e: Event) => { this.value = (e.target as HTMLInputElement).value; }}
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
