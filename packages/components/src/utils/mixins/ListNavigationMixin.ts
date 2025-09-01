/* eslint-disable max-classes-per-file */
import { PropertyValues } from 'lit';

import type { Component } from '../../models';
import { KEYS } from '../keys';

import type { Constructor } from './index.types';

export declare abstract class ListNavigationMixinInterface {
  protected loop: 'true' | 'false';

  protected propagateAllKeyEvents: boolean;

  protected initialFocus: number;

  protected abstract get navItems(): HTMLElement[];

  protected resetTabIndexes(index: number): void;

  protected resetTabIndexAndSetFocus(newIndex: number, oldIndex?: number, focusNewItem?: boolean): void;
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
    protected abstract get navItems(): HTMLElement[];

    constructor(...rest: any[]) {
      super(...rest);

      this.addEventListener('keydown', this.handleNavigationKeyDown);
      this.addEventListener('click', this.handleNavigationClick);
    }

    /**
     * Reset tabindex and set focus to the first item in the list after the component is first updated.
     *
     * @param changedProperties - The properties that have changed since the last update.
     */
    protected override async firstUpdated(changedProperties: PropertyValues) {
      super.firstUpdated(changedProperties);

      const indexToFocus = Math.min(Math.max(this.initialFocus, 0), this.navItems.length - 1);
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
    protected handleNavigationKeyDown = (event: KeyboardEvent) => {
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
    };

    /**
     * Handles click events on the navigation items.
     * It retrieves the index of the clicked item and resets the tabindex accordingly.
     *
     * @param event - The mouse event triggered by user interaction.
     * @internal
     */
    protected handleNavigationClick = (event: MouseEvent) => {
      const newIndex = this.getCurrentIndex(event.target);
      this.resetTabIndexes(newIndex);
    };

    /**
     * Retrieves the current index of the item that triggered the event.
     *
     * @param target - The target element that triggered the event.
     * @returns - The index of the current item in the `navItems` array.
     */
    private getCurrentIndex(target: EventTarget | null): number {
      let el: HTMLElement | null = target as HTMLElement;
      do {
        const checkEl = el;
        const i = this.navItems.findIndex(node => node === checkEl);
        if (i !== -1) return i;

        el = el.parentElement;
      } while (el);

      return -1;
    }

    /**
     * Reset all tabindex to -1 and set the tabindex of the current item to 0
     *
     * @param index - The index of the currently focused item.
     */
    protected resetTabIndexes(index: number) {
      if (this.navItems.length > 0) {
        this.navItems.forEach(item => item.setAttribute('tabindex', '-1'));
        const currentIndex = this.navItems[index] ? index : 0;

        this.navItems[currentIndex].setAttribute('tabindex', '0');
        this.navItems[currentIndex].focus();
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
      const newIdx = navItems[newIndex] ? newIndex : 0;
      const newItem = navItems[newIdx];

      if (newIndex === oldIndex && newItem && newItem.getAttribute('tabindex') === '0') {
        return;
      }

      if (oldIndex === undefined) {
        navItems.forEach(item => item.setAttribute('tabindex', '-1'));
      } else if (oldIndex !== undefined && navItems[oldIndex]) {
        // Reset tabindex of the old item
        navItems[oldIndex].setAttribute('tabindex', '-1');
      }

      newItem.setAttribute('tabindex', '0');

      if (focusNewItem) {
        newItem.focus({ preventScroll: true });

        const list = newItem.closest(this.tagName)!;
        const elementRect = newItem.getBoundingClientRect();
        const containerRect = list.getBoundingClientRect();

        const isNewItemInViewport =
          elementRect.top >= containerRect.top &&
          elementRect.left >= containerRect.left &&
          elementRect.bottom <= containerRect.bottom &&
          elementRect.right <= containerRect.right;

        if (!isNewItemInViewport) {
          const currentScrollTop = list.scrollTop;
          newItem.scrollIntoView({ block: 'nearest' });
          const newScrollTop = list.scrollTop;

          if (newScrollTop > currentScrollTop) {
            list.scrollTop += 10;
          } else {
            list.scrollTop -= 10;
          }
        }
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
      return !(this.loop === 'false');
    }
  }

  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<Component & ListNavigationMixinInterface> & T;
};
