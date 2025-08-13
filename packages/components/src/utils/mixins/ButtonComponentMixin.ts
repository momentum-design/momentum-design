/* eslint-disable max-classes-per-file */
import { property, state } from 'lit/decorators.js';

import {
  BUTTON_COLORS,
  BUTTON_TYPE_INTERNAL,
  BUTTON_VARIANTS,
  DEFAULTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES,
} from '../../components/button/button.constants';
import type {
  ButtonColor,
  ButtonTypeInternal,
  ButtonVariant,
  IconButtonSize,
  PillButtonSize,
} from '../../components/button/button.types';
import type { IconNames } from '../../components/icon/icon.types';
import type { Component } from '../../models';

import type { Constructor } from './index.types';

export declare class ButtonComponentMixinInterface {
  prefixIcon?: IconNames;

  postfixIcon?: IconNames;

  variant: ButtonVariant;

  color: ButtonColor;

  protected typeInternal: ButtonTypeInternal;

  protected setSize(size: PillButtonSize | IconButtonSize): void;

  protected setVariant(variant: ButtonVariant): void;

  protected setColor(color: ButtonColor): void;

  protected inferButtonType(): void;
}

export const ButtonComponentMixin = <T extends Constructor<Component>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * The name of the icon to display as a prefix.
     * The icon is displayed on the left side of the button.
     */
    @property({ type: String, attribute: 'prefix-icon', reflect: true })
    prefixIcon?: IconNames;

    /**
     * The name of the icon to display as a postfix.
     * The icon is displayed on the right side of the button.
     */
    @property({ type: String, attribute: 'postfix-icon', reflect: true })
    postfixIcon?: IconNames;

    /**
     * There are 3 variants of button: primary, secondary, tertiary. They are styled differently.
     * - **Primary**: Solid background color.
     * - **Secondary**: Transparent background with a solid border.
     * - **Tertiary**: No background or border, appears as plain text but retains all button functionalities.
     * @default primary
     */
    @property({ type: String })
    variant: ButtonVariant = DEFAULTS.VARIANT;

    /**
     * There are 5 colors for button: positive, negative, accent, promotional, default.
     * @default default
     */
    @property({ type: String })
    color: ButtonColor = DEFAULTS.COLOR;

    /** @internal */
    @state()
    protected typeInternal: ButtonTypeInternal = DEFAULTS.TYPE_INTERNAL;

    /**
     * Sets the variant attribute for the button component.
     * If the provided variant is not included in the BUTTON_VARIANTS,
     * it defaults to the value specified in DEFAULTS.VARIANT.
     *
     * @param variant - The variant to set.
     */
    protected setVariant(variant: ButtonVariant) {
      this.setAttribute('variant', Object.values(BUTTON_VARIANTS).includes(variant) ? variant : DEFAULTS.VARIANT);
    }

    /**
     * Sets the color attribute for the button.
     * Defaults to DEFAULTS.COLOR if invalid or for tertiary button.
     *
     * @param color - The color to set.
     */
    protected setColor(color: ButtonColor) {
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
    protected setSize(size: PillButtonSize | IconButtonSize) {
      const isIconType = this.typeInternal === BUTTON_TYPE_INTERNAL.ICON;
      const isValidSize = isIconType
        ? Object.values(ICON_BUTTON_SIZES).includes(size) &&
          !(size === ICON_BUTTON_SIZES[20] && this.variant !== BUTTON_VARIANTS.TERTIARY)
        : Object.values(PILL_BUTTON_SIZES).includes(size as PillButtonSize);

      this.setAttribute('size', isValidSize ? `${size}` : `${DEFAULTS.SIZE}`);
    }

    /**
     * Infers the type of button based on the presence of slot and/or prefix and postfix icons.
     * @param slot - default slot of button
     */
    protected inferButtonType() {
      // Check for text content in the default slot
      const defaultSlot = (this.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement)
        ?.assignedNodes()
        .filter(node => node.nodeType !== Node.TEXT_NODE || node.textContent?.trim()).length;

      // Check for prefix content (either icon property or slot content)
      const prefixSlot = (this.shadowRoot?.querySelector('slot[name="prefix"]') as HTMLSlotElement)
        ?.assignedNodes()
        .filter(node => node.nodeType !== Node.TEXT_NODE || node.textContent?.trim()).length;
      const hasPrefix = this.prefixIcon || (prefixSlot && prefixSlot > 0);

      // Check for postfix content (either icon property or slot content)
      const postfixSlot = (this.shadowRoot?.querySelector('slot[name="postfix"]') as HTMLSlotElement)
        ?.assignedNodes()
        .filter(node => node.nodeType !== Node.TEXT_NODE || node.textContent?.trim()).length;
      const hasPostfix = this.postfixIcon || (postfixSlot && postfixSlot > 0);

      if (defaultSlot && (hasPrefix || hasPostfix)) {
        this.typeInternal = BUTTON_TYPE_INTERNAL.PILL_WITH_ICON;
        this.setAttribute('data-btn-type', 'pill-with-icon');
      } else if (!defaultSlot && (hasPrefix || hasPostfix)) {
        this.typeInternal = BUTTON_TYPE_INTERNAL.ICON;
        this.setAttribute('data-btn-type', 'icon');
      } else {
        this.typeInternal = BUTTON_TYPE_INTERNAL.PILL;
        this.setAttribute('data-btn-type', 'pill');
      }
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<ButtonComponentMixinInterface> & T;
};
