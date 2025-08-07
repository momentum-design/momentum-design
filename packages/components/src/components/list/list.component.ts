import type { CSSResult } from 'lit';
import { html } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';

import { Component } from '../../models';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';
import { TAG_NAME as LISTITEM_TAGNAME } from '../listitem/listitem.constants';

import styles from './list.styles';

/**
 * mdc-list component is used to display a group of list items. It is used as a container to wrap other list items.
 *
 * To add a header to the list, use the `mdc-listheader` component and place it in the `list-header` slot.
 * `mdc-listitem` components can be placed in the default slot.
 *
 * @tagname mdc-list
 *
 * @slot default - This is a default/unnamed slot, where listitems can be placed.
 * @slot list-header - This slot is used to pass a header for the list, which can be a `mdc-listheader` component.
 *
 * @csspart container - The container slot around the list items
 */
class List extends Component {
  /**
   * @internal
   * Get all listitem elements which are not disabled in the list.
   */
  @queryAssignedElements({ selector: `${LISTITEM_TAGNAME}:not([disabled])` })
  private listItems!: Array<HTMLElement>;

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    // Set the role attribute for accessibility.
    this.setAttribute('role', ROLE.LIST);
  }

  /**
   * Handles the keydown event on the list element.
   * If the key is 'ArrowUp' or 'ArrowDown', it focuses to the previous or next list item
   * and sets the active tabindex of the list item.
   * Prevents the default event behavior.
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    const currentIndex = this.getCurrentIndex(event.target);
    const newIndex = this.getNewIndexBasedOnKey(event.key, currentIndex, this.listItems.length);
    if (newIndex !== undefined) {
      this.listItems[newIndex]?.focus();
      this.resetTabIndexAndSetActiveTabIndex(newIndex);
    }
  }

  /**
   * Returns the index of the given target in the listItems array.
   * If the target is not a list item, but a child element of a list item,
   * it returns the index of the parent list item.
   * @param target - The target element to find the index of.
   * @returns The index of the target element in the listItems array.
   */
  private getCurrentIndex(target: EventTarget | null): number {
    return this.listItems.findIndex(node => node === target || node === (target as HTMLElement).parentElement);
  }

  /**
   * Calculates a new index based on the pressed keyboard key.
   * Supports navigation keys for moving focus within a list.
   * @param key - The key that was pressed.
   * @param currentIndex - The current index of the focused list item.
   * @param wrappedDivsCount - The total number of list items.
   * @returns The new index to focus on, or undefined if the key is not supported.
   */
  private getNewIndexBasedOnKey(key: string, currentIndex: number, wrappedDivsCount: number): number | undefined {
    switch (key) {
      case KEYS.ARROW_DOWN:
        return (currentIndex + 1) % wrappedDivsCount;
      case KEYS.ARROW_UP:
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
   * Handles the mouse click event on the list element.
   * Finds the index of the target element in the list items array and calls
   * `resetTabIndexAndSetActiveTabIndex` with that index.
   * @param event - The mouse event.
   */
  protected handleMouseClick(event: MouseEvent): void {
    const newIndex = this.getCurrentIndex(event.target);
    this.resetTabIndexAndSetActiveTabIndex(newIndex);
  }

  /**
   * Resets all list items tabindex to -1 and sets the tabindex of the
   * element at the given index to 0, effectively setting the active
   * element. This is used when navigating the list via keyboard.
   *
   * @param newIndex - The index of the new active element in the list.
   */
  private resetTabIndexAndSetActiveTabIndex(newIndex: number) {
    this.listItems.forEach((node, index) => {
      const newTabindex = newIndex === index ? '0' : '-1';
      node?.setAttribute('tabindex', newTabindex);
    });
  }

  public override firstUpdated(): void {
    // For the first, we set the first element only as active.
    this.resetTabIndexAndSetActiveTabIndex(0);
  }

  public override render() {
    return html`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" @click="${this.handleMouseClick}" role="presentation"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default List;
