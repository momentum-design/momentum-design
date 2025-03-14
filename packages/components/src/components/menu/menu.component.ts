import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './menu.styles';
import { Component } from '../../models';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import type { MenuHeaderArrow } from './menu.types';
import { DEFAULTS } from './menu.constants';

/**
 * Menu component that provides a structured list with an optional header and footer.
 * Users can configure buttons, counters, and actions in the footer.
 *
 * @dependency mdc-divider
 * @dependency mdc-listitem
 *
 * @tagname mdc-menu
 *
 * @slot header - The header slot for additional content.
 * @slot list - The list slot where list items should be placed.
 *
 * @event header-click - Fired when the header is clicked.
 * @event clear-all - Fired when the "Clear All" button is clicked.
 * @event cancel - Fired when the "Cancel" button is clicked.
 * @event save - Fired when the "Save" button is clicked.
 *
 */
class Menu extends Component {
  /**
   * The header text of the menu.
   */
  @property({ type: String, attribute: 'header-text', reflect: true })
  headerText?: string;

  /**
   * The header arrow of the menu.
   * @default 'none'
   */
  @property({ type: String, attribute: 'header-arrow', reflect: true })
  headerArrow?: MenuHeaderArrow = DEFAULTS.HEADER_ARROW;

  /**
   * The header state of the menu.
   * @default false
   */
  @property({ type: Boolean, attribute: 'header-disabled', reflect: true })
  headerDisabled?: boolean = DEFAULTS.HEADER_DISABLED;

  /**
   * The footer of menu.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  footer?: boolean = DEFAULTS.FOOTER;

  /**
   * The counter selected of the menu footer.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  counter?: boolean = DEFAULTS.COUNTER;

  /**
   * The counter number of the menu footer.
   * @default 0
   */
  @property({ type: Number, reflect: true, attribute: 'counter-number' })
  counterNumber?: number = DEFAULTS.COUNTER_NUMBEWR;

  /**
   * The clear all button of the menu footer.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'clear-all' })
  clearAll?: boolean = DEFAULTS.CLEAR_ALL;

  /**
   * The clear all button text of the menu footer.
   * @default 'Clear all'
   */
  @property({ type: String, reflect: true, attribute: 'clear-all-text' })
  clearAllText?: string = DEFAULTS.CLEAR_ALL_TEXT;

  /**
   * The save and cancel button of the menu footer.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'save-cancel' })
  saveCancel?: boolean = DEFAULTS.SAVE_CANCEL;

  /**
   * The save button text of the menu footer.
   * @default 'Save'
   */
  @property({ type: String, reflect: true, attribute: 'save-text' })
  saveText?: string = DEFAULTS.SAVE_TEXT;

  /**
   * The cancel button text of the menu footer.
   * @default 'Cancel'
   */
  @property({ type: String, reflect: true, attribute: 'cancel-text' })
  cancelText?: string = DEFAULTS.CANCEL_TEXT;

  /**
   * Handles the click event on the header.
   */
  public handleHeaderClick() {
    this.dispatchEvent(new CustomEvent('header-click', { bubbles: true, composed: true }));
  }

  /**
   * Handles the click event on the clear all button.
   */
  public handleClearAllClick() {
    this.dispatchEvent(new CustomEvent('clear-all-click', { bubbles: true, composed: true }));
  }

  /**
   * Handles the click event on the cancel button.
   */
  public handleCancelClick() {
    this.dispatchEvent(new CustomEvent('cancel-click', { bubbles: true, composed: true }));
  }

  /**
   * Handles the click event on the save button.
  */
  public handleSaveClick() {
    this.dispatchEvent(new CustomEvent('save-click', { bubbles: true, composed: true }));
  }

  public override render() {
    return html`
    <div class="header">
    ${this.headerText ? html`
      <mdc-listitem 
        part="header" 
        role="button" 
        ?disabled="${this.headerDisabled}"
        variant="${LISTITEM_VARIANTS.INSET_RECTANGLE}" 
        @click=${this.handleHeaderClick}
      >
        ${this.headerArrow === 'left' ? html`
        <mdc-icon slot="leading-controls" name="arrow-left-bold"></mdc-icon>
        ` : nothing}
        <mdc-text slot="leading-controls" type="body-midsize-bold" tagname="span">${this.headerText}</mdc-text>
        ${this.headerArrow === 'right' ? html`
        <mdc-icon slot="trailing-controls" name="arrow-right-bold"></mdc-icon>
        ` : nothing}
      </mdc-listitem>
    ` : nothing}
      <slot name="header"></slot>
    </div>
    <slot name="list"></slot>
    ${this.footer ? html`
    <mdc-divider class="menu-footer-divider"></mdc-divider>
    <div class="menu-footer">
      <div class="selected-count">
        ${this.counter ? html`
        <mdc-text type="body-midsize-regular" tagname="span">
        ${this.counterNumber} Selected
        </mdc-text>
        ` : nothing}
      </div>
      <div class="footer-actions">
        ${this.clearAll ? html`
        <mdc-button variant="tertiary" @click=${this.handleClearAllClick}>${this.clearAllText}</mdc-button>
        ` : nothing}
        ${this.saveCancel ? html`
        <mdc-button variant="secondary" @click=${this.handleCancelClick}>${this.cancelText}</mdc-button>
        <mdc-button @click=${this.handleSaveClick}>${this.saveText}</mdc-button>
        ` : nothing}
      </div>
    </div>
    ` : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Menu;
