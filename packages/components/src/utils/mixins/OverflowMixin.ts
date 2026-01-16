import { LitElement } from 'lit';

import type { Constructor } from './index.types';

export declare abstract class OverflowMixinInterface {
  protected get overflowElement(): HTMLElement;

  public isWidthOverflowing(): boolean;
}

export const OverflowMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  abstract class InnerMixinClass extends superClass {
    protected get overflowElement(): HTMLElement {
      return this;
    }

    public isWidthOverflowing(): boolean {
      const el = this.overflowElement;
      console.log(el);
      return el.scrollWidth > el.clientWidth;
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<OverflowMixinInterface> & T;
};

export const doesElementInheritOverflowMixin = <T extends HTMLElement>(
  element: T,
): element is T & OverflowMixinInterface =>
  'isWidthOverflowing' in element && typeof (element as any).isWidthOverflowing === 'function';
