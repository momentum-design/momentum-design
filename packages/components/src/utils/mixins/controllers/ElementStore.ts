import { ReactiveController } from 'lit';

import { LIFE_CYCLE_EVENTS } from '../lifecycle/lifecycle.contants';
import { isBefore } from '../../dom';
import type { Component } from '../../../models';

export type ElementStoreChangeTypes = 'added' | 'removed';

interface ElementStoreOptions<TItem> {
  /**
   * - A function to determine if an item is valid for caching.
   */
  validItemPredicate: (item: any) => boolean;

  /**
   * Change callback called when item added or removed from the store.
   *
   * @param type - type of the change
   * @param item - added/removed item
   * @param items - updated items list
   */
  onChangeCallback: (type: ElementStoreChangeTypes, item: TItem, items: TItem[]) => void;
}

const defaultIsValidFn = (item: any) => !!item;

/**
 * ElementStore is a controller that manages a collection of elements.
 *
 * If you would like to use `created` or `destroyed` events in the host and also access to the update `store.items`,
 * then please consider use of the `onChangeCallback` option, otherwise host can read only outdate `store.items`
 *
 * When host directly listen on `created` or `destroyed` events `this.store.items` will be not updated at that time.
 * The host register listeners in the constructor but the ElementStore does it later in the `hostConnected`.
 * Because, handlers called in the registration order, the host's handler called first and then the store's handler.
 *
 * @example
 * ```ts
 * // Add and remove item based on the disabled state
 * class Container extends Component {
 *    private this.store = new ElementStore<HTMLLIElement>(this, (item) => item.matches('li:not([disabled])'));
 *
 *    constructor() {
 *      super();
 *      this.addEventListener('modified', this.handleModifiedEvent);
 *    }
 *
 *    handleModifiedEvent(event: LifeCycleModifiedEvent) {
 *      if (event.details.change === 'enabled') {
 *         this.store.addItemToCacheAt(event.target);
 *      } else if (event.details.change === 'disabled') {
 *         this.store.removeItemFromCache(event.target)
 *      }
 *    }
 * }
 * ```
 */
export class ElementStore<TItem extends HTMLElement> implements ReactiveController {
  private host: Component;

  /**
   * Checks if the item is valid.
   * Invalid items will not be collected or processed.
   * This method can be overridden by subclasses to define custom validation logic.
   *
   * @param item - The item to validate.
   * @returns - True if the item is valid, false otherwise.
   */
  private isValidItem: ElementStoreOptions<TItem>['validItemPredicate'];

  private changeCallback?: ElementStoreOptions<TItem>['onChangeCallback'];

  /** Stored items */
  private cache: TItem[] = [];

  /** Access to stored items */
  public get items(): TItem[] {
    return this.cache;
  }

  /**
   * Creates an instance of ElementStore.
   * This controller manages a collection of elements, allowing for
   * adding and removing items based on lifecycle events.
   *
   * @param host - The host component that this controller is attached to.
   *
   * @param options
   */
  constructor(host: Component, options?: ElementStoreOptions<TItem>) {
    this.host = host;
    host.addController(this);
    this.isValidItem = options?.validItemPredicate || defaultIsValidFn;
    this.changeCallback = options?.onChangeCallback;
  }

  hostConnected() {
    this.host.addEventListener(LIFE_CYCLE_EVENTS.CREATED, this.itemCreationHandler);
    this.host.addEventListener(LIFE_CYCLE_EVENTS.DESTROYED, this.itemDestroyHandler);
  }

  hostDisconnected() {
    this.host.removeEventListener(LIFE_CYCLE_EVENTS.CREATED, this.itemCreationHandler);
    this.host.removeEventListener(LIFE_CYCLE_EVENTS.DESTROYED, this.itemDestroyHandler);
  }

  /**
   * Handles the item creation event.
   *
   * @param event - The event triggered when an item is created.
   */
  protected itemCreationHandler = (event: Event) => {
    this.addItem(event.target as TItem, undefined);
  };

  /**
   * Handles the item destroy event.
   *
   * @param event - The event triggered when an item is destroyed.
   */
  protected itemDestroyHandler = (event: Event) => {
    this.delete(event.target as TItem);
  };

  /**
   * Adds an item to the cache.
   * If the item is valid and not already in the cache, it will be added at the end of the cache.
   *
   * It uses the `compareDocumentPosition` method to determine the correct order of the items in the cache.
   * @see [compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition)
   *
   * @param newItem - The item to add to the cache.
   */
  public add(newItem: Element) {
    this.addItem(newItem, undefined);
  }

  /**
   * Adds an item to the cache.
   * If the item is valid and not already in the cache, it will be added to the specified index.
   *
   * @param newItem - The item to add to the cache.
   * @param index - The index at which to add the item.
   */
  public addAt(newItem: Element, index: number) {
    this.addItem(newItem, index);
  }

  /**
   * Adds an item to the cache at the specified index.
   * When the index
   *  is `undefined`, the item is added automatically keeping the DOM order.
   *  is `-1`, the item is added to the end of the cache.
   *  is `>= 0`, the item is added at that index.
   *  otherwise, do nothing.
   *
   * @param item - The item to add to the cache.
   * @param index - The index at which to add the item. If `undefined`, the item is added automatically.
   */
  private addItem(item: Element, index: number | undefined = undefined): void {
    const newItem = item as TItem;

    if (this.isValidItem(newItem) && !this.cache.includes(newItem)) {
      const idx = index === undefined ? this.cache.findIndex(e => isBefore(newItem, e)) : index;

      if (idx === -1) {
        this.cache.push(newItem);
      } else if (idx >= 0) {
        this.cache.splice(idx, 0, newItem);
      }

      if (idx >= -1) {
        this.changeCallback?.('added', newItem, this.items);
      }
    }
  }

  /**
   * Removes an item from the cache.
   *
   * @param item - The item to remove from the cache.
   */
  public delete(item: Element): void {
    const idx = this.cache.indexOf(item as TItem);
    if (idx !== -1) {
      this.cache.splice(idx, 1);
      this.changeCallback?.('removed', item as TItem, this.items);
    }
  }

  /**
   * Sets the item cache to the provided items.
   * If no items are provided, it clears the cache.
   *
   * @param items - The items to set in the cache.
   */
  protected reset(items: TItem[]): void {
    this.cache.length = 0;
    this.cache.push(...(items || []));
  }
}
