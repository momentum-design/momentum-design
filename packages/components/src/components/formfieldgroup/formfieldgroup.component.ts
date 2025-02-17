import { CSSResult, html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import styles from './formfieldgroup.styles';
import type { TextType } from '../text/text.types';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';

/**
 * `mdc-formfieldgroup` component, groups any list of components together.
 *
 * The header and description text are displayed above the items with accessible labels.
 * All items in this form field group have a gap of 12px (0.75rem) each.
 *
 * @tagname mdc-formfieldgroup
 *
 * @slot default - This is a default/unnamed slot
 */
class FormfieldGroup extends DataAriaLabelMixin(Component) {
  /**
   * The header text of the group.
   */
  @property({ type: String, attribute: 'header-text', reflect: true }) headerText?: string;

  /**
   * The description of the group.
   */
  @property({ type: String, attribute: 'description-text', reflect: true }) descriptionText?: string;

  @state() protected isRadio = false;

  private renderText(type: TextType, id: string, cssPart: string, value?: string): TemplateResult | typeof nothing {
    if (!value) {
      return nothing;
    }
    return html`<mdc-text id=${id} type="${type}" tagname="${TEXT_TAGS.SPAN}" part="${cssPart}">${value}</mdc-text>`;
  }

  public override render() {
    return html`
      <div
        part="container"
        role="${this.isRadio ? 'radiogroup' : 'group'}"
        aria-labelledby="header-id"
        aria-describedby="description-id"
        aria-label="${this.dataAriaLabel ?? ''}"
      >
        ${this.renderText(TEXT_TYPE.BODY_LARGE_BOLD, 'header-id', 'header', this.headerText)}
        ${this.renderText(TEXT_TYPE.BODY_LARGE_REGULAR, 'description-id', 'description', this.descriptionText)}
        <slot></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default FormfieldGroup;
