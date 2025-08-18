/* eslint-disable max-classes-per-file,@typescript-eslint/no-unused-vars */
import { PropertyValues } from 'lit';
import type { LitElement } from 'lit';

import type { Constructor } from './index.types';

export declare class ItemsLifeCycleManagerMixinInterface<TItem> {
  /**
   * Array of cached items managed by this mixin.
   */
  protected get items(): TItem[];

  /**
   * Update the internal cache of items.
   * This method should be called whenever the items change, such as when items are added, removed etc.
   *
   * @param items - Array of items to set in the cache.
   */
  protected setItemCache(items: TItem[]): void;

  /**
   * Collects items from the DOM and updates the internal cache.
   * This method should be implemented by subclasses to define how items are collected.
   */
  protected collectItems(): void;

  /**
   * Called when an item is added to the collection.
   *
   * @param item - The item that was added.
   */
  protected itemAdded(item: TItem): void;

  /**
   * Called when an item is removed from the collection.
   *
   * @param item - The item that was removed.
   */
  protected itemRemoved(item: TItem): void;

  /**
   * Checks if the item is valid.
   * Invalid items will not be collected or processed.
   * This method can be overridden by subclasses to define custom validation logic.
   *
   * @param item - The item to validate.
   * @returns - True if the item is valid, false otherwise.
   */
  protected isValidItem(item: HTMLElement): void;
}

/**
 * Mixin to manage the lifecycle of items within a component.
 *
 * It collects items from the DOM, caches them, and provides methods to handle item addition and removal.
 * Also, provides hooks to take actions when items are added or removed.
 *
 * @param superClass
 * @constructor
 */
export const ItemsLifeCycleManagerMixin = <TItem extends HTMLElement, T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
    /**
     * Array of cached items managed by this mixin.
     * This array is used to store items that are collected from the DOM.
     */
    private itemsCache: TItem[] = [];

    /**
     * Array of cached items managed by this mixin.
     */
    protected get items(): TItem[] {
      return this.itemsCache;
    }

    constructor(...rest: any[]) {
      super(...rest);

      this.addEventListener('created', this.handleItemCreation);
    }

    /**
     * Update the internal cache of items.
     * This method should be called whenever the items change, such as when items are added, removed etc.
     *
     * @param items - Array of items to set in the cache.
     */
    protected setItemCache = (items: TItem[]): void => {
      this.itemsCache = items;
    };

    override async firstUpdated(changedProperties: PropertyValues) {
      await super.firstUpdated(changedProperties);

      this.collectItems();
    }

    /**
     * Collects items from the DOM and updates the internal cache.
     * This method should be implemented by subclasses to define how items are collected.
     *
     * Use `setItemCache` to update the internal cache of items.
     */
    protected collectItems() {
      throw new Error('Method not implemented');
    }

    /**
     * Called when an item is added to the collection.
     *
     * @param _item - The item that was added.
     */
    protected itemAdded(_item: TItem): void {}

    /**
     * Called when an item is removed from the collection.
     *
     * @param _item - The item that was removed.
     */
    protected itemRemoved(_item: TItem): void {}

    /**
     * Checks if the item is valid.
     * Invalid items will not be collected or processed.
     * This method can be overridden by subclasses to define custom validation logic.
     *
     * @param item - The item to validate.
     * @returns - True if the item is valid, false otherwise.
     */
    protected isValidItem(item: HTMLElement): boolean {
      return !!item;
    }

    /**
     * Handles the creation of an item.
     * This method is called when an item is created and added to the DOM.
     * It checks if the item is valid, collects items, and sets up event listeners for item changes.
     *
     * @param event - The event triggered when an item is created.
     */
    private handleItemCreation = (event: Event): void => {
      const item = event.target as HTMLElement;

      if (this.isValidItem(item)) {
        this.collectItems();
        // Parent menu popover should not listen on nested menu items
        event.stopImmediatePropagation();
        // `destroyed` triggered in the `disconnectedCallback` of the item which executed when the item is removed from the DOM
        // because of that the event does not bubble up to menupopover, and we need to capture the `destroyed` event on the item itself
        item.addEventListener('destroyed', this.handleItemChangeEvent);
        // `disabled` could bubble up, but it is more consistent to handle it the same way as `destroyed`
        item.addEventListener('disabled', this.handleItemChangeEvent);
        this.itemAdded(item as TItem);
      }
    };

    /**
     * Handles item change events such as `destroyed` or `disabled`.
     * This method is called when an item is removed or disabled.
     * It collects items and removes the event listeners from the item.
     *
     * @param event - The event triggered when an item is changed.
     */
    private handleItemChangeEvent = (event: Event) => {
      event.stopImmediatePropagation();

      if (event.target && event.type === 'destroyed') {
        this.collectItems();
        event.target.removeEventListener('destroyed', this.handleItemChangeEvent);
        event.target.removeEventListener('disabled', this.handleItemChangeEvent);
        this.itemRemoved(event.target as TItem);
      }

      this.collectItems();
    };
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<ItemsLifeCycleManagerMixinInterface<TItem>> & T;
};
