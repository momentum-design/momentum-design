/* eslint-disable max-classes-per-file */
import { PropertyValues } from 'lit';

import type { Component } from '../../models';
import { KEYS } from '../keys';
import type { BaseArray } from '../virtualIndexArray';

import type { Constructor } from './index.types';

export declare abstract class ListNavigationMixinInterface {
  protected loop: 'true' | 'false';

  protected propagateAllKeyEvents: boolean;

  protected initialFocus: number;

  protected abstract get navItems(): BaseArray<HTMLElement>;

  protected resetTabIndexes(index: number, focusElement?: boolean): void;

  protected resetTabIndexAndSetFocus(newIndex: number, oldIndex?: number, focusNewItem?: boolean): void;

  protected setInitialFocus(): void;

  protected handleNavigationKeyDown(event: KeyboardEvent): void;
}

/**
 * This mixin extends the passed class with list like navigation capabilities.
 *
 * It handles up and down arrow keys, home and end keys to navigate through a list of items.
 * Key mapping aligned to reading direction (RTL or LTR).
 *
 * @example
 * ```ts
 * class MyComponent extends ListNavigationMixin(Component) {
 *   protected override loop = false; // Enable looping navigation
 *
 *   protected get navItems() {
 *      return this.shadowRoot?.querySelectorAll('.mdc-listitem') || [];
 *   }
 * }
 * ```
 * @param superClass - The class to extend with the mixin.
 */
export const ListNavigationMixin = <T extends Constructor<Component>>(superClass: T) => {
  abstract class InnerMixinClass extends superClass {
    /**
     * Whether to loop navigation when reaching the end of the list.
     * If 'true', pressing the down arrow on the last item will focus the first item,
     * and pressing the up arrow on the first item will focus the last item.
     * If 'false', navigation will stop at the first or last item.
     *
     * @default 'true'
     * @internal
     */
    protected loop: 'true' | 'false' = 'true';

    /**
     * Whether to propagate all key events to parent components.
     * If true, all key events will bubble up and can be handled by parent components.
     * If false, navigation key events handled by this mixin will not propagate further.
     *
     * @default false
     * @internal
     */
    protected propagateAllKeyEvents = false;

    /**
     * The index of the item to focus initially when the component is first updated.
     *
     * @default 0
     * @internal
     */
    protected initialFocus: number = 0;

    /**
     * Get list items from the passed property
     * @internal
     */
    protected abstract get navItems(): BaseArray<HTMLElement>;

    constructor(...rest: any[]) {
      super(...rest);

      this.addEventListener('keydown', this.handleNavigationKeyDown.bind(this));
      this.addEventListener('click', this.handleNavigationClick);
    }

    /**
     * Reset tabindex and set focus to the first item in the list after the component is first updated.
     *
     * @param changedProperties - The properties that have changed since the last update.
     */
    protected override async firstUpdated(changedProperties: PropertyValues) {
      super.firstUpdated(changedProperties);

      this.setInitialFocus();
    }

    protected setInitialFocus() {
      const indexToFocus = Math.max(Math.min(this.initialFocus, this.navItems.length - 1), 0);
      this.resetTabIndexAndSetFocus(indexToFocus, undefined, false);
    }

    /**
     * Handles keydown events for navigation within the list.
     * It allows users to navigate through the list items using arrow keys, home, and end keys.
     * The navigation is based on the current focused item and the direction of the layout (RTL or LTR).
     *
     * By default, it will stop propagation for key events which are handled by the component.
     * Check the mixin options to change this behavior.
     *
     * @param event - The keyboard event triggered by user interaction.
     * @internal
     */
    protected handleNavigationKeyDown(event: KeyboardEvent) {
      const keysToHandle = new Set([KEYS.ARROW_DOWN, KEYS.ARROW_UP, KEYS.HOME, KEYS.END]);
      const isRtl = window.getComputedStyle(this).direction === 'rtl';
      const targetKey = this.resolveDirectionKey(event.key, isRtl);

      if (!keysToHandle.has(targetKey)) {
        return;
      }

      const target = event.target as HTMLElement;
      const currentIndex = this.getCurrentIndex(target);
      if (currentIndex === -1) return;
      this.resetTabIndexes(currentIndex);

      switch (targetKey) {
        case KEYS.HOME: {
          // Move focus to the first item
          this.resetTabIndexAndSetFocus(0, currentIndex);
          break;
        }
        case KEYS.END: {
          // Move focus to the last item
          this.resetTabIndexAndSetFocus(this.navItems.length - 1, currentIndex);
          break;
        }
        case KEYS.ARROW_DOWN: {
          // Move focus to the next item
          const eolIndex = this.shouldLoop() ? 0 : currentIndex;
          const newIndex = currentIndex + 1 === this.navItems.length ? eolIndex : currentIndex + 1;
          this.resetTabIndexAndSetFocus(newIndex, currentIndex);
          break;
        }
        case KEYS.ARROW_UP: {
          // Move focus to the prev item
          const eolIndex = this.shouldLoop() ? this.navItems.length - 1 : currentIndex;
          const newIndex = currentIndex - 1 === -1 ? eolIndex : currentIndex - 1;
          this.resetTabIndexAndSetFocus(newIndex, currentIndex);
          break;
        }
        default:
          break;
      }

      // When the component consume any of the pressed key, we need to stop propagation
      // to prevent the event from bubbling up and being handled by parent components which might use the same key.
      if (!this.propagateAllKeyEvents) {
        event.stopPropagation();
        event.preventDefault();
      }
    }

    /**
     * Handles click events on the navigation items.
     * It retrieves the index of the clicked item and resets the tabindex accordingly.
     *
     * @param event - The mouse event triggered by user interaction.
     * @internal
     */
    protected handleNavigationClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const newIndex = this.getCurrentIndex(target);

      if (newIndex !== -1) {
        // When user clicked on a focusable element inside the item, we update the navigation index, but
        // keep the focus on the clicked element.
        const focusNewItem = !(this.navItems.at(newIndex) !== target && document.activeElement === event.target);
        this.resetTabIndexAndSetFocus(newIndex, undefined, focusNewItem);
      }
    };

    /**
     * Retrieves the current index of the item that triggered the event.
     *
     * @param target - The target element that triggered the event.
     * @returns - The index of the current item in the `navItems` array.
     */
    private getCurrentIndex(target: HTMLElement | null): number {
      if (!target) return -1;

      return this.navItems.findIndex(
        node =>
          node === target ||
          // eslint-disable-next-line no-bitwise
          !!(node.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_CONTAINED_BY),
      );
    }

    /**
     * Reset all tabindex to -1 and set the tabindex of the current item to 0
     *
     * @param index - The index of the currently focused item.
     * @param focusElement - Call focus() on the current item or not.
     */
    protected resetTabIndexes(index: number, focusElement = true) {
      if (this.navItems.length > 0) {
        this.navItems.forEach(item => item.setAttribute('tabindex', '-1'));
        const currentIndex = this.navItems.at(index) ? index : 0;
        const currentItem = this.navItems.at(currentIndex) ?? this.navItems.find(Boolean)!;

        if (currentItem) {
          currentItem.setAttribute('tabindex', '0');
          if (focusElement) {
            currentItem.focus();
          }
        }
      }
    }

    /**
     * Resets the tabindex of the currently focused item and sets focus to a new item.
     *
     * @param newIndex - The index of the new item to focus.
     * @param oldIndex - The index of the currently focused item.
     * @param focusNewItem - Call focus() on the new item or not. It should be false during firstUpdate
     * @returns - This method does not return anything.
     */
    protected resetTabIndexAndSetFocus(newIndex: number, oldIndex?: number, focusNewItem = true) {
      const { navItems } = this;

      if (navItems.length === 0) return;

      // Ensure newIndex is valid
      const newItem = navItems.at(newIndex) ?? navItems.find(Boolean)!;

      if (newIndex === oldIndex && newItem && newItem.getAttribute('tabindex') === '0') {
        return;
      }

      if (oldIndex === undefined) {
        navItems.forEach(item => item.setAttribute('tabindex', '-1'));
      } else if (navItems.at(oldIndex)) {
        // Reset tabindex of the old item
        navItems.at(oldIndex)!.setAttribute('tabindex', '-1');
      }

      newItem.setAttribute('tabindex', '0');

      if (focusNewItem) {
        newItem.focus({ preventScroll: true });
        newItem.scrollIntoView({ block: 'nearest' });
      }
    }

    /**
     * Resolves the key pressed by the user based on the direction of the layout.
     * This method is used to handle keyboard navigation in a right-to-left (RTL) layout.
     * It checks if the layout is RTL and adjusts the arrow keys accordingly.
     * For example, in RTL, the left arrow key behaves like the right arrow key and vice versa.
     *
     * @param key - The key pressed by the user.
     * @param isRtl - A boolean indicating if the layout is right-to-left (RTL).
     * @returns - The resolved key based on the direction.
     */
    private resolveDirectionKey(key: string, isRtl: boolean) {
      if (!isRtl) return key;

      switch (key) {
        case KEYS.ARROW_LEFT:
          return KEYS.ARROW_RIGHT;
        case KEYS.ARROW_RIGHT:
          return KEYS.ARROW_LEFT;
        default:
          return key;
      }
    }

    private shouldLoop() {
      return this.loop !== 'false';
    }
  }

  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<Component & ListNavigationMixinInterface> & T;
};
