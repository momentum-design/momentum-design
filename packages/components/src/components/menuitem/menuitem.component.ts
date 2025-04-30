import type { CSSResult } from 'lit';
import ListItem from '../listitem/listitem.component';
import type { ListItemVariants } from '../listitem/listitem.types';

/**
 * menuitem component is inherited by listitem component with the role set `menuitem`.<br/>
 * A menu item can contain an icon on the leading or trailing side.
 *
 * The leading and trailing slots can be used to display controls and text.<br/>
 * Based on the leading/trailing slot, the position of the controls and text can be adjusted.
 *
 * Please use mdc-menu as a parent element even when there is only menuitem for a11y purpose.
 *
 * @dependency mdc-text
 *
 * @tagname mdc-menuitem
 *
 * @event click - (React: onClick) This event is dispatched when the menuitem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the menuitem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the menuitem.
 * @event focus - (React: onFocus) This event is dispatched when the menuitem receives focus.
 */
class MenuItem extends ListItem {
  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'menuitem';

    this.variant = undefined as unknown as ListItemVariants;
  }

  public static override styles: Array<CSSResult> = [...ListItem.styles];
}

export default MenuItem;
