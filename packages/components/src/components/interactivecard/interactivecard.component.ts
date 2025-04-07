import { CSSResult, html, nothing } from 'lit';
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
  override renderHeader() {
    if (!this.cardTitle) {
      return nothing;
    }
    return html`<div part="header">
      ${this.renderIcon()}
      ${this.renderTitle()}
      <div part="icon-button"><slot name="icon-button"></slot></div>
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
        <slot name="footer"></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Card.styles, ...styles];
}

export default InteractiveCard;
