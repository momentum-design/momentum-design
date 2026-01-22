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

  /**
   * ID of the trigger element associated with this overlay component
   */
  triggerID?: string;
}

/**
 * Predicate function used to determine whether to pop an item from the stack.
 * - Returns true to pop the item.
 * - Returns false to stop popping items.
 * - Returns 'skip' to skip the item without popping it.
 */
type PopPredicateFn = (item: StackedOverlayComponent, idx: number) => true | false | 'skip';

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

export const OVERLAY_BACKDROP_Z_INDEX_OFFSET = -2;
export const OVERLAY_TRIGGER_Z_INDEX_OFFSET = -1;

/**
 * DepthManager is a controller that manages a stack of elements to control their depth (z-index).
 *
 * It uses a global stack to keep track of the order of elements, allowing for proper layering of overlays.
 *
 * ## Use Case
 *
 * ### Pop single overlay
 *
 * The easiest one, usually the host removes itself from the stack when it is closed, with the `popHost` method.
 *
 * ### Pop until specific overlay
 *
 * When the chain of nested popover (e.g.: submenus) opened and the user closes other than the last one,
 * we have to close all overlays stacked above the specific one. In this case, the `popItem` or directly the `pupUntil` method is used.
 *
 * ### Closing "sibling" overlays
 *
 * In some cases, multiple overlays can be opened from the same trigger (e.g.: tooltip, context menu, etc.), we can not close
 * all overlays above the specific one, because they independently opened.
 *
 * `popUntil` method can handle this case by skipping the overlays which share the same trigger ID as the specified one.
 *
 * ### Manually removing overlays
 *
 * When the user switch from one sub-menu to another, we need to close all sub-menus from common parent menu.
 * DepthManager does not have built-in solution for this case. The host component need to make sure the submenu
 * hide before the new one is shown.
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

  public hostConnected() {}

  public hostDisconnected() {
    // Remove this instance from the global stack on disconnect
    this.remove([this.host]);
  }

  /**
   * Gets the total number of elements in the stack
   */
  public get length(): number {
    return elementStack.length;
  }

  /**
   * Adds host element to the stack
   *
   * @returns push was successful (true) or not (false)
   */
  public pushHost(): boolean {
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
  public popHost(): StackedOverlayComponent | undefined {
    return this.popItem(this.host);
  }

  /**
   * Pops all the items above the specified item and then pops the item itself
   *
   * @param item - The item to pop
   * @returns The item if it was in the stack, undefined otherwise
   */
  public popItem(item: StackedOverlayComponent): StackedOverlayComponent | undefined {
    if (this.has(item)) {
      const untilItemIdx = elementStack.indexOf(item) - 1;
      this.popUntil((it, idx) => {
        // This can handle the case when multiple overlays share the same trigger (id), e.g.: tooltip, etc.
        if (it !== item && it.triggerID === item.triggerID) return 'skip';
        return idx !== untilItemIdx;
      });
    }
    return undefined;
  }

  /**
   * Removes the last element from the stack
   *
   * @returns The last element in the stack
   */
  public pop(): StackedOverlayComponent | undefined {
    const popped = elementStack.pop();
    popped?.onComponentStackChanged?.('removed');
    return popped;
  }

  /**
   * Removes elements from the stack until the predicate function returns false
   *
   * Note: it will remove the
   *
   * @param predicateFn - The predicate function to test each element
   * @returns The removed elements
   */
  public popUntil(predicateFn: PopPredicateFn): StackedOverlayComponent[] {
    const poppedElements: StackedOverlayComponent[] = [];
    for (let i = elementStack.length - 1; i >= 0; i -= 1) {
      const item = elementStack[i];
      const result = predicateFn(item, i);

      if (result === false) break;
      if (result !== 'skip') poppedElements.push(item);
    }
    return this.remove(poppedElements);
  }

  /**
   * Returns the last element in the stack
   * without removing it
   *
   * @returns The last element in the stack
   */
  public peek(): StackedOverlayComponent | undefined {
    return elementStack.at(-1);
  }

  /**
   * Removes one or more elements from the stack without popping others.
   *
   * It notifies the elements on the stack which were removed and those which changed position.
   * Items removed in bach, notify moved items only once.
   *
   * @param elements - Popover instance
   * @returns undefined when the element was not found, the removed element otherwise
   */
  public remove(elements: StackedOverlayComponent[]): StackedOverlayComponent[] {
    const removedElements = elements.filter(el => elementStack.includes(el));
    const updateStackFrom = removedElements.reduce((idx, el) => Math.min(idx, elementStack.indexOf(el)), Infinity);

    // Remove elements from the stack
    removedElements.forEach(el => {
      elementStack.splice(elementStack.indexOf(el), 1);
      el?.onComponentStackChanged?.('removed');
    });

    // Notify elements about the move
    for (let i = updateStackFrom; i < elementStack.length; i += 1) {
      elementStack[i].onComponentStackChanged?.('moved');
    }
    return removedElements;
  }

  /**
   * Checks if the stack has a specific element
   *
   * @param element - Popover instance
   * @returns True if the stack has the element, false otherwise
   */
  public has(element: StackedOverlayComponent): boolean {
    return elementStack.includes(element);
  }

  /**
   * Gets the depth of the host element in the stack
   */
  public getHostDepth(): number {
    return this.getElementDepth(this.host);
  }

  /**
   * Gets the depth of the element in the stack
   * @param element - The element to get the depth of
   */
  public getElementDepth(element: StackedOverlayComponent): number {
    return elementStack.indexOf(element);
  }

  /**
   * Gets the z-index of the host element in the stack
   */
  public getHostZIndex(): number {
    return this.getItemZIndex(this.host);
  }

  /**
   * Gets the z-index of the element in the stack
   * @param element - The element to get the z-index of
   *
   * @returns The z-index of the element if found, otherwise returns -1
   */
  public getItemZIndex(element: StackedOverlayComponent): number {
    const depth = this.getElementDepth(element);
    return depth >= 0 ? BASE_Z_INDEX + depth * NUMBER_OF_Z_INDEX_LEVELS_PER_ELEMENT : -1;
  }

  /**
   * Checks if host is at the top of the stack
   *
   * @returns True if host is on top, false otherwise
   */
  public isHostOnTop(): boolean {
    return this.peek() === this.host;
  }

  /**
   * Clears the stack
   *
   * Pops all elements from the stack one-by-one.
   */
  public clear(): void {
    this.popUntil(() => true);
  }
}
