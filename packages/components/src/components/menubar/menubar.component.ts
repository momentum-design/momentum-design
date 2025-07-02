import { html } from 'lit';
import type { CSSResult, PropertyValues } from 'lit';

import { Component } from '../../models';
import { ROLE } from '../../utils/roles';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import { TAG_NAME as MENUSECTION_TAGNAME } from '../menusection/menusection.constants';
import { KEYS } from '../../utils/keys';
import MenuPopover from '../menupopover';
import { popoverStack } from '../popover/popover.stack';

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
class MenuBar extends Component {
  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.MENUBAR;
    this.ariaOrientation = DEFAULTS.ORIENTATION;
  }

  /**
   * Returns all menuitem elements, including those nested inside menusection.
   */
  get menuItems(): Array<HTMLElement> {
    const slot = this.shadowRoot?.querySelector('slot');
    const assigned = slot?.assignedElements({ flatten: true }) ?? [];
    const items: HTMLElement[] = [];
    const collect = (el: Element) => {
      if (el.role === ROLE.MENUITEM) {
        items.push(el as HTMLElement);
      } else if (el.tagName.toLowerCase() === MENUSECTION_TAGNAME) {
        Array.from(el.children).forEach(collect);
      }
    };
    assigned.forEach(collect);
    return items;
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    this.updatePopoverPlacement();
  }

  public override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    this.resetTabIndexAndSetActiveTabIndex(this.menuItems);
  }

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

  private updatePopoverPlacement(): void {
    const allPopovers = this.querySelectorAll(`${MENUPOPOVER_TAGNAME}:not([disabled])`);
    const placement = POPOVER_PLACEMENT.RIGHT_START;

    allPopovers.forEach(popover => popover.setAttribute('placement', placement));
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

    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + length) % length;
    } else {
      newIndex = (currentIndex + 1) % length;
    }

    this.updateTabIndexAndFocus(this.menuItems, currentIndex, newIndex);
    if (shouldOpenSubmenu) {
      const triggerId = this.menuItems[newIndex]?.getAttribute('id');
      if (this.hasSubmenu(triggerId) && !this.menuItems[newIndex].hasAttribute('soft-disabled')) {
        this.showSubmenu(triggerId);
      }
    }
  }

  private showSubmenu(triggerId: string | null): void {
    const submenu = this.querySelector(`${MENUPOPOVER_TAGNAME}[triggerid="${triggerId}"]`) as MenuPopover | null;
    submenu?.showPopover();
  }

  private getKeyWithDirectionFix(originalKey: string): string {
    const isRtl = window.getComputedStyle(this).direction === 'rtl';

    if (!isRtl) return originalKey;

    if (originalKey === KEYS.ARROW_LEFT) return KEYS.ARROW_RIGHT;
    if (originalKey === KEYS.ARROW_RIGHT) return KEYS.ARROW_LEFT;

    return originalKey;
  }

  /**
   * Determines if a menuitem is a top-level menuitem (direct child of menubar or child of menusection whose parent is menubar)
   */
  private isTopLevelMenuItem(element: HTMLElement): boolean {
    const parent = element.parentElement;
    if (!parent) return false;
    if (parent.tagName.toLowerCase() === MENUBAR_TAGNAME && element.role === ROLE.MENUITEM) {
      return true;
    }
    // If parent is menusection and its parent is menubar
    if (
      parent.tagName.toLowerCase() === MENUSECTION_TAGNAME &&
      parent.parentElement?.tagName.toLowerCase() === MENUBAR_TAGNAME &&
      element.role === ROLE.MENUITEM
    ) {
      return true;
    }
    return false;
  }

  private isNestedMenuItem(element: HTMLElement): boolean {
    return !!element.closest(MENUPOPOVER_TAGNAME) && element.role === ROLE.MENUITEM;
  }

  private async closeAllMenuPopovers() {
    const popovers = [];

    while (popoverStack.peek()) {
      const popover = popoverStack.pop();
      if (popover) {
        popover.hidePopover();
        popovers.push(popover);
      }
    }
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
          parentPopover?.hidePopover();
        }
        await parentPopover?.updateComplete;
        const parentMenuItemIndex = this.getCurrentIndex(triggerMenuItem);
        this.navigateToMenuItem(parentMenuItemIndex, 'prev', true);
      }
    }
  }

  private async crossMenubarNavigationOnRight(element: HTMLElement): Promise<void> {
    if (this.isTopLevelMenuItem(element) && this.hasSubmenu(element.id) && !element.hasAttribute('soft-disabled')) {
      this.showSubmenu(element.id);
    } else if (this.isNestedMenuItem(element) && !this.hasSubmenu(element.id)) {
      await this.closeAllMenuPopovers();
      const parentIndex = this.getParentMenuItemIndex(element);
      if (parentIndex >= 0) this.navigateToMenuItem(parentIndex, 'next', true);
    }
  }

  private hasSubmenu(triggerId: string | null): boolean {
    return !!this.querySelector(`${MENUPOPOVER_TAGNAME}[triggerid="${triggerId}"]`);
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
    const key = this.getKeyWithDirectionFix(event.key);

    switch (key) {
      case KEYS.HOME:
        this.updateTabIndexAndFocus(this.menuItems, currentIndex, 0);
        break;

      case KEYS.END:
        this.updateTabIndexAndFocus(this.menuItems, currentIndex, this.menuItems.length - 1);
        break;

      case KEYS.ARROW_LEFT: {
        const element = currentIndex >= 0 ? this.menuItems[currentIndex] : (event.target as HTMLElement);
        await this.crossMenubarNavigationOnLeft(element);
        break;
      }

      case KEYS.ARROW_RIGHT: {
        const element = currentIndex >= 0 ? this.menuItems[currentIndex] : (event.target as HTMLElement);
        await this.crossMenubarNavigationOnRight(element);
        break;
      }

      case KEYS.ARROW_UP: {
        this.navigateToMenuItem(currentIndex, 'prev');
        event.preventDefault();
        break;
      }

      case KEYS.ARROW_DOWN: {
        this.navigateToMenuItem(currentIndex, 'next');
        event.preventDefault();
        break;
      }

      default:
        break;
    }
  }

  public override render() {
    return html`<slot role="${ROLE.GROUP}"></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuBar;
