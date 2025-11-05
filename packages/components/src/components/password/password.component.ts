import { CSSResult, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';

import Input from '../input/input.component';
import { INPUT_TYPE } from '../input/input.constants';
import type { InputType } from '../input/input.types';
import { BUTTON_VARIANTS } from '../button/button.constants';
import { DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';

import { PASSWORD_VISIBILITY_ICONS } from './password.constants';

/**
 * `mdc-password` is a component that allows users to input their password.
 *  It extends the `mdc-input` component and provides additional features specific to password fields.
 *  It contains:
 * - `label` field - describe the password field.
 * - `password` field - contains the value
 * - `help-text` or `validation-message` - displayed below the password field.
 * - `help-text-type` - type of the help text, can be 'default', 'error', 'warning', 'success', 'priority'.
 * - `show-button-aria-label` - aria label for the trailing show button.
 * - `hide-button-aria-label` - aria label for the trailing hide button.
 * - all the attributes of the native password field.
 *
 * @tagname mdc-password
 *
 * @event input - (React: onInput) This event is dispatched when the value of the password field changes (every press).
 * @event change - (React: onChange) This event is dispatched when the value of the password field changes (on blur).
 * @event focus - (React: onFocus) This event is dispatched when the password receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the password loses focus.
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
 * @slot trailing-button - Slot for the trailing button to clear the input field. If not provided, the clear button will be rendered when `trailingButton` property is set to true.
 *
 * @csspart input-container - The container that wraps the input field, leading icon, prefix text, and trailing button.
 * @csspart input-section - The container that wraps the input field and prefix text.
 * @csspart input-text - The input field element.
 * @csspart trailing-button - The trailing button element.
 * @csspart label - The label element.
 * @csspart helper-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element.
 * @csspart toggletip - The toggletip icon button element.
 * @csspart toggletip-text - The toggletip text element.
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
 *
 */
class Password extends Input {
  /**
   * Aria label for the show password icon button.
   */
  @property({ type: String, attribute: 'show-button-aria-label', reflect: true })
  showButtonAriaLabel = '';

  /**
   * Aria label for the hide password icon button.
   */
  @property({ type: String, attribute: 'hide-button-aria-label', reflect: true })
  hideButtonAriaLabel = '';

  /**
   * The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.
   * @override
   */
  @property({ type: String, attribute: 'help-text-type' })
  override helpTextType: ValidationType = DEFAULTS.VALIDATION;

  override connectedCallback(): void {
    super.connectedCallback();
    // Ensure the trailing button is always true for password inputs
    this.trailingButton = true;
  }

  /**
   * Internal state to track whether the password is visible (shown as text) or hidden (shown as password).
   */
  @state()
  private showPassword = false;

  /**
   * Toggles the visibility of the password.
   */
  private toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  /**
   * Renders the trailing button for showing or hiding the password.
   */
  protected override renderTrailingButton(show = false) {
    const showBtn = show || this.value;
    if (!showBtn) {
      return nothing;
    }
    return html`
      <mdc-button
        part="trailing-button"
        class="own-focus-ring ${!showBtn ? 'hidden' : ''}"
        variant=${BUTTON_VARIANTS.TERTIARY}
        ?disabled=${this.disabled || this.readonly || !showBtn}
        size="${DEFAULTS.ICON_SIZE}"
        @click=${this.toggleShowPassword}
        aria-label=${this.showPassword ? this.hideButtonAriaLabel : this.showButtonAriaLabel}
        prefix-icon=${this.showPassword ? PASSWORD_VISIBILITY_ICONS.HIDE_BOLD : PASSWORD_VISIBILITY_ICONS.SHOW_BOLD}
      ></mdc-button>
    `;
  }

  /**
   * Renders the input element for the password field.
   */
  protected override renderInputElement(_: InputType, hidePlaceholder?: boolean) {
    const inputType = this.showPassword ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD;
    return super.renderInputElement(inputType, hidePlaceholder);
  }

  public static override styles: Array<CSSResult> = [...Input.styles];
}

export default Password;
