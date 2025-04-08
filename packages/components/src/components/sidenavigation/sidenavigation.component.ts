import { CSSResult, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import styles from './sidenavigation.styles';
import { Component, Provider } from '../../models';
import SideNavigationContext from './sidenavigation.context';
import { DEFAULTS, VARIANTS } from './sidenavigation.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
// eslint-disable-next-line import/no-cycle
import NavItem from '../navitem';
import { Directions } from '../divider/divider.types';
import { DIRECTIONS } from '../divider/divider.constants';
import { SideNavigationVariant } from './sidenavigation.types';

/**
 * SideNavigation component, which ...
 *
 * @tagname mdc-sidenavigation
 *
 * @slot - children
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class SideNavigation extends Provider<SideNavigationContext> {
  constructor() {
    super({
      context: SideNavigationContext.context,
      initialValue: new SideNavigationContext(DEFAULTS.VARIANT, '', true),
    });
    this.role = DEFAULTS.ROLE;
    this.addEventListener('activechange', this.handleNestedTabActiveChange as EventListener);
  }

  public static get Context() {
    return SideNavigationContext.context;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('aria-expanded', 'true');
    this.navItems = Array.from(document.querySelectorAll('mdc-navitem'));
    if (this.scrollableSlot) {
      this.scrollableSlot.addEventListener('slotchange', this.handleSlotChange);
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.scrollableSlot?.removeEventListener('slotchange', this.handleSlotChange);
  }

  @property({ type: String, reflect: true }) variant: string = DEFAULTS.VARIANT;

  @property({ type: String, reflect: true, attribute: 'customer-name' }) customerName: string = '';

  @property({ type: Boolean, reflect: true }) public expanded: boolean = true;

  @state() private arrowDirection: Directions = this.expanded ? DIRECTIONS.NEGATIVE : DIRECTIONS.POSITIVE;

  @state() navItems?: NavItem[];

  @query('slot[name="scrollable-section"]') private scrollableSlot!: HTMLSlotElement;

  private handleSlotChange = (): void => {
    const assigned = this.scrollableSlot?.assignedElements({ flatten: true }) ?? [];
    assigned.forEach((el) => {
      const nestedTexts = el.querySelectorAll?.('mdc-text');
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
      this.handleSlotChange();
    }

    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);
      this.updateExpandedState();
    }
  }

  private updateExpandedState() {
    switch (this.variant) {
      case VARIANTS.FIXED_EXPANDED:
        this.expanded = true;
        this.ariaExpanded = this.expanded ? 'true' : 'false';
        break;
      case VARIANTS.FIXED_COLLAPSED:
        this.expanded = false;
        this.ariaExpanded = this.expanded ? 'true' : 'false';
        break;
      default:
        break;
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

  private toggleSideNavigation(): void {
    if (this.variant === VARIANTS.FLEXIBLE) {
      this.expanded = !this.expanded;
      this.ariaExpanded = this.expanded ? 'true' : 'false';
      this.arrowDirection = this.arrowDirection === DIRECTIONS.NEGATIVE ? DIRECTIONS.POSITIVE : DIRECTIONS.NEGATIVE;
    }
  }

  // keep it in utils later, overriding tabId.....
  private findNav = (navs: NavItem[], navId: string): NavItem| undefined =>
    navs.find((nav) => nav.navId === navId);

  /**
   * Removes active attribute from all tabs and sets active on the new tab.
   *
   * @param navId - The id of the new active tab.
   */
  private setActiveNav(newNav: NavItem): void {
    this.navItems?.forEach((nav) => nav.removeAttribute('active'));
    newNav.setAttribute('active', '');
  }

    /**
   * Handle the tab active change event fired from the nested tab.
   *
   * @internal
   *
   * @param event - Custom Event fired from the nested tab.
   */
    private handleNestedTabActiveChange = (event: CustomEvent<any>): void => {
      const newNavItem = this.findNav(this.navItems || [], event.detail.navId);
      if (!(newNavItem instanceof NavItem)) { return; }
      this.setActiveNav(newNavItem);
    };

    public override render() {
      return html`
        <div part="side-navigation-container">
          <div part="scrollable-section">
            <slot name="scrollable-section"></slot>
          </div>
          <mdc-divider variant="gradient"></mdc-divider>
          <div part="fixed-section">
              <slot name="fixed-section-button"></slot>
              <slot name="fixed-section-link"></slot>
              <div part="brand-logo-container">
                <slot name="brand-logo"></slot>
                <mdc-text type=${TYPE.BODY_MIDSIZE_MEDIUM} tagname=${VALID_TEXT_TAGS.SPAN} 
                part="label">${this.customerName}</mdc-text>
              </div>
          </div>
        </div>
        ${this.variant === VARIANTS.FLEXIBLE ? html`<mdc-divider
            orientation='vertical'
            variant='gradient'
            arrow-direction=${this.arrowDirection}
            button-position='positive'
            @click=${this.toggleSideNavigation}
          > <mdc-button role="button" aria-label="divider label"></mdc-button>
        </mdc-divider>` : nothing}
  `;
    }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default SideNavigation;
