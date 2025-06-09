/* eslint-disable max-classes-per-file */
import { property } from 'lit/decorators.js';
import type { PropertyValues } from 'lit';
import type { Component } from '../../models';
import type { Constructor } from './index.types';

export declare abstract class FocusTrapClassInterface {
  protected abstract focusTrap: boolean;

  enabledPreventScroll: boolean;

  setInitialFocus(elementIndexToReceiveFocus?: number): void;

  activateFocusTrap(): void;

  deactivateFocusTrap(): void;
}

export const FocusTrapMixin = <T extends Constructor<Component>>(superClass: T) => {
  abstract class FocusTrap extends superClass {
    /**
     * Determines whether the focus trap is enabled.
     * If true, focus will be restricted to the content within this component.
     *
     * @default false
     */
    protected abstract focusTrap: boolean;

    /**
     * Determines whether focus should wrap around when reaching the first or last focusable element.
     * If true, focus will cycle from end to start and vice versa.
     *
     * This only applies when `enabledFocusTrap` is true.
     * @default true
     */
    @property({ type: Boolean, reflect: true, attribute: 'should-focus-trap-wrap' })
    shouldFocusTrapWrap: boolean = true;

    /**
     * Prevent outside scrolling when element is shown.
     * @default false
     */
    @property({ type: Boolean })
    enabledPreventScroll: boolean = false;

    /** @internal */
    private focusTrapIndex: number = -1;

    /** @internal */
    private focusableElements: HTMLElement[] = [];

    /** @internal */
    private isFocusTrapActivated: boolean = false;

    override connectedCallback() {
      super.connectedCallback();

      document.addEventListener('keydown', this.handleTabKeydown.bind(this));
    }

    override disconnectedCallback() {
      super.disconnectedCallback();

      document.removeEventListener('keydown', this.handleTabKeydown.bind(this));
    }

    protected override async updated(changedProperties: PropertyValues) {
      super.updated(changedProperties);

      if (changedProperties.has('focusTrap')) {
        if (!this.focusTrap) {
          this.deactivateFocusTrap();
        }
      }
    }

    /**
     * Activate the focus trap
     * This calculates the focusable elements within the component's shadow root
     */
    public activateFocusTrap() {
      if (this.focusTrap) {
        this.isFocusTrapActivated = true;
        this.setFocusableElements();
      }
    }

    /**
     * Deactivate the focus trap.
     */
    public deactivateFocusTrap() {
      this.isFocusTrapActivated = false;
      this.focusTrapIndex = -1;

      // todo: this should not override the body overflow style, but reset it instead
      this.enabledPreventScroll = false;
      document.body.style.overflow = '';
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
        element.hasAttribute('hidden')
        || element.getAttribute('aria-hidden') === 'true'
        || this.hasHiddenStyle(element)
        || this.isNotVisible(element)
        || this.hasComputedHidden(element)
      );
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
        (element instanceof HTMLAudioElement || element instanceof HTMLVideoElement)
        && element.hasAttribute('controls')
      ) {
        return true;
      }
      if (
        (element instanceof HTMLImageElement || element instanceof HTMLObjectElement)
        && element.hasAttribute('usemap')
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
      if (this.isHidden(element) || this.isNotTabbable(element)) {
        return false;
      }
      return this.isInteractiveElement(element);
    }

    /**
     * Recursively finds all focusable elements within the given root and its descendants.
     *
     * @param root - The root element to search for focusable elements.
     * @param matches - The set of focusable elements.
     * @returns The list of focusable elements.
     */
    private findFocusable(root: ShadowRoot | HTMLElement, matches: Set<HTMLElement> = new Set()): HTMLElement[] {
      if (root instanceof HTMLElement && this.isFocusable(root)) {
        matches.add(root);
      }
      const children = Array.from(root.children) as HTMLElement[];

      children.forEach((child: Node) => {
        const element = child as HTMLElement;

        if (this.isFocusable(element)) {
          matches.add(element);
        }

        if (element.shadowRoot) {
          this.findFocusable(element.shadowRoot, matches);
        } else if (element.tagName === 'SLOT') {
          const assignedNodes = (element as HTMLSlotElement).assignedElements({ flatten: true });
          assignedNodes.forEach((node) => {
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
    public setFocusableElements() {
      if (!this.shadowRoot) return;

      this.focusableElements = this.findFocusable(this.shadowRoot, new Set());
    }

    /**
     * Sets the initial focus within the container.
     *
     * @param elementIndexToReceiveFocus - The index of the preferable element to focus.
     */
    public setInitialFocus(elementIndexToReceiveFocus: number = 0) {
      if (this.focusableElements.length === 0) return;

      if (this.enabledPreventScroll) {
        document.body.style.overflow = 'hidden';
      }

      if (this.focusableElements[elementIndexToReceiveFocus]) {
        this.focusTrapIndex = elementIndexToReceiveFocus;
        this.focusableElements[elementIndexToReceiveFocus].focus();
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

      console.log(this.shouldFocusTrapWrap, nextIndex, length);
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
      return this.focusableElements.findIndex((element) => this.isEqualFocusNode(activeElement, element));
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
    private trapFocus(direction: boolean) {
      if (this.focusableElements.length === 0) {
        return;
      }
      const activeElement = this.getDeepActiveElement!() as HTMLElement;
      const activeIndex = this.findElement(activeElement);

      if (direction) {
        this.focusTrapIndex = this.calculateNextIndex(activeIndex, -1);
      } else {
        this.focusTrapIndex = this.calculateNextIndex(activeIndex, 1);
      }

      const nextElement = this.focusableElements[this.focusTrapIndex];
      if (nextElement) {
        nextElement.focus();
      }
    }

    /**
     * Traps focus within the container.
     *
     * @param event - The keyboard event.
     */
    private handleTabKeydown(event: KeyboardEvent) {
      if (!this.isFocusTrapActivated || !this.focusableElements.length) {
        return;
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        this.trapFocus(event.shiftKey);
      }
    }
  }

  return FocusTrap as unknown as Constructor<HTMLElement & FocusTrapClassInterface> & T;
};
