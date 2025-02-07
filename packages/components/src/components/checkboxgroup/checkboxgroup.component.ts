import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';
import { TYPE as CHECKBOXGROUP_TYPE } from './checkboxgroup.constants';
import styles from './checkboxgroup.styles';

/**
 * checkboxgroup component, which ...
 *
 * @tagname mdc-checkboxgroup
 *
 * @slot default - This is a default/unnamed slot
 */
class Checkboxgroup extends DataAriaLabelMixin(Component) {
  /**
   * The type of the checkbox group, either 'parent' or nothing.
   */
  @property({ type: String }) type?: string;

  /**
   * The label of the parent checkbox in the checkboxgroup.
   */
  @property({ type: String }) label?: string;

  /**
   * The header text of the checkboxgroup.
   */
  @property({ type: String, attribute: 'header-text' }) headerText?: string;

  private handleParentCheckboxChange(): void {}

  private handleSlotChange(): void {}

  public override render() {
    const header = this.headerText
      ? html`<mdc-text
        class="header-text"
        tagname="${TEXT_TAGS.SPAN}"
        type="${TEXT_TYPE.BODY_LARGE_BOLD}"
      >
        ${this.headerText}
      </mdc-text>`
      : nothing;
    const parentCheckbox = this.type === CHECKBOXGROUP_TYPE.PARENT
      ? html`
        <mdc-checkbox
          label="${ifDefined(this.label)}"
          data-aria-label="${this.dataAriaLabel ?? ''}"
          @change="${this.handleParentCheckboxChange}"
        ></mdc-checkbox>`
      : nothing;
    return html`
      ${header} ${parentCheckbox}
      <slot @slotchange=${this.handleSlotChange}></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Checkboxgroup;
