import { CSSResult, html, nothing } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { TAG_NAME as LISTITEM_TAGNAME } from '../listitem/listitem.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { KEYS } from './list.constants';
import styles from './list.styles';

/**
 * list component, combines a group of listitems.
 *
 * @tagname mdc-list
 *
 * @slot default - This is a default/unnamed slot
 */
class List extends DataAriaLabelMixin(Component) {
  @queryAssignedElements({ selector: LISTITEM_TAGNAME })
  listItems!: Array<HTMLElement>;

  /**
   * The header text of the list.
   */
  @property({ type: String, attribute: 'header-text', reflect: true }) headerText?: string;

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
    this.role = 'group';
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
    const headerText = this.headerText ? html`
      <mdc-text
        id="header-id"
        part="header-text"
        type="${TYPE.BODY_MIDSIZE_BOLD}"
        tagname="${VALID_TEXT_TAGS.SPAN}"
      >${this.headerText}</mdc-text>
    ` : nothing;
    return html`
      ${headerText}
      <ul aria-labelledby="header-id" aria-label="${this.dataAriaLabel ?? ''}">
        <slot @click="${this.handleMouseClick}"></slot>
      </ul>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default List;
