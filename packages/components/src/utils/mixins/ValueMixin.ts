import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface ValueMixinInterface {
  value: string;
}

export const ValueMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
  /**
   * Indicates the value of the component group (ex: input, checkbox, radio, select etc...)
   * @default ''
   */
    @property({ reflect: true, type: String }) value = '';
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<ValueMixinInterface> & T;
};
