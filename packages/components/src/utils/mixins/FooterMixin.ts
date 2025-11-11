/* eslint-disable max-classes-per-file */
import { LitElement, html, TemplateResult } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';

import { DEFAULTS, VARIANTS } from '../../components/card/card.constants';
import { BUTTON_COLORS, BUTTON_VARIANTS } from '../../components/button/button.constants';

import type { Constructor } from './index.types';

export declare class FooterMixinInterface {
  protected footerLink?: Array<HTMLElement>;

  protected footerButtonPrimary?: Array<HTMLElement>;

  protected footerButtonSecondary?: Array<HTMLElement>;

  protected updateFooterButtonColors(variant: string): void;

  protected handleFooterSlot(tagname: string, variant?: string): void;

  protected renderFooter(): TemplateResult;
}

export const FooterMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * The links in the footer section
     * @internal
     */
    @queryAssignedElements({ slot: 'footer-link' })
    protected footerLink?: Array<HTMLElement>;

    /**
     * The primary buttons in the footer section
     * @internal
     */
    @queryAssignedElements({ slot: 'footer-button-primary' })
    protected footerButtonPrimary?: Array<HTMLElement>;

    /**
     * The secondary buttons in the footer section
     * @internal
     */
    @queryAssignedElements({ slot: 'footer-button-secondary' })
    protected footerButtonSecondary?: Array<HTMLElement>;

    /**
     * Updates the color of the footer buttons based on the variant.
     * If the variant is promotional, the color is promotional, else default.
     *
     * @internal
     */
  protected updateFooterButtonColors(variant: string) {
      const footerButtons = [...(this.footerButtonPrimary || []), ...(this.footerButtonSecondary || [])];
      footerButtons?.forEach(button => {
        if (!button.hasAttribute('color')) {
          if (variant === VARIANTS.PROMOTIONAL) {
            button.setAttribute('color', BUTTON_COLORS.PROMOTIONAL);
          } else {
            button.setAttribute('color', BUTTON_COLORS.DEFAULT);
          }
        }
      });
  }

    /**
     * Filters and renders only the following content into the footer section and removes anything other than it
     * - One mdc-link element in the footer-link slot
     * - One secondary variant of the mdc-button element in the footer-button-secondary slot
     * - One primary variant of the mdc-button element in the footer-button-primary slot
     *
     * @internal
     */
    protected handleFooterSlot(tagname: string, variant?: string) {
      let arrayItems: Array<HTMLElement> = [];
      if (tagname === DEFAULTS.LINK && this.footerLink?.length) {
        arrayItems = this.footerLink;
      } else if (
        tagname === DEFAULTS.BUTTON &&
        variant === BUTTON_VARIANTS.PRIMARY &&
        this.footerButtonPrimary?.length
      ) {
        arrayItems = this.footerButtonPrimary;
      } else if (
        tagname === DEFAULTS.BUTTON &&
        variant === BUTTON_VARIANTS.SECONDARY &&
        this.footerButtonSecondary?.length
      ) {
        arrayItems = this.footerButtonSecondary;
      }
      // if there are more than one instance, remove them.
      for (let i = 1; i < arrayItems.length; i += 1) {
        arrayItems[i].remove();
      }
      arrayItems.forEach(element => {
        // remove the element if it doesn't match with the tagname
        if (!element.matches(tagname)) {
          element.remove();
        }
        // set the variant if it is provided
        if (variant) {
          element.setAttribute('variant', variant);
        }
      });
    }

    /**
     * Renders the footer of the card if footer-link,
     * footer-button-primary, or footer-button-secondary slots are provided
     * @returns The footer element
     */
    protected renderFooter() {
      return html` <slot name="footer">
        <div part="footer">
          <slot name="footer-link" @slotchange=${() => this.handleFooterSlot(DEFAULTS.LINK)}></slot>
          <slot
            name="footer-button-secondary"
            @slotchange=${() => this.handleFooterSlot(DEFAULTS.BUTTON, BUTTON_VARIANTS.SECONDARY)}
          ></slot>
          <slot
            name="footer-button-primary"
            @slotchange=${() => this.handleFooterSlot(DEFAULTS.BUTTON, BUTTON_VARIANTS.PRIMARY)}
          ></slot>
        </div>
      </slot>`;
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<FooterMixinInterface> & T;
};
