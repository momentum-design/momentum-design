import { ReactiveController } from 'lit';

import type { Component } from '../../models';

/**
 * Types of changes that can occur in the stack
 *
 * - 'added': An element was added to the stack, e.g.: pushed
 * - 'removed': An element was removed from the stack, e.g.: popped or removed
 * - 'moved': An element's position in the stack changed e.g.: another element above it was removed
 */
export type StackChange = 'added' | 'removed' | 'moved';

/**
 * A component that can be managed by the DepthManager stack.
 *
 * These elements can receive notifications when their position in the stack changes
 * if they implement the `onComponentStackChanged` callback.
 */
export interface StackedOverlayComponent extends Component {
  /**
   * Callback invoked when the component's position in the stack changes.
   *
   * @param change - The type of change that occurred in the stack.
   */
  onComponentStackChanged?: (change: StackChange) => void;
}

/**
 * Global stack of elements managed by DepthManager
 * @internal
 */
const elementStack: StackedOverlayComponent[] = [];

/**
 * Initial z-index for the first element in the stack
 */
const BASE_Z_INDEX = 1000;

/**
 * Number of z-index levels per element in the stack
 * @internal
 * - level -2: level of backdrop (if any)
 * - level -1: level of trigger component (if any)
 * - level  0: z-index of the overlay element (e.g. popover, dialog, etc.)
 */
const NUMBER_OF_Z_INDEX_LEVELS_PER_ELEMENT = 3;

/**
 * DepthManager is a controller that manages a stack of elements to control their depth (z-index).
 *
 * It uses a global stack to keep track of the order of elements, allowing for proper layering of overlays.
 *
 * @example
 * ```ts
 * // Add and remove item based on the disabled state
 * class Container extends Component {
 *    private this.depthManager = new DepthManager<>(this);
 *
 *    constructor() {
 *      super();
 *      this.addEventListener('modified', this.handleModifiedEvent);
 *    }
 *
 *    openOverlay() {
 *       this.depthManager.pushHost()
 *    }
 *
 *    closeOverlay() {
 *      this.depthManager.popHost()
 *    }
 *
 *    onComponentStackChanged (change: StackChange) {
 *       switch (change) {
 *          case 'added':
 *             return;
 *          case 'removed':
 *             return this.closeOverlay()
 *          case 'moved':
 *             return this.requestUpdate('zIndex');
 *       }
 *    }
 * }
 * ```
 */
export class DepthManager implements ReactiveController {
  private readonly host: StackedOverlayComponent;

  /**
   * Creates an instance of DepthManager.
   */
  constructor(host: StackedOverlayComponent) {
    this.host = host;
    host.addController(this);
  }

  hostConnected() {}

  hostDisconnected() {
    // Remove this instance from the global stack on disconnect
    this.remove(this.host);
  }

  /**
   * Gets the total number of elements in the stack
   */
  get length(): number {
    return elementStack.length;
  }

  /**
   * Adds host element to the stack
   *
   * @returns push was successful (true) or not (false)
   */
  pushHost(): boolean {
    if (!this.has(this.host)) {
      elementStack.push(this.host);
      this.host.onComponentStackChanged?.('added');
      return true;
    }
    return false;
  }

  /**
   * Pops all the items above the host and then pops the host itself
   *
   * @returns The host if it was in the stack, undefined otherwise
   */
  popHost(): StackedOverlayComponent | undefined {
    return this.popItem(this.host);
  }

  /**
   * Pops all the items above the specified item and then pops the item itself
   *
   * @param item - The item to pop
   * @returns The item if it was in the stack, undefined otherwise
   */
  popItem(item: StackedOverlayComponent): StackedOverlayComponent | undefined {
    if (this.has(item)) {
      if (item !== this.peek()) {
        this.popUntil(i => i !== item);
      }
      return this.pop();
    }
    return undefined;
  }

  /**
   * Removes the last element from the stack
   *
   * @returns The last element in the stack
   */
  pop(): StackedOverlayComponent | undefined {
    const popped = elementStack.pop();
    popped?.onComponentStackChanged?.('removed');
    return popped;
  }

  /**
   * Removes elements from the stack until the predicate function returns false
   *
   * @param predicateFn - The predicate function to test each element
   * @returns The removed elements
   */
  popUntil(predicateFn: (item: StackedOverlayComponent) => boolean): StackedOverlayComponent[] {
    const poppedElements: StackedOverlayComponent[] = [];
    for (let i = elementStack.length - 1; i >= 0; i -= 1) {
      const item = elementStack[i];

      if (!predicateFn(item)) break;

      poppedElements.push(item);
      this.pop();
    }
    return poppedElements;
  }

  /**
   * Returns the last element in the stack
   * without removing it
   *
   * @returns The last element in the stack
   */
  peek(): StackedOverlayComponent | undefined {
    return elementStack.at(-1);
  }

  /**
   * Removes an element from the stack without removing other elements
   *
   * Also, notifies other elements above the removed one about their new position.
   *
   * @param element - Popover instance
   * @returns True if the element was removed, false otherwise
   */
  remove(element: StackedOverlayComponent): boolean {
    const index = elementStack.indexOf(element);
    if (index !== -1) {
      const popped = elementStack[index];
      elementStack.splice(index, 1);
      popped?.onComponentStackChanged?.('removed');

      // Notify elements about the move
      for (let i = index; i < elementStack.length; i += 1) {
        elementStack[i].onComponentStackChanged?.('moved');
      }
      return true;
    }
    return false;
  }

  /**
   * Checks if the stack has a specific element
   *
   * @param element - Popover instance
   * @returns True if the stack has the element, false otherwise
   */
  has(element: StackedOverlayComponent): boolean {
    return elementStack.includes(element);
  }

  /**
   * Gets the depth of the host element in the stack
   */
  getHostDepth(): number {
    return this.getElementDepth(this.host);
  }

  /**
   * Gets the depth of the element in the stack
   * @param element - The element to get the depth of
   */
  getElementDepth(element: StackedOverlayComponent): number {
    return elementStack.indexOf(element);
  }

  /**
   * Gets the z-index of the host element in the stack
   */
  getHostZIndex(): number {
    return this.getItemZIndex(this.host);
  }

  /**
   * Gets the z-index of the element in the stack
   * @param element - The element to get the z-index of
   *
   * @returns The z-index of the element if found, otherwise returns -1
   */
  getItemZIndex(element: StackedOverlayComponent): number {
    const depth = this.getElementDepth(element);
    return depth >= 0 ? BASE_Z_INDEX + depth * NUMBER_OF_Z_INDEX_LEVELS_PER_ELEMENT : -1;
  }

  /**
   * Checks if host is at the top of the stack
   *
   * @returns True if host is on top, false otherwise
   */
  isHostOnTop(): boolean {
    return this.peek() === this.host;
  }

  /**
   * Clears the stack
   *
   * Pops all elements from the stack one-by-one.
   */
  clear(): void {
    this.popUntil(() => true);
  }
}
