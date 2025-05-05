import type { CSSResult } from 'lit';
import { html } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import styles from './navitemlist.styles';
import List from '../list/list.component';
import providerUtils from '../../utils/provider';
import { TAG_NAME as NAVITEM_TAGNAME } from '../navitem/navitem.constants';
import { TAG_NAME as TEXTITEM_TAGNAME } from '../text/text.constants';
import { TAG_NAME as DIVIDERITEM_TAGNAME } from '../divider/divider.constants';
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
 * @slot default - Slot for projecting one or more navigation items.
 */
class NavItemList extends List {
  @queryAssignedElements({ selector: `${NAVITEM_TAGNAME}:not([disabled])` })
  override listItems!: Array<HTMLElement>;

  @queryAssignedElements({ selector: TEXTITEM_TAGNAME })
  textItems!: Array<HTMLElement>;

  @queryAssignedElements({ selector: DIVIDERITEM_TAGNAME })
  dividerItems!: Array<HTMLElement>;

  /**
   * @internal
   */
  private readonly sideNavigationContext = providerUtils.consume({ host: this,
    context: SideNavigation.Context });

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
    this.updateTextStyles(isExpanded as boolean);
    this.updateDividerStyles();
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
   * @param NavItem- The new active navItem.
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

  private updateTextStyles = (isExpanded: boolean): void => {
    this.textItems?.forEach((text) => {
      const textElement = text as HTMLElement;
      textElement.style.display = isExpanded ? '' : 'none';
      if (isExpanded) {
        textElement.style.paddingLeft = '1.75rem';
      }
    });
  };

  private updateDividerStyles = (): void => {
    this.dividerItems?.forEach((divider) => {
      const dividerElement = divider as HTMLElement;
      dividerElement.style.margin = '0.75rem 0rem';
    });
  };

  public override render() {
    return html`
      <slot @click="${this.handleMouseClick}"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default NavItemList;
