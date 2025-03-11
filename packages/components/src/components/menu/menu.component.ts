import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './menu.styles';
import { Component } from '../../models';

/**
 * menu component, which ...
 *
 * @dependency mdc-divider
 *
 * @tagname mdc-menu
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Menu extends Component {
  /**
   * The header arrow of the menu.
   */
  @property({ type: String, attribute: 'header-arrow', reflect: true })
  headerText?: string;

  /**
   * The header state of the menu.
   */
  @property({ type: String, attribute: 'header-state', reflect: true })
  headerState?: string;

  /**
   * The footer of menu
   */
  @property({ type: Boolean, reflect: true })
  footer?: boolean = true;

  /**
   *
   */
  @property({ type: Boolean, reflect: true })
  counter?: boolean = true;

  /**
   * The counter of the menu footer
   */
  @property({ type: Number, reflect: true, attribute: 'counter-number' })
  counterNumber?: number = 0;

  @property({ type: Boolean, reflect: true, attribute: 'clear-all' })
  clearAll?: boolean = true;

  @property({ type: Boolean, reflect: true, attribute: 'save-cancel' })
  saveCancel?: boolean = true;

  public override render() {
    return html`
    <div class="header">
      <mdc-button variant="tertiary">
        <mdc-text type="body-midsize-bold" tagname="span">${this.headerText}</mdc-text>
      </mdc-button>
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
        <mdc-button variant="tertiary">Clear All</mdc-button>
        ` : nothing}
        ${this.saveCancel ? html`
        <mdc-button variant="secondary">Cancel</mdc-button>
        <mdc-button>Save</mdc-button>
        ` : nothing}
      </div>
    </div>
    ` : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Menu;
