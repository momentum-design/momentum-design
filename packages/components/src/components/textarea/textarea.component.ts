import { CSSResult, html, nothing, PropertyValueMap } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query, state } from 'lit/decorators.js';

import FormfieldWrapper from '../formfieldwrapper';
import { DEFAULTS as FORMFIELD_DEFAULTS, VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import { AUTO_CAPITALIZE } from '../input/input.constants';
import type { AutoCapitalizeType } from '../input/input.types';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';

import { AUTO_COMPLETE, WRAP, DEFAULTS } from './textarea.constants';
import type { WrapType, AutoCompleteType } from './textarea.types';
import styles from './textarea.styles';

/**
 * mdc-textarea component, which is used to get the multi-line text input from the user.
 * It contains:
 * - label: It is the title of the textarea field.
 * - required: A boolean attribute depicting that the textarea field is required.
 * - Textarea: It is the multi-line text input field.
 * - helper-text: It is the text that provides additional information about the textarea field.
 * - max-character-limit: It is the text that shows the character count of the textarea field.
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
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
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
 * @cssproperty --mdc-textarea-text-color - Text color for the textarea field
 * @cssproperty --mdc-textarea-background-color - Background color for the textarea field
 * @cssproperty --mdc-textarea-border-color - Border color for the textarea field
 * @cssproperty --mdc-textarea-text-secondary-normal - Text color for the character counter
 * @cssproperty --mdc-textarea-text-font-size - Font size for the textarea field
 * @cssproperty --mdc-textarea-text-line-height - Line height for the textarea field
 * @cssproperty --mdc-textarea-container-background-color - Background color for the textarea container
 */

class Textarea extends AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper))) {
  /**
   * The placeholder text that is displayed when the textarea field is empty.
   */
  @property({ type: String }) placeholder?: string;

  /**
   * The rows attribute specifies the visible number of lines in a text area.
   * @default 5
   */
  @property({ type: Number }) rows?: number = DEFAULTS.ROWS;

  /**
   * The cols attribute specifies the visible number of lines in a text area.
   * @default 40
   */
  @property({ type: Number }) cols?: number = DEFAULTS.COLS;

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
   * The maximum character limit for the textarea field for character counter.
   */
  @property({ type: Number, attribute: 'max-character-limit' }) maxCharacterLimit?: number;

  /**
   * Template string for the announcement that will be read by screen readers when the max character limit is set.
   * Consumers must use the placeholders `%{number-of-characters}` and `%{max-character-limit}` in the string,
   * which will be dynamically replaced with the actual values at runtime.
   * For example: `%{number-of-characters} out of %{max-character-limit} characters are typed.`
   * Example output: "93 out of 140 characters are typed."
   */
  @property({ type: String, attribute: 'character-limit-announcement' }) characterLimitAnnouncement?: string;

  /**
   * @internal
   * The textarea element
   */
  @query('textarea') override inputElement!: HTMLTextAreaElement;

  /** @internal */
  @state() private ariaLiveAnnouncer?: string;

  /** @internal */
  private characterLimitExceedingFired: boolean = false;

  protected get textarea(): HTMLTextAreaElement {
    return this.inputElement;
  }

  override connectedCallback(): void {
    super.connectedCallback();

    // Set the default value to the textarea field if the value is set through the text content directly
    this.value = this.textContent?.trim() || this.value;

    this.updateComplete
      .then(() => {
        if (this.textarea) {
          this.textarea.checkValidity();
          this.setTextareaValidity();
          this.internals.setFormValue(this.textarea.value);
        }
      })
      .catch(error => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
  }

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    // set the element to auto focus if autoFocusOnMount is set to true
    // before running the super method, so that the AutoFocusOnMountMixin can use it
    // to focus the correct element
    if (this.inputElement && this.autoFocusOnMount) {
      this.elementToAutoFocus = this.inputElement;
    }
    super.firstUpdated(_changedProperties);
  }

  private setTextareaValidity() {
    if (this.required && this.validationMessage && this.value === '') {
      this.textarea.setCustomValidity(this.validationMessage);
    } else if (
      this.maxCharacterLimit &&
      this.value.length > this.maxCharacterLimit &&
      this.helpTextType === VALIDATION.ERROR &&
      this.helpText
    ) {
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
  formStateRestoreCallback(state: string): void {
    this.value = state;
  }

  /**
   * Handles the value change of the textarea field.
   * Sets the form value and updates the validity of the textarea field.
   * @returns void
   */
  handleValueChange() {
    this.updateComplete
      .then(() => {
        this.setTextareaValidity();
      })
      .catch(error => {
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
  override attributeChangedCallback(name: string, old: string | null, value: string | null): void {
    super.attributeChangedCallback(name, old, value);

    const validationRelatedAttributes = ['maxlength', 'minlength', 'required'];

    if (validationRelatedAttributes.includes(name)) {
      this.updateComplete
        .then(() => {
          this.setTextareaValidity();
        })
        .catch(error => {
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
    this.announceMaxLengthWarning();
  }

  /**
   * Announces the character limit warning based on the current value length.
   * If the value length exceeds the max character limit, the help text is announced (if help text is present).
   * If the value length does not exceed the max character limit, then the character limit announcement is announced.
   */
  private announceMaxLengthWarning() {
    this.ariaLiveAnnouncer = '';
    if (!this.maxCharacterLimit || this.value.length === 0) {
      return;
    }
    if (this.helpText && this.value.length > this.maxCharacterLimit) {
      // We need to assign the same value multiple times, when the input reaches the max limit,
      // Lit does a `===` strict comparison and doesn't update the value
      // Hence we need to manually wait for the update to complete and then assign the value.
      this.updateComplete
        .then(() => {
          this.ariaLiveAnnouncer = this.helpText;
        })
        .catch(() => {});
    } else if (this.characterLimitAnnouncement && this.value.length <= this.maxCharacterLimit) {
      this.ariaLiveAnnouncer = this.characterLimitAnnouncement
        .replace('%{number-of-characters}', this.value.length.toString())
        .replace('%{max-character-limit}', this.maxCharacterLimit.toString());
    }
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

  protected renderCharacterCounter() {
    if (!this.maxCharacterLimit) {
      return nothing;
    }
    return html`
      <mdc-text part="character-counter" tagname="span" type=${DEFAULTS.CHARACTER_COUNTER_TYPE}>
        ${this.value.length}/${this.maxCharacterLimit}
      </mdc-text>
    `;
  }

  protected renderTextareaFooter() {
    if (!this.helpText && !this.maxCharacterLimit) {
      return nothing;
    }
    return html` <div part="textarea-footer">${this.renderHelperText()} ${this.renderCharacterCounter()}</div> `;
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div class="mdc-focus-ring" part="textarea-container">
        <textarea
          aria-label="${this.dataAriaLabel ?? ''}"
          part="textarea"
          id="${this.inputId}"
          name="${this.name}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          placeholder=${ifDefined(this.placeholder)}
          rows=${ifDefined(this.rows)}
          cols=${ifDefined(this.cols)}
          wrap=${ifDefined(this.wrap)}
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
        <mdc-screenreaderannouncer
          identity="${this.inputId}"
          announcement="${ifDefined(this.ariaLiveAnnouncer)}"
          data-aria-live="polite"
        ></mdc-screenreaderannouncer>
      </div>
      ${this.renderTextareaFooter()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Textarea;
