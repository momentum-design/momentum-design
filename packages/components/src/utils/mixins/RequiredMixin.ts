import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface RequiredMixinInterface {
  required: boolean;
}

export const RequiredMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
  /**
   * Indicates whether the component is required.
   * When the component is required, it is a mandatory field.
   * @default false
   */
    @property({ reflect: true, type: Boolean }) required = false;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<RequiredMixinInterface> & T;
};
