import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { Constructor } from './index.types';

export interface ControlledMixinInterface {
  controlled: boolean;
}

export const ControlledMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * Indicates whether the component is controlled.
     * When the component is controlled, it will not handle any interaction itself, e.g. toggling a checkbox.
     * @default undefined
     */
    @property({ reflect: true, type: Boolean }) controlled?: boolean;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<ControlledMixinInterface> & T;
};
