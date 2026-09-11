/* eslint-disable max-classes-per-file,@typescript-eslint/no-unused-vars */
import type { LitElement } from 'lit';

import type { Constructor } from '../index.types';

import { LIFE_CYCLE_EVENTS } from './lifecycle.contants';

export declare class ModifiedEventMixinInterface {
  /**
   * Dispatches a lifecycle `modified` event for the passed change type.
   *
   * @param change - The type of change that occurred.
   */
  protected dispatchModifiedEvent(change: string): void;
}

/** Adds support for dispatching lifecycle `modified` events without emitting connection events. */
export const ModifiedEventMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /** @see ModifiedEventMixinInterface.dispatchModifiedEvent */
    protected dispatchModifiedEvent(change: string): void {
      this.dispatchEvent(
        new CustomEvent(LIFE_CYCLE_EVENTS.MODIFIED, {
          detail: { change, lifecycle: true },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  return InnerMixinClass as unknown as Constructor<ModifiedEventMixinInterface> & T;
};
