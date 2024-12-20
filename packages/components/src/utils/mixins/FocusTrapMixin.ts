import { property } from 'lit/decorators.js';
import { FocusTrapClass } from './abstract/AbstractFocusTrap';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface FocusTrapClassInterface {
    enableFocusTrap: boolean;
    enablePreventScroll: boolean;
}

export const FocusTrapMixin = <T extends Constructor<FocusTrapClass>>(
  superClass: T,
) : T & Constructor<FocusTrapClass & FocusTrapClassInterface> => {
  class FocusTrap extends superClass {
    /**
     * Determines whether the focus trap is enabled.
     * If true, focus will be restricted to the content within this component.
     */
    @property({ reflect: true, type: Boolean })
    enableFocusTrap = false;

    /**
     * Determines whether scrolling is prevented when the focus trap is active.
     * If true, the document's scroll will be disabled while the focus trap is active.
     */
    @property({ reflect: true, type: Boolean })
    enablePreventScroll = false;

    private focusTrapIndex = -1;

    private focusableElements: HTMLElement[] = [];

    shouldWrapFocus: () => boolean = () => true;

    /**
     * Deactivate the focus trap.
     */
    override deactivateFocusTrap() {
      this.enableFocusTrap = false;
      this.enablePreventScroll = false;
      this.focusTrapIndex = -1;
      document.body.style.overflow = '';
    }

    /**
     * Checks if the element has no client rectangles (not visible in the viewport).
     */
    private hasNoClientRects(element: HTMLElement) {
      return element.getClientRects().length === 0;
    }

    /**
     * Checks if the element has zero dimensions (width and height are both 0).
     */
    private hasZeroDimensions(element: HTMLElement) {
      const { width, height } = element.getBoundingClientRect();
      const { offsetWidth, offsetHeight } = element;

      return offsetWidth + offsetHeight + height + width === 0;
    }

    /**
     * Determines if the element is not visible in the DOM.
     */
    private isNotVisible(element: HTMLElement) {
      return this.hasZeroDimensions(element) || this.hasNoClientRects(element);
    }

    /**
     * Checks if the element has inline styles that make it hidden.
     */
    private hasHiddenStyle(element: HTMLElement) {
      const { display, opacity, visibility } = element.style;
      return display === 'none' || opacity === '0' || visibility === 'hidden' || visibility === 'collapse';
    }

    /**
     * Checks if the element is hidden by a computed style.
     */
    private hasComputedHidden(element: HTMLElement) {
      const computedStyle = getComputedStyle(element);
      return computedStyle.visibility === 'hidden' || computedStyle.height === '0' || computedStyle.display === 'none';
    }

    /**
     * Checks if the element is hidden from the user.
     */
    private isHidden(element: HTMLElement) {
      return (
        element.hasAttribute('hidden')
        || (element.getAttribute('aria-hidden') === 'true')
        || this.hasHiddenStyle(element)
        || this.isNotVisible(element)
        || this.hasComputedHidden(element)
      );
    }

    /**
     * Checks if the element is not tabbable.
     */
    private isNotTabbable(element: HTMLElement) {
      return element.getAttribute('tabindex') === '-1';
    }

    /**
     * Checks if the element is interactive.
     */
    private isInteractiveElement(element: HTMLElement): boolean {
      const interactiveTags = new Set([
        'BUTTON',
        'DETAILS',
        'EMBED',
        'IFRAME',
        'SELECT',
        'TEXTAREA',
      ]);

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
     */
    private isFocusable(element: HTMLElement) {
      if (this.isHidden(element) || this.isNotTabbable(element)) {
        return false;
      }
      return this.isInteractiveElement(element);
    }

    /**
     * Recursively finds all focusable elements within the given root and its descendants.
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
    override setFocusableElements() {
      if (!this.shadowRoot) return;

      this.focusableElements = this.findFocusable(this.shadowRoot, new Set());
    }

    /**
     * Sets the initial focus within the component.
     */
    override setInitialFocus(prefferableElement: number = 0) {
      if (this.focusableElements.length === 0) return;

      if (this.enablePreventScroll) {
        document.body.style.overflow = 'hidden';
      }

      if (this.focusableElements[prefferableElement]) {
        this.focusTrapIndex = prefferableElement;
        this.focusableElements[prefferableElement].focus();
      }
    }

    /**
     * Calculates the next index for the focus trap.
     */
    private calculateNextIndex(currentIndex: number, step: number) {
      const { length } = this.focusableElements;
      const wrapFocus = this.shouldWrapFocus();

      if (currentIndex === -1) {
        return step > 0 ? 0 : length - 1;
      }

      let nextIndex = currentIndex + step;

      if (wrapFocus) {
        if (nextIndex < 0) nextIndex = length - 1;
        if (nextIndex >= length) nextIndex = 0;
      } else {
        if (nextIndex < 0) nextIndex = 0;
        if (nextIndex >= length) nextIndex = length - 1;
      }

      return nextIndex;
    }

    /**
     * Finds the deepest active element within the shadow DOM.
     */
    private getDeepActiveElement() {
      let host = document.activeElement || document.body;
      while (host && host.shadowRoot && host.shadowRoot.activeElement) {
        host = host.shadowRoot.activeElement;
      }
      return host;
    }

    /**
     * Finds the index of the active element within the focusable elements.
     */
    private findElement(activeElement: HTMLElement) {
      return this.focusableElements.findIndex((element) => this.isEqualFocusNode(activeElement, element));
    }

    /**
     * Checks if the active element is the same as the given element.
     */
    private isEqualFocusNode(activeElement: HTMLElement, element: HTMLElement) {
      if (activeElement.nodeType >= 0) {
        return element.isEqualNode(activeElement) && element === activeElement;
      }
      return false;
    }

    /**
     * Traps focus within the component.
     */
    private trapFocus(direction: boolean) {
      if (this.focusableElements.length === 0) return;

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
     * Handles the keydown event to trap focus within the component.
     */
    private handleKeydown(event: KeyboardEvent) {
      if (!this.enableFocusTrap || !this.focusableElements.length) {
        return;
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        this.trapFocus(event.shiftKey);
      }
    }

    override connectedCallback() {
      super.connectedCallback();
      this.addEventListener('keydown', this.handleKeydown);
    }

    override disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener('keydown', this.handleKeydown);
    }
  }
  return FocusTrap as Constructor<FocusTrapClassInterface & FocusTrapClass> & T;
};
