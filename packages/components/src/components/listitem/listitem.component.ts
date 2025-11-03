import { CSSResult, html, nothing, PropertyValues, TemplateResult } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';

import { Component } from '../../models';
import { KEYS } from '../../utils/keys';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { ROLE } from '../../utils/roles';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import type { TextType } from '../text/text.types';
import { LifeCycleMixin } from '../../utils/mixins/lifecycle/LifeCycleMixin';

import { DEFAULTS } from './listitem.constants';
import { ListItemEventManager } from './listitem.events';
import styles from './listitem.styles';
import { ListItemVariants } from './listitem.types';

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
 * **Note**: If a listitem contains a long text, it is recommended to create a tooltip for the listitem that displays the full text on hover.
 * Consumers need to add a unique ID to this listitem and use that ID in the tooltip's `triggerID` attribute. We are not creating the tooltip automatically, consumers need to add `<mdc-tooltip>` element manually and associate it with the listitem using the `triggerID` attribute.
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
 * @slot content - content slot can be used to override the content completely. Be aware that
 * this will override the default content of the list item.
 *
 * @cssproperty --mdc-listitem-default-background-color - Allows customization of the default background color.
 * @cssproperty --mdc-listitem-background-color-hover - Allows customization of the background color on hover.
 * @cssproperty --mdc-listitem-background-color-active - Allows customization of the background color when pressed.
 * @cssproperty --mdc-listitem-primary-label-color
 *  - Allows customization of the primary label, side header and subline text slot color.
 * @cssproperty --mdc-listitem-secondary-label-color
 *  - Allows customization of the secondary and tertiary label text slot color.
 * @cssproperty --mdc-listitem-disabled-color - Allows customization of the disabled color.
 * @cssproperty --mdc-listitem-column-gap - Allows customization of column gap.
 * @cssproperty --mdc-listitem-padding-left-right - Allows customization of padding left and right.
 * @cssproperty --mdc-listitem-padding-top-bottom - Allows customization of padding top and bottom.
 * @cssproperty --mdc-listitem-cursor - Allows customization of the cursor.
 * @cssproperty --mdc-listitem-width - Allows customization of the width of the list item.
 * @cssproperty --mdc-listitem-height - Allows customization of the height of the list item.
 *
 * @csspart leading - Allows customization of the leading part.
 * @csspart leading-text - Allows customization of the leading text part.
 * @csspart trailing - Allows customization of the trailing part.
 * @csspart trailing-text - Allows customization of the trailing text part.
 *
 * @event click - (React: onClick) This event is dispatched when the listitem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the listitem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the listitem.
 * @event focus - (React: onFocus) This event is dispatched when the listitem receives focus.
 * @event enabled - (React: onEnabled) This event is dispatched after the listitem is enabled
 * @event disabled - (React: onDisabled) This event is dispatched after the listitem is disabled
 * @event created - (React: onCreated) This event is dispatched after the listitem is created (added to the DOM)
 * @event destroyed - (React: onDestroyed) This event is dispatched after the listitem is destroyed (removed from the DOM)
 */
class ListItem extends DisabledMixin(TabIndexMixin(LifeCycleMixin(Component))) {
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

  /**
   * Indicates whether the element is soft disabled.
   * When set to `true`, the element appears visually disabled but still allows
   * focus, click, and keyboard actions to be passed through.
   *
   * **Important:** When using soft disabled, consumers must ensure that
   * the element behaves like a disabled element, allowing only focus and
   * preventing any interactions (clicks or keyboard actions) from triggering unintended actions.
   * @default undefined
   */
  @property({ type: Boolean, reflect: true, attribute: 'soft-disabled' })
  softDisabled?: boolean;

  /**
   * Data attribute to define the index of the list item in a list.
   * This also set the `aria-posinset` attribute for accessibility purposes.
   *
   * It is required when the list item is used inside a virtualized list where the items are not sequentially rendered.
   * It should be a zero-based index.
   *
   * @default undefined
   */
  @property({ type: Number, reflect: true, attribute: 'data-index' })
  dataIndex?: number;

  /**
   * Indicates whether the list item is active.
   * When set to true, the list item appears in a active state.
   *
   * NOTE: this is a visual state only, it does not affect the behavior or a11y of the list item.
   *
   * @default undefined
   */
  @property({ type: Boolean, reflect: true, attribute: 'active' })
  active?: boolean;

  constructor() {
    super();

    this.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.addEventListener('click', this.handleClick.bind(this));
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = this.role || ROLE.LISTITEM;
  }

  /**
   * Handles the click event on the list item.
   * Prevents click when listitem is disabled
   * @param event - The mouse event triggered when the list item is clicked.
   */
  private handleClick(event: MouseEvent): void {
    if (this.disabled) {
      // when disabled, prevent the click event from propagating
      // and from firing on the host (immediate)
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }

  /**
   * Fires the click event when the enter or space key is pressed down.
   * This behavior is similar to a button click and key interaction.
   * @param event - The keyboard event triggered when a key is pressed down.
   */
  protected handleKeyDown(event: KeyboardEvent): void {
    if (event.key === KEYS.ENTER || event.key === KEYS.SPACE) {
      const eventDispatched = this.triggerClickEvent(event);
      if (eventDispatched) {
        event.preventDefault();
      }
    }
  }

  /**
   * Triggers a click event on the list item.
   *
   * @param event - The event that triggered the click.
   * @returns - Returns true if the click event was dispatched, false otherwise.
   */
  protected triggerClickEvent(event: Event): boolean {
    const target = event.target as HTMLElement;
    // Do not emit click event when the target is a focusable element inside the list item.
    if (target !== this && document.activeElement === event.target) {
      return false;
    }
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    this.dispatchEvent(clickEvent);
    return true;
  }

  /**
   * Generates a template for a text slot with the specified content.
   *
   * @param slotName - The name of the slot to be used.
   * @param type - The type of the text element.
   * @param content - The text content to be displayed within the slot.
   * @returns A TemplateResult containing a slot with an `mdc-text` element of type BODY_SMALL_REGULAR.
   */
  protected getText(slotName: string, type: TextType, content?: string): TemplateResult {
    return html`
      <slot name="${slotName}">
        ${content
          ? html`<mdc-text part="${slotName}" type="${type}" tagname="${VALID_TEXT_TAGS.SPAN}">${content}</mdc-text>`
          : nothing}
      </slot>
    `;
  }

  /**
   * Disable or enable all slotted elements in the leading and trailing slots.
   * This is useful when the list item is disabled, to prevent the user from interacting with the controls.
   * @param disabled - Whether to disable or enable the controls.
   */
  private disableSlottedChildren(disabled: boolean = false): void {
    [...this.leadingControlsSlot, ...this.trailingControlsSlot].forEach(element => {
      if (disabled) {
        element.setAttribute('disabled', '');
        ListItemEventManager.onDisableListItem(this);
      } else {
        element.removeAttribute('disabled');
        ListItemEventManager.onEnableListItem(this);
      }
    });
    // Set the aria-disabled attribute to indicate that the list item is disabled.
    this.setAttribute('aria-disabled', `${disabled}`);
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('disabled')) {
      this.tabIndex = this.disabled ? -1 : 0;
      this.disableSlottedChildren(this.disabled);
      this.dispatchModifiedEvent(this.disabled ? 'disabled' : 'enabled');
    }

    if (changedProperties.has('softDisabled')) {
      this.disableSlottedChildren(this.softDisabled);
    }

    if (changedProperties.has('dataIndex')) {
      this.ariaPosInSet = `${this.dataIndex !== undefined ? this.dataIndex + 1 : ''}`;
    }
  }

  /**
   * Renders the trailing controls slot.
   * @returns A template for the trailing controls slot.
   */
  protected renderTrailingControls() {
    return html`<slot
      name="trailing-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`;
  }

  /**
   * Renders the leading controls slot.
   * @returns A template for the leading controls slot.
   */
  protected renderLeadingControls() {
    return html`<slot
      name="leading-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`;
  }

  /**
   * Stops the click event from propagating to parent elements. In case of keyboard events,
   * it stops the propagation for Enter and Space keys.
   * This is useful when the list item contains controls that
   * should not trigger the click event on the list item itself.
   * @param event - The mouse event triggered when a click occurs.
   */
  protected stopEventPropagation(event: Event): void {
    if (
      (event instanceof KeyboardEvent && (event.key === KEYS.ENTER || event.key === KEYS.SPACE)) ||
      event instanceof MouseEvent
    ) {
      event.stopPropagation();
    }
  }

  public override render() {
    return html`
      <slot name="content">
        <div part="leading">
          ${this.renderLeadingControls()}
          <div part="leading-text">
            ${this.getText(
              'leading-text-primary-label',
              this.active ? TYPE.BODY_MIDSIZE_BOLD : TYPE.BODY_MIDSIZE_REGULAR,
              this.label,
            )}
            ${this.getText('leading-text-secondary-label', TYPE.BODY_SMALL_REGULAR, this.secondaryLabel)}
            ${this.getText('leading-text-tertiary-label', TYPE.BODY_SMALL_REGULAR, this.tertiaryLabel)}
          </div>
        </div>
        <div part="trailing">
          <div part="trailing-text">
            ${this.getText('trailing-text-side-header', TYPE.BODY_MIDSIZE_REGULAR, this.sideHeaderText)}
            ${this.getText('trailing-text-subline', TYPE.BODY_SMALL_REGULAR, this.sublineText)}
          </div>
          ${this.renderTrailingControls()}
        </div>
      </slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default ListItem;
