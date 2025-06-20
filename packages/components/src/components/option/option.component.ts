import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import type { IconNames } from '../icon/icon.types';
import ListItem from '../listitem/listitem.component';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import { TYPE } from '../text/text.constants';
import { SELECTED_ICON_NAME } from './option.constants';
import styles from './option.styles';

/**
 * option component, which is used as a list item in a select component.<br/>
 * We can pass an icon which will be displayed in leading position of the option label text.
 * We can pass a tooltip which will be displayed on hover of the option label text.
 * The tooltip will be helpful for a long label text which is truncated with ellipsis.
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
    this.setAttribute('aria-selected', `${this.selected}`);
    this.setAttribute('aria-disabled', `${!!this.disabled}`);

    // Option will not contain below fields
    this.name = undefined as unknown as string;
    this.secondaryLabel = undefined as unknown as string;
    this.sideHeaderText = undefined as unknown as string;
    this.sublineText = undefined as unknown as string;
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

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('selected')) {
      this.setAttribute('aria-selected', `${this.selected}`);
    }
  }

  public override render() {
    const prefixIconContent = this.prefixIcon
      ? html`
          <div part="leading-icon">
            <mdc-icon length-unit="rem" slot="leading-controls" name="${ifDefined(this.prefixIcon)}"></mdc-icon>
          </div>
        `
      : nothing;
    const selectedIcon = this.selected
      ? html` <mdc-icon length-unit="rem" slot="trailing-controls" name="${SELECTED_ICON_NAME}"></mdc-icon> `
      : nothing;

    return html`
      ${prefixIconContent}
      <div part="leading-text">
        ${this.getText('leading-text-primary-label', TYPE.BODY_MIDSIZE_REGULAR, this.label)}
      </div>
      <div part="trailing">${selectedIcon}</div>
      <slot part="default-slot" @slotchange="${this.handleDefaultSlotChange}"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...ListItem.styles, ...styles];
}

export default Option;
