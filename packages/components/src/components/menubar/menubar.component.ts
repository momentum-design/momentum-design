import { html } from 'lit';
import type { CSSResult, PropertyValues } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';

import { Component } from '../../models';
import { ROLE } from '../../utils/roles';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import { TAG_NAME as MENUSECTION_TAGNAME } from '../menusection/menusection.constants';
import { TAG_NAME as SIDENAV_TAGNAME } from '../sidenavigation/sidenavigation.constants';
import MenuPopover from '../menupopover';
import { DepthManager } from '../../utils/controllers/DepthManager';
import { ACTIONS, KeyToActionMixin } from '../../utils/mixins/KeyToActionMixin';

import { DEFAULTS, TAG_NAME as MENUBAR_TAGNAME } from './menubar.constants';
import styles from './menubar.styles';

/**
 * Menubar is a navigational menu component that provides a vertical fixed list of menu items,
 * with support for nested submenus and keyboard navigation. It serves as a container
 * for menu items and manages their interaction patterns, including:
 * - Keyboard navigation (Arrow keys, Home, End)
 * - Menu item activation (Enter/Space)
 * - Submenu toggling (Right/Left arrow keys)
 * - Focus management
 * - Integration with MenuPopover for nested menus
 *
 * A menubar will contain a set of menu items and their associated popovers.
 * Each menu item can have a popover for nested menus.
 *
 * The component automatically handles ARIA attributes and follows WAI-ARIA menu design patterns.
 * It works in conjunction with `mdc-menuitem` and `mdc-menupopover` to create accessible menu structures.
 *
 * **Note:** A menubar contains three types of menu items, including menuitem, menuitemradio and menuitemcheckbox. These menu items may optionally be nested in one or more group containers. Groups or items may optionally by separated with separator elements.
 *
 * `mdc-menubar` contains a group that wraps all its chilren passed within the default slot. This has been added to ensure the right accessibility behavior while using screen readers.
 *
 * @tagname mdc-menubar
 * @slot default - Contains the menu items and their associated popovers
 */
class MenuBar extends KeyToActionMixin(Component) {
  /** track the depth of the popover for z-index calculation
   * @internal
   */
  protected depthManager = new DepthManager(this);

  @queryAssignedElements({ selector: 'mdc-menusection', flatten: true })
  menusections!: Array<HTMLElement>;

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  override async connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENUBAR;
    this.ariaOrientation = DEFAULTS.ORIENTATION;

    document.addEventListener('click', this.handleClick, { capture: true });

    await this.updateComplete;

    // to make sure menusection dividers have the correct divider variant
    this.menusections?.forEach(section => {
      section.setAttribute('divider-variant', 'gradient');
    });
  }

  override async disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleClick, { capture: true });
  }

  /**
   * Returns all menuitem elements, including those nested inside menusection.
   */
  get menuItems(): Array<HTMLElement> {
    const slot = this.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedElements({ flatten: true }) ?? [];
    const items: HTMLElement[] = [];
    const collect = (el: Element) => {
      if (el.role === ROLE.MENUITEM && !el.hasAttribute('disabled')) {
        items.push(el as HTMLElement);
      } else if (el.tagName.toLowerCase() === MENUSECTION_TAGNAME) {
        Array.from(el.children).forEach(collect);
      }
    };
    assigned.forEach(collect);
    return items;
  }

  /** @internal */
  private getVisibleSubMenusOfItems(items: Array<HTMLElement>): Array<MenuPopover> {
    const subMenus = <Array<MenuPopover>>[];
    if (!items || items.length === 0) return subMenus;

    items.forEach(item => {
      const id = item.getAttribute('id');
      if (!id) return;

      const submenu = document.querySelector?.(`${MENUPOPOVER_TAGNAME}[triggerid="${id}"]`) as MenuPopover;
      if (submenu && submenu.visible) {
        subMenus.push(submenu);
      }
    });

    return subMenus;
  }

  /**
   * Returns all menupopovers, including direct and slotted ones .
   */
  private getAllPopovers(): Element[] {
    if (!this.menuItems.length) return [];
    const root = this.menuItems[0]?.closest(SIDENAV_TAGNAME) ?? this;
    if (!root) return [];

    const popovers: Element[] = [];

    const searchPopovers = (node: Element | ShadowRoot) => {
      // Check direct popovers
      node.querySelectorAll(`${MENUPOPOVER_TAGNAME}`).forEach(el => {
        popovers.push(el);
      });

      // Handle slots
      node.querySelectorAll('slot').forEach(slot => {
        const assigned = (slot as HTMLSlotElement).assignedElements({ flatten: true });
        assigned.forEach(searchPopovers);
      });
    };

    searchPopovers(root);

    return popovers;
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
  }

  public override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    this.resetTabIndexAndSetActiveTabIndex(this.menuItems);
    this.updatePopoverPlacement();
  }

  /**
   * Closes all other submenus on the top level.
   * This method is used to ensure that only one topolevel submenu is open at a time.
   * It finds all other menu items with submenus and closes their submenus.
   * @param target - The target menu item that was clicked.
   */
  private handleClick = (event: MouseEvent): void => {
    // Event is triggered from within the menubar
    if (event.composed && event.composedPath().find(el => el === this)) {
      const target = event.target as HTMLElement;
      if (!target || !this.isTopLevelMenuItem(target)) return;

      const otherMenuItemsOnTop = this.menuItems.filter(item => item !== target);
      const otherOpenSubMenus = this.getVisibleSubMenusOfItems(otherMenuItemsOnTop);

      otherOpenSubMenus.forEach(subMenu => {
        subMenu.hide();
      });
    }
  };

  /**
   * Resets all list items tabindex to -1 and sets the tabindex of the
   * element at the given index to 0, effectively setting the active
   * element. This is used when navigating the list via keyboard.
   *
   * @param newIndex - The index of the new active element in the list.
   */
  private resetTabIndexAndSetActiveTabIndex(menuItems: Array<HTMLElement>) {
    menuItems.forEach((node, index) => {
      const newTabindex = index === 0 ? '0' : '-1';
      node?.setAttribute('tabindex', newTabindex);
    });
  }

  private getCurrentIndex(target: EventTarget | null): number {
    return this.menuItems.findIndex(item => item === target || item === (target as HTMLElement).parentElement);
  }

  private getSubmenu(triggerId: string | null): MenuPopover | undefined {
    if (!triggerId) return undefined;
    return this.getAllPopovers().find(popover => popover.getAttribute('triggerid') === triggerId) as
      | MenuPopover
      | undefined;
  }

  private showSubmenu(triggerId: string | null): void {
    if (!triggerId) return;

    const triggerElement = this.menuItems.find(item => item.getAttribute('id') === triggerId);
    if (!triggerElement) return;

    const submenu = this.getSubmenu(triggerId);
    if (submenu) submenu.show();
  }

  private updatePopoverPlacement(): void {
    const placement = POPOVER_PLACEMENT.RIGHT_START;
    this.getAllPopovers().forEach(popover => {
      popover.setAttribute('placement', placement);
    });
  }

  private updateTabIndexAndFocus(menuItems: HTMLElement[], currentIndex: number, newIndex: number): void {
    if (newIndex < 0 || currentIndex < 0) return;

    if (currentIndex !== newIndex) {
      menuItems[currentIndex]?.setAttribute('tabindex', '-1');
      menuItems[newIndex]?.setAttribute('tabindex', '0');
    }

    menuItems[newIndex]?.focus();
  }

  private navigateToMenuItem(currentIndex: number, direction: 'prev' | 'next', shouldOpenSubmenu = false): void {
    const { length } = this.menuItems;
    if (length === 0) return;

    let newIndex = currentIndex;

    newIndex = direction === 'prev' ? (currentIndex - 1 + length) % length : (currentIndex + 1) % length;
    this.updateTabIndexAndFocus(this.menuItems, currentIndex, newIndex);
    if (shouldOpenSubmenu) {
      const triggerId = this.menuItems[newIndex]?.getAttribute('id');
      if (this.getSubmenu(triggerId) && !this.menuItems[newIndex].hasAttribute('soft-disabled')) {
        this.showSubmenu(triggerId);
      }
    }
  }

  /**
   * Determines if a menuitem is a top-level menuitem (direct child of menubar or child of menusection whose parent is menubar)
   */
  private isTopLevelMenuItem(element: HTMLElement): boolean {
    const parent = element.parentElement;
    if (!parent || element.role !== ROLE.MENUITEM) return false;

    const parentTag = parent.tagName.toLowerCase();
    const grandParentTag = parent.parentElement?.tagName.toLowerCase();

    if (parentTag === MENUBAR_TAGNAME || parentTag === SIDENAV_TAGNAME) return true;
    if (
      parentTag === MENUSECTION_TAGNAME &&
      (grandParentTag === MENUBAR_TAGNAME || grandParentTag === SIDENAV_TAGNAME)
    ) {
      return true;
    }

    return false;
  }

  private isNestedMenuItem(element: HTMLElement): boolean {
    return !!element.closest(MENUPOPOVER_TAGNAME) && element.role === ROLE.MENUITEM;
  }

  private async closeAllMenuPopovers() {
    const popovers = this.depthManager.popUntil(item => this.contains(item));

    await Promise.all(popovers.map(popover => popover.updateComplete));
  }

  private async crossMenubarNavigationOnLeft(element: HTMLElement): Promise<void> {
    const isMenuItem = element.role === ROLE.MENUITEM;
    if (isMenuItem) {
      const parentPopover = element.closest(MENUPOPOVER_TAGNAME);
      const triggerId = parentPopover?.getAttribute('triggerid');
      const triggerMenuItem = this.menuItems.find(item => item.getAttribute('id') === triggerId);
      if (triggerMenuItem) {
        if (this.isTopLevelMenuItem(triggerMenuItem)) {
          parentPopover?.hide();
        }
        await parentPopover?.updateComplete;
        const parentMenuItemIndex = this.getCurrentIndex(triggerMenuItem);
        this.navigateToMenuItem(parentMenuItemIndex, 'prev', true);
      }
    }
  }

  private async crossMenubarNavigationOnRight(element: HTMLElement): Promise<void> {
    if (this.isTopLevelMenuItem(element) && this.getSubmenu(element.id) && !element.hasAttribute('soft-disabled')) {
      this.showSubmenu(element.id);
    } else if (this.isNestedMenuItem(element) && !this.getSubmenu(element.id)) {
      await this.closeAllMenuPopovers();
      const parentIndex = this.getParentMenuItemIndex(element);
      if (parentIndex >= 0) this.navigateToMenuItem(parentIndex, 'next', true);
    }
  }

  private getParentMenuItemIndex(element: HTMLElement): number {
    let parent = element.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === MENUPOPOVER_TAGNAME) {
        const triggerId = parent.getAttribute('triggerid');
        const triggerElement = this.menuItems.find(item => item.getAttribute('id') === triggerId);

        if (triggerElement) {
          if (this.isTopLevelMenuItem(triggerElement)) {
            return this.menuItems.findIndex(item => item === triggerElement);
          }
          return this.getParentMenuItemIndex(triggerElement);
        }
      }
      parent = parent.parentElement;
    }

    return -1;
  }

  private async handleKeyDown(event: KeyboardEvent): Promise<void> {
    const currentIndex = this.getCurrentIndex(event.target);
    const action = this.getActionForKeyEvent(event, true);

    switch (action) {
      case ACTIONS.HOME:
        this.updateTabIndexAndFocus(this.menuItems, currentIndex, 0);
        break;

      case ACTIONS.END:
        this.updateTabIndexAndFocus(this.menuItems, currentIndex, this.menuItems.length - 1);
        break;

      case ACTIONS.LEFT: {
        const element = currentIndex >= 0 ? this.menuItems[currentIndex] : (event.target as HTMLElement);
        await this.crossMenubarNavigationOnLeft(element);
        break;
      }

      case ACTIONS.RIGHT: {
        const element = currentIndex >= 0 ? this.menuItems[currentIndex] : (event.target as HTMLElement);
        await this.crossMenubarNavigationOnRight(element);
        break;
      }

      case ACTIONS.UP: {
        this.navigateToMenuItem(currentIndex, 'prev');
        event.preventDefault();
        break;
      }

      case ACTIONS.DOWN: {
        this.navigateToMenuItem(currentIndex, 'next');
        event.preventDefault();
        break;
      }

      default:
        break;
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuBar;
