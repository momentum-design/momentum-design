import { CSSResult, html, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './divider.styles';
import { Component } from '../../models';
import {
  ARROW_ICONS,
  BUTTON_TAG,
  DEFAULTS,
  DIRECTIONS,
  DIVIDER_ORIENTATION,
  DIVIDER_TYPE_INTERNAL,
  DIVIDER_VARIANT,
  TEXT_TAG,
} from './divider.constants';
import { Directions, DividerOrientation, DividerTypeInternal, DividerVariant } from './divider.types';

/**
 * `mdc-divider` is a component that provides a line to separate and organize content.
 * It can also include a button or text positioned centrally, allowing users to interact with the layout.
 *
 * **Divider Orientation:**
 * - **Horizontal**: A thin, horizontal line.
 * - **Vertical**: A thin, vertical line.
 *
 * **Divider Variants:**
 * - **solid**: Solid line.
 * - **gradient**: Gradient Line.
 *
 * **Divider Types:**
 * - The type of divider is inferred based on the kind of slot present.
 *  - **Primary**: A simple horizontal or vertical divider.
 *  - **Text**: A horizontal divider with a text label in the center.
 *  - **Grabber Button**: A horizontal or vertical divider with a styled button in the center.
 *
 * **Accessibility:**
 * - When the slot is replaced by an `mdc-button`:
 *   - `aria-label` should be passed to the `mdc-button`.
 *   - `aria-expanded` should be passed to the `mdc-button`.
 *
 * **Notes:**
 * - If the slot is replaced by an invalid tag name or contains multiple elements,
 *   the divider defaults to the **Primary** type.
 * - To override the styles of the divider, use the provided CSS custom properties.
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

  /** @internal */
  @state()
  private observer: MutationObserver;

  /** @internal */
  @state()
  private windowDirection: string = 'ltr';

  constructor() {
    super();
    this.observer = new MutationObserver(() => this.handleWindowDirectionChange());
  }

  private handleWindowDirectionChange() {
    const currentDirection = getComputedStyle(this).direction;

    if (this.windowDirection !== currentDirection) {
      this.windowDirection = currentDirection;
    }
    this.setGrabberButton();
  }

  override connectedCallback() {
    super.connectedCallback();
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir'],
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
  }

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
   * Sets the buttonPosition and arrowDirection attribute for the divider component.
   * If the provided buttonPosition and arrowDirection are not included in the DIRECTIONS,
   * it defaults to the value specified in DIRECTIONS based on the ORIENTATION.
   *
   * @param buttonPosition - The buttonPosition to set.
   * @param arrowDirection - The arrowDirection to set.
   */
  private ensureValidDirections() {
    const defaultDirection = this.orientation === DIVIDER_ORIENTATION.HORIZONTAL
      ? DIRECTIONS.NEGATIVE
      : DIRECTIONS.POSITIVE;

    if (!Object.values(DIRECTIONS).includes(this.buttonPosition as Directions)) {
      this.buttonPosition = defaultDirection;
    }

    if (!Object.values(DIRECTIONS).includes(this.arrowDirection as Directions)) {
      this.arrowDirection = defaultDirection;
    }
  }

  /**
   * Configures the grabber button within the divider.
   *
   * - Sets the `prefix-icon` attribute for the grabber button based
   * on the `arrow-direction` and `orientation` properties.
   *
   * This method updates the DOM element dynamically if a grabber button is present.
   */
  private setGrabberButton(): void {
    const buttonElement = this.querySelector('mdc-button');
    if (!buttonElement) return;

    this.ensureValidDirections();
    const iconType = this.getArrowIcon();
    buttonElement.setAttribute('variant', 'secondary');
    buttonElement.setAttribute('prefix-icon', iconType);
  }

  /**
   * Determines the arrow icon based on the consumer-defined `arrowDirection`.
   *
   * @returns The icon that represents the arrow direction.
   */
  private getArrowIcon(): string {
    const isHorizontal = this.orientation === DIVIDER_ORIENTATION.HORIZONTAL;
    const isPositive = this.arrowDirection === DIRECTIONS.POSITIVE;
    const isRTL = this.windowDirection === 'rtl';

    if (isHorizontal) {
      return isPositive ? ARROW_ICONS.UP : ARROW_ICONS.DOWN;
    }

    if (isPositive) {
      return isRTL ? ARROW_ICONS.LEFT : ARROW_ICONS.RIGHT;
    }

    return isRTL ? ARROW_ICONS.RIGHT : ARROW_ICONS.LEFT;
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

    if (this.dividerTypeInternal === DIVIDER_TYPE_INTERNAL.GRABBER_BUTTON) {
      if (
        changedProperties.has('orientation')
        || changedProperties.has('arrowDirection')
        || changedProperties.has('buttonPosition')
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
