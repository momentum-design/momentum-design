import { CSSResult, html } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import { TAG_NAME as MENUITEMRADIO_TAGNAME } from '../menuitemradio/menuitemradio.constants';
import { TAG_NAME as MENUITEMCHECKBOX_TAGNAME } from '../menuitemcheckbox/menuitemcheckbox.constants';
import type MenuItemRadio from '../menuitemradio/menuitemradio.component';
import { ARIA_CHECKED_STATES } from './menusection.constants';
import { Component } from '../../models';
import { ROLE } from '../../utils/roles';

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
  @queryAssignedElements({ selector: MENUITEMRADIO_TAGNAME })
  radios!: MenuItemRadio[];

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', ROLE.GROUP);
    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeydown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeydown);
  }

  /**
   * Handles `click` events within the component.
   * Delegates logic to `toggleCheckedState()` based on the clicked element.
   *
   * @param event - The click event from a child menu item
   *
   * @internal
   */
  private handleClick = (event: MouseEvent) => {
    this.toggleCheckedState(event.target);
  };

  /**
   * Handles `keydown` events within the component.
   * Activates menu items when the Enter or Space keys are pressed.
   *
   * @param event - The keyboard event from a child menu item
   *
   * @internal
   */
  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    if (event.key === ' ') {
      event.preventDefault(); // Prevent page scroll
    }

    this.toggleCheckedState(event.target);
  };

  /**
   * Toggles the `aria-checked` state on a target menu item based on its tag name.
   * - For checkboxes, toggles the checked state.
   * - For radios, ensures only one item is selected in the group.
   *
   * @param target - The event target element to update
   *
   * @internal
   */
  private toggleCheckedState(target: HTMLElement) {
    if (!(target instanceof HTMLElement)) return;

    const tagName = target.tagName.toLowerCase();
    const currentChecked = target.getAttribute('aria-checked') === ARIA_CHECKED_STATES.TRUE;

    switch (tagName) {
      case MENUITEMCHECKBOX_TAGNAME:
        target.setAttribute('aria-checked', String(!currentChecked));
        break;

      case MENUITEMRADIO_TAGNAME:
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
