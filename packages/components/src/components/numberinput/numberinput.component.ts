import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';

import Input from '../input/input.component';
import { INPUT_MODE, INPUT_TYPE } from '../input/input.constants';
import type { InputModeType, InputType } from '../input/input.types';

import { DEFAULTS } from './numberinput.constants';
import styles from './numberinput.styles';

/**
 * @tagname mdc-numberinput
 *
 * @event input - (React: onInput) This event is dispatched when the value of the number field changes (every press).
 * @event change - (React: onChange) This event is dispatched when the value of the number field changes (on blur).
 * @event focus - (React: onFocus) This event is dispatched when the number field receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the number field loses focus.
 * @event clear - (React: onClear) This event is dispatched when the number field is cleared.
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-button
 * @dependency mdc-toggletip
 *
 * @slot label - Slot for the label element. If not provided, the `label` property will be used to render the label.
 * @slot toggletip - Slot for the toggletip info icon button. If not provided, the `toggletip-text` property will be used to render the info icon button and toggletip.
 * @slot help-icon - Slot for the helper/validation icon. If not provided, the icon will be rendered based on the `helpTextType` property.
 * @slot help-text - Slot for the helper/validation text. If not provided, the `helpText` property will be used to render the helper/validation text.
 * @slot input-leading-icon - Slot for the leading icon before the input field. If not provided, the `leadingIcon` property will be used to render the leading icon.
 * @slot input-prefix-text - Slot for the prefix text before the input field. If not provided, the `prefixText` property will be used to render the prefix text.
 * @slot trailing-button - Slot for the trailing content. If not provided, the increment/decrement spinner buttons are rendered by default; set `hideSpinnerButtons` to true to render the clear button instead (when `trailingButton` is set to true).
 *
 * @csspart input-container - The container that wraps the input field, leading icon, prefix text, and trailing content.
 * @csspart input-section - The container that wraps the input field and prefix text.
 * @csspart input-text - The input field element.
 * @csspart spinner-buttons - The container that wraps the increment and decrement spinner buttons.
 * @csspart spinner-button - Each of the increment/decrement spinner button elements.
 * @csspart label - The label element.
 * @csspart helper-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element.
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
 * @cssproperty --mdc-input-text-color - Text color for the input field
 * @cssproperty --mdc-input-border-color - Border color for the input container
 * @cssproperty --mdc-input-background-color - Background color for the input field
 * @cssproperty --mdc-input-selection-text-color - Text color for the selected text
 * @cssproperty --mdc-input-selection-background-color - Background color for the selected text
 */
class NumberInput extends Input {
  /**
   * Hints that a numeric virtual keyboard should be displayed.
   * @default 'numeric'
   */
  @property({ type: String, reflect: true }) override inputmode: InputModeType = INPUT_MODE.NUMERIC;

  /**
   * The minimum value that the number field will accept.
   */
  @property({ type: Number, attribute: 'min' }) min?: number;

  /**
   * The maximum value that the number field will accept.
   */
  @property({ type: Number, attribute: 'max' }) max?: number;

  /**
   * The amount that the value changes for each increment/decrement, whether from the
   * spinner buttons or the up/down arrow keys. Set to `'any'` to allow any decimal value with no
   * step-mismatch validation.
   * @default 1
   */
  @property({
    attribute: 'step',
    converter: {
      fromAttribute: (value: string | null): number | 'any' => {
        if (value === DEFAULTS.STEP_ANY) {
          return DEFAULTS.STEP_ANY;
        }

        const parsed = value === null ? NaN : parseFloat(value);
        return Number.isNaN(parsed) ? DEFAULTS.STEP : parsed;
      },
      toAttribute: (value: number | 'any') => String(value),
    },
  })
  step: number | 'any' = DEFAULTS.STEP;

  /**
   * Increment and decrement spinner buttons are shown alongside the input field by default.
   * Set this to true to hide them.
   * @default false
   */
  @property({ type: Boolean, attribute: 'hide-spinner-buttons' }) hideSpinnerButtons = false;

  /**
   * Aria label for the increment spinner button.
   * @default ''
   */
  @property({ type: String, attribute: 'increment-aria-label' }) incrementAriaLabel = '';

  /**
   * Aria label for the decrement spinner button.
   * @default ''
   */
  @property({ type: String, attribute: 'decrement-aria-label' }) decrementAriaLabel = '';

  protected override firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(changedProperties);

    this.syncNumberConstraints();
    this.inputElement?.addEventListener('beforeinput', this.handleBeforeInput as EventListener);
  }

  /**
   * Blocks insertion of non-numeric characters, including the `e`/`E`/`+` that native
   * `type="number"` still accepts (and the arbitrary letters Firefox allows). Typed text arrives
   * in `data`; pasted/dropped text arrives in `dataTransfer`. Deletions, caret navigation and IME
   * composition carry neither, so they pass through. The sign (`-`) and decimal point (`.`) are
   * numeric structural characters, so they are allowed and left to native range/step validation.
   */
  private handleBeforeInput = (event: InputEvent) => {
    const inserted = event.data ?? event.dataTransfer?.getData('text') ?? '';
    if (inserted === '') {
      return;
    }

    if (!/^[\d.-]*$/.test(inserted)) {
      event.preventDefault();
    }
  };

  protected override updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('min') || changedProperties.has('max') || changedProperties.has('step')) {
      this.syncNumberConstraints();
    }
  }

  /**
   * Applies the min/max/step constraints to the native input element.
   * These are not part of the Input template, so they are synced imperatively.
   */
  private syncNumberConstraints() {
    if (!this.inputElement) {
      return;
    }

    const inputElement = this.inputElement as HTMLInputElement;

    if (this.min === undefined) {
      inputElement.removeAttribute('min');
    } else {
      inputElement.min = String(this.min);
    }

    if (this.max === undefined) {
      inputElement.removeAttribute('max');
    } else {
      inputElement.max = String(this.max);
    }

    inputElement.step = this.step === DEFAULTS.STEP_ANY ? DEFAULTS.STEP_ANY : String(this.step);
    this.setInputValidity();
  }

  private handleIncrement = () => this.stepBy(1);

  private handleDecrement = () => this.stepBy(-1);

  /**
   * stepUp()/stepDown() throw for step="any", so in that case the spinner buttons add/subtract 1 and
   * clamp (matching native spin buttons); any value is already step-valid, so no alignment is
   * needed. Otherwise the native step algorithm handles stepping and step-base alignment.
   */
  private stepBy(delta: 1 | -1) {
    const inputElement = this.inputElement as HTMLInputElement;
    const previousValue = inputElement.value;

    if (this.step === DEFAULTS.STEP_ANY) {
      const current = Number.isNaN(inputElement.valueAsNumber) ? 0 : inputElement.valueAsNumber;
      // Round in the direction of travel before clamping; rounding after clamping can push the
      // value past a fractional min/max in the wrong direction.
      let next = delta === 1 ? Math.floor(current + delta) : Math.ceil(current + delta);
      if (this.min !== undefined) {
        next = Math.max(next, this.min);
      }
      if (this.max !== undefined) {
        next = Math.min(next, this.max);
      }
      inputElement.valueAsNumber = next;
    } else if (delta === 1) {
      inputElement.stepUp();
    } else {
      inputElement.stepDown();
    }

    // Spinner buttons that clamp at min/max leave the value unchanged; matching native spin buttons,
    // no input/change events are emitted in that case.
    if (inputElement.value !== previousValue) {
      this.syncValueFromInputElement();
    }
  }

  /**
   * stepUp()/stepDown() and valueAsNumber update the input element's value without dispatching
   * input/change events. Replaying them on the input replays the native flow so the base Input
   * handlers sync the value, form value and validity, then re-dispatch to consumers.
   */
  private syncValueFromInputElement() {
    this.inputElement.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
    this.inputElement.dispatchEvent(new Event('change', { bubbles: true }));
  }

  /**
   * Renders a single increment or decrement spinner button.
   *
   * The buttons are given `tabindex="-1"` so they are not in the tab order, matching native
   * spin buttons: they are redundant pointer affordances for the `ArrowUp`/`ArrowDown` stepping
   * already available from the focused input, so keyboard users reach the same behaviour without
   * two extra tab stops per field.
   */
  protected renderSpinnerButton(direction: 'increment' | 'decrement') {
    const isIncrement = direction === 'increment';

    return html`
      <mdc-button
        part="spinner-button"
        class="own-focus-ring"
        variant=${DEFAULTS.SPINNER_BUTTON_VARIANT}
        size="${DEFAULTS.SPINNER_BUTTON_SIZE}"
        prefix-icon="${isIncrement ? DEFAULTS.INCREMENT_ICON : DEFAULTS.DECREMENT_ICON}"
        aria-label="${isIncrement ? this.incrementAriaLabel : this.decrementAriaLabel}"
        ?disabled=${this.disabled || this.readonly}
        @click=${isIncrement ? this.handleIncrement : this.handleDecrement}
        tabindex="-1"
      ></mdc-button>
    `;
  }

  /**
   * Renders the decrement/increment spinner buttons in place of the default trailing (clear) button
   */
  protected override renderTrailingButton(show = false) {
    if (this.hideSpinnerButtons) {
      return super.renderTrailingButton(show);
    }

    return html`
      <div part="spinner-buttons">
        ${this.renderSpinnerButton('decrement')} ${this.renderSpinnerButton('increment')}
      </div>
    `;
  }

  protected override renderInputElement(_: InputType, hidePlaceholder?: boolean) {
    return super.renderInputElement(INPUT_TYPE.NUMBER, hidePlaceholder);
  }

  public static override styles: Array<CSSResult> = [...Input.styles, ...styles];
}

export default NumberInput;
