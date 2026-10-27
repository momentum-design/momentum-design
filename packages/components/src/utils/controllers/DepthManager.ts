import { ReactiveController } from 'lit';

import type { Component } from '../../models';
import { getDomActiveElement } from '../dom';

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

  /**
   * The name of the stack group this component belongs to.
   * Components with the same stack group name will be grouped together.
   */
  stackGroupName?: string;
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
const backdropHosts = new WeakMap<EventTarget, Element>();
const eventOwners = new WeakMap<Event, StackedOverlayComponent | undefined>();
const handledEvents = new WeakSet<Event>();

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

  /** Associates a separately rendered backdrop with its overlay's input context. @internal */
  public static registerBackdrop(backdrop: Element, host: Element): void {
    backdropHosts.set(backdrop, host);
  }

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
    if (!this.has(item)) {
      return undefined;
    }
    const items = elementStack.filter(e => (e.stackGroupName ?? '') === (item.stackGroupName ?? ''));
    const itemIdx = items.indexOf(item);
    const toRemove: StackedOverlayComponent[] = [];
    for (let i = items.length - 1; i >= itemIdx; i -= 1) {
      const it = items[i];
      // Skip siblings that share the same trigger (e.g.: tooltip + popover on same trigger)
      if (it === item || it.triggerID !== item.triggerID) {
        toRemove.push(it);
      }
    }
    this.remove(toRemove);
    return item;
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
   * @param predicateFn - The predicate function to test each element
   * @param stackGroupName - When provided, skip elements outside this group
   * @returns The removed elements
   */
  public popUntil(predicateFn: PopPredicateFn, stackGroupName?: string): StackedOverlayComponent[] {
    const poppedElements: StackedOverlayComponent[] = [];
    const items =
      stackGroupName === undefined
        ? elementStack
        : elementStack.filter(item => (item.stackGroupName ?? '') === stackGroupName);
    for (let i = items.length - 1; i >= 0; i -= 1) {
      const item = items[i];
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
   * Items removed in batch, notify moved items only once.
   *
   * @param elements - Popover instance
   * @returns undefined when the element was not found, the removed element otherwise
   */
  public remove(elements: StackedOverlayComponent[]): StackedOverlayComponent[] {
    const removedElements = elements.filter(el => elementStack.includes(el));
    const updateStackFrom = removedElements.reduce((idx, el) => Math.min(idx, elementStack.indexOf(el)), Infinity);

    // Remove all elements from the stack first, before any notifications,
    // to prevent re-entrant mutations from corrupting indices.
    removedElements.forEach(el => {
      elementStack.splice(elementStack.indexOf(el), 1);
    });

    removedElements.forEach(el => {
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
   * @returns The z-index of the element if found, otherwise returns BASE_Z_INDEX as a safe fallback.
   * This prevents a visual flash where the overlay renders behind the page content
   * on the first render cycle, before `pushHost()` runs in `updated()`.
   */
  public getItemZIndex(element: StackedOverlayComponent): number {
    const depth = this.getElementDepth(element);
    return depth >= 0 ? BASE_Z_INDEX + depth * NUMBER_OF_Z_INDEX_LEVELS_PER_ELEMENT : BASE_Z_INDEX;
  }

  /** Returns the last registered overlay in the specified group, defaulting to the host's group. */
  public getStackTopHost(
    stackGroupName: string = this.host.stackGroupName ?? '',
  ): StackedOverlayComponent | undefined {
    return elementStack.filter(element => (element.stackGroupName ?? '') === stackGroupName).at(-1);
  }

  private getContextHost(path: EventTarget[]): StackedOverlayComponent | undefined {
    const latestFirst = [...elementStack].reverse();
    for (const target of path) {
      const host = latestFirst.find(
        element =>
          element === target ||
          element === backdropHosts.get(target) ||
          (target instanceof Element &&
            !!element.triggerID &&
            target.id === element.triggerID &&
            target.getRootNode() === element.getRootNode()),
      );
      if (host) return host;
    }
    return undefined;
  }

  private getEventOwner(event: Event): StackedOverlayComponent | undefined {
    let context = this.getContextHost(event.composedPath());
    let focused: Node | null = getDomActiveElement();
    // Background input belongs to the focused group, or the global top when focus is outside all groups.
    while (!context && focused) {
      context = this.getContextHost([focused]);
      if (focused instanceof Element && focused.assignedSlot) {
        focused = focused.assignedSlot;
      } else if (focused instanceof ShadowRoot) {
        focused = focused.host;
      } else {
        focused = focused.parentNode;
      }
    }
    context ??= this.peek();
    return context ? this.getStackTopHost(context.stackGroupName ?? '') : undefined;
  }

  /** Checks the host's group top, restricting input to one event-stable context group. */
  public isHostOnTop(event?: Event): boolean {
    if (!event) return this.getStackTopHost() === this.host;
    if (!eventOwners.has(event)) eventOwners.set(event, this.getEventOwner(event));
    return eventOwners.get(event) === this.host;
  }

  /** Prevent duplicate dismissal from host and document listeners for the same input. */
  public claimHostEvent(event: Event): boolean {
    if (handledEvents.has(event) || !this.isHostOnTop(event)) return false;
    handledEvents.add(event);
    return true;
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
