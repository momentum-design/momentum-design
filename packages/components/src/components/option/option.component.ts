import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { ROLE } from '../../utils/roles';
import type { IconNames } from '../icon/icon.types';
import ListItem from '../listitem/listitem.component';
import { LISTITEM_VARIANTS } from '../listitem/listitem.constants';
import { TYPE } from '../text/text.constants';

import { SELECTED_ICON_NAME } from './option.constants';
import styles from './option.styles';

/**
 * Option component, which is used within Selectlistbox within Select component.
 *
 * The label and secondary label of the option can be set using the `label` and `secondaryLabel` properties respectively.
 * The `label` is the primary text displayed in the option, while the `secondaryLabel` is the secondary text displayed below the primary label.
 *
 * The `selected` property is used to indicate whether the option is selected or not.
 * When the `selected` property is set to true, a checkmark icon will be displayed
 * on the right side of the option to indicate that it is selected.
 *
 * The `prefixIcon` property can be used to display an icon on the left side of the option label.
 *
 * **Note**: If an option contains a long text, it is recommended to create a tooltip for the option that displays the full text on hover.
 * Consumers need to add a unique ID to this option and use that ID in the tooltip's `triggerID` attribute. We are not creating the tooltip automatically, consumers need to add `<mdc-tooltip>` element manually and associate it with the option using the `triggerID` attribute.
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @tagname mdc-option
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
    this.role = ROLE.OPTION;
    this.variant = LISTITEM_VARIANTS.INSET_RECTANGLE;
    this.setAttribute('aria-selected', `${this.selected}`);
    this.setAttribute('aria-disabled', `${!!this.disabled}`);

    // Option will not contain below fields
    this.name = undefined as unknown as string;
    this.sideHeaderText = undefined as unknown as string;
    this.sublineText = undefined as unknown as string;
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('selected')) {
      this.setAttribute('aria-selected', `${this.selected}`);

      this.dispatchModifiedEvent(this.selected ? 'selected' : 'unselected');
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
    const trailingContent = this.selected
      ? html` <mdc-icon length-unit="rem" slot="trailing-controls" name="${SELECTED_ICON_NAME}"></mdc-icon> `
      : nothing;
    return html`
      ${prefixIconContent}
      <div part="leading-text">
        ${this.getText('leading-text-primary-label', TYPE.BODY_MIDSIZE_REGULAR, this.label)}
        ${this.getText('leading-text-secondary-label', TYPE.BODY_SMALL_REGULAR, this.secondaryLabel)}
      </div>
      <div part="trailing">${trailingContent}</div>
    `;
  }

  public static override styles: Array<CSSResult> = [...ListItem.styles, ...styles];
}

export default Option;
