import { CSSResult, html, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { DEFAULTS } from './listitem.constants';
import styles from './listitem.styles';

/**
 * listitem component is used to display a label with different types of controls.
 * There can be three types of controls, a radio button, a checkbox and/or a toggle.
 * The list item can contain an avatar on the leading side and a badge on the trailing side.
 * Additionally, the list item can contain a side header and a subline text.
 *
 * It is meant for a flexible use.
 * The leading and trailing slots can be used to display controls and text. <br/>
 * Based on the leading/trailing slot, the position of the controls and text can be adjusted.
 *
 * @tagname mdc-listitem
 *
 * @slot leading-controls - slot for list item controls to appear of leading end.
 * @slot leading-text-primary-label - slot for list item primary label.
 * @slot leading-text-secondary-label - slot for list item secondary label.
 * @slot leading-text-tertiary-label - slot for list item tertiary label.
 * @slot trailing-text-side-header - slot for list item side header text.
 * @slot trailing-text-subline - slot for list item subline text.
 * @slot trailing-controls - slot for list item controls to appear of trailing end.
 *
 * @cssproperty --mdc-listitem-default-background-color - Allows customization of the default background color.
 * @cssproperty --mdc-listitem-background-color-hover - Allows customization of the background color on hover.
 * @cssproperty --mdc-listitem-background-color-active - Allows customization of the background color when pressed.
 * @cssproperty --mdc-listitem-primary-label-color
 *  - Allows customization of the primary label, side header and subline text slot color.
 * @cssproperty --mdc-listitem-secondary-label-color
 *  - Allows customization of the secondary and teritary label text slot color.
 */
class ListItem extends DataAriaLabelMixin(DisabledMixin(TabIndexMixin(Component))) {
  /**
   * The variant of the list item. It can be a pill, rectangle or a full-width.
   * @default 'full-width'
   */
  @property({ type: String, reflect: true }) variant = DEFAULTS.VARIANT;

  /**
   * The primary label of the list item.
   * This appears on the leading side of the list item.
   */
  @property({ type: String, reflect: true }) label?: string;

  /**
   * The secondary label of the list item.
   * This appears on the leading side of the list item.
   */
  @property({ type: String, reflect: true, attribute: 'secondary-label' }) secondaryLabel?: string;

  /**
   * The tertiary label of the list item.
   * This appears on the leading side of the list item.
   */
  @property({ type: String, reflect: true, attribute: 'tertiary-label' }) tertiaryLabel?: string;

  /**
   * The header text of the list item.
   * This appears on the trailing side of the list item.
   */
  @property({ type: String, reflect: true, attribute: 'side-header-text' }) sideHeaderText?: string;

  /**
   * The subline text of the list item.
   * This appears on the trailing side of the list item.
   */
  @property({ type: String, reflect: true, attribute: 'subline-text' }) sublineText?: string;

  /**
   * Generates a midsize regular text slot with the specified content.
   *
   * @param slotName - The name of the slot to be used.
   * @param content - The text content to be displayed within the slot.
   * @returns A TemplateResult containing a slot with an `mdc-text` element of type BODY_MIDSIZE_REGULAR.
   */
  private getMidsizeRegularText(slotName: string, content: string): TemplateResult {
    return html`<slot name="${slotName}">
      <mdc-text type="${TYPE.BODY_MIDSIZE_REGULAR}" tagname="${VALID_TEXT_TAGS.SPAN}">${content}</mdc-text>
    </slot>`;
  }

  /**
   * Generates a small regular text slot with the specified content.
   *
   * @param slotName - The name of the slot to be used.
   * @param content - The text content to be displayed within the slot.
   * @returns A TemplateResult containing a slot with an `mdc-text` element of type BODY_SMALL_REGULAR.
   */
  private getSmallRegularText(slotName: string, content: string): TemplateResult {
    return html`<slot name="${slotName}">
      <mdc-text type="${TYPE.BODY_SMALL_REGULAR}" tagname="${VALID_TEXT_TAGS.SPAN}">${content}</mdc-text>
    </slot>`;
  }

  public override render() {
    const labelText = this.label ? this.getMidsizeRegularText('leading-text-primary-label', this.label) : nothing;
    const secondaryLabelText = this.secondaryLabel
      ? this.getSmallRegularText('leading-text-secondary-label', this.secondaryLabel) : nothing;
    const tertiaryLabelText = this.tertiaryLabel
      ? this.getSmallRegularText('leading-text-tertiary-label', this.tertiaryLabel) : nothing;
    const sideHeaderText = this.sideHeaderText
      ? this.getMidsizeRegularText('trailing-text-side-header', this.sideHeaderText) : nothing;
    const sublineText = this.sublineText
      ? this.getSmallRegularText('trailing-text-subline', this.sublineText) : nothing;

    return html`
      <li>
        <div part="leading">
          <slot name="leading-controls"></slot>
          <div part="leading-text">
            ${labelText}
            ${secondaryLabelText}
            ${tertiaryLabelText}
          </div>
        </div>
        <div part="trailing">
          <div part="trailing-text">
            ${sideHeaderText}
            ${sublineText}
          </div>
          <slot name="trailing-controls"></slot>
        </div>
      </li>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default ListItem;
