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
 * - `show-hide-button-aria-label` - aria label for the trailing show/hide button.
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
 * @cssproperty --mdc-input-disabled-border-color - Border color for the password container when disabled
 * @cssproperty --mdc-input-disabled-text-color - Text color for the password field when disabled
 * @cssproperty --mdc-input-disabled-background-color - Background color for the password field when disabled
 * @cssproperty --mdc-input-border-color - Border color for the password container
 * @cssproperty --mdc-input-text-color - Text color for the password field
 * @cssproperty --mdc-input-background-color - Background color for the password field
 * @cssproperty --mdc-input-selection-background-color - Background color for the selected text
 * @cssproperty --mdc-input-selection-text-color - Text color for the selected text
 * @cssproperty --mdc-input-support-text-color - Text color for the help text
 * @cssproperty --mdc-input-hover-background-color - Background color for the password field when hovered
 * @cssproperty --mdc-input-focused-background-color - Background color for the password field when focused
 * @cssproperty --mdc-input-focused-border-color - Border color for the password container when focused
 * @cssproperty --mdc-input-error-border-color - Border color for the password container when error
 * @cssproperty --mdc-input-warning-border-color - Border color for the password container when warning
 * @cssproperty --mdc-input-success-border-color - Border color for the password container when success
 * @cssproperty --mdc-input-primary-border-color - Border color for the password container when primary
 *
 */
class Password extends Input {
  /**
   * Aria label for the show or hide password icon button.
   */
  @property({ type: String, attribute: 'show-hide-button-aria-label' })
  showHideButtonAriaLabel = '';

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
        class="${!showBtn ? 'hidden' : ''}"
        variant=${BUTTON_VARIANTS.TERTIARY}
        ?disabled=${this.disabled || this.readonly || !showBtn}
        size="${DEFAULTS.ICON_SIZE}"
        @click=${this.toggleShowPassword}
        aria-label=${this.showHideButtonAriaLabel}
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
