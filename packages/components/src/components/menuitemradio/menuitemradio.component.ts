import type { PropertyValues, CSSResult, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { ROLE } from '../../utils/roles';
import MenuItem from '../menuitem/menuitem.component';
import { TYPE } from '../text/text.constants';
import { TAG_NAME as MENUSECTION_TAGNAME } from '../menusection/menusection.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';

import { Indicator } from './menuitemradio.types';
import { INDICATOR, DEFAULTS } from './menuitemradio.constants';
import styles from './menuitemradio.styles';

/**
 * A menuitemradio component is a checkable menuitem that is used in a menu.
 * A menuitemradio should be checked only one at a time. <br/>
 * There should be no focusable descendants inside this menuitemradio component.
 *
 * The `checked` menuitemradio attribute is used to indicate that the menuitemradio is checked or not.
 *
 * Menu item radio has `name` and `value` attribute that can be used to identify the menu item when it is selected.
 *
 * If you want more than one item in a group to be checked, consider using menuitemcheckbox component.
 *
 * The `indicator` attribute is used to differentiate between <b>radio</b>, <b>checkmark</b> and <b>none</b>.
 * By default, the `indicator` is set to <b>radio</b>.<br/>
 *
 * The checkbox will always be positioned on the leading side of the menuitem label and
 * the checkmark will always be positioned on the trailing side.
 *
 * The radio will have the possible states of `true` or `false`.
 * If the indicator is set to <b>checkmark</b> and if the `checked` attribute is set to `true`,
 * then the checkmark will be displayed. if not, then no indicator will be displayed.
 *
 * The third options for the `indicator` is <b>none</b>, which will not display any indicator at all.
 * It is intended to be used for customised menu items where the indicator is implemented differently.
 * For example, you can use a custom icon or a different visual element to indicate the state of the menu item.
 * Make sure the new indicator is accessible.
 *
 * @dependency mdc-icon
 * @dependency mdc-staticradio
 * @dependency mdc-text
 * @dependency mdc-tooltip
 *
 * @tagname mdc-menuitemradio
 *
 * @slot leading-controls - slot for menu item radio controls to appear of leading end.
 * @slot leading-text-primary-label - slot for menu item radio primary label.
 * @slot leading-text-secondary-label - slot for menu item radio secondary label.
 * @slot leading-text-tertiary-label - slot for menu item radio tertiary label.
 * @slot trailing-text-side-header - slot for menu item radio side header text.
 * @slot trailing-text-subline - slot for menu item radio subline text.
 * @slot trailing-controls - slot for menu item radio controls to appear of trailing end.
 *
 * @event change - (React: onChange) This event is dispatched when the menuitemradio changes.
 * @event click - (React: onClick) This event is dispatched when the menuitemradio is clicked.
 * @event focus - (React: onFocus) This event is dispatched when the menuitemradio receives focus.
 */
class MenuItemRadio extends MenuItem {
  /**
   * The aria-checked attribute is used to indicate that the menuitemradio is checked or not.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  /**
   * The indicator attribute is used to differentiate between <b>radio</b>, <b>checkmark</b> and <b>none</b>.
   * @default 'radio'
   */
  @property({ type: String, reflect: true }) indicator: Indicator = DEFAULTS.INDICATOR;

  constructor() {
    super();
    this.addEventListener('click', this.handleMouseClick.bind(this));
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.MENUITEMRADIO;
  }

  /**
   * Returns all radios within the same group (name).
   */
  private getAllRadiosWithinSameGroup(): MenuItemRadio[] {
    const container = this.closest(`${MENUSECTION_TAGNAME}, ${MENUPOPOVER_TAGNAME}`);
    if (!container || !this.name) return [];
    return Array.from(container.querySelectorAll(`${this.tagName}[name="${this.name}"]`)) as MenuItemRadio[];
  }

  /**
   * Updates the checked state of all other radios in the same group.
   * This method is called when a radio is clicked to ensure that only one radio in the group can be checked at a time.
   * It sets the `checked` property of all other radios in the same group to `false`.
   */
  private updateOtherRadiosCheckedState(): void {
    const radios = this.getAllRadiosWithinSameGroup();
    radios.forEach(radio => {
      if (radio !== this) {
        radio.removeAttribute('checked');
      }
    });
  }

  /**
   * Handles click events to set checked state and uncheck siblings in the same group and container.
   * If the menuitemradio is not checked, it sets its checked state to `true`
   * and sets all other menuitemradio elements of the same group with checked state to `false`.
   */
  private handleMouseClick() {
    if (this.disabled || this.checked) return;

    this.updateOtherRadiosCheckedState();
    this.checked = true;

    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('checked')) {
      this.ariaChecked = `${this.checked}`;
      if (changedProperties.get('checked') === false && this.checked) {
        this.updateOtherRadiosCheckedState();
      }
    }
  }

  /**
   * Returns a static checkbox element if the indicator is set to checkbox.
   * If the indicator is not set to checkbox, it returns nothing.
   * @returns TemplateResult | typeof nothing
   */
  private renderStaticRadio(): TemplateResult | typeof nothing {
    if (this.indicator === INDICATOR.RADIO) {
      return html`
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      `;
    }
    return nothing;
  }

  /**
   * Returns a checkmark icon if the indicator is set to checkmark and the checked state is true.
   * If the indicator is not set to checkmark or the checked state is false, it returns nothing.
   *
   * The checkmark icon will always be positioned on the trailing side of the menuitem label.
   * @returns TemplateResult | typeof nothing
   */
  private renderCheckmarkIcon(): TemplateResult | typeof nothing {
    if (this.indicator === INDICATOR.CHECKMARK) {
      return html`
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
          class=${classMap({ 'hidden-checkmark': !this.checked })}
        ></mdc-icon>
      `;
    }
    return nothing;
  }

  public override render() {
    return html`
      <div part="leading">
        ${this.renderStaticRadio()}
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
        ${this.renderCheckmarkIcon()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default MenuItemRadio;
