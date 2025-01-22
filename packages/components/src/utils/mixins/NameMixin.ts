import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface NameMixinInterface {
  name: string;
}

export const NameMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
  /**
   * Indicates the name of the component group (ex: checkbox, radio group).
   * They are used to group elements in a form together.
   * @default ''
   */
    @property({ reflect: true, type: String }) name = '';
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<NameMixinInterface> & T;
};
