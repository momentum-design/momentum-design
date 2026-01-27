/* eslint-disable no-param-reassign */
import { CSSResult, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import Card from '../card/card.component';
import { ROLE } from '../../utils/roles';
import { KeyToActionMixin, ACTIONS } from '../../utils/mixins/KeyToActionMixin';

import styles from './cardradio.styles';

/**
 * cardradio component extends `mdc-card` and supports radio selection interaction.
 * Only one card can be selected at a time within the same group (defined by `name` attribute).
 *
 * ## Features
 * - Supports two orientations (vertical and horizontal) and three visual variants (border, ghost, and promotional).
 * - Selecting a card automatically unselects other cards in the same group and dispatches a `change` event.
 * - Supports keyboard navigation with arrow keys to move between cards in the same group.
 * - Card has `role="radio"` and manages `aria-checked` and `aria-disabled` attributes automatically.
 *
 * ## Usage
 * - Both `card-title` and `name` attributes are required.
 * - When using within a form or group, wrap cards in a container with `role="radiogroup"` and provide an `aria-label`.
 *
 * **Note**: Only pass non-interactable elements within the slots to avoid nested interactive elements.
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
 * @slot title - This slot is for passing the title of the card in the header section
 * @slot subtitle - This slot is for passing the subtitle of the card in the header section
 * @slot footer-link - This slot is for passing `mdc-link` component within the footer section.
 * @slot footer-button-primary - This slot is for passing primary variant of `mdc-button` component within the footer section.
 *
 * @event click - (React: onClick) Event that gets dispatched when the card is clicked. It selects the card and unselects others in the same group.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the card.
 * It selects the card when enter key or arrow keys are used.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the card.
 * It selects the card when space key is used.
 * @event focus - (React: onFocus) Event that gets dispatched when the card receives focus.
 * @event change - (React: onChange) Event that gets dispatched when the card's checked state changes.
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
 * @csspart check - The check part of the card
 * @csspart check-icon - The check icon part of the card
 * @csspart check-icon-button - The check icon button part of the card
 *
 * @cssproperty --mdc-card-width - The width of the card
 */
class CardRadio extends KeyToActionMixin(DisabledMixin(TabIndexMixin(Card))) {
  /**
   * The checked state of the card
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /**
   * The name of the radio group. Cards with the same name are grouped together,
   * ensuring only one card in the group can be selected at a time.
   * @default ''
   */
  @property({ type: String })
  name = '';

  constructor() {
    super();
    this.addEventListener('click', this.toggleChecked.bind(this));
    this.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.addEventListener('keyup', this.toggleOnSpace.bind(this));
  }

  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.RADIO;
  }

  /**
   * Returns all cards within the same group (name).
   */
  private getAllCardsWithinSameGroup(): CardRadio[] {
    return Array.from(document.querySelectorAll(`mdc-cardradio[name="${this.name}"]`));
  }

  /**
   * Handles the change event on the radio element.
   * This will toggle the state of the radio element.
   * Dispatches the change event.
   */
  private toggleChecked(): void {
    if (this.disabled || this.checked) return;

    const cards = this.getAllCardsWithinSameGroup();
    cards.forEach(card => {
      /**
       *  Uncheck all cards in the same group (name)
       */
      card.checked = false;
    });
    this.checked = true;

    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  setDisabled(disabled: boolean): void {
    this.setAttribute('aria-disabled', `${disabled}`);
    this.tabIndex = disabled ? -1 : 0;
  }

  override update(changedProperties: PropertyValues<CardRadio>) {
    super.update(changedProperties);
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', `${this.checked}`);
    }
    if (changedProperties.has('disabled')) {
      this.setDisabled(this.disabled);
    }
  }

  private updateCardRadio(cards: CardRadio[], index: number): void {
    cards[index].focus();
    cards[index].toggleChecked();
  }

  /**
   * Handles keydown events - Loss checked on Enter, arrow navigation, and prevents space scroll
   * @param event - The keyboard event
   */
  private handleKeyDown(event: KeyboardEvent) {
    const action = this.getActionForKeyEvent(event);
    if (action === ACTIONS.SPACE) {
      event.preventDefault();
      return;
    }

    if (this.disabled) return;

    const cards = this.getAllCardsWithinSameGroup();
    const enabledCards = cards.filter(card => !card.disabled);
    const currentIndex = enabledCards.indexOf(this);

    if (action === ACTIONS.DOWN || ACTIONS.RIGHT === action) {
      // Move focus to the next radio
      const nextIndex = (currentIndex + 1) % enabledCards.length;
      this.updateCardRadio(enabledCards, nextIndex);
    } else if (action === ACTIONS.UP || ACTIONS.LEFT === action) {
      // Move focus to the previous radio
      const prevIndex = (currentIndex - 1 + enabledCards.length) % enabledCards.length;
      this.updateCardRadio(enabledCards, prevIndex);
    }
    if (action === ACTIONS.ENTER) {
      this.toggleChecked();
    }
  }

  /**
   * Toggles the checked state when space key is used
   * @param event - The keyboard event
   */
  private toggleOnSpace(event: KeyboardEvent) {
    if (this.getActionForKeyEvent(event) === ACTIONS.SPACE) {
      this.toggleChecked();
    }
  }

  /**
   * Renders the header of the card
   * @returns The header of the card
   */
  override renderHeader() {
    return html`<div part="header">
      ${this.renderIcon()} ${this.renderTitle()}
      <mdc-staticradio part="check" ?checked="${this.checked}" ?disabled="${this.disabled}"></mdc-staticradio>
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
