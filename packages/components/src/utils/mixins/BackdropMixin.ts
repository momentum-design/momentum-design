/* eslint-disable no-param-reassign */
import { LitElement } from 'lit';

import type { Component } from '../../models';
import { OVERLAY_BACKDROP_Z_INDEX_OFFSET, OVERLAY_TRIGGER_Z_INDEX_OFFSET } from '../controllers/DepthManager';

import type { Constructor } from './index.types';

const DEFAULT_BACKDROP_TRANSITION_IN = 'opacity 200ms cubic-bezier(0.44, 0, 0, 1)';
const DEFAULT_BACKDROP_TRANSITION_OUT = 'opacity 100ms cubic-bezier(0.44, 0, 0, 1)';
const BACKDROP_TRANSITION_DURATION_FALLBACK_MS = 100;

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
    private backdropClassNamePrefix: string | null = null;

    /** @internal */
    private backdropRemoveTimeout: ReturnType<typeof setTimeout> | null = null;

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

    /** @internal */
    private prefersReducedMotion(): boolean {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    /** @internal */
    private getBackdropTransition(direction: 'in' | 'out'): string {
      const customProperty =
        direction === 'in' ? '--mdc-backdrop-mixin-transition-in' : '--mdc-backdrop-mixin-transition-out';
      const transition = getComputedStyle(this).getPropertyValue(customProperty).trim();
      const fallback = direction === 'in' ? DEFAULT_BACKDROP_TRANSITION_IN : DEFAULT_BACKDROP_TRANSITION_OUT;

      return transition || fallback;
    }

    /** @internal */
    private getBackdropVisibleClassName(): string | null {
      if (!this.backdropClassNamePrefix) {
        return null;
      }

      return `${this.backdropClassNamePrefix}-backdrop--visible`;
    }

    /** @internal */
    private getBackdropTransitionDurationMs(backdrop: HTMLElement): number {
      const { transitionDuration } = window.getComputedStyle(backdrop);
      const durations = transitionDuration.split(',').map(duration => {
        const trimmed = duration.trim();

        if (trimmed.endsWith('ms')) {
          return Number.parseFloat(trimmed);
        }

        if (trimmed.endsWith('s')) {
          return Number.parseFloat(trimmed) * 1000;
        }

        return 0;
      });

      return Math.max(...durations, BACKDROP_TRANSITION_DURATION_FALLBACK_MS);
    }

    /** @internal */
    private clearBackdropRemoveTimeout(): void {
      if (this.backdropRemoveTimeout !== null) {
        clearTimeout(this.backdropRemoveTimeout);
        this.backdropRemoveTimeout = null;
      }
    }

    /** @internal */
    private finalizeBackdropRemoval(backdrop: HTMLElement): void {
      this.clearBackdropRemoveTimeout();

      if (this.backdropElement !== backdrop) {
        return;
      }

      backdrop.remove();
      this.backdropElement = null;
      this.backdropClassNamePrefix = null;
    }

    /** @internal */
    private detachBackdropImmediately(): void {
      if (!this.backdropElement) {
        return;
      }

      const backdrop = this.backdropElement;
      this.backdropElement = null;
      this.backdropClassNamePrefix = null;
      this.clearBackdropRemoveTimeout();
      backdrop.remove();
    }

    /**
     * Creates a backdrop element with the specified class name prefix.
     *
     * @param classNamePrefix - The prefix for the backdrop class name.
     * @internal
     */
    protected createBackdrop(classNamePrefix: string): void {
      this.detachBackdropImmediately();

      const backdrop = document.createElement('div');
      const visibleClassName = `${classNamePrefix}-backdrop--visible`;

      backdrop.classList.add(`${classNamePrefix}-backdrop`);
      const styleElement = document.createElement('style');
      const bgColor = this.isBackdropInvisible
        ? 'transparent'
        : getComputedStyle(this).getPropertyValue('--mdc-backdrop-mixin-background-color') ||
          `var(--mds-color-theme-common-overlays-secondary-normal)`;
      const enterTransition = this.getBackdropTransition('in');
      const exitTransition = this.getBackdropTransition('out');
      styleElement.textContent = `
        .${classNamePrefix}-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${bgColor};
          z-index: ${this.zIndex + OVERLAY_BACKDROP_Z_INDEX_OFFSET};
          opacity: 0;
          transition: ${exitTransition};
        }
        .${classNamePrefix}-backdrop.${visibleClassName} {
          opacity: 1;
          transition: ${enterTransition};
        }
        @media (prefers-reduced-motion: reduce) {
          .${classNamePrefix}-backdrop,
          .${classNamePrefix}-backdrop.${visibleClassName} {
            transition: none;
          }
        }
      `;
      backdrop.appendChild(styleElement);

      const backdropAppendToElement = document.getElementById(this.backdropAppendTo!);
      const elementToAppendTo = backdropAppendToElement || this.parentElement;

      elementToAppendTo?.appendChild(backdrop);
      this.backdropElement = backdrop;
      this.backdropClassNamePrefix = classNamePrefix;

      if (this.prefersReducedMotion()) {
        backdrop.classList.add(visibleClassName);
        return;
      }

      requestAnimationFrame(() => {
        backdrop.classList.add(visibleClassName);
      });
    }

    /**
     * Removes the backdrop element if it exists.
     * @internal
     */
    protected removeBackdrop(): void {
      if (!this.backdropElement) {
        return;
      }

      const backdrop = this.backdropElement;
      const visibleClassName = this.getBackdropVisibleClassName();

      if (this.prefersReducedMotion() || !visibleClassName || !backdrop.classList.contains(visibleClassName)) {
        this.finalizeBackdropRemoval(backdrop);
        return;
      }

      backdrop.classList.remove(visibleClassName);

      const onTransitionEnd = (event: TransitionEvent) => {
        if (event.target !== backdrop || event.propertyName !== 'opacity') {
          return;
        }

        backdrop.removeEventListener('transitionend', onTransitionEnd);
        this.finalizeBackdropRemoval(backdrop);
      };

      backdrop.addEventListener('transitionend', onTransitionEnd);

      const durationMs = this.getBackdropTransitionDurationMs(backdrop);
      this.backdropRemoveTimeout = setTimeout(() => {
        backdrop.removeEventListener('transitionend', onTransitionEnd);
        this.finalizeBackdropRemoval(backdrop);
      }, durationMs + 50);
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
