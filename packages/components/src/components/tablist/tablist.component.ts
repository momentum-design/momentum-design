import { CSSResult, html, nothing } from 'lit';
import type { PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';

import styles from './tablist.styles';
import { Component } from '../../models';
import { KEYCODES } from './tablist.constants';

import Tab from '../tab/tab.component';
import Button from '../button';
import type { ArrowButtonDirection } from './tablist.types';

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

  /**
   * Instead of using 'left' and 'right' for notation of the arrow buttons, we use 'forward' and 'backward'.
   * Since the elements of the tablist gets flipped in RTL layouts, the arrow buttons also flip.
   * For both RTL and LTR layouts, the forward arrow button moved the tabs in the forward direction.
   * i.e. the forward arrow button moves the tabs to the right in LTR layouts and to the left in RTL layouts.
   */
  @property({ type: Boolean })
  private showForwardArrowButton: boolean = false;

  @property({ type: Boolean })
  private showBackwardArrowButton: boolean = false;

  constructor() {
    super();
    this.role = 'tablist';

    this.addEventListener('keydown', this.handleKeydown.bind(this));
    this.addEventListener('click', this.handleClick.bind(this));
  }

  override async connectedCallback() {
    super.connectedCallback();
    let timeout: ReturnType<typeof setTimeout>;

    await customElements.whenDefined('mdc-tablist');

    /**
     * Sets the initially active tab.
     */
    this.setActiveTab();

    /**
     * Observe the tablist element for changes in its size.
     * Then show or hide the arrow buttons accordingly.
     *
     * @param entries - ResizeObserverEntry[].
     */
    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]): void => {
      const tabListWidth: number = entries[0].borderBoxSize[0].inlineSize;
      const tabsContainerWidth: number = this.tabsContainer.scrollWidth || 0;

      if (tabListWidth >= tabsContainerWidth) {
        this.showArrowButtons = { forward: false, backward: false };
      } else {
        this.showArrowButtons = { forward: true, backward: false };

        /**
         * Clear the timeout for the previous resize event
         */
        clearTimeout(timeout);
        /**
         * Wait after resizing is done and bring the active tab into view.
         */
        timeout = setTimeout(() => this.scrollTabIntoview(this.currentActiveTab), 250);
      }
    });

    resizeObserver.observe(this);

    /**
     * Observe the tablist element for scroll events and handle visibility of the arrow buttons
     */
    this.tabsContainer.addEventListener('scroll', this.handleArrowButtonVisibility);

    /**
     * When the tablist gets focus from an outside element,
     * focus on the currently active tab instead of the first or last tab
     */
    this.firstTab.addEventListener('focus', this.handleFocus);
    this.lastTab.addEventListener('focus', this.handleFocus);
  }

  /**
   * Observe the tablist element for changes in the activetabid attribute.
   *
   * @param changedProperties - Map of changed properties with old values.
   */
  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('activeTabId')) {
      this.setActiveTab();
    }
  }

  @query('.tabs_container')
  private tabsContainer!: HTMLDivElement;

  /**
   * Sets the active tab.
   * If the activeTabId is not provided or does not match any tab's ID, set the first tab as the active tab.
   */
  private setActiveTab = (): void => {
    this.selectTab(this.tabs.find((tab) => tab.getAttribute('tabid') === this.activeTabId)
                    || this.currentActiveTab
                    || this.firstTab);
  };

  private get tabs(): Tab[] {
    return Array.from(this.querySelectorAll('mdc-tab'));
  }

  private get firstTab(): Tab { return this.tabs[0]; }

  private get lastTab(): Tab { return this.tabs[this.tabs.length - 1]; }

  private get currentActiveTab(): Tab | undefined {
    return this.tabs.find((tab) => tab.hasAttribute('active'));
  }

  private get previousTab(): Tab {
    const newIndex = this.tabs.findIndex((tab) => document.activeElement === tab) - 1;
    return this.tabs[(newIndex + this.tabs.length) % this.tabs.length];
  }

  private get nextTab(): Tab {
    const newIndex = this.tabs.findIndex((tab) => document.activeElement === tab) + 1;
    return this.tabs[newIndex % this.tabs.length];
  }

  private get isRtl(): boolean {
    return document.querySelector('html')?.getAttribute('dir') === 'rtl'
      || window.getComputedStyle(this).direction === 'rtl';
  }

  private get showArrowButtons(): {forward: boolean, backward: boolean} {
    return {
      forward: this.showForwardArrowButton,
      backward: this.showBackwardArrowButton,
    };
  }

  private set showArrowButtons(newVisibility: { forward?: boolean, backward?: boolean }) {
    const newArrowButtonVisibility = Object.assign(this.showArrowButtons, newVisibility);

    this.showForwardArrowButton = newArrowButtonVisibility.forward;
    this.showBackwardArrowButton = newArrowButtonVisibility.backward;
  }

  private shouldShowArrowButton(direction: ArrowButtonDirection): boolean {
    return direction === 'forward' ? this.showArrowButtons.forward : this.showArrowButtons.backward;
  }

  /**
   * Remove the active attribute from all tabs.
   */
  private resetSelection = (): void => {
    this.tabs.forEach((tab) => { tab.removeAttribute('active'); });
  };

  /**
   * Set the focus on the new tab, then scroll it into view.
   *
   * @param tab - Tab to set focus on.
   */
  private focusTab = (tab?: Tab): void => {
    if (!(tab instanceof Tab)) { return; }

    tab.focus();
    this.scrollTabIntoview(tab);
  };

  /**
   * Scroll a tab into view.
   *
   * @param tab - Tab to set focus on.
   */
  private scrollTabIntoview = (tab?: Tab): void => {
    if (!(tab instanceof Tab)) { return; }

    // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
    tab.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' });
  };

  /**
   * Set the new tab as active and dispatch the change event.
   *
   * @param newTab - New Tab.
   */
  private selectTab = (newTab: Tab): void => {
    this.resetSelection();
    newTab.setAttribute('active', '');
    this.handleTabChange(newTab);
  };

  /**
   * Dispatch the change event.
   *
   * @param newTab - New Tab.
   */
  private handleTabChange = (newTab: Tab): void => {
    const event = new CustomEvent('change', {
      detail: { tabId: newTab.getAttribute('tabid') },
    });
    this.dispatchEvent(event);
  };

  /**
   * Handle the keydown event. The arrow keys, Home, End, Enter, and Space keys are supported.
   *
   * @param event - HTML Keyboard Event.
   */
  private handleKeydown = (event: KeyboardEvent): void => {
    const tab = event.target;

    if (!(tab instanceof Tab)) { return; }

    switch (event.code) {
      case KEYCODES.ENTER:
      case KEYCODES.SPACE:
        /**
         * Prevent the scrolling of the page when the space key is pressed.
         */
        event.preventDefault();
        this.selectTab(tab);
        break;

      case KEYCODES.LEFT:
        this.focusTab(!this.isRtl ? this.previousTab : this.nextTab);
        break;

      case KEYCODES.RIGHT:
        this.focusTab(!this.isRtl ? this.nextTab : this.previousTab);
        break;

      case KEYCODES.HOME:
        this.focusTab(this.firstTab);
        break;

      case KEYCODES.END:
        this.focusTab(this.lastTab);
        break;

      case KEYCODES.TAB:
        /**
         * Prevent the tab focus change on pressing the Tab key.
         */
        event.preventDefault();

        /**
         * When shift key + tab key is pressed
         */
        if (event.shiftKey) {
          const backwardArrowButton = this.shadowRoot?.firstElementChild;
          /**
           * If the backward arrow button exists, focus on it.
           */
          if ((backwardArrowButton instanceof Button) && backwardArrowButton.getAttribute('direction') === 'backward') {
            backwardArrowButton.focus();
            return;
          }

          /**
          * Otherwise if the element previous to the tablist exists, focus on it.
          */
          if ((this.previousElementSibling instanceof HTMLElement)) {
            this.previousElementSibling.focus();
          }
        } else {
          const forwardArrowButton = this.shadowRoot?.lastElementChild;
          /**
           * If the forward arrow button exists, focus on it.
           */
          if ((forwardArrowButton instanceof Button) && forwardArrowButton.getAttribute('direction') === 'forward') {
            forwardArrowButton.focus();
            return;
          }
          /**
           * Otherwise if the element next to the tablist exists, focus on it.
           */
          if ((this.nextElementSibling instanceof HTMLElement)) {
            this.nextElementSibling.focus();
          }
        }

        break;

      default:
    }
  };

  /**
   * Handle the click event. Select the new tab and set the focus on it.
   *
   * @param event - HTML Mouse Event.
   */
  private handleClick = (event: MouseEvent): void => {
    const eventTarget = event.target;
    let tab;

    if ((eventTarget instanceof Tab)) {
      tab = eventTarget;
    } else if ((eventTarget as HTMLElement).parentElement instanceof Tab) {
      /**
       * If the event target is a child of tab.
       */
      tab = (eventTarget as HTMLElement).parentElement;
    }

    if (!(tab instanceof Tab)) { return; }

    this.selectTab(tab);
    this.scrollTabIntoview(tab);
  };

  /**
   * When the tablist container receives focus, the first or last tab gets focused based on the direction of focus.
   * Check if the previosly focused element is a tab, if so, do nothing.
   * Otherwise focus on the currently active tab.
   */
  private handleFocus = (event: FocusEvent): void => {
    if (!event.relatedTarget) { return; }

    if (event.relatedTarget instanceof Tab) {
      return;
    }
    this.focusTab(this.currentActiveTab);
  };

  /**
   * Show or hide the arrow buttons based on the position of the tabs
   * corresponding to the tab list.
   */
  private handleArrowButtonVisibility = () => {
    const firstTabLeftEdgePosition = Math.round(this.firstTab.getBoundingClientRect().left);
    const tabListLeftEdgePosition = Math.round(this.getBoundingClientRect().left);
    const lastTabRightEdgePosition = Math.round(this.lastTab.getBoundingClientRect().right);
    const tabListRightEdgePosition = Math.round(this.getBoundingClientRect().right);

    // when RTL, the edges are reversed
    const firstTabRightEdgePosition = Math.round(this.firstTab.getBoundingClientRect().right);
    const lastTabLeftEdgePosition = Math.round(this.lastTab.getBoundingClientRect().left);

    if (!this.isRtl) {
      if (firstTabLeftEdgePosition < tabListLeftEdgePosition) {
        this.showArrowButtons = { backward: true };
      } else {
        this.showArrowButtons = { backward: false };
      }

      if (lastTabRightEdgePosition > tabListRightEdgePosition) {
        this.showArrowButtons = { forward: true };
      } else {
        this.showArrowButtons = { forward: false };
      }
      return;
    }

    if (firstTabRightEdgePosition > tabListRightEdgePosition) {
      this.showArrowButtons = { backward: true };
    } else {
      this.showArrowButtons = { backward: false };
    }

    if (lastTabLeftEdgePosition < tabListLeftEdgePosition) {
      this.showArrowButtons = { forward: true };
    } else {
      this.showArrowButtons = { forward: false };
    }
  };

  /**
   * Scroll tabs forward or backward.
   */
  private scrollTabs = (direction: ArrowButtonDirection): void => {
    const forwardMultiplier = !this.isRtl ? 1 : -1;
    const backwardMultiplier = !this.isRtl ? -1 : 1;

    this.tabsContainer.scrollBy({
      left: this.tabsContainer.clientWidth * (direction === 'forward' ? forwardMultiplier : backwardMultiplier),
      // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
      behavior: 'instant',
    });
  };

  public override render() {
    const forwardArrowDirection = !this.isRtl ? 'right' : 'left';
    const backwardArrowDirection = !this.isRtl ? 'left' : 'right';

    const arrowButton = (direction: ArrowButtonDirection) => html`
    ${this.shouldShowArrowButton(direction)
    ? html`<mdc-button
      direction="${direction}"
      variant="tertiary"
      prefix-icon="arrow-${direction === 'forward' ? forwardArrowDirection : backwardArrowDirection}-regular"
      aria-label="Scroll tabs ${direction === 'forward' ? forwardArrowDirection : backwardArrowDirection}"
      @click="${() => this.scrollTabs(direction)}"></mdc-button>`
    : nothing}`;

    /**
     * Instead of using 'left' and 'right' for notation of the arrow buttons, we use 'forward' and 'backward'.
     * This is to make the component RTL compatible.
     * Since the elements of the tablist gets flipped in RTL layouts, the arrow buttons also flip.
     */
    return html`
      ${arrowButton('backward')}

      <div class="tabs_container">
        <slot></slot>
      </div>

      ${arrowButton('forward')}`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default TabList;
