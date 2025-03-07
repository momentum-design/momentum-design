import type { PropertyValues } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { HEADER_ID } from './optgroup.constants';
import styles from './optgroup.styles';

/**
 * optgroup component, which creates a grouping of options within a listbox element.
 *
 * @dependency mdc-text
 *
 * @tagname mdc-optgroup
 *
 * @slot default - This is a default slot for mdc-option elements.
 */
class Optgroup extends DataAriaLabelMixin(DisabledMixin(Component)) {
  @queryAssignedElements({ selector: 'mdc-option' })
  options!: Array<HTMLElement>;

  /**
   * The header text to be displayed on the top of the options list.
   */
  @property({ type: String, reflect: true }) label?: string;

  private setDisabledForAllOptions(): void {
    this.options.forEach((element) => {
      if (this.disabled) {
        element.setAttribute('disabled', 'true');
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
    const headerText = this.label ? html`
      <mdc-text
        id="${HEADER_ID}"
        part="header-text"
        type="${TYPE.BODY_MIDSIZE_BOLD}"
        tagname="${VALID_TEXT_TAGS.SPAN}"
      >${this.label}</mdc-text>
    ` : nothing;
    return html`
      <div
        role="group"
        aria-labelledby="${this.label ? HEADER_ID : ''}"
        aria-label="${this.dataAriaLabel ?? ''}"
      >
        ${headerText}
        <slot role="presentation"></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Optgroup;
