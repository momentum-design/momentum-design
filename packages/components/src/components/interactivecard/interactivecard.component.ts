import { CSSResult, html, nothing } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import styles from './interactivecard.styles';
import Card from '../card/card.component';

/**
 * interactivecard component extends `mdc-card` and supports interactive elements as features.
 *
 * It supports icon buttons in the header section (maximum of 3 buttons)
 * and footer section that supports links and buttons.
 *
 * @tagname mdc-interactive-card
 *
 * @slot default - This is a default/unnamed slot
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot before-body - This slot is for passing the content before the body
 * @slot body - This slot is for passing the text content for the card
 * @slot after-body - This slot is for passing the content after the body
 * @slot footer - This slot is for passing the content in the footer. It supports `mdc-link` and `mdc-button`.
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class InteractiveCard extends Card {
  /**
   * The icon buttons in the header section
   */
  @queryAssignedElements({ slot: 'icon-button' })
  iconButtons?: Array<HTMLElement>;

  /**
   * Handles the icon buttons in the header section and sets its variant for styling.
   * It also limits the number of buttons to 3.
   */
  private handleIconButtons = () => {
    if (this.iconButtons) {
      this.iconButtons.forEach((element) => {
        if (!element.matches('mdc-button') && element.getAttribute('data-btn-type') !== 'icon') {
          element.remove();
        } else {
          element.setAttribute('variant', 'tertiary');
          element.setAttribute('size', '32');
        }
      });
    }
    // limit to show only first 3 buttons defined in the slot
    if (this.iconButtons && this.iconButtons.length > 3) {
      for (let i = 3; i < this.iconButtons.length; i += 1) {
        this.iconButtons[i].remove();
      }
    }
  };

private handleFooterSlot = () => {
// handke to support max of 1 link and 2 buttons?
};

/**
 * Renders the header section of the card. It includes the icon-button slot in addition to title, subtitle and icon.
 * @returns The header section of the card
 */
override renderHeader() {
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
        <div part="footer"><slot name="footer" @slotchange=${this.handleFooterSlot}></slot></div>
      </div>
    `;
}

  public static override styles: Array<CSSResult> = [...Card.styles, ...styles];
}

export default InteractiveCard;
