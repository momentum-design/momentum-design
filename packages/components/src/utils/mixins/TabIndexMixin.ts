import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { Constructor } from './index.types';

export interface TabIndexMixinInterface {
  tabIndex: number;
}

export const TabIndexMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
    /**
     * This property specifies the tab order of the element.
     * @default 0
     */
    @property({ reflect: true, type: Number }) override tabIndex = 0;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<TabIndexMixinInterface> & T;
};
