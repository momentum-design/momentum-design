import { CSSResult, html, PropertyValueMap } from 'lit';
import styles from './divider.styles';
import { property} from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS, DIVIDER_ORIENTATION, DIVIDER_VARIANT } from './divider.constants';
import { DividerVariant } from './divider.types';

/**
 * Divider Component
 *
 * @tagname mdc-divider
 *
 */
class Divider extends Component {
  /**
   * Divider orientation: horizontal or vertical
   * @default horizontal
   */
  @property({ type: String, reflect: true })
  orientation = DEFAULTS.ORIENTATION;

 /**
   * There are 2 variants of divider: solid and gradient. They are styled differently.
   * - **solid**: Solid line.
   * - **gradient**: Gradient Line.
   * @default solid
   */
 @property({ type: String, reflect: true }) 
 variant: DividerVariant = DEFAULTS.VARIANT;

  /**
   * Aria-label attribute to be set for accessibility
   * @default null
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * Aria expanded state for grabber dividers
   * @default null
   */
  @property({ type: String, attribute: 'aria-expanded' })
  override ariaExpanded: string | null = null;

  /**
   * Direction for the grabber arrow (e.g., positive or negative)
   * @default positive
   */
  @property({ type: String, attribute: 'arrow-direction', reflect: true })
  arrowDirection = DEFAULTS.ARROW_DIRECTION;

  /** @internal */
  // @state() 
  // private _dividerTypeInternal: DividerTypeInternal = DEFAULTS.TYPE_INTERNAL;  // can be removed if not used anywhere

  constructor() {
    super();
    this._determineType();
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
   * Determines the type of divider based on attributes and children.
   */
  private _determineType(): void {
    const hasTextChild = this.querySelector('mdc-text') !== null;
    const hasButtonChild = this.querySelector('mdc-button') !== null;

    if (hasTextChild) {
      //this._dividerTypeInternal = DIVIDER_TYPE_INTERNAL.TEXT;
    } else if (hasButtonChild) {
      //this._dividerTypeInternal = DIVIDER_TYPE_INTERNAL.GRABBER_BUTTON;
      this._setGrabberButton();
    } else {
      //this._dividerTypeInternal = DIVIDER_TYPE_INTERNAL.PRIMARY;
    }
  }
  /**
   * Sets the `aria-label` attribute for grabber buttons based on `aria-label` of the divider.
   * Sets the `aria-expanded` attribute for grabber buttons based on `aria-expanded` of the divider.
   * Sets the `prefix-icon` attribute for grabber buttons based on `arrow-direction` and `orientation`.
   * - **Horizontal**: 
   *   - Positive: `arrow-up`.
   *   - Negative: `arrow-down`.
   * - **Vertical**: 
   *   - Positive: `arrow-right`.
   *   - Negative: `arrow-left`.
   *
   * @returns {void}
   */
  private _setGrabberButton(): void {
    const buttonElement = this.querySelector('mdc-button');
    if (!buttonElement) return; 

    
    buttonElement.setAttribute('variant', 'secondary');
    

    // set aria-label of the button 
    if(this.ariaLabel){
      buttonElement.setAttribute('aria-label', this.ariaLabel);
    }

    // set aria-expanded of the button 
    if(this.ariaExpanded) {
      buttonElement.setAttribute('aria-expanded', 'true');
    } else {
      buttonElement.setAttribute('aria-expanded', 'false');
    }

    // Determine the appropriate icon
    const iconType = this._getArrowIcon();
    buttonElement.setAttribute('prefix-icon', iconType);
  }

  /**
   * Determines the arrow icon type based on `arrow-direction` and `orientation`.
   *
   * @returns {string} The icon type (e.g., 'arrow-up', 'arrow-down').
   */
  private _getArrowIcon(): string {
    if (this.orientation === DIVIDER_ORIENTATION.HORIZONTAL) {
      return this.arrowDirection === DEFAULTS.ARROW_DIRECTION ? 'arrow-up-regular' : 'arrow-down-regular';
    } else {
      return this.arrowDirection === DEFAULTS.ARROW_DIRECTION ? 'arrow-right-regular' : 'arrow-left-regular';
    }
  }

  public override update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.update(changedProperties);

    if (changedProperties.has('orientation') || changedProperties.has('arrowDirection')) {
      this._setGrabberButton();
    }

    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
    }
  }

  protected override render() {
    return html`
        <slot></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Divider;
