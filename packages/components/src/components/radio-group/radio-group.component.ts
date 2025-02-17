import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { NameMixin } from '../../utils/mixins/NameMixin';
import { TAG_NAME as RADIO_TAGNAME } from '../radio/radio.constants';
import { TYPE as TEXT_TYPE, VALID_TEXT_TAGS as TEXT_TAGS } from '../text/text.constants';
import { TextType } from '../text/text.types';
import styles from './radio-group.styles';

/**
 * Radio Group Component - This is the wrapper component for radio buttons which are grouped together.
 * It can have a header text and a description. It enables users to select a single option from a set of options.
 * It is often used in forms, settings, and selection in lists. It automatically group the radio buttons inside it.
 *
 * @tagname mdc-radio-group
 *
 * @slot default - This is a default/unnamed slot
 *
 * @dependency mdc-text
 *
 *
 * @cssproperty --mdc-radio-group-label-text-normal - color of the label text
 * @cssproperty --mdc-radio-group-description-text-normal - color of the description text
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
        .filter((el) => el.tagName.toLowerCase() === RADIO_TAGNAME);
      radios.forEach((radio) => {
        if (!radio.hasAttribute('name')) {
          radio.setAttribute('name', this.name);
        }
      });
    }
  }

  private renderText(type: TextType, value: string, cssPart: string) {
    if (!value) return nothing;
    return html`
      <mdc-text
       part='${cssPart}'
       tagname="${TEXT_TAGS.SPAN}"
       type="${type}">
         ${value}
      </mdc-text>`;
  }

  public override render() {
    return html`
        ${this.renderText(TEXT_TYPE.BODY_LARGE_BOLD, this.headerText, 'header')}
        ${this.renderText(TEXT_TYPE.BODY_LARGE_REGULAR, this.description, 'description')}
        <div class="mdc-radio-group" role="radiogroup">
          <slot></slot>
        </div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default RadioGroup;
