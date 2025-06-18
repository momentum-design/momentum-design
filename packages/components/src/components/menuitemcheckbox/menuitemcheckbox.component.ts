import type { CSSResult, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { ROLE } from '../../utils/roles';
import MenuItem from '../menuitem/menuitem.component';
import { TYPE } from '../text/text.constants';
import { TOGGLE_SIZE } from '../toggle/toggle.constants';
import { DEFAULTS, INDICATOR } from './menuitemcheckbox.constants';
import type { Indicator } from './menuitemcheckbox.types';
import { ARIA_CHECKED_STATES } from '../menusection/menusection.constants';
import type { AriaCheckedStates } from '../menusection/menusection.types';
import styles from './menuitemcheckbox.styles';

/**
 * A menuitemcheckbox component is a checkable menuitem.
 * There should be no focusable descendants inside this menuitemcheckbox component.
 *
 * The `aria-checked` attribute indicates whether the menuitemcheckbox is checked or not.
 *
 * The `indicator` attribute is used to differentiate between <b>checkbox</b>, <b>checkmark</b> and <b>toggle</b>.
 * By default the `indicator` is set to <b>checkbox</b>.<br/>
 *
 * The checkbox will always be positioned on the leading side of the menuitem label and
 * the toggle and checkmark will always be positioned on the trailing side.
 *
 * The checkbox will have the possible states of `true` or `false`.
 * If the indicator is set to <b>checkmark</b> and if the `aria-checked` attribute is set to `true`,
 * then the checkmark will be displayed. if not, then no indicator will be displayed.
 *
 * If you want only one item in a group to be checked, consider using menuitemradio component.
 *
 * If a menuitemcheckbox is disabled, then the `aria-disabled` attribute is set to `true`.
 *
 * @dependency mdc-staticcheckbox
 * @dependency mdc-statictoggle
 * @dependency mdc-icon
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
   * The aria-checked attribute is used to indicate that the menuitemcheckbox is checked or not.
   * @default 'false'
   */
  @property({ type: String, reflect: true, attribute: 'aria-checked' })
  override ariaChecked: AriaCheckedStates = DEFAULTS.ARIA_CHECKED;

  /**
   * The indicator attribute is used to differentiate between <b>checkbox</b> and <b>toggle</b>.
   * @default 'checkbox'
   */
  @property({ type: String, reflect: true }) indicator: Indicator = DEFAULTS.INDICATOR;

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.MENUITEMCHECKBOX;
    this.addEventListener('click', this.menuitemcheckboxHandleClick);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.menuitemcheckboxHandleClick);
  }

  /**
   * Handles click events to toggle checked state
   * If the menuitemcheckbox is disabled, it does nothing.
   * If the menuitemcheckbox is not disabled, it toggles the `aria-checked` state between `true` and `false`.
   */
  private menuitemcheckboxHandleClick = () => {
    if (this.disabled) return;
    const prevChecked = this.ariaChecked === ARIA_CHECKED_STATES.TRUE;
    this.ariaChecked = prevChecked ? ARIA_CHECKED_STATES.FALSE : ARIA_CHECKED_STATES.TRUE;
  };

  private staticCheckbox(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.CHECKBOX) {
      return nothing;
    }
    return html`
      <mdc-staticcheckbox
        slot="leading-controls"
        ?checked="${this.ariaChecked === ARIA_CHECKED_STATES.TRUE}"
        ?disabled="${this.disabled}"
      ></mdc-staticcheckbox>
  `;
  }

  private staticToggle(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.TOGGLE) {
      return nothing;
    }
    return html`
      <mdc-statictoggle
        slot="trailing-controls"
        ?checked="${this.ariaChecked === ARIA_CHECKED_STATES.TRUE}"
        ?disabled="${this.disabled}"
        size="${TOGGLE_SIZE.COMPACT}"
      ></mdc-statictoggle>
    `;
  }

  private getCheckmarkIcon(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.CHECKMARK || this.ariaChecked === ARIA_CHECKED_STATES.FALSE) {
      return nothing;
    }
    return html`
      <mdc-icon
        slot="trailing-controls"
        name="check-bold"
        part="checkmark-icon"
      ></mdc-icon>
    `;
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
        ${this.staticToggle()}
        ${this.getCheckmarkIcon()}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default MenuItemCheckbox;
