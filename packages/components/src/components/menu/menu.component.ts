import { CSSResult } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import { ROLE } from '../../utils/roles';
import List from '../list/list.component';

/**
 * mdc-menu component is used to display a group of menu items. It is used as a container to wrap menu items.
 * It contains the menu header component.
 *
 * @tagname mdc-menu
 *
 * @slot default - This is a default/unnamed slot
 */
class Menu extends List {
  /** @internal */
  @queryAssignedElements({ selector: 'mdc-menuitem' })
  override listItems!: Array<HTMLElement>;

  override connectedCallback(): void {
    super.connectedCallback();
    this.dataRole = ROLE.MENU;
  }

  public static override styles: Array<CSSResult> = [...List.styles];
}

export default Menu;
