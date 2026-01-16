import { LitElement } from 'lit';

import type { Constructor } from './index.types';

export declare abstract class OverflowMixinInterface {
  protected get overflowElement(): HTMLElement;

  public isWidthOverflowing(): boolean;
}

export const OverflowMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  abstract class InnerMixinClass extends superClass {
    /**
     * Gets the element whose overflow will be monitored.
     *
     * @internal
     */
    protected get overflowElement(): HTMLElement {
      return this;
    }

    /**
     * Determines if the content of the overflow element is overflowing its width.
     *
     * @returns if the scroll width of the overflow element is greater than its client width.
     */
    public isWidthOverflowing(): boolean {
      const el = this.overflowElement;
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
