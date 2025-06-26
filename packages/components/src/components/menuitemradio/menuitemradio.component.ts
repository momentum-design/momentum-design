import type { CSSResult } from 'lit';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ROLE } from '../../utils/roles';
import MenuItem from '../menuitem/menuitem.component';
import { TYPE } from '../text/text.constants';
import { ARIA_CHECKED_STATES, TAG_NAME as MENUSECTION_TAGNAME } from '../menusection/menusection.constants';
import type { AriaCheckedStates } from '../menusection/menusection.types';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';

/**
 * A menuitemradio component is a checkable menuitem that is used in a menu.
 * A menuitemradio should be checked only one at a time. <br/>
 * There should be no focusable descendants inside this menuitemradio component.
 *
 * The `aria-checked` menuitemradio attribute is used to indicate that the menuitemradio is checked or not.
 *
 * If you want more than one item in a group to be checked, consider using menuitemcheckbox component.
 *
 * If a menuitemradio is disabled, then the `aria-disabled` attribute is set to `true`.
 *
 * @dependency mdc-staticradio
 * @dependency mdc-text
 *
 * @tagname mdc-menuitemradio
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
  @property({ type: String, reflect: true, attribute: 'aria-checked' })
  override ariaChecked: AriaCheckedStates = ARIA_CHECKED_STATES.FALSE;

  /**
   * The name attribute is used to group radio items within the same menu container.
   */
  @property({ type: String, reflect: true }) name = '';

  constructor() {
    super();
    this.addEventListener('click', this.menuitemradioHandleClick);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.MENUITEMRADIO;
  }

  /**
   * Handles click events to set checked state and uncheck siblings in the same group and container.
   * If the menuitemradio is not checked, it sets its aria-checked state to `true`
   * and sets all other menuitemradio elements of the same group with aria-checked state to `false`.
   */
  private menuitemradioHandleClick = () => {
    if (this.disabled || this.ariaChecked === ARIA_CHECKED_STATES.TRUE) return;
    // Find the closest menu container (menupopover or menusection)
    const container = this.closest(`${MENUSECTION_TAGNAME}, ${MENUPOPOVER_TAGNAME}`);
    if (container) {
      const radios = Array.from(container.querySelectorAll(this.tagName)) as MenuItemRadio[];
      radios.forEach(item => {
        const radio = item;
        if (radio.name === this.name) {
          radio.ariaChecked = ARIA_CHECKED_STATES.FALSE;
        }
      });
    }
    this.ariaChecked = ARIA_CHECKED_STATES.TRUE;
  };

  public override render() {
    return html`
      <div part="leading-controls">
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.ariaChecked === ARIA_CHECKED_STATES.TRUE}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      </div>
      <div part="leading-text">
        ${this.getText('leading-text-primary-label', TYPE.BODY_MIDSIZE_REGULAR, this.label)}
        ${this.getText('leading-text-secondary-label', TYPE.BODY_MIDSIZE_REGULAR, this.secondaryLabel)}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...MenuItem.styles];
}

export default MenuItemRadio;
