import { LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface AutoFocusMixinInterface {
  autofocus?: boolean;
}

export const AutoFocusMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * This property indicates whether the element should receive focus automatically when it is rendered.
     * @default false
     */
    @property({ type: Boolean, reflect: true })
    override autofocus: boolean = false;

    public override firstUpdated(changedProperties: PropertyValues): void {
      super.firstUpdated(changedProperties);
      if (this.autofocus) {
        (this as HTMLElement).focus();
      }
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<AutoFocusMixinInterface> & T;
};
