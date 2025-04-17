import { CSSResult, html, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './buttonlink.styles';
import Link from '../link';
import {
  BUTTON_COLORS,
  BUTTON_TYPE_INTERNAL,
  BUTTON_VARIANTS,
  DEFAULTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES,
} from '../button/button.constants';
import type { IconNames } from '../icon/icon.types';
import type { ButtonColor, ButtonVariant, IconButtonSize, PillButtonSize } from '../button/button.types';
import type { LinkSize } from '../link/link.types';
import Button from '../button/button.component';
import type { ButtonLinkTypeInternal } from './buttonlink.types';

/**
 * `mdc-buttonlink` is a link that looks like a button.
 * It supports all features of `mdc-link`, along with `prefix-icon` and `postfix-icon` slots.
 *
 * @tagname mdc-buttonlink
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 */
class Buttonlink extends Link {
  /**
   * The name of the icon to display as a prefix.
   * The icon is displayed on the left side of the buttonLink.
   */
  @property({ type: String, attribute: 'prefix-icon', reflect: true }) prefixIcon?: IconNames;

  /**
   * The name of the icon to display as a postfix.
   * The icon is displayed on the right side of the buttonlink.
   */
  @property({ type: String, attribute: 'postfix-icon', reflect: true }) postfixIcon?: IconNames;

  /**
 * There are 3 variants of buttonLink: primary, secondary, tertiary. They are styled differently.
 * - **Primary**: Solid background color.
 * - **Secondary**: Transparent background with a solid border.
 * - **Tertiary**: No background or border, appears as plain text but retains all buttonLink functionalities.
 * @default primary
 */
  @property({ type: String }) variant: ButtonVariant = DEFAULTS.VARIANT;

  /**
   * ButtonLink sizing is based on the buttonLink type.
   * - **Pill buttonLink**: 40, 32, 28, 24.
   * - **Icon buttonLink**: 64, 52, 40, 32, 28, 24.
   * - Tertiary icon buttonLink can also be 20.
   * @default 32
   */
  @property({ type: Number, reflect: true, attribute: 'buttonlink-size' })
  buttonlinkSize: PillButtonSize | IconButtonSize = DEFAULTS.SIZE;

  /**
   * There are 5 colors for buttonLink: positive, negative, accent, promotional, default.
   * @default default
   */
  @property({ type: String }) color: ButtonColor = DEFAULTS.COLOR;

  /** @internal */
  @state() private typeInternal: ButtonLinkTypeInternal = DEFAULTS.TYPE_INTERNAL;

  override connectedCallback(): void {
    super.connectedCallback();
    // ButtonLink does not contain size property. It has buttonLinkSize attribute instead.
    this.size = undefined as unknown as LinkSize;
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
   * Sets the buttonLinkSize attribute for the buttonLink component.
   * Validates the buttonLinkSize based on the buttonLink type (icon, pill, or tertiary).
   * Defaults to DEFAULTS.SIZE if invalid.
   *
   * @param buttonlinkSize - The size to set.
   */
  private setButtonLinkSize(size: PillButtonSize | IconButtonSize) {
    const isIconType = this.typeInternal === BUTTON_TYPE_INTERNAL.ICON;
    const isValidSize = isIconType
      ? Object.values(ICON_BUTTON_SIZES).includes(size)
        && !(size === ICON_BUTTON_SIZES[20] && this.variant !== BUTTON_VARIANTS.TERTIARY)
      : Object.values(PILL_BUTTON_SIZES).includes(size as PillButtonSize);

    this.setAttribute('buttonlink-size', isValidSize ? `${size}` : `${DEFAULTS.SIZE}`);
  }

  /**
   * Sets the color attribute for the buttonLink.
   * Defaults to DEFAULTS.COLOR if invalid or for tertiary buttonLinks.
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
   * Infers the type of buttonLink based on the presence of slot and/or prefix and postfix icons.
   * @param slot - default slot of buttonLink
   */
  private inferButtonType() {
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

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('buttonlinkSize')) {
      this.setButtonLinkSize(this.buttonlinkSize);
    }
    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
      this.setButtonLinkSize(this.buttonlinkSize);
    }
    if (changedProperties.has('color')) {
      this.setColor(this.color);
    }
    if (changedProperties.has('typeInternal')) {
      this.setButtonLinkSize(this.buttonlinkSize);
    }
    if (changedProperties.has('prefixIcon') || changedProperties.has('postfixIcon')) {
      this.inferButtonType();
    }
  }

  public override render() {
    return html`
      ${this.prefixIcon ? html` <mdc-icon name="${this.prefixIcon as IconNames}" part="prefix-icon"></mdc-icon>` : ''}
      <slot @slotchange=${this.inferButtonType}></slot>
      ${this.postfixIcon
    ? html` <mdc-icon name="${this.postfixIcon as IconNames}" part="postfix-icon"></mdc-icon>`
    : ''}
    `;
  }

  public static override styles: Array<CSSResult> = [...Button.styles, ...styles];
}

export default Buttonlink;
