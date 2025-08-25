import { PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import type { Component } from '../../models';

import type { Constructor } from './index.types';

export declare class AutoFocusOnMountMixinInterface {
  autoFocusOnMount?: boolean;

  protected elementToAutoFocus: HTMLElement;
}

export const AutoFocusOnMountMixin = <T extends Constructor<Component>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * @internal
     */
    protected elementToAutoFocus: HTMLElement = this;

    /**
     * This property indicates whether the element should receive focus automatically when it is mounted.
     *
     * It will not focus if the element is re-attached to the DOM after being removed.
     *
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'auto-focus-on-mount' })
    autoFocusOnMount: boolean = false;

    public override async firstUpdated(changedProperties: PropertyValues): Promise<void> {
      super.firstUpdated(changedProperties);
      if (this.autoFocusOnMount) {
        // wait for the element to be fully updated before focusing
        await this.updateComplete;
        this.elementToAutoFocus.focus();
      }
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<Component & AutoFocusOnMountMixinInterface> & T;
};
