import { LitElement } from 'lit';

import type { Constructor } from './index.types';

export declare abstract class KeyDownHandledMixinInterface {
  /**
   * Register key down event as handled to prevent further processing by other components
   */
  protected keyDownEventHandled(): void;
}

/**
 * Mixin to provide abstract key mapping for navigation and actions keys.
 */
export const KeyDownHandledMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  abstract class InnerMixinClass extends superClass {
    constructor(...rest: any[]) {
      super(...rest);

      this.addEventListener('keydown', this.keyDownEventHandledHandler);
      this.addEventListener('navbeforeprocess', this.handleNavBeforeProcessEvent);
    }

    /**
     * Flag to track if the keydown event has been handled.
     * @internal
     */
    private keyDownEventHandledFlag: boolean = false;

    /** @see KeyToActionInterface.keyDownEventHandled */
    protected keyDownEventHandled(): void {
      this.keyDownEventHandledFlag = true;
    }

    /**
     * Reset keyDownEventHadnle to false
     * @internal
     */
    private keyDownEventHandledHandler = (): void => {
      setTimeout(() => {
        this.keyDownEventHandledFlag = false;
      });
    };

    /**
     * Handle navbeforeprocess event to prevent default behavior if the keydown event has been handled by the combobox.
     * @internal
     */
    private handleNavBeforeProcessEvent = (event: Event): void => {
      if (this.keyDownEventHandledFlag) {
        event.preventDefault();
      }
    };
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<KeyDownHandledMixinInterface> & T;
};
