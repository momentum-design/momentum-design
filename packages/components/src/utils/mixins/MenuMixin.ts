import { property, queryAssignedElements } from 'lit/decorators.js';
import { ORIENTATION } from '../../components/menubar/menubar.constants';
import type { Orientation } from '../../components/menubar/menubar.types';
import { TAG_NAME as MENUITEM_TAGNAME } from '../../components/menuitem/menuitem.constants';
import type MenuPopover from '../../components/menupopover/menupopover.component';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../../components/menupopover/menupopover.constants';
import { Component } from '../../models';
import { KEYS } from '../keys';
import type { Constructor } from './index.types';

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

    private getMenuPopoverIndex(index: number): number {
      if (this.menuItems[index].nextElementSibling?.tagName?.toLowerCase() === MENUPOPOVER_TAGNAME) {
        const currentMenuId = this.menuItems[index].getAttribute('id');
        return this.menuPopoverItems.findIndex((node) => node.getAttribute('triggerid') === currentMenuId);
      }
      return -1;
    }

    private navigateToPrevMenuItem(currentIndex: number, firstMenuIndex: number, lastMenuIndex: number) {
      const newIndex = currentIndex === firstMenuIndex ? lastMenuIndex : currentIndex - 1;
      this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, newIndex);
    }

    private navigateToNextMenuItem(currentIndex: number, firstMenuIndex: number, lastMenuIndex: number): void {
      const newIndex = currentIndex === lastMenuIndex ? firstMenuIndex : currentIndex + 1;
      this.updateTabIndexAndFocusNewIndex(this.menuItems, currentIndex, newIndex);
    }

    private closePopoverAndGetParentMenuItems(currentIndex: number) {
      (this as unknown as MenuPopover)?.hidePopover();
      const parentMenuItem = this.menuItems[currentIndex].parentElement?.previousElementSibling;
      const menuItems = Array.from(this.parentElement?.children || []).filter(
        (node) => node.tagName?.toLowerCase() === MENUITEM_TAGNAME,
      );
      const parentMenuItemIndex = menuItems.findIndex((node) => node === parentMenuItem);
      return {
        menuItems,
        parentMenuItemIndex,
      };
    }

    public handleKeyDown(event: KeyboardEvent): void {
      const firstMenuIndex = 0;
      const lastMenuIndex = this.menuItems.length - 1;
      const currentIndex = this.getCurrentIndex(event.target);
      if (currentIndex === -1) {
        return;
      }
      console.log('tom mowa', event.key, this.ariaOrientation);
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
            const { menuItems, parentMenuItemIndex } = this.closePopoverAndGetParentMenuItems(currentIndex);
            this.updateTabIndexAndFocusNewIndex(
              menuItems as HTMLElement[],
              parentMenuItemIndex,
              parentMenuItemIndex,
            );
          }
          break;
        }
        case KEYS.ARROW_RIGHT: {
          console.log('arrow right ->', this.ariaOrientation);
          if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
            this.navigateToNextMenuItem(currentIndex, firstMenuIndex, lastMenuIndex);
          }
          if (this.ariaOrientation === ORIENTATION.VERTICAL) {
            // is the menuitem has a popover children, then we will open it and navigate to the first menuitem.
            const popoverIndex = this.getMenuPopoverIndex(currentIndex);
            console.log(popoverIndex);
            if (popoverIndex !== -1) {
              (this.menuPopoverItems[popoverIndex] as MenuPopover).showPopover();
            } else {
              const { menuItems, parentMenuItemIndex } = this.closePopoverAndGetParentMenuItems(currentIndex);
              this.updateTabIndexAndFocusNewIndex(
                menuItems as HTMLElement[],
                parentMenuItemIndex,
                parentMenuItemIndex + 1,
              );
            }
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
            const popoverIndex = this.getMenuPopoverIndex(currentIndex);
            if (popoverIndex !== -1) {
              (this.menuPopoverItems[popoverIndex] as MenuPopover).showPopover();
            }
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
