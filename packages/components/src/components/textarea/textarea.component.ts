import { CSSResult, html, nothing, PropertyValueMap } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property, query } from 'lit/decorators.js';
import styles from './textarea.styles';
import FormfieldWrapper from '../formfieldwrapper';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import { AUTO_CAPITALIZE } from '../input/input.constants';
import type { AutoCapitalizeType } from '../input/input.types';
import { AUTO_COMPLETE, WRAP, DEFAULTS } from './textarea.constants';
import type { WrapType, AutoCompleteType } from './textarea.types';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';

/**
 * textarea component, which ...
 *
 * @tagname mdc-textarea
 *
 * @slot default - This is a default/unnamed slot
 */
class Textarea extends FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)) implements AssociatedFormControl {
  /**
   * The placeholder text that is displayed when the textarea field is empty.
   */
  @property({ type: String }) placeholder = '';

  /**
   * readonly attribute of the input field. If true, the input field is read-only.
   */
  @property({ type: Boolean }) readonly = false;

  /**
   * The rows attribute specifies the visible number of lines in a text area.
   */
  @property({ type: Number }) rows = 5;

  /**
   * The cols attribute specifies the visible number of lines in a text area.
   */
  @property({ type: Number }) cols = 20;

  /**
   * The wrap attribute specifies how the text in a text area is to be wrapped when submitted in a form.
   */
  @property({ type: String }) wrap: WrapType = WRAP.SOFT;

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
  @property({ type: Boolean }) override autofocus: boolean = false;

  /**
   * Specifies the name of the directionality of text for submission purposes (e.g., "rtl" for right-to-left).
   */
  @property({ type: String }) dirname?: string;

  /**
   * The maximum number of characters that the input field can accept.
   */
  @property({ type: Number }) maxlength?: number;

  /**
   * The minimum number of characters that the input field can accept.
   */
  @property({ type: Number }) minlength?: number;

  /**
   * The trailing button when set to true, shows a clear button that clears the textarea field.
   * @default false
   */
  @property({ type: Boolean, attribute: 'cancel-button' }) cancelButton = false;

  /**
   * Aria label for the trailing button. If trailing button is set to true, this label is used for the clear button.
   * @default ''
   */
  @property({ type: String, attribute: 'clear-aria-label' }) clearAriaLabel = '';

  /**
   * maximum character limit for the textarea field for character counter.
   */
  @property({ type: Number, attribute: 'max-character-limit' }) maxCharacterLimit?: number;

    /**
   * @internal
   * The input element
   */
    @query('textarea') private textarea!: HTMLTextAreaElement;

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
      if (this.validationMessage && this.value === '') {
        this.textarea.setCustomValidity(this.validationMessage);
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
   * Handles the value change of the input field.
   * Sets the form value and updates the validity of the input field.
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
      }
    }

    /**
   * This function is called when the attribute changes.
   * It updates the validity of the input field based on the input field's validity.
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
   * Updates the value of the input field.
   * Sets the form value.
   * @returns void
   */
    private updateValue() {
      this.value = this.textarea.value;
      this.internals.setFormValue(this.textarea.value);
    }

    /**
   * Handles the input event of the input field.
   * Updates the value and sets the validity of the input field.
   *
   */
    private onInput() {
      this.updateValue();
      this.setTextareaValidity();
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
      this.setTextareaValidity();
      const EventConstructor = event.constructor as typeof Event;
      this.dispatchEvent(new EventConstructor(event.type, event));
    }

    /**
      * Clears the input field.
    */
    private clearInputText(event: Event) {
      event.preventDefault();
      this.textarea.value = '';
      this.updateValue();
      // focus the input field after clearing the text
      this.textarea?.focus();
    }

    /**
   * Renders the trailing button to clear the input field if the trailingButton is set to true.
   * @returns void
   */
    protected renderCancelButton() {
      if (!this.cancelButton) {
        return nothing;
      }
      return html`
    <mdc-button 
      part='cancel-button'
      class='${!this.value ? 'hidden' : ''}'
      prefix-icon='${DEFAULTS.CLEAR_BUTTON_ICON}'
      variant='${DEFAULTS.CLEAR_BUTTON_VARIANT}'
      size="${DEFAULTS.CLEAR_BUTTON_SIZE}"
      aria-label="${this.clearAriaLabel}"
      ?disabled=${this.disabled || this.readonly || !this.value}
      @click=${this.clearInputText}
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

    public override render() {
      return html`
      ${this.renderLabel()}
      <div class="textarea-container mdc-focus-ring" part="textarea-container">
          <textarea 
            aria-label="${this.dataAriaLabel ?? ''}"
            part='textarea'
            id="${this.id}"
            name="${this.name}"
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
            @input=${this.onInput}
            @change=${this.onChange}
            aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
          ></textarea>
        ${this.renderCancelButton()}
        </div>
        <div part="textarea-footer">
          ${this.helpText ? this.renderHelperText() : nothing}
          ${this.renderCharacterCounter()}
        </div>`;
    }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Textarea;
