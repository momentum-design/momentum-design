import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';
import styles from './checkboxgroup.styles';

/**
 * `mdc-checkboxgroup` component allows you to select multiple options from a predefined list.
 * It is commonly used in forms where multiple selections are required, such as preferences, filters, or categories.
 *
 * A checkbox group typically consists of multiple checkboxes grouped together,
 * each representing a selectable option. You can check or uncheck options based on their preferences.
 *
 * @dependency mdc-text
 *
 * @tagname mdc-checkboxgroup
 *
 * @slot help-text - This is a help text slot.
 * @slot default - This is a default slot for children.
 */
class Checkboxgroup extends Component {
  /**
   * The header text of the checkboxgroup.
   */
  @property({ type: String, attribute: 'header-text' }) headerText?: string;

  constructor() {
    super();
    this.role = 'group';
  }

  public override render() {
    const header = this.headerText
      ? html`<mdc-text class="header-text" tagname="${TEXT_TAGS.SPAN}" type="${TEXT_TYPE.BODY_LARGE_BOLD}">
          ${this.headerText}
        </mdc-text>`
      : nothing;
    return html`
      ${header}
      <slot name="help-text"></slot>
      <slot></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkboxgroup;
