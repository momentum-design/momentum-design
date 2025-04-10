import { CSSResult, html, nothing } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import styles from './interactivecard.styles';
import Card from '../card/card.component';

/**
 * interactivecard component, which ...
 *
 * @tagname mdc-interactivecard
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class InteractiveCard extends Card {
  @queryAssignedElements({ slot: 'icon-button' })
  iconButtons?: Array<HTMLElement>;

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
        <slot name="slot1"></slot>
        <slot name="body"></slot>
        <slot name="slot2"></slot>
        <div part="footer"><slot name="footer" @slotchange=${this.handleFooterSlot}></slot></div>
      </div>
    `;
}

  public static override styles: Array<CSSResult> = [...Card.styles, ...styles];
}

export default InteractiveCard;
