import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import ControlTypeProvider from '../../components/controltypeprovider';
import providerUtils from '../provider';
import type { ControlType } from '../../components/controltypeprovider/controltypeprovider.types';
import { DEFAULTS, VALID_VALUES } from '../../components/controltypeprovider/controltypeprovider.constants';

import type { Constructor } from './index.types';

export interface ControlTypeMixinInterface {
  controlType: ControlType;
}

export const ControlTypeMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    private readonly controlTypeProviderContext = providerUtils.consume({
      host: this,
      context: ControlTypeProvider.Context,
    });

    /**
     * Indicates whether the component is controlled or uncontrolled.
     * - 'controlled' it will not handle any interaction itself, e.g. toggling a checkbox.
     * - 'uncontrolled' it will handle interactions
     * - undefined it will get the value from controltypeprovider, or default to 'uncontrolled'
     * @default undefined
     */
    @property({ type: String, attribute: 'control-type', reflect: true })
    public controlType?: ControlType;

    override willUpdate() {
      if (!(this.controlType && VALID_VALUES.includes(this.controlType))) {
        if (this.controlTypeProviderContext.value) {
          this.controlType = this.controlTypeProviderContext.value;
        } else {
          this.controlType = DEFAULTS.CONTROL_TYPE;
        }
      }
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<ControlTypeMixinInterface> & T;
};
