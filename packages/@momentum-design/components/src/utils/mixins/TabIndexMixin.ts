import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface TabIndexMixinInterface {
  tabIndex: number;
}

export const TabIndexMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
    @property({ reflect: true, type: Number, attribute: 'tabindex' })
    public override tabIndex = 0;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<TabIndexMixinInterface> & T;
};
