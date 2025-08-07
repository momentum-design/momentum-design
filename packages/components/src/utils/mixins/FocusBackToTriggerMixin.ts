import { property } from 'lit/decorators.js';

import { Component } from '../../models';

import type { Constructor } from './index.types';

export interface FocusBackToTriggerMixinInterface {
  setTriggerElement(triggerElement?: HTMLElement | null): void;

  triggerElement: HTMLElement | null;

  moveFocusBackToTrigger(): void;

  focusBackToTrigger: boolean;

  isDeepActiveElementVisuallyFocused(): boolean;
}

export const FocusBackToTriggerMixin = <T extends Constructor<Component>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * Determines whether focus should return to trigger element when closed.
     * If true, focus will return to trigger element.
     *
     * @default true
     */
    @property({ type: Boolean, reflect: true, attribute: 'focus-back-to-trigger' })
    focusBackToTrigger: boolean = true;

    /**
     * Reference to the trigger element that should receive focus when the component is closed.
     * This element will be focused when moveFocusBackToTrigger is called.
     * @internal
     */
    protected triggerElement: HTMLElement | null = null;

    /**
     * Sets the trigger element that should receive focus when the component is closed.
     *
     * @param triggerElement - The HTML element to focus, or null/undefined to clear
     * @internal
     */
    protected setTriggerElement(triggerElement?: HTMLElement | null) {
      this.triggerElement = triggerElement || null;
    }

    /**
     * Returns the deepest active element in the shadow DOM.
     *
     * @internal
     * @returns The deepest active element.
     */
    private getDeepActiveElement(): HTMLElement {
      let host: Element | null = document.activeElement || document.body;
      while (host instanceof HTMLElement && host.shadowRoot?.activeElement) {
        host = host.shadowRoot.activeElement;
      }

      return (host as HTMLElement) || document.body;
    }

    /**
     * Returns whether or not the deepest active element in the shadow dom is visually focused.
     *
     * @internal
     * @returns If deepest active element is visually focused
     */
    private isDeepActiveElementVisuallyFocused(): boolean {
      return this.getDeepActiveElement().matches(':focus-visible');
    }

    /**
     * Moves focus back to the trigger element.
     *
     * This method will only move focus if all of the following conditions are true:
     * - A trigger element is set and has a focus method
     * - The focusBackToTrigger property is enabled
     * - The current active element is visually focused (has :focus-visible)
     *
     * @internal
     */
    protected moveFocusBackToTrigger(): void {
      if (
        this.triggerElement &&
        typeof this.triggerElement.focus === 'function' &&
        this.focusBackToTrigger &&
        this.isDeepActiveElementVisuallyFocused()
      ) {
        this.triggerElement.focus();
      }
    }
  }

  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<Component & FocusBackToTriggerMixinInterface> & T;
};
