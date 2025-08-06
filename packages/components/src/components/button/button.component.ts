import type { PropertyValues } from 'lit';
import { CSSResult, html } from 'lit';
import { property, state } from 'lit/decorators.js';

import { ButtonComponentMixin } from '../../utils/mixins/ButtonComponentMixin';
import { ROLE } from '../../utils/roles';
import type { RoleType } from '../../utils/roles';
import Buttonsimple from '../buttonsimple/buttonsimple.component';
import type { IconNames } from '../icon/icon.types';

import { DEFAULTS } from './button.constants';
import styles from './button.styles';
import type { IconButtonSize, PillButtonSize } from './button.types';
import { getIconNameWithoutStyle } from './button.utils';

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
 * @slot button-text - Text label of the button.
 */
class Button extends ButtonComponentMixin(Buttonsimple) {
  /**
   * Button sizing is based on the button type.
   * - **Pill button**: 40, 32, 28, 24.
   * - **Icon button**: 64, 52, 40, 32, 28, 24.
   * - Tertiary icon button can also be 20.
   * @default 32
   */
  @property({ type: Number })
  override size: PillButtonSize | IconButtonSize = DEFAULTS.SIZE;

  /**
   * The button color can be inverted by setting the inverted attribute to true.
   *
   * Only applies when variant is set to `primary`, color is set to `default`
   * and button is not `active`.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  inverted: boolean = DEFAULTS.INVERTED;

  /**
   * This property defines the ARIA role for the element. By default, it is set to 'button'.
   * Consumers should override this role when:
   * - The element is being used in a context where a different role is more appropriate.
   * - Custom behaviors are implemented that require a specific ARIA role for accessibility purposes.
   * @default button
   */
  @property({ type: String, reflect: true })
  override role: RoleType = ROLE.BUTTON;

  /**
   * @internal
   */
  @state() private prefixFilledIconName?: IconNames;

  /**
   * @internal
   */
  @state() private postfixFilledIconName?: IconNames;

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('active')) {
      this.inferFilledIconName(this.active);
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
      this.inferFilledIconName(this.active);
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
  private inferFilledIconName(active?: boolean) {
    if (active) {
      if (this.prefixIcon) {
        this.prefixFilledIconName = `${getIconNameWithoutStyle(this.prefixIcon)}-filled` as IconNames;
      }
      if (this.postfixIcon) {
        this.postfixFilledIconName = `${getIconNameWithoutStyle(this.postfixIcon)}-filled` as IconNames;
      }
    } else {
      this.prefixFilledIconName = this.prefixIcon;
      this.postfixFilledIconName = this.postfixIcon;
    }
  }

  public override render() {
    return html`
      ${this.prefixFilledIconName
        ? html` <mdc-icon
            name="${this.prefixFilledIconName as IconNames}"
            part="prefix-icon"
            length-unit="rem"
          ></mdc-icon>`
        : ''}
      <slot @slotchange=${this.inferButtonType} part="button-text"></slot>
      ${this.postfixFilledIconName
        ? html` <mdc-icon
            name="${this.postfixFilledIconName as IconNames}"
            part="postfix-icon"
            length-unit="rem"
          ></mdc-icon>`
        : ''}
    `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default Button;
