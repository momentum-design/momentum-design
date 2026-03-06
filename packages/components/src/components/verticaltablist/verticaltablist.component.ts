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
 * `mdc-verticaltablist` is a vertical tab list component that extends the List component.
 * It organizes tabs vertically and follows the same WCAG standards as the horizontal tablist.
 *
 * Children of the vertical tab list are `mdc-tab` elements, sent to the default slot.
 * Currently only "line" variant of the tab is supported, setting other variants doesn't have any effect.
 * The variant is automatically set on the tab when it is added to the vertical tab list, so there is no need to set it manually.
 *
 * The tabs can be navigated using the up/down arrow keys, and selected by clicking,
 * or pressing the Enter and Space keys.
 *
 * **Implicit accessibility rules**
 *
 * - The element that serves as the container for the set of tabs has role `tablist`.
 * - Each element that serves as a tab has role `tab` and is contained within the element with role `tablist` (Tab components passed in to default slot).
 * - The active tab element has the state `aria-selected` set to `true`
 *   and all other tab elements have it set to `false`.
 *
 * **Accessibility notes for consuming (have to be explicitly set when you consume the component)**
 *
 * - Each element that contains the `content panel` for a `tab` has role `tabpanel`.
 * - The `tablist` element needs to have a label provided by `data-aria-label`.
 * - Each element with role `tab` has the property `aria-controls`
 *   that should refer to its associated `tabpanel` element.
 * - The vertical orientation is conveyed through the aria-orientation property on the `tablist` element, which is set to `vertical` by the component.
 * - Each element with role `tabpanel` has the property `aria-labelledby` referring to its associated `tab` element.
 *
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
