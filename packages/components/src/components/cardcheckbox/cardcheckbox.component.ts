import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import Card from '../card/card.component';
import { ROLE } from '../../utils/roles';
import { KEYS } from '../../utils/keys';

import { CHECK_MARK, DEFAULTS, SELECTION_TYPE } from './cardcheckbox.constants';
import type { SelectionType } from './cardcheckbox.types';
import styles from './cardcheckbox.styles';

/**
 * cardcheckbox component extends `mdc-card` and supports checkbox selection interaction.
 * Multiple cards can be checked simultaneously.
 *
 * ## Features
 * - Supports two orientations (vertical and horizontal), three visual variants (border, ghost, and promotional), and two selection types (check icon or checkbox component).
 * - Interacting anywhere on the card toggles the checked state and dispatches a `change` event.
 * - Card has `role="checkbox"` and manages `aria-checked` and `aria-disabled` attributes automatically.
 *
 * ## Usage
 * - The `card-title` attribute is required.
 * - When using within a form or group, wrap cards in a container with `role="group"` and provide an `aria-label`.
 *
 * **Note**: Only pass non-interactable elements within the slots to avoid nested interactive elements.
 *
 * @tagname mdc-cardcheckbox
 *
 * @dependency mdc-icon
 * @dependency mdc-staticcheckbox
 * @dependency mdc-text
 *
 * @slot before-body - This slot is for passing the content before the body
 * @slot body - This slot is for passing the text content for the card
 * @slot after-body - This slot is for passing the content after the body
 * @slot footer-link - This slot is for passing `mdc-link` component within the footer section.
 * @slot footer-button-primary - This slot is for passing primary variant of `mdc-button` component within the footer section.
 *
 * @event click - (React: onClick) Event that gets dispatched when the card is clicked. It toggles the checked state.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the card.
 * It toggles the checked state when enter key is used.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the card.
 * It toggles the checked state when space key is used.
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
class CardCheckbox extends DisabledMixin(TabIndexMixin(Card)) {
  /**
   * The checked state of the card
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  /**
   * The selection type of the card that determines the visual indicator.
   * - `check`: Shows a check icon when selected
   * - `checkbox`: Shows a checkbox component when selected or unselected
   * @default 'check'
   */
  @property({ type: String, attribute: 'selection-type', reflect: true })
  selectionType: SelectionType = DEFAULTS.SELECTION_TYPE;

  constructor() {
    super();
    this.addEventListener('click', this.toggleChecked.bind(this));
    this.addEventListener('keydown', this.toggleOnEnter.bind(this));
    this.addEventListener('keydown', this.preventSpaceScroll.bind(this));
    this.addEventListener('keyup', this.toggleOnSpace.bind(this));
  }

  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.CHECKBOX;
  }

  override update(changedProperties: PropertyValues<CardCheckbox>) {
    super.update(changedProperties);
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', `${this.checked}`);
    }
    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', `${this.disabled}`);
      this.tabIndex = this.disabled ? -1 : 0;
    }
  }

  /**
   * Toggles the checked state
   */
  private toggleChecked() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }
  }

  /**
   * Toggles the checked state when enter key is used
   * @param event - The keyboard event
   */
  private toggleOnEnter(event: KeyboardEvent) {
    if (event.key === KEYS.ENTER) {
      this.toggleChecked();
    }
  }

  /**
   * Prevents space key from scrolling the page
   * @param event - The keyboard event
   */
  private preventSpaceScroll(event: KeyboardEvent) {
    if (event.key === KEYS.SPACE) {
      event.preventDefault();
    }
  }

  /**
   * Toggles the checked state when space key is used
   * @param event - The keyboard event
   */
  private toggleOnSpace(event: KeyboardEvent) {
    if (event.key === KEYS.SPACE) {
      event.preventDefault();
      this.toggleChecked();
    }
  }

  /**
   * Renders the selection icon or checkbox based on the selection type
   * @returns The selection icon or checkbox
   */
  private renderSelection() {
    const ICON_NAME = this.checked ? CHECK_MARK.CHECKED : CHECK_MARK.DEFAULT;
    switch (this.selectionType) {
      case SELECTION_TYPE.CHECK: {
        return html`<mdc-icon
          part="check check-icon"
          size="${DEFAULTS.ICON_SIZE}"
          length-unit="${DEFAULTS.ICON_LENGTH_UNIT}"
          name="${ICON_NAME}"
        ></mdc-icon>`;
      }

      case SELECTION_TYPE.CHECKBOX: {
        return html`<mdc-staticcheckbox
          part="check"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>`;
      }
      default:
        return nothing;
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
    return html`<div part="header">${this.renderIcon()} ${this.renderTitle()} ${this.renderSelection()}</div>`;
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

export default CardCheckbox;
