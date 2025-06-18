import { CSSResult, html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import Input from '../input/input.component';
import type { InputType } from '../input/input.types';
import styles from './password.styles';

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
   * Aria label for the show/hide button.
   */
  @property({ type: String, attribute: 'show-hide-button-aria-label' })
  showHideButtonAriaLabel = '';

    @state()
    private showPassword = false;

    private toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }

    protected override renderTrailingButton(show?: boolean) {
      const showBtn = show || (this.value && this.trailingButton);
      if (!showBtn) {
        return nothing;
      }

      return html`
          <mdc-button
            part='trailing-button'
        class='own-focus-ring ${!showBtn ? 'hidden' : ''}'
        
        ?disabled=${this.disabled || this.readonly || !showBtn}
        size="${DEFAULTS.SHOW_HIDE_BUTTON_SIZE}"
        variant='${DEFAULTS.SHOW_HIDE_BUTTON_VARIANT}'    
        @click=${this.toggleShowPassword}
            aria-label=${this.showHideButtonAriaLabel}
            prefix-icon=${this.showPassword ? 'hide-bold' : 'show-bold'}
          ></mdc-button>
        `;
    }

    protected override renderInputElement(type: InputType, hidePlaceholder?: boolean) {
      const inputType = this.showPassword ? 'text' : 'password';
      return super.renderInputElement(inputType as InputType, hidePlaceholder);
    }

  public static override styles: Array<CSSResult> = [...Input.styles, ...styles];
}

export default Password;
