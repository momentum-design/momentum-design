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
 * - **Primary**: Solid background color
 * - **Secondary**: Transparent background with solid border
 * - **Tertiary**: No background or border, text-only appearance
 *
 * Button Colors:
 * - **Positive**: For success or confirmation actions
 * - **Negative**: For destructive or error actions
 * - **Accent**: For informational actions
 * - **Promotional**: For promotional actions
 * - **Default**: For standard actions
 *
 * Button Sizes:
 * - **Pill button**: 40, 32, 28, 24
 * - **Icon button**: 64, 52, 40, 32, 28, 24
 * - **Tertiary icon button**: 20
 *
 * Button Types:
 * - **Pill button**: Contains text value, commonly used for call to action, tags, or filters
 * - **Pill button with icons**: Contains an icon on the left or right side of the button
 * - **Icon button**: Represented by just an icon without any text
 * The type of button is inferred based on the presence of slot and/or prefix and postfix icons/slots.
 *
 * @dependency mdc-icon
 *
 * @tagname mdc-button
 *
 * @slot - Text label of the button.
 * @slot prefix - Content to be displayed before the text label.
 * @slot postfix - Content to be displayed after the text label.
 *
 * @csspart button-text - Text label of the button, passed in default slot
 * @csspart prefix - Content before the text label, passed in `prefix` slot
 * @csspart postfix - Content after the text label, passed in `postfix` slot
 * @csspart prefix-icon - Icon element displayed before the text label when `prefix-icon` attribute is set
 * @csspart postfix-icon - Icon element displayed after the text label when `postfix-icon` attribute is set
 *
 * @cssproperty --mdc-button-height - Height for button size
 * @cssproperty --mdc-button-background - Background of the button
 * @cssproperty --mdc-button-border-color - Borer color of the button
 * @cssproperty --mdc-button-text-color - Text color of the button
 * @cssproperty --mdc-button-prefix-icon-size - Size of the prefix icon
 * @cssproperty --mdc-button-postfix-icon-size - Size of the postfix icon
 * @cssproperty --mdc-button-line-height - Line height of the button text
 */
class Button extends ButtonComponentMixin(Buttonsimple) {
  /**
   * Specifies the size of the button in pixels. Available sizes depend on the button type:
   *
   * **Pill button** (with text):
   * - `40`: Large size (2.5rem)
   * - `32`: Default size (2rem)
   * - `28`: Medium size (1.75rem)
   * - `24`: Small size (1.5rem)
   *
   * **Icon button** (icon only):
   * - `64`: Extra large (4rem)
   * - `52`: Large (3.25rem)
   * - `40`: Medium-large (2.5rem)
   * - `32`: Default (2rem)
   * - `28`: Medium (1.75rem)
   * - `24`: Small (1.5rem)
   * - `20`: Extra small (1.25rem) - Only available for tertiary variant
   *
   * @default 32
   */
  @property({ type: Number })
  override size: PillButtonSize | IconButtonSize = DEFAULTS.SIZE;

  /**
   * Inverts the button's color scheme for use on dark backgrounds.
   * When enabled, the button adapts its colors to maintain proper contrast on inverted surfaces.
   *
   * **Requirements:**
   * - Only works with `variant="primary"`
   * - Only works with `color="default"`
   * - Button must not be in `active` state
   *
   * **Use case:** Place buttons on dark-colored backgrounds or inverted theme sections.
   *
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
      <slot name="prefix" part="prefix">
        ${this.prefixFilledIconName
          ? html` <mdc-icon
              name="${this.prefixFilledIconName as IconNames}"
              part="prefix-icon"
              length-unit="rem"
            ></mdc-icon>`
          : ''}
      </slot>
      <slot @slotchange=${this.inferButtonType} part="button-text"></slot>
      <slot name="postfix" part="postfix">
        ${this.postfixFilledIconName
          ? html` <mdc-icon
              name="${this.postfixFilledIconName as IconNames}"
              part="postfix-icon"
              length-unit="rem"
            ></mdc-icon>`
          : ''}
      </slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Buttonsimple.styles, ...styles];
}

export default Button;
