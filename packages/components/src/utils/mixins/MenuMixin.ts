import { property, queryAssignedElements } from 'lit/decorators.js';
import { TAG_NAME as MENU_TAGNAME } from '../../components/menu/menu.constants';
import { ORIENTATION, TAG_NAME as MENUBAR_TAGNAME } from '../../components/menubar/menubar.constants';
import type { Orientation } from '../../components/menubar/menubar.types';
import { TAG_NAME as MENUITEM_TAGNAME } from '../../components/menuitem/menuitem.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../../components/menupopover/menupopover.constants';
import { POPOVER_PLACEMENT } from '../../components/popover/popover.constants';
import { Component } from '../../models';
import { KEYS } from '../keys';
import type { Constructor } from './index.types';

interface IParentMenuItem {
  menuChildId: string;
  menu: HTMLElement | null;
}

export interface MenuMixinInterface {
  ariaOrientation: Orientation;
  handleKeyDown(event: KeyboardEvent): void;
  resetTabIndexAndSetActiveTabIndex(newIndex: number): void;
  setTabIndexOnMouseClick(event: MouseEvent): void;
  updatePopoverPlacementBasedOnOrientation(): void;
}

export const MenuMixin = <T extends Constructor<Component>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * Aria Orientation
     * @default 'horizontal'
     */
    @property({ type: String, reflect: true, attribute: 'aria-orientation' })
    override ariaOrientation: Orientation = ORIENTATION.HORIZONTAL;

    /** @internal */
    @queryAssignedElements({ selector: MENUITEM_TAGNAME })
    menuItems!: Array<HTMLElement>;

    /** @internal */
    @queryAssignedElements({ selector: MENUPOPOVER_TAGNAME })
    menuPopoverItems!: Array<HTMLElement>;

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
    public updatePopoverPlacementBasedOnOrientation(): void {
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
     * Resets the tabindex of the current index to -1 and sets the tabindex of the new index to 0,
     * effectively setting the active element. This is used when navigating the menu via keyboard.
     * @param menuItems - The list of menu items.
     * @param currentIndex - The current index of the focused menu item.
     * @param newIndex - The index of the new active element in the list.
     */
    private updateTabIndexAndFocusNewIndex(menuItems: Array<HTMLElement>, currentIndex: number, newIndex: number) {
      menuItems[currentIndex].setAttribute('tabindex', '-1');
      menuItems[newIndex].setAttribute('tabindex', '0');
      menuItems[newIndex]?.focus();
    }

    /**
     * Opens the popover at the given index if it exists.
     * @param index - The index of the menu item to open the popover for.
     * @returns True if the popover was opened, false if not.
     */
    private openPopover(index: number): boolean {
      if (this.menuItems[index].nextElementSibling?.tagName?.toLowerCase() === MENUPOPOVER_TAGNAME) {
        const currentMenuId = this.menuItems[index].getAttribute('id');
        const result = this.menuPopoverItems.findIndex((node) => node.getAttribute('triggerid') === currentMenuId);
        if (result !== -1) {
          this.menuPopoverItems[result].toggleAttribute('visible');
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
     */
    private navigateToPrevMenuItem(currentIndex: number, firstMenuIndex: number, lastMenuIndex: number) {
      const newIndex = currentIndex === firstMenuIndex ? lastMenuIndex : currentIndex - 1;
      this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, newIndex);
    }

    /**
     * Navigates to the next menu item and updates the tabindex of the current index
     * to -1 and the tabindex of the new index to 0.
     * @param currentIndex - The current index of the focused menu item.
     * @param firstMenuIndex - The index of the first menu item.
     * @param lastMenuIndex - The index of the last menu item.
     */
    private navigateToNextMenuItem(currentIndex: number, firstMenuIndex: number, lastMenuIndex: number): void {
      const newIndex = currentIndex === lastMenuIndex ? firstMenuIndex : currentIndex + 1;
      this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, newIndex);
    }

    /**
     * Returns the parent menu item details for the given menu child id.
     * It recursively traverses up the DOM tree until it finds a menu or menubar element.
     * @param menuChildId - The id of the menu child element.
     * @param menu - The current menu element to start traversing from.
     * @returns An object containing the parent menu element and the menu child id.
     */
    private getParentMenuItemDetails(menuChildId: string, menu?: HTMLElement | null): IParentMenuItem {
      if (
        menu?.tagName?.toLowerCase() === MENU_TAGNAME
        || menu?.tagName?.toLowerCase() === MENUBAR_TAGNAME
      ) {
        return { menu, menuChildId };
      }
      return this.getParentMenuItemDetails(menu?.previousElementSibling?.getAttribute('id') ?? '', menu?.parentElement);
    }

    /**
     * Recursively hides all the popovers up the DOM tree until it finds a menu or menubar element.
     * @param menu - The current menu element to start traversing from.
     */
    private hideAllPopovers(menu?: HTMLElement | null): void {
      if (
        menu?.tagName?.toLowerCase() === MENU_TAGNAME
        || menu?.tagName?.toLowerCase() === MENUBAR_TAGNAME
      ) {
        return;
      }
      if (menu?.tagName?.toLowerCase() === MENUPOPOVER_TAGNAME) {
        menu?.toggleAttribute('visible');
      }
      this.hideAllPopovers(menu?.parentElement);
    }

    /**
     * Recursively navigates up the DOM tree until it finds the previous menu item
     * and updates the tabindex of the current index to -1 and the tabindex of the new index to 0.
     * Also opens the popover of the previous menu item.
     * @param currentIndex - The current index of the focused menu item.
     */
    private navigateToPrevParentMenuItem(currentIndex: number): void {
      const parentMenuItem = this.menuItems[currentIndex].parentElement?.previousElementSibling;
      const parentMenuItemsChildren = Array.from(this.parentElement?.children || []).filter(
        (node) => node.tagName?.toLowerCase() === MENUITEM_TAGNAME,
      );
      const parentMenuItemIndex = parentMenuItemsChildren.findIndex((node) => node === parentMenuItem);
      this.updateTabIndexAndFocusNewIndex(
        parentMenuItemsChildren as HTMLElement[],
        parentMenuItemIndex,
        parentMenuItemIndex,
      );
      parentMenuItemsChildren[parentMenuItemIndex - 1].nextElementSibling?.toggleAttribute('visible');
    }

    /**
     * Closes the current menu popover and navigates to the previous parent menu item.
     * @param currentIndex - The current index of the focused menu item.
     */
    private closePopoverAndNavigateToPrevParentMenuItem(currentIndex: number): void {
      // - close popover first
      this.toggleAttribute('visible');
      // - get parent menu item details and update the tab index to parent menu item.
      this.navigateToPrevParentMenuItem(currentIndex);
    }

    /**
     * Opens the popover of the next children menu item if there are children.
     * If there are no children, then it closes all popovers recursively and
     * navigates to the next menu item from the menu bar.
     * @param currentIndex - The current index of the focused menu item.
     */
    private openPopoverAndNavigateToNextChildrenMenuItem(currentIndex: number): void {
      const isMenuPopoverOpen = this.openPopover(currentIndex);
      if (isMenuPopoverOpen) {
        return;
      }
      // - If there are no popovers to the right, then we will close all popovers recursively,
      // and go the next menu item from the menu bar
      // - close all popovers recursively.
      this.hideAllPopovers(this.menuItems[currentIndex]);
      // - get the top parent menu items using recursion.
      const parentMenuItemDetails = this.getParentMenuItemDetails('', this.menuItems[currentIndex]);
      const parentMenuItemsChildren = Array.from(parentMenuItemDetails?.menu?.children || []).filter(
        (node) => node.tagName?.toLowerCase() === MENUITEM_TAGNAME,
      );
      const parentMenuItemIndex = parentMenuItemsChildren.findIndex(
        (node) => node.getAttribute('id') === parentMenuItemDetails?.menuChildId,
      );
      this.updateTabIndexAndFocusNewIndex(
        parentMenuItemsChildren as HTMLElement[],
        parentMenuItemIndex,
        parentMenuItemIndex + 1,
      );
      parentMenuItemsChildren[parentMenuItemIndex + 1].nextElementSibling?.toggleAttribute('visible');
    }

    /**
     * Handles the mouse click event on the menu items.
     * Resets all the menu items tabindex to -1 and sets the tabindex of the
     * element at the given index to 0, effectively setting the active
     * element. This is used when clicking on the menu items.
     * @param event - The mouse click event.
     */
    public setTabIndexOnMouseClick(event: MouseEvent): void {
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
    public resetTabIndexAndSetActiveTabIndex(newIndex: number) {
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
     * - ARROW_UP: Navigates to the previous menu item.
     * - ARROW_DOWN:
     *   - If orientation is horizontal, then it opens the popover of the current menu item.
     *   - If orientation is vertical, then it navigates to the next menu item.
     * - ENTER:
     *   - If the next element sibling is a menu popover, then it opens the popover of the current
     *     menu item and navigates to the next children menu item.
     *   - If the target element is a menu item, then it closes all popovers recursively and
     *     navigates to the previous parent menu item.
     * - ESCAPE: Closes all popovers recursively and navigates to the previous parent menu item.
     * @param event - The keyboard event.
     */
    public handleKeyDown(event: KeyboardEvent): void {
      const firstMenuIndex = 0;
      const lastMenuIndex = this.menuItems.length - 1;
      const currentIndex = this.getCurrentIndex(event.target);
      if (currentIndex === -1) {
        return;
      }
      switch (event.key) {
        case KEYS.HOME:
          this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, firstMenuIndex);
          break;
        case KEYS.END:
          this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, lastMenuIndex);
          break;
        case KEYS.ARROW_LEFT: {
          if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
            this.navigateToPrevMenuItem(currentIndex, firstMenuIndex, lastMenuIndex);
          }
          if (this.ariaOrientation === ORIENTATION.VERTICAL) {
            this.closePopoverAndNavigateToPrevParentMenuItem(currentIndex);
          }
          break;
        }
        case KEYS.ARROW_RIGHT: {
          if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
            this.navigateToNextMenuItem(currentIndex, firstMenuIndex, lastMenuIndex);
          }
          if (this.ariaOrientation === ORIENTATION.VERTICAL) {
            this.openPopoverAndNavigateToNextChildrenMenuItem(currentIndex);
          }
          break;
        }
        case KEYS.ARROW_UP: {
          this.navigateToPrevMenuItem(currentIndex, firstMenuIndex, lastMenuIndex);
          event.preventDefault();
          break;
        }
        case KEYS.ARROW_DOWN: {
          if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
            this.openPopover(currentIndex);
          }
          if (this.ariaOrientation === ORIENTATION.VERTICAL) {
            this.navigateToNextMenuItem(currentIndex, firstMenuIndex, lastMenuIndex);
          }
          event.preventDefault();
          break;
        }
        case KEYS.ENTER: {
          if (this.menuItems[currentIndex]?.nextElementSibling?.tagName?.toLowerCase() === MENUPOPOVER_TAGNAME) {
            this.openPopoverAndNavigateToNextChildrenMenuItem(currentIndex);
          } else if ((event.target as HTMLElement).tagName?.toLowerCase() === MENUITEM_TAGNAME) {
            this.hideAllPopovers(this.menuItems[currentIndex]);
          }
          break;
        }
        case KEYS.ESCAPE: {
          this.navigateToPrevParentMenuItem(currentIndex);
          break;
        }
        default:
          break;
      }
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<MenuMixinInterface> & T;
};
