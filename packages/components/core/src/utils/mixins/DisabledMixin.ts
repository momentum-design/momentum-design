import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export interface DisabledMixinInterface {
  disabled: boolean;
}

export const DisabledMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InnerMixinClass extends superClass {
    @property({ reflect: true, type: Boolean })
    public disabled = false;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<DisabledMixinInterface> & T;
};
