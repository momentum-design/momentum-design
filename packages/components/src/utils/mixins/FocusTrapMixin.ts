/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
import { property } from 'lit/decorators.js';

import type { Component } from '../../models';

import type { Constructor } from './index.types';

/**
 * FocusTrapStack manages a stack of active focus traps,
 * ensuring only one focus trap is active at a time.
 *
 * This also makes sure there is only one keydown listener active at a time,
 * which is necessary to handle focus trapping correctly.
 *
 * Handling iFrames is supported, as long as there are focusable elements around the iFrame.
 * Otherwise it will not work as expected.
 */
class FocusTrapStack {
  private static stack: Set<any> = new Set();

  static get stackArray() {
    return Array.from(this.stack);
  }

  private static currentKeydownListener: ((event: KeyboardEvent) => void) | null = null;

  private static addKeydownListener(keydownListener: (event: KeyboardEvent) => void) {
    this.currentKeydownListener = keydownListener;
    document.addEventListener('keydown', keydownListener);
  }

  private static removeKeydownListener() {
    if (this.currentKeydownListener) {
      document.removeEventListener('keydown', this.currentKeydownListener);
    }
  }

  /**
   * Activates a focus trap by adding it to the stack.
   * It deactivates all other traps in the stack to ensure only one trap is active
   *
   * @param trap - The focus trap to activate.
   */
  static activate(trap: any) {
    // Deactivate all other traps
    this.stackArray.forEach(activeTrap => {
      if (activeTrap !== trap) {
        activeTrap.setIsFocusTrapActivated(false);
      }
    });
    this.stack.add(trap);

    // remove the current keydown listener if it exists
    // and add a new one for the current trap
    this.removeKeydownListener();
    this.addKeydownListener(trap.handleTabKeydown.bind(trap));
  }

  /**
   * Deactivates a focus trap by removing it from the stack.
   * Activates the previous trap in the stack if any.
   *
   * @param trap - The focus trap to deactivate.
   */
  static deactivate(trap: any) {
    if (!this.stack.has(trap)) {
      return;
    }

    this.stack.delete(trap);
    this.removeKeydownListener();

    // activate the previous trap in the stack if any
    if (this.stack.size > 0) {
      const lastTrap = this.stackArray.pop();
      if (lastTrap) {
        lastTrap.setIsFocusTrapActivated(true);
        this.addKeydownListener(lastTrap.handleTabKeydown.bind(lastTrap));
      }
    }
  }
}

export declare abstract class FocusTrapClassInterface {
  protected abstract focusTrap: boolean;

  setInitialFocus(elementIndexToReceiveFocus?: number): void;

  activateFocusTrap(): void;

  deactivateFocusTrap(): void;

  isDeepActiveElementVisuallyFocused(): boolean;

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
     * Checks if the element has no client rectangles (not visible in the viewport).
     *
     * @param element - The element to check.
     * @returns True if the element has no client rectangles.
     */
    private hasNoClientRects(element: HTMLElement) {
      return element.getClientRects().length === 0;
    }

    /**
     * Checks if the element has zero dimensions (width and height are both 0).
     *
     * @param element - The element to check.
     * @returns True if the element has zero dimensions.
     */
    private hasZeroDimensions(element: HTMLElement) {
      const { width, height } = element.getBoundingClientRect();
      const { offsetWidth, offsetHeight } = element;

      return offsetWidth + offsetHeight + height + width === 0;
    }

    /**
     * Determines if the element is not visible in the DOM.
     *
     * @param element - The element to check.
     * @returns True if the element is not visible.
     */
    private isNotVisible(element: HTMLElement) {
      return this.hasZeroDimensions(element) || this.hasNoClientRects(element);
    }

    /**
     * Checks if the element has inline styles that make it hidden.
     *
     * @param element - The element to check.
     * @returns True if the element has inline styles that make it hidden.
     */
    private hasHiddenStyle(element: HTMLElement) {
      const { display, opacity, visibility } = element.style;
      return display === 'none' || opacity === '0' || visibility === 'hidden' || visibility === 'collapse';
    }

    /**
     * Checks if the element is hidden by a computed style.
     *
     * @param element - The element to check.
     * @returns True if the element is hidden by a computed style.
     */
    private hasComputedHidden(element: HTMLElement) {
      const computedStyle = getComputedStyle(element);
      return computedStyle.visibility === 'hidden' || computedStyle.height === '0' || computedStyle.display === 'none';
    }

    /**
     * Checks if the element is hidden from the user.
     *
     * @param element - The element to check.
     * @returns True if the element is hidden.
     */
    private isHidden(element: HTMLElement) {
      return (
        element.hasAttribute('hidden') ||
        element.getAttribute('aria-hidden') === 'true' ||
        this.hasHiddenStyle(element) ||
        this.isNotVisible(element) ||
        this.hasComputedHidden(element)
      );
    }

    /**
     * Checks if the element is disabled.
     *
     * @param element - The element to check.
     * @returns True if the element is disabled.
     */
    private isDisabled(element: any) {
      return element.disabled;
    }

    /**
     * Checks if the element is not tabbable.
     *
     * @param element - The element to check.
     * @returns True if the element is not tabbable.
     */
    private isNotTabbable(element: HTMLElement) {
      return element.getAttribute('tabindex') === '-1';
    }

    /**
     * Checks if the element is interactive.
     *
     * @param element - The element to check.
     * @returns True if the element is interactive.
     */
    private isInteractiveElement(element: HTMLElement): boolean {
      const interactiveTags = new Set(['BUTTON', 'DETAILS', 'EMBED', 'IFRAME', 'SELECT', 'TEXTAREA']);

      if (interactiveTags.has(element.tagName)) {
        return true;
      }
      if (element instanceof HTMLAnchorElement && element.hasAttribute('href')) {
        return true;
      }
      if (element instanceof HTMLInputElement && element.type !== 'hidden') {
        return true;
      }
      if (
        (element instanceof HTMLAudioElement || element instanceof HTMLVideoElement) &&
        element.hasAttribute('controls')
      ) {
        return true;
      }
      if (
        (element instanceof HTMLImageElement || element instanceof HTMLObjectElement) &&
        element.hasAttribute('usemap')
      ) {
        return true;
      }
      if (element.hasAttribute('tabindex') && element.tabIndex > -1) {
        return true;
      }

      return false;
    }

    /**
     * Checks if the element is focusable.
     *
     * @param element - The element to check.
     * @returns True if the element is focusable.
     */
    private isFocusable(element: HTMLElement) {
      if (this.isHidden(element) || this.isNotTabbable(element) || this.isDisabled(element)) {
        return false;
      }
      return this.isInteractiveElement(element);
    }

    /**
     * Recursively finds all focusable elements within the given root and its descendants.
     *
     * Make sure this is performant, as it will be called multiple times.
     *
     * @param root - The root element to search for focusable elements.
     * @param matches - The set of focusable elements.
     * @returns The list of focusable elements.
     */
    private findFocusable(root: ShadowRoot | HTMLElement, matches: Set<HTMLElement> = new Set()): HTMLElement[] {
      if (root instanceof HTMLElement && this.isFocusable(root)) {
        matches.add(root);
      }

      let children: HTMLElement[] = [];
      if (root.children.length) {
        children = Array.from(root.children) as HTMLElement[];
      } else if (root instanceof HTMLElement && root.shadowRoot) {
        children = Array.from(root.shadowRoot.children) as HTMLElement[];
      }

      children.forEach((child: Node) => {
        const element = child as HTMLElement;

        if (this.isFocusable(element)) {
          matches.add(element);
        }

        if (element.shadowRoot) {
          this.findFocusable(element.shadowRoot, matches);
        } else if (element.tagName === 'SLOT') {
          const assignedNodes = (element as HTMLSlotElement).assignedElements({ flatten: true });
          assignedNodes.forEach(node => {
            if (node instanceof HTMLElement) {
              this.findFocusable(node, matches);
            }
          });
        } else {
          this.findFocusable(element, matches);
        }
      });

      return [...matches];
    }

    /**
     * Updates the list of focusable elements within the component's shadow root.
     */
    private setFocusableElements() {
      if (!this.shadowRoot) return;

      this.focusableElements = this.findFocusable(this.shadowRoot, new Set());
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
     * Returns whether or not the deepest active element in the shadow dom is visually focused.
     *
     * @returns If deepest active element is visually focused
     */
    public isDeepActiveElementVisuallyFocused() {
      return this.getDeepActiveElement().matches(':focus-visible');
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
