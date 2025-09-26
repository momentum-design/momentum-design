import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import type { IconNames } from '../icon/icon.types';

import styles from './listheader.styles';

/**
 * Listheader component is used to display a header in a list.
 * It can include icons before and after the header text, and allows for additional content via slots.
 *
 * @tagname mdc-listheader
 *
 * @slot default - to pass in actionable content like buttons or links
 *
 * @cssproperty --mdc-listheader-height - height of the header
 * @cssproperty --mdc-listheader-padding - padding around the header content
 * @cssproperty --mdc-listheader-gap - gap between content
 *
 * @csspart header-text - The header text of list header
 * @csspart postfix-icon - The postfix icon of list header
 * @csspart prefix-icon - The prefix icon of list header
 */
class Listheader extends Component {
  /**
   * Name of the icon rendered before the text
   *
   * If not provided, no icon will be rendered and text will be aligned to the start.
   */
  @property({ type: String, attribute: 'prefix-icon' }) prefixIcon?: IconNames;

  /**
   * Name of the icon rendered after the slot & text
   *
   * If not provided, no icon will be rendered and content will be aligned to the end.
   */
  @property({ type: String, attribute: 'postfix-icon' }) postfixIcon?: IconNames;

  /**
   * Text to be rendered in the header
   */
  @property({ type: String, attribute: 'header-text' }) headerText?: string;

  /**
   * Disables the header, making it visually styled as disabled.
   *
   * NOTE: slot content will still be interactive unless individually disabled.
   * Make sure to handle the disabled state of any actionable elements inside the slot.
   *
   * @default false
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  public override render() {
    return html`
      ${this.prefixIcon
        ? html`<mdc-icon
            part="prefix-icon"
            name="${this.prefixIcon}"
            aria-hidden="true"
            size="1"
            length-unit="rem"
          ></mdc-icon>`
        : nothing}
      ${this.headerText
        ? html`<mdc-text part="header-text" type="body-midsize-bold" tagname="span" aria-hidden="true"
            >${this.headerText}</mdc-text
          >`
        : nothing}
      <slot></slot>
      ${this.postfixIcon
        ? html`<mdc-icon
            part="postfix-icon"
            name="${this.postfixIcon}"
            aria-hidden="true"
            size="1"
            length-unit="rem"
          ></mdc-icon>`
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Listheader;
