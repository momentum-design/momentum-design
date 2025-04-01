import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import type { IconNames } from '../icon/icon.types';
import ListItem from '../listitem/listitem.component';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import { TYPE } from '../text/text.constants';
import { TAG_NAME as TOOLTIP_TAG_NAME } from '../tooltip/tooltip.constants';
import { SELECTED_ICON_NAME } from './option.constants';
import styles from './option.styles';

/**
 * option component, which is used as a list item in a select component.<br/>
 * We can pass an icon which will be displayed in leading position of the option label text.
 *
 * @dependency mdc-tooltip
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
class Option extends FormInternalsMixin(ListItem) {
  /**
   * The selected attribute is used to indicate that the option is selected.
   */
  @property({ type: Boolean, reflect: true }) selected = false;

  /**
   * The prefix icon attribute is used to display the icon name on the left of the option label.
   */
  @property({ type: String, reflect: true, attribute: 'prefix-icon' }) prefixIcon?: IconNames;

  /**
   * Any additional description can be provided here for screen readers.
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' }) override ariaLabel: string | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'option';
    this.variant = LISTITEM_VARIANTS.INSET_RECTANGLE;
    this.updateAttribute('aria-selected', `${this.selected}`);
    this.updateAttribute('aria-disabled', `${!!this.disabled}`);

    // Option will not contain below fields
    this.name = undefined as unknown as string;
    this.secondaryLabel = undefined as unknown as string;
    this.sideHeaderText = undefined as unknown as string;
    this.sublineText = undefined as unknown as string;
    this.dataAriaLabel = undefined as unknown as string;

    this.addEventListener('mouseover', this.showTooltipPopoverMouseOver);
    this.addEventListener('mouseout', this.hideTooltipPopoverMouseOut);
  }

  /**
   * Shows a tooltip for the option when the mouse is over it.
   * The tooltip is created dynamically and appended to the parent element of the select component.
   * The tooltip is only shown when the option label text is too long to fit the given width.
   * @param event - The event that triggered this function.
   */
  private showTooltipPopoverMouseOver(event: MouseEvent): void {
    const dimensions = (event.target as HTMLElement).shadowRoot?.querySelector('[part="leading-text-primary-label"]');
    if (
      dimensions && dimensions.scrollWidth && dimensions.clientWidth
      && dimensions.scrollWidth <= dimensions?.clientWidth
    ) {
      // it means that the option label text is fully visible and we do not need to show the tooltip.
      return;
    }

    // Create tooltip for long text label which has an ellipse at the end.
    const tooltip = document.createElement(TOOLTIP_TAG_NAME);
    tooltip.id = 'dynamic-select-tooltip-popover';
    tooltip.textContent = this.label ?? '';
    tooltip.setAttribute('triggerid', this.id);
    tooltip.setAttribute('visible', '');

    // Add tooltip programmatically after the nearest select component or the parent element.
    const parent = this.closest('mdc-select') || this.parentElement;
    parent?.after(tooltip);
  }

  /**
   * Hides the dynamic tooltip popover when the user moves the mouse out of the option element.
   * This method is called when the user moves the mouse out of the options slot.
   * It finds the existing dynamic tooltip popover by its id and removes it.
   */
  private hideTooltipPopoverMouseOut(): void {
    const existingTooltip = document.querySelector('#dynamic-select-tooltip-popover');
    existingTooltip?.remove();
  }

  /**
   * Listens to changes in the default slot and updates the label of the option accordingly.
   * This is used to set the label of the option when it is not explicitly set.
   * It is called internally when the slot is changed.
   */
  private handleDefaultSlotChange() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot && !this.label) {
      this.label = slot.assignedNodes()[0]?.textContent?.trim();
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
    const prefixIconContent = this.prefixIcon ? html`
      <div part="leading-icon">
        <mdc-icon slot="leading-controls" name="${ifDefined(this.prefixIcon)}"></mdc-icon>
      </div>
    ` : nothing;
    const selectedIcon = this.selected ? html`
      <mdc-icon slot="trailing-controls" name="${SELECTED_ICON_NAME}"></mdc-icon>
    ` : nothing;

    return html`
      <div part="leading">
        ${prefixIconContent}
        <div part="leading-text">
          ${this.getText('leading-text-primary-label', TYPE.BODY_MIDSIZE_REGULAR, this.label)}
        </div>
      </div>
      <div part="trailing">
        ${selectedIcon}
      </div>
      <slot part="default-slot" @slotchange="${this.handleDefaultSlotChange}"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...ListItem.styles, ...styles];
}

export default Option;
