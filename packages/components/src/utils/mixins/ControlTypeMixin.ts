import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import providerUtils from '../provider';
import ControlTypeProvider from '../../components/controltypeprovider';

import type { Constructor } from './index.types';

export interface ControlTypeMixinInterface {
  attributeControlType: string;
  controlType: 'controlled' | 'uncontrolled';
}

export type ControlType = 'controlled' | 'uncontrolled';

const DEFAULT_CONTROL_TYPE = 'uncontrolled';

const VALID_CONTROL_TYPES: ControlType[] = ['controlled', 'uncontrolled'];

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
     * - undefined it will get the value from the provider, or default to 'uncontrolled'
     * @default undefined
     */
    @property({ type: String, attribute: 'control-type' }) attributeControlType?: string;

    public get controlType(): ControlType {
      const providedControlType = this.controlTypeProviderContext.value?.controlType;
      let controlType: ControlType;
      if (this.attributeControlType && this.attributeControlType in VALID_CONTROL_TYPES) {
        controlType = this.attributeControlType as ControlType;
      } else if (providedControlType && providedControlType in VALID_CONTROL_TYPES) {
        controlType = providedControlType;
      } else {
        controlType = DEFAULT_CONTROL_TYPE;
      }
      return controlType;
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as Constructor<ControlTypeMixinInterface> & T;
};
