import { CSSResult, html, nothing, PropertyValues } from 'lit';
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
 * option component, which is used as a list item in a select component.<br/>
 * We can pass an icon which will be displayed in leading position of the option label text.
 *
 * @dependency mdc-listitem
 *
 * @tagname mdc-option
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is dispatched when the option is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the option.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the option.
 * @event focus - (React: onFocus) This event is dispatched when the option receives focus.
 */
class Option extends FormInternalsMixin(DisabledMixin(Component)) {
  /**
   * The selected attribute is used to indicate that the option is selected.
   */
  @property({ type: Boolean, reflect: true }) selected = false;

  /**
   * The label for the option.
   */
  @property({ type: String, reflect: true }) label?: string;

  /**
   * The prefix icon attribute is used to display the icon name on the left of the option label.
   */
  @property({ type: String, reflect: true, attribute: 'prefix-icon' }) prefixIcon?: IconNames;

  /**
   * Any additional description can be provided here for screen readers.
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' }) override ariaLabel: string | null = null;

  constructor() {
    super();
    this.updateAttribute('role', 'option');
    this.updateAttribute('aria-selected', `${this.selected}`);
    this.updateAttribute('aria-disabled', `${this.disabled}`);
    // Option will not contain form control name
    this.name = undefined as unknown as string;
  }

  /**
   * Listens to changes in the default slot and updates the label of the option accordingly.
   * This is used to set the label of the option when it is not explicitly set.
   * It is called internally when the slot is changed.
   */
  private handleDefaultSlotChange() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      this.label = slot.assignedNodes()[0]?.textContent?.trim() || this.label;
    }
  }

  /**
   * Updates the attribute of the option to reflect the current state.
   */
  private updateAttribute(attributeName: string, value: string): void {
    this.setAttribute(attributeName, value);
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('disabled')) {
      this.updateAttribute('aria-disabled', `${this.disabled}`);
    }

    if (changedProperties.has('selected')) {
      this.updateAttribute('aria-selected', `${this.selected}`);
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
        ?disabled="${this.disabled}"
        role="presentation"
        label="${ifDefined(this.label)}"
        part="list-item"
        variant="${LISTITEM_VARIANTS.INSET_RECTANGLE}"
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
