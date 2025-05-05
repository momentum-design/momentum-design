import { CSSResult, html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';
import { TAG_NAME as MENUITEM_TAGNAME } from '../menuitem/menuitem.constants';
import { ORIENTATION } from './menubar.constants';
import styles from './menubar.styles';
import type { Orientation } from './menubar.types';

/**
 * menubar component, which ...
 *
 * @tagname mdc-menubar
 *
 * @slot default - This is a default/unnamed slot
 */
class MenuBar extends Component {
  /** @internal */
  @queryAssignedElements({ selector: MENUITEM_TAGNAME })
  menuItems!: Array<HTMLElement>;

  /**
   * Aria Orientation
   * @default 'horizontal'
   */
  @property({ type: String, reflect: true, attribute: 'aria-orientation' })
  override ariaOrientation: Orientation = ORIENTATION.HORIZONTAL;

  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENUBAR;

    this.addEventListener('keydown', this.handleKeyDown);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Handles the keydown event on the menubar element.
   * If the key is 'ArrowLeft' or 'ArrowRight', it focuses to the previous or next menu item
   * it moves focus to the corresponding menu item.
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    const currentIndex = this.getCurrentIndex(event.target);
    const newIndex = this.getNewIndexBasedOnKey(event.key, currentIndex, this.menuItems.length);
    if (newIndex !== undefined) {
      this.menuItems[newIndex]?.focus();
      this.resetTabIndexAndSetActiveTabIndex(newIndex);
    }
  }

  /**
   * Returns the index of the given target in the menuItems array.
   * If the target is not a menu item, but a child element of a menu item,
   * it returns the index of the parent menu item.
   * @param target - The target element to find the index of.
   * @returns The index of the target element in the menuItems array.
   */
  private getCurrentIndex(target: EventTarget | null): number {
    return this.menuItems.findIndex((node) => node === target || node === (target as HTMLElement).parentElement);
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
  private getNewIndexBasedOnKey(key: string, currentIndex: number, wrappedDivsCount: number): number | undefined {
    switch (key) {
      case KEYS.ARROW_RIGHT:
        return (currentIndex + 1) % wrappedDivsCount;
      case KEYS.ARROW_LEFT:
        return (currentIndex - 1 + wrappedDivsCount) % wrappedDivsCount;
      case KEYS.HOME:
        return 0;
      case KEYS.END:
        return wrappedDivsCount - 1;
      default:
        return undefined;
    }
  }

  /**
   * Handles the mouse click event on the menubar slot which targets one of the menu items.
   * Finds the index of the target element in the list items array and calls
   * `resetTabIndexAndSetActiveTabIndex` with that index.
   * @param event - The mouse event.
   */
  private handleMouseClick(event: MouseEvent): void {
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
  private resetTabIndexAndSetActiveTabIndex(newIndex: number) {
    this.menuItems.forEach((node, index) => {
      const newTabindex = newIndex === index ? '0' : '-1';
      node?.setAttribute('tabindex', newTabindex);
    });
  }

  public override firstUpdated(): void {
    // For the first, we set the first element only as active.
    this.resetTabIndexAndSetActiveTabIndex(0);
  }

  public override render() {
    return html`<slot @click="${this.handleMouseClick}"></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuBar;
