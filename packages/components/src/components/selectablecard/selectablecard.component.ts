import { CSSResult, nothing, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './selectablecard.styles';
import Card from '../card/card.component';
import type { RoleType, SelectionType } from './selectablecard.types';
import { CHECK_MARK, DEFAULTS, ROLE, SELECTION_TYPE } from './selectablecard.constants';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

/**
 * selectablecard component extends `mdc-card` and supports selection interaction addtionally.
 * There are 3 different selection types for this card
 * - Check mark icon
 * - Checkbox
 * - Radio
 *
 * While using this component within a form or group of cards,
 * make sure cards are in a role = "checkbox-group" (for checkbox and check mark) or
 *  "radio-group" (for radio).
 * Selectable card would have events for selected and unselected (similar to checkbox/radio)
 *
 * **Note**: This is a single selection card i.e. interacting anywhere on the card would toggle the checked state.
 * Make sure to pass only non-interactable elements within the slots.
 *
 * @tagname mdc-selectable-card
 *
 * @dependency mdc-icon
 * @dependency mdc-decorative-checkbox
 * @dependency mdc-decorative-radio
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
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class SelectableCard extends DisabledMixin(TabIndexMixin(Card)) {
  /**
   * The checked state of the card
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  /**
   * The selection type of the card. It can either be set to 'check', 'checkbox' or 'radio'
   * @default 'check'
   */
  @property({ type: String, attribute: 'selection-type' })
  selectionType: SelectionType = DEFAULTS.SELECTION_TYPE;

  /**
   * The role of the card. It can either be set to 'checkbox' or 'radio'
   * @default 'checkbox'
   */
  @property({ type: String })
  override role: RoleType = DEFAULTS.ROLE;

  constructor() {
    super();
    this.addEventListener('click', this.toggleChecked);
    this.addEventListener('keydown', this.toggleOnEnter);
    this.addEventListener('keyup', this.toggleOnSpace);
  }

  override update(changedProperties: PropertyValues<SelectableCard>) {
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
   * @param event The keyboard event
   */
  private toggleOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.toggleChecked();
    }
  }

  /**
   * Toggles the checked state when space key is used
   * @param event The keyboard event
   */
  private toggleOnSpace(event: KeyboardEvent) {
    if (event.key === ' ') {
      this.toggleChecked();
    }
  }

  /**
   * Renders the selection icon or checkbox or radio based on the selection type
   * @returns The selection icon or checkbox or radio
   */
  private renderSelection() {
    const ICON_NAME = this.checked ? CHECK_MARK.CHECKED : CHECK_MARK.DEFAULT;
    switch (this.selectionType) {
      case SELECTION_TYPE.CHECK: {
        this.role = ROLE.CHECKBOX;
        return html`<mdc-icon part="check check-icon" 
                    size="${DEFAULTS.ICON_SIZE}"
                    length-unit="${DEFAULTS.ICON_LENGTH_UNIT}" 
                    name="${ICON_NAME}"></mdc-icon>`;
      }

      case SELECTION_TYPE.CHECKBOX: {
        this.role = ROLE.CHECKBOX;
        return html`<mdc-decorative-checkbox part="check" 
                    ?checked="${this.checked}" 
                    ?disabled="${this.disabled}"></mdc-decorative-checkbox>`;
      }
      case SELECTION_TYPE.RADIO: {
        this.role = ROLE.RADIO;
        return html`<mdc-decorative-radio part="check" 
                    ?checked="${this.checked}" 
                    ?disabled="${this.disabled}"></mdc-decorative-radio>`;
      }
      default: return nothing;
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
      ${this.renderSelection()}
    </div>`;
  }

  public static override styles: Array<CSSResult> = [...Card.styles, ...styles];
}

export default SelectableCard;
