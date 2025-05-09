import { CSSResult, html } from 'lit';
import { Component } from '../../models';
import { MenuMixin } from '../../utils/mixins/MenuMixin';
import { ROLE } from '../../utils/roles';
import styles from './menubar.styles';

/**
 * menubar component, which ...
 *
 * @tagname mdc-menubar
 *
 * @slot default - This is a default/unnamed slot
 */
class MenuBar extends MenuMixin(Component) {
  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENUBAR;

    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('click', this.handleMouseClick);
  }

  /**
   * Handles the mouse click event on the menubar slot which targets one of the menu items.
   * Finds the index of the target element in the list items array and calls
   * `resetTabIndexAndSetActiveTabIndex` with that index.
   * @param event - The mouse event.
   */
  private handleMouseClick(event: MouseEvent): void {
    this.setTabIndexOnMouseClick(event);
    // const activeMenuItem = event.target as HTMLElement;
    // const hasCurrentMenuItemHasChildren = activeMenuItem?.hasAttribute('aria-expanded');
    // if (hasCurrentMenuItemHasChildren) {}
    // const isMenuPopoverOpen = this.menuPopoverItems
    //   .some((node) => node.getAttribute('triggerid') === activeMenuItem.id);
    // console.log(isMenuPopoverOpen);
    // if (isMenuPopoverOpen) {
    //   this.menuPopoverItems.forEach((node) => {
    //     node.setAttribute('trigger', 'mouseenter');
    //   });
    // }
  }

  public override firstUpdated(): void {
    // For the first, we set the first element only as active.
    this.resetTabIndexAndSetActiveTabIndex(0);
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuBar;
