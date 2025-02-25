import { CSSResult, html } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import styles from './list.styles';
import { Component } from '../../models';
import { TAG_NAME as LISTITEM_TAGNAME } from '../listitem/listitem.constants';
import { KEYS } from './list.constants';

/**
 * list component, which ...
 *
 * @tagname mdc-list
 *
 * @slot default - This is a default/unnamed slot
 */
class List extends Component {
  @queryAssignedElements({ selector: LISTITEM_TAGNAME })
  listItems!: Array<HTMLElement>;

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Handles the keydown event on the list element.
   * If the key is 'ArrowUp' or 'ArrowDown', it focuses to the previous or next list item
   * and sets the active tabindex of the list item.
   * Prevents the default event behavior.
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    const items = this.listItems;
    if (!items.length) return;
    const index = items.findIndex((item) => item === document.activeElement);
    if (event.key === KEYS.ARROW_DOWN) {
      event.preventDefault();
      const nextIndex = (index + 1) % items.length;
      items[nextIndex].focus();
      this.resetTabIndexAndSetActiveTabIndex(nextIndex);
    } else if (event.key === KEYS.ARROW_UP) {
      event.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      items[prevIndex].focus();
      this.resetTabIndexAndSetActiveTabIndex(prevIndex);
    }
  }

  /**
   * Handles the mouse click event on the list element.
   * Finds the index of the target element in the list items array and calls
   * `resetTabIndexAndSetActiveTabIndex` with that index.
   * @param event - The mouse event.
   */
  private handleMouseClick(event: MouseEvent): void {
    const items = this.listItems;
    const index = items.findIndex((item) => item === event.target);

    this.resetTabIndexAndSetActiveTabIndex(index);
  }

  /**
   * Resets all list items tabindex to -1 and sets the tabindex of the
   * element at the given index to 0, effectively setting the active
   * element. This is used when navigating the list via keyboard.
   *
   * @param newIndex - The index of the new active element in the list.
   */
  private resetTabIndexAndSetActiveTabIndex(newIndex: number) {
    this.listItems.forEach((item) => item.setAttribute('tabindex', '-1'));
    this.listItems[newIndex].setAttribute('tabindex', '0');
  }

  /**
   * Sets the tabindex of the first list item to 0, effectively setting it as
   * the active element. This happens only when the list is first rendered.
   */
  private setFirstTabIndex() {
    const firstItem = this.listItems[0];
    if (!firstItem) return;

    firstItem.setAttribute('tabindex', '0');
  }

  public override firstUpdated() {
    this.setFirstTabIndex();
  }

  public override render() {
    return html`
      <ul>
        <slot @click="${this.handleMouseClick}"></slot>
      </ul>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default List;
