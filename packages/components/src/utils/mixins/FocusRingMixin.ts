import { LitElement } from 'lit';
import { Constructor } from '../types';

/**
 * Events that the focus ring listens to.
 */
const EVENTS: (keyof HTMLElementEventMap)[] = ['focus', 'blur'];

/**
 * A mixin that adds focus ring visibility handling to a LitElement.
 *
 * @param superClass - The superclass to extend.
 * @returns A class that extends the provided superclass with focus ring functionality.
 */
export const FocusRingMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class FocusRingClass extends superClass {
    /**
     * Indicates if the focus ring is visible.
     * Set to true on focus and false on blur.
    */
    protected focusRingVisible = false;

    /**
     * Creates an instance of the FocusRingClass.
     * @param args - Arguments to be passed to the superclass constructor.
     */
    constructor(...args: any[]) {
      super(...args);
      EVENTS.forEach((event) => {
        this.addEventListener(event, this.handleEvent);
      });
    }

    /**
     * Handles focus and blur events to show/hide the focus ring.
     */
    private handleEvent = (event: Event) => {
      if (event instanceof FocusEvent) {
        switch (event.type) {
          case 'focus':
            this.focusRingVisible = true;
            break;
          case 'blur':
            this.focusRingVisible = false;
            break;
          default:
            break;
        }
      }
    };

    /**
     * Cleanup event listeners when the element is disconnected from the DOM.
     */
    override disconnectedCallback() {
      super.disconnectedCallback();
      EVENTS.forEach((event) => this.removeEventListener(event, this.handleEvent));
    }
  }

  return FocusRingClass as T;
};