import { CSSResult, html, nothing } from 'lit';
import type { PropertyValues } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';

import styles from './tablist.styles';
import { Component } from '../../models';
import { KEYCODES } from './tablist.constants';

import Tab from '../tab/tab.component';
import type { ArrowButtonDirection } from './tablist.types';
import { getFirstTab, getLastTab, getNextTab, getPreviousTab, findTab, getActiveTab } from './tablist.utils';

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
  @property({ type: String, attribute: 'activetabid', reflect: true })
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

    this.addEventListener('keydown', this.handleKeydown.bind(this));
    // Reason for assertion below: https://github.com/microsoft/TypeScript/issues/28357
    this.addEventListener('activechange', this.handleNestedTabActiveChange.bind(this) as EventListener);
  }

  override connectedCallback() {
    super.connectedCallback();
    this.role = 'tablist';
  }

  /**
   * Set the initial active tab after firstUpdated,
   * since this.tabs (=slot) are only available after
   * the first update
   *
   * Also set up the event listeners.
   */
  protected override firstUpdated(): void {
    /**
     * If there are no tabs, skip the initialization of the active tab and the event listeners.
     * Then throw an error.
     */
    if (!this.tabs) { return; }
    if (Array.isArray(this.tabs) && this.tabs.length === 0) {
      throw new Error('The tablist component must have at least one child tab');
    }

    const resizeObserver = new ResizeObserver((): void => {
      this.handleArrowButtonVisibility();
    });
    resizeObserver.observe(this);

    this.tabs?.forEach((tab) => {
      tab.addEventListener('focus', this.handleFocus);
      tab.addEventListener('mousedown', this.handleMousedown);
    });

    if (!this.activeTabId) {
      this.activeTabId = getFirstTab(this.tabs)?.tabId;
    }
  }

  /**
   * Observe the tablist element for changes in the activetabid attribute.
   * Otherwise, find the new tab with the new activeTabId.
   * If the new tab is not found, then do nothing.
   *
   * If the new tab exists:
   * Set the new tab as active.
   *
   * Fire the tab change event.
   *
   * @param changedProperties - Map of changed properties with old values.
   */
  public override update(changedProperties: PropertyValues<this>): void {
    super.update(changedProperties);

    if (changedProperties.has('activeTabId')) {
      if (!this.tabs || !this.activeTabId) { return; }

      const newTab = findTab(this.tabs, this.activeTabId);
      if (!(newTab instanceof Tab)) { return; }

      this.setActiveTab(newTab);

      /**
       * If the previous activeTabId was not defined, do not fire the change event.
       */
      if (!changedProperties.get('activeTabId')) { return; }

      this.fireTabChangeEvent(newTab);
    }
  }

  /**
   * Dispatch the change event.
   * @internal
   * @param newTab - the new tab that is active.
   */
    private fireTabChangeEvent = (newTab: Tab): void => {
      const event = new CustomEvent('change', {
        detail: newTab.tabId,
      });

      this.dispatchEvent(event);
    };

  /**
   * When the tablist receives focus, then focus the active tab.
   * @param event - Focus event.
   */
  private handleFocus = (event: FocusEvent) => {
    /**
     * If the element losing focus is a tab, do nothing.
     * This also covers the case when previous focus was on a tab that belongs to another tablist.
     */
    if (event.relatedTarget instanceof Tab) { return; }
    /**
      * If the element gaining focus is not a tab, do nothing.
      */
    if (!(event.target instanceof Tab)) { return; }

    const activeTab = getActiveTab(this.tabs || []);

    if (!(activeTab instanceof Tab)) { return; }

    if (activeTab !== event.target) {
      this.focusTab(activeTab);
    }
  };

  /**
   * Prevent the mousedown event from triggering a focus event before the click event.
   *
   * @internal
   *
   * @param event - Mouse event.
   */
  private handleMousedown = (event: MouseEvent) => {
    if (!(event.target instanceof Tab)) { return; }

    event.preventDefault();
  };

  /**
   * Handle the tab active change event fired from the nested tab.
   *
   * @internal
   *
   * @param event - Custom Event fired from the nested tab.
   */
    private handleNestedTabActiveChange = (event: CustomEvent<any>): void => {
      const tab = event.target;
      if (!(tab instanceof Tab)) { return; }

      this.setActiveTab(tab);
      if (tab !== document.activeElement) {
        this.focusTab(tab);
      }

      this.activeTabId = tab.tabId;
    };

  /**
   * Resets all tabs' tabindex to -1 and sets the tabindex of the
   * given tab to 0.
   * This is used when navigating the tabs via keyboard.
   *
   * @internal
   *
   * @param tabId - The id of the new active tab in the tabs.
   */
  private resetTabIndexAndSetNewTabIndex = (newTab: Tab): void => {
    this.tabs?.forEach((tab) => {
      tab.setAttribute('tabindex', tab === newTab ? '0' : '-1');
    });
  };

  /**
   * Removes active attribute from all tabs and sets active on the new tab.
   *
   * @param tabId - The id of the new active tab.
   */
  private setActiveTab = (newTab: Tab): void => {
    this.tabs?.forEach((tab) => {
      if (tab === newTab) {
        tab.setAttribute('active', '');
      } else {
        tab.removeAttribute('active');
      }
    });
  };

  /**
   * Set the focus on the new tab, then scroll it into view.
   *
   * @param tab - Tab to set focus on.
   */
  private focusTab = (tab?: Tab): void => {
    if (!tab) { return; }

    this.resetTabIndexAndSetNewTabIndex(tab);
    tab.focus();
    // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
    tab.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' });
    this.handleArrowButtonVisibility();
  };

  /**
   * Handle the keydown event. The arrow keys, Home, End, Enter, and Space keys are supported.
   *
   * @param event - HTML Keyboard Event.
   */
  private handleKeydown = (event: KeyboardEvent): void => {
    const tab = event.target;

    if (!(tab instanceof Tab)) { return; }
    if (!this.tabs) { return; }

    const previousTab = getPreviousTab(this.tabs, tab);
    const nextTab = getNextTab(this.tabs, tab);
    const firstTab = getFirstTab(this.tabs);
    const lastTab = getLastTab(this.tabs);

    switch (event.code) {
      case KEYCODES.LEFT:
        event.preventDefault();
        this.focusTab(!this.isRtl ? previousTab : nextTab);
        break;

      case KEYCODES.RIGHT:
        event.preventDefault();
        this.focusTab(!this.isRtl ? nextTab : previousTab);
        break;

      case KEYCODES.HOME:
        this.focusTab(firstTab);
        break;

      case KEYCODES.END:
        this.focusTab(lastTab);
        break;

      default:
    }
  };

  /**
   * Should the arrow button be shown.
   * @param direction - The direction of the arrow button.
   */
  private shouldShowArrowButton(direction: ArrowButtonDirection): boolean {
    return direction === 'forward' ? this.showForwardArrowButton : this.showBackwardArrowButton;
  }

  /**
   * Show or hide the arrow buttons based on the position of the tabs
   * corresponding to the tab list.
   */
  private handleArrowButtonVisibility = () => {
    if (!this.tabs) { return; }

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
       // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
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

     return html`
      ${arrowButton('backward')}
      <div class="container">
        <slot></slot>
      </div>
      ${arrowButton('forward')}`;
   }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default TabList;
