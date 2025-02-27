import { CSSResult, html, nothing } from 'lit';
import { property, queryAssignedNodes } from 'lit/decorators.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { KEYS } from './list.constants';
import { TAG_NAME as LISTITEM_TAGNAME } from '../listitem/listitem.constants';
import styles from './list.styles';

/**
 * list component, combines a group of listitems.
 *
 * @tagname mdc-list
 *
 * @slot default - This is a default/unnamed slot
 */
class List extends DataAriaLabelMixin(Component) {
  @queryAssignedNodes({ flatten: true })
  defaultSlot!: Array<HTMLElement>;

  /**
   * The header text of the list.
   */
  @property({ type: String, attribute: 'header-text', reflect: true }) headerText?: string;

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
    const wrappedDivs = this.getListItemsFromDefaultSlot();
    const currentIndex = wrappedDivs.findIndex((node) => node === event.target);
    const newIndex = this.getNewIndexBasedOnKey(event.key, currentIndex, wrappedDivs.length);
    console.log(currentIndex, newIndex, wrappedDivs);
    wrappedDivs[newIndex]?.focus();
    this.resetTabIndexAndSetActiveTabIndex(newIndex);
  }

  private getNewIndexBasedOnKey(key: string, currentIndex: number, wrappedDivsCount: number): number {
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
        return 0;
    }
  }

  /**
   * Handles the mouse click event on the list element.
   * Finds the index of the target element in the list items array and calls
   * `resetTabIndexAndSetActiveTabIndex` with that index.
   * @param event - The mouse event.
   */
  private handleMouseClick(event: MouseEvent): void {
    const newIndex = this.getListItemsFromDefaultSlot().findIndex((node) => node === event.target);
    this.resetTabIndexAndSetActiveTabIndex(newIndex);
  }

  private getListItemsFromDefaultSlot() {
    return this.defaultSlot
      .filter((node) => node.nodeType === Node.ELEMENT_NODE)
      .map((node) => node.querySelector(LISTITEM_TAGNAME))
      .filter((node) => node !== null);
  }

  /**
   * Resets all list items tabindex to -1 and sets the tabindex of the
   * element at the given index to 0, effectively setting the active
   * element. This is used when navigating the list via keyboard.
   *
   * @param newIndex - The index of the new active element in the list.
   */
  private resetTabIndexAndSetActiveTabIndex(newIndex: number) {
    this.getListItemsFromDefaultSlot()
      .forEach((node, index) => {
        const newTabindex = newIndex === index ? '0' : '-1';
        node?.setAttribute('tabindex', newTabindex);
      });
  }

  private wrapListItemsForAccesibility(): void {
    this.defaultSlot
      .filter((node) => node.nodeType === Node.ELEMENT_NODE)
      .filter((node) => !(node as HTMLElement).hasAttribute('data-wrapped'))
      .filter((node) => node.tagName?.toLowerCase() === LISTITEM_TAGNAME)
      .forEach((node, index) => {
        node?.setAttribute('tabindex', index === 0 ? '0' : '-1'); // set first item to active (for keyboard)
        const wrapper = document.createElement('li');
        wrapper.classList.add('list-wrapper');
        wrapper.setAttribute('data-wrapped', ''); // To prevent re-wrapping
        node?.parentNode?.insertBefore(wrapper, node);
        if (node) {
          wrapper.appendChild(node);
        }
      });
  }

  public override updated() {
    this.wrapListItemsForAccesibility();
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
      <ul aria-labelledby="header-id" aria-label="${this.dataAriaLabel ?? ''}" part="list-container">
        <slot @click="${this.handleMouseClick}"></slot>
      </ul>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default List;
