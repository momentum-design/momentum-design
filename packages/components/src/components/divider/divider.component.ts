import type { PropertyValues } from 'lit';
import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';

import {
  ARROW_ICONS,
  BUTTON_TAG,
  DEFAULTS,
  DIRECTIONS,
  DIVIDER_ORIENTATION,
  DIVIDER_VARIANT,
  TEXT_TAG,
} from './divider.constants';
import styles from './divider.styles';
import type { Directions, DividerOrientation, DividerVariant } from './divider.types';

/**
 * The Divider component provides a visual line to separate and organize content within layouts.
 * It supports both horizontal and vertical orientations with solid or gradient styles, and can
 * optionally include centered text labels or interactive grabber buttons.
 *
 * The divider automatically infers its type based on the content in its slot:
 * - **Primary**: Simple line with no content
 * - **Text**: Horizontal line with centered text label
 * - **Grabber Button**: Line with centered interactive button
 * 
 * **Note:**
 * - Vertical text dividers are not currently supported.
 * - If the slot contains invalid tag names or multiple elements, the divider defaults to the Primary type
 * - Use the provided CSS custom properties to customize divider styles
 *
 * ## When to use
 * Use dividers to create visual separation between content sections, list items, or layout regions.
 * Add text labels to provide context, or grabber buttons to create resizable panes.
 *
 * ## Accessibility
 * - When using a grabber button, provide `aria-label` to describe its purpose
 * - Set `aria-expanded` on the button to indicate the current state of resizable sections
 * - Ensure sufficient color contrast for the divider line
 *
 * @tagname mdc-divider
 *
 * @cssproperty --mdc-divider-background-color - Background color of the divider line.
 * @cssproperty --mdc-divider-width - Width (thickness) of the divider line.
 * @cssproperty --mdc-divider-horizontal-gradient - Gradient for horizontal dividers.
 * @cssproperty --mdc-divider-vertical-gradient - Gradient for vertical dividers.
 * @cssproperty --mdc-divider-text-size - Font size of the text label in text dividers.
 * @cssproperty --mdc-divider-text-color - Font color of the text label in text dividers.
 * @cssproperty --mdc-divider-text-margin - Left and right margin of the text label.
 * @cssproperty --mdc-divider-text-line-height - Line height of the text label.
 * @cssproperty --mdc-divider-grabber-button-background-color-normal - Background color of the grabber button in rest state.
 * @cssproperty --mdc-divider-grabber-button-background-color-hover - Background color of the grabber button in hover state.
 * @cssproperty --mdc-divider-grabber-button-background-color-pressed - Background color of the grabber button in pressed state.
 * @cssproperty --mdc-divider-grabber-button-border-color - Border color of the grabber button.
 * @cssproperty --mdc-divider-grabber-button-border-radius - Border radius of the grabber button.
 *
 * @slot - Content for the divider. Use `mdc-text` for text labels or `mdc-button` for grabber buttons.
 */
class Divider extends Component {
  /**
   * Determines the orientation of the divider line.
   * - **horizontal**: A thin horizontal line
   * - **vertical**: A thin vertical line
   *
   * Note: Vertical text dividers are not currently supported.
   * @default horizontal
   */
  @property({ type: String, reflect: true })
  orientation: DividerOrientation = DEFAULTS.ORIENTATION;

  /**
   * Visual style of the divider line.
   * - **solid**: Solid line with uniform color
   * - **gradient**: Gradient line that fades on both ends
   * @default solid
   */
  @property({ type: String, reflect: true })
  variant: DividerVariant = DEFAULTS.VARIANT;

  /**
   * Direction of the arrow icon displayed on the grabber button.
   * - **positive**: Up arrow (horizontal) or right arrow (vertical)
   * - **negative**: Down arrow (horizontal) or left arrow (vertical)
   *
   * Only applies when using a grabber button. Directions follow the Cartesian coordinate system.
   * @default negative
   */
  @property({ type: String, attribute: 'arrow-direction', reflect: true })
  arrowDirection: Directions = DEFAULTS.ARROW_DIRECTION;

  /**
   * Position of the grabber button along the divider line.
   * - **positive**: Right side (horizontal) or top side (vertical)
   * - **negative**: Left side (horizontal) or bottom side (vertical)
   *
   * Only applies when using a grabber button. Directions follow the Cartesian coordinate system.
   * @default negative
   */
  @property({ type: String, attribute: 'button-position', reflect: true })
  buttonPosition: Directions = DEFAULTS.BUTTON_DIRECTION;

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
    const defaultDirection =
      this.orientation === DIVIDER_ORIENTATION.HORIZONTAL ? DIRECTIONS.NEGATIVE : DIRECTIONS.POSITIVE;

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
    this.ensureValidDirections();
    const buttonElement = this.querySelector('mdc-button');
    if (buttonElement) {
      const iconType = this.getArrowIcon();
      buttonElement.setAttribute('variant', 'secondary');
      buttonElement.setAttribute('prefix-icon', iconType);
    }
  }

  /**
   * Determines the arrow icon based on the consumer-defined `arrowDirection`.
   *
   * @returns The icon that represents the arrow direction.
   */
  private getArrowIcon(): string {
    const isHorizontal = this.orientation === DIVIDER_ORIENTATION.HORIZONTAL;
    const isPositive = this.arrowDirection === DIRECTIONS.POSITIVE;

    if (isHorizontal) {
      return isPositive ? ARROW_ICONS.UP : ARROW_ICONS.DOWN;
    }

    return isPositive ? ARROW_ICONS.RIGHT : ARROW_ICONS.LEFT;
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('orientation')) {
      this.setOrientation(this.orientation);
    }

    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
    }

    if (
      changedProperties.has('orientation') ||
      changedProperties.has('arrowDirection') ||
      changedProperties.has('buttonPosition')
    ) {
      this.setGrabberButton();
    }
  }

  /**
   * Infers the type of divider based on the kind of slot present.
   * @param slot - default slot of divider
   */
  private inferDividerType() {
    const slot = this.shadowRoot?.querySelector('slot');
    const assignedElements = slot?.assignedElements({ flatten: true }) || [];
    if (assignedElements.length > 1) return;

    const hasTextChild = assignedElements.some(el => el.tagName === TEXT_TAG.toUpperCase());
    const hasButtonChild = assignedElements.some(el => el.tagName === BUTTON_TAG.toUpperCase());

    if (hasTextChild && !hasButtonChild) {
      this.setAttribute('data-type', 'mdc-text-divider');
    } else if (!hasTextChild && hasButtonChild) {
      this.setAttribute('data-type', 'mdc-grabber-divider');
      this.setGrabberButton();
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('data-type', 'mdc-primary-divider');
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
