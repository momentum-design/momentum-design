import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './button.styles';
import { Component } from '../../models';
import { BUTTON_COLORS, BUTTON_TYPE, BUTTON_VARIANTS, DEFAULTS } from './button.constants';
import { getIconSize, isValidIconSize, isValidPillSize } from './button.utils';

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
 * Button Colors:
 * - **Positive**: Green color.
 * - **Negative**: Red color.
 * - **Accent**: Blue color.
 * - **Promotional**: Yellow color.
 * - **Active**: White color.
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
 * @slot default slot - Text slot of the button.
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
  @property({ type: String }) variant = DEFAULTS.VARIANT;

  /**
   * There are 4 sizes for button: 40, 32, 28 and 24
   * Tertiary button can have 20 size.
   */
  @property({ type: Number }) size = DEFAULTS.SIZE;

  /**
   * There are 5 colors for button: positive, negative, accent, promotional, active.
   */
  @property({ type: String }) color = DEFAULTS.COLOR;

  /**
   * The tabindex of the button.
   */
  @property({ type: Number }) override tabIndex = 0;

  @state() private type = DEFAULTS.TYPE;

  @state() private iconSize = 1;

  constructor() {
    super();
    this.role = 'button';
  }

  public override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('keyup', this.handleKeyUp);
    this.addEventListener('focus', this.handleFocus);
    this.addEventListener('blur', this.handleBlur);
  }

  public override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeyDown);
    this.removeEventListener('keyup', this.handleKeyUp);
    this.removeEventListener('focus', this.handleFocus);
    this.removeEventListener('blur', this.handleBlur);
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
  private setVariant(variant: string) {
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
  private setSize(size: number) {
    const isIconType = this.type === BUTTON_TYPE.ICON;
    const isValidSize = isIconType
      ? isValidIconSize(size, this.variant)
      : isValidPillSize(size);

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
  private setColor(color: string) {
    if (!Object.values(BUTTON_COLORS).includes(color) || this.variant === 'tertiary') {
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
   * Sets or removes the aria-label attribute.
   *
   * @param element - The target element.
   * @param ariaLabel - The aria-label value.
   */
  private setAriaLabel(element: HTMLElement, ariaLabel: string) {
    if (ariaLabel) {
      element.setAttribute('aria-label', ariaLabel);
    } else {
      element.removeAttribute('aria-label');
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
      element.setAttribute('soft-disabled', 'true');
      element.setAttribute('aria-disabled', 'true');
    } else {
      element.removeAttribute('soft-disabled');
      element.removeAttribute('aria-disabled');
    }
  }

  private prevTabindex = 0;

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
      element.setAttribute('disabled', 'true');
      element.setAttribute('aria-disabled', 'true');
      this.prevTabindex = this.tabIndex;
      this.tabIndex = -1;
      element.setAttribute('tabindex', `${this.tabIndex}`);
    } else {
      this.tabIndex = this.prevTabindex;
      element.removeAttribute('disabled');
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
 * Handles the focus event on the button.
 *
 * @param event - The focus event.
 */
  private handleFocus(event: FocusEvent) {
    if (this.softDisabled) {
      event.preventDefault();
    }
  }

  /**
   * Handles the blur event on the button.
   *
   * @param event - The blur event.
   */
  private handleBlur(event: FocusEvent) {
    if (this.softDisabled) {
      event.preventDefault();
    }
    this.classList.remove('pressed');
  }

  /**
   * Handles the keydown event on the button.
   * If the key is 'Enter' or 'Space', the button is pressed.
   *
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent) {
    if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
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
   * Infers the button type based on the slots provided.
   * If the button contains a prefix-icon and postfix-icon slot, the type is 'pill-with-icon'.
   * If the button contains a prefix-icon slot, the type is 'icon'.
   * Otherwise, the type is 'pill'.
   *
   * @param nodes - The child nodes of the button.
   */
  private inferButtonType(children: HTMLCollection) {
    if (children.length === 1) {
      if (children[0].nodeName === 'MDC-ICON') {
        this.type = BUTTON_TYPE.ICON;
        this.setIconSize(children[0]);
      } else {
        this.type = BUTTON_TYPE.PILL;
      }
    } else if (Array.from(children).some((node) => node.nodeName === 'MDC-ICON')) {
      this.type = BUTTON_TYPE.PILL_WITH_ICON;
      Array.from(children).forEach((el) => {
        if (el.nodeName === 'MDC-ICON') {
          this.setIconSize(el);
        }
      });
    }
  }

  private setIconSize(node: ChildNode) {
    const icon = node as HTMLElement;
    icon.setAttribute('size', `${this.iconSize}`);
    icon.setAttribute('length-unit', 'rem');
  }

  public override render() {
    this.inferButtonType(this.children);

    return html`
      <slot name="prefix-icon"></slot>
      <slot></slot>
      <slot name="postfix-icon"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Button;
