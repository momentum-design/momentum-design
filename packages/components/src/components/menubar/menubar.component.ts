import { html } from 'lit';
import type { CSSResult, PropertyValues } from 'lit';
import { Component } from '../../models';
import { MenuMixin } from '../../utils/mixins/MenuMixin';
import { ROLE } from '../../utils/roles';
import styles from './menubar.styles';

/**
 * Menubar is a navigational menu component that provides a horizontal (default) or vertical fixed list of menu items,
 * with support for nested submenus and keyboard navigation. It serves as a container
 * for menu items and manages their interaction patterns, including:
 * - Keyboard navigation (arrow keys, Home, End)
 * - Menu item activation (Enter/Space)
 * - Submenu toggling (Right/Left arrow keys)
 * - Focus management
 * - Support for both horizontal and vertical orientations
 * - Integration with MenuPopover for nested menus
 *
 * A menubar will contain a set of menu items and their associated popovers.
 * Each menu item can have a popover for nested menus.
 *
 * The component automatically handles ARIA attributes and follows WAI-ARIA menu design patterns.
 * It works in conjunction with `mdc-menuitem` and `mdc-menupopover` to create accessible menu structures.
 *
 * @tagname mdc-menubar
 * @slot default - Contains the menu items and their associated popovers
 */
class MenuBar extends MenuMixin(Component) {
  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('click', this.handleMouseClick);
  }

  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENUBAR;
  }

  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    if (changedProperties.has('ariaOrientation')) {
      this.updatePopoverPlacementBasedOnOrientation();
    }
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuBar;
