import type { CSSResult } from 'lit';
import { html, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { VALID_TEXT_TAGS as TEXT_TAGS, TYPE as TEXT_TYPE } from '../text/text.constants';
import type { TextType } from '../text/text.types';
import { ROLE } from './formfieldgroup.constants';
import styles from './formfieldgroup.styles';

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

  /**
  * @internal
  * This is used to set the role of the compoonent as `radiogroup` if this is true and to 'group' if it is false.
  */
  protected isRadio = false;

  /** @internal */
  private headerId = 'header-id';

  /** @internal */
  private descriptionId = 'description-id';

  private renderText(type: TextType, id: string, cssPart: string, value?: string): TemplateResult | typeof nothing {
    if (!value) {
      return nothing;
    }
    return html`<mdc-text id="${id}" type="${type}" tagname="${TEXT_TAGS.SPAN}" part="${cssPart}">${value}</mdc-text>`;
  }

  public override render() {
    return html`
      <div
        part="container"
        role="${this.isRadio ? ROLE.RADIOGROUP : ROLE.GROUP}"
        aria-labelledby="${this.headerId}"
        aria-describedby="${this.descriptionId}"
        aria-label="${this.dataAriaLabel ?? ''}"
      >
        ${this.renderText(TEXT_TYPE.BODY_LARGE_BOLD, this.headerId, 'header', this.headerText)}
        ${this.renderText(TEXT_TYPE.BODY_LARGE_REGULAR, this.descriptionId, 'description', this.descriptionText)}
        <slot></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default FormfieldGroup;
