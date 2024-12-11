import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './button.styles';
import { Component } from '../../models';
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
  ButtonType,
  ButtonVariant,
  PillButtonSize,
  IconButtonSize,
  ButtonTypeInternal,
} from './button.types';
import { getIconNameWithoutStyle, getIconSize } from './button.utils';
import type { IconNames } from '../icon/icon.types';

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
class Button extends Component {
  /**
   * The button's active state indicates whether it is currently toggled on (active) or off (inactive).
   * When the active state is true, the button is considered to be in an active state, meaning it is toggled on.
   * Conversely, when the active state is false, the button is in an inactive state, indicating it is toggled off.
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
   * When set to `true`, the button appears visually disabled but still allows
   * focus, click, and keyboard actions to be passed through.
   *
   * **Important:** When using soft disabled, consumers must ensure that
   * the button behaves like a disabled button, allowing only focus and
   * preventing any interactions (clicks or keyboard actions) from triggering unintended actions.
   * @default false
   */
  @property({ type: Boolean, attribute: 'soft-disabled' }) softDisabled = false;

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
  @property({ type: Number, reflect: true }) override tabIndex = 0;

  /**
   * This property defines the ARIA role for the element. By default, it is set to 'button'.
   * Consumers should override this role when:
   * - The element is being used in a context where a different role is more appropriate.
   * - Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.
   * @default button
   */
  @property({ type: String, reflect: true }) override role = 'button';

  /**
   * This property defines the type attribute for the button element.
   * The type attribute specifies the behavior of the button when it is clicked.
   * - **submit**: The button submits the form data to the server.
   * - **reset**: The button resets the form data to its initial state.
   * - **button**: The button does nothing when clicked.
   * @default button
   */
  @property({ reflect: true })
  type: ButtonType = DEFAULTS.TYPE;

  /** @internal */
  @state() private typeInternal: ButtonTypeInternal = DEFAULTS.TYPE_INTERNAL;

  /** @internal */
  @state() private iconSize = 1;

  /**
   * @internal
   */
  private prevTabindex = 0;

  /**
   * @internal
   */
  private prevPrefixIcon?: string;

  /**
   * @internal
   */
  private prevPostfixIcon?: string;

  /** @internal */
  static formAssociated = true;

  /** @internal */
  private internals: ElementInternals;

  /** @internal */
  get form(): HTMLFormElement | null {
    return this.internals.form;
  }

  constructor() {
    super();
    this.addEventListener('click', this.executeAction.bind(this));
    this.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.addEventListener('keyup', this.handleKeyUp.bind(this));
    /** @internal */
    this.internals = this.attachInternals();
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
    if (changedProperties.has('typeInternal')) {
      this.setSize(this.size);
    }
    if (changedProperties.has('prefixIcon') || changedProperties.has('postfixIcon')) {
      this.inferButtonType();
    }
  }

  private executeAction() {
    if (this.type === 'submit' && this.internals.form) {
      this.internals.form.requestSubmit();
    }

    if (this.type === 'reset' && this.internals.form) {
      this.internals.form.reset();
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
   * Sets the aria-pressed attribute based on the active state.
   *
   * @param element - The target element.
   * @param active - The active state.
   */
  private setAriaPressed(element: HTMLElement, active: boolean) {
    if (active) {
      element.setAttribute('aria-pressed', 'true');
    } else {
      element.setAttribute('aria-pressed', 'false');
    }
  }

  /**
   * Sets the soft-disabled attribute for the button.
   * When soft-disabled, the button looks to be disabled but remains focusable and clickable.
   * Also sets/removes aria-disabled attribute.
   *
   * @param element - The button element.
   * @param softDisabled - The soft-disabled state.
   */
  private setSoftDisabled(element: HTMLElement, softDisabled: boolean) {
    if (softDisabled) {
      element.setAttribute('aria-disabled', 'true');
    } else {
      element.setAttribute('aria-disabled', 'false');
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
    } else {
      this.tabIndex = this.prevTabindex;
      element.removeAttribute('aria-disabled');
    }
  }

  private triggerClickEvent() {
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    this.dispatchEvent(clickEvent);
    this.executeAction();
  }

  /**
   * Handles the keydown event on the button.
   * If the key is 'Enter' or 'Space', the button is pressed.
   * If the key is 'Enter', the button is pressed. The native HTML button works in the same way.
   *
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent) {
    if (['Enter', ' '].includes(event.key)) {
      this.classList.add('pressed');
      if (event.key === 'Enter') {
        this.triggerClickEvent();
      }
    }
  }

  /**
   * Handles the keyup event on the button.
   * If the key is 'Enter' or 'Space', the button is clicked.
   * If the key is 'Space', the button is pressed. The native HTML button works in the same way.
   *
   * @param event - The keyboard event.
   */
  private handleKeyUp(event: KeyboardEvent) {
    if (['Enter', ' '].includes(event.key)) {
      this.classList.remove('pressed');
      if (event.key === ' ') {
        this.triggerClickEvent();
      }
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

  // Note: @click is attached to each of the children of the button.
  // Adding click listener within the constructor will not work properly when button is disabled.
  // https://discord.com/channels/1012791295170859069/1047015641225371718/threads/1309446072413720576
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

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Button;
