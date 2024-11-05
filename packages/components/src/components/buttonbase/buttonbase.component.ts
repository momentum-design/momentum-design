import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './buttonbase.styles';
import { Component } from '../../models';

/**
 * ButtonBase component that behaves like a button using ARIA roles.
 *
 * @tagname mdc-buttonbase
 *
 * @slot default - This is a default/unnamed slot
 */
class ButtonBase extends Component {
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
     * Custom click handler for the button.
     */
    @property({ type: Function }) onClick?: (event: MouseEvent) => void;

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

    private setSoftDisabled(element: HTMLElement, disabled: boolean) {
      if (disabled) {
        element.setAttribute('aria-disabled', 'true');
      } else {
        element.removeAttribute('aria-disabled');
      }
    }

    private setDisabled(element: HTMLElement, disabled: boolean) {
      if (disabled) {
        element.setAttribute('aria-disabled', 'true');
        element.setAttribute('tabindex', '-1');
      } else {
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
        if (this.onClick) {
          this.onClick(event); // Call the custom click handler
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

export default ButtonBase;
