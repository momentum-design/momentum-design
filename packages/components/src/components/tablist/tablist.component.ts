import { CSSResult, html, nothing } from 'lit';
import type { PropertyValues } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import Tab from '../tab/tab.component';
import Button from '../button/button.component';
import { ROLE } from '../../utils/roles';

import styles from './tablist.styles';
import { ARROW_BUTTON_DIRECTION, KEYCODES } from './tablist.constants';
import type { ArrowButtonDirectionType } from './tablist.types';
import { getFirstTab, getLastTab, getNextTab, getPreviousTab, findTab, getActiveTab } from './tablist.utils';

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
 * @cssproperty  --mdc-tablist-arrow-button-margin - Margin value for the arrow button
 */
class TabList extends Component {
  /**
   * ID of the active tab, defaults to the first tab if not provided
   */
  @property({ type: String, attribute: 'active-tab-id', reflect: true })
  activeTabId?: string;

  /**
   * Label for the tablist.
   * This is used when the tablist does not have a visible label.
   */
  @property({ type: String, attribute: 'data-aria-label' })
  dataAriaLabel?: string;

  /**
   * The tab container element.
   * Has the role of `tablist`.
   * @internal
   */
  @query('.container')
  private tabsContainer?: HTMLDivElement;

  /**
   * Arrow button that is not focused.
   * @internal
   */
  @query('mdc-button:not(:focus-visible)')
  private notFocusedArrowButton?: Button;

  /**
   * Children of the tablist, elements of type `mdc-tab`.
   * @internal
   */
  @queryAssignedElements({ selector: 'mdc-tab' })
  private tabs?: Tab[];

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

  constructor() {
    super();

    this.addEventListener('keydown', this.handleKeydown.bind(this));
    // Reason for assertion below: https://github.com/microsoft/TypeScript/issues/28357
    this.addEventListener('activechange', this.handleNestedTabActiveChange as (event: Event) => Promise<void>);
  }

  /**
   * Set the initial active tab after firstUpdated,
   * since this.tabs (=slot) are only available after
   * the first update
   *
   * Also set up the event listeners.
   */
  protected override async firstUpdated(): Promise<void> {
    if (!this.tabs) {
      return;
    }

    /**
     * If there are no tabs, skip the initialization of the active tab and the event listeners.
     * Then throw an error.
     */
    if (Array.isArray(this.tabs) && this.tabs.length === 0) {
      if (this.onerror) {
        this.onerror('The tablist component must have at least one child tab');
      }
      return;
    }

    const tabIds = this.tabs.map(tab => tab.tabId);
    if (new Set(tabIds).size !== this.tabs.length) {
      if (this.onerror) {
        this.onerror('The tabs inside the tab list must have unique tab ids');
      }
    }

    const resizeObserver = new ResizeObserver(async () => {
      await this.handleArrowButtonVisibility();
    });
    resizeObserver.observe(this);

    if (!this.activeTabId) {
      this.activeTabId = getFirstTab(this.tabs)?.tabId;
    }

    this.tabsContainer?.addEventListener('focusin', this.handleFocus.bind(this));
    this.tabsContainer?.addEventListener('mousedown', this.handleMousedown.bind(this));
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.tabsContainer?.removeEventListener('focusin', this.handleFocus);
    this.tabsContainer?.removeEventListener('mousedown', this.handleMousedown);
  }

  /**
   * Observe the tablist element for changes in the activeTabId attribute.
   * Find the new tab with the new activeTabId.
   * If the new tab is not found, then do nothing.
   *
   * If the new tab exists:
   * Set the new tab as active.
   *
   * Fire the tab change event.
   *
   * @param changedProperties - Map of changed properties with old values.
   */
  public override async update(changedProperties: PropertyValues<this>): Promise<void> {
    super.update(changedProperties);

    if (changedProperties.has('activeTabId')) {
      if (!this.tabs || !this.activeTabId) {
        return;
      }

      const newTab = findTab(this.tabs, this.activeTabId);
      if (!(newTab instanceof Tab)) {
        return;
      }

      this.setActiveTab(newTab);

      /**
       * If the previous activeTabId was not undefined, focus the new tab.
       *
       * Otherwise, reset the tabindex of all tabs and set the new tabindex.
       */
      if (changedProperties.get('activeTabId')) {
        this.fireTabChangeEvent(newTab);
        await this.focusTab(newTab);
      } else {
        this.resetTabIndexAndSetNewTabIndex(newTab);
      }
    }
  }

  /**
   * Dispatch the change event.
   *
   * @internal
   *
   * @param newTab - the new tab that is active.
   */
  private fireTabChangeEvent(newTab: Tab): void {
    const event = new CustomEvent('change', {
      detail: { tabId: newTab.tabId },
    });

    this.dispatchEvent(event);
  }

  /**
   * When the tablist receives focus, then focus the active tab.
   *
   * @internal
   *
   * @param event - Focus event.
   */
  private async handleFocus(event: FocusEvent) {
    /**
     * If the element losing focus is a tab, do nothing.
     * This also covers the case when previous focus was on a tab that belongs to another tablist.
     */
    if (event.relatedTarget instanceof Tab) {
      return;
    }
    /**
     * If the element gaining focus is not a tab, do nothing.
     */
    if (!(event.target instanceof Tab)) {
      return;
    }

    const activeTab = getActiveTab(this.tabs || []);

    if (!(activeTab instanceof Tab)) {
      return;
    }

    await this.focusTab(activeTab);
  }

  /**
   * Prevent the mousedown event from triggering a focus event before the click event.
   *
   * @internal
   *
   * @param event - Mouse event.
   */
  private handleMousedown(event: MouseEvent) {
    if (!(event.target instanceof Tab)) {
      return;
    }

    event.preventDefault();
  }

  /**
   * Handle the tab active change event fired from the nested tab.
   *
   * @internal
   *
   * @param event - Custom Event fired from the nested tab.
   */
  private async handleNestedTabActiveChange(event: CustomEvent<any>): Promise<void> {
    event.stopPropagation();
    const tab = event.target;
    if (!(tab instanceof Tab)) {
      return;
    }

    this.setActiveTab(tab);
    await this.focusTab(tab);

    this.activeTabId = tab.tabId;
  }

  /**
   * Resets all tabs' tabindex to -1 and sets the tabindex of the
   * given tab to 0.
   * This is used when navigating the tabs via keyboard.
   *
   * @internal
   *
   * @param tabId - The id of the new active tab in the tabs.
   */
  private resetTabIndexAndSetNewTabIndex(newTab: Tab): void {
    this.tabs?.forEach(tab => {
      tab.setAttribute('tabindex', tab === newTab ? '0' : '-1');
    });
  }

  /**
   * Removes active attribute from all tabs and sets active on the new tab.
   *
   * @internal
   *
   * @param tabId - The id of the new active tab.
   */
  private setActiveTab(newTab: Tab): void {
    this.tabs?.forEach(tab => {
      if (tab === newTab) {
        tab.setAttribute('active', '');
      } else {
        tab.removeAttribute('active');
      }
    });
  }

  /**
   * Set focus on the new tab, then scroll it into view.
   *
   * @internal
   *
   * @param tab - Tab to set focus on.
   */
  private async focusTab(tab?: Tab): Promise<void> {
    if (!(tab instanceof Tab)) {
      return;
    }

    if (tab !== document?.activeElement) {
      this.resetTabIndexAndSetNewTabIndex(tab);
      tab.focus();
    }

    await this.handleArrowButtonVisibility();
  }

  /**
   * Handle the keydown event. The arrow keys, Home, End, Enter, and Space keys are supported.
   *
   * @internal
   *
   * @param event - HTML Keyboard Event.
   */
  private async handleKeydown(event: KeyboardEvent): Promise<void> {
    const tab = event.target;

    if (!(tab instanceof Tab)) {
      return;
    }
    if (!this.tabs) {
      return;
    }

    const previousTab = getPreviousTab(this.tabs, tab);
    const nextTab = getNextTab(this.tabs, tab);
    const firstTab = getFirstTab(this.tabs);
    const lastTab = getLastTab(this.tabs);

    switch (event.code) {
      case KEYCODES.LEFT:
        event.preventDefault();
        await this.focusTab(!this.isRtl() ? previousTab : nextTab);
        break;

      case KEYCODES.RIGHT:
        event.preventDefault();
        await this.focusTab(!this.isRtl() ? nextTab : previousTab);
        break;

      case KEYCODES.HOME:
        await this.focusTab(firstTab);
        break;

      case KEYCODES.END:
        await this.focusTab(lastTab);
        break;

      default:
    }
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
  private async switchFocus(): Promise<void> {
    await this.updateComplete;
    if (!this.showBackwardArrowButton && !this.showForwardArrowButton) {
      getActiveTab(this.tabs || [])?.focus();
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
  private async handleArrowButtonVisibility(): Promise<void> {
    if (!this.tabs) {
      return;
    }
    if (!this.tabsContainer) {
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

    const firstTab = getFirstTab(this.tabs)!;
    const lastTab = getLastTab(this.tabs)!;
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
        await this.switchFocus();
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
      await this.switchFocus();
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

    await this.handleArrowButtonVisibility();
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
      <div class="container" role="${ROLE.TABLIST}" tabindex="-1" aria-label="${ifDefined(this.dataAriaLabel)}">
        <slot></slot>
      </div>
      ${arrowButton(ARROW_BUTTON_DIRECTION.FORWARD)}`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default TabList;
