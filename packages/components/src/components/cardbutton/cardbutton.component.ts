import { CSSResult, html, nothing } from 'lit';
import styles from './cardbutton.styles';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import Card from '../card/card.component';

/**
 * cardbutton component extends `mdc-card` and behaves like a button.
 *
 * **Note**: This is a single selection card i.e. interacting anywhere on the card would trigger the click event.
 * Make sure to pass only non-interactable elements within the slots.
 *
 * @tagname mdc-cardbutton
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @slot before-body - This slot is for passing the content before the body
 * @slot body - This slot is for passing the text content for the card
 * @slot after-body - This slot is for passing the content after the body
 *
 * @event click - (React: onClick) Event that gets dispatched when the card is clicked. It toggles the checked state.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the card.
 * It toggles the checked state when enter key is used.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the card.
 * It toggles the checked state when space key is used.
 * @event focus - (React: onFocus) Event that gets dispatched when the card receives focus.
 *
 */
class CardButton extends DisabledMixin(TabIndexMixin(Card)) {
  constructor() {
    super();
    this.addEventListener('click', this.executeAction);
    this.addEventListener('keydown', this.toggleOnEnter);
    this.addEventListener('keyup', this.toggleOnSpace);
  }

  override connectedCallback() {
    super.connectedCallback();
    this.role = 'button';
  }

  /**
  * Dispatches a click event
  */
  private executeAction() {
  }

  /**
  * Toggles the checked state when enter key is used
  * @param event - The keyboard event
  */
  private toggleOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.executeAction();
    }
  }

  /**
  * Toggles the checked state when space key is used
  * @param event - The keyboard event
  */
  private toggleOnSpace(event: KeyboardEvent) {
    if (event.key === ' ') {
      this.executeAction();
    }
  }

  /**
  * Renders the header of the card
  * @returns The header of the card
  */
  override renderHeader() {
    if (!this.cardTitle) {
      return nothing;
    }
    return html`<div part="header">
     ${this.renderIcon()}
     ${this.renderTitle()}
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
    </div>
  `;
  }

  public static override styles: Array<CSSResult> = [...Card.styles, ...styles];
}

export default CardButton;
