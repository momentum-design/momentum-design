/* eslint-disable no-void */
/* eslint-disable no-param-reassign */
import { html, nothing } from 'lit';
import type { CSSResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import Tab from '../tab/tab.component';
import { TAG_NAME as TAB_TAGNAME } from '../tab/tab.constants';
import Button from '../button/button.component';
import { ROLE } from '../../utils/roles';
import { KeyDownHandledMixin } from '../../utils/mixins/KeyDownHandledMixin';
import { KeyToActionMixin } from '../../utils/mixins/KeyToActionMixin';
import { ListNavigationMixin } from '../../utils/mixins/ListNavigationMixin';
import { CaptureDestroyEventForChildElement } from '../../utils/mixins/lifecycle/CaptureDestroyEventForChildElement';
import { ElementStore, type ElementStoreChangeTypes } from '../../utils/controllers/ElementStore';
import type { OrientationType } from '../list/list.types';
import type { BaseArray } from '../../utils/virtualIndexArray';
import { TabListComponentMixin } from '../../utils/mixins/TabListComponentMixin';

import styles from './tablist.styles';
import { ARROW_BUTTON_DIRECTION } from './tablist.constants';
import type { ArrowButtonDirectionType } from './tablist.types';
import { getFirstTab, getLastTab, getActiveTab } from './tablist.utils';

/**
 * Tab list organizes tabs into a container.
 *
 * Children of the tab list are `mdc-tab` elements, sent to the default slot.
 *
 * The tabs can be navigated using the left/right arrow keys, and selected by clicking,
 *  or pressing the Enter and Space keys.
 *
 * **Implicit accessibility rules**
 *
 * - The element that serves as the container for the set of tabs has role `tablist`.
 * - Each element that serves as a tab has role `tab` and is contained within the element with role `tablist`.
 * - The active tab element has the state `aria-selected` set to `true`
 *   and all other tab elements have it set to `false`.
 *
 *
 * **Accessibility notes for consuming (have to be explicitly set when you consume the component)**
 *
 * - Each element that contains the `content panel` for a `tab` has role `tabpanel`.
 * - The `tablist` element needs to have a label provided by `data-aria-label`.
 * - Each element with role `tab` has the property `aria-controls`
 *  that should refer to its associated `tabpanel` element.
 * - Each element with role `tabpanel` has the property `aria-labelledby` referring to its associated `tab` element.
 * - If a `tab` element has a popup menu, it needs to have the property `aria-haspopup` set to either `menu` or `true`.
 *
 * @tagname mdc-tablist
 *
 * @dependency mdc-tab
 * @dependency mdc-button
 *
 * @event change - (React: onChange) This event is dispatched when the tab is selected.
 * Event that fires when user changes the active tab.
 *     The function sent as the argument will receive the fired event
 *      and the new tab id can be fetched from event.detail.tabId.
 *
 *    `(event: CustomEvent) => handleTabChange(event.detail.tabId);`
 *
 * @slot Default slot for mdc-tab elements.
 *
 * @cssproperty --mdc-tablist-gap - Gap between tabs
 * @cssproperty --mdc-tablist-width - Width of the tablist
 * @cssproperty --mdc-tablist-arrow-button-margin - Margin value for the arrow button
 *
 * @csspart container - The tablist container.
 */
class TabList extends ListNavigationMixin(
  CaptureDestroyEventForChildElement(KeyDownHandledMixin(KeyToActionMixin(TabListComponentMixin(Component)))),
) {
  /**
   * Label for the tablist.
   * This is used when the tablist does not have a visible label.
   */
  @property({ type: String, attribute: 'data-aria-label' })
  dataAriaLabel?: string;

  /**
   * @internal
   */
  protected override get navItems(): BaseArray<Tab> {
    return this.itemsStore.items;
  }

  /**
   * @internal
   */
  private itemsStore: ElementStore<Tab>;

  /**
   * @internal
   */
  protected override orientation: OrientationType = 'horizontal';

  /**
   * The tab container element.
   * Has the role of `tablist`.
   * @internal
   */
  @query('[part="container"]')
  private tabsContainer?: HTMLDivElement;

  /**
   * Arrow button that is not focused.
   * @internal
   */
  @query('mdc-button:not(:focus-visible)')
  private notFocusedArrowButton?: Button;

  /**
   * Instead of using 'left' and 'right' for notation of the arrow buttons, we use 'forward' and 'backward'.
   * Since the elements of the tablist gets flipped in RTL layouts, the arrow buttons also flip.
   * For both RTL and LTR layouts, the forward arrow button moves the tabs in the forward direction.
   * i.e. the forward arrow button moves the tabs to the right in LTR layouts and to the left in RTL layouts.
   */

  /**
   * @internal
   */
  @state() private showForwardArrowButton: boolean = false;

  /**
   * @internal
   */
  @state() private showBackwardArrowButton: boolean = false;

  /**
   * @internal
   */
  private isRtl(): boolean {
    return (
      document.querySelector('html')?.getAttribute('dir') === 'rtl' || window.getComputedStyle(this).direction === 'rtl'
    );
  }

  /**
   * @internal
   */
  protected isValidItem(item: Element): boolean {
    return item.matches(`${TAB_TAGNAME}:not([disabled])`);
  }

  /**
   * @internal
   */
  protected onElementStoreUpdate(item: Tab, changeType: ElementStoreChangeTypes, index: number) {
    if (changeType === 'added') {
      // Update the tabIndex of the list items when a new item is added.
      item.tabIndex = -1;
      if (this.navItems.length === 0) {
        // If this is the first item added, set its tabIndex to 0 to make it focusable
        item.tabIndex = 0;
      }
    } else if (changeType === 'removed' && item.tabIndex === 0) {
      let newIndex = index + 1;
      if (newIndex >= this.navItems.length) {
        newIndex = index - 1;
      }

      const tab = this.navItems.at(newIndex);
      if (tab instanceof Tab) {
        tab.focus();
      }
      this.resetTabIndexes(newIndex, false);
    }
  }

  /**
   * Overriding the resetTabIndexAndSetFocus function to set the focus on the new active tab when the active tab changes.
   * Also, handle the visibility of the arrow buttons after resetting the tab indexes and setting the focus.
   * @internal
   */
  protected override resetTabIndexAndSetFocus(newIndex: number, oldIndex?: number): boolean {
    const result = super.resetTabIndexAndSetFocus(newIndex, oldIndex, false, false);
    const itemToFocus = this.navItems?.at(newIndex);
    if (itemToFocus instanceof Tab) {
      itemToFocus.focus();
    }
    this.handleArrowButtonVisibility();
    return result;
  }

  constructor() {
    super();

    // This must be initialized after the destroyed event listener
    // to keep the element in the itemStore in order to move the focus correctly
    this.itemsStore = new ElementStore<Tab>(this, {
      isValidItem: this.isValidItem,
      onStoreUpdate: this.onElementStoreUpdate.bind(this),
    });
  }

  /**
   * Set the initial active tab after firstUpdated,
   * since this.tabs (=slot) are only available after
   * the first update
   *
   * Also set up the event listeners.
   */
  protected override async firstUpdated(): Promise<void> {
    if (!this.navItems) {
      return;
    }

    /**
     * If there are no tabs, skip the initialization of the active tab and the event listeners.
     * Then throw an error.
     */
    if (Array.isArray(this.navItems) && this.navItems.length === 0) {
      if (this.onerror) {
        this.onerror('The tablist component must have at least one child tab');
      }
      return;
    }

    const tabIds = this.navItems.map(tab => tab.tabId);
    if (new Set(tabIds).size !== this.navItems.length) {
      if (this.onerror) {
        this.onerror('The tabs inside the tab list must have unique tab ids');
      }
    }

    const resizeObserver = new ResizeObserver(async () => {
      this.handleArrowButtonVisibility();
    });
    resizeObserver.observe(this);

    if (!this.activeTabId) {
      this.activeTabId = getFirstTab(this.navItems)?.tabId;
    }

    this.tabsContainer?.addEventListener('focusin', this.handleFocus.bind(this));
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.tabsContainer?.removeEventListener('focusin', this.handleFocus);
  }

  /**
   * When the tablist receives focus, then focus the active tab.
   *
   * @param event - Focus event.
   * @internal
   */
  private async handleFocus(event: FocusEvent) {
    /**
     * If the element losing focus is a tab, do nothing.
     * If the element gaining focus is not a tab, do nothing.
     * This also covers the case when previous focus was on a tab that belongs to another tablist.
     */
    if (event.relatedTarget instanceof Tab || !(event.target instanceof Tab)) {
      return;
    }

    const activeTab = getActiveTab(this.navItems || []);

    if (!(activeTab instanceof Tab)) {
      return;
    }

    const activeTabIndex = this.navItems.findIndex(tab => tab === activeTab);

    this.resetTabIndexAndSetFocus(activeTabIndex, undefined);
  }

  /**
   * Should the arrow button be shown.
   *
   * @internal
   *
   * @param direction - The direction of the arrow button.
   */
  private shouldShowArrowButton(direction: ArrowButtonDirectionType): boolean {
    return direction === ARROW_BUTTON_DIRECTION.FORWARD ? this.showForwardArrowButton : this.showBackwardArrowButton;
  }

  /**
   * If an arrow button is in focus and it gets removed, switch focus to the opposite arrow button.
   * If both arrow buttons are removed, switch focus to the active tab.
   *
   * @internal
   */
  private switchFocus(): void {
    if (!this.showBackwardArrowButton && !this.showForwardArrowButton) {
      getActiveTab(this.navItems || [])?.focus();
    } else if (
      (this.showBackwardArrowButton && !this.showForwardArrowButton) ||
      (this.showForwardArrowButton && !this.showBackwardArrowButton)
    ) {
      this.notFocusedArrowButton?.focus();
    }
  }

  /**
   * Show or hide the arrow buttons based on the position of the tabs
   * corresponding to the tab list.
   *
   * @internal
   */
  private handleArrowButtonVisibility(): void {
    if (!this.navItems || !this.tabsContainer) {
      return;
    }

    let isArrowButtonFocused: boolean = false;

    /**
     * If the active element is an arrow button,
     * then run the switchFocus function after setting the arrow button visibility.
     */
    if (this.shadowRoot?.activeElement instanceof Button) {
      isArrowButtonFocused = true;
    }

    const firstTab = getFirstTab(this.navItems)!;
    const lastTab = getLastTab(this.navItems)!;
    const firstTabLeftEdgePosition = firstTab.getBoundingClientRect().left;
    const tabListLeftEdgePosition = this.tabsContainer?.getBoundingClientRect().left;
    const lastTabRightEdgePosition = lastTab.getBoundingClientRect().right;
    const tabListRightEdgePosition = this.tabsContainer?.getBoundingClientRect().right;

    // when RTL, the edges are reversed
    const firstTabRightEdgePosition = firstTab.getBoundingClientRect().right;
    const lastTabLeftEdgePosition = lastTab.getBoundingClientRect().left;

    if (!this.isRtl()) {
      if (firstTabLeftEdgePosition <= tabListLeftEdgePosition) {
        this.showBackwardArrowButton = true;
      } else {
        this.showBackwardArrowButton = false;
      }

      if (lastTabRightEdgePosition > tabListRightEdgePosition) {
        this.showForwardArrowButton = true;
      } else {
        this.showForwardArrowButton = false;
      }

      if (isArrowButtonFocused) {
        this.switchFocus();
      }
      return;
    }

    if (firstTabRightEdgePosition > tabListRightEdgePosition) {
      this.showBackwardArrowButton = true;
    } else {
      this.showBackwardArrowButton = false;
    }

    if (lastTabLeftEdgePosition < tabListLeftEdgePosition) {
      this.showForwardArrowButton = true;
    } else {
      this.showForwardArrowButton = false;
    }

    if (isArrowButtonFocused) {
      this.switchFocus();
    }
  }

  /**
   * Scroll tabs forward or backward.
   *
   * @internal
   *
   * @param direction - The direction to scroll the tabs in.
   */
  private async scrollTabs(direction: ArrowButtonDirectionType): Promise<void> {
    const forwardMultiplier = !this.isRtl() ? 1 : -1;
    const backwardMultiplier = !this.isRtl() ? -1 : 1;

    this.tabsContainer?.scrollBy({
      left:
        this.tabsContainer.clientWidth *
        (direction === ARROW_BUTTON_DIRECTION.FORWARD ? forwardMultiplier : backwardMultiplier),
      // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
      behavior: 'instant',
    });

    this.handleArrowButtonVisibility();
  }

  public override render() {
    const forwardArrowDirection = !this.isRtl() ? 'right' : 'left';
    const backwardArrowDirection = !this.isRtl() ? 'left' : 'right';

    const arrowButton = (direction: ArrowButtonDirectionType) =>
      html` ${this.shouldShowArrowButton(direction)
        ? html`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${direction === ARROW_BUTTON_DIRECTION.FORWARD
              ? forwardArrowDirection
              : backwardArrowDirection}-regular"
            aria-label="Scroll tabs ${direction === ARROW_BUTTON_DIRECTION.FORWARD
              ? forwardArrowDirection
              : backwardArrowDirection}"
            @click="${() => this.scrollTabs(direction)}"
          ></mdc-button>`
        : nothing}`;

    return html` ${arrowButton('backward')}
      <div part="container" role="${ROLE.TABLIST}" tabindex="-1" aria-label="${ifDefined(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${arrowButton(ARROW_BUTTON_DIRECTION.FORWARD)}`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default TabList;
