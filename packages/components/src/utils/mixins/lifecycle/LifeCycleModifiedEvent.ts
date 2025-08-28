import { TypedCustomEvent } from '../../types';

/**
 * Event fired when a modification occurs in the managed component.
 *
 * For example, when an item disabled, etc.
 *
 * @example
 * ```ts
 *  this.dispatchEvent(new CustomEvent('modified', {change: 'disabled'}));
 * ```
 */
export type LifeCycleModifiedEvent = TypedCustomEvent<Element, { change: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    modified: LifeCycleModifiedEvent;
  }
}
