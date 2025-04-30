import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import styles from './card.styles';
import { Component } from '../../models';
import { VARIANTS, DEFAULTS } from './card.constants';
import { BUTTON_COLORS, BUTTON_VARIANTS } from '../button/button.constants';
import { CardComponentMixin } from '../../utils/mixins/CardComponentMixin';

/**
 * The card component allows users to organize information in a structured and tangible
 * format that is visually appealing. `mdc-card` is a static component that supports
 * the following features:
 * - Image
 * - Header
 *    - Icon
 *    - Title
 *    - Subtitle
 * - Body
 *
 * The card can either be vertically or horizontally oriented.
 *
 * There are 2 variants for the card that represent the border styling - 'border' and 'ghost'.
 *
 * To make this card interactive, use the following slots:
 * - `icon-button`: This slot supports action icon buttons in the header section (maximum of 3 buttons).
 * - `footer-link`: This slot is for passing `mdc-link` component within the footer section.
 * - `footer-button-primary`: This slot is for passing primary variant of
 * `mdc-button` component within the footer section.
 * - `footer-button-secondary`: This slot is for passing secondary variant of `mdc-button` component
 * within the footer section.
 *
 * Interactive card additionally supports 'promotional' variant that represents the border styling - 'promotional'.
 *
 * @slot before-body - This slot is for passing the content before the body
 * @slot body - This slot is for passing the text content for the card
 * @slot after-body - This slot is for passing the content after the body
 * @slot footer-link - This slot is for passing `mdc-link` component within the footer section.
 * @slot footer-button-primary - This slot is for passing primary variant of
 * `mdc-button` component within the footer section.
 * @slot footer-button-secondary - This slot is for passing secondary variant of `mdc-button` component
 * within the footer section.
 *
 * @tagname mdc-card
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot before-body - This slot is for passing the content before the body
 * @slot body - This slot is for passing the text content for the card
 * @slot after-body - This slot is for passing the content after the body
 *
 */
class Card extends CardComponentMixin(Component) {
   /**
   * The icon buttons in the header section
   * @internal
   */
   @queryAssignedElements({ slot: 'icon-button' })
   iconButtons?: Array<HTMLElement>;

   /**
    * The links in the footer section
    * @internal
    */
   @queryAssignedElements({ slot: 'footer-link' })
   footerLink?: Array<HTMLElement>;

   /**
    * The primary buttons in the footer section
    * @internal
    */
   @queryAssignedElements({ slot: 'footer-button-primary' })
   footerButtonPrimary?: Array<HTMLElement>;

   /**
    * The secondary buttons in the footer section
    * @internal
    *
    */
   @queryAssignedElements({ slot: 'footer-button-secondary' })
   footerButtonSecondary?: Array<HTMLElement>;

   override update(changedProperties: PropertyValues<Card>) {
     super.update(changedProperties);
     if (changedProperties.has('variant')) {
       this.updateFooterButtonColors();
     }
   }

   /**
    * Handles the icon buttons in the header section and sets its variant for styling.
    * It also limits the number of buttons to 3.
    * @internal
    */
   private handleIconButtons = () => {
     this.iconButtons?.forEach((element) => {
       if (!element.matches(DEFAULTS.BUTTON) && element.getAttribute('data-btn-type') !== 'icon') {
         element.remove();
       } else {
         element.setAttribute('variant', BUTTON_VARIANTS.TERTIARY);
         element.setAttribute('size', '32');
       }
     });
     // limit to show only first 3 buttons defined in the slot
     if (this.iconButtons && this.iconButtons.length > 3) {
       for (let i = 3; i < this.iconButtons.length; i += 1) {
         this.iconButtons[i].remove();
       }
     }
   };

   /**
    * Filters and renders only the following content into the footer section and removes anything other than it
    * - One mdc-link element in the footer-link slot
    * - One secondary variant of the mdc-button element in the footer-button-secondary slot
    * - One primary variant of the mdc-button element in the footer-button-primary slot
    *
    * @internal
    */
 private handleFooterSlot = (tagname: string, variant = '') => {
   let arrayItems: Array<HTMLElement> = [];
   if (tagname === DEFAULTS.LINK && this.footerLink?.length) {
     arrayItems = this.footerLink;
   } else if (tagname === DEFAULTS.BUTTON && variant === BUTTON_VARIANTS.PRIMARY && this.footerButtonPrimary?.length) {
     arrayItems = this.footerButtonPrimary;
   } else if (tagname === DEFAULTS.BUTTON
    && variant === BUTTON_VARIANTS.SECONDARY && this.footerButtonSecondary?.length) {
     arrayItems = this.footerButtonSecondary;
   }
   // if there are more than one instance, remove them.
   if (arrayItems.length > 1) {
     for (let i = 1; i < arrayItems.length; i += 1) {
       arrayItems[i].remove();
     }
   }
   arrayItems.forEach((element) => {
     // remove the element if it doesn't match with the tagname
     if (!element.matches(tagname)) {
       element.remove();
     }
     // set the variant if it is provided
     if (variant) {
       element.setAttribute('variant', variant);
     }
   });
 };

 /**
  * Updates the color of the footer buttons based on the variant.
  * If the variant is promotional, the color is promotional, else default.
  *
  * @internal
  */
 private updateFooterButtonColors = () => {
   const footerButtons = [...(this.footerButtonPrimary || []), ...(this.footerButtonSecondary || [])];
   footerButtons?.forEach((button) => {
     if (this.variant === VARIANTS.PROMOTIONAL) {
       button.setAttribute('color', BUTTON_COLORS.PROMOTIONAL);
     } else {
       button.setAttribute('color', BUTTON_COLORS.DEFAULT);
     }
   });
 };

 /**
   * Renders the header of the card if title is provided
   * @returns The header element
   */
 protected renderHeader() {
   if (!this.cardTitle) {
     return nothing;
   }
   return html`<div part="header">
      ${this.renderIcon()}
      ${this.renderTitle()}
      <div part="icon-button"><slot name="icon-button" @slotchange=${this.handleIconButtons}></slot></div>
    </div>`;
 }

 public override render() {
   return html`
  ${this.renderImage()}
    <div part="body">
    ${this.renderHeader()}
      <slot name="before-body"></slot>
      <slot name="body"></slot>
      <slot name="after-body"></slot>
      <div part="footer">
        <slot name="footer-link" @slotchange=${() => this.handleFooterSlot(DEFAULTS.LINK)}></slot>
        <slot name="footer-button-secondary" 
        @slotchange=${() => this.handleFooterSlot(DEFAULTS.BUTTON, BUTTON_VARIANTS.SECONDARY)}></slot>
        <slot name="footer-button-primary" 
        @slotchange=${() => this.handleFooterSlot(DEFAULTS.BUTTON, BUTTON_VARIANTS.PRIMARY)}></slot>
      </div>
    </div>
    `;
 }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Card;
