/* eslint-disable no-param-reassign */
import { LitElement } from 'lit';

import type { Component } from '../../models';
import { OVERLAY_BACKDROP_Z_INDEX_OFFSET, OVERLAY_TRIGGER_Z_INDEX_OFFSET } from '../controllers/DepthManager';

import type { Constructor } from './index.types';

export declare abstract class BackdropMixinInterface {
  abstract zIndex: number;

  protected backdropElement: HTMLElement | null;

  protected isBackdropInvisible?: boolean;

  protected backdropAppendTo?: string;

  protected createBackdrop(classNamePrefix: string): void;

  protected removeBackdrop(): void;

  protected keepElementAboveBackdrop(element?: HTMLElement | null): void;

  protected moveElementBackAfterBackdropRemoval(element?: HTMLElement | null): void;
}

export const BackdropMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  abstract class Backdrop extends superClass {
    /**
     * IMPLEMENT THIS IN YOUR COMPONENT.
     *
     * The z-index of the component where the backdrop will be attached to.
     *
     * The backdrop itself will have a z-index of `zIndex - OVERLAY_BACKDROP_Z_INDEX_OFFSET`.
     * The trigger element of the backdrop will have a z-index of `zIndex - OVERLAY_TRIGGER_Z_INDEX_OFFSET`,
     * to make sure that it is above the backdrop and clickable.
     */
    abstract zIndex: number;

    /**
     * Set this property to true to make the backdrop invisible.
     * This is useful for components that do want a backdrop which stops interaction,
     * but do not want the backdrop to be visible.
     * @internal
     */
    protected isBackdropInvisible?: boolean = false;

    /**
     * The id of the parent element to which the backdrop will be appended.
     *
     * @internal
     */
    protected backdropAppendTo?: string;

    /** @internal */
    protected backdropElement: HTMLElement | null = null;

    /** @internal */
    private triggerElementCache: WeakRef<HTMLElement> | null = null;

    /** @internal */
    private elementOriginalStyle?: Pick<CSSStyleDeclaration, 'zIndex' | 'position'>;

    override update(changedProperties: Map<string | number | symbol, unknown>): void {
      super.update(changedProperties);

      if (changedProperties.has('zIndex') && this.backdropElement) {
        // Update the backdrop z-index if the zIndex property changes
        this.backdropElement.style.zIndex = `${this.zIndex + OVERLAY_BACKDROP_Z_INDEX_OFFSET}`;

        const triggerEl = this.triggerElementCache?.deref();
        if (triggerEl) {
          triggerEl.style.zIndex = `${this.zIndex + OVERLAY_TRIGGER_Z_INDEX_OFFSET}`;
        }
      }
    }

    /**
     * Creates a backdrop element with the specified class name prefix.
     *
     * @param classNamePrefix - The prefix for the backdrop class name.
     * @internal
     */
    protected createBackdrop(classNamePrefix: string): void {
      const backdrop = document.createElement('div');
      backdrop.classList.add(`${classNamePrefix}-backdrop`);
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .${classNamePrefix}-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${
            this.isBackdropInvisible ? `transparent` : `var(--mds-color-theme-common-overlays-secondary-normal)`
          };
          z-index: ${this.zIndex + OVERLAY_BACKDROP_Z_INDEX_OFFSET};
        }
      `;
      backdrop.appendChild(styleElement);

      const backdropAppendToElement = document.getElementById(this.backdropAppendTo!);
      const elementToAppendTo = backdropAppendToElement || this.parentElement;

      elementToAppendTo?.appendChild(backdrop);
      this.backdropElement = backdrop;
    }

    /**
     * Removes the backdrop element if it exists.
     * @internal
     */
    protected removeBackdrop(): void {
      if (this.backdropElement) {
        this.backdropElement.remove();
        this.backdropElement = null;
      }
    }

    /**
     * Keeps the specified element above the backdrop by adjusting its z-index and position.
     *
     * This method stores the original z-index and position of the element,
     * and sets the z-index to the component's zIndex value.
     * If the element's position is not already set to 'fixed' or 'absolute',
     * it will be set to 'relative'.
     * @param element - The element to keep above the backdrop.
     * @internal
     */
    protected keepElementAboveBackdrop(element?: HTMLElement | null): void {
      if (!element) {
        return;
      }

      this.triggerElementCache = new WeakRef(element);
      // Store the original z-index and position of the element
      this.elementOriginalStyle = {
        zIndex: element.style.zIndex,
        position: element.style.position,
      };

      // Set the z-index and position to ensure the element is above the backdrop
      element.style.zIndex = `${this.zIndex + OVERLAY_TRIGGER_Z_INDEX_OFFSET}`;
      // Only set the position to relative if it is not already set to fixed or absolute
      if (!['fixed', 'absolute'].includes(window.getComputedStyle(element).position)) {
        element.style.position = 'relative';
      }
    }

    /**
     * Moves the element back to its original z-index and position after the backdrop is removed.
     *
     * This method restores the original z-index and position of the element
     * that was kept above the backdrop (by using `keepElementAboveBackdrop`).
     *
     * @param element - The element which styling should be restored.
     * @internal
     */
    protected moveElementBackAfterBackdropRemoval(element?: HTMLElement | null): void {
      if (!element || !this.elementOriginalStyle) {
        return;
      }
      // Restore the original z-index and position of the element
      element.style.zIndex = this.elementOriginalStyle.zIndex;
      element.style.position = this.elementOriginalStyle.position;

      // Clear the stored original style
      this.elementOriginalStyle = undefined;
      this.triggerElementCache = null;
    }
  }

  return Backdrop as unknown as Constructor<Component & BackdropMixinInterface> & T;
};
