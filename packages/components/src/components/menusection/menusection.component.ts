import { CSSResult, html } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import { TAG_NAME as MENUITEMRADIO_TAGNAME } from '../menuitemradio/menuitemradio.constants';
import { TAG_NAME as MENUITEMCHECKBOX_TAGNAME } from '../menuitemcheckbox/menuitemcheckbox.constants';
import type MenuItemRadio from '../menuitemradio/menuitemradio.component';
import { DEFAULTS, ARIA_CHECKED_STATES } from './menusection.constants';
import { Component } from '../../models';

/**
 * `mdc-menusection` is a container element used to group a set of menu items.
 *
 * This component supports a mix of `menuitem`, `menuitemcheckbox`, and `menuitemradio` components.
 *
 * - If multiple `menuitemradio` components are slotted into the section, the group enforces a single-selection rule:
 *   only one radio item can be selected at a time.
 * - If `menuitemcheckbox` components are included, their checked state can be toggled independently.
 *
 * @tagname mdc-menusection
 *
 * @slot - Default slot for inserting `menuitem`, `menuitemcheckbox`, or `menuitemradio`
 */
class MenuSection extends Component {
  /**
   * Query assigned `menuitemradio` elements from the default slot.
   * These elements are used to enforce single-selection behavior.
   *
   * @internal
   */
  @queryAssignedElements({ selector: `${MENUITEMRADIO_TAGNAME}` })
  radios!: MenuItemRadio[];

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', DEFAULTS.ROLE);
    this.addEventListener('click', this.handleChildEvent);
    this.addEventListener('keydown', this.handleChildEvent);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleChildEvent);
    this.removeEventListener('keydown', this.handleChildEvent);
  }

  /**
   * Handles click and keydown (Enter/Space) events from child items.
   * Manages toggling of `aria-checked` state for checkbox items,
   * and enforces single selection for radio items.
   *
   * @param event - The MouseEvent or KeyboardEvent triggered by user interaction
   */
  private handleChildEvent(event: MouseEvent | KeyboardEvent) {
    const isKeyboardEvent = event instanceof KeyboardEvent;
    const isActivationEvent = event.type === 'click'
      || (isKeyboardEvent && (event.key === 'Enter' || event.key === ' '));

    if (!isActivationEvent) return;

    if (isKeyboardEvent && event.key === ' ') {
      event.preventDefault(); // Prevent page scroll
    }

    const target = event.target as HTMLElement | null;
    if (!target) return;
    const { nodeName } = target;
    const currentChecked = target.getAttribute('aria-checked') === ARIA_CHECKED_STATES.TRUE;

    switch (nodeName) {
      case MENUITEMCHECKBOX_TAGNAME.toUpperCase():
        target.setAttribute('aria-checked', String(!currentChecked));
        break;

      case MENUITEMRADIO_TAGNAME.toUpperCase():
        if (currentChecked) return;

        this.radios.forEach((radio) => {
          const newCheckedState = radio === target ? ARIA_CHECKED_STATES.TRUE : ARIA_CHECKED_STATES.FALSE;
          radio.setAttribute('aria-checked', newCheckedState);
        });
        break;

      default:
        break;
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: CSSResult[] = [...Component.styles];
}

export default MenuSection;
