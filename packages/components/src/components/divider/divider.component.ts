import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './divider.styles';
import { Component } from '../../models';
import {
  BUTTON_TAG,
  DEFAULTS,
  DIRECTIONS,
  DIVIDER_ORIENTATION,
  DIVIDER_TYPE_INTERNAL,
  DIVIDER_VARIANT,
  TEXT_TAG,
} from './divider.constants';
import { DividerOrientation, DividerTypeInternal, DividerVariant } from './divider.types';

/**
 * `mdc-divider` is basically a line that can also have a button/text positioned centrally.
 * It is used to separate and organize the content and allow users to interact with the layout.
 *
 * Divider Orientation:
 * - **Horizontal**: A thin, horizontal line.
 * - **Vertical**: A thin, vertical line.
 *
 * Divider Variant:
 * - **solid**: Solid line.
 * - **gradient**: Gradient Line.
 *
 * Divider Types:
 * - **Primary**: Horizontal and Vertical Divider.
 * - **Text**: Horiontal Divider with text label in between.
 * - **Grabber button**: Horizontal and Vertical divider with styled button in between.
 *
 * The type of divider is inferred based on the kind of slot present.
 *
 * **Note:**
 * - If the slot is replaced by invalid tagname or multiple elements,
 *   the type of divider is then set to primary by default.
 * - If you want to override the styles of the divider, refer CSS custom properties.
 *
 * @tagname mdc-divider
 *
 * @cssproperty --mdc-divider-background-color - background color of the divider
 * @cssproperty --mdc-divider-width - width of the divider
 * @cssproperty --mdc-divider-horizontal-gradient - gradient of the horizontal divider
 * @cssproperty --mdc-divider-vertical-gradient - gradient of the vertical divider
 * @cssproperty --mdc-divider-text-size - font size of label in the text divider
 * @cssproperty --mdc-divider-text-color - font color of label in the text divider
 * @cssproperty --mdc-divider-text-margin - left and right margin of label in the text divider
 * @cssproperty --mdc-divider-text-line-height - line height of label in the text divider
 * @cssproperty --mdc-divider-grabber-button-border-radius - border radius of the grabber button
 */
class Divider extends Component {
  /**
   * Two orientations of divider
   * - **horizontal**: A thin, horizontal line with 0.0625rem width.
   * - **vertical**: A thin, vertical line with 0.0625rem width.
   *
   * Note: We do not support "Vertical Text Divider" as of now.
   * @default horizontal
   */
  @property({ type: String, reflect: true })
  orientation: DividerOrientation = DEFAULTS.ORIENTATION;

  /**
   * Two variants of divider
   * - **solid**: Solid line.
   * - **gradient**: Gradient Line that fades on either sides of the divider.
   * @default solid
   */
  @property({ type: String, reflect: true })
  variant: DividerVariant = DEFAULTS.VARIANT;

  /**
   * Aria label to be set for accessibility
   * @default null
   */
  @property({ type: String, attribute: 'divider-aria-label' })
  dividerAriaLabel: string | null = null;

  /**
   * Aria expanded to be set for accessibility
   *
   * Note: Possible values can be:
   * - **'true'**
   * - **'false'**
   * @default false
   */
  @property({ type: String, attribute: 'divider-aria-expanded' })
  dividerAriaExpanded: string = 'false';

  /**
   * Direction of the arrow icon, if applicable.
   * - **positive**
   * - **negative**
   *
   * Note: Positive and Negative directions are defined based on Cartesian plane.
   * @default 'negative'
   */
  @property({ type: String, attribute: 'arrow-direction', reflect: true })
  arrowDirection: string = DEFAULTS.ARROW_DIRECTION;

  /**
   * Position of the button, if applicable.
   * - **positive**
   * - **negative**
   *
   * Note: Positive and Negative directions are defined based on Cartesian plane.
   * @default 'negative'
   */
  @property({ type: String, attribute: 'button-position', reflect: true })
  buttonPosition: string = DEFAULTS.BUTTON_DIRECTION;

  /** @internal */
  @state()
  private dividerTypeInternal: DividerTypeInternal = DEFAULTS.TYPE_INTERNAL;

  /**
   * Sets the variant attribute for the divider component.
   * If the provided variant is not included in the DIVIDER_VARIANT,
   * it defaults to the value specified in DEFAULTS.VARIANT.
   *
   * @param variant - The variant to set.
   */
  private setVariant(variant: DividerVariant) {
    this.setAttribute('variant', Object.values(DIVIDER_VARIANT).includes(variant) ? variant : DEFAULTS.VARIANT);
  }

  /**
   * Sets the orientation attribute for the divider component.
   * If the provided orientation is not included in the DIVIDER_ORIENTATION,
   * it defaults to the value specified in DEFAULTS.ORIENTATION.
   *
   * @param orientation - The orientation to set.
   */
  private setOrientation(orientation: DividerOrientation) {
    this.setAttribute(
      'orientation',
      Object.values(DIVIDER_ORIENTATION).includes(orientation) ? orientation : DEFAULTS.ORIENTATION,
    );
  }

  /**
   * Configures the grabber button within the divider.
   *
   * - Sets the `aria-label` attribute for the grabber button based
   * on the `divider-aria-label` attribute of the divider.
   * - Sets the `aria-expanded` attribute for the grabber button based
   * on the `divider-aria-expanded` state of the divider.
   * - Sets the `prefix-icon` attribute for the grabber button based
   * on the `arrow-direction` and `orientation` properties.
   *
   * This method updates the DOM element dynamically if a grabber button is present.
   */
  private setGrabberButton(): void {
    const buttonElement = this.querySelector('mdc-button');
    if (!buttonElement) return;

    const iconType = this.getArrowIcon();
    buttonElement.setAttribute('variant', 'secondary');
    if (this.dividerAriaLabel) {
      buttonElement.setAttribute('aria-label', this.dividerAriaLabel);
    }
    buttonElement.setAttribute('aria-expanded', this.dividerAriaExpanded);
    buttonElement.setAttribute('prefix-icon', iconType);
  }

  /**
   * Sets the `aria-label` attribute for label based on `divider-aria-label` of the text divider.
   */
  private setTextDivider(): void {
    const textElement = this.querySelector('mdc-text');
    if (!textElement || textElement.textContent?.trim() !== '') return;

    if (this.dividerAriaLabel) {
      textElement.setAttribute('aria-label', this.dividerAriaLabel);
    }
  }

  /**
   * Determines the arrow icon based on the consumer-defined `arrowDirection`.
   *
   * @returns The icon that represents the arrow direction.
   */
  private getArrowIcon(): string {
    // set fallback class
    let arrowIcon = this.orientation === DIVIDER_ORIENTATION.HORIZONTAL ? 'arrow-down-regular' : 'arrow-right-regular';

    if (this.orientation === DIVIDER_ORIENTATION.HORIZONTAL) {
      arrowIcon = this.arrowDirection === DIRECTIONS.POSITIVE ? 'arrow-up-regular' : 'arrow-down-regular';
    } else {
      arrowIcon = this.arrowDirection === DIRECTIONS.POSITIVE ? 'arrow-right-regular' : 'arrow-left-regular';
    }
    return arrowIcon;
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('dividerTypeInternal')) {
      this.setDataTypeBasedOnDividerType(this.dividerTypeInternal);
    }

    if (changedProperties.has('orientation')) {
      this.setOrientation(this.orientation);
    }

    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
    }

    if (this.dividerTypeInternal === DIVIDER_TYPE_INTERNAL.TEXT && changedProperties.has('dividerAriaLabel')) {
      this.setTextDivider();
    }

    if (this.dividerTypeInternal === DIVIDER_TYPE_INTERNAL.GRABBER_BUTTON) {
      if (
        changedProperties.has('orientation')
        || changedProperties.has('arrowDirection')
        || changedProperties.has('buttonPosition')
        || changedProperties.has('dividerAriaLabel')
        || changedProperties.has('dividerAriaExpanded')
      ) {
        this.setGrabberButton();
      }
    }
  }

  /**
   * Sets the class of the Divider based on type.
   * @param type - The type of the divider.
   */
  private setDataTypeBasedOnDividerType(type: string) {
    if (type === DIVIDER_TYPE_INTERNAL.PRIMARY) {
      this.setAttribute('data-type', 'mdc-primary-divider');
    } else if (type === DIVIDER_TYPE_INTERNAL.TEXT) {
      this.setAttribute('data-type', 'mdc-text-divider');
    } else if (type === DIVIDER_TYPE_INTERNAL.GRABBER_BUTTON) {
      this.setAttribute('data-type', 'mdc-grabber-divider');
    }
  }

  /**
   * Infers the type of divider based on the kind of slot present.
   * @param slot - default slot of divider
   */
  private inferDividerType() {
    this.dividerTypeInternal = DIVIDER_TYPE_INTERNAL.PRIMARY;

    const slot = this.shadowRoot?.querySelector('slot');
    const assignedElements = slot?.assignedElements({ flatten: true }) || [];
    if (assignedElements.length > 1) return;

    const hasTextChild = assignedElements.some((el) => el.tagName === TEXT_TAG.toUpperCase());
    const hasButtonChild = assignedElements.some((el) => el.tagName === BUTTON_TAG.toUpperCase());

    if (hasTextChild && !hasButtonChild) {
      this.dividerTypeInternal = DIVIDER_TYPE_INTERNAL.TEXT;
      this.setTextDivider();
    } else if (!hasTextChild && hasButtonChild) {
      this.dividerTypeInternal = DIVIDER_TYPE_INTERNAL.GRABBER_BUTTON;
      this.setGrabberButton();
    }
  }

  protected override render() {
    return html`
      <div></div>
      <slot @slotchange=${this.inferDividerType}></slot>
      <div></div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Divider;
