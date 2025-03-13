import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing, TemplateResult } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import type { TextType } from '../text/text.types';
import { DEFAULTS } from './listitem.constants';
import styles from './listitem.styles';
import type { ListItemVariants } from './listitem.types';

/**
 * mdc-listitem component is used to display a label with different types of controls.
 * There can be three types of controls, a radio button, a checkbox on the
 * leading side and a toggle on the trailing side.
 * The list item can contain an avatar on the leading side and a badge on the trailing side.
 * Additionally, the list item can contain a side header and a subline text.
 *
 * The leading and trailing slots can be used to display controls and text. <br/>
 * Based on the leading/trailing slot, the position of the controls and text can be adjusted. <br/>
 * Please use mdc-list as a parent element even when there is only listitem for a11y purpose.
 *
 * @tagname mdc-listitem
 *
 * @dependency mdc-text
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
 * @cssproperty --mdc-listitem-disabled-color - Allows customization of the disabled color.
 *
 * @event click - (React: onClick) This event is dispatched when the listitem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the listitem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the listitem.
 * @event focus - (React: onFocus) This event is dispatched when the listitem receives focus.
 */
class ListItem extends DataAriaLabelMixin(DisabledMixin(TabIndexMixin(Component))) {
  /** @internal */
  @queryAssignedElements({ slot: 'leading-controls' })
  leadingControlsSlot!: Array<HTMLElement>;

  /** @internal */
  @queryAssignedElements({ slot: 'trailing-controls' })
  trailingControlsSlot!: Array<HTMLElement>;

  /**
   * The variant of the list item. It can be a pill, rectangle or a full-width.
   * @default 'full-width'
   */
  @property({ type: String, reflect: true }) variant: ListItemVariants = DEFAULTS.VARIANT;

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

  constructor() {
    super();
    this.role = 'listitem';
  }

  /**
   * Generates a template for a text slot with the specified content.
   *
   * @param slotName - The name of the slot to be used.
   * @param type - The type of the text element.
   * @param content - The text content to be displayed within the slot.
   * @returns A TemplateResult containing a slot with an `mdc-text` element of type BODY_SMALL_REGULAR.
   */
  private getText(slotName: string, type: TextType, content?: string): TemplateResult | typeof nothing {
    if (!content) {
      return nothing;
    }
    return html`
      <slot name="${slotName}">
        <mdc-text part="${slotName}" type="${type}" tagname="${VALID_TEXT_TAGS.SPAN}">${content}</mdc-text>
      </slot>
    `;
  }

  /**
   * Disable or enable all slotted elements in the leading and trailing slots.
   * This is useful when the list item is disabled, to prevent the user from interacting with the controls.
   * @param disabled - Whether to disable or enable the controls.
   */
  private disableSlottedChildren(disabled: boolean): void {
    [...this.leadingControlsSlot, ...this.trailingControlsSlot].forEach((element) => {
      if (disabled) {
        element.setAttribute('disabled', '');
      } else {
        element.removeAttribute('disabled');
      }
    });
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('disabled')) {
      this.tabIndex = this.disabled ? -1 : 0;
      this.disableSlottedChildren(this.disabled);
    }
  }

  public override render() {
    return html`
      <div part="leading">
        <slot name="leading-controls"></slot>
        <div part="leading-text">
          ${this.getText('leading-text-primary-label', TYPE.BODY_MIDSIZE_REGULAR, this.label)}
          ${this.getText('leading-text-secondary-label', TYPE.BODY_SMALL_REGULAR, this.secondaryLabel)}
          ${this.getText('leading-text-tertiary-label', TYPE.BODY_SMALL_REGULAR, this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText('trailing-text-side-header', TYPE.BODY_MIDSIZE_REGULAR, this.sideHeaderText)}
          ${this.getText('trailing-text-subline', TYPE.BODY_SMALL_REGULAR, this.sublineText)}
        </div>
        <slot name="trailing-controls"></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default ListItem;
