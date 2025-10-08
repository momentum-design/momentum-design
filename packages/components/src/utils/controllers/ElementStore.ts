import { ReactiveController } from 'lit';

import { LIFE_CYCLE_EVENTS } from '../mixins/lifecycle/lifecycle.contants';
import { isBefore } from '../dom';
import type { Component } from '../../models';

export type ElementStoreChangeTypes = 'added' | 'removed';

interface ElementStoreOptions<TItem extends HTMLElement> {
  /**
   * Checks if the item is valid.
   * Invalid items will not be collected or processed.
   * This method can be overridden by subclasses to define custom validation logic.
   *
   * @param item - The item to validate.
   * @returns - True if the item is valid, false otherwise.
   */
  isValidItem: (item: any) => boolean;
  /**
   * Callback function that is called before the store is updated.
   *
   * Not called when the store is reset.
   *
   * @param item - The item that is being added or removed.
   * @param changeType - The type of change ('added' or 'removed').
   * @param index - Index at which the item is added or removed.
   * @param items - Items in the store before the change.
   */
  onStoreUpdate?: (item: TItem, changeType: ElementStoreChangeTypes, index: number, items: TItem[]) => void;
}

const defaultIsValidFn = (item: any) => !!item;

/**
 * ElementStore is a controller that manages a collection of elements.
 *
 * @example
 * ```ts
 * // Add and remove item based on the disabled state
 * class Container extends Component {
 *    private this.store = new ElementStore<HTMLLIElement>(this, {
 *       validItemPredicate: (item) => item.matches('li:not([disabled])')
 *    });
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

  /** Checks if the item is valid. */
  private readonly isValidItem: ElementStoreOptions<TItem>['isValidItem'];

  /** Callback function that is called before the store is updated. */
  private readonly onStoreUpdate: ElementStoreOptions<TItem>['onStoreUpdate'];

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
   * A component can have multiple ElementStore controllers
   *
   * All ElementStore must be created before any `addEventListener` in the constructor, see the example.
   *
   * Note: This controller relies on `created` and `destroyed` events.
   * For the best result, dispatch these events on the child components or use the `LifeCycleMixin` mixin.
   * And make sure the `destroyed` event properly propagated to the host, `CaptureDestroyEventForChildElement` mixin
   * can help with that.
   *
   * @example
   * ```ts
   * class Container extends CaptureDestroyEventForChildElement(Component) {
   *  private itemsStore = new ElementStore<Item>(this, {
   *     isValidItem: this.isValidItem,
   *  });
   *
   *  constructor() {
   *     super()
   *     this.addEventListener('modified', this.handleModifiedEvent);
   *  }
   *
   *  private handleModifiedEvent(event: LifeCycleModifiedEvent) {
   *     const item = event.target as Item;
   *
   *     switch (event.detail.change) {
   *       case 'enabled':  return this.itemsStore.add(item);
   *       case 'disabled': return this.itemsStore.delete(item);
   *     }
   *  }
   *
   *  private isValidItem(item: Element): boolean {
   *     return item.matches(`${ITEM_TAGNAME}:not([disabled])`);
   *  }
   * ```
   *
   * @param host - The host component that this controller is attached to.
   * @param options - Element store options
   */
  constructor(host: Component, options?: ElementStoreOptions<TItem>) {
    this.host = host;
    host.addController(this);
    this.isValidItem = options?.isValidItem || defaultIsValidFn;
    this.onStoreUpdate = options?.onStoreUpdate;
  }

  hostConnected() {
    this.host.addEventListener(LIFE_CYCLE_EVENTS.CREATED, this.itemCreationHandler);
    this.host.addEventListener(LIFE_CYCLE_EVENTS.DESTROYED, this.itemDestroyHandler);
  }

  hostDisconnected() {
    this.host.removeEventListener(LIFE_CYCLE_EVENTS.CREATED, this.itemCreationHandler);
    this.host.removeEventListener(LIFE_CYCLE_EVENTS.DESTROYED, this.itemDestroyHandler);
    // This is a shortcut, because after the removal of the parent the children will emit the destroyed event,
    // but it is less performant also we want to skip the onStoreUpdate calls after disconnection
    // re-connection of the element will fill the cache again
    this.reset();
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

      if (this.onStoreUpdate) {
        this.onStoreUpdate?.(newItem, 'added', idx === -1 ? this.cache.length : idx, this.cache.slice());
      }

      if (idx === -1) {
        this.cache.push(newItem);
      } else if (idx >= 0) {
        this.cache.splice(idx, 0, newItem);
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
      if (this.onStoreUpdate) {
        this.onStoreUpdate?.(item as TItem, 'removed', idx, this.cache.slice());
      }
      this.cache.splice(idx, 1);
    }
  }

  /**
   * Sets the item cache to the provided items.
   * If no items are provided, it clears the cache.
   *
   * @param items - The items to set in the cache.
   */
  protected reset(items?: TItem[]): void {
    this.cache.length = 0;
    if (items) this.cache.push(...items);
  }
}
