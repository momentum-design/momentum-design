/* eslint-disable max-classes-per-file,@typescript-eslint/no-unused-vars */
import type { LitElement } from 'lit';

import type { Constructor } from '../index.types';

import { LIFE_CYCLE_EVENTS } from './lifecycle.contants';

export declare class ItemsLifeCycleManagerMixinInterface {}

/**
 * Mixin to re-dispatch elements destroy event.
 *
 *
 * It is necessary because `destroyed` event emitted in the `disconnectedCallback` of the item
 * it executes after the item disconnected from the DOM tree. The event can not bubble up to the
 * parent component, but we still can listen to it when we do it directly on it.
 *
 * Use {@link LifeCycleMixin} on the child component to emit the `created` and `destroyed` events
 *
 * @example
 * ```ts
 * // Add created and destroyed event listeners
 * class MyComponent extends DestroyItemMixin(Component) {
 *    constructor() {
 *       super();
 *       this.addEventListener('created' this.handleItemCreation);
 *       this.addEventListener('destroyed', this.handleItemRemovedEvent);
 *    }
 *    // ...
 * }
 * ```
 *
 * @param superClass - The class to extend with the mixin.
 */
export const CaptureDestroyEventForChildElement = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    constructor(...rest: any[]) {
      super(...rest);

      this.addEventListener(LIFE_CYCLE_EVENTS.CREATED, this.handleItemCreation);
    }

    /**
     * Register destroy event listener on the item when it is created.
     *
     * @param event - The event triggered when an item is created.
     */
    private handleItemCreation = (event: Event): void => {
      const item = event.target as HTMLElement;

      if (item) {
        item.addEventListener(LIFE_CYCLE_EVENTS.DESTROYED, this.handleItemRemovedEvent);
      }
    };

    /**
     * Handles the item removed event to clean up listeners and re-dispatch the destroy event.
     *
     * @param event - The event triggered when an item is changed.
     */
    private handleItemRemovedEvent = (event: Event) => {
      event.stopImmediatePropagation();

      if (event.target && event.type === LIFE_CYCLE_EVENTS.DESTROYED) {
        event.target.removeEventListener(LIFE_CYCLE_EVENTS.DESTROYED, this.handleItemRemovedEvent);
        // Re-dispatch the destroy event to allow parent components to handle it.
        // We need to create a new event instance, otherwise we will get an error:
        // Uncaught InvalidStateError: Failed to execute 'dispatchEvent' on 'EventTarget': The event is already being dispatched.
        const evt = new Event(event.type, { bubbles: event.bubbles, composed: event.composed });
        // Also, we need to make sure `dispatchEvent` will not change the target of the event.
        Object.defineProperty(evt, 'target', { set() {}, get: () => event.target });
        this.dispatchEvent(evt);
      }
    };
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<ItemsLifeCycleManagerMixinInterface> & T;
};
