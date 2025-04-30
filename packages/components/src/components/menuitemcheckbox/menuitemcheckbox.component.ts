import type { CSSResult, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import MenuItem from '../menuitem/menuitem.component';
import { TYPE } from '../text/text.constants';
import { TOGGLE_SIZE } from '../toggle/toggle.constants';
import { ARIA_CHECKED_STATES, DEFAULTS, INDICATOR } from './menuitemcheckbox.constants';
import type { AriaCheckedStates, Indicator } from './menuitemcheckbox.types';

/**
 * A menuitemcheckbox component is a checkable menuitem.
 * There should be no focusable descendants inside this menuitemcheckbox component.
 *
 * The `aria-checked` menuitemcheckbox attribute is used to indicate that the menuitemcheckbox is
 * checked, indeterminate or not.
 *
 * The `indicator` attribute is used to differentiate between <b>checkbox</b> and <b>toggle</b>.
 * By default the `indicator` is set to <b>checkbox</b>.<br/>
 *
 * The checkbox will be positioned on the leading side of the menuitem label and
 * the toggle will be positioned on the trailing side.
 *
 * The checkbox will have the possible states of `true`, `false` or `mixed`, whereas
 * the toggle will only have the state of `true` or `false` and not `mixed`.
 *
 * If your want only one item in a group to be checked, consider using menuitemradio component.
 *
 * If a menuitemcheckbox is disabled, then the `aria-disabled` attribute is set to `true`.
 *
 * @dependency mdc-staticcheckbox
 * @dependency mdc-statictoggle
 * @dependency mdc-text
 *
 * @tagname mdc-menuitemcheckbox
 *
 * @event change - (React: onChange) This event is dispatched when the menuitemcheckbox changes.
 * @event click - (React: onClick) This event is dispatched when the menuitemcheckbox is clicked.
 * @event focus - (React: onFocus) This event is dispatched when the menuitemcheckbox receives focus.
 */
class MenuItemCheckbox extends MenuItem {
  /**
   * The aria-checked attribute is used to indicate that the menuitemcheckbox is checked, indeterminate or not.
   * @default 'false'
   */
  @property({ type: String, reflect: true, attribute: 'aria-checked' })
  override ariaChecked: AriaCheckedStates = DEFAULTS.ARIA_CHECKED;

  /**
   * The aria-checked attribute is used to indicate that the menuitemcheckbox is checked, indeterminate or not.
   * @default 'false'
   */
  @property({ type: String, reflect: true }) indicator: Indicator = DEFAULTS.INDICATOR;

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'menuitemcheckbox';
  }

  private staticCheckbox(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.CHECKBOX) {
      return nothing;
    }
    return html`
    <div part="leading">
      <mdc-staticcheckbox
        slot="leading-controls"
        ?checked="${this.ariaChecked === ARIA_CHECKED_STATES.TRUE}"
        ?indeterminate="${this.ariaChecked === ARIA_CHECKED_STATES.MIXED}"
        ?disabled="${this.disabled}"
      ></mdc-staticcheckbox>
    </div>
  `;
  }

  private staticToggle(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.TOGGLE) {
      return nothing;
    }
    return html`
    <div part="trailing">
      <mdc-statictoggle
        slot="trailing-controls"
        ?checked="${this.ariaChecked === ARIA_CHECKED_STATES.TRUE}"
        ?disabled="${this.disabled}"
        size="${TOGGLE_SIZE.COMPACT}"
      ></mdc-statictoggle>
    </div>
  `;
  }

  public override render() {
    return html`
      ${this.staticCheckbox()}
      <div part="leading-text">
        ${this.getText('leading-text-primary-label', TYPE.BODY_MIDSIZE_REGULAR, this.label)}
        ${this.getText('leading-text-secondary-label', TYPE.BODY_MIDSIZE_REGULAR, this.secondaryLabel)}
      </div>
      ${this.staticToggle()}
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles];
}

export default MenuItemCheckbox;
