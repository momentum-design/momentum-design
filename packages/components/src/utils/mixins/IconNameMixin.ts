import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { IconNames } from '../../components/icon/icon.types';

import type { Constructor } from './index.types';

export interface IconNameMixinInterface {
  iconName: IconNames;
}

export const IconNameMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * Name of the icon (= filename).
     *
     * If no `icon-name` is provided, no icon will be rendered.
     *
     * @default undefined
     */
    @property({ type: String, attribute: 'icon-name' })
    iconName?: IconNames;
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<IconNameMixinInterface> & T;
};
