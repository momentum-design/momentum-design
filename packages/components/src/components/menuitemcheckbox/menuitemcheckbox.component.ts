import type { CSSResult, PropertyValues, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { ROLE } from '../../utils/roles';
import MenuItem from '../menuitem/menuitem.component';
import { TYPE } from '../text/text.constants';
import { TOGGLE_SIZE } from '../toggle/toggle.constants';

import { DEFAULTS, INDICATOR } from './menuitemcheckbox.constants';
import styles from './menuitemcheckbox.styles';
import type { Indicator } from './menuitemcheckbox.types';

/**
 * A menuitemcheckbox component is a checkable menuitem.
 * There should be no focusable descendants inside this menuitemcheckbox component.
 *
 * The `checked` attribute indicates whether the menuitemcheckbox is checked or not.
 *
 * The `indicator` attribute is used to differentiate between <b>checkbox</b>, <b>checkmark</b> and <b>toggle</b>.
 * By default the `indicator` is set to <b>checkbox</b>.<br/>
 *
 * The checkbox will always be positioned on the leading side of the menuitem label and
 * the toggle and checkmark will always be positioned on the trailing side.
 *
 * The checkbox will have the possible states of `true` or `false`.
 * If the indicator is set to <b>checkmark</b> then the checkmark will be displayed.
 * If not, then no indicator will be displayed.
 *
 * If you want only one item in a group to be checked, consider using menuitemradio component.
 *
 * If a menuitemcheckbox is checked, then the `aria-checked` attribute is set to `true`.<br/>
 * If a menuitemcheckbox is disabled, then the `aria-disabled` attribute is set to `true`.
 *
 * @dependency mdc-icon
 * @dependency mdc-staticcheckbox
 * @dependency mdc-statictoggle
 * @dependency mdc-text
 * @dependency mdc-tooltip
 *
 * @tagname mdc-menuitemcheckbox
 *
 * @cssproperty --mdc-checkmark-indicator-color - Allows customization of the checkmark indicator color
 *
 * @event change - (React: onChange) This event is dispatched when the menuitemcheckbox changes.
 * @event click - (React: onClick) This event is dispatched when the menuitemcheckbox is clicked.
 * @event focus - (React: onFocus) This event is dispatched when the menuitemcheckbox receives focus.
 */
class MenuItemCheckbox extends MenuItem {
  /**
   * The checked attribute is used to indicate that the menuitemcheckbox is checked or not.
   * @default 'false'
   */
  @property({ type: Boolean, reflect: true }) checked: boolean = DEFAULTS.CHECKED;

  /**
   * The indicator attribute is used to differentiate between <b>checkbox</b>, <b>toggle</b> and <b>checkmark</b>.
   * @default 'checkbox'
   */
  @property({ type: String, reflect: true }) indicator: Indicator = DEFAULTS.INDICATOR;

  constructor() {
    super();
    this.addEventListener('click', this.handleMouseClick);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.MENUITEMCHECKBOX;
  }

  override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', this.checked.toString());
    }
  }

  /**
   * Handles click events to toggle checked state
   * If the menuitemcheckbox is disabled, it does nothing.
   * If the menuitemcheckbox is not disabled, it toggles the `checked` state between `true` and `false`.
   */
  private handleMouseClick = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
  };

  /**
   * Returns a static checkbox element if the indicator is set to checkbox.
   * If the indicator is not set to checkbox, it returns nothing.
   * @returns TemplateResult | typeof nothing
   */
  private staticCheckbox(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.CHECKBOX) {
      return nothing;
    }
    return html`
      <mdc-staticcheckbox
        slot="leading-controls"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
      ></mdc-staticcheckbox>
    `;
  }

  /**
   * Returns a static toggle element if the indicator is set to toggle.
   * If the indicator is not set to toggle, it returns nothing.
   *
   * The toggle will always be positioned on the trailing side of the menuitem label.
   * @returns TemplateResult | typeof nothing
   */
  private staticToggle(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.TOGGLE) {
      return nothing;
    }
    return html`
      <mdc-statictoggle
        slot="trailing-controls"
        ?checked="${this.checked}"
        ?disabled="${this.disabled}"
        size="${TOGGLE_SIZE.COMPACT}"
      ></mdc-statictoggle>
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
    return html` <mdc-icon slot="trailing-controls" name="check-bold" part="checkmark-icon"></mdc-icon> `;
  }

  public override render() {
    return html`
      <div part="leading">
        ${this.staticCheckbox()}
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
        ${this.staticToggle()} ${this.getCheckmarkIcon()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default MenuItemCheckbox;
