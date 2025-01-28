import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './button.styles';
import {
  BUTTON_COLORS,
  BUTTON_TYPE_INTERNAL,
  BUTTON_VARIANTS,
  DEFAULTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES,
} from './button.constants';
import type {
  ButtonColor,
  ButtonVariant,
  PillButtonSize,
  IconButtonSize,
  ButtonTypeInternal,
} from './button.types';
import { getIconNameWithoutStyle, getIconSize } from './button.utils';
import type { IconNames } from '../icon/icon.types';
import Buttonsimple from '../buttonsimple/buttonsimple.component';

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
 * @slot - Text label of the button.
 */
class Button extends Buttonsimple {
  /**
   * The name of the icon to display as a prefix.
   * The icon is displayed on the left side of the button.
   */
  @property({ type: String, attribute: 'prefix-icon', reflect: true }) prefixIcon?: string;

  /**
   * The name of the icon to display as a postfix.
   * The icon is displayed on the right side of the button.
   */
  @property({ type: String, attribute: 'postfix-icon', reflect: true }) postfixIcon?: string;

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
   * - Tertiary icon button can also be 20.
   * @default 32
   */
  @property({ type: Number }) override size: PillButtonSize | IconButtonSize = DEFAULTS.SIZE;

  /**
   * There are 5 colors for button: positive, negative, accent, promotional, default.
   * @default default
   */
  @property({ type: String }) color: ButtonColor = DEFAULTS.COLOR;

  /**
   * This property defines the ARIA role for the element. By default, it is set to 'button'.
   * Consumers should override this role when:
   * - The element is being used in a context where a different role is more appropriate.
   * - Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.
   * @default button
   */
  @property({ type: String, reflect: true }) override role = 'button';

  /** @internal */
  @state() private typeInternal: ButtonTypeInternal = DEFAULTS.TYPE_INTERNAL;

  /** @internal */
  @state() private iconSize = 1;

  /**
   * @internal
   */
  private prevPrefixIcon?: string;

  /**
   * @internal
   */
  private prevPostfixIcon?: string;

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('active')) {
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
    if (changedProperties.has('typeInternal')) {
      this.setSize(this.size);
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
   * Sets the variant attribute for the button component.
   * If the provided variant is not included in the BUTTON_VARIANTS,
   * it defaults to the value specified in DEFAULTS.VARIANT.
   *
   * @param variant - The variant to set.
   */
  private setVariant(variant: ButtonVariant) {
    this.setAttribute('variant', Object.values(BUTTON_VARIANTS).includes(variant) ? variant : DEFAULTS.VARIANT);
  }

  /**
   * Sets the size attribute for the button component.
   * Validates the size based on the button type (icon, pill, or tertiary).
   * Defaults to DEFAULTS.SIZE if invalid.
   *
   * @param size - The size to set.
   */
  private setSize(size: PillButtonSize | IconButtonSize) {
    const isIconType = this.typeInternal === BUTTON_TYPE_INTERNAL.ICON;
    const isValidSize = isIconType
      ? (Object.values(ICON_BUTTON_SIZES).includes(size)
      && !(size === ICON_BUTTON_SIZES[20] && this.variant !== BUTTON_VARIANTS.TERTIARY))
      : Object.values(PILL_BUTTON_SIZES).includes(size as PillButtonSize);

    this.setAttribute('size', isValidSize ? `${size}` : `${DEFAULTS.SIZE}`);
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
   * Infers the type of button based on the presence of slot and/or prefix and postfix icons.
   * @param slot - default slot of button
   */
  private inferButtonType() {
    const slot = this.shadowRoot?.querySelector('slot')?.assignedNodes().length;
    if (slot && (this.prefixIcon || this.postfixIcon)) {
      this.typeInternal = BUTTON_TYPE_INTERNAL.PILL_WITH_ICON;
      this.setAttribute('data-btn-type', 'pill-with-icon');
    } else if (!slot && (this.prefixIcon || this.postfixIcon)) {
      this.typeInternal = BUTTON_TYPE_INTERNAL.ICON;
      this.setAttribute('data-btn-type', 'icon');
    } else {
      this.typeInternal = BUTTON_TYPE_INTERNAL.PILL;
      this.setAttribute('data-btn-type', 'pill');
    }
  }

  public override render() {
    return html`
      ${this.prefixIcon ? html`
        <mdc-icon
          name="${this.prefixIcon as IconNames}" 
          part="prefix-icon" 
          size=${this.iconSize} 
          length-unit="rem">
        </mdc-icon>` : ''}
      <slot @slotchange=${this.inferButtonType}></slot>
      ${this.postfixIcon ? html`
        <mdc-icon
          name="${this.postfixIcon as IconNames}" 
          part="postfix-icon" 
          size=${this.iconSize} 
          length-unit="rem">
        </mdc-icon>` : ''}
    `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default Button;
