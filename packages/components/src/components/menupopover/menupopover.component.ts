import { CSSResult, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';
import { TAG_NAME as MENUSECTION_TAGNAME } from '../menusection/menusection.constants';
import { TAG_NAME as NAVMENUITEM_TAGNAME } from '../navmenuitem/navmenuitem.constants';
import { TAG_NAME as MENUITEM_TAGNAME } from '../menuitem/menuitem.constants';
import { TAG_NAME as MENUITEMCHECKBOX_TAGNAME } from '../menuitemcheckbox/menuitemcheckbox.constants';
import { TAG_NAME as MENUITEMRADIO_TAGNAME } from '../menuitemradio/menuitemradio.constants';
import Popover from '../popover/popover.component';
import { COLOR } from '../popover/popover.constants';
import { popoverStack } from '../popover/popover.stack';
import type { PopoverPlacement } from '../popover/popover.types';

import { DEFAULTS, TAG_NAME as MENU_POPOVER } from './menupopover.constants';
import styles from './menupopover.styles';
import { isValidMenuItem, isValidMenuPopover } from './menupopover.utils';

/**
 * A popover menu component that displays a list of menu items in a floating container.
 * It's designed to work in conjunction with `mdc-menubar` and `mdc-menuitem` to create
 * accessible, nested menu structures with the following features:
 * - Appears adjacent to the triggering menu item
 * - Supports keyboard navigation (arrow keys, Home, End)
 * - Manages focus trapping when open
 * - Closes on Escape key or outside click
 * - Supports both mouse and keyboard interactions
 * - Automatically handles ARIA attributes for accessibility
 *
 * The component extends `mdc-popover` and adds menu-specific behaviors and styling.
 * When nested within another `mdc-menupopover`, it automatically adjusts its behavior
 * to work as a submenu (right-aligned, shows on hover).
 *
 * The orientation of the menu popover is always set to `vertical`.
 *
 * Submenu opens when:
 * - Clicked on a menu item with a submenu
 * - Enter or Space key pressed on a menu item with a submenu
 *
 * Menu closes completely (with all sub menus) when:
 * - A menu item is clicked that does not have a submenu
 * - Enter key pressed on a menu item (not a submenu trigger), menu item radio or menu item checkbox
 * - Click outside the menu popover (on the backdrop)
 *
 * Close submenus when:
 * - Esc key pressed, only the current submenu closed
 * - Arrow Left key pressed, only the current submenu closed
 * - Open another submenu with Click, Enter or Space key,
 *   closes recursively all submenus until the selected item's submenu
 *
 * Menu does not close when:
 * - Space key pressed on a menu item radio or menu item checkbox
 * 
 * **Note**: Nested `mdc-menusection` components are not well supported and should be avoided.
 *
 * @tagname mdc-menupopover
 *
 * @slot - Default slot for the menu popover content
 *
 * @event change - (React: onChange) This event is dispatched when a `menuitemcheckbox`, or `menuitemradio` changes.
 * @event action - (React: onAction) This event is dispatched when a menuItem selected and the menu closes.
 *
 * @slot default - Contains the menu items to be displayed in the popover
 *
 * @csspart popover-close - The close button of the menupopover.
 * @csspart popover-content - The content of the menupopover.
 * @csspart popover-hover-bridge - The hover bridge of the menupopover.
 */
class MenuPopover extends Popover {
  /**
   * The placement of the popover.
   * - **top**
   * - **top-start**
   * - **top-end**
   * - **bottom**
   * - **bottom-start**
   * - **bottom-end**
   * - **left**
   * - **left-start**
   * - **left-end**
   * - **right**
   * - **right-start**
   * - **right-end**
   * @default bottom
   */
  @property({ type: String, reflect: true })
  override placement: PopoverPlacement = DEFAULTS.PLACEMENT;

  private menuItems: Array<HTMLElement> = [];

  private menuItemsWithSubMenus: Array<HTMLElement> = [];

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('keyup', this.handleKeyUp);
    this.addEventListener('click', this.handleMouseClick);
    this.addEventListener('created', this.handleItemCreation);
  }

  /**
   * Retrieves the submenu popover associated with a given target element.
   * This method checks if the target element has an `id` attribute and uses it to find the corresponding submenu popover.
   * If a submenu popover is found, it returns it; otherwise, it returns `undefined` or `null`.
   * @param target - The target element for which to find the submenu popover.
   * @returns - The submenu popover instance or `undefined`/`null` if not found.
   * @internal
   */
  private getSubMenuPopoverOfTarget(target: HTMLElement): typeof this | undefined | null {
    const id = target.getAttribute('id');
    if (!id) return null;
    return this.parentElement?.querySelector?.(`${MENU_POPOVER}[triggerid="${id}"]`);
  }

  /** @internal */
  private collectMenuItems() {
    const slot = this.shadowRoot?.querySelector('slot');
    const allAssignedElements = (slot?.assignedElements({ flatten: true }) || []) as Array<HTMLElement>;

    this.menuItems = allAssignedElements
      .map(node => {
        if (node.tagName.toLowerCase() === MENUSECTION_TAGNAME) {
          return Array.from(node.children).filter(child => isValidMenuItem(child)) as Array<HTMLElement>;
        }
        return isValidMenuItem(node) ? node : [];
      })
      .flat()
      .filter(node => !!node && !node.hasAttribute('disabled'));

    this.menuItemsWithSubMenus = this.menuItems.filter(item => {
      const submenu = this.getSubMenuPopoverOfTarget(item);
      return submenu;
    });
  }

  /** @internal */
  private getOpenSubMenusOfItems(items: Array<HTMLElement>): Array<this> {
    const subMenus = <Array<this>>[];
    if (!items || items.length === 0) return subMenus;

    items.forEach(item => {
      const submenu = this.getSubMenuPopoverOfTarget(item);
      if (submenu && submenu.visible) {
        subMenus.push(submenu);
      }
    });

    return subMenus;
  }

  override connectedCallback() {
    super.connectedCallback();

    this.role = ROLE.MENU;
    this.ariaOrientation = DEFAULTS.ORIENTATION;
    this.backdrop = false;
    this.color = COLOR.TONAL;
    this.disableAriaExpanded = false;
    this.focusBackToTrigger = true;
    this.focusTrap = true;
    this.hideOnEscape = true;
    this.hideOnOutsideClick = true;
    this.interactive = true;
    this.showArrow = false;
    this.closeButton = false;
    this.closeButtonAriaLabel = null;
  }

  protected override async isOpenUpdated(oldValue: boolean, newValue: boolean): Promise<void> {
    if (oldValue === newValue || !this.triggerElement) return Promise.resolve();

    // Set backdrop to true when the popover is opened with other than menu item.
    //
    // make sure backdrop is set before showing the popover, but it does not change when popover is closing, otherwise
    // `super.isOpenUpdated` will skip the backdrop cleanup
    if (newValue) {
      this.backdrop = ![MENUITEM_TAGNAME, NAVMENUITEM_TAGNAME].includes(
        this.triggerElement.tagName.toLowerCase() as any,
      );
    }

    // if the current menupopover is closed, close all submenus
    if (newValue === false) {
      this.menuItemsWithSubMenus.forEach(item => {
        const submenu = this.getSubMenuPopoverOfTarget(item);
        if (submenu) {
          submenu.hide();
        }
      });
    }

    this.resetMenuNavigation();

    return super.isOpenUpdated(oldValue, newValue);
  }

  override async firstUpdated(changedProperties: PropertyValues) {
    await super.firstUpdated(changedProperties);

    this.collectMenuItems();
    this.resetTabIndexes(0);
  }

  /**
   * Reset all tabindex to -1 and set the tabindex of the current menu item to 0
   *
   * @param currentIndex - The index of the currently focused menu item.
   */
  private resetTabIndexes(currentIndex: number) {
    if (this.menuItems.length > 0) {
      this.menuItems.forEach(menuitem => menuitem.setAttribute('tabindex', '-1'));
      this.menuItems[currentIndex].setAttribute('tabindex', '0');
      this.menuItems[currentIndex].focus();
    }
  }

  /**
   * Retrieves the current index of the menu item that triggered the event.
   * @param target - The target element that triggered the event.
   * @returns - The index of the current menu item in the `menuItems` array.
   */
  private getCurrentIndex(target: EventTarget | null): number {
    return this.menuItems.findIndex(node => node === target);
  }

  /**
   * Resets the tabindex of the currently focused menu item and sets focus to a new menu item.
   * @param newIndex - The index of the new menu item to focus.
   * @param oldIndex - The index of the currently focused menu item.
   * @returns - This method does not return anything.
   */
  private resetTabIndexAndSetFocus(newIndex: number, oldIndex: number) {
    if (newIndex === oldIndex) return;
    this.menuItems[oldIndex].setAttribute('tabindex', '-1');
    this.menuItems[newIndex].setAttribute('tabindex', '0');
    this.menuItems[newIndex].focus();
  }

  /**
   * Closes all menu popovers in the stack.
   * This method is used to ensure that when a menu item is clicked,
   * all other open popovers are closed, maintaining a clean user interface.
   * It iterates through the `popoverStack` and hides each popover until the stack is empty.
   *
   * @param until - The popover to close until.
   */
  private closeAllMenuPopovers(until?: Element): void {
    while (popoverStack.peek() !== until) {
      if (!isValidMenuPopover(popoverStack.peek() as Element)) break;

      const popover = popoverStack.pop();
      if (popover) {
        popover.hide();
      } else {
        break;
      }
    }
  }

  /**
   * Handles outside click events to close the popover.
   * This method checks if the click occurred outside the popover and its trigger element.
   * If so, it closes the popover by calling `closeAllMenuPopovers`.
   * It also checks if the click was on the backdrop element (if present) to close the popover.
   * @param event - The mouse event that triggered the outside click.
   */
  override onOutsidePopoverClick = (event: MouseEvent): void => {
    if (popoverStack.peek() !== this) return;
    const path = event.composedPath();
    const insidePopoverClick =
      this.contains(event.target as Node) || path.includes(this.triggerElement!) || path.includes(this);
    const clickedOnBackdrop = this.backdropElement ? path.includes(this.backdropElement) : false;

    if (!insidePopoverClick || clickedOnBackdrop) {
      this.closeAllMenuPopovers();
    }
  };

  /**
   * Toggles the visibility of the popover.
   * This method checks if the trigger element has the `soft-disabled` attribute.
   * If it does, the popover will not be toggled.
   * If the popover is currently visible, it hides the popover; otherwise, it shows the popover.
   * @returns - This method does not return anything.
   */
  public override togglePopoverVisible = (event: Event) => {
    if (this.triggerElement?.hasAttribute('soft-disabled') || !this.isEventFromTrigger(event)) return;
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  };

  /**
   * Closes all other submenus on the same level as the target menu item.
   * This method is used to ensure that only one submenu is open at a time.
   * It finds all other menu items with submenus and closes their submenus.
   * @param target - The target menu item that was clicked.
   */
  private closeOtherSubMenusOnSameLevel(target: HTMLElement): void {
    const otherMenuItemsOnSameLevel = this.menuItemsWithSubMenus.filter(item => item !== target);
    const otherOpenSubMenus = this.getOpenSubMenusOfItems(otherMenuItemsOnSameLevel);

    otherOpenSubMenus.forEach(subMenu => {
      subMenu.hide();
    });
  }

  /**
   * Fires the 'action' event on the target menu item.
   * This method is used to trigger the action associated with a menu item when it is clicked or activated.
   * It checks if the target element matches the `MENUITEM_TAGNAME` and dispatches an 'action' event.
   * @param target - The target menu item that was clicked or activated.
   */
  private fireMenuItemAction(target: HTMLElement): void {
    if (target.matches(MENUITEM_TAGNAME)) {
      target.dispatchEvent(new Event('action', { bubbles: true, composed: true }));
    }
  }

  /**
   * Handles mouse click events on the menu items.
   * This method checks if the clicked element is a valid menu item and not a submenu trigger.
   * If it is, it closes all other menu popovers to ensure only one menu is open at a time.
   * @param event - The mouse event that triggered the click.
   */
  private handleMouseClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // stopPropagation to prevent the click from bubbling up to parent elements
    event.stopPropagation();

    // if the target is not a valid menu item or if the event is not trusted (
    // e.g., triggered by keydown originally), do nothing. Pressing space and enter
    // is handled separately in the respective handler.
    if (!isValidMenuItem(target) || !event.isTrusted || target.hasAttribute('soft-disabled')) return;

    // If the target has a submenu, show it and close other submenus on the same level
    if (this.getSubMenuPopoverOfTarget(target)) {
      this.closeOtherSubMenusOnSameLevel(target);
      return;
    }
    this.closeAllMenuPopovers();
    this.fireMenuItemAction(target);
  }

  private handleItemCreation = (event: Event) => {
    const item = event.target as HTMLElement;

    if (isValidMenuItem(item)) {
      // Parent menu popover should not listen on nested menu items
      event.stopImmediatePropagation();
      // `destroyed` triggered in the `disconnectedCallback` of the item which executed when the item is removed from the DOM
      // because of that the event does not bubble up to menupopover, and we need to capture the `destroyed` event on the item itself
      item.addEventListener('destroyed', this.handleItemChangeEvent);
      // `disabled` could bubble up, but it is more consistent to handle it the same way as `destroyed`
      item.addEventListener('disabled', this.handleItemChangeEvent);
    }
  };

  private handleItemChangeEvent = (event: Event) => {
    event.stopImmediatePropagation();

    if (event.target && event.type === 'destroyed') {
      event.target.removeEventListener('destroyed', this.handleItemChangeEvent);
      event.target.removeEventListener('disabled', this.handleItemChangeEvent);
    }

    this.resetMenuNavigation();
  };

  private resetMenuNavigation = () => {
    // Re-collect menu items to ensure the list is up-to-date
    this.collectMenuItems();
    // Reset tab indexes to ensure at least one menu item is focusable
    const focusableMenuItem = this.menuItems.find(item => item.getAttribute('tabindex') === '0');
    if (!focusableMenuItem) {
      this.resetTabIndexes(0);
    }
  };

  /**
   * Resolves the key pressed by the user based on the direction of the layout.
   * This method is used to handle keyboard navigation in a right-to-left (RTL) layout.
   * It checks if the layout is RTL and adjusts the arrow keys accordingly.
   * For example, in RTL, the left arrow key behaves like the right arrow key and vice versa.
   * @param key - The key pressed by the user.
   * @param isRtl - A boolean indicating if the layout is right-to-left (RTL).
   * @returns - The resolved key based on the direction.
   */
  private resolveDirectionKey(key: string, isRtl: boolean) {
    if (!isRtl) return key;

    switch (key) {
      case KEYS.ARROW_LEFT:
        return KEYS.ARROW_RIGHT;
      case KEYS.ARROW_RIGHT:
        return KEYS.ARROW_LEFT;
      default:
        return key;
    }
  }

  /**
   * Handles keydown events for keyboard navigation within the menu popover.
   * This method allows users to navigate through the menu items using the keyboard.
   * It supports Home, End, Arrow Up, Arrow Down, Arrow Left, Arrow Right, and Escape keys.
   *
   * Also, it handles Enter key to close the menu popover
   *
   * @param event - The keyboard event that triggered the keydown action.
   * @returns - This method does not return anything.
   */
  private handleKeyDown = (event: KeyboardEvent) => {
    let isKeyHandled = false;

    this.collectMenuItems();
    const target = event.target as HTMLElement;
    const currentIndex = this.getCurrentIndex(target);
    if (currentIndex === -1) return;
    this.resetTabIndexes(currentIndex);

    const isRtl = window.getComputedStyle(this).direction === 'rtl';

    const targetKey = this.resolveDirectionKey(event.key, isRtl);

    switch (targetKey) {
      case KEYS.HOME: {
        // Move focus to the first menu item
        this.resetTabIndexAndSetFocus(0, currentIndex);
        isKeyHandled = true;
        break;
      }
      case KEYS.END: {
        // Move focus to the last menu item
        this.resetTabIndexAndSetFocus(this.menuItems.length - 1, currentIndex);
        isKeyHandled = true;
        break;
      }
      case KEYS.ARROW_DOWN: {
        // Move focus to the next menu item
        const newIndex = currentIndex + 1 === this.menuItems.length ? 0 : currentIndex + 1;
        this.resetTabIndexAndSetFocus(newIndex, currentIndex);
        isKeyHandled = true;
        break;
      }
      case KEYS.ARROW_UP: {
        // Move focus to the prev menu item
        const newIndex = currentIndex - 1 === -1 ? this.menuItems.length - 1 : currentIndex - 1;
        this.resetTabIndexAndSetFocus(newIndex, currentIndex);
        isKeyHandled = true;
        break;
      }
      case KEYS.ARROW_RIGHT: {
        // If there is a submenu, open it.
        const subMenu = this.getSubMenuPopoverOfTarget(target);
        if (subMenu) {
          subMenu.show();
          isKeyHandled = true;
        }
        break;
      }
      case KEYS.ARROW_LEFT: {
        // If the current popover is a submenu then close this popover.
        if (isValidMenuPopover(this.parentElement)) {
          this.hide();
          this.resetTabIndexAndSetFocus(0, currentIndex);
          isKeyHandled = true;
        }
        break;
      }
      case KEYS.ESCAPE: {
        this.resetTabIndexAndSetFocus(0, currentIndex);
        isKeyHandled = true;
        break;
      }
      case KEYS.ENTER: {
        if (!this.getSubMenuPopoverOfTarget(target) && !target.hasAttribute('soft-disabled')) {
          this.closeAllMenuPopovers();
          this.fireMenuItemAction(target);
          isKeyHandled = true;
        }
        break;
      }
      case KEYS.SPACE: {
        // Prevent page scroll when space is pressed down
        isKeyHandled = true;
        break;
      }
      default:
        break;
    }

    // When menu consume any of the pressed key, we need to stop propagation
    // to prevent the event from bubbling up and being handled by parent components which might use the same key.
    if (isKeyHandled) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  /**
   * Handles keyup events for keyboard navigation within the menu popover.
   *
   * Some keys must be handled with keyup event to prevent default action.
   *
   * Space key closes the menu when the user presses it on a menu item,
   * but the same key will trigger a click on the menu opener button.
   * The button uses the keyup event so we have to handle it here as well
   * to prevent the meu opener action which would re-open the menu.
   *
   * @param event - The keyboard event that triggered the keydown action.
   * @returns - This method does not return anything.
   */
  private handleKeyUp = (event: KeyboardEvent) => {
    let isKeyHandled = false;

    const target = event.target as HTMLElement;

    switch (event.key) {
      case KEYS.SPACE: {
        // If the target is a menu item, trigger its click event
        if (!target.matches(`${MENUITEMRADIO_TAGNAME}, ${MENUITEMCHECKBOX_TAGNAME}`) && !target.hasAttribute('soft-disabled')) {
          // only close all menu popovers if the target is not opening a menu popover
          if (!this.getSubMenuPopoverOfTarget(target)) {
            this.closeAllMenuPopovers();
            this.fireMenuItemAction(target);
            isKeyHandled = true;
          }
        }
        break;
      }
      default:
        break;
    }

    // When menu consume any of the pressed key, we need to stop propagation
    // to prevent the event from bubbling up and being handled by parent components which might use the same key.
    if (isKeyHandled) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  public static override styles: Array<CSSResult> = [...Popover.styles, ...styles];
}

export default MenuPopover;
