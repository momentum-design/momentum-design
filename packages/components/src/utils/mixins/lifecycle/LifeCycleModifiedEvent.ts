/**
 * Event fired when a modification occurs in the managed component.
 *
 * For example, when an item disabled, etc.
 *
 * @example
 * ```ts
 *  this.dispatchEvent(new LifeCycleModifiedEvent('disabled'));
 * ```
 */
export class LifeCycleModifiedEvent extends Event {
  /**
   * Describes the type of change that occurred.
   */
  public readonly change: string;

  constructor(change: string) {
    super('modified', { bubbles: true, composed: true });
    this.change = change;
  }
}

declare global {
  interface GlobalEventHandlersEventMap {
    modified: LifeCycleModifiedEvent;
  }
}
