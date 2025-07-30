import { CSSResult, html, nothing } from 'lit';

import Buttonsimple from '../buttonsimple/buttonsimple.component';
import Card from '../card/card.component';
import type { ButtonSize } from '../buttonsimple/buttonsimple.types';
import { CardComponentMixin } from '../../utils/mixins/CardComponentMixin';

import styles from './cardbutton.styles';

/**
 * cardbutton component looks like a card and behaves as a button component.
 *
 * **Note**: This is a single selection card i.e. interacting anywhere on the card would trigger the click event.
 * Make sure to pass only non-interactable elements within the slots.
 *
 * @tagname mdc-cardbutton
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @event click - (React: onClick) Event that gets dispatched when the card is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the card.
 * It fires the click event when enter key is used.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the card.
 * It fires the click event when space key is used.
 * @event focus - (React: onFocus) Event that gets dispatched when the card receives focus.
 *
 * @slot before-body - This slot is for passing the content before the body
 * @slot body - This slot is for passing the text content for the card
 * @slot after-body - This slot is for passing the content after the body
 * @slot footer-link - This slot is for passing `mdc-link` component within the footer section.
 * @slot footer-button-primary - This slot is for passing primary variant of `mdc-button` component within the footer section.
 *
 * @csspart header - The header part of the card
 * @csspart icon - The icon part of the card header
 * @csspart body - The body part of the card
 * @csspart image - The image part of the card
 * @csspart footer - The footer part of the card
 * @csspart footer-link - The link part of the card footer
 * @csspart footer-button-primary - The primary button part of the card footer
 * @csspart footer-button-secondary - The secondary button part of the card footer
 * @csspart icon-button - The icon button part of the card header
 * @csspart text - The text part of the card
 *
 * @cssproperty --mdc-card-width - The width of the card
 */
class CardButton extends CardComponentMixin(Buttonsimple) {
  override connectedCallback(): void {
    super.connectedCallback();
    this.active = undefined as unknown as boolean;
    this.size = undefined as unknown as ButtonSize;
  }

  /**
   * Renders the header of the card if title is provided
   * @returns The header element
   */
  protected renderHeader() {
    if (!this.cardTitle) {
      return nothing;
    }
    return html`<div part="header">${this.renderIcon()} ${this.renderTitle()}</div>`;
  }

  public override render() {
    return html`
      ${this.renderImage()}
      <div part="body">
        ${this.renderHeader()}
        <slot name="before-body"></slot>
        <slot name="body"></slot>
        <slot name="after-body"></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Card.styles, ...styles];
}

export default CardButton;
