import type { CSSResult, PropertyValues } from 'lit';
import ListItem from '../listitem/listitem.component';

/**
 * menuitem component is inherited by listitem component with the role set "menuitem".<br/>
 * A menu item can contain an icon on the leading or trailing side.
 *
 * @dependency mdc-text
 *
 * @tagname mdc-menuitem
 *
 * @event change - (React: onChange) This event is dispatched when the menuitem changes.
 * @event click - (React: onClick) This event is dispatched when the menuitem is clicked.
 * @event focus - (React: onFocus) This event is dispatched when the menuitem receives focus.
 */
class MenuItem extends ListItem {
  override connectedCallback(): void {
    super.connectedCallback();
    this.role = 'menuitem';

    this.tertiaryLabel = undefined as unknown as string;
    this.sublineText = undefined as unknown as string;
  }

  override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', `${this.disabled}`);
    }
  }

  public static override styles: Array<CSSResult> = [...ListItem.styles];
}

export default MenuItem;
