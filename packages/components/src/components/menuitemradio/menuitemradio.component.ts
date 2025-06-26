import { CSSResult, html, nothing, PropertyValues, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

import { ROLE } from '../../utils/roles';
import MenuItem from '../menuitem/menuitem.component';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import { TAG_NAME as MENUSECTION_TAGNAME } from '../menusection/menusection.constants';
import { TYPE } from '../text/text.constants';
import { DEFAULTS, INDICATOR } from './menuitemradio.constants';
import styles from './menuitemradio.styles';
import type { Indicator } from './menuitemradio.types';

/**
 * A menuitemradio component is a checkable menuitem that is used in a menu.
 * A menuitemradio should be checked only one at a time. <br/>
 * There should be no focusable descendants inside this menuitemradio component.
 *
 * The `checked` attribute is used to indicate that the menuitemradio is checked or not.
 *
 * If you want more than one item in a group to be checked, consider using menuitemcheckbox component.
 *
 * If a menuitemradio is checked, then the `aria-checked` attribute is set to `true`.<br/>
 * If a menuitemradio is disabled, then the `aria-disabled` attribute is set to `true`.
 *
 * @dependency mdc-icon
 * @dependency mdc-staticradio
 * @dependency mdc-text
 * @dependency mdc-tooltip
 *
 * @tagname mdc-menuitemradio
 *
 * @cssproperty --mdc-radio-indicator-color - Allows customization of the radio indicator color
 *
 * @event change - (React: onChange) This event is dispatched when the menuitemradio changes.
 * @event click - (React: onClick) This event is dispatched when the menuitemradio is clicked.
 * @event focus - (React: onFocus) This event is dispatched when the menuitemradio receives focus.
 */
class MenuItemRadio extends MenuItem {
  /**
   * The aria-checked attribute is used to indicate that the menuitemradio is checked or not.
   * @default 'false'
   */
  @property({ type: Boolean, reflect: true }) checked: boolean = DEFAULTS.CHECKED;

  /**
   * The indicator attribute is used to differentiate between <b>radio</b> and <b>checkmark</b>.
   * @default 'radio'
   */
  @property({ type: String, reflect: true }) indicator: Indicator = DEFAULTS.INDICATOR;

  /**
   * The name attribute is used to group radio items within the same menu container.
   */
  @property({ type: String, reflect: true }) name = '';

  constructor() {
    super();
    this.addEventListener('click', this.handleMouseClick);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.MENUITEMRADIO;
  }

  override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', this.checked.toString());
    }
  }

  /**
   * Handles click events to set checked state and uncheck siblings in the same group and container.
   * If the menuitemradio is not checked, it sets its aria-checked state to `true`
   * and sets all other menuitemradio elements of the same group with aria-checked state to `false`.
   */
  private handleMouseClick = () => {
    if (this.disabled || this.checked) return;
    // Find the closest menu container (menupopover or menusection)
    this.closest(`${MENUSECTION_TAGNAME}, ${MENUPOPOVER_TAGNAME}`)
      ?.querySelectorAll(this.tagName)
      .forEach((radio: Element) => {
        if (radio.getAttribute('name') === this.name) {
          radio.removeAttribute('checked');
        }
      });
    this.setAttribute('checked', '');
  };

  /**
   * Returns a static radio element if the indicator is set to radio.
   * If the indicator is not set to radio, it returns nothing.
   * @returns TemplateResult | typeof nothing
   */
  private staticRadio(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.RADIO) {
      return nothing;
    }
    return html`
      <mdc-staticradio
        slot="leading-controls"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
      ></mdc-staticradio>
    `;
  }

  /**
   * Returns a checkmark icon if the indicator is set to checkmark and the checked state is true.
   * If the indicator is not set to checkmark or the checked state is false, it returns nothing.
   *
   * The checkmark icon will always be positioned on the trailing side of the menuitem label.
   * @returns TemplateResult | typeof nothing
   */
  private getCheckmarkIcon(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.CHECKMARK || !this.checked) {
      return nothing;
    }
    return html`
      <mdc-icon slot="trailing-controls" name="check-bold" part="radio-icon"></mdc-icon>
    `;
  }

  public override render() {
    return html`
      <div part="leading">
        ${this.staticRadio()}
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
        ${this.getCheckmarkIcon()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default MenuItemRadio;
