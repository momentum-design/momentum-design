import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { Component, Provider } from '../../models';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
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
 * - Supports five layout variants: `fixed-collapsed`, `fixed-expanded`, `flexible`, `flexible-on-hover`, and `hidden`
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
 * @csspart side-navigation-container - The main container wrapping the entire side navigation.
 * @csspart scrollable-section - The scrollable section of the side navigation.
 * @csspart fixed-section - The fixed section of the side navigation.
 * @csspart separator - The divider between the scrollable and fixed sections.
 * @csspart brand-logo-container - The container wrapping the brand logo and footer text.
 * @csspart footer-text - The footer text label in the fixed section.
 * @csspart vertical-divider - The vertical divider between the scrollable and fixed sections.
 * @csspart vertical-divider-button - The button inside the vertical divider used to toggle expand/collapse.
 *
 * @event toggle - (React: onToggle) Dispatched when the grabber button is clicked to expand/collapse the sidenavigation.
 * @event activechange - (React: onActiveChange) Dispatched when the active state of a nested navmenuitem changes.
 *
 * @cssproperty --mdc-sidenavigation-expanded-width - width of the sideNavigation when expanded
 * @cssproperty --mdc-sidenavigation-collapsed-width - width of the sideNavigation when collapsed
 * @cssproperty --mdc-sidenavigation-vertical-divider-button-z-index - z-index of the vertical divider button
 */
class SideNavigation extends Provider<SideNavigationContext> {
  /**
   * Five variants of the sideNavigation
   * - **fixed-collapsed**: Shows icons without labels and has fixed width, 4.5rem.
   * - **fixed-expanded**: Shows icons with labels and has fixed width, 15rem.
   * - **flexible**: Toggles between collapsed/expanded states.
   * - **flexible-on-hover**: Similar to flexible, but the grabber button is only visible on hover or focus.
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
   * NOTE: For `fixed-collapsed` and `fixed-expanded` variants, this property is hard set to `false` and `true` respectively.
   * For `flexible` and `flexible-on-hover` variants, this property can be toggled / controlled from parent.
   *
   * @default true
   */
  @property({ type: Boolean, reflect: true, attribute: 'expanded' })
  expanded?: boolean;

  /**
   * Provides an accessible label for the grabber button.
   * This value is used to set the `aria-label` attribute for the button.
   *
   * @default ''
   */
  @property({ type: String, reflect: true, attribute: 'grabber-btn-aria-label' })
  grabberBtnAriaLabel?: string;

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
    this.setupFlexibleOnHoverListeners();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeFlexibleOnHoverListeners();
  }

  private isHovered: boolean = false;

  private isFocused: boolean = false;

  /** @internal */
  private handleMouseEnter() {
    this.isHovered = true;
    this.showGrabberButton();
  }

  /** @internal */
  private handleMouseLeave() {
    this.isHovered = false;
    if (!this.isFocused) {
      this.hideGrabberButton();
    }
  }

  /** @internal */
  private handleFocusIn(e: FocusEvent): void {
    if (!this.isFocused) {
      if (this.navMenuItems.find(item => item === e.target)) {
        // if target of focusin event is navMenuItem and it has not a visible focus, do not proceed further
        // this is to avoid showing grabber button on click events
        if (!(e.target as HTMLElement).matches(':focus-visible')) {
          return;
        }
      }
      this.isFocused = true;
      this.showGrabberButton();
    }
  }

  /** @internal */
  private handleFocusOut(e: FocusEvent): void {
    if (!this.contains(e.relatedTarget as Node)) {
      this.isFocused = false;
      if (!this.isHovered) {
        this.hideGrabberButton();
      }
    }
  }

  /** @internal */
  private showGrabberButton() {
    this.toggleAttribute('data-grabber-visible', true);
  }

  /** @internal */
  private hideGrabberButton() {
    this.toggleAttribute('data-grabber-visible', false);
  }

  /**
   * Sets up event listeners for flexible-on-hover variant.
   * Only adds listeners if the variant is flexible-on-hover.
   * @internal
   */
  private setupFlexibleOnHoverListeners = (): void => {
    if (this.variant === VARIANTS.FLEXIBLE_ON_HOVER) {
      this.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
      this.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
      this.addEventListener('focusin', this.handleFocusIn.bind(this));
      this.addEventListener('focusout', this.handleFocusOut.bind(this));
    }
  };

  /**
   * Removes event listeners for flexible-on-hover variant.
   * Safe to call regardless of current variant.
   * @internal
   */
  private removeFlexibleOnHoverListeners = (): void => {
    this.removeEventListener('mouseenter', this.handleMouseEnter.bind(this));
    this.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
    this.removeEventListener('focusin', this.handleFocusIn.bind(this));
    this.removeEventListener('focusout', this.handleFocusOut.bind(this));
  };

  public static get Context() {
    return SideNavigationContext.context;
  }

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);

      // Re-setup listeners when variant changes
      this.removeFlexibleOnHoverListeners();
      this.setupFlexibleOnHoverListeners();

      // hard set expanded state for fixed variants:
      switch (this.variant) {
        case VARIANTS.FIXED_EXPANDED:
          this.expanded = true;
          break;
        case VARIANTS.FIXED_COLLAPSED:
          this.expanded = false;
          break;
        default:
      }
    }

    if (changedProperties.has('variant') || changedProperties.has('expanded')) {
      this.updateContext();
    }
  }

  protected override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);

    if (
      (this.variant === VARIANTS.FLEXIBLE || this.variant === VARIANTS.FLEXIBLE_ON_HOVER) &&
      this.expanded === undefined
    ) {
      this.expanded = true;
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
    if (this.context.value.variant !== this.variant || this.context.value.expanded !== this.expanded) {
      this.context.value.variant = this.variant;
      this.context.value.expanded = this.expanded;
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
   * @internal
   */
  private get navMenuItems(): NavMenuItem[] {
    return Array.from(this.querySelectorAll(`${NAVMENUITEM_TAGNAME}:not([disabled])`));
  }

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
   *
   * @internal
   */
  private toggleSideNavigation(e: PointerEvent): void {
    this.expanded = !this.expanded;
    if (this.expanded === false && this.variant === VARIANTS.FLEXIBLE_ON_HOVER && e.pointerType === 'mouse') {
      // If collapsing via mouse click when in flexible-on-hover mode, reset hover/focus states
      this.isHovered = false;
      this.isFocused = false;
      this.hideGrabberButton();
    }
    this.dispatchEvent(new CustomEvent('toggle', { detail: { expanded: this.expanded } }));
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
            ${this.expanded && this.footerText
              ? html`<mdc-text type=${TYPE.BODY_MIDSIZE_MEDIUM} tagname=${VALID_TEXT_TAGS.SPAN} part="footer-text"
                  >${this.footerText}</mdc-text
                >`
              : nothing}
          </div>
        </div>
      </div>
      ${this.variant === VARIANTS.FLEXIBLE || this.variant === VARIANTS.FLEXIBLE_ON_HOVER
        ? html`<mdc-divider
            part="vertical-divider"
            orientation=${DIVIDER_ORIENTATION.VERTICAL}
            variant=${DIVIDER_VARIANT.GRADIENT}
            arrow-direction=${this.expanded ? DIRECTIONS.NEGATIVE : DIRECTIONS.POSITIVE}
            button-position=${DIRECTIONS.POSITIVE}
          >
            <mdc-button
              part="vertical-divider-button"
              aria-label=${this.grabberBtnAriaLabel ?? ''}
              @click=${this.toggleSideNavigation}
              aria-expanded="${!!this.expanded}"
              aria-controls="side-nav-container"
            ></mdc-button>
          </mdc-divider>`
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default SideNavigation;
