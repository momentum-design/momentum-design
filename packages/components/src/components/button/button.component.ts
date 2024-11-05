import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './button.styles';
import { Component } from '../../models';
import { DEFAULTS } from './button.constants';

/**
 * `mdc-button` is a versatile component that can be configured in various ways to suit different use cases.
 *
 * Button Types:
 * - **Pill button**: A button that contains text value. Commonly used for call to action, tags, or filters.
 * - **Pill button with icons**: A button containing an icon either on the left or right side of the button.
 * - **Icon button**: A button represented by just an icon without any text.
 *
 * Button Variants:
 * - **Primary**: Solid background color.
 * - **Secondary**: Transparent background with a solid border.
 * - **Tertiary**: No background or border, appears as plain text but retains all button functionalities.
 *
 * Button Sizes (in REM units):
 * - **Pill button**: 40, 32, 28, 24.
 * - **Icon button**: 64, 52, 40, 32, 28, 24.
 * - **Tertiary icon button**: 20.
 *
 * Slots:
 * - **prefix-icon**: `<mdc-icon>` component serves as either an icon within the icon button or
 *                   as an icon positioned to the left of the button text in a pill button with icon.
 * - **label-text**: A component to represent the text label of the button.
 * - **postfix-icon**: `<mdc-icon>` component serves as an icon positioned to the right
 *                      of the button text in a pill button with icon.
 *
 * The button type is determined based on the slots provided.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-button
 *
 * @slot prefix-icon - Icon positioned to the left of the button text or within an icon button.
 * @slot label-text - Text label of the button.
 * @slot postfix-icon - Icon positioned to the right of the button text.
 */
class Button extends Component {
  /**
   * Indicates whether the button is active.
   */
    @property({ type: Boolean }) active: boolean = false;

    /**
     * Indicates whether the button is disabled.
     */
    @property({ type: Boolean }) disabled: boolean = false;

    /**
     * Indicates whether the button is soft disabled.
     * The button is currently disabled for user interaction; however, it remains focusable.
     */
    @property({ type: Boolean, attribute: 'soft-disabled' }) softDisabled: boolean = false;

    /**
     * Aria label for the button.
     */
    @property({ type: String, attribute: 'aria-label' }) override ariaLabel: string = '';

    /**
     * There are 3 variants of button: primary, secondary, tertiary.
     */
    @property({ type: String }) variant? = DEFAULTS.VARIANT;

    /**
     * There are 4 sizes for button: 40, 32, 28 and 24
     * Tertiary button can have 20 size.
     */
    @property({ type: Number }) size? = DEFAULTS.SIZE;

    /**
     * There are 5 colors for button: positive, negative, accent, promotional, active.
     */
    @property({ type: String }) color? = DEFAULTS.COLOR;

    constructor() {
      super();
      this.active = false;
      this.initializeButtonAttributes();
    }

    private initializeButtonAttributes() {
      this.role = 'button';
      this.addEventListener('click', this.handleClick);
      this.addEventListener('keydown', this.handleKeyDown);
      this.addEventListener('keyup', this.handleKeyUp);
      this.addEventListener('focus', this.handleFocus);
      this.addEventListener('blur', this.handleBlur);
    }

    public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      super.update(changedProperties);

      if (changedProperties.has('disabled')) {
        this.setDisabled(this, this.disabled);
      }
      if (changedProperties.has('softDisabled')) {
        this.setSoftDisabled(this, this.softDisabled);
      }
      if (changedProperties.has('arialabel')) {
        this.setAriaLabel(this, this.ariaLabel);
      }
      if (changedProperties.has('active')) {
        this.setAriaPressed(this, this.active);
      }
    }

    private setAriaPressed(element: HTMLElement, active: boolean) {
      if (active) {
        element.setAttribute('aria-pressed', 'true');
      } else {
        element.removeAttribute('aria-pressed');
      }
    }

    private setAriaLabel(element: HTMLElement, ariaLabel: string) {
      if (ariaLabel) {
        element.setAttribute('aria-label', ariaLabel);
      } else {
        element.removeAttribute('aria-label');
      }
    }

    private setSoftDisabled(element: HTMLElement, softDisabled: boolean) {
      if (softDisabled) {
        element.setAttribute('soft-disabled', 'true');
        element.setAttribute('aria-disabled', 'true');
      } else {
        element.removeAttribute('soft-disabled');
        element.removeAttribute('aria-disabled');
      }
    }

    private setDisabled(element: HTMLElement, disabled: boolean) {
      if (disabled) {
        element.setAttribute('disabled', 'true');
        element.setAttribute('aria-disabled', 'true');
        element.setAttribute('tabindex', '-1');
      } else {
        element.removeAttribute('disabled');
        element.removeAttribute('aria-disabled');
        element.setAttribute('tabindex', '0');
      }
    }

    public override render() {
      return html`
                <slot></slot>
        `;
    }

    private handleClick(event: MouseEvent) {
      if (!this.disabled && !this.softDisabled) {
        if (this.onclick) {
          this.onclick(event);
        }
      }
    }

    private handleFocus(event: FocusEvent) {
      if (this.softDisabled) {
        event.preventDefault();
      }
    }

    private handleBlur(event: FocusEvent) {
      if (this.softDisabled) {
        event.preventDefault();
      }
      this.classList.remove('pressed');
    }

    private handleKeyDown(event: KeyboardEvent) {
      if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        this.classList.add('pressed');
      }
    }

    private handleKeyUp(event: KeyboardEvent) {
      if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
        this.handleClick(event as unknown as MouseEvent);
        this.classList.remove('pressed');
      }
    }

    public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Button;
