import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './button.styles';
import { Component } from '../../models';
import {
  BUTTON_COLORS,
  BUTTON_TYPE,
  BUTTON_VARIANTS,
  DEFAULTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES,
} from './button.constants';
import type {
  ButtonColor,
  ButtonType,
  ButtonVariant,
  PillButtonSize,
  IconButtonSize,
} from './button.types';
import { getIconNameWithoutStyle, getIconSize } from './button.utils';

/**
 * `mdc-button` is a component that can be configured in various ways to suit different use cases.
 *
 * Button Variants:
 * - **Primary**: Solid background color.
 * - **Secondary**: Transparent background with a solid border.
 * - **Tertiary**: No background or border, appears as plain text but retains all button functionalities.
 *
 * Button Colors:
 * - **Positive**: Green color.
 * - **Negative**: Red color.
 * - **Accent**: Blue color.
 * - **Promotional**: Purple color.
 * - **Default**: White color.
 *
 * Button Sizes (in REM units):
 * - **Pill button**: 40, 32, 28, 24.
 * - **Icon button**: 64, 52, 40, 32, 28, 24.
 * - **Tertiary icon button**: 20.
 *
 * Button Types:
 * - **Pill button**: A button that contains text value. Commonly used for call to action, tags, or filters.
 * - **Pill button with icons**: A button containing an icon either on the left or right side of the button.
 * - **Icon button**: A button represented by just an icon without any text.
 * The type of button is inferred based on the presence of slot and/or prefix and postfix icons.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-button
 *
 * @slot default slot - Text label of the button.
 */
class Button extends Component {
  /**
   * Indicates whether the button is active.
   * @default false
   */
  @property({ type: Boolean }) active = false;

  /**
   * Indicates whether the button is disabled.
   * The button is currently disabled for user interaction; it is not focusable or clickable.
   * @default false
   */
  @property({ type: Boolean }) disabled = false;

  /**
   * Indicates whether the button is soft disabled.
   * The button is currently disabled for user interaction; however, it remains focusable.
   * @default false
   */
  @property({ type: Boolean, attribute: 'soft-disabled' }) softDisabled = false;

  /**
   * The name of the icon to display as a prefix.
   * The icon is displayed on the left side of the button.
   */
  @property({ type: String, attribute: 'prefix-icon' }) prefixIcon?: string;

  /**
   * The name of the icon to display as a postfix.
   * The icon is displayed on the right side of the button.
   */
  @property({ type: String, attribute: 'postfix-icon' }) postfixIcon?: string;

  /**
   * There are 3 variants of button: primary, secondary, tertiary. They are styled differently.
   * - **Primary**: Solid background color.
   * - **Secondary**: Transparent background with a solid border.
   * - **Tertiary**: No background or border, appears as plain text but retains all button functionalities.
   * @default primary
   */
  @property({ type: String }) variant: ButtonVariant = DEFAULTS.VARIANT;

  /**
   * Button sizing is based on the button type.
   * - **Pill button**: 40, 32, 28, 24.
   * - **Icon button**: 64, 52, 40, 32, 28, 24.
   * - Tertiary icon button cam also be 20.
   * @default 32
   */
  @property({ type: Number }) size: PillButtonSize | IconButtonSize = DEFAULTS.SIZE;

  /**
   * There are 5 colors for button: positive, negative, accent, promotional, default.
   * @default default
   */
  @property({ type: String }) color: ButtonColor = DEFAULTS.COLOR;

  /**
   * The tabindex of the button.
   * @default 0
   */
  @property({ type: Number }) override tabIndex = 0;

  /**
   * The role of the button.
   * @default button
   */
  @property({ type: String }) override role = 'button';

  @state() private type: ButtonType = DEFAULTS.TYPE;

  @state() private iconSize = 1;

  private prevTabindex = 0;

  private prevPrefixIcon?: string;

  private prevPostfixIcon?: string;

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('keyup', this.handleKeyUp);
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('disabled')) {
      this.setDisabled(this, this.disabled);
    }
    if (changedProperties.has('softDisabled')) {
      this.setSoftDisabled(this, this.softDisabled);
    }
    if (changedProperties.has('active')) {
      this.setAriaPressed(this, this.active);
      this.modifyIconName(this.active);
    }
    if (changedProperties.has('size')) {
      this.setSize(this.size);
    }
    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
      this.setSize(this.size);
    }
    if (changedProperties.has('color')) {
      this.setColor(this.color);
    }
    if (changedProperties.has('type')) {
      this.setSize(this.size);
      this.setClassBasedOnType(this.type);
    }
    if (changedProperties.has('prefixIcon') || changedProperties.has('postfixIcon')) {
      this.inferButtonType();
    }
  }

  /**
   * Modifies the icon name based on the active state.
   * If the button is active, the icon name is suffixed with '-filled'.
   * If the button is inactive, the icon name is restored to its original value.
   * If '-filled' icon is not available, the icon name remains unchanged.
   *
   * @param active - The active state.
   */
  private modifyIconName(active: boolean) {
    if (active) {
      if (this.prefixIcon) {
        this.prevPrefixIcon = this.prefixIcon;
        this.prefixIcon = `${getIconNameWithoutStyle(this.prefixIcon)}-filled`;
      }
      if (this.postfixIcon) {
        this.prevPostfixIcon = this.postfixIcon;
        this.postfixIcon = `${getIconNameWithoutStyle(this.postfixIcon)}-filled`;
      }
    } else {
      if (this.prevPrefixIcon) {
        this.prefixIcon = this.prevPrefixIcon;
      }
      if (this.prevPostfixIcon) {
        this.postfixIcon = this.prevPostfixIcon;
      }
    }
  }

  /**
   * Sets the class of 'icon' for icon buttons.
   * @param type - The type of the button.
   */
  private setClassBasedOnType(type: string) {
    if (type === BUTTON_TYPE.ICON) {
      this.classList.add('icon');
    } else {
      this.classList.remove('icon');
    }
  }

  /**
   * Sets the variant attribute for the button component.
   * If the provided variant is not included in the BUTTON_VARIANTS,
   * it defaults to the value specified in DEFAULTS.VARIANT.
   *
   * @param variant - The variant to set.
   */
  private setVariant(variant: ButtonVariant) {
    if (!Object.values(BUTTON_VARIANTS).includes(variant)) {
      this.setAttribute('variant', `${DEFAULTS.VARIANT}`);
    } else {
      this.setAttribute('variant', variant);
    }
  }

  /**
   * Sets the size attribute for the button component.
   * Validates the size based on the button type (icon, pill, or tertiary).
   * Defaults to DEFAULTS.SIZE if invalid.
   *
   * @param size - The size to set.
   */
  private setSize(size: PillButtonSize | IconButtonSize) {
    const isIconType = this.type === BUTTON_TYPE.ICON;
    const isValidSize = isIconType
      ? Object.values(ICON_BUTTON_SIZES).includes(size)
      && !(size === ICON_BUTTON_SIZES[20] && this.variant !== BUTTON_VARIANTS.TERTIARY)
      : Object.values(PILL_BUTTON_SIZES).includes(size as PillButtonSize);

    if (!isValidSize) {
      this.setAttribute('size', `${DEFAULTS.SIZE}`);
    } else {
      this.setAttribute('size', `${size}`);
    }
    this.iconSize = getIconSize(size);
  }

  /**
   * Sets the color attribute for the button.
   * Defaults to DEFAULTS.COLOR if invalid or for tertiary buttons.
   *
   * @param color - The color to set.
   */
  private setColor(color: ButtonColor) {
    if (!Object.values(BUTTON_COLORS).includes(color) || this.variant === BUTTON_VARIANTS.TERTIARY) {
      this.setAttribute('color', `${DEFAULTS.COLOR}`);
    } else {
      this.setAttribute('color', color);
    }
  }

  /**
   * Sets or removes the aria-pressed attribute based on the active state.
   *
   * @param element - The target element.
   * @param active - The active state.
   */
  private setAriaPressed(element: HTMLElement, active: boolean) {
    if (active) {
      element.setAttribute('aria-pressed', 'true');
    } else {
      element.removeAttribute('aria-pressed');
    }
  }

  /**
   * Sets the soft-disabled attribute for the button.
   * When soft-disabled, the button remains focusable but not clickable.
   *
   * @param element - The button element.
   * @param softDisabled - The soft-disabled state.
   */
  private setSoftDisabled(element: HTMLElement, softDisabled: boolean) {
    if (softDisabled) {
      element.setAttribute('aria-disabled', 'true');
    } else {
      element.removeAttribute('aria-disabled');
    }
  }

  /**
   * Sets the disabled attribute for the button.
   * When disabled, the button is not focusable or clickable, and tabindex is set to -1.
   * The previous tabindex is stored and restored when enabled.
   * Also sets/removes aria-disabled attribute.
   *
   * @param element - The button element.
   * @param disabled - The disabled state.
   */
  private setDisabled(element: HTMLElement, disabled: boolean) {
    if (disabled) {
      element.setAttribute('aria-disabled', 'true');
      this.prevTabindex = this.tabIndex;
      this.tabIndex = -1;
      element.setAttribute('tabindex', `${this.tabIndex}`);
    } else {
      this.tabIndex = this.prevTabindex;
      element.removeAttribute('aria-disabled');
      element.setAttribute('tabindex', `${this.tabIndex}`);
    }
  }

  /**
   * Handles the click event on the button.
   * If the button is not disabled or soft-disabled, the onclick event is triggered.
   * The onclick method is provided by the consumer.
   *
   * @param event - The mouse event.
   */
  private handleClick(event: MouseEvent) {
    if (!this.disabled && !this.softDisabled) {
      if (this.onclick) {
        this.onclick(event);
      }
    }
  }

  /**
   * Handles the keydown event on the button.
   * If the key is 'Enter' or 'Space', the button is pressed.
   *
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent) {
    if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
      this.classList.add('pressed');
    }
  }

  /**
   * Handles the keyup event on the button.
   * If the key is 'Enter' or 'Space', the button is clicked.
   *
   * @param event - The keyboard event.
   */
  private handleKeyUp(event: KeyboardEvent) {
    if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
      this.handleClick(event as unknown as MouseEvent);
      this.classList.remove('pressed');
    }
  }

  /**
   * Infers the type of button based on the presence of slot and/or prefix and postfix icons.
   * @param slot - default slot of button
   */
  private inferButtonType(slot?: HTMLSlotElement) {
    if (slot && (this.prefixIcon || this.postfixIcon)) {
      this.type = BUTTON_TYPE.PILL_WITH_ICON;
    } else if (!slot && (this.prefixIcon || this.postfixIcon)) {
      this.type = BUTTON_TYPE.ICON;
    } else {
      this.type = BUTTON_TYPE.PILL;
    }
  }

  private handleSlotchange(event: Event) {
    this.inferButtonType(event.target as HTMLSlotElement);
  }

  public override render() {
    return html`
      ${this.prefixIcon ? html`
        <mdc-icon 
          name="${this.prefixIcon}" 
          part="prefix-icon" 
          size=${this.iconSize} 
          length-unit="rem">
        </mdc-icon>` : ''}
      <slot @slotchange=${this.handleSlotchange}></slot>
      ${this.postfixIcon ? html`
        <mdc-icon 
          name="${this.postfixIcon}" 
          part="postfix-icon" 
          size=${this.iconSize} 
          length-unit="rem">
        </mdc-icon>` : ''}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Button;
