import { CSSResult, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';

import { Component, Provider } from '../../models';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import type { Directions } from '../divider/divider.types';
import { TAG_NAME as NAVMENUITEM_TAGNAME } from '../navmenuitem/navmenuitem.constants';
import { DIRECTIONS, DIVIDER_VARIANT, DIVIDER_ORIENTATION } from '../divider/divider.constants';
import { ROLE } from '../../utils/roles';
import type NavMenuItem from '../navmenuitem';
import { KEYS } from '../../utils/keys';

import type { SideNavigationVariant } from './sidenavigation.types';
import { DEFAULTS, VARIANTS } from './sidenavigation.constants';
import SideNavigationContext from './sidenavigation.context';
import styles from './sidenavigation.styles';

/**
 * The `mdc-sidenavigation` component provides a vertically stacked navigation experience,
 * typically used in layouts with persistent or collapsible sidebars.
 *
 * ## Features:
 * - Supports four layout variants: `fixed-collapsed`, `fixed-expanded`, `flexible`, and `hidden`
 * - Toggleable expand/collapse behavior
 * - Displays brand logo and customer name
 * - Serves as a context provider for descendant components - `mdc-menubar` and `mdc-navmenuitem`
 *
 * ### Usage:
 * In a sidenavigation, navmenuitems can be used in the following ways:
 *
 * 1. **Simple navmenuitem** – No submenu or interaction beyond selection.
 *
 * 2. **NavMenuItem with submenu**:
 *    - Provide an `id` on the `mdc-navmenuitem`
 *    - Set the `triggerId` on the corresponding `mdc-menupopover` to match the navmenuitem's `id`
 *    - Set `parent-nav-tooltip-text` with appropriate text that will display when a child menu item
 *      inside the nested menupopover is active, conveying which submenu item is currently selected
 *
 * 3. **Actionable navmenuitem (no submenu)**:
 *    - Performs an action such as navigation or alert trigger
 *    - Set `disable-aria-current="true"` to maintain visual active state without navigation behavior
 *
 * ### Recommendations:
 * - Use `mdc-text` for section headers
 * - Use `mdc-divider` with the attribute `variant="gradient"` for section dividers
 * - For the brand logo, use an informative icon. Refer to `Momentum Informative Icons`
 *
 * #### Accessibility Notes:
 * - Always provide meaningful `aria-label` attributes for both `mdc-navmenuitem` and `mdc-menubar`
 * to ensure screen reader support
 * - Set `grabber-btn-aria-label` to provide accessible labels for the expand/collapse grabber button
 *
 * @dependency mdc-text
 * @dependency mdc-button
 * @dependency mdc-divider
 * @dependency mdc-menubar
 *
 * @event activechange - (React: onActiveChange) Dispatched when the active state of the navmenuitem changes.
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
      initialValue: new SideNavigationContext(DEFAULTS.VARIANT, true),
    });

    this.addEventListener('activechange', this.handleNestedNavMenuItemActiveChange.bind(this) as EventListener);
  }

  override connectedCallback(): void {
    super.connectedCallback();
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
   * Displays footer text in the bottom section of the sidenavigation.
   * @default ''
   */
  @property({ type: String, reflect: true, attribute: 'footer-text' })
  footerText: string = '';

  /**
   * Determines whether the sideNavigation is expanded or not.
   *
   * @internal
   */
  @property({ type: Boolean, reflect: true })
  expanded?: boolean;

  /**
   * Provides an accessible label for the grabber button.
   * This value is used to set the `aria-label` attribute for the button.
   *
   * @default ''
   */
  @property({ type: String, reflect: true, attribute: 'grabber-btn-aria-label' })
  grabberBtnAriaLabel?: string;

  /**
   * Tooltip text shown on parent nav items when a child is active.
   */
  @property({ type: String, reflect: true, attribute: 'parent-nav-tooltip-text' })
  parentNavTooltipText?: string;

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

    if (changedProperties.has('variant') || changedProperties.has('expanded')) {
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
    if (
      this.context.value.variant !== this.variant ||
      this.context.value.expanded !== this.expanded ||
      this.context.value.parentNavTooltipText !== this.parentNavTooltipText
    ) {
      this.context.value.variant = this.variant;
      this.context.value.expanded = this.expanded;
      this.context.value.parentNavTooltipText = this.parentNavTooltipText;
      this.context.updateObservers();
    }
  }

  /**
   * Handle the navMenuItem active change event fired from the nested navMenuItem.
   * @internal
   * @param event - Custom Event fired from the nested navMenuItem.
   */
  private handleNestedNavMenuItemActiveChange = (event: CustomEvent<any>): void => {
    if (this.context?.value) {
      const newNavMenuItem = this.findNav(this.navMenuItems, event.detail.navId);
      this.context.value.setCurrentActiveNavMenuItem(newNavMenuItem);
    }
  };

  /**
   * Matches new navMenuItem with navId.
   * @param NavMenuItem - The new active navMenuItem.
   *
   * @internal
   */
  private findNav = (navs: NavMenuItem[], navId: string): NavMenuItem | undefined =>
    navs.find(nav => nav.navId === navId);

  /**
   * Returns all nested, non-disabled mdc-navmenuitem elements inside this component.
   */
  private get navMenuItems(): NavMenuItem[] {
    return Array.from(this.querySelectorAll(`${NAVMENUITEM_TAGNAME}:not([disabled])`));
  }

  /**
   * Syncs `expanded` and `aria-expanded` based on `variant` and `flexibleExpanded`.
   *
   * @internal
   */
  private updateExpansionState = (): void => {
    switch (this.variant) {
      case VARIANTS.FLEXIBLE:
        this.expanded = this.flexibleExpanded;
        break;
      case VARIANTS.FIXED_EXPANDED:
        this.expanded = true;
        break;
      case VARIANTS.FIXED_COLLAPSED:
        this.expanded = false;
        break;
      default:
    }
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

  private preventScrollOnSpace(event: KeyboardEvent): void {
    // Prevent default space key behavior to avoid scrolling the page
    if (event.key === KEYS.SPACE) {
      event.preventDefault();
    }
  }

  public override render() {
    if (this.variant === VARIANTS.HIDDEN) {
      return html``;
    }
    return html`
      <div part="side-navigation-container" id="side-nav-container">
        <div part="scrollable-section" tabindex="-1" @keydown=${this.preventScrollOnSpace}>
          <slot name="scrollable-section">
            <mdc-menubar>
              <slot name="scrollable-menubar"></slot>
            </mdc-menubar>
          </slot>
        </div>
        <mdc-divider variant="gradient" part="separator"></mdc-divider>
        <div part="fixed-section">
          <slot name="fixed-section">
            <mdc-menubar>
              <slot name="fixed-menubar"></slot>
            </mdc-menubar>
          </slot>
          <div part="brand-logo-container">
            <slot name="brand-logo"></slot>
            ${this.expanded
              ? html`<mdc-text type=${TYPE.BODY_MIDSIZE_MEDIUM} tagname=${VALID_TEXT_TAGS.SPAN} part="label"
                  >${this.footerText}</mdc-text
                >`
              : nothing}
          </div>
        </div>
      </div>
      ${this.variant === VARIANTS.FLEXIBLE
        ? html`<mdc-divider
            orientation=${DIVIDER_ORIENTATION.VERTICAL}
            variant=${DIVIDER_VARIANT.GRADIENT}
            arrow-direction=${this.arrowDirection}
            button-position=${DIRECTIONS.POSITIVE}
          >
            <mdc-button
              aria-label=${this.grabberBtnAriaLabel ?? ''}
              @click=${this.toggleSideNavigation}
              aria-expanded="${!!this.expanded}"
              aria-controls="side-nav-container"
              part="grabber-btn"
            ></mdc-button>
          </mdc-divider>`
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default SideNavigation;
