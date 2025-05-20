import { CSSResult } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import { ROLE } from '../../utils/roles';
import List from '../list/list.component';
import { TAG_NAME as MENUITEM_TAGNAME } from '../menuitem/menuitem.constants';

/**
 * mdc-menu component is used to display a group of menu items. It is used as a container to wrap menu items.
 * It contains the menu header component.
 *
 * @dependency mdc-text
 *
 * @tagname mdc-menu
 *
 * @slot default - This is a default/unnamed slot
 */
class Menu extends List {
  /** @internal */
  @queryAssignedElements({ selector: `${MENUITEM_TAGNAME}:not([disabled])` })
  override listItems!: Array<HTMLElement>;

  override connectedCallback(): void {
    super.connectedCallback();
    this.dataRole = ROLE.MENU;
  }

  public static override styles: Array<CSSResult> = [...List.styles];
}

export default Menu;
