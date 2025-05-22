/* eslint-disable max-classes-per-file */
import type { PropertyValues } from 'lit';
import { LitElement } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { TAG_NAME as MENU_TAGNAME } from '../../components/menu/menu.constants';
import { ORIENTATION, TAG_NAME as MENUBAR_TAGNAME } from '../../components/menubar/menubar.constants';
import type { Orientation } from '../../components/menubar/menubar.types';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../../components/menupopover/menupopover.constants';
import { TAG_NAME as MENUSECTION_TAGNAME } from '../../components/menusection/menusection.constants';
import { TAG_NAME as NAVITEMLIST_TAGNAME } from '../../components/navitemlist/navitemlist.constants';
import { TAG_NAME as NAVITEM_TAGNAME } from '../../components/navitem/navitem.constants';
import { POPOVER_PLACEMENT } from '../../components/popover/popover.constants';
import { KEYS } from '../keys';
import { ROLE } from '../roles';
import type { Constructor } from './index.types';

interface IParentMenuItem {
  menuChildId: string;
  menu: HTMLElement | null;
}

interface IMenuContents {
  parentMenuItemDetails: IParentMenuItem;
  parentMenuItemsChildren: Array<Element>;
}

export declare class MenuMixinInterface {
  ariaOrientation: Orientation;

  protected handleKeyDown(event: KeyboardEvent): void;

  protected handleMouseClick(event: MouseEvent): void;

  protected resetTabIndexAndSetActiveTabIndex(newIndex: number): void;

  protected setTabIndexOnMouseClick(event: MouseEvent): void;

  protected updatePopoverPlacementBasedOnOrientation(): void;
}

export const MenuMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * Defines the orientation of the menu. This value is reflected to
     * the `aria-orientation` attribute and can be either `'horizontal'` or `'vertical'`.
     * @default 'horizontal'
     */
    @property({ type: String, reflect: true, attribute: 'aria-orientation' })
    override ariaOrientation: Orientation = ORIENTATION.HORIZONTAL;

    /** @internal */
    @queryAssignedElements({ selector: `${MENUPOPOVER_TAGNAME}:not([disabled])` })
    menuPopoverItems!: Array<HTMLElement>;

    /** @internal */
    get menuItems(): Array<HTMLElement> {
      const slot = this.shadowRoot?.querySelector('slot');
      const allAssignedElements = (slot?.assignedElements({ flatten: true }) || []) as Array<HTMLElement>;
      return allAssignedElements.map(
        (node) => {
          if (node.tagName.toLowerCase() === MENUSECTION_TAGNAME) {
            return Array.from(node.children)
              .filter((child) => this.isValidMenuItem(child as HTMLElement)) as Array<HTMLElement>;
          }
          return this.isValidMenuItem(node) ? node : [];
        },
      )
        .flat()
        .filter((node) => !!node)
        .filter((node) => !node.hasAttribute('disabled'));
    }

    public override firstUpdated(changedProperties: PropertyValues): void {
      super.firstUpdated(changedProperties);
      this.setMenuBarPopoverValue(false);
    }

    /**
     * Sets the value of the data-menu-popover-open attribute on the menu element.
     * @param value - The value to set.
     */
    private setMenuBarPopoverValue(value: boolean) {
      const { menu } = this.getParentMenuItemDetails('', this);
      menu?.setAttribute('data-menu-popover-open', value.toString());
    }

    /**
     * Returns true if the data-menu-popover-open attribute on the menu element is set to 'true', false otherwise.
     */
    private isMenuPopoverOpen(): boolean {
      const { menu } = this.getParentMenuItemDetails('', this);
      return menu?.getAttribute('data-menu-popover-open') === 'true';
    }

    /**
     * Returns the index of the given target in the menuItems array.
     * If the target is not a menu item, but a child element of a menu item,
     * it returns the index of the parent menu item.
     * @param target - The target element to find the index of.
     * @returns The index of the target element in the menuItems array.
     */
    private getCurrentIndex(target: EventTarget | null): number {
      return this.menuItems.findIndex(
        (node) => node === target || node === (target as HTMLElement).parentElement,
      );
    }

    /**
     * Updates the placement of the popover based on the aria-orientation property.
     */
    protected updatePopoverPlacementBasedOnOrientation(): void {
      if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
        this.menuPopoverItems.forEach((node) => {
          node.setAttribute('placement', POPOVER_PLACEMENT.BOTTOM_START);
        });
      } else {
        this.menuPopoverItems.forEach((node) => {
          node.setAttribute('placement', POPOVER_PLACEMENT.RIGHT_START);
        });
      }
    }

    /**
     * Updates the tabindex of the current index to -1 and the tabindex of the new index to 0,
     * effectively setting the active element. This is used when navigating the menu via keyboard.
     * @param menuItems - The list of menu items.
     * @param currentIndex - The current index of the focused menu item.
     * @param newIndex - The index of the new active element in the list.
     */
    private updateTabIndexAndFocusNewIndex(menuItems: Array<HTMLElement>, currentIndex: number, newIndex: number) {
      if (newIndex < 0 || currentIndex < 0) {
        return;
      }
      if (currentIndex === newIndex) {
        menuItems[currentIndex]?.focus();
        return;
      }
      menuItems[currentIndex]?.setAttribute('tabindex', '-1');
      menuItems[newIndex]?.setAttribute('tabindex', '0');
      menuItems[newIndex]?.focus();
    }

    /**
     * Checks if the given tag name is a valid menu tag name.
     * @param tagName - The tag name to check.
     * @returns True if the tag name is a valid menu, false otherwise.
     */
    private isValidMenu(tagName?: string): boolean {
      return (
        tagName?.toLowerCase() === MENU_TAGNAME
        || tagName?.toLowerCase() === MENUBAR_TAGNAME || this.isValidNavItemList(tagName)
      );
    }

    /**
     * Checks if the given tag name is a valid navitemlist tag name.
     * @param tagName - The tag name to check.
     * @returns True if the tag name is a valid navitemlist, false otherwise.
     */
    private isValidNavItemList(tagName?: string): boolean {
      return tagName?.toLowerCase() === NAVITEMLIST_TAGNAME;
    }

    /**
     * Checks if the given tag name is a valid navitem tag name.
     * @param tagName - The tag name to check.
     * @returns True if the tag name is a valid navitem, false otherwise.
     */
    private isValidNavItem(tagName?: string): boolean {
      return tagName?.toLowerCase() === NAVITEM_TAGNAME;
    }

    /**
     * Checks if the given tag name is a valid menu popover tag name.
     * @param tagName - The tag name to check.
     * @returns True if the tag name is a valid menu popover, false otherwise.
     */
    private isValidPopover(tagName?: string): boolean {
      return tagName?.toLowerCase() === MENUPOPOVER_TAGNAME;
    }

    /**
     * Opens the popover at the given index if it exists.
     * @param index - The index of the menu item to open the popover for.
     * @returns True if the popover was opened, false if not.
     */
    private openPopover(index: number): boolean {
      if (this.isValidPopover(this.menuItems[index]?.nextElementSibling?.tagName)) {
        const currentMenuId = this.menuItems[index].getAttribute('id');
        const result = this.menuPopoverItems.findIndex((node) => node.getAttribute('triggerid') === currentMenuId);
        if (result !== -1) {
          if (!this.menuPopoverItems[result].hasAttribute('visible')) {
            this.menuPopoverItems[result].toggleAttribute('visible');
          }
          this.setMenuBarPopoverValue(true);
          return true;
        }
      }
      return false;
    }

    /**
     * Navigates to the previous menu item and updates the tabindex of the current index
     * to -1 and the tabindex of the new index to 0.
     * @param currentIndex - The current index of the focused menu item.
     * @param firstMenuIndex - The index of the first menu item.
     * @param lastMenuIndex - The index of the last menu item.
     * @param ariaOrientation - The orientation of the menu.
     */
    private navigateToPrevMenuItem(
      currentIndex: number,
      firstMenuIndex: number,
      lastMenuIndex: number,
      ariaOrientation: Orientation,
    ): void {
      const newIndex = currentIndex === firstMenuIndex ? lastMenuIndex : currentIndex - 1;
      this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, newIndex);
      // - if the isMenuPopoverOpen is true and orientation is horizontal, then we will open the popover.
      if (this.isMenuPopoverOpen() && ariaOrientation === ORIENTATION.HORIZONTAL) {
        this.openPopover(newIndex);
      }
    }

    /**
     * Navigates to the next menu item and updates the tabindex of the current index
     * to -1 and the tabindex of the new index to 0.
     * @param currentIndex - The current index of the focused menu item.
     * @param firstMenuIndex - The index of the first menu item.
     * @param lastMenuIndex - The index of the last menu item.
     * @param ariaOrientation - The orientation of the menu.
     */
    private navigateToNextMenuItem(
      currentIndex: number,
      firstMenuIndex: number,
      lastMenuIndex: number,
      ariaOrientation: Orientation,
    ): void {
      const newIndex = currentIndex === lastMenuIndex ? firstMenuIndex : currentIndex + 1;
      this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, newIndex);
      // - if the isMenuPopoverOpen is true, then we will close all popovers recursively,
      if (this.isMenuPopoverOpen() && ariaOrientation === ORIENTATION.HORIZONTAL) {
        this.openPopover(newIndex);
      }
    }

    /**
     * Returns the parent menu item details for the given menu child id.
     * It recursively traverses up the DOM tree until it finds a menu or menubar element.
     * @param menuChildId - The id of the menu child element.
     * @param menu - The current menu element to start traversing from.
     * @returns An object containing the parent menu element and the menu child id.
     */
    private getParentMenuItemDetails(menuChildId: string, menu?: HTMLElement | null): IParentMenuItem {
      if (menu && this.isValidMenu(menu.tagName)) {
        return { menu, menuChildId };
      }
      return this.getParentMenuItemDetails(menu?.previousElementSibling?.getAttribute('id') ?? '', menu?.parentElement);
    }

    /**
     * Recursively hides all the popovers up the DOM tree until it finds a menu or menubar element.
     * @param menu - The current menu element to start traversing from.
     */
    private hideAllPopovers(menu?: HTMLElement | null): void {
      if (this.isValidMenu(menu?.tagName)) {
        return;
      }
      if (this.isValidPopover(menu?.tagName)) {
        menu?.toggleAttribute('visible');
      }
      if (menu?.parentElement) {
        this.hideAllPopovers(menu.parentElement);
      }
    }

    /**
     * Recursively navigates up the DOM tree until it finds the previous menu item
     * and updates the tabindex of the current index to -1 and the tabindex of the new index to 0.
     * Also opens the popover of the previous menu item.
     * @param currentIndex - The current index of the focused menu item.
     */
    private navigateToPrevParentMenuItem(currentIndex: number, key: string): void {
      const parentMenuItem = this.menuItems[currentIndex].parentElement?.previousElementSibling;
      const parentMenuItemsChildren = Array.from(this.parentElement?.children || []).filter(
        (node) => this.isValidMenuItem(node as HTMLElement),
      );
      const parentMenuItemIndex = parentMenuItemsChildren.findIndex((node) => node === parentMenuItem);
      let newIndex = parentMenuItemIndex;
      if (key === KEYS.ARROW_LEFT && this.isValidMenu(this.parentElement?.tagName)) {
        newIndex = parentMenuItemIndex - 1;
      }
      this.updateTabIndexAndFocusNewIndex(
        parentMenuItemsChildren as Array<HTMLElement>,
        parentMenuItemIndex,
        newIndex,
      );
      if (key === KEYS.ARROW_LEFT) {
        parentMenuItemsChildren[parentMenuItemIndex - 1]?.nextElementSibling?.toggleAttribute('visible');
      }
    }

    /**
     * Closes the current menu popover and navigates to the previous parent menu item.
     * @param currentIndex - The current index of the focused menu item.
     */
    private closePopoverAndNavigateToPrevParentMenuItem(currentIndex: number, key: string): void {
      // - close popover first
      this.toggleAttribute('visible');
      // - get parent menu item details and update the tab index to parent menu item.
      this.navigateToPrevParentMenuItem(currentIndex, key);
    }

    /**
     * Gets the parent menu contents of the given current menu item.
     * It recursively traverses up the DOM tree until it finds the parent menu element
     * and gets the parent menu item details and the children of the parent menu item.
     * @param currentMenuItem - The current menu item to start traversing from.
     * @returns An object containing the parent menu item details and the children of the parent menu item.
     */
    private getParentMenuContents(currentMenuItem: HTMLElement | null): IMenuContents {
      const parentMenuItemDetails = this.getParentMenuItemDetails('', currentMenuItem);
      const parentMenuItemsChildren = Array.from(parentMenuItemDetails.menu?.children || []).filter(
        (node) => this.isValidMenuItem(node as HTMLElement),
      );
      return { parentMenuItemDetails, parentMenuItemsChildren };
    }

    /**
     * Sets focus to the parent menu item of the given current menu item.
     * It retrieves the parent menu item details and its children, then focuses
     * on the menu item that matches the parent menu child ID.
     * @param currentMenuItem - The current menu item from which to find and focus the parent menu item.
     */
    private setFocusToParentMenuItem(currentMenuItem: HTMLElement | null): void {
      const {
        parentMenuItemDetails,
        parentMenuItemsChildren,
      } = this.getParentMenuContents(currentMenuItem);
      // Only proceed if menuChildId is non-empty
      if (parentMenuItemDetails?.menuChildId) {
        const menuBarMenuItem = parentMenuItemsChildren.filter(
          (node) => node.getAttribute('id') === parentMenuItemDetails.menuChildId,
        );

        if (this.isValidNavItem(menuBarMenuItem[0].tagName)) {
          currentMenuItem?.removeAttribute('active');
          menuBarMenuItem[0].setAttribute('active', '');
        }
      }
    }

    /**
     * Opens the popover of the next children menu item if there are children.
     * If there are no children, then it closes all popovers recursively and
     * navigates to the next menu item from the menu bar.
     * If the parent menu item does not have any children, then we will go to the next menu item.
     * @param currentIndex - The current index of the focused menu item.
     */
    private openPopoverAndNavigateToNextChildrenMenuItem(currentIndex: number): void {
      if (this.openPopover(currentIndex)) {
        return;
      }
      // - If there are no popovers to the right, then we will close all popovers recursively,
      // and go the next menu item from the menu bar
      this.hideAllPopovers(this.menuItems[currentIndex]);
      // - get the top parent menu items using recursion.
      const {
        parentMenuItemDetails,
        parentMenuItemsChildren,
      } = this.getParentMenuContents(this.menuItems[currentIndex]);
      if (parentMenuItemsChildren.length === 0 || parentMenuItemDetails?.menuChildId === '') {
        this.navigateToNextMenuItem(currentIndex, 0, this.menuItems.length - 1, this.ariaOrientation);
        return;
      }
      const parentMenuItemIndex = parentMenuItemsChildren.findIndex(
        (node) => node.getAttribute('id') === parentMenuItemDetails?.menuChildId,
      );
      const newIndex = parentMenuItemIndex === -1 ? currentIndex + 1 : parentMenuItemIndex + 1;
      this.updateTabIndexAndFocusNewIndex(
        parentMenuItemsChildren as Array<HTMLElement>,
        parentMenuItemIndex,
        newIndex,
      );
      parentMenuItemsChildren[newIndex]?.nextElementSibling?.toggleAttribute('visible');
    }

    /**
     * Checks if the given menu item is a valid menu item.
     * @param menuItem - The menu item to check.
     * @returns True if the menu item is a valid menu item, false otherwise.
     */
    private isValidMenuItem(menuItem: HTMLElement): boolean {
      return menuItem.getAttribute('role') === ROLE.MENUITEM;
    }

    /**
     * Handles the mouse click event on the menu items.
     * Resets all the menu items tabindex to -1 and sets the tabindex of the
     * element at the given index to 0, effectively setting the active
     * element. This is used when clicking on the menu items.
     * @param event - The mouse click event.
     */
    protected setTabIndexOnMouseClick(event: MouseEvent): void {
      const newIndex = this.getCurrentIndex(event.target);
      this.resetTabIndexAndSetActiveTabIndex(newIndex);
      this.menuItems[newIndex]?.focus();
    }

    /**
     * Resets all list items tabindex to -1 and sets the tabindex of the
     * element at the given index to 0, effectively setting the active
     * element. This is used when navigating the list via keyboard.
     *
     * @param newIndex - The index of the new active element in the list.
     */
    protected resetTabIndexAndSetActiveTabIndex(newIndex: number) {
      this.menuItems.forEach((node, index) => {
        const newTabindex = newIndex === index ? '0' : '-1';
        node?.setAttribute('tabindex', newTabindex);
      });
    }

    /**
     * Handles the keydown event on the menu bar.
     * The keys are as follows:
     * - HOME: Sets focus to the first menu item.
     * - END: Sets focus to the last menu item.
     * - ARROW_LEFT:
     *   - If orientation is horizontal, then it navigates to the previous menu item.
     *   - If orientation is vertical, then it closes the popover of the current menu item and
     *     navigates to the previous parent menu item.
     * - ARROW_RIGHT:
     *   - If orientation is horizontal, then it navigates to the next menu item.
     *   - If orientation is vertical, then it opens the popover of the current menu item and
     *     navigates to the next children menu item.
     * - ARROW_UP:
     *   - If orientation is horizontal, then it opens the popover of the current menu item.
     *   - If orientation is vertical, then it navigates to the previous menu item.
     * - ARROW_DOWN:
     *   - If orientation is horizontal, then it opens the popover of the current menu item.
     *   - If orientation is vertical, then it navigates to the next menu item.
     * - SPACE:
     * - ENTER:
     *   - If the next element sibling is a menu popover, then it opens the popover of the current
     *     menu item and navigates to the next children menu item.
     *   - If the target element is a menu item, then it closes all popovers recursively and
     *     navigates to the previous parent menu item.
     * - ESCAPE:
     *   - If a popover is already open then we close it and navigate to the parent menu item.
     *   - If the current menuitem is a child of menubar, then we will set the value of isMenuPopoverOpen to false.,
     * @param event - The keyboard event.
     */
    protected handleKeyDown(event: KeyboardEvent): void {
      const firstMenuIndex = 0;
      const lastMenuIndex = this.menuItems.length - 1;
      const currentIndex = this.getCurrentIndex(event.target);
      if (currentIndex === -1) return;
      switch (event.key) {
        case KEYS.HOME:
          this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, firstMenuIndex);
          break;
        case KEYS.END:
          this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, lastMenuIndex);
          break;
        case KEYS.ARROW_LEFT: {
          if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
            this.navigateToPrevMenuItem(currentIndex, firstMenuIndex, lastMenuIndex, this.ariaOrientation);
          }
          if (this.ariaOrientation === ORIENTATION.VERTICAL) {
            this.closePopoverAndNavigateToPrevParentMenuItem(currentIndex, event.key);
          }
          break;
        }
        case KEYS.ARROW_RIGHT: {
          if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
            this.navigateToNextMenuItem(currentIndex, firstMenuIndex, lastMenuIndex, this.ariaOrientation);
          }
          if (this.ariaOrientation === ORIENTATION.VERTICAL) {
            this.openPopoverAndNavigateToNextChildrenMenuItem(currentIndex);
          }
          break;
        }
        case KEYS.ARROW_UP: {
          if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
            this.openPopover(currentIndex);
          }
          if (this.ariaOrientation === ORIENTATION.VERTICAL) {
            this.navigateToPrevMenuItem(currentIndex, firstMenuIndex, lastMenuIndex, this.ariaOrientation);
          }
          event.preventDefault();
          break;
        }
        case KEYS.ARROW_DOWN: {
          if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
            this.openPopover(currentIndex);
          }
          if (this.ariaOrientation === ORIENTATION.VERTICAL) {
            this.navigateToNextMenuItem(currentIndex, firstMenuIndex, lastMenuIndex, this.ariaOrientation);
          }
          event.preventDefault();
          break;
        }
        case KEYS.SPACE:
        case KEYS.ENTER: {
          if (this.isValidPopover(this.menuItems[currentIndex]?.nextElementSibling?.tagName)) {
            this.openPopoverAndNavigateToNextChildrenMenuItem(currentIndex);
          } else if (this.isValidMenuItem(event.target as HTMLElement)) {
            this.setMenuBarPopoverValue(false);
            this.setFocusToParentMenuItem(this.menuItems[currentIndex]);
          }
          break;
        }
        case KEYS.ESCAPE: {
          this.setMenuBarPopoverValue(false);
          if (this.ariaOrientation === ORIENTATION.VERTICAL) {
            this.navigateToPrevParentMenuItem(currentIndex, event.key);
          }
          break;
        }
        default:
          break;
      }
    }

    /**
     * Closes all popovers except the current one.
     * @param currentIndex - The index of the current menu item.
     */
    private closeAllPopoversExceptCurrent(currentIndex: number): void {
      this.menuPopoverItems
        .filter((node) => node !== this.menuItems[currentIndex])
        .filter((node) => node.hasAttribute('visible'))
        .forEach((node) => node.toggleAttribute('visible'));
    }

    /**
     * Handles the mouse click event on the menu items.
     * - If the menuitem has children, then it opens the popover of the next children menu item.
     * - If the menuitem does not have children, then it closes all popovers recursively.
     * @param event - The mouse click event.
     */
    protected handleMouseClick(event: MouseEvent): void {
      const target = event.target as HTMLElement;
      const currentIndex = this.getCurrentIndex(target);
      if (currentIndex === -1) return;
      if (this.isValidPopover(this.menuItems[currentIndex]?.nextElementSibling?.tagName)) {
        this.closeAllPopoversExceptCurrent(currentIndex);
        this.openPopoverAndNavigateToNextChildrenMenuItem(currentIndex);
      } else if (this.isValidMenuItem(target)) {
        this.hideAllPopovers(this.menuItems[currentIndex]);
      }
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<MenuMixinInterface> & T;
};
