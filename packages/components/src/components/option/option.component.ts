import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import type { IconNames } from '../icon/icon.types';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import { SELECTED_ICON_NAME } from './option.constants';
import styles from './option.styles';

/**
 * option component, which ...
 *
 * @dependency mdc-listitem
 *
 * @tagname mdc-option
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is dispatched when the option is clicked.
 */
class Option extends FormInternalsMixin(DisabledMixin(Component)) {
  /**
   * The selected attribute is used to indicate that the option is selected.
   */
  @property({ type: Boolean, reflect: true }) selected = false;

  /**
   * The label.
   */
  @property({ type: String, reflect: true }) label?: string;

  /**
   * The prefix icon.
   */
  @property({ type: String, reflect: true, attribute: 'prefix-icon' }) prefixIcon?: IconNames;

  constructor() {
    super();
    this.role = 'option';
    // Option will not contain form control name
    this.name = undefined as unknown as string;
  }

  private handleDefaultSlotChange() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      this.label = slot.assignedNodes()[0]?.textContent?.trim() || this.label;
    }
  }

  public override render() {
    const selectedIcon = this.selected ? html`
      <mdc-icon slot="trailing-controls" name="${SELECTED_ICON_NAME}"></mdc-icon>
    ` : nothing;
    const prefixIcon = this.prefixIcon ? html`
      <mdc-icon slot="leading-controls" name="${ifDefined(this.prefixIcon)}"></mdc-icon>
    ` : nothing;

    return html`
      <mdc-listitem
        part="list-item"
        role="listbox"
        variant="${LISTITEM_VARIANTS.INSET_RECTANGLE}"
        label="${ifDefined(this.label)}"
        ?disabled="${this.disabled}"
      >
        ${prefixIcon}
        ${selectedIcon}
      </mdc-listitem>
      <slot part="default-slot" @slotchange="${this.handleDefaultSlotChange}"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Option;
