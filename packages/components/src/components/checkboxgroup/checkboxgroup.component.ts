import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';
import styles from './checkboxgroup.styles';

/**
 * `mdc-checkboxgroup` component allows you to select multiple options from a predefined list.
 * It is commonly used in forms where multiple selections are required, such as preferences, filters, or categories.
 *
 * A checkbox group typically consists of multiple checkboxes grouped together,
 * each representing a selectable option. You can check or uncheck options based on their preferences.
 *
 * For a checkbox group with no header text, please provide `data-aria-label` attribute for accessibility purpose.
 *
 * @dependency mdc-text
 *
 * @tagname mdc-checkboxgroup
 *
 * @slot help-text - This is a help text slot.
 * @slot default - This is a default slot for children.
 */
class Checkboxgroup extends DataAriaLabelMixin(Component) {
  /**
   * The header text of the checkboxgroup.
   */
  @property({ type: String, attribute: 'header-text' }) headerText?: string;

  public override render() {
    const header = this.headerText
      ? html`
        <mdc-text id="header-text" class="header-text" tagname="${TEXT_TAGS.SPAN}" type="${TEXT_TYPE.BODY_LARGE_BOLD}">
          ${this.headerText}
        </mdc-text>`
      : nothing;
    return html`
      <div class="container" role="group" aria-labelledby="header-text" aria-label="${this.dataAriaLabel ?? ''}">
        ${header}
        <slot name="help-text"></slot>
        <slot></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkboxgroup;
