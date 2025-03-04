import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface DataAriaLabelledbyMixinInterface {
    dataAriaLabelledby: string | null;
}

export const DataAriaLabelledbyMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
  /**
   * Defines an ID reference to one or more elements that label the current element.
   * The `aria-labelledby` attribute to be set for accessibility.
   * @default null
   */
    @property({ type: String, reflect: true, attribute: 'data-aria-labelledby' })
    dataAriaLabelledby: string | null = null;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<DataAriaLabelledbyMixinInterface> & T;
};
