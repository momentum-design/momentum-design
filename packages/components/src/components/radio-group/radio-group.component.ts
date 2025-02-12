import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { NameMixin } from '../../utils/mixins/NameMixin';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';
import styles from './radio-group.styles';

/**
 * Radio Group Component - This is the wrapper component for radio buttons which are grouped together.
 *
 * @tagname mdc-radio-group
 *
 * @slot default - This is a default/unnamed slot
 *
 */
class RadioGroup extends NameMixin(Component) {
  /**
   * The label of the radio group.
   * @default ''
   */
  @property({ type: String, attribute: 'header-text' }) headerText = '';

  /**
   * The description of the radio group.
   * @default ''
   */
  @property({ type: String }) description = '';

  /**
   * Using name property to group the radio buttons together.
   * If the name is not set, it will be set to the name of the radio group.
   */
  override firstUpdated() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      const radios = slot.assignedElements({ flatten: true })
        .filter((el) => el.tagName === 'MDC-RADIO');
      radios.forEach((radio) => {
        if (!radio.hasAttribute('name')) {
          radio.setAttribute('name', this.name);
        }
      });
    }
  }

  public override render() {
    const header = this.headerText ? html`
      <mdc-text
        class="mdc-radio-group__label"
        tagname="${TEXT_TAGS.SPAN}"
        type="${TEXT_TYPE.BODY_LARGE_BOLD}">
          ${this.headerText}
      </mdc-text>` : nothing;

    const description = this.description ? html`
      <mdc-text
        class="mdc-radio-group__description"
        tagname="${TEXT_TAGS.SPAN}"
        type="${TEXT_TYPE.BODY_LARGE_REGULAR}">
          ${this.description}
      </mdc-text>` : nothing;

    return html`
        ${header}
        ${description}
        <div class="mdc-radio-group" role="radiogroup">
          <slot></slot>
        </div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default RadioGroup;
