import type { CSSResult } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './navitemlist.styles';
import MenuBar from '../menubar/menubar.component';
import { MenuMixin } from '../../utils/mixins/MenuMixin';
import { ORIENTATION } from '../menubar/menubar.constants';
import providerUtils from '../../utils/provider';
import { TAG_NAME as NAVITEM_TAGNAME } from '../navitem/navitem.constants';
import SideNavigation from '../sidenavigation/sidenavigation.component';
import type NavItem from '../navitem/navitem.component';

/**
 * `mdc-navitemlist` is a container component used to group multiple mdc-navitem elements into a navigation list.
 * It provides the structural foundation for organizing vertical nav items and
 * ensures consistent behavior and layout within side navigation patterns.
 *
 * Note: mdc-navitemlist is typically used within the sidenavigation component.
 * @tagname mdc-navitemlist
 *
 * @slot default - Slot for projecting one or more navigation items, optional section headers and dividers.
 */
class NavItemList extends MenuMixin(MenuBar) {
  /**
   * Determines whether the navItemList is expanded or not.
   *
   * @internal
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-label' })
  expanded?: boolean;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this, context: SideNavigation.Context });

  override connectedCallback(): void {
    super.connectedCallback();
    this.ariaOrientation = ORIENTATION.VERTICAL;
    this.addEventListener('activechange', this.handleNestedNavItemActiveChange as EventListener);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('activechange', this.handleNestedNavItemActiveChange as EventListener);
  }

  protected override updated(): void {
    const context = this.sideNavigationContext?.value;
    if (!context) return;

    const { expanded } = context;
    this.expanded = expanded;
  }

  /**
   * Handle the navItem active change event fired from the nested navItem.
   * @internal
   * @param event - Custom Event fired from the nested navItem.
   */
  private handleNestedNavItemActiveChange = (event: CustomEvent<any>): void => {
    const newNavItem = this.findNav(this.navItems as NavItem[] || [], event.detail.navId);
    if (this.sideNavigationContext?.value) {
      this.sideNavigationContext.value.setCurrentActiveNavItem(newNavItem);
    }
  };

  /**
   * Matches new navItem with navId.
   * @param NavItem - The new active navItem.
   *
   * @internal
   */
  private findNav = (navs: NavItem[], navId: string): NavItem| undefined => navs.find((nav) => nav.navId === navId);

  /**
   * Returns all nested, non-disabled mdc-navitem elements inside this component.
   */
  private get navItems(): NavItem[] {
    return Array.from(this.querySelectorAll(`${NAVITEM_TAGNAME}:not([disabled])`));
  }

  public static override styles: Array<CSSResult> = [...MenuBar.styles, ...styles];
}

export default NavItemList;
