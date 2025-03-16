import { CSSResult, html, nothing } from 'lit';
import type { PropertyValues } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';

import styles from './tablist.styles';
import { Component } from '../../models';
import { KEYCODES } from './tablist.constants';

import Tab from '../tab/tab.component';
import type { ArrowButtonDirection } from './tablist.types';
import { getFirstTab, getLastTab, getNextTab, getPreviousTab, getTabById } from './tablist.utils';
import { TAG_NAME } from '../tab/tab.constants';

/**
 * Tab list organizes tabs into a container.
 *
 * Children of the tab list are mdc-tab elements, sent to the default slot.
 *
 * The tabs can be navigated using the arrow keys, and selected by clicking, or pressing the Enter and Space keys.
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
 * - If the tab list has a visible label,
 *   the element with role `tablist` has `aria-labelledby` needs to be a value that refers to the labelling element.
 *   Otherwise, the `tablist` element needs to have a label provided by `aria-label`.
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
 *
 * @slot Default slot for mdc-tab elements.
 *
 * @cssproperty --mdc-tablist-gap - Gap between tabs
 * @cssproperty --mdc-tablist-width - Width of the tablist
 * @cssproperty --mdc-container-button-padding - Padding for when an arrow button is visible
 */
class TabList extends Component {
  /**
   * ID of the active tab, defaults to the first tab if not provided
   */
  @property({ type: String, attribute: 'activetabid' })
  activeTabId?: string;

  @query('.container')
  private tabsContainer?: HTMLDivElement;

  @queryAssignedElements({ selector: 'mdc-tab' })
  private tabs?: Tab[];

  /**
   * Instead of using 'left' and 'right' for notation of the arrow buttons, we use 'forward' and 'backward'.
   * Since the elements of the tablist gets flipped in RTL layouts, the arrow buttons also flip.
   * For both RTL and LTR layouts, the forward arrow button moved the tabs in the forward direction.
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

  private get isRtl(): boolean {
    return (
      document.querySelector('html')?.getAttribute('dir') === 'rtl' || window.getComputedStyle(this).direction === 'rtl'
    );
  }

  constructor() {
    super();
    this.role = 'tablist';

    this.addEventListener('keydown', this.handleKeydown.bind(this));
    this.addEventListener('activechange', this.handleNestedTabActiveChange.bind(this));
  }

  /**
   * Set the initial tabActive after firstUpdated,
   * since this.tabs (=slot) are only available after
   * the first update
   */
  protected override firstUpdated(): void {
    if (this.tabs) {
      this.setTabActive(this.activeTabId || getFirstTab(this.tabs).tabId);
    }
  }

  override async connectedCallback() {
    super.connectedCallback();

    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]): void => {
      const tabListWidth: number = entries[0].borderBoxSize[0].inlineSize;
      const tabsContainerWidth: number = this.tabsContainer?.scrollWidth || 0;

      if (tabListWidth >= tabsContainerWidth) {
        this.showForwardArrowButton = false;
        this.showBackwardArrowButton = false;
      } else {
        this.showForwardArrowButton = true;
        this.showBackwardArrowButton = false;

        this.scrollTabIntoView(this.activeTabId);
      }
    });

    resizeObserver.observe(this);
  }

  /**
   * Observe the tablist element for changes in the activetabid attribute.
   *
   * @param changedProperties - Map of changed properties with old values.
   */
  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('activeTabId')) {
      this.setTabActive(this.activeTabId);
    }
  }

  /**
   * Removes all tabs active attribute and sets active on the
   * given element, effectively setting the active
   * element. This is used when selecting a tab.
   *
   * @param tabId - The id of the new active tab in the tabs.
   */
  private removesActiveAndSetNewActive(tabId?: string) {
    this.tabs?.forEach((tab) => {
      if (tab.tabId === tabId) {
        tab.setAttribute('active', '');
      } else {
        tab.removeAttribute('active');
      }
    });
  }

  /**
   * Resets all tabs tabindex to -1 and sets the tabindex of the
   * given element to 0, effectively setting the active
   * element. This is used when navigating the tabs via keyboard.
   *
   * @param tabId - The id of the new active tab in the tabs.
   */
  private resetTabIndexAndSetActiveTabIndex(tabId?: string) {
    this.tabs?.forEach((tab) => {
      tab.setAttribute('tabindex', tab.tabId === tabId ? '0' : '-1');
    });
  }

  /**
   * Dispatch the change event.
   *
   * @param tabId - tabId of the new active tab
   */
  private handleTabChange = (tabId?: string): void => {
    const event = new CustomEvent('change', {
      detail: { tabId },
    });
    this.dispatchEvent(event);
  };

  /**
   * Set the new tab as active and dispatch the change event.
   *
   * @param tabId - tabId of new Tab.
   */
  private setTabActive = (tabId?: string): void => {
    if (!this.tabs?.length) {
      return;
    }
    this.removesActiveAndSetNewActive(tabId);
    this.resetTabIndexAndSetActiveTabIndex(tabId);

    this.handleTabChange(tabId);
  };

  /**
   * Set the focus on the new tab, then scroll it into view.
   *
   * @param tab - Tab to set focus on.
   */
  private focusTab = (tab?: Tab): void => {
    if (tab) {
      this.resetTabIndexAndSetActiveTabIndex(tab.tabId);
      tab.focus();
    }
  };

  private focusForward() {
    const focusedTab = document.activeElement as Tab;
    if (focusedTab && this.tabs) {
      this.focusTab(!this.isRtl ? getNextTab(this.tabs, focusedTab) : getPreviousTab(this.tabs, focusedTab));
    }
    // if last tab, scroll into view

    this.handleArrowButtonVisibility();
  }

  private focusBackward() {
    const focusedTab = document.activeElement as Tab;
    if (focusedTab && this.tabs) {
      this.focusTab(!this.isRtl ? getPreviousTab(this.tabs, focusedTab) : getNextTab(this.tabs, focusedTab));
    }

    this.handleArrowButtonVisibility();
  }

  /**
   * Handle the keydown event. The arrow keys, Home, End, Enter, and Space keys are supported.
   *
   * @param event - HTML Keyboard Event.
   */
  private handleKeydown = (event: KeyboardEvent): void => {
    const { tabId } = event.target as Tab;

    if (!this.tabs || !tabId) {
      return;
    }

    switch (event.code) {
      case KEYCODES.LEFT:
        this.focusBackward();
        break;

      case KEYCODES.RIGHT:
        this.focusForward();
        break;

      case KEYCODES.HOME:
        this.focusTab(getFirstTab(this.tabs));
        break;

      case KEYCODES.END:
        this.focusTab(getLastTab(this.tabs));
        break;

      default:
    }
  };

  private shouldShowArrowButton(direction: ArrowButtonDirection): boolean {
    return direction === 'forward' ? this.showForwardArrowButton : this.showBackwardArrowButton;
  }

  /**
   * Scroll a tab into view.
   *
   * @param tabId - tabId of Tab to move into view
   */
  private scrollTabIntoView = (tabId: string): void => {
    const tab = this.tabs && getTabById(this.tabs, tabId);
    tab?.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' });
  };

  /**
   * Handle the click event. Select the new tab and set the focus on it.
   *
   * @param event - HTML Mouse Event.
   */
  private handleNestedTabActiveChange = (event: Event): void => {
    const tab = event.target as Tab;

    const tagName = (tab as HTMLElement).tagName.toLowerCase();
    if (tagName !== TAG_NAME) {
      return;
    }

    this.setTabActive(tab.tabId);
  };

  /**
   * Show or hide the arrow buttons based on the position of the tabs
   * corresponding to the tab list.
   */
  private handleArrowButtonVisibility = () => {
    if (!this.tabs) {
      return;
    }
    const firstTab = getFirstTab(this.tabs)!;
    const lastTab = getLastTab(this.tabs)!;
    const firstTabLeftEdgePosition = Math.round(firstTab.getBoundingClientRect().left);
    const tabListLeftEdgePosition = Math.round(this.getBoundingClientRect().left);
    const lastTabRightEdgePosition = Math.round(lastTab.getBoundingClientRect().right);
    const tabListRightEdgePosition = Math.round(this.getBoundingClientRect().right);

    // when RTL, the edges are reversed
    const firstTabRightEdgePosition = Math.round(firstTab.getBoundingClientRect().right);
    const lastTabLeftEdgePosition = Math.round(lastTab.getBoundingClientRect().left);

    if (!this.isRtl) {
      if (firstTabLeftEdgePosition < tabListLeftEdgePosition) {
        this.showBackwardArrowButton = true;
      } else {
        this.showBackwardArrowButton = false;
      }

      if (lastTabRightEdgePosition > tabListRightEdgePosition) {
        this.showForwardArrowButton = true;
      } else {
        this.showForwardArrowButton = false;
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
  };

   /**
   * Scroll tabs forward or backward.
   */
   private scrollTabs = (direction: ArrowButtonDirection): void => {
     const forwardMultiplier = !this.isRtl ? 1 : -1;
     const backwardMultiplier = !this.isRtl ? -1 : 1;

     this.tabsContainer?.scrollBy({
       left: this.tabsContainer.clientWidth * (direction === 'forward' ? forwardMultiplier : backwardMultiplier),
       behavior: 'instant',
     });

     this.handleArrowButtonVisibility();
   };

   public override render() {
     const forwardArrowDirection = !this.isRtl ? 'right' : 'left';
     const backwardArrowDirection = !this.isRtl ? 'left' : 'right';

     const arrowButton = (direction: ArrowButtonDirection) =>
       html` ${this.shouldShowArrowButton(direction)
         ? html`<mdc-button
            variant="tertiary"
            prefix-icon="arrow-${direction === 'forward' ? forwardArrowDirection : backwardArrowDirection}-regular"
            aria-label="Scroll tabs ${direction === 'forward' ? forwardArrowDirection : backwardArrowDirection}"
            @click="${() => this.scrollTabs(direction)}"
          ></mdc-button>`
         : nothing}`;

     return html` ${arrowButton('backward')}
      <div class="container">
        <slot></slot>
      </div>
      ${arrowButton('forward')}`;
   }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default TabList;
