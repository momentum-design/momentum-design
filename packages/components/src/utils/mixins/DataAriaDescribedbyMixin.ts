import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface DataAriaDescribedbyMixinInterface {
    dataAriaDescribedby: string | null;
}

export const DataAriaDescribedbyMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
  /**
   * Defines an ID reference to one or more elements that provide additional
   * descriptive information for the current element.
   * The `aria-describedby` attribute to be set for accessibility.
   * @default null
   */
    @property({ type: String, reflect: true, attribute: 'data-aria-describedby' })
    dataAriaDescribedby: string | null = null;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<DataAriaDescribedbyMixinInterface> & T;
};
