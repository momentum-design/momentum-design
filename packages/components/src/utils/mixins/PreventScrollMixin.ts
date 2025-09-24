import { LitElement } from 'lit';

import type { Component } from '../../models';

import type { Constructor } from './index.types';

export declare abstract class PreventScrollMixinInterface {
  protected abstract preventScroll?: boolean;

  protected activatePreventScroll(): void;

  protected deactivatePreventScroll(): void;
}

export const PreventScrollMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  abstract class PreventScroll extends superClass {
    /**
     * Prevent outside scrolling when element is shown.
     *
     * IMPLEMENT THIS IN YOUR COMPONENT.
     * @internal
     */
    protected abstract preventScroll: boolean;

    /**
     * @internal
     */
    private isPreventScrollActive: boolean = false;

    /**
     * @internal
     */
    private previousDocumentBodyStyleOverflow: string = '';

    protected activatePreventScroll() {
      if (this.preventScroll && !this.isPreventScrollActive) {
        this.isPreventScrollActive = true;
        // Store the previous body overflow style
        this.previousDocumentBodyStyleOverflow = document.body.style.overflow;
        // Set body overflow to hidden to prevent scrolling
        document.body.style.overflow = 'hidden';
      }
    }

    protected deactivatePreventScroll() {
      if (this.isPreventScrollActive) {
        this.isPreventScrollActive = false;
        // Restore the previous body overflow style
        document.body.style.overflow = this.previousDocumentBodyStyleOverflow;
      }
    }
  }

  return PreventScroll as unknown as Constructor<Component & PreventScrollMixinInterface> & T;
};
