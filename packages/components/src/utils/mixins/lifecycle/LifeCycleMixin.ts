/* eslint-disable max-classes-per-file,@typescript-eslint/no-unused-vars */
import type { LitElement } from 'lit';

import type { Constructor } from '../index.types';

import { LifeCycleModifiedEvent } from './LifeCycleModifiedEvent';

export declare class LifeCycleMixinInterface {
  /**
   * Dispatches a 'LifeCycleModifiedEvent' event for the passed changed type.
   *
   * @param change - The type of change that occurred, e.g., 'disabled'.
   */
  protected dispatchModifiedEvent(change: string): void;
}

/**
 * Mixin to create Lifecycle Manager compatible events for the component.
 *
 * Emits 'created' and 'destroyed' events when the component is connected or disconnected from the DOM.
 * Also provides a method to dispatch 'LifeCycleModifiedEvent' for changes in the component's state.
 *
 * @example
 * ```ts
 *  // Add disabled state change event
 *  class ItemComponent extends LifeCycleMixin(Component) {
 *    public override update(changedProperties: PropertyValues): void {
 *     super.update(changedProperties);
 *
 *     if (changedProperties.has('disabled')) {
 *       this.dispatchModifiedEvent(this.disabled ? 'disabled' : 'enabled');
 *     }
 *   }
 *  }
 * ```
 */
export const LifeCycleMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    override connectedCallback(): void {
      super.connectedCallback();
      this.dispatchEvent(new Event('created', { bubbles: true, composed: true }));
    }

    override disconnectedCallback(): void {
      super.disconnectedCallback();
      this.dispatchEvent(new Event('destroyed', { bubbles: true, composed: true }));
    }

    /** @see LifeCycleMixinInterface.dispatchModifiedEvent */
    protected dispatchModifiedEvent(change: string): void {
      this.dispatchEvent(new LifeCycleModifiedEvent(change));
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<LifeCycleMixinInterface> & T;
};
