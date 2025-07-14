import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { Constructor } from './index.types';

export interface DataAriaLabelMixinInterface {
  dataAriaLabel: string | null;
}

export const DataAriaLabelMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * Defines a string value that labels the current element.
     * The Aria-Label attribute to be set for accessibility.
     * @default null
     */
    @property({ type: String, reflect: true, attribute: 'data-aria-label' }) dataAriaLabel: string | null = null;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<DataAriaLabelMixinInterface> & T;
};
