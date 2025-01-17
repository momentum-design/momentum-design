import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface ReadonlyMixinInterface {
  readonly: boolean;
}

export const ReadonlyMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
  /**
   * Indicates whether the component is readonly.
   * When the component is readonly, it is not editable.
   * @default false
   */
    @property({ reflect: true, type: Boolean }) readonly = false;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<ReadonlyMixinInterface> & T;
};
