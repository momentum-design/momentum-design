import type { PropertyValues } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';

import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { ROLE } from '../../utils/roles';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TAG_NAME as OPTION_TAGNAME } from '../option/option.constants';

import { HEADER_ID } from './optgroup.constants';
import styles from './optgroup.styles';

/**
 * optgroup component, which creates a grouping of mdc-option within a listbox element.
 *
 * @dependency mdc-text
 *
 * @tagname mdc-optgroup
 *
 * @slot default - This is a default slot for mdc-option elements.
 *
 * @cssproperty --mdc-optgroup-disabled-color - Allows customization of the disabled option color.
 *
 * @csspart header-text - The header text of the optgroup.
 */
class OptGroup extends DataAriaLabelMixin(DisabledMixin(Component)) {
  /**
   * The header text to be displayed on the top of the options list.
   */
  @property({ type: String, reflect: true }) label?: string;

  /** @internal */
  @queryAssignedElements({ selector: OPTION_TAGNAME })
  options!: Array<HTMLElement>;

  private setDisabledForAllOptions(): void {
    this.options.forEach(element => {
      if (this.disabled) {
        element.setAttribute('disabled', '');
      } else {
        element.removeAttribute('disabled');
      }
    });
  }

  public override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('disabled')) {
      this.setDisabledForAllOptions();
    }
  }

  public override render() {
    const headerText = this.label
      ? html`
          <mdc-text
            id="${HEADER_ID}"
            part="header-text"
            type="${TYPE.BODY_MIDSIZE_BOLD}"
            tagname="${VALID_TEXT_TAGS.SPAN}"
            >${this.label}</mdc-text
          >
        `
      : nothing;
    return html`
      <div
        role="${ROLE.GROUP}"
        aria-labelledby="${this.label ? HEADER_ID : ''}"
        aria-label="${this.dataAriaLabel ?? ''}"
      >
        ${headerText}
        <slot role="${ROLE.PRESENTATION}"></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default OptGroup;
