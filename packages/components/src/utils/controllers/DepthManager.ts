import { ReactiveController } from 'lit';

import type { Component } from '../../models';
import { composedContains, isBefore } from '../dom';

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
 * When a nested overlay (e.g. a submenu) closes, `popItem` closes its same-group
 * DOM/trigger descendants as well. Visual order and registration history do not imply nesting.
 *
 * ### Closing "sibling" overlays
 *
 * In some cases, multiple overlays can be opened from the same trigger (e.g.: tooltip, context menu, etc.), we can not close
 * all overlays above the specific one, because they independently opened.
 *
 * `popItem` skips descendants which share the same non-empty trigger ID as the specified one.
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
  private static controllers = new WeakMap<StackedOverlayComponent, DepthManager>();

  private readonly host: StackedOverlayComponent;

  private explicitZIndex?: number;

  /** Managed layers in ascending visual order; registration remains automatic-depth bookkeeping. */
  public static getOrderedHosts(): StackedOverlayComponent[] {
    const paths = new Map(
      elementStack.map(host => {
        const ancestors = elementStack.filter(parent => parent !== host && composedContains(parent, host));
        ancestors.sort((a, b) => {
          if (a === b) return 0;
          return composedContains(a, b) ? -1 : 1;
        });
        return [host, [...ancestors, host]];
      }),
    );
    return [...elementStack].sort((a, b) => {
      const aPath = paths.get(a)!;
      const bPath = paths.get(b)!;
      // A child's local z-index cannot escape its ancestor's stacking context.
      // Compare the first different branch, or place a descendant after its ancestor.
      for (let index = 0; index < Math.min(aPath.length, bPath.length); index += 1) {
        const first = aPath[index];
        const second = bPath[index];
        if (first !== second) {
          const difference =
            DepthManager.controllers.get(first)!.getHostZIndex() -
            DepthManager.controllers.get(second)!.getHostZIndex();
          if (difference) return difference;
          if (first.getRootNode() === second.getRootNode()) return isBefore(first, second) ? -1 : 1;
          return elementStack.indexOf(first) - elementStack.indexOf(second);
        }
      }
      return aPath.length - bPath.length;
    });
  }

  /** Finds the owning managed layer, including for standalone traps inside an overlay. */
  public static getContainingHost(element: Element): StackedOverlayComponent | undefined {
    let current: Element | null = element;
    while (current) {
      const controller = DepthManager.controllers.get(current as StackedOverlayComponent);
      if (controller && 'zIndex' in current) return controller.host;
      const parent: Node | null = current.assignedSlot || current.parentNode;
      current = parent instanceof ShadowRoot ? parent.host : (parent as Element | null);
      if (!(current instanceof Element)) return undefined;
    }
    return undefined;
  }

  private notifyMoved() {
    [...elementStack].forEach(element => element.onComponentStackChanged?.('moved'));
  }

  /**
   * Creates an instance of DepthManager.
   */
  constructor(host: StackedOverlayComponent) {
    this.host = host;
    DepthManager.controllers.set(host, this);
    host.addController(this);
  }

  public hostConnected() {}

  public hostDisconnected() {
    // Remove this instance from the global stack on disconnect
    this.popHost();
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
      this.notifyMoved();
      return true;
    }
    return false;
  }

  /**
   * Removes the host and its same-group nested descendants
   *
   * @returns The host if it was in the stack, undefined otherwise
   */
  public popHost(): StackedOverlayComponent | undefined {
    return this.popItem(this.host);
  }

  /**
   * Removes an overlay and its same-group DOM/trigger descendants
   *
   * @param item - The item to pop
   * @returns The item if it was in the stack, undefined otherwise
   */
  public popItem(item: StackedOverlayComponent): StackedOverlayComponent | undefined {
    if (!this.has(item)) {
      return undefined;
    }
    const toRemove = new Set([item]);
    // Follow existing trigger/DOM relationships, not opening time or visual rank.
    // Repeat to include descendants whose popovers have been portaled elsewhere.
    let previousSize: number;
    do {
      previousSize = toRemove.size;
      elementStack.forEach(candidate => {
        if (toRemove.has(candidate) || candidate.stackGroupName !== item.stackGroupName) return;
        const trigger = candidate.triggerID
          ? (candidate.getRootNode() as Document | ShadowRoot | Element).querySelector(
              `#${CSS.escape(candidate.triggerID)}`,
            )
          : null;
        const nested = [...toRemove].some(parent => {
          if (parent.triggerID && parent.triggerID === candidate.triggerID) return false;
          return composedContains(parent, candidate) || (trigger && composedContains(parent, trigger));
        });
        if (nested) toRemove.add(candidate);
      });
    } while (previousSize !== toRemove.size);
    this.remove(
      DepthManager.getOrderedHosts()
        .reverse()
        .filter(candidate => toRemove.has(candidate)),
    );
    return item;
  }

  /**
   * Removes the highest resolved layer from the stack.
   *
   * @returns The highest resolved layer
   */
  public pop(): StackedOverlayComponent | undefined {
    const popped = this.peek();
    if (popped) this.remove([popped]);
    return popped;
  }

  /**
   * Removes elements from the stack until the predicate function returns false
   *
   * @param predicateFn - The predicate function to test each element
   * @returns The removed elements
   */
  public popUntil(predicateFn: PopPredicateFn): StackedOverlayComponent[] {
    const poppedElements: StackedOverlayComponent[] = [];
    const ordered = DepthManager.getOrderedHosts();
    for (let i = ordered.length - 1; i >= 0; i -= 1) {
      const item = ordered[i];
      const result = predicateFn(item, i);

      if (result === false) break;
      if (result !== 'skip') poppedElements.push(item);
    }
    return this.remove(poppedElements);
  }

  /**
   * Returns the highest resolved layer without removing it.
   *
   * @returns The highest resolved layer
   */
  public peek(): StackedOverlayComponent | undefined {
    return DepthManager.getOrderedHosts().at(-1);
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

    // Remove all elements from the stack first, before any notifications,
    // to prevent re-entrant mutations from corrupting indices.
    removedElements.forEach(el => {
      elementStack.splice(elementStack.indexOf(el), 1);
    });

    removedElements.forEach(el => {
      el?.onComponentStackChanged?.('removed');
    });

    if (removedElements.length) this.notifyMoved();
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
   * Gets the registration depth of the host (used only for automatic z-index).
   */
  public getHostDepth(): number {
    return this.getElementDepth(this.host);
  }

  /**
   * Gets the registration depth of the element (not its resolved visual rank).
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
    const explicit = DepthManager.controllers.get(element)?.explicitZIndex;
    if (explicit !== undefined) return explicit;
    const depth = this.getElementDepth(element);
    return depth >= 0 ? BASE_Z_INDEX + depth * NUMBER_OF_Z_INDEX_LEVELS_PER_ELEMENT : BASE_Z_INDEX;
  }

  /**
   * Checks if host is at the top of the stack
   *
   * @returns True if host is on top, false otherwise
   */
  public isHostOnTop(event?: Event): boolean {
    if (!event) return this.peek() === this.host;
    if (!eventOwners.has(event)) eventOwners.set(event, this.peek());
    return eventOwners.get(event) === this.host;
  }

  /** Consume a dismissal once, even when the owner listens on both host and document. */
  public claimHostEvent(event: Event): boolean {
    if (handledEvents.has(event) || !this.isHostOnTop(event)) return false;
    handledEvents.add(event);
    return true;
  }

  /** Updates the existing zIndex override without changing registration depth. */
  public setHostZIndex(value: number): void {
    const explicit = Number.isInteger(value) ? value : undefined;
    if (explicit === this.explicitZIndex) return;
    this.explicitZIndex = explicit;
    if (this.has(this.host)) this.notifyMoved();
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
