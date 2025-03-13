import { CSSResult, html, nothing, PropertyValueMap } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query } from 'lit/decorators.js';
import styles from './textarea.styles';
import FormfieldWrapper from '../formfieldwrapper';
import { DEFAULTS as FORMFIELD_DEFAULTS, VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { AUTO_CAPITALIZE } from '../input/input.constants';
import type { AutoCapitalizeType } from '../input/input.types';
import { AUTO_COMPLETE, WRAP, DEFAULTS } from './textarea.constants';
import type { WrapType, AutoCompleteType } from './textarea.types';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';

/**
 * mdc-textarea component, which is used to get the multi-line text input from the user.
 * It contains:
 * - label: It is the title of the textarea field.
 * - required-label: A string depicting that the textarea field is required.
 * - Textarea: It is the multi-line text input field.
 * - helper-text: It is the text that provides additional information about the textarea field.
 * - max-character-limit: It is the text that shows the character count of the textarea field.
 * - clear-button: A boolean value when marked to true represents a button that can
 *   clear the text value within the textarea field.
 * - Error, Warning, Success, Priority Help Text type: It is the text that provides additional information
 *   about the textarea field based on the validation state.
 * - limitexceeded: It is the event that is dispatched when the character limit exceeds or restored.
 *   This event exposes 3 properties:
 *   - currentCharacterCount - the current number of characters in the textarea field,
 *   - maxCharacterLimit - the maximum number of characters allowed in the textarea field,
 *   - value - the current value of the textarea field,
 *
 * **Note**: Consumers must set the help-text-type with 'error' and
 * help-text attribute with the error message using limitexceeded event.
 * The same help-text value will be used for the validation message to be displayed.
 *
 * @tagname mdc-textarea
 *
 * @event input - (React: onInput) This event is dispatched when the value of the textarea field changes (every press).
 * @event change - (React: onChange) This event is dispatched when the value of the textarea field changes (on blur).
 * @event focus - (React: onFocus) This event is dispatched when the textarea receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the textarea loses focus.
 * @event limitexceeded - (React: onLimitExceeded) This event is dispatched once when the character limit
 * exceeds or restored.
 *
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-button
 *
 * @cssproperty --mdc-textarea-disabled-border-color - Border color for the textarea container when disabled
 * @cssproperty --mdc-textarea-disabled-text-color - Text color for the textarea field when disabled
 * @cssproperty --mdc-textarea-disabled-background-color - Background color for the textarea field when disabled
 * @cssproperty --mdc-textarea-text-color - Text color for the textarea field
 * @cssproperty --mdc-textarea-background-color - Background color for the textarea field
 * @cssproperty --mdc-textarea-border-color - Border color for the textarea field
 * @cssproperty --mdc-textarea-text-secondary-normal - Text color for the character counter
 * @cssproperty --mdc-textarea-error-border-color - Border color for the error related help text
 * @cssproperty --mdc-textarea-warning-border-color - Border color for the warning related help text
 * @cssproperty --mdc-textarea-success-border-color - Border color for the success related help text
 * @cssproperty --mdc-textarea-primary-border-color - Border color for the priority related help text
 * @cssproperty --mdc-textarea-hover-background-color - Background color for the textarea container when hover
 * @cssproperty --mdc-textarea-focused-background-color - Background color for the textarea container when focused
 * @cssproperty --mdc-textarea-focused-border-color - Border color for the textarea container when focused
 */

class Textarea extends FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)) {
  /**
   * The placeholder text that is displayed when the textarea field is empty.
   */
  @property({ type: String }) placeholder?: string;

  /**
   * readonly attribute of the textarea field. If true, the textarea field is read-only.
   * @default false
   */
  @property({ type: Boolean }) readonly = false;

  /**
   * The rows attribute specifies the visible number of lines in a text area.
   * @default 5
   */
  @property({ type: Number }) rows = DEFAULTS.ROWS;

  /**
   * The cols attribute specifies the visible number of lines in a text area.
   * @default 40
   */
  @property({ type: Number }) cols = DEFAULTS.COLS;

  /**
   * The wrap attribute specifies how the text in a text area is to be wrapped when submitted in a form.
   * @default 'soft'
   */
  @property({ type: String }) wrap: WrapType = WRAP.SOFT;

  /**
   * The autocapitalize attribute of the textarea field.
   * @default 'off'
   */
  @property({ type: String }) override autocapitalize: AutoCapitalizeType = AUTO_CAPITALIZE.OFF;

  /**
   * The autocomplete attribute of the textarea field.
   * @default 'off'
   */
  @property({ type: String }) autocomplete: AutoCompleteType = AUTO_COMPLETE.OFF;

  /**
   * If true, the textarea field is focused when the component is rendered.
   * @default false
   */
  @property({ type: Boolean }) override autofocus: boolean = false;

  /**
   * Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).
   */
  @property({ type: String }) dirname?: string;

  /**
   * The maximum number of characters that the textarea field can accept.
   */
  @property({ type: Number }) maxlength?: number;

  /**
   * The minimum number of characters that the textarea field can accept.
   */
  @property({ type: Number }) minlength?: number;

  /**
   * The clear button when set to true, shows a clear button that clears the textarea field.
   * @default false
   */
  @property({ type: Boolean, attribute: 'clear-button' }) clearButton = false;

  /**
   * Aria label for the clear button. If clear button is set to true, this label is used for the clear button.
   * @default ''
   */
  @property({ type: String, attribute: 'clear-aria-label' }) clearAriaLabel = '';

  /**
   * maximum character limit for the textarea field for character counter.
   */
  @property({ type: Number, attribute: 'max-character-limit' }) maxCharacterLimit?: number;

    /**
   * @internal
   * The textarea element
   */
    @query('textarea') override inputElement!: HTMLTextAreaElement;

    private characterLimitExceedingFired: boolean = false;

    protected get textarea(): HTMLTextAreaElement {
      return this.inputElement;
    }

    constructor() {
      super();
      // Set the default value to the textarea field if the value is set through the text content directly
      this.value = this.textContent?.trim() || this.value;
    }

    override connectedCallback(): void {
      super.connectedCallback();

      this.updateComplete.then(() => {
        if (this.textarea) {
          this.textarea.checkValidity();
          this.setTextareaValidity();
          this.internals.setFormValue(this.textarea.value);
        }
      }).catch((error) => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
    }

    private setTextareaValidity() {
      if (this.requiredLabel && this.validationMessage && this.value === '') {
        this.textarea.setCustomValidity(this.validationMessage);
      } else if (this.maxCharacterLimit
        && this.value.length > this.maxCharacterLimit
        && this.helpTextType === VALIDATION.ERROR
        && this.helpText) {
        // Set custom validity if the character limit is exceeded to stop form submission
        // helptext and helptexttype will be set by the consumers.
        this.textarea.setCustomValidity(this.helpText);
      } else {
        this.textarea.setCustomValidity('');
      }
      this.setValidity();
    }

    /** @internal */
    formResetCallback(): void {
      this.value = '';
      this.requestUpdate();
    }

    /** @internal */
    formStateRestoreCallback(
      state: string,
    ): void {
      this.value = state;
    }

    /**
   * Handles the value change of the textarea field.
   * Sets the form value and updates the validity of the textarea field.
   * @returns void
   */
    handleValueChange() {
      this.updateComplete.then(() => {
        this.setTextareaValidity();
      }).catch((error) => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
    }

    protected override updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      super.updated(changedProperties);
      if (changedProperties.has('value')) {
        this.handleValueChange();
        this.handleCharacterOverflowStateChange();
      }
    }

    /**
   * This function is called when the attribute changes.
   * It updates the validity of the textarea field based on the textarea field's validity.
   *
   * @param name - attribute name
   * @param old - old value
   * @param value - new value
   */
    override attributeChangedCallback(
      name: string,
      old: string | null,
      value: string | null,
    ): void {
      super.attributeChangedCallback(name, old, value);

      const validationRelatedAttributes = [
        'maxlength',
        'minlength',
        'required',
      ];

      if (validationRelatedAttributes.includes(name)) {
        this.updateComplete.then(() => {
          this.setTextareaValidity();
        }).catch((error) => {
          if (this.onerror) {
            this.onerror(error);
          }
        });
      }
    }

    /**
   * Dispatches the character overflow state change event.
   * @returns void
   */
    private dispatchCharacterOverflowStateChangeEvent() {
      this.dispatchEvent(
        new CustomEvent('limitexceeded', {
          detail: {
            currentCharacterCount: this.value.length,
            maxCharacterLimit: this.maxCharacterLimit,
            value: this.value,
          },
          bubbles: true,
          composed: true,
        }),
      );
    }

    /**
     * Handles the character overflow state change.
     * Dispatches the character overflow state change event if the character limit is exceeded or restored.
     * @returns void
    */
    private handleCharacterOverflowStateChange() {
      if (this.maxCharacterLimit) {
        if (this.value.length > this.maxCharacterLimit && !this.characterLimitExceedingFired) {
          this.dispatchCharacterOverflowStateChangeEvent();
          this.characterLimitExceedingFired = true;
        } else if (this.value.length <= this.maxCharacterLimit && this.characterLimitExceedingFired) {
          this.dispatchCharacterOverflowStateChangeEvent();
          this.characterLimitExceedingFired = false;
        }
      }
    }

    /**
   * Updates the value of the textarea field.
   * Sets the form value.
   * @returns void
   */
    private updateValue() {
      this.value = this.textarea.value;
      this.internals.setFormValue(this.textarea.value);
    }

    /**
   * Handles the change event of the textarea field.
   * Updates the value and sets the validity of the textarea field.
   *
   * The 'change' event does not bubble up through the shadow DOM as it was not composed.
   * Therefore, we need to re-dispatch the same event to ensure it is propagated correctly.
   * Read more: https://developer.mozilla.org/en-US/docs/Web/API/Event/composed
   *
   * @param event - Event which contains information about the value change.
   */
    private onChange(event: Event) {
      this.updateValue();
      const EventConstructor = event.constructor as typeof Event;
      this.dispatchEvent(new EventConstructor(event.type, event));
    }

    /**
     *  Handles the keydown event of the textarea field.
     * Clears the textarea field when the 'Enter' key is pressed.
     * @param event - Keyboard event
     * @returns void
    */
    private handleKeyDown(event: KeyboardEvent) {
      if (['Enter'].includes(event.key)) {
        event.preventDefault();
        this.clearInputText();
      }
    }

    /**
      * Clears the textarea field.
      * @returns void
    */
    private clearInputText() {
      this.value = '';
      this.textarea.focus();
    }

    /**
   * Renders the clear button to clear the textarea field if the clearButton is set to true.
   * @returns void
   */
    protected renderClearButton() {
      if (!this.clearButton) {
        return nothing;
      }
      return html`
        <mdc-button
          part='clear-button'
          class='own-focus-ring ${!this.value ? 'hidden' : ''}'
          prefix-icon='${DEFAULTS.CLEAR_BUTTON_ICON}'
          variant='${DEFAULTS.CLEAR_BUTTON_VARIANT}'
          size="${DEFAULTS.CLEAR_BUTTON_SIZE}"
          aria-label="${this.clearAriaLabel}"
          ?disabled=${this.disabled || this.readonly || !this.value}
          @click=${this.clearInputText}
          @keydown=${this.handleKeyDown}
        ></mdc-button>
      `;
    }

    protected renderCharacterCounter() {
      if (!this.maxCharacterLimit) {
        return nothing;
      }
      return html`
      <mdc-text
        part="character-counter"
        tagname="span"
        type=${DEFAULTS.CHARACTER_COUNTER_TYPE}
      >
      ${this.value.length < 10 ? `0${this.value.length}` : this.value.length}/${this.maxCharacterLimit}
      </mdc-text>
    `;
    }

    protected renderTextareaFooter() {
      if (!this.helpText && !this.maxCharacterLimit) {
        return nothing;
      }
      return html`
        <div part="textarea-footer">
          ${this.renderHelperText()}
          ${this.renderCharacterCounter()}
        </div>
      `;
    }

    public override render() {
      return html`
      ${this.renderLabel()}
      <div class="textarea-container mdc-focus-ring" part="textarea-container">
        <textarea
          aria-label="${this.dataAriaLabel ?? ''}"
          part='textarea'
          id="${this.id}"
          name="${this.name}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${!!this.requiredLabel}"
          placeholder=${ifDefined(this.placeholder)}
          rows=${ifDefined(this.rows)}
          cols=${ifDefined(this.cols)}
          wrap=${ifDefined(this.wrap)}
          ?autofocus="${this.autofocus}"
          autocapitalize=${this.autocapitalize}
          autocomplete=${this.autocomplete}
          minlength=${ifDefined(this.minlength)}
          maxlength=${ifDefined(this.maxlength)}
          dirname=${ifDefined(this.dirname)}
          @input=${this.updateValue}
          @change=${this.onChange}
          aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
          aria-invalid="${this.helpTextType === 'error' ? 'true' : 'false'}"
        ></textarea>
        ${this.renderClearButton()}
        </div>
        ${this.renderTextareaFooter()}
        `;
    }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Textarea;
