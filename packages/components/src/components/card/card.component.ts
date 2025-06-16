import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import styles from './card.styles';
import { Component } from '../../models';
import { DEFAULTS } from './card.constants';
import { BUTTON_VARIANTS } from '../button/button.constants';
import { CardComponentMixin } from '../../utils/mixins/CardComponentMixin';
import { CardAndDialogFooterMixin } from '../../utils/mixins/CardAndDialogFooterMixin';

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
 * @slot footer -  This slot is for passing custom footer content. Only use this if really needed,
 * using the footer-link and footer-button slots is preferred.
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
class Card extends CardComponentMixin(CardAndDialogFooterMixin(Component)) {
   /**
   * The icon buttons in the header section
   * @internal
   */
   @queryAssignedElements({ slot: 'icon-button' })
   iconButtons?: Array<HTMLElement>;

   override update(changedProperties: PropertyValues<Card>) {
     super.update(changedProperties);
     if (changedProperties.has('variant')) {
       this.updateFooterButtonColors(this.variant);
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
      ${this.renderFooter()}
    </div>
    `;
   }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Card;
