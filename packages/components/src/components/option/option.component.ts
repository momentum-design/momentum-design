import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import type { IconNames } from '../icon/icon.types';
import ListItem from '../listitem/listitem.component';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import { TAG_NAME as SELECT_TAG_NAME } from '../select/select.constants';
import { TYPE } from '../text/text.constants';
import { TAG_NAME as TOOLTIP_TAG_NAME } from '../tooltip/tooltip.constants';
import { SELECTED_ICON_NAME, TOOLTIP_ID } from './option.constants';
import styles from './option.styles';

/**
 * option component, which is used as a list item in a select component.<br/>
 * We can pass an icon which will be displayed in leading position of the option label text.
 *
 * @dependency mdc-icon
 * @dependency mdc-text
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

    this.addEventListener('focusin', this.displayTooltipForLongText);
    this.addEventListener('mouseover', this.displayTooltipForLongText);
    this.addEventListener('focusout', this.hideTooltipOnLeave);
    this.addEventListener('mouseout', this.hideTooltipOnLeave);
    this.addEventListener('click', this.handleClick);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('focusin', this.displayTooltipForLongText);
    this.removeEventListener('mouseover', this.displayTooltipForLongText);
    this.removeEventListener('focusout', this.hideTooltipOnLeave);
    this.removeEventListener('mouseout', this.hideTooltipOnLeave);
    this.removeEventListener('click', this.handleClick);
  }

  private handleClick(): void {
    // When the select dropdown (popover) is open,
    // then if the tooltip is open, it has to be closed first.
    // only then we can close the dropdown on option click/select.
    this.hideTooltipOnLeave();
  }

  /**
   * Display a tooltip for long text label with an ellipse at the end.
   * Create the tooltip programmatically after the nearest select component or the parent element.
   * @param event - A focus or a mouse event.
   */
  private displayTooltipForLongText(event: FocusEvent | MouseEvent): void {
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
    tooltip.id = TOOLTIP_ID;
    tooltip.textContent = this.label ?? '';
    tooltip.setAttribute('triggerid', this.id);
    tooltip.setAttribute('visible', '');
    tooltip.setAttribute('show-arrow', '');

    // Add tooltip programmatically after the nearest select component or the parent element.
    const parent = this.closest(SELECT_TAG_NAME) || this.parentElement;
    parent?.after(tooltip);
  }

  /**
   * Removes the dynamically created tooltip for long text label on focus or mouse leave.
   * This is triggered on focusout and mouseout events.
   */
  private hideTooltipOnLeave(): void {
    const existingTooltip = document.querySelector(`#${TOOLTIP_ID}`);
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
      ${prefixIconContent}
      <div part="leading-text">
        ${this.getText('leading-text-primary-label', TYPE.BODY_MIDSIZE_REGULAR, this.label)}
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
