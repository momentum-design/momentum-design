import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';

import Input from '../input/input.component';
import { INPUT_TYPE } from '../input/input.constants';
import type { InputType } from '../input/input.types';

import { DEFAULTS } from './number.constants';
import styles from './number.styles';

// The class below is named `Number`, which shadows the global `Number` constructor within this file.
const GlobalNumber = globalThis.Number;

/**
 * Parses the `step` attribute, allowing the native `any` sentinel (no step-mismatch validation)
 * alongside numeric values. `type: GlobalNumber` can't express this, hence the custom converter.
 */
const stepConverter = {
  fromAttribute: (value: string | null): number | 'any' => {
    if (value === DEFAULTS.STEP_ANY) {
      return DEFAULTS.STEP_ANY;
    }

    const parsed = value === null ? NaN : parseFloat(value);
    return GlobalNumber.isNaN(parsed) ? DEFAULTS.STEP : parsed;
  },
  toAttribute: (value: number | 'any') => String(value),
};

/**
 * @tagname mdc-number
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
 * @slot input - Slot for the input element. If not provided, the input field will be rendered.
 * @slot input-leading-icon - Slot for the leading icon before the input field. If not provided, the `leadingIcon` property will be used to render the leading icon.
 * @slot input-prefix-text - Slot for the prefix text before the input field. If not provided, the `prefixText` property will be used to render the prefix text.
 * @slot trailing-button - Slot for the trailing content. If not provided, the increment/decrement steppers are rendered by default; set `hideSteppers` to true to render the clear button instead (when `trailingButton` is set to true).
 *
 * @csspart input-container - The container that wraps the input field, leading icon, prefix text, and trailing content.
 * @csspart input-section - The container that wraps the input field and prefix text.
 * @csspart input-text - The input field element.
 * @csspart stepper-buttons - The container that wraps the increment and decrement stepper buttons.
 * @csspart stepper-button - Each of the increment/decrement stepper button elements.
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
class Number extends Input {
  /**
   * The minimum value that the number field will accept.
   */
  @property({ type: GlobalNumber, attribute: 'min' }) min?: number;

  /**
   * The maximum value that the number field will accept.
   */
  @property({ type: GlobalNumber, attribute: 'max' }) max?: number;

  /**
   * The amount that the value changes for each increment/decrement, whether from the
   * steppers or the up/down arrow keys. Set to `'any'` to allow any decimal value with no
   * step-mismatch validation.
   * @default 1
   */
  @property({ attribute: 'step', converter: stepConverter }) step: number | 'any' = DEFAULTS.STEP;

  /**
   * Increment and decrement stepper buttons are shown alongside the input field by default.
   * Set this to true to hide them.
   * @default false
   */
  @property({ type: Boolean, attribute: 'hide-steppers' }) hideSteppers = false;

  /**
   * Aria label for the increment stepper button.
   * @default ''
   */
  @property({ type: String, attribute: 'increment-aria-label' }) incrementAriaLabel = '';

  /**
   * Aria label for the decrement stepper button.
   * @default ''
   */
  @property({ type: String, attribute: 'decrement-aria-label' }) decrementAriaLabel = '';

  protected override firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(changedProperties);

    this.syncNumberConstraints();
  }

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
  }

  private handleIncrement = () => this.stepBy(1);

  private handleDecrement = () => this.stepBy(-1);

  /**
   * stepUp()/stepDown() throw for step="any", so in that case the steppers add/subtract 1 and
   * clamp (matching native spin buttons); any value is already step-valid, so no alignment is
   * needed. Otherwise the native step algorithm handles stepping and step-base alignment.
   */
  private stepBy(delta: 1 | -1) {
    const inputElement = this.inputElement as HTMLInputElement;
    const previousValue = inputElement.value;

    if (this.step === DEFAULTS.STEP_ANY) {
      const current = GlobalNumber.isNaN(inputElement.valueAsNumber) ? 0 : inputElement.valueAsNumber;
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

    // Steppers that clamp at min/max leave the value unchanged; matching native spin buttons,
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
   * Renders a single increment or decrement stepper button.
   */
  protected renderStepperButton(direction: 'increment' | 'decrement') {
    const isIncrement = direction === 'increment';

    return html`
      <mdc-button
        part="stepper-button"
        class="own-focus-ring"
        variant=${DEFAULTS.STEPPER_BUTTON_VARIANT}
        size="${DEFAULTS.STEPPER_BUTTON_SIZE}"
        prefix-icon="${isIncrement ? DEFAULTS.INCREMENT_ICON : DEFAULTS.DECREMENT_ICON}"
        aria-label="${isIncrement ? this.incrementAriaLabel : this.decrementAriaLabel}"
        ?disabled=${this.disabled || this.readonly}
        @click=${isIncrement ? this.handleIncrement : this.handleDecrement}
        tabindex="-1"
      ></mdc-button>
    `;
  }

  /**
   * Renders the decrement/increment steppers in place of the default trailing (clear) button,
   * matching the Figma "Number Input" design, unless `hideSteppers` is set.
   */
  protected override renderTrailingButton(show = false) {
    if (this.hideSteppers) {
      return super.renderTrailingButton(show);
    }

    return html`
      <div part="stepper-buttons">
        ${this.renderStepperButton('decrement')} ${this.renderStepperButton('increment')}
      </div>
    `;
  }

  protected override renderInputElement(_: InputType, hidePlaceholder?: boolean) {
    return super.renderInputElement(INPUT_TYPE.NUMBER, hidePlaceholder);
  }

  public static override styles: Array<CSSResult> = [...Input.styles, ...styles];
}

export default Number;
