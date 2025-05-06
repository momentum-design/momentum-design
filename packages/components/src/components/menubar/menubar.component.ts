import { CSSResult, html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { Component } from '../../models';
import { KEYS } from '../../utils/keys';
import { ROLE } from '../../utils/roles';
import { TAG_NAME as MENUITEM_TAGNAME } from '../menuitem/menuitem.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import { ORIENTATION } from './menubar.constants';
import styles from './menubar.styles';
import type { Orientation } from './menubar.types';
import { MenuBarUtils } from './menubar.utils';

/**
 * menubar component, which ...
 *
 * @tagname mdc-menubar
 *
 * @slot default - This is a default/unnamed slot
 */
class MenuBar extends Component {
  /** @internal */
  @queryAssignedElements({ selector: MENUITEM_TAGNAME })
  menuItems!: Array<HTMLElement>;

  /** @internal */
  @queryAssignedElements({ selector: MENUPOPOVER_TAGNAME })
  menuPopoverItems!: Array<HTMLElement>;

  /**
   * Aria Orientation
   * @default 'horizontal'
   */
  @property({ type: String, reflect: true, attribute: 'aria-orientation' })
  override ariaOrientation: Orientation = ORIENTATION.HORIZONTAL;

  /** @internal */
  private utils: MenuBarUtils;

  constructor() {
    super();
    this.utils = new MenuBarUtils(this);
  }

  override connectedCallback() {
    super.connectedCallback();
    this.role = ROLE.MENUBAR;

    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('click', this.handleMouseClick);
  }

  /**
   * Handles the keydown event on the menubar element.
   * If the key is 'ArrowLeft' or 'ArrowRight', it focuses to the previous or next menu item
   * it moves focus to the corresponding menu item.
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    this.utils.setTabIndexOnKeyDown(event);
  }

  /**
   * Handles the mouse click event on the menubar slot which targets one of the menu items.
   * Finds the index of the target element in the list items array and calls
   * `resetTabIndexAndSetActiveTabIndex` with that index.
   * @param event - The mouse event.
   */
  private handleMouseClick(event: MouseEvent): void {
    this.utils.setTabIndexOnMouseClick(event);
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
    this.utils.resetTabIndexAndSetActiveTabIndex(0);
  }

  public override render() {
    return html`<slot></slot>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default MenuBar;
