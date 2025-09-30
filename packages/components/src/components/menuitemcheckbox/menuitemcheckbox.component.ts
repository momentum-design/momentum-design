import type { PropertyValues, CSSResult, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { ROLE } from '../../utils/roles';
import MenuItem from '../menuitem/menuitem.component';
import { TYPE } from '../text/text.constants';
import { TOGGLE_SIZE } from '../toggle/toggle.constants';
import { ControlTypeMixin } from '../../utils/mixins/ControlTypeMixin';

import { DEFAULTS, INDICATOR } from './menuitemcheckbox.constants';
import type { Indicator } from './menuitemcheckbox.types';
import styles from './menuitemcheckbox.styles';

/**
 * A menuitemcheckbox component is a checkable menuitem.
 * There should be no focusable descendants inside this menuitemcheckbox component.
 *
 * The `checked` attribute indicates whether the menuitemcheckbox is checked or not.
 *
 * Menu item checkbox has `name` and `value` attribute that can be used to identify the menu item when it is selected.
 *
 * The `indicator` attribute is used to differentiate between <b>checkbox</b>, <b>checkmark</b>, <b>toggle</b> and <b>none</b>.
 * By default, the `indicator` is set to <b>checkbox</b>.<br/>
 *
 * The checkbox will always be positioned on the leading side of the menuitem label and
 * the toggle and checkmark will always be positioned on the trailing side.
 *
 * The checkbox will have the possible states of `true` or `false`.
 * If the indicator is set to <b>checkmark</b> and if the `checked` attribute is set to `true`,
 * then the checkmark will be displayed. if not, then no indicator will be displayed.
 *
 * The forth options for the `indicator` is <b>none</b>, which will not display any indicator at all.
 * It is intended to be used for customised menu items where the indicator is implemented differently.
 * For example, you can use a custom icon or a different visual element to indicate the state of the menu item.
 * Make sure the new indicator is accessible.
 *
 * If you want only one item in a group to be checked, consider using menuitemradio component.
 *
 * @dependency mdc-staticcheckbox
 * @dependency mdc-statictoggle
 * @dependency mdc-icon
 *
 * @tagname mdc-menuitemcheckbox
 *
 * @slot leading-controls - slot for menu item checkbox controls to appear of leading end.
 * @slot leading-text-primary-label - slot for menu item checkbox primary label.
 * @slot leading-text-secondary-label - slot for menu item checkbox secondary label.
 * @slot leading-text-tertiary-label - slot for menu item checkbox tertiary label.
 * @slot trailing-text-side-header - slot for menu item checkbox side header text.
 * @slot trailing-text-subline - slot for menu item checkbox subline text.
 * @slot trailing-controls - slot for menu item checkbox controls to appear of trailing end.
 *
 * @event change - (React: onChange) This event is dispatched when the menuitemcheckbox changes.
 * @event click - (React: onClick) This event is dispatched when the menuitemcheckbox is clicked.
 * @event focus - (React: onFocus) This event is dispatched when the menuitemcheckbox receives focus.
 *
 * @cssproperty --mdc-listitem-padding-left-and-right - Controls the padding on the left and right of the menuitemcheckbox.
 *
 * @csspart checkmark-icon - Allows customization of the checkmark icon.
 * @csspart leading - Allows customization of the leading part.
 * @csspart leading-arrow - Allows customization of leading arrow icon.
 * @csspart leading-text - Allows customization of the leading text part.
 * @csspart trailing - Allows customization of the trailing part.
 * @csspart trailing-arrow - Allows customization of trailing arrow icon.
 * @csspart trailing-text - Allows customization of the trailing text part.
 */
class MenuItemCheckbox extends ControlTypeMixin(MenuItem) {
  /**
   * The checked attribute is used to indicate that the menuitemcheckbox is checked or not.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  /**
   * The indicator attribute is used to differentiate between <b>checkbox</b> and <b>toggle</b>.
   * @default 'checkbox'
   */
  @property({ type: String, reflect: true }) indicator: Indicator = DEFAULTS.INDICATOR;

  constructor() {
    super();
    this.addEventListener('click', this.handleMouseClick.bind(this));
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.MENUITEMCHECKBOX;
  }

  /**
   * Handles click events to toggle checked state
   * If the menuitemcheckbox is disabled, it does nothing.
   * If the menuitemcheckbox is not disabled, it toggles checked if uncontrolled, and dispatches the 'change' event.
   */
  private handleMouseClick() {
    if (this.disabled) return;

    if (this.controlType !== 'controlled') {
      this.checked = !this.checked;
    }
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('checked')) {
      this.ariaChecked = `${this.checked}`;
    }
  }

  /**
   * Returns a static checkbox element if the indicator is set to checkbox.
   * If the indicator is not set to checkbox, it returns nothing.
   * @returns TemplateResult | typeof nothing
   */
  private staticCheckbox(): TemplateResult | typeof nothing {
    if (this.indicator === INDICATOR.CHECKBOX) {
      return html`
        <mdc-staticcheckbox
          slot="leading-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        ></mdc-staticcheckbox>
      `;
    }
    return nothing;
  }

  /**
   * Returns a static toggle element if the indicator is set to toggle.
   * If the indicator is not set to toggle, it returns nothing.
   *
   * The toggle will always be positioned on the trailing side of the menuitem label.
   * @returns TemplateResult | typeof nothing
   */
  private staticToggle(): TemplateResult | typeof nothing {
    if (this.indicator === INDICATOR.TOGGLE) {
      return html`
        <mdc-statictoggle
          slot="trailing-controls"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          size="${TOGGLE_SIZE.COMPACT}"
        ></mdc-statictoggle>
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
  private getCheckmarkIcon(): TemplateResult | typeof nothing {
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
      <slot name="content">
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
      </slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default MenuItemCheckbox;
