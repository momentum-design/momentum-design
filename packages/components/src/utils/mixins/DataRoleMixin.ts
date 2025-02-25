import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface DataRoleMixinInterface {
  dataRole: string | null;
}

export const DataRoleMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
  /**
   * Defines the accessibility role of the current element.
   * The `role` attribute to be set for accessibility.
   * @default null
   */
    @property({ type: String, reflect: true, attribute: 'data-role' }) dataRole: string | null = null;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<DataRoleMixinInterface> & T;
};
