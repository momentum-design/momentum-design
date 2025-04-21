import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import {
  BUTTON_COLORS,
  BUTTON_TYPE_INTERNAL,
  BUTTON_VARIANTS,
  DEFAULTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES } from '../../components/button/button.constants';
import type {
  ButtonColor,
  ButtonTypeInternal,
  ButtonVariant,
  IconButtonSize,
  PillButtonSize } from '../../components/button/button.types';
import type { IconNames } from '../../components/icon/icon.types';
import type { Component } from '../../models';
import type { Constructor } from './index.types';

export interface ButtonComponentMixinInterface {
  prefixIcon?: IconNames;
  postfixIcon?: IconNames;
  variant: ButtonVariant;
  color: ButtonColor;
  typeInternal: ButtonTypeInternal;
  setSize(size: PillButtonSize | IconButtonSize): void;
  setVariant(variant: ButtonVariant): void;
  setColor(color: ButtonColor): void;
  inferButtonType(): void;
}

export const ButtonComponentMixin = <T extends Constructor<Component>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
  /**
   * The name of the icon to display as a prefix.
   * The icon is displayed on the left side of the button.
   */
  @property({ type: String, attribute: 'prefix-icon', reflect: true }) prefixIcon?: IconNames;

  /**
   * The name of the icon to display as a postfix.
   * The icon is displayed on the right side of the button.
   */
  @property({ type: String, attribute: 'postfix-icon', reflect: true }) postfixIcon?: IconNames;

  /**
    * There are 3 variants of button: primary, secondary, tertiary. They are styled differently.
    * - **Primary**: Solid background color.
    * - **Secondary**: Transparent background with a solid border.
    * - **Tertiary**: No background or border, appears as plain text but retains all button functionalities.
    * @default primary
    */
  @property({ type: String }) variant: ButtonVariant = DEFAULTS.VARIANT;

  /**
   * There are 5 colors for button: positive, negative, accent, promotional, default.
   * @default default
   */
  @property({ type: String }) color: ButtonColor = DEFAULTS.COLOR;

  /** @internal */
  @state() typeInternal: ButtonTypeInternal = DEFAULTS.TYPE_INTERNAL;

  /**
   * Sets the variant attribute for the button component.
   * If the provided variant is not included in the BUTTON_VARIANTS,
   * it defaults to the value specified in DEFAULTS.VARIANT.
   *
   * @param variant - The variant to set.
   */
  setVariant(variant: ButtonVariant) {
    this.setAttribute('variant', Object.values(BUTTON_VARIANTS).includes(variant) ? variant : DEFAULTS.VARIANT);
  }

  /**
   * Sets the color attribute for the button.
   * Defaults to DEFAULTS.COLOR if invalid or for tertiary button.
   *
   * @param color - The color to set.
   */
  setColor(color: ButtonColor) {
    if (!Object.values(BUTTON_COLORS).includes(color) || this.variant === BUTTON_VARIANTS.TERTIARY) {
      this.setAttribute('color', `${DEFAULTS.COLOR}`);
    } else {
      this.setAttribute('color', color);
    }
  }

  /**
   * Sets the size attribute for the button component.
   * Validates the size based on the button type (icon, pill, or tertiary).
   * Defaults to DEFAULTS.SIZE if invalid.
   *
   * @param size - The size to set.
   */
  setSize(size: PillButtonSize | IconButtonSize) {
    const isIconType = this.typeInternal === BUTTON_TYPE_INTERNAL.ICON;
    const isValidSize = isIconType
      ? Object.values(ICON_BUTTON_SIZES).includes(size)
          && !(size === ICON_BUTTON_SIZES[20] && this.variant !== BUTTON_VARIANTS.TERTIARY)
      : Object.values(PILL_BUTTON_SIZES).includes(size as PillButtonSize);

    this.setAttribute('size', isValidSize ? `${size}` : `${DEFAULTS.SIZE}`);
  }

  /**
   * Infers the type of button based on the presence of slot and/or prefix and postfix icons.
   * @param slot - default slot of button
   */
  inferButtonType() {
    const slot = this.shadowRoot
      ?.querySelector('slot')
      ?.assignedNodes()
      .filter((node) => node.nodeType !== Node.TEXT_NODE || node.textContent?.trim()).length;
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

  protected override render() {
    return html`
      ${this.prefixIcon ? html` <mdc-icon name="${this.prefixIcon as IconNames}" part="prefix-icon"></mdc-icon>` : ''}
      <slot @slotchange=${this.inferButtonType}></slot>
      ${this.postfixIcon
    ? html` <mdc-icon name="${this.postfixIcon as IconNames}" part="postfix-icon"></mdc-icon>`
    : ''}
    `;
  }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<ButtonComponentMixinInterface> & T;
};
