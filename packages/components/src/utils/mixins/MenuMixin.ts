import { property, queryAssignedElements } from 'lit/decorators.js';
import { TAG_NAME as MENU_TAGNAME } from '../../components/menu/menu.constants';
import { ORIENTATION, TAG_NAME as MENUBAR_TAGNAME } from '../../components/menubar/menubar.constants';
import type { Orientation } from '../../components/menubar/menubar.types';
import { TAG_NAME as MENUITEM_TAGNAME } from '../../components/menuitem/menuitem.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../../components/menupopover/menupopover.constants';
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
  setTabIndexOnMouseClick(event: MouseEvent): void;
  resetTabIndexAndSetActiveTabIndex(newIndex: number): void;
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
    * Calculates a new index for menu item navigation based on the pressed key.
    * Supports ArrowRight, ArrowLeft, Home, and End keys for navigating menu items.
    * - ArrowRight: Moves focus to the next menu item, wrapping around if necessary.
    * - ArrowLeft: Moves focus to the previous menu item, wrapping around if necessary.
    * - Home: Moves focus to the first menu item.
    * - End: Moves focus to the last menu item.
    *
    * @param key - The navigation key that was pressed.
    * @param currentIndex - The current index of the focused menu item.
    * @param wrappedDivsCount - The total number of menu items.
    * @returns The new index to focus on, or undefined if the key is not supported.
    */
    // private getNewIndexToNavigate(
    //   key: string,
    //   currentIndex: number,
    //   wrappedDivsCount: number,
    //   ariaOrientation: Orientation,
    // ): number | undefined {
    //   if (key === KEYS.HOME) {
    //     return 0;
    //   }
    //   if (key === KEYS.END) {
    //     return wrappedDivsCount - 1;
    //   }
    //   switch (ariaOrientation) {
    //     case ORIENTATION.VERTICAL:
    //       switch (key) {
    //         case KEYS.ARROW_UP:
    //           return (currentIndex - 1 + wrappedDivsCount) % wrappedDivsCount;
    //         case KEYS.ARROW_DOWN:
    //           return (currentIndex + 1) % wrappedDivsCount;
    //         default:
    //           return undefined;
    //       }
    //     case ORIENTATION.HORIZONTAL:
    //       switch (key) {
    //         case KEYS.ARROW_RIGHT:
    //           return (currentIndex + 1) % wrappedDivsCount;
    //         case KEYS.ARROW_LEFT:
    //           return (currentIndex - 1 + wrappedDivsCount) % wrappedDivsCount;
    //         default:
    //           return undefined;
    //       }
    //     default:
    //       return undefined;
    //   }
    // }

    public setTabIndexOnMouseClick(event: MouseEvent): void {
      const newIndex = this.getCurrentIndex(event.target);
      this.resetTabIndexAndSetActiveTabIndex(newIndex);
      this.menuItems[newIndex]?.focus();
    }

    /**
     * Handles the keydown event on the menubar element.
     * If the key is 'ArrowLeft' or 'ArrowRight', it focuses to the previous or next menu item
     * it moves focus to the corresponding menu item.
     * @param event - The keyboard event.
     */
    // public setTabIndexOnKeyDown(event: KeyboardEvent): void {
    //   const currentIndex = this.getCurrentIndex(event.target);
    //   const newIndex = this.getNewIndexToNavigate(
    //     event.key,
    //     currentIndex,
    //     this.menuItems.length,
    //     this.ariaOrientation,
    //   );
    //   if (newIndex !== undefined) {
    //     this.menuItems[newIndex]?.focus();
    //     this.resetTabIndexAndSetActiveTabIndex(newIndex);
    //   }
    // }

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

    private updateTabIndexAndFocusNewIndex(menuItems: Array<HTMLElement>, currentIndex: number, newIndex: number) {
      menuItems[currentIndex].setAttribute('tabindex', '-1');
      menuItems[newIndex].setAttribute('tabindex', '0');
      menuItems[newIndex]?.focus();
    }

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

    private navigateToPrevMenuItem(currentIndex: number, firstMenuIndex: number, lastMenuIndex: number) {
      const newIndex = currentIndex === firstMenuIndex ? lastMenuIndex : currentIndex - 1;
      this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, newIndex);
    }

    private navigateToNextMenuItem(currentIndex: number, firstMenuIndex: number, lastMenuIndex: number): void {
      const newIndex = currentIndex === lastMenuIndex ? firstMenuIndex : currentIndex + 1;
      this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, newIndex);
    }

    private getParentMenuItemDetails(menuChildId: string, menu?: HTMLElement | null): IParentMenuItem {
      if (
        menu?.tagName?.toLowerCase() === MENU_TAGNAME
        || menu?.tagName?.toLowerCase() === MENUBAR_TAGNAME
      ) {
        return { menu, menuChildId };
      }
      return this.getParentMenuItemDetails(menu?.previousElementSibling?.getAttribute('id') ?? '', menu?.parentElement);
    }

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

    private closePopoverAndNavigateToPrevParentMenuItem(currentIndex: number): void {
      // - close popover first
      this.toggleAttribute('visible');
      // - get parent menu item details and update the tab index to parent menu item.
      const parentMenuItem = this.menuItems[currentIndex].parentElement?.previousElementSibling;
      const menuItems = Array.from(this.parentElement?.children || []).filter(
        (node) => node.tagName?.toLowerCase() === MENUITEM_TAGNAME,
      );
      const parentMenuItemIndex = menuItems.findIndex((node) => node === parentMenuItem);
      this.updateTabIndexAndFocusNewIndex(
        menuItems as HTMLElement[],
        parentMenuItemIndex,
        parentMenuItemIndex - 1,
      );
    }

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
    }

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
        default:
          break;
      }
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<MenuMixinInterface> & T;
};
