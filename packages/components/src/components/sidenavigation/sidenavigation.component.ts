import { CSSResult, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import styles from './sidenavigation.styles';
import { Component, Provider } from '../../models';
import SideNavigationContext from './sidenavigation.context';
import { DEFAULTS, VARIANTS } from './sidenavigation.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import type NavItem from '../navitem/navitem.component';
import type { Directions } from '../divider/divider.types';
import { DIRECTIONS } from '../divider/divider.constants';
import type { SideNavigationVariant } from './sidenavigation.types';

/**
 * The `mdc-sidenavigation` component provides a vertically stacked navigation experience,
 * typically used in layouts with persistent or collapsible sidebars.
 *
 * It supports different variants for layout behavior, handles internal context updates
 * for shared state, and dynamically manages visibility of nested elements like text labels.
 *
 * ## Features:
 * - Four layout variants: `fixed-collapsed`, `fixed-expanded`, `flexible`, and `hidden`
 * - Expand/collapse toggle behavior
 * - Displays Brand logo and customer name
 * - Emits `click` and `focus` events for accessibility and interaction
 * - Acts as a context provider for descendant components
 *
 * @dependency mdc-text
 * @dependency mdc-button
 * @dependency mdc-divider
 *
 * @event click - (React: onClick) This event is dispatched when the grabber divider button is clicked.
 * @event focus - (React: onFocus) This event is dispatched when the mdc-button, mdc-link
 * and grabber divider button receives focus.
 *
 * @tagname mdc-sidenavigation
 *
 * @slot scrollable-section - Slot for the scrollable-section section (e.g., navItemList, text).
 * @slot fixed-section - Slot for the fixed section of the sidenavigation (e.g., link, button).
 * @slot brand-logo - Slot for the brand logo (e.g., icon or img).
 *
 * @cssproperty --mdc-sidenavigation-expanded-width - width of the sideNavigation when expanded
 * @cssproperty --mdc-sidenavigation-collapsed-width - width of the sideNavigation collpased
 */
class SideNavigation extends Provider<SideNavigationContext> {
  constructor() {
    super({
      context: SideNavigationContext.context,
      initialValue: new SideNavigationContext(DEFAULTS.VARIANT, '', true),
    });
    this.role = DEFAULTS.ROLE;
  }

  public static get Context() {
    return SideNavigationContext.context;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('activechange', this.handleNestedNavItemActiveChange as EventListener);
    this.addEventListener('keydown', this.handleKeyDown);
    this.setAttribute('aria-expanded', String(this.expanded));
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('activechange', this.handleNestedNavItemActiveChange as EventListener);
    this.removeEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Four variants of the sideNavigation
   * - **fixed-collapsed**: Shows icons without labels and has fixed width, 4.5rem.
   * - **fixed-expanded**: Shows icons with labels and has fixed width, 14.75rem.
   * - **flexible**: Toggles between collapsed/expanded states.
   * - **hidden**: Removes the sidenavigation from the DOM.
   * @default flexible
   */
  @property({ type: String, reflect: true }) variant: string = DEFAULTS.VARIANT;

  /**
   * Name of the brandlogo
   * @default ''
   */
  @property({ type: String, reflect: true, attribute: 'customer-name' }) customerName: string = '';

  /**
  * Determines whether the sideNavigation is expanded or not.
  * @default true
  */
  @property({ type: Boolean, reflect: true }) public expanded: boolean = true;

  /**
   * Direction of the arrow icon, if applicable.
   * - **positive**
   * - **negative**
   *
   * Note: Positive and Negative directions are defined based on Cartesian plane.
   * @default 'negative'
   */
  @state() private arrowDirection: Directions = this.expanded ? DIRECTIONS.NEGATIVE : DIRECTIONS.POSITIVE;

  /**
   * Returns an array of all the navItems
   */
  @state() private navItems?: NavItem[];

  @query('slot[name="scrollable-section"]')
  private readonly scrollableSlot!: HTMLSlotElement;

  protected override firstUpdated(): void {
    this.navItems = this.getNavItems();
    this.updateTextVisibility();
  }

  private getNavItems(): NavItem[] {
    const elements = this.scrollableSlot?.assignedElements({ flatten: true }) ?? [];

    return elements.flatMap((el) =>
      Array.from(el.querySelectorAll?.('mdc-navitem') ?? []).filter(
        (node): node is NavItem => node.tagName.toLowerCase() === 'mdc-navitem',
      ));
  }

  private updateTextVisibility = (): void => {
    const assigned = this.scrollableSlot?.assignedElements({ flatten: true }) ?? [];
    assigned.forEach((el) => {
      const nestedTexts = el.querySelectorAll('mdc-text');
      nestedTexts?.forEach((text) => {
        const textElement = text as HTMLElement;
        textElement.style.display = this.expanded ? '' : 'none';
      });
    });
  };

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('variant') || changedProperties.has('customerName')
      || changedProperties.has('expanded')) {
      this.updateContext();
    }

    if (changedProperties.has('expanded')) {
      this.updateTextVisibility();
    }

    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
      this.updateExpandedState();
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
        || this.context.value.expanded !== this.expanded
    ) {
      this.context.value.variant = this.variant;
      this.context.value.customerName = this.customerName;
      this.context.value.expanded = this.expanded;
      this.context.updateObservers();
    }
  }

  /**
   * Sets the variant attribute for the sideNavigation component.
   * If the provided variant is not included in the variant,
   * it defaults to the value specified in DEFAULTS.VARIANT.
   *
   * @param variant - The variant to set.
   */
  private setVariant(variant: SideNavigationVariant) {
    this.setAttribute('variant', Object.values(VARIANTS).includes(variant) ? variant : DEFAULTS.VARIANT);
  }

  private updateExpandedState() {
    switch (this.variant) {
      case VARIANTS.FIXED_EXPANDED:
        this.expanded = true;
        this.ariaExpanded = String(this.expanded);
        break;
      case VARIANTS.FIXED_COLLAPSED:
        this.expanded = false;
        this.ariaExpanded = String(this.expanded);
        break;
      default:
        break;
    }
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    const keys = ['ArrowUp', 'ArrowDown', 'Home', 'End'];
    if (!keys.includes(event.key)) return;

    const currentIndex = this.getFocusedIndex();
    const nextIndex = this.resolveNextIndex(event.key, currentIndex);

    if (nextIndex !== -1) {
      this.focusNavItem(nextIndex);
      event.preventDefault();
    }
  };

  private getFocusedIndex(): number {
    const active = document.activeElement;
    return this.navItems?.findIndex(
      (item) => item === active || item.shadowRoot?.contains(active),
    ) ?? -1;
  }

  private resolveNextIndex(key: string, fromIndex: number): number {
    const enabledIndexes = this.getEnabledIndexes();
    if (!enabledIndexes.length) return -1;

    switch (key) {
      case 'Home':
        return enabledIndexes[0];
      case 'End':
        return enabledIndexes[enabledIndexes.length - 1];
      case 'ArrowUp':
      case 'ArrowDown': {
        const dir = key === 'ArrowUp' ? -1 : 1;
        const currentEnabledIdx = enabledIndexes.indexOf(fromIndex);
        const nextEnabledIdx = (currentEnabledIdx + dir + enabledIndexes.length) % enabledIndexes.length;
        return enabledIndexes[nextEnabledIdx];
      }
      default:
        return -1;
    }
  }

  private getEnabledIndexes(): number[] {
    return this.navItems
      ?.map((item, index) => (!item.hasAttribute('disabled') ? index : -1))
      .filter((i) => i !== -1) ?? [];
  }

  private focusNavItem(index: number): void {
    this.navItems?.forEach((item, i) => {
      item.setAttribute('tabindex', i === index ? '0' : '-1');
    });
    this.navItems?.[index]?.focus();
  }

  /**
   * Matches new navItem with navId.
   * @internal
   * @param NavItem- The new active navItem.
   */
  private findNav = (navs: NavItem[], navId: string): NavItem| undefined =>
    navs.find((nav) => nav.navId === navId);

  /**
   * Removes active attribute from all navItems and sets active on the new navItem.
   * @internal
   * @param navId - The id of the new active navItem.
   */
  private activateNavItem(newNav: NavItem): void {
    this.navItems?.forEach((nav) => nav.removeAttribute('active'));
    if (!newNav) return;
    newNav.setAttribute('active', '');
  }

  /**
   * Handle the navItem active change event fired from the nested navItem.
   * @internal
   * @param event - Custom Event fired from the nested navItem.
  */
  private handleNestedNavItemActiveChange = (event: CustomEvent<any>): void => {
    const newNavItem = this.findNav(this.navItems || [], event.detail.navId);
    this.activateNavItem(newNavItem as NavItem);
  };

  /**
   * Toggles navigation state for the flexible variant.
   * Updates `expanded`, `ariaExpanded`, and `arrowDirection`.
   *
   * @internal
   */
  private toggleSideNavigation(): void {
    if (this.variant === VARIANTS.FLEXIBLE) {
      this.expanded = !this.expanded;
      this.ariaExpanded = String(this.expanded);
      this.arrowDirection = this.arrowDirection === DIRECTIONS.NEGATIVE ? DIRECTIONS.POSITIVE : DIRECTIONS.NEGATIVE;
    }
  }

  public override render() {
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
                ${this.expanded ? html`<mdc-text type=${TYPE.BODY_MIDSIZE_MEDIUM} tagname=${VALID_TEXT_TAGS.SPAN} 
                part="label">${this.customerName}</mdc-text>` : nothing}
              </div>
          </div>
        </div>
        ${this.variant === VARIANTS.FLEXIBLE ? html`<mdc-divider
            orientation='vertical'
            variant='gradient'
            arrow-direction=${this.arrowDirection}
            button-position='positive'
            @click=${this.toggleSideNavigation}
          > <mdc-button aria-label="divider label"></mdc-button>
        </mdc-divider>` : nothing}
  `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default SideNavigation;
