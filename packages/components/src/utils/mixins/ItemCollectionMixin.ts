import type { LitElement } from 'lit';

import { isBefore } from '../dom';

import type { Constructor } from './index.types';
import { LIFE_CYCLE_EVENTS } from './lifecycle/lifecycle.contants';

export declare class ItemCollectionMixinInterface<TItem> {
  /**
   * List of items (cached)
   */
  public get items(): TItem[];

  /**
   * Checks if the item is valid.
   * Invalid items will not be collected or processed.
   * This method can be overridden by subclasses to define custom validation logic.
   *
   * @param item - The item to validate.
   * @returns - True if the item is valid, false otherwise.
   */
  protected isValidItem(item: Element): boolean;

  /**
   * Adds an item to the cache at the specified index.
   * When the index
   *  is `undefined`, the item is added automatically keeping the DOM order.
   *  is `-1`, the item is added to the end of the cache.
   *  is `>= 0`, the item is added at that index.
   *  otherwise, do nothing.
   *
   * @param item - The item to add to the cache.
   * @param index - The index at which to add the item. If -1, adds to the end.
   */
  protected addItemToCacheAt(item: Element, index?: number): void;

  /**
   * Removes an item from the cache.
   *
   * @param item - The item to remove from the cache.
   */
  protected removeItemFromCache(item: Element): void;

  /**
   * Sets the item cache to the provided items.
   * If no items are provided, it clears the cache.
   *
   * @param items - The items to set in the cache.
   */
  protected setItemCache(items?: TItem[]): void;
}

/**
 * This mixin collects and cache items based on the `created` and `destroyed` lifecycle events.
 * Also provides methods to manage the item cache.
 *
 * @example
 * ```ts
 * // Add and remove item based on the disabled state
 * class ListBox extends ItemCollectionMixin<Option, typeof Component>(Component) {
 *    constructor() {
 *      super();
 *      this.addEventListener('modified', this.handleModifiedEvent);
 *    }
 *
 *    handleModifiedEvent(event: LifeCycleModifiedEvent) {
 *      if (event.change === 'enabled') {
 *         this.addItemToCacheAt(event.target);
 *      } else if (event.change === 'disabled') {
 *         this.removeItemFromCache(event.target)
 *      }
 *    }
 * }
 * ```
 *
 * @param superClass - The class to extend with the mixin.
 */
export const ItemCollectionMixin = <TItem extends HTMLElement, T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    private itemCache: TItem[] = [];

    /** @see ItemCollectionMixinInterface.items */
    protected get items(): TItem[] {
      return this.itemCache;
    }

    constructor(...rest: any[]) {
      super(...rest);

      this.addEventListener(LIFE_CYCLE_EVENTS.CREATED, this.itemCreationHandler);
      this.addEventListener(LIFE_CYCLE_EVENTS.DESTROYED, this.itemDestroyHandler);
    }

    /**
     * Handles the item creation event.
     *
     * @param event - The event triggered when an item is created.
     */
    protected itemCreationHandler(event: Event) {
      const newItem = event.target as TItem;
      this.addItemToCacheAt(newItem);
    }

    /**
     * Handles the item destroy event.
     *
     * @param event - The event triggered when an item is destroyed.
     */
    protected itemDestroyHandler(event: Event) {
      const removedItem = event.target as TItem;

      this.removeItemFromCache(removedItem);
    }

    /** @see ItemCollectionMixinInterface.isValidItem */
    protected isValidItem(item: Element): boolean {
      return !!item;
    }

    /** @see ItemCollectionMixinInterface.addItemToCacheAt */
    protected addItemToCacheAt(newItem: Element, index?: number) {
      if (this.isValidItem(newItem) && !this.itemCache.includes(newItem as TItem)) {
        const idx = index === undefined ? this.itemCache.findIndex(e => isBefore(newItem, e)) : index;

        if (idx === -1) {
          this.itemCache.push(newItem as TItem);
        } else if (idx >= 0) {
          this.itemCache.splice(idx, 0, newItem as TItem);
        }
      }
    }

    /** @see ItemCollectionMixinInterface.removeItemFromCache */
    protected removeItemFromCache(item: Element): void {
      const idx = this.itemCache.indexOf(item as TItem);
      if (idx !== -1) {
        this.itemCache.splice(idx, 1);
      }
    }

    /** @see ItemCollectionMixinInterface.setItemCache */
    protected setItemCache(items: TItem[]): void {
      this.itemCache.length = 0;
      this.itemCache.push(...(items || []));
    }
  }

  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<ItemCollectionMixinInterface<TItem>> & T;
};
