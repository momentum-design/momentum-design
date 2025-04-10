import { CSSResult, nothing, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './selectablecard.styles';
import Card from '../card/card.component';
import type { RoleType, SelectionType } from './selectablecard.types';
import { CHECK_MARK, DEFAULTS, ROLE, SELECTION_TYPE } from './selectablecard.constants';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

/**
 * selectablecard component, which ...
 * make sure cards are in a role = "checkbox-group" or "radio-group"  and not "list"
 * selectable card would have events for selected and unselected (similar to checkbox/radio)
 *
 * @tagname mdc-selectablecard
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 * @event change - (React: onChange) Event that gets dispatched when the checkbox state changes.
 * @event focus - (React: onFocus) Event that gets dispatched when the checkbox receives focus.
 *
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class SelectableCard extends DisabledMixin(TabIndexMixin(Card)) {
  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  @property({ type: String, attribute: 'selection-type' })
  selectionType: SelectionType = DEFAULTS.SELECTION_TYPE;

  @property({ type: String })
  override role: RoleType = DEFAULTS.ROLE;

  constructor() {
    super();
    this.addEventListener('click', this.toggleChecked);
    this.addEventListener('keydown', this.toggleOnEnter);
    this.addEventListener('keyup', this.toggleOnSpace);
  }

  override update(changedProperties: PropertyValues<SelectableCard>) {
    super.update(changedProperties);
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', `${this.checked}`);
    }
    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', `${this.disabled}`);
    }
  }

  private toggleChecked() {
    this.checked = !this.checked;
  }

  private toggleOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.toggleChecked();
    }
  }

  private toggleOnSpace(event: KeyboardEvent) {
    if (event.key === ' ') {
      this.toggleChecked();
    }
  }

  private renderSelection() {
    const ICON_NAME = this.checked ? CHECK_MARK.CHECKED : CHECK_MARK.DEFAULT;
    switch (this.selectionType) {
      case SELECTION_TYPE.CHECK: {
        this.role = ROLE.CHECKBOX;
        return html`<mdc-icon part="check check-icon" 
                    size="${DEFAULTS.ICON_SIZE}"
                    length-unit="${DEFAULTS.ICON_LENGTH_UNIT}" 
                    name="${ICON_NAME}"></mdc-icon>`;
      }

      case SELECTION_TYPE.CHECKBOX: {
        this.role = ROLE.CHECKBOX;
        return html`<mdc-decorative-checkbox part="check" 
                    ?checked="${this.checked}" 
                    ?disabled="${this.disabled}"></mdc-decorative-checkbox>`;
      }
      case SELECTION_TYPE.RADIO: {
        this.role = ROLE.RADIO;
        return html`<mdc-decorative-radio part="check" 
                    ?checked="${this.checked}" 
                    ?disabled="${this.disabled}"></mdc-decorative-radio>`;
      }
      default: return nothing;
    }
  }

  override renderHeader() {
    if (!this.cardTitle) {
      return nothing;
    }
    return html`<div part="header">
      ${this.renderIcon()}
      ${this.renderTitle()}
      ${this.renderSelection()}
    </div>`;
  }

  public static override styles: Array<CSSResult> = [...Card.styles, ...styles];
}

export default SelectableCard;
