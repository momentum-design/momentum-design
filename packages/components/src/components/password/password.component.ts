import { CSSResult, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import Input from '../input/input.component';
import type { InputType } from '../input/input.types';
import styles from './password.styles';
import { DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import { BUTTON_VARIANTS } from '../button/button.constants';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';

/**
 * password component, which ...
 *
 * @tagname mdc-password
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Password extends Input {
  /**
   * Aria label for the show/hide button. Used for accessibility on the trailing button.
   */
  @property({ type: String, attribute: 'show-hide-button-aria-label' })
  showHideButtonAriaLabel = '';

  /**
   * The type of help text. It can be 'default', 'error', 'success', etc.
   * Controls the prefix icon for helper text.
   * @override
   */
  @property({ type: String, attribute: 'help-text-type' })
  override helpTextType: ValidationType = 'default';

  /**
   * Internal state to track whether the password is visible (shown as text) or hidden (shown as password).
   */
  @state()
  private showPassword = false;

  /**
   * Toggles the visibility of the password field between 'text' and 'password'.
   * Called when the trailing button is clicked.
   */
  private toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  /**
   * Renders the trailing button (show/hide password toggle) if conditions are met.
   * @param show - Whether to force show the button (default: false)
   * @returns The template for the trailing button or nothing if not shown.
   */
  protected override renderTrailingButton(show = false) {
    const showBtn = show || (this.value && this.trailingButton);
    if (!showBtn) {
      return nothing;
    }
    return html`
      <mdc-button
        part='trailing-button'
        class='own-focus-ring ${!showBtn ? 'hidden' : ''}'
        variant=${BUTTON_VARIANTS.TERTIARY}
        ?disabled=${this.disabled || this.readonly || !showBtn}
        size="${DEFAULTS.ICON_SIZE}"
        @click=${this.toggleShowPassword}
        aria-label=${this.showHideButtonAriaLabel}
        prefix-icon=${this.showPassword ? 'hide-bold' : 'show-bold'}
      ></mdc-button>
    `;
  }

  /**
   * Renders the input element for the password field, forcing the type to 'password' or 'text'.
   * This ensures the password can be toggled visible/hidden regardless of the base Input type.
   * @param _ - Ignored type parameter from base Input
   * @param hidePlaceholder - Whether to hide the placeholder
   * @returns The template for the input element
   */
  protected override renderInputElement(_: InputType, hidePlaceholder?: boolean) {
    // Always use 'password' or 'text' for password visibility toggle
    const inputType = this.showPassword ? 'text' : 'password';
    return super.renderInputElement(inputType as InputType, hidePlaceholder);
  }

  /**
   * Styles for the password component, combining FormfieldWrapper, Input, and password-specific styles.
   */
  public static override styles: Array<CSSResult> = [
    ...FormfieldWrapper.styles,
    ...Input.styles,
    ...styles,
  ];
}

export default Password;
