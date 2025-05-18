import type { CSSResult } from 'lit';
import { html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import styles from './navitemlist.styles';
import List from '../list/list.component';
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
class NavItemList extends List {
  @queryAssignedElements({ selector: `${NAVITEM_TAGNAME}:not([disabled])` })
  override listItems!: Array<HTMLElement>;

  /**
   * Determines whether the navItemList is expanded or not.
   *
   * @internal
   */
  @property({ type: Boolean, reflect: true })
  isExpanded?: boolean;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this, context: SideNavigation.Context });

  override connectedCallback(): void {
    super.connectedCallback();
    this.setRole();
    this.ariaOrientation = 'vertical';
    this.addEventListener('activechange', this.handleNestedNavItemActiveChange as EventListener);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('activechange', this.handleNestedNavItemActiveChange as EventListener);
  }

  protected override updated(): void {
    const context = this.sideNavigationContext?.value;
    if (!context) return;

    const { isExpanded } = context;
    this.isExpanded = isExpanded;
  }

  /**
   * Sets the role of the navitemlist based on whether it's a top-level menubar
   * or a nested menu.
   */
  private setRole(): void {
    let parent = this.parentElement;
    let isNested = false;

    while (parent) {
      if (parent.tagName.toLowerCase() === 'mdc-navitemlist') {
        isNested = true;
        break;
      }
      parent = parent.parentElement;
    }
    this.setAttribute('role', isNested ? 'menu' : 'menubar');
  }

  /**
   * Handle the navItem active change event fired from the nested navItem.
   * @internal
   * @param event - Custom Event fired from the nested navItem.
   */
  private handleNestedNavItemActiveChange = (event: CustomEvent<any>): void => {
    const newNavItem = this.findNav(this.listItems as NavItem[] || [], event.detail.navId);
    this.activateNavItem(newNavItem as NavItem);
  };

  /**
   * Matches new navItem with navId.
   * @param NavItem - The new active navItem.
   *
   * @internal
   */
  private findNav = (navs: NavItem[], navId: string): NavItem| undefined => navs.find((nav) => nav.navId === navId);

  /**
   * Removes active attribute from all listItems and sets active on the new navItem.
   * @param navId - The id of the new active navItem.
   *
   * @internal
   */
  private activateNavItem(newNav: NavItem): void {
    this.listItems?.forEach((nav) => nav.removeAttribute('active'));
    if (!newNav) return;
    newNav.setAttribute('active', '');
  }

  public override render() {
    return html`
      <slot @click="${this.handleMouseClick}"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default NavItemList;
