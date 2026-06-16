import { html, type CSSResult } from 'lit';

import List from '../list/list.component';
import { ROLE } from '../../utils/roles';
import { TabListComponentMixin } from '../../utils/mixins/TabListComponentMixin';
import { TAG_NAME as TAB_TAGNAME } from '../tab/tab.constants';
import { ElementStoreChangeTypes } from '../../utils/controllers/ElementStore';
import type ListItem from '../listitem';
import type Tab from '../tab';
import type { OrientationType } from '../list/list.types';

import styles from './verticaltablist.styles';

/**
 * @tagname mdc-verticaltablist
 *
 * @dependency mdc-tab
 *
 * @event change - (React: onChange) This event is dispatched when the tab is selected.
 * Event that fires when user changes the active tab.
 *     The function sent as the argument will receive the fired event
 *      and the new tab id can be fetched from event.detail.tabId.
 *
 *    `(event: CustomEvent) => handleTabChange(event.detail.tabId);`
 *
 * @slot Default slot for mdc-tab elements.
 */
class Verticaltablist extends TabListComponentMixin(List) {
  /**
   * @internal
   */
  public override orientation: OrientationType = 'vertical';

  /**
   * @internal
   */
  protected override isValidItem(item: Element): boolean {
    return item.matches(`${TAB_TAGNAME}:not([disabled])`);
  }

  protected override onElementStoreUpdate(
    item: Tab | ListItem,
    changeType: ElementStoreChangeTypes,
    index: number,
  ): void {
    super.onElementStoreUpdate(item as ListItem, changeType, index);

    // Set the variant of the tab to line when it is added to the vertical tab list,
    // as currently only line variant is supported in vertical tab list.
    if (changeType === 'added') {
      (item as Tab).setAttribute('variant', 'line');
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.TABLIST;
    this.setAttribute('aria-orientation', 'vertical');
  }

  public override render() {
    return html`
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...List.styles, ...styles];
}

export default Verticaltablist;
