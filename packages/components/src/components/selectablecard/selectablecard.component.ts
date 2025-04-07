import { CSSResult, nothing, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './selectablecard.styles';
import Card from '../card/card.component';
import type { RoleType, SelectionType } from './selectablecard.types';
import { CHECK_MARK, DEFAULTS, ROLE, SELECTION_TYPE } from './selectablecard.constants';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { DisabledMixin } from '../../utils/mixins/DisabledMixin';

/**
 * selectablecard component, which ...
 *
 * @tagname mdc-selectablecard
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class SelectableCard extends DisabledMixin(TabIndexMixin(Card)) {
  @property({ type: Boolean, reflect: true })
  selected: boolean = false;

  @property({ type: String, attribute: 'selection-type' })
  selectionType: SelectionType = DEFAULTS.SELECTION_TYPE;

  @property({ type: String, attribute: 'data-aria-label' })
  dataAriaLabel?: string;

  @property({ type: String })
  override role: RoleType = DEFAULTS.ROLE;

  constructor() {
    super();
    this.addEventListener('click', this.toggleSelected);
    this.addEventListener('keydown', this.toggleOnEnter);
    this.addEventListener('keyup', this.toggleOnSpace);
  }

  override update(changedProperties: PropertyValues<SelectableCard>) {
    super.update(changedProperties);
    if (changedProperties.has('selected')) {
      this.setAttribute('aria-checked', `${this.selected}`);
    }
    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', `${this.disabled}`);
    }
  }

  private toggleSelected() {
    this.selected = !this.selected;
  }

  private toggleOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.toggleSelected();
    }
  }

  private toggleOnSpace(event: KeyboardEvent) {
    if (event.key === ' ') {
      this.toggleSelected();
    }
  }

  private renderSelection() {
    const ICON_NAME = this.selected ? CHECK_MARK.SELECTED : CHECK_MARK.DEFAULT;
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
        return html`<mdc-checkbox tabindex='-1' part="check" 
                    ?checked="${this.selected}" 
                    ?disabled="${this.disabled}" 
                    data-aria-label="${ifDefined(this.dataAriaLabel)}"></mdc-checkbox>`;
      }
      case SELECTION_TYPE.RADIO: {
        this.role = ROLE.RADIO;
        return html`<mdc-radio tabindex='-1' part="check" 
                    ?checked="${this.selected}" 
                    ?disabled="${this.disabled}" 
                    data-aria-label="${ifDefined(this.dataAriaLabel)}"></mdc-radio>`;
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
