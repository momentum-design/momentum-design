import { html } from 'lit';
import type { CSSResult, PropertyValues } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import { ROLE } from '../../utils/roles';
import styles from './menubar.styles';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { ORIENTATION, TAG_NAME as MENUBAR_TAGNAME } from './menubar.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import { TAG_NAME as MENUITEM_TAGNAME } from '../menuitem/menuitem.constants';
import { KEYS } from '../../utils/keys';
import type { Orientation } from './menubar.types';
import MenuPopover from '../menupopover';
import { popoverStack } from '../popover/popover.stack';

/**
  * Menubar is a navigational menu component that provides a vertical (default) or horizontal fixed list of menu items,
  * with support for nested submenus and keyboard navigation. It serves as a container
  * for menu items and manages their interaction patterns, including:
  * - Keyboard navigation (arrow keys, Home, End)
  * - Menu item activation (Enter/Space)
  * - Submenu toggling (Right/Left arrow keys)
  * - Focus management
  * - Support for both horizontal and vertical orientations
  * - Integration with MenuPopover for nested menus
  *
  * A menubar will contain a set of menu items and their associated popovers.
  * Each menu item can have a popover for nested menus.
  *
  * The component automatically handles ARIA attributes and follows WAI-ARIA menu design patterns.
  * It works in conjunction with `mdc-menuitem` and `mdc-menupopover` to create accessible menu structures.
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
  }

  /** @internal */
  // For horizontal menubars, this property tracks if the user has entered a submenu.
  private hasEnteredSubmenu = false;

  @queryAssignedElements({ selector: `${MENUITEM_TAGNAME}:not([disabled])` })
  menuItems!: Array<HTMLElement>;

  @property({ type: String, reflect: true, attribute: 'aria-orientation' })
  override ariaOrientation: Orientation = ORIENTATION.VERTICAL;

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
    return this.menuItems.findIndex(
      (item) => item === target || item === (target as HTMLElement).parentElement,
    );
  }

  private updatePopoverPlacement(): void {
    const allPopovers = this.querySelectorAll(`${MENUPOPOVER_TAGNAME}:not([disabled])`);
    const placement = this.ariaOrientation === ORIENTATION.HORIZONTAL
      ? POPOVER_PLACEMENT.BOTTOM_START
      : POPOVER_PLACEMENT.RIGHT_START;

    allPopovers.forEach((popover) => popover.setAttribute('placement', placement));
  }

  private updateTabIndexAndFocus(menuItems: HTMLElement[], currentIndex: number, newIndex: number): void {
    if (newIndex < 0 || currentIndex < 0) return;

    if (currentIndex !== newIndex) {
      menuItems[currentIndex]?.setAttribute('tabindex', '-1');
      menuItems[newIndex]?.setAttribute('tabindex', '0');
    }

    menuItems[newIndex]?.focus();
  }

  private navigateToMenuItem(
    currentIndex: number,
    direction: 'prev' | 'next',
    shouldOpenSubmenu = false,
  ): void {
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
      if (this.hasSubmenu(triggerId)) {
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

  private isTopLevelMenuItem(element: HTMLElement): boolean {
    return element.parentElement?.tagName.toLowerCase() === MENUBAR_TAGNAME
      && element.tagName.toLowerCase() === MENUITEM_TAGNAME;
  }

  private isNestedMenuItem(element: HTMLElement): boolean {
    return !!element.closest(MENUPOPOVER_TAGNAME)
      && element.tagName.toLowerCase() === MENUITEM_TAGNAME;
  }

  private closeAllMenuPopovers() {
    while (popoverStack.peek()) {
      const popover = popoverStack.pop();
      if (popover) {
        popover.hidePopover();
      }
    }
  }

  private crossMenubarNavigationOnLeft(element: HTMLElement): void {
    const isMenuItem = element.tagName.toLowerCase() === MENUITEM_TAGNAME;
    if (isMenuItem) {
      const parentPopover = element.closest(MENUPOPOVER_TAGNAME);
      const triggerId = parentPopover?.getAttribute('triggerid');
      const triggerMenuItem = this.menuItems.find((item) => item.getAttribute('id') === triggerId);
      if (triggerMenuItem) {
        if (this.isTopLevelMenuItem(triggerMenuItem)) {
          parentPopover?.hidePopover();
        }
        setTimeout(() => {
          const parentMenuItemIndex = this.getCurrentIndex(triggerMenuItem);
          this.navigateToMenuItem(parentMenuItemIndex, 'prev', true);
        }, 0);
      }
    }
  }

  private crossMenubarNavigationOnRight(element: HTMLElement): void {
    if (this.isTopLevelMenuItem(element) && this.hasSubmenu(element.id)) {
      this.showSubmenu(element.id);
    } else if (this.isNestedMenuItem(element) && !this.hasSubmenu(element.id)) {
      this.closeAllMenuPopovers();
      setTimeout(() => {
        const parentIndex = this.getParentMenuItemIndex(element);
        if (parentIndex >= 0) this.navigateToMenuItem(parentIndex, 'next', true);
      }, 0);
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
        const triggerElement = this.menuItems.find((item) => item.getAttribute('id') === triggerId);

        if (triggerElement) {
          if (this.isTopLevelMenuItem(triggerElement)) {
            return this.menuItems.findIndex((item) => item === triggerElement);
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

      case KEYS.ARROW_LEFT:
        if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
          const element = (currentIndex >= 0) ? this.menuItems[currentIndex] : (event.target as HTMLElement);

          if (this.hasEnteredSubmenu && this.isNestedMenuItem(element) && !this.hasSubmenu(element.id)) {
            const parentIndex = this.getParentMenuItemIndex(element);
            if (parentIndex >= 0) {
              this.navigateToMenuItem(parentIndex, 'prev', true);
            }
          } else if (currentIndex >= 0) {
            this.navigateToMenuItem(currentIndex, 'prev', false);
          }
        } else {
          const element = (currentIndex >= 0) ? this.menuItems[currentIndex] : (event.target as HTMLElement);
          this.crossMenubarNavigationOnLeft(element);
        }
        break;

      case KEYS.ARROW_RIGHT:
        if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
          const element = (currentIndex >= 0) ? this.menuItems[currentIndex] : (event.target as HTMLElement);

          if (this.hasEnteredSubmenu && this.isNestedMenuItem(element) && !this.hasSubmenu(element.id)) {
            const parentIndex = this.getParentMenuItemIndex(element);
            if (parentIndex >= 0) {
              this.navigateToMenuItem(parentIndex, 'next', true);
            }
          } else if (currentIndex >= 0) {
            this.navigateToMenuItem(currentIndex, 'next', false);
          }
        } else {
          const element = (currentIndex >= 0) ? this.menuItems[currentIndex] : (event.target as HTMLElement);
          this.crossMenubarNavigationOnRight(element);
        }
        break;

      case KEYS.ARROW_UP:
        if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
          const triggerId = this.menuItems[currentIndex]?.getAttribute('id');
          this.showSubmenu(triggerId);
          this.hasEnteredSubmenu = true;
        } else {
          this.navigateToMenuItem(currentIndex, 'prev');
        }
        event.preventDefault();
        break;

      case KEYS.ARROW_DOWN:
        if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
          const triggerId = this.menuItems[currentIndex]?.getAttribute('id');
          this.showSubmenu(triggerId);
          this.hasEnteredSubmenu = true;
        } else {
          this.navigateToMenuItem(currentIndex, 'next');
        }
        event.preventDefault();
        break;

      case KEYS.ENTER:
      case KEYS.SPACE:
        if (this.ariaOrientation === ORIENTATION.HORIZONTAL) {
          const triggerId = this.menuItems[currentIndex]?.getAttribute('id');
          if (this.hasSubmenu(triggerId)) {
            this.showSubmenu(triggerId);
            this.hasEnteredSubmenu = true;
          }
        }
        break;

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
