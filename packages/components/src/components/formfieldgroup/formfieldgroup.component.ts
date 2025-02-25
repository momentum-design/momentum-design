import type { CSSResult } from 'lit';
import { html, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { VALID_TEXT_TAGS as TEXT_TAGS, TYPE as TEXT_TYPE } from '../text/text.constants';
import type { TextType } from '../text/text.types';
import { DEFAULTS, ROLE } from './formfieldgroup.constants';
import styles from './formfieldgroup.styles';

/**
 * `mdc-formfieldgroup` component, groups the form field components together.
 * All passed in children will have a gap of 12px (0.75rem) each applied.
 *
 * This component is specifically for creating a `checkbox` group and a `toggle` group component.
 * For the radiogroup use the RadioGroup component instead.
 *
 * The header text and description text are displayed above the items with accessible labels.<br/>
 * The consumer has to provide atleast the header-text or the aria-label,
 * like one of them <b>has</b> to be passed in always, otherwise its not accessible.
 *
 * The role will be set to `group`.
 * The aria-label will be set with the data-aria-label property.
 * The aria-labelledby will be set with the header id which contains the header text information.
 * The aria-describedby will be set with the description id which contains the description text information.
 *
 * @tagname mdc-formfieldgroup
 *
 * @slot default - This is a default slot for checkbox or toggle components.
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
   * This is used to set the role of the component as `radiogroup` if this is true and to 'group' if it is false.
   */
  protected isRadio = false;

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
        aria-labelledby="${DEFAULTS.HEADER_ID}"
        aria-describedby="${DEFAULTS.DESCRIPTION_ID}"
        aria-label="${this.dataAriaLabel ?? ''}"
      >
        ${this.renderText(TEXT_TYPE.BODY_MIDSIZE_BOLD, DEFAULTS.HEADER_ID, 'header', this.headerText)}
        ${this.renderText(TEXT_TYPE.BODY_MIDSIZE_REGULAR, DEFAULTS.DESCRIPTION_ID, 'description', this.descriptionText)}
        <slot></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default FormfieldGroup;
