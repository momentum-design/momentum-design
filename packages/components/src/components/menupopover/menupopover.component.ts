import { CSSResult, PropertyValues } from 'lit';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';
import { TAG_NAME as MENUSECTION_TAGNAME } from '../menusection/menusection.constants';
import { ORIENTATION } from '../menubar/menubar.constants';
import Popover from '../popover/popover.component';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { TAG_NAME as MENU_POPOVER } from './menupopover.constants';
import styles from './menupopover.styles';
import { isValidMenuItem, isValidPopover } from './menupopover.utils';
import { popoverStack } from '../popover/popover.stack';

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
 * @tagname mdc-menupopover
 * @slot default - Contains the menu items to be displayed in the popover
 */
class MenuPopover extends Popover {
  constructor() {
    super();

    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('click', this.handleMouseClick);
  }

  /** @internal */
  get menuItems(): Array<HTMLElement> {
    const slot = this.shadowRoot?.querySelector('slot');
    const allAssignedElements = (slot?.assignedElements({ flatten: true }) || []) as Array<HTMLElement>;
    return allAssignedElements.map(
      (node) => {
        if (node.tagName.toLowerCase() === MENUSECTION_TAGNAME) {
          return Array.from(node.children)
            .filter((child) => isValidMenuItem(child)) as Array<HTMLElement>;
        }
        return isValidMenuItem(node) ? node : [];
      },
    )
      .flat()
      .filter((node) => !!node)
      .filter((node) => !node.hasAttribute('disabled'));
  }

  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENU;

    this.focusTrap = true;
    this.focusBackToTrigger = true;
    this.hideOnEscape = true;
    this.hideOnOutsideClick = true;
    this.placement = POPOVER_PLACEMENT.BOTTOM_START;
    this.showArrow = false;
    this.interactive = true;
    this.ariaOrientation = ORIENTATION.VERTICAL;
  }

  override async firstUpdated(changedProperties: PropertyValues) {
    await super.firstUpdated(changedProperties);

    // Reset all tabindex to -1 and set the tabindex of the first menu item to 0
    this.menuItems.forEach((menuitem) => menuitem.setAttribute('tabindex', '-1'));
    this.menuItems[0].setAttribute('tabindex', '0');

    this.triggerElement?.setAttribute('aria-haspopup', ROLE.MENU);
    if (this.parentElement?.tagName?.toLowerCase() === MENU_POPOVER) {
      this.placement = POPOVER_PLACEMENT.RIGHT_START;
    }
  }

  private getCurrentIndex(target: EventTarget | null): number {
    return this.menuItems.findIndex((node) => node === target);
  }

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
   */
  private closeAllMenuPopovers() {
    while (popoverStack.peek()) {
      const popover = popoverStack.pop();
      if (popover) {
        popover.hidePopover();
      }
    }
  }

  private handleMouseClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (isValidMenuItem(target) && !isValidPopover(target.nextElementSibling)) {
      this.closeAllMenuPopovers();
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const currentIndex = this.getCurrentIndex(event.target);
    if (currentIndex === -1) return;
    const isRtl = document.querySelector('html')?.getAttribute('dir') === 'rtl'
     || window.getComputedStyle(this).direction === 'rtl';
    let targetKey = event.key;
    if (isRtl) {
      // Swap left and right keys for RTL languages
      if (event.key === KEYS.ARROW_LEFT) {
        targetKey = KEYS.ARROW_RIGHT;
      } else if (event.key === KEYS.ARROW_RIGHT) {
        targetKey = KEYS.ARROW_LEFT;
      }
    }
    switch (targetKey) {
      case KEYS.HOME: {
        // Move focus to the first menu item
        this.resetTabIndexAndSetFocus(0, currentIndex);
        break;
      }
      case KEYS.END: {
        // Move focus to the first menu item
        this.resetTabIndexAndSetFocus(this.menuItems.length - 1, currentIndex);
        break;
      }
      case KEYS.ARROW_DOWN: {
        // Move focus to the next menu item
        const newIndex = (currentIndex + 1) === this.menuItems.length ? 0 : (currentIndex + 1);
        this.resetTabIndexAndSetFocus(newIndex, currentIndex);
        break;
      }
      case KEYS.ARROW_UP: {
        // Move focus to the prev menu item
        const newIndex = (currentIndex - 1) === -1 ? (this.menuItems.length - 1) : (currentIndex - 1);
        this.resetTabIndexAndSetFocus(newIndex, currentIndex);
        break;
      }
      case KEYS.ARROW_RIGHT: {
        // If there is a submenu, open it.
        if (isValidPopover(this.menuItems[currentIndex]?.nextElementSibling)) {
          (this.menuItems[currentIndex]?.nextElementSibling as Popover).showPopover();
        }
        break;
      }
      case KEYS.ARROW_LEFT: {
        // If the current popover is a submenu then close this popover.
        if (isValidPopover(this.parentElement)) {
          this.hidePopover();
          this.resetTabIndexAndSetFocus(0, currentIndex);
        }
        break;
      }
      case KEYS.ESCAPE: {
        this.resetTabIndexAndSetFocus(0, currentIndex);
        break;
      }
      default:
        break;
    }
  }

  public static override styles: Array<CSSResult> = [...Popover.styles, ...styles];
}

export default MenuPopover;
