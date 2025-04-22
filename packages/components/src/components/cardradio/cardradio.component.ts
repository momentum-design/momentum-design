import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './cardradio.styles';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import Card from '../card/card.component';

/**
 * cardradio component extends `mdc-card` and supports radio selection interaction addtionally.
 *
 * While using this component within a form or group of cards, make sure cards are in a role = "radio-group".
 * This card would have events for selected and unselected (similar to radio)
 *
 * **Note**: This is a single selection card i.e. interacting anywhere on the card would toggle the checked state.
 * Make sure to pass only non-interactable elements within the slots.
 *
 * Make sure to pass the `card-title` mandatorily for this card.
 *
 * @tagname mdc-cardradio
 *
 * @dependency mdc-icon
 * @dependency mdc-staticradio
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
 * @event change - (React: onChange) Event that gets dispatched when the card state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the card receives focus.
 *
 */
class CardRadio extends DisabledMixin(TabIndexMixin(Card)) {
 /**
   * The checked state of the card
   * @default false
   */
 @property({ type: Boolean, reflect: true })
 checked = false;

 /**
   * The name of the radio.
   * @default ''
   */
 @property({ type: String })
 name = '';

 constructor() {
   super();
   this.addEventListener('click', this.toggleChecked);
   this.addEventListener('keydown', this.toggleOnEnter);
   this.addEventListener('keyup', this.toggleOnSpace);
 }

 override connectedCallback() {
   super.connectedCallback();
   this.role = 'radio';
 }

 override update(changedProperties: PropertyValues<CardRadio>) {
   super.update(changedProperties);
   if (changedProperties.has('checked')) {
     this.setAttribute('aria-checked', `${this.checked}`);
   }
   if (changedProperties.has('disabled')) {
     this.setAttribute('aria-disabled', `${this.disabled}`);
   }
 }

 /**
  * Toggles the checked state
  */
 private toggleChecked() {
   this.checked = !this.checked;
 }

 /**
  * Toggles the checked state when enter key is used
  * @param event - The keyboard event
  */
 private toggleOnEnter(event: KeyboardEvent) {
   if (event.key === 'Enter') {
     this.toggleChecked();
   }
 }

 /**
  * Toggles the checked state when space key is used
  * @param event - The keyboard event
  */
 private toggleOnSpace(event: KeyboardEvent) {
   if (event.key === ' ') {
     this.toggleChecked();
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
     <mdc-staticradio part="check" 
        ?checked="${this.checked}" 
        ?disabled="${this.disabled}"></mdc-staticradio>
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

export default CardRadio;
