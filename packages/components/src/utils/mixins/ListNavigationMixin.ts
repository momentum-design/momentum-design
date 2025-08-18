/* eslint-disable max-classes-per-file */
import { PropertyValues } from 'lit';
import type { LitElement } from 'lit';

import { KEYS } from '../keys';

import type { Constructor } from './index.types';

export declare class ListNavigationMixinInterface {}

interface ListNavigationMixinOptions {
  /**
   * Name of the property that will be used to store the items in the component.
   * @default 'items'
   */
  itemsPropertyName?: string;
  /**
   * Weather the list should loop back to the other end when reaching the first of last item.
   * @default true
   */
  loop: boolean;
  /**
   * Whether to propagate key events to parent elements.
   * If set to true, all key events (and not just the unhandled ones) will bubble up and can be handled by parent components.
   * @default false
   */
  propagateAllKeyEvents?: boolean;
}

const DEFAULT_OPTIONS: ListNavigationMixinOptions = {
  loop: true,
  itemsPropertyName: 'items',
  propagateAllKeyEvents: false,
};

/**
 * This mixin extends the passed class with list like navigation capabilities.
 *
 * It handles up and down arrow keys, home and end keys to navigate through a list of items.
 * Key mapping aligned to reading direction (RTL or LTR).
 *
 * @param superClass - The class to extend with the mixin.
 * @param options - Options to configure the mixin behavior.
 */
export const ListNavigationMixin = <T extends Constructor<LitElement>>(
  superClass: T,
  options?: ListNavigationMixinOptions,
) => {
  const { itemsPropertyName, loop, propagateAllKeyEvents } = { ...DEFAULT_OPTIONS, ...options };

  class InnerMixinClass extends superClass {
    /**
     *  Get list items from the passed property
     */
    private get navItems(): HTMLElement[] {
      // @ts-ignore
      return (this[itemsPropertyName] as HTMLElement[]) || [];
    }

    constructor(...rest: any[]) {
      super(...rest);

      this.addEventListener('keydown', this.handleNavigationKeyDown);
      this.addEventListener('click', this.handleNavigationClick);
    }

    /**
     * Reset tabindex and set focus to the first item in the list after the component is first updated.
     *
     * @param changedProperties
     */
    override async firstUpdated(changedProperties: PropertyValues) {
      await super.firstUpdated(changedProperties);

      this.resetTabIndexAndSetFocus(0);
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
     */
    protected handleNavigationKeyDown = (event: KeyboardEvent) => {
      let isKeyHandled = false;

      const target = event.target as HTMLElement;
      const currentIndex = this.getCurrentIndex(target);
      if (currentIndex === -1) return;
      this.resetTabIndexes(currentIndex);

      const isRtl = window.getComputedStyle(this).direction === 'rtl';

      const targetKey = this.resolveDirectionKey(event.key, isRtl);

      switch (targetKey) {
        case KEYS.HOME: {
          // Move focus to the first item
          this.resetTabIndexAndSetFocus(0, currentIndex);
          isKeyHandled = true;
          break;
        }
        case KEYS.END: {
          // Move focus to the last item
          this.resetTabIndexAndSetFocus(this.navItems.length - 1, currentIndex);
          isKeyHandled = true;
          break;
        }
        case KEYS.ARROW_DOWN: {
          // Move focus to the next item
          const eolIndex = loop ? 0 : currentIndex;
          const newIndex = currentIndex + 1 === this.navItems.length ? eolIndex : currentIndex + 1;
          this.resetTabIndexAndSetFocus(newIndex, currentIndex);
          isKeyHandled = true;
          break;
        }
        case KEYS.ARROW_UP: {
          // Move focus to the prev item
          const eolIndex = loop ? this.navItems.length - 1 : currentIndex;
          const newIndex = currentIndex - 1 === -1 ? eolIndex : currentIndex - 1;
          this.resetTabIndexAndSetFocus(newIndex, currentIndex);
          isKeyHandled = true;
          break;
        }
        default:
          break;
      }

      // When the component consume any of the pressed key, we need to stop propagation
      // to prevent the event from bubbling up and being handled by parent components which might use the same key.
      if (isKeyHandled && !propagateAllKeyEvents) {
        event.stopPropagation();
        event.preventDefault();
      }
    };

    /**
     * Handles click events on the navigation items.
     * It retrieves the index of the clicked item and resets the tabindex accordingly.
     *
     * @param event - The mouse event triggered by user interaction.
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
      return this.navItems.findIndex(node => node === target);
    }

    /**
     * Reset all tabindex to -1 and set the tabindex of the current item to 0
     *
     * @param currentIndex - The index of the currently focused item.
     */
    private resetTabIndexes(currentIndex: number) {
      if (this.navItems.length > 0) {
        this.navItems.forEach(item => item.setAttribute('tabindex', '-1'));
        this.navItems[currentIndex].setAttribute('tabindex', '0');
        this.navItems[currentIndex].focus();
      }
    }

    /**
     * Resets the tabindex of the currently focused item and sets focus to a new item.
     *
     * @param newIndex - The index of the new item to focus.
     * @param oldIndex - The index of the currently focused item.
     * @returns - This method does not return anything.
     */
    private resetTabIndexAndSetFocus(newIndex: number, oldIndex?: number) {
      const { navItems } = this;

      if (navItems.length === 0) return;

      // Ensure newIndex is valid
      const newIdx = navItems[newIndex] ? newIndex : 0;
      const newItem = navItems[newIdx];

      if (newIndex === oldIndex && newItem && newItem.getAttribute('tabindex') === '0') {
        return;
      }
      if (oldIndex !== undefined && navItems[oldIndex]) {
        // Reset tabindex of the old item
        navItems[oldIndex].setAttribute('tabindex', '-1');
      }

      newItem.setAttribute('tabindex', '0');
      newItem.focus();
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
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<ListNavigationMixinInterface> & T;
};
