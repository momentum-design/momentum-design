import type { CSSResult, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import MenuItem from '../menuitem/menuitem.component';
import { TOGGLE_SIZE } from '../toggle/toggle.constants';
import { ARIA_CHECKED_STATES, DEFAULTS, INDICATOR } from './menuitemcheckbox.constants';
import styles from './menuitemcheckbox.styles';
import type { AriaCheckedStates, Indicator } from './menuitemcheckbox.types';

/**
 * A menuitemcheckbox component is a checkable menuitem.
 * There should be no focusable descendants inside this menuitemcheckbox component.
 *
 * The `aria-checked` menuitemcheckbox attribute is used to indicate that the menuitemcheckbox is checked or not.
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
 * If your want only one item in a group to be checked, consider using menuitemradio component.
 *
 * If a menuitemcheckbox is disabled, then the `aria-disabled` attribute is set to `true`.
 *
 * @dependency mdc-staticcheckbox
 * @dependency mdc-statictoggle
 * @dependency mdc-icon
 *
 * @tagname mdc-menuitemcheckbox
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

  private getCheckmarkIcon(): TemplateResult | typeof nothing {
    if (this.indicator !== INDICATOR.CHECKMARK || this.ariaChecked === ARIA_CHECKED_STATES.FALSE) {
      return nothing;
    }
    return html`
      <div part="trailing">
        <mdc-icon
          slot="trailing-controls"
          name="check-bold"
          part="checkmark-icon"
        ></mdc-icon>
      </div>
    `;
  }

  public override render() {
    return html`
      ${this.staticCheckbox()}
      ${super.render()}
      ${this.staticToggle()}
      ${this.getCheckmarkIcon()}
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles, ...styles];
}

export default MenuItemCheckbox;
