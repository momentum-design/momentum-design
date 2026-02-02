/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
import { property } from 'lit/decorators.js';

import type { Component } from '../../../models';
import type { Constructor } from '../index.types';
import { findFocusable } from '../../dom';

import { FocusTrapStack } from './FocusTrapStack';

export declare abstract class FocusTrapClassInterface {
  protected abstract focusTrap: boolean;

  setInitialFocus(elementIndexToReceiveFocus?: number): void;

  activateFocusTrap(): void;

  deactivateFocusTrap(): void;

  private setIsFocusTrapActivated(isActivated: boolean): void;
}

export const FocusTrapMixin = <T extends Constructor<Component>>(superClass: T) => {
  abstract class FocusTrap extends superClass {
    /**
     * Determines whether the focus trap is enabled.
     * If true, focus will be restricted to the content within this component.
     *
     * IMPLEMENT THIS IN YOUR COMPONENT.
     */
    protected abstract focusTrap: boolean;

    /**
     * Determines whether focus should wrap around when reaching the first or last focusable element.
     * If true, focus will cycle from end to start and vice versa.
     *
     * This only applies when `focusTrap` is true.
     * @default true
     */
    @property({ type: Boolean, reflect: true, attribute: 'should-focus-trap-wrap' })
    shouldFocusTrapWrap: boolean = true;

    /** @internal */
    private focusTrapIndex: number = -1;

    /** @internal */
    private focusableElements: HTMLElement[] = [];

    /** @internal */
    private isFocusTrapActivated: boolean = false;

    private setIsFocusTrapActivated(isActivated: boolean) {
      this.isFocusTrapActivated = isActivated;
    }

    /**
     * Activate the focus trap
     */
    public activateFocusTrap() {
      this.setIsFocusTrapActivated(true);
      FocusTrapStack.activate(this);
    }

    /**
     * Deactivate the focus trap.
     */
    public deactivateFocusTrap() {
      this.setIsFocusTrapActivated(false);
      FocusTrapStack.deactivate(this);

      this.focusTrapIndex = -1;
    }

    /**
     * Updates the list of focusable elements within the component's shadow root.
     */
    private setFocusableElements() {
      if (!this.shadowRoot) return;

      this.focusableElements = findFocusable(this.shadowRoot);
    }

    /**
     * Sets the initial focus within the container.
     *
     * @param elementIndexToReceiveFocus - The index of the preferable element to focus.
     */
    public setInitialFocus(elementIndexToReceiveFocus: number = 0) {
      this.setFocusableElements();

      if (this.focusableElements.length === 0 || !this.focusTrap) {
        return;
      }

      if (this.focusableElements[elementIndexToReceiveFocus]) {
        this.focusTrapIndex = elementIndexToReceiveFocus;
        this.focusableElements[elementIndexToReceiveFocus].focus({ preventScroll: true });
      }
    }

    /**
     * Calculates the next index for the focus trap.
     *
     * @param currentIndex - The current index.
     * @param step - The step to calculate the next index.
     * @returns The next index.
     */
    private calculateNextIndex(currentIndex: number, step: number) {
      const { length } = this.focusableElements;

      if (currentIndex === -1) {
        return step > 0 ? 0 : length - 1;
      }

      let nextIndex = currentIndex + step;

      if (this.shouldFocusTrapWrap) {
        if (nextIndex < 0) nextIndex = length - 1;
        if (nextIndex >= length) nextIndex = 0;
      } else {
        if (nextIndex < 0) nextIndex = 0;
        if (nextIndex >= length) nextIndex = length - 1;
      }

      return nextIndex;
    }

    /**
     * Returns the deepest active element in the shadow DOM.
     *
     * @returns The deepest active element.
     */
    private getDeepActiveElement() {
      let host: Element | null = document.activeElement || document.body;
      while (host instanceof HTMLElement && host.shadowRoot?.activeElement) {
        host = host.shadowRoot.activeElement;
      }

      return (host as HTMLElement) || document.body;
    }

    /**
     * Finds the index of the active element within the focusable elements.
     *
     * @param activeElement - The active element.
     * @returns The index of the active element.
     */
    private findElement(activeElement: HTMLElement) {
      return this.focusableElements.findIndex(element => this.isEqualFocusNode(activeElement, element));
    }

    /**
     * Checks if the active element is equal to the given element.
     *
     * @param activeElement - The active element.
     * @param element - The element to compare.
     * @returns True if the active element is equal to the given element.
     */
    private isEqualFocusNode(activeElement: HTMLElement, element: HTMLElement) {
      if (activeElement.nodeType >= 0) {
        return element.isEqualNode(activeElement) && element === activeElement;
      }
      return false;
    }

    /**
     * Traps focus within the container.
     *
     * @param direction - The direction of the focus trap.
     * If true, the focus will be trapped in the previous element.
     */
    private trapFocus(event: KeyboardEvent) {
      // calculate the focusable elements
      this.setFocusableElements();

      if (this.focusableElements.length === 0) {
        return;
      }
      const activeElement = this.getDeepActiveElement!() as HTMLElement;
      const activeIndex = this.findElement(activeElement);
      const direction = event.shiftKey;

      if (direction) {
        this.focusTrapIndex = this.calculateNextIndex(activeIndex, -1);
      } else {
        this.focusTrapIndex = this.calculateNextIndex(activeIndex, 1);
      }

      const nextElement = this.focusableElements[this.focusTrapIndex];

      if (nextElement.tagName === 'IFRAME') {
        // If the next element is an iframe we should not focus it manually
        // but just let the browser handle it.
        // this only works if there are focusable elements around the iframe!
        return;
      }

      if (nextElement) {
        event.preventDefault();
        nextElement.focus();
      }
    }

    /**
     * Traps focus within the container.
     *
     * @param event - The keyboard event.
     */
    // @ts-ignore - this is a method which will be called in the stack
    private handleTabKeydown(event: KeyboardEvent) {
      if (!this.isFocusTrapActivated) {
        return;
      }

      if (event.key === 'Tab') {
        this.trapFocus(event);
      }
    }
  }

  return FocusTrap as unknown as Constructor<Component & FocusTrapClassInterface> & T;
};
