import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { Constructor } from './index.types';

export interface DataAriaLabelMixinInterface {
  dataAriaLabel: string | null;
}

/**
 * This mixin adds a `data-aria-label` property to the component, which can be used to set the Aria-Label attribute for accessibility.
 *
 * It is useful when a component inside the shadow DOM needs to be labeled for accessibility purposes.
 * The problem with using `aria-label` directly on the host element is that the Screen Reader will read both
 * the host element and the component inside the shadow DOM, which can lead to redundant or confusing information being read out.
 *
 * So instead the consumer can use `data-aria-label` to set the Aria-Label attribute on the component inside the shadow DOM.
 *
 * For example all the input component which has a native input element inside the shadow DOM can use this mixin to allow the
 * consumer to set the Aria-Label attribute on the native input element for better accessibility.
 * @param superClass
 * @constructor
 */
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
