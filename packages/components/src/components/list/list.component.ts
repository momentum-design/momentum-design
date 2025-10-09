import type { CSSResult } from 'lit';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { ROLE } from '../../utils/roles';
import { ListNavigationMixin } from '../../utils/mixins/ListNavigationMixin';
import { TAG_NAME as LISTITEM_TAGNAME } from '../listitem/listitem.constants';
import { ElementStore, ElementStoreChangeTypes } from '../../utils/controllers/ElementStore';
import type ListItem from '../listitem';
import { CaptureDestroyEventForChildElement } from '../../utils/mixins/lifecycle/CaptureDestroyEventForChildElement';
import { LIFE_CYCLE_EVENTS } from '../../utils/mixins/lifecycle/lifecycle.contants';
import type { LifeCycleModifiedEvent } from '../../utils/mixins/lifecycle/LifeCycleModifiedEvent';
import type { BaseArray } from '../../utils/offsetArray';

import styles from './list.styles';
import { DEFAULTS } from './list.constants';

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
class List extends ListNavigationMixin(CaptureDestroyEventForChildElement(Component)) {
  /**
   * @internal
   */
  private itemsStore: ElementStore<ListItem>;

  /**
   * Whether to loop navigation when reaching the end of the list.
   * If 'true', pressing the down arrow on the last item will focus the first item,
   * and pressing the up arrow on the first item will focus the last item.
   * If 'false', navigation will stop at the first or last item.
   *
   * @default 'true'
   */
  @property({ type: String, reflect: true })
  public override loop: 'true' | 'false' = DEFAULTS.LOOP;

  /**
   * The index of the item that should receive focus when the list is first rendered.
   * If the index is out of bounds, the focused element will be clamped to the nearest valid index.
   *
   * @default 0
   */
  @property({ type: Number, reflect: true, attribute: 'initial-focus' })
  public override initialFocus: number = DEFAULTS.INITIAL_FOCUS;

  /** @internal */
  protected focusWithin = false;

  constructor() {
    super();

    this.addEventListener(LIFE_CYCLE_EVENTS.MODIFIED, this.handleModifiedEvent);
    this.addEventListener('focusin', this.handleFocusEvent);
    this.addEventListener('focusout', this.handleFocusEvent);

    // This must be initialized after the destroyed event listener
    // to keep the element in the itemStore in order to move the focus correctly
    this.itemsStore = new ElementStore<ListItem>(this, {
      isValidItem: this.isValidItem,
      onStoreUpdate: this.onElementStoreUpdate.bind(this),
    });
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.LIST;
  }

  /**
   * @internal
   */
  get navItems(): BaseArray<HTMLElement> {
    return this.itemsStore.items;
  }

  protected onElementStoreUpdate(item: ListItem, changeType: ElementStoreChangeTypes, index: number) {
    if (changeType === 'added') {
      // Update the tabIndex of the list items when a new item is added.
      // eslint-disable-next-line no-param-reassign
      item.tabIndex = -1;
    } else if (changeType === 'removed' && item.tabIndex === 0) {
      let newIndex = index + 1;
      if (newIndex >= this.navItems.length) {
        newIndex = index - 1;
      }

      this.resetTabIndexes(newIndex, this.focusWithin);
    }
  }

  /** @internal */
  private handleFocusEvent(event: FocusEvent) {
    // If previously focused element is being removed from the DOM, ignore the focusout event
    if (event.relatedTarget !== null) {
      this.focusWithin = event.type === 'focusin';
    }
  }

  /** @internal */
  private handleModifiedEvent = (event: LifeCycleModifiedEvent) => {
    const item = event.target as ListItem;

    switch (event.detail.change) {
      case 'enabled':
        this.itemsStore.add(item);
        break;
      case 'disabled':
        this.itemsStore.delete(item);
        break;
      default:
        break;
    }
  };

  /** @internal */
  protected isValidItem(item: Element): boolean {
    return item.matches(`${LISTITEM_TAGNAME}:not([disabled])`);
  }

  public override render() {
    return html`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default List;
