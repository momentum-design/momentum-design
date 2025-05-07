import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface DisabledMixinInterface {
  disabled: boolean;
}

export const DisabledMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * Indicates whether the component is disabled.
     * When the component is disabled for user interaction; it is not focusable or clickable.
     * @default undefined
     */
    @property({ reflect: true, type: Boolean }) disabled?: boolean;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<DisabledMixinInterface> & T;
};
