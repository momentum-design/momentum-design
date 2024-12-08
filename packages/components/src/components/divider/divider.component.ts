import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './divider.styles';
import { Component } from '../../models';
import { DEFAULTS, DIVIDER_ORIENTATION, DIVIDER_TYPE_INTERNAL, DIVIDER_VARIANT } from './divider.constants';
import { DividerOrientation, DividerTypeInternal, DividerVariant } from './divider.types';

/**
 * `mdc-divider` is basically a line that can also have a button/text positioned centrally.
 * It is used to separate and organize the content and allow users to interact with the layout.
 *
 * Divider Orientation:
 * - **Horizontal**: A thin, horizontal line with 0.063rem width.
 * - **Vertical**: A thin, vertical line with 0.063rem width.
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
 * Note: If the slot is replaced by invalid tagname or multiple elements, then the type of divider is set to primary.
 *
 * @tagname mdc-divider
 *
 * @cssproperty --mdc-divider-background-color - background color of the divider
 * @cssproperty --mdc-divider-width - width of the divider
 * @cssproperty --mdc-divider-horizontal-gradient - gradient of the horizontal divider
 * @cssproperty --mdc-divider-vertical-gradient - gradient of the vertical divider
 * @cssproperty --mdc-divider-text-font-size - font size of text divider
 * @cssproperty --mdc-divider-text-font-color - font color of text divider
 * @cssproperty --mdc-divider-text-margin - left and right margin of label in the text divider
 */
class Divider extends Component {
  /**
   * Two orientations of divider
   * - **horizontal**: A thin, horizontal line with 0.063rem width.
   * - **vertical**: A thin, vertical line with 0.063rem width.
   * @default horizontal
   */
  @property({ type: String, reflect: true })
  orientation: DividerOrientation = DEFAULTS.ORIENTATION;

  /**
   * Two variants of divider
   * - **solid**: Solid line.
   * - **gradient**: Gradient Line.
   * @default solid
   */
  @property({ type: String, reflect: true })
  variant: DividerVariant = DEFAULTS.VARIANT;

  /**
   * Aria label to be set for accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * Aria expanded to be set for accessibility
   * Note: Possible values can be:
   * - **'true'**
   * - **'false'**
   * - **''**
   * @default false
   */
  @property({ type: String, attribute: 'aria-expanded' })
  override ariaExpanded: string = 'false';

  /**
   * Directions for the grabber arrow
   * - **Horizontal**: up, down
   * - **Vertical**: right, left
   * @default 'down'
   */
  @property({ type: String, attribute: 'arrow-direction', reflect: true })
  arrowDirection = DEFAULTS.ARROW_DIRECTION;

  /**
   * Direction for the grabber button
   * - **Horizontal**: up, down
   * - **Vertical**: right, left
   * @default 'down'
   */
  @property({ type: String, attribute: 'button-direction', reflect: true })
  buttonDirection = DEFAULTS.BUTTON_DIRECTION;

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
   * Sets the `aria-label` attribute for grabber buttons based on `aria-label` of the divider.
   * Sets the `aria-expanded` attribute for grabber buttons based on `aria-expanded` of the divider.
   * Sets the `prefix-icon` attribute for grabber buttons based on `arrow-direction` and `orientation`.
   * @returns {void}
   */
  private setGrabberButton(): void {
    const buttonElement = this.querySelector('mdc-button');
    if (!buttonElement) return;

    const iconType = this.getArrowIcon();
    buttonElement.setAttribute('variant', 'secondary');
    buttonElement.setAttribute('aria-label', this.ariaLabel || '');
    buttonElement.setAttribute('aria-expanded', this.ariaExpanded || '');
    buttonElement.setAttribute('prefix-icon', iconType);
    // Apply styles based on the button's position (buttonDirection)
    const positionClass = this.getButtonDirectionClass();
    buttonElement.classList.add(positionClass);
  }

  /**
   * Sets the `aria-label` attribute for label based on `aria-label` of the text divider.
   * @returns {void}
   */
  private setTextDivider(): void {
    const textElement = this.querySelector('mdc-text');
    if (!textElement) return;

    textElement.setAttribute('aria-label', this.ariaLabel || '');
  }

  /**
   * Determines the class to apply based on the `buttonDirection` and `orientation`.
   * Positions the button in the correct spot depending on whether the divider is vertical or horizontal.
   *
   * @returns {string} The CSS class that positions the button.
   */
  private getButtonDirectionClass(): string {
    // set fallback class
    let directionClass = this.orientation === DIVIDER_ORIENTATION.HORIZONTAL ? 'btn-down' : 'btn-left';

    if (this.orientation === DIVIDER_ORIENTATION.HORIZONTAL) {
      directionClass = this.buttonDirection === 'up' ? 'btn-up' : 'btn-down';
    } else {
      directionClass = this.buttonDirection === 'left' ? 'btn-left' : 'btn-right';
    }
    return directionClass;
  }

  /**
   * Determines the arrow icon based on the consumer-defined `arrowDirection`.
   *
   * @returns {string} The icon that represents the arrow direction.
   */
  private getArrowIcon(): string {
    // set fallback class
    let arrowIcon = this.orientation === DIVIDER_ORIENTATION.HORIZONTAL ? 'arrow-up-regular' : 'arrow-right-regular';

    if (this.orientation === DIVIDER_ORIENTATION.HORIZONTAL) {
      arrowIcon = this.arrowDirection === 'up' ? 'arrow-up-regular' : 'arrow-down-regular';
    } else {
      arrowIcon = this.arrowDirection === 'left' ? 'arrow-left-regular' : 'arrow-right-regular';
    }
    return arrowIcon;
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('dividerTypeInternal')) {
      this.setClassBasedOnType(this.dividerTypeInternal);
    }

    if (this.dividerTypeInternal === DIVIDER_TYPE_INTERNAL.GRABBER_BUTTON) {
      if (
        changedProperties.has('orientation') ||
        changedProperties.has('arrowDirection') ||
        changedProperties.has('buttonDirection') ||
        changedProperties.has('ariaLabel') ||
        changedProperties.has('ariaExpanded')
      ) {
        this.setGrabberButton();
      }
    }

    if (this.dividerTypeInternal === DIVIDER_TYPE_INTERNAL.TEXT && changedProperties.has('ariaLabel')) {
      this.setTextDivider();
    }

    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
    }
  }

  /**
   * Sets the class of the Divider based on type.
   * @param type - The type of the divider.
   */
  private setClassBasedOnType(type: string) {
    this.classList.remove('mdc-primary-divider', 'mdc-text-divider');
    if (type === DIVIDER_TYPE_INTERNAL.PRIMARY) {
      this.classList.add('mdc-primary-divider');
    } else if (type === DIVIDER_TYPE_INTERNAL.TEXT) {
      this.classList.add('mdc-text-divider');
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

    const hasTextChild = assignedElements.some(el => el.tagName === 'MDC-TEXT');
    const hasButtonChild = assignedElements.some(el => el.tagName === 'MDC-BUTTON');

    if (hasTextChild && !hasButtonChild) {
      this.dividerTypeInternal = DIVIDER_TYPE_INTERNAL.TEXT;
      this.setTextDivider();
    } else if (!hasTextChild && hasButtonChild) {
      this.dividerTypeInternal = DIVIDER_TYPE_INTERNAL.GRABBER_BUTTON;
      this.setGrabberButton();
    }
  }

  protected override render() {
    return html` <slot @slotchange=${this.inferDividerType}></slot> `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Divider;
