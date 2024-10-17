import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface FocusRingMixinInterface {}

export const FocusRingMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class FocusRingClass extends superClass {
    @property({ type: Boolean, reflect: true })
    protected focusRingVisible = false;

    private handleFocusBound = this.handleFocus.bind(this);

    private handleBlurBound = this.handleBlur.bind(this);

    constructor(...args: any[]) {
      super(...args);
      this.addEventListener('focusin', this.handleFocusBound);
      this.addEventListener('focusout', this.handleBlurBound);
    }

    handleFocus() {
      this.focusRingVisible = true;
    }

    handleBlur() {
      this.focusRingVisible = false;
    }

    override disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener('focusin', this.handleFocusBound);
      this.removeEventListener('focusout', this.handleBlurBound);
    }
  }

  return FocusRingClass as Constructor<FocusRingMixinInterface> & T;
};
