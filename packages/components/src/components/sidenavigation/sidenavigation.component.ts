import { CSSResult, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './sidenavigation.styles';
import { Component, Provider } from '../../models';
import SideNavigationContext from './sidenavigation.context';
import { DEFAULTS, VARIANTS } from './sidenavigation.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import type { Directions } from '../divider/divider.types';
import { DIRECTIONS, DIVIDER_VARIANT, DIVIDER_ORIENTATION } from '../divider/divider.constants';
import type { SideNavigationVariant } from './sidenavigation.types';
import { ROLE } from '../../utils/roles';

/**
 * The `mdc-sidenavigation` component provides a vertically stacked navigation experience,
 * typically used in layouts with persistent or collapsible sidebars.
 *
 * ## Features:
 * - Supports four layout variants: `fixed-collapsed`, `fixed-expanded`, `flexible`, and `hidden`
 * - Toggleable expand/collapse behavior
 * - Displays brand logo and customer name
 * - Serves as a context provider for descendant components
 *
 * ### Recommendations:
 * - Use `mdc-text` for section headers
 * - Use `mdc-divider` with the attribute `variant="gradient"` for section dividers
 * - For the brand logo, use an informative icon. Refer to `Momentum Informative Icons`
 *
 * #### Note:
 * - To ensure accessibility, it is strongly recommended to provide `aria-label` attributes for
 * both `NavItem` and `NavItemList` components.
 *
 * @dependency mdc-text
 * @dependency mdc-button
 * @dependency mdc-divider
 *
 * @event click - (React: onClick) Dispatched when the grabber divider button is clicked.
 * @event focus - (React: onFocus) Dispatched when the grabber divider button receives focus.
 * @event keydown - (React: onKeyDown) Dispatched when a key is pressed down on the grabber divider button.
 * @event keyup - (React: onKeyUp) Dispatched when a key is released on the grabber divider button.
 *
 * @tagname mdc-sidenavigation
 *
 * @slot scrollable-section - Slot for the scrollable content area of the side navigation.
 * @slot fixed-section - Slot for the fixed content area of the side navigation.
 * @slot brand-logo - Slot for the brand logo (e.g., icon or img).
 *
 * @cssproperty --mdc-sidenavigation-expanded-width - width of the sideNavigation when expanded
 * @cssproperty --mdc-sidenavigation-collapsed-width - width of the sideNavigation when collpased
 */
class SideNavigation extends Provider<SideNavigationContext> {
  constructor() {
    super({
      context: SideNavigationContext.context,
      initialValue: new SideNavigationContext(DEFAULTS.VARIANT, '', true),
    });
    this.role = ROLE.NAVIGATION;
  }

  public static get Context() {
    return SideNavigationContext.context;
  }

  /**
   * Four variants of the sideNavigation
   * - **fixed-collapsed**: Shows icons without labels and has fixed width, 4.5rem.
   * - **fixed-expanded**: Shows icons with labels and has fixed width, 15rem.
   * - **flexible**: Toggles between collapsed/expanded states.
   * - **hidden**: Removes the sidenavigation from the DOM.
   * @default flexible
   */
  @property({ type: String, reflect: true })
  variant: SideNavigationVariant = DEFAULTS.VARIANT;

  /**
   * Name of the customer. This is displayed in the bottom section of the side-navigation component.
   * @default ''
   */
  @property({ type: String, reflect: true, attribute: 'customer-name' })
  customerName: string = '';

  /**
   * Determines whether the sideNavigation is expanded or not.
   *
   * @internal
   */
  @property({ type: Boolean, reflect: true })
  isExpanded?: boolean;

  /**
   * Provides an accessible label for the grabber button.
   * This value is used to set the `aria-label` attribute for the button.
   *
   * @default null
   */
  @property({ type: String, reflect: true, attribute: 'grabber-btn-aria-label' })
  grabberBtnAriaLabel: string | null = null;

  /**
  * Toggles between true and false when it's variant is flexible.
  * @default true
  *
  * @internal
  */
  @state()
  private flexibleExpanded = this.variant === DEFAULTS.VARIANT;

  /**
   * Direction of the arrow icon, if applicable.
   * - **positive**
   * - **negative**
   *
   * Note: Positive and Negative directions are defined based on Cartesian plane.
   * @default 'negative'
   *
   * @internal
   */
  @state()
  private arrowDirection: Directions = this.flexibleExpanded ? DIRECTIONS.NEGATIVE : DIRECTIONS.POSITIVE;

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
      this.updateExpansionState();
    }

    if (changedProperties.has('variant') || changedProperties.has('customerName')
       || changedProperties.has('isExpanded')) {
      this.updateContext();
    }
  }

  /**
   * Update all observing components of this
   * provider to update the values
   *
   * Is called on every re-render, see Provider class
   */
  protected updateContext(): void {
    if (this.context.value.variant !== this.variant
        || this.context.value.customerName !== this.customerName
        || this.context.value.isExpanded !== this.isExpanded
    ) {
      this.context.value.variant = this.variant;
      this.context.value.customerName = this.customerName;
      this.context.value.isExpanded = this.isExpanded;
      this.context.updateObservers();
    }
  }

  /**
   * Syncs `isExpanded` and `aria-expanded` based on `variant` and `flexibleExpanded`.
   *
   * @internal
   */
  private updateExpansionState = (): void => {
    switch (this.variant) {
      case VARIANTS.FLEXIBLE:
        this.isExpanded = this.flexibleExpanded;
        break;
      case VARIANTS.FIXED_EXPANDED:
        this.isExpanded = true;
        break;
      case VARIANTS.FIXED_COLLAPSED:
        this.isExpanded = false;
        break;
      default:
        return;
    }

    this.setAttribute('aria-expanded', String(this.isExpanded));
  };

  /**
   * Sets the variant attribute for the sideNavigation component.
   * If the provided variant is not included in the variant,
   * it defaults to the value specified in DEFAULTS.VARIANT.
   *
   * @param variant - The variant to set.
   *
   * @internal
   */
  private setVariant(variant: SideNavigationVariant) {
    this.setAttribute('variant', Object.values(VARIANTS).includes(variant) ? variant : DEFAULTS.VARIANT);
  }

  /**
   * Toggles navigation state for the flexible variant.
   * Updates `flexibleExpanded`, `ariaExpanded`, and `arrowDirection`.
   *
   * @internal
   */
  private toggleSideNavigation(): void {
    this.flexibleExpanded = !this.flexibleExpanded;
    this.arrowDirection = this.arrowDirection === DIRECTIONS.NEGATIVE ? DIRECTIONS.POSITIVE : DIRECTIONS.NEGATIVE;
    this.updateExpansionState();
  }

  public override render() {
    if (this.variant === VARIANTS.HIDDEN) {
      return html``;
    }
    return html`
        <div part="side-navigation-container">
          <div part="scrollable-section">
            <slot name="scrollable-section"></slot>
          </div>
          <mdc-divider variant="gradient"></mdc-divider>
          <div part="fixed-section">
              <slot name="fixed-section"></slot>
              <div part="brand-logo-container">
                <slot name="brand-logo"></slot>
                ${this.isExpanded ? html`<mdc-text type=${TYPE.BODY_MIDSIZE_MEDIUM} tagname=${VALID_TEXT_TAGS.SPAN} 
                part="label">${this.customerName}</mdc-text>` : nothing}
              </div>
          </div>
        </div>
        ${this.variant === VARIANTS.FLEXIBLE ? html`<mdc-divider
            orientation=${DIVIDER_ORIENTATION.VERTICAL}
            variant=${DIVIDER_VARIANT.GRADIENT}
            arrow-direction=${this.arrowDirection}
            button-position=${DIRECTIONS.POSITIVE}
          > <mdc-button aria-label=${this.grabberBtnAriaLabel} @click=${this.toggleSideNavigation}></mdc-button>
        </mdc-divider>` : nothing}
  `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default SideNavigation;
