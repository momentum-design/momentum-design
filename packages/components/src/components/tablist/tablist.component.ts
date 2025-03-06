import { CSSResult, html } from 'lit';
import type { PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import styles from './tablist.styles';
import { Component } from '../../models';
import { KEYCODES } from './tablist.constants';
import { remToPx } from './tablist.utils';

import Tab from '../tab/tab.component';
import type Button from '../button';

/**
 * Tab list organizes tabs into a container.
 *
 * Children of the tab list are mdc-tab elements, sent to the default slot.
 *
 * The tabs can be navigated using the arrow keys, and selected by clicking, or pressing the Enter and Space keys.
 *
 * **Accessibility notes for consuming**
 *
 * - The element that serves as the container for the set of tabs has role `tablist`.
 * - Each element that serves as a tab has role `tab` and is contained within the element with role `tablist`.
 * - Each element that contains the `content panel` for a `tab` has role `tabpanel`.
 * - If the tab list has a visible label,
 *   the element with role `tablist` has `aria-labelledby` set to a value that refers to the labelling element.
 *   Otherwise, the `tablist` element has a label provided by `aria-label`.
 * - Each element with role `tab` has the property `aria-controls` referring to its associated `tabpanel` element.
 * - The active tab element has the state `aria-selected` set to `true`
 *   and all other tab elements have it set to `false`.
 * - Each element with role `tabpanel` has the property `aria-labelledby` referring to its associated `tab` element.
 * - If a `tab` element has a popup menu, it has the property `aria-haspopup` set to either `menu` or `true`.
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
class Tablist extends Component {
  /**
   * ID of the active tab, defaults to the first tab if not provided
   */
  @property({ type: String, attribute: 'activetabid', reflect: true })
  activeTabId?: string;

  /**
   * @internal
   */
  private tabs: Array<Tab> = [];

  /**
   * @internal
   */
  private direction: String = '';

  /**
   * @internal
   */
  private scrollDistance: number = 100;

  constructor() {
    super();
    this.role = 'tablist';
    this.attachShadow({ mode: 'open' });

    this.tabs = this.allTabs;

    this.addEventListener('keydown', this.handleKeydown.bind(this));
    this.addEventListener('click', this.handleClick.bind(this));
    this.addEventListener('scroll', this.handleScroll.bind(this));
  }

  override async connectedCallback() {
    super.connectedCallback();

    await customElements.whenDefined('mdc-tablist');

    /**
     * Sets the initial active tab.
     */
    if (typeof this.activeTabId === 'string' && this.activeTabId.length === 0) {
      this.activeTabId = this.tabs[0].getAttribute('tabid') || '';
    }
    this.selectTab(this.tabs.find((tab) => tab.getAttribute('tabid') === this.activeTabId) || this.tabs[0]);

    this.scrollDistance = remToPx(6.25);
    this.direction = (document.querySelector('html')?.getAttribute('dir')) || window.getComputedStyle(this).direction;

    /**
     * Observe the tablist element for changes in its size.
     * Then show or hide the arrow buttons accordingly.
     *
     * @param entries - ResizeObserverEntry[].
     */
    const resizeObserver = new ResizeObserver((entries): void => {
      const tabListWidth: number = entries[0].borderBoxSize[0].inlineSize;
      const tabsContainerWidth: number = this.tabsContainer.scrollWidth || 0;

      if (this.isRtl) {
        this.leftArrowButton.style.right = `${tabListWidth - remToPx(1)}px`;
        this.rightArrowButton.style.right = `${remToPx(1)}px`;
      } else {
        this.leftArrowButton.style.left = `${remToPx(1)}px`;
        this.rightArrowButton.style.left = `${tabListWidth - remToPx(1)}px`;
      }

      if (tabListWidth >= tabsContainerWidth) {
        this.hideLeftArrowButton();
        this.hideRightArrowButton();
      } else if (this.isRtl) {
        this.showLeftArrowButton();
      } else {
        this.showRightArrowButton();
      }
    });

    resizeObserver.observe(this);

    /**
     * Observe the tablist element for scroll events.
     */
    this.tabsContainer.addEventListener('scroll', this.handleScroll);
  }

  /**
   * Observe the tablist element for changes in the activetabid attribute.
   *
   * @param changedProperties - Map of changed properties with old values.
   */
  public override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);
    if (changedProperties.has('activeTabId')) {
      this.selectTab(this.tabs.find((tab) => tab.getAttribute('tabid') === this.activeTabId) || this.tabs[0]);
    }
  }

  private get allTabs(): Tab[] {
    return Array.from(this.querySelectorAll('mdc-tab'));
  }

  private get previousTab(): Tab {
    const newIndex = this.tabs.findIndex((tab) => document.activeElement === tab) - 1;
    return this.tabs[(newIndex + this.tabs.length) % this.tabs.length];
  }

  private get firstTab(): Tab { return this.tabs[0]; }

  private get lastTab(): Tab { return this.tabs[this.tabs.length - 1]; }

  private get nextTab(): Tab {
    const newIndex = this.tabs.findIndex((tab) => document.activeElement === tab) + 1;
    return this.tabs[newIndex % this.tabs.length];
  }

  private get tabsContainer(): HTMLDivElement {
    return this.shadowRoot?.querySelector('.tabs_container') as HTMLDivElement;
  }

  private get leftArrowButton(): Button {
    return this.shadowRoot?.querySelector('mdc-button[prefix-icon="arrow-left-regular"]') as Button;
  }

  private get rightArrowButton(): Button {
    return this.shadowRoot?.querySelector('mdc-button[prefix-icon="arrow-right-regular"]') as Button;
  }

  private get isRtl(): boolean {
    return this.direction === 'rtl';
  }

  /**
   * Remove the active attribute from all tabs.
   */
  private resetSelection = (): void => {
    this.tabs.forEach((tab) => { tab.removeAttribute('active'); });
  };

  /**
   * Set the focus on the new tab and scroll it into view.
   *
   * @param newTab - New Tab.
   */
  private focusTab = (newTab: Tab): void => {
    newTab.focus();
    // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
    newTab.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' });
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

    if (event.altKey) { return; }

    let newTab: Tab | undefined;

    switch (event.code) {
      case KEYCODES.ENTER:
        this.selectTab(tab);
        break;

      case KEYCODES.SPACE:
        if (event.target !== document.body) {
          event.preventDefault();
          this.selectTab(tab);
        }
        break;

      case KEYCODES.LEFT:
        if (this.isRtl) {
          newTab = this.nextTab;
        } else newTab = this.previousTab;
        break;

      case KEYCODES.RIGHT:

        if (this.isRtl) {
          newTab = this.previousTab;
        } else newTab = this.nextTab;
        break;

      case KEYCODES.HOME:
        newTab = this.firstTab;
        break;

      case KEYCODES.END:
        newTab = this.lastTab;
        break;

      case KEYCODES.TAB:
        event.preventDefault();

        if (event.shiftKey) {
          if (this.isArrowButtonHidden(this.leftArrowButton)) {
            if (!(this.previousElementSibling instanceof HTMLElement)) { return; }

            this.previousElementSibling.focus();
          } else {
            this.leftArrowButton.focus();
          }
        } else if (this.isArrowButtonHidden(this.rightArrowButton)) {
          if (!(this.nextElementSibling instanceof HTMLElement)) { return; }

          this.nextElementSibling.focus();
        } else {
          this.rightArrowButton.focus();
        }
        break;

      default:
    }

    if (newTab) {
      this.focusTab(newTab);
    }
  };

  /**
   * Handle the click event. Select the new tab and set the focus on it.
   *
   * @param event - HTML Mouse Event.
   */
  private handleClick = (event: MouseEvent): void => {
    const tab = event.target;

    if (!(tab instanceof Tab)) { return; }

    this.selectTab(tab);
    this.focusTab(tab);
  };

  /**
   * Show or hide the arrow buttons based on the scroll position.
   */
  private handleScroll = (): void => {
    this.handleArrowButtonVisibility();
  };

  /**
   * Check if the arrow button is hidden.
   *
   * @param arrowButton - The arrow button to check.
   */
  private isArrowButtonHidden = (arrowButton: Button): boolean => arrowButton.classList.contains('hide-button');

  /**
   * Show the left arrow button.
   */
  private showLeftArrowButton = (): void => {
    this.leftArrowButton.classList.remove('hide-button');
    this.classList.add('show-left-arrow-button-padding');
  };

  /**
   * Hide the left arrow button.
   */
  private hideLeftArrowButton = (): void => {
    this.leftArrowButton.classList.add('hide-button');
    this.classList.remove('show-left-arrow-button-padding');
  };

  /**
   * Show the right arrow button.
   */
  private showRightArrowButton = (): void => {
    this.rightArrowButton.classList.remove('hide-button');
    this.classList.add('show-right-arrow-button-padding');
  };

  /**
   * Hide the left arrow button.
   */
  private hideRightArrowButton = (): void => {
    this.classList.remove('show-right-arrow-button-padding');
    this.rightArrowButton.classList.add('hide-button');
  };

  /**
   * Show or hide the arrow buttons based on the position of the tabs
   * corresponding to the tab list.
   */
  private handleArrowButtonVisibility = () => {
    let leftEndTab;
    let rightEndTab;

    if (this.isRtl) {
      leftEndTab = this.lastTab;
      rightEndTab = this.firstTab;
    } else {
      leftEndTab = this.firstTab;
      rightEndTab = this.lastTab;
    }

    const leftEndTabLeftEdgePosition = Math.round(leftEndTab.getBoundingClientRect().left);
    const rightEndTabRightEdgePosition = Math.round(rightEndTab.getBoundingClientRect().right);
    const tabListLeftEdgePosition = Math.round(this.getBoundingClientRect().left);
    const tabListRightEdgePosition = Math.round(this.getBoundingClientRect().right);

    if (leftEndTabLeftEdgePosition < tabListLeftEdgePosition) {
      this.showLeftArrowButton();
    } else {
      this.hideLeftArrowButton();
    }

    if (rightEndTabRightEdgePosition > tabListRightEdgePosition) {
      this.showRightArrowButton();
    } else {
      this.hideRightArrowButton();
    }
  };

  /**
   * Scroll the tabs to the left.
   */
  private scrollTabsLeft = (): void => {
    this.tabsContainer?.scrollBy({
      left: this.scrollDistance * -1,
      // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
      behavior: 'instant',
    });
  };

  /**
   * Scroll the tabs to the right.
   */
  private scrollTabsRight = (): void => {
    this.tabsContainer?.scrollBy({
      left: this.scrollDistance,
      // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
      behavior: 'instant',
    });
  };

  public override render() {
    return html`
      <mdc-button 
        variant="tertiary"
        size="32"
        color="default" 
        prefix-icon="arrow-left-regular" 
        postfix-icon="" 
        type="button" 
        role="button" 
        tabindex="0" 
        aria-label="Scroll Tabs Left"
        @click="${() => this.scrollTabsLeft()}"
        class="hide-button"></mdc-button>
      <div class="tabs_container">
        <slot></slot>
      </div>
      <mdc-button 
        variant="tertiary"
        size="32"
        color="default" 
        prefix-icon="arrow-right-regular" 
        postfix-icon="" 
        type="button" 
        role="button" 
        tabindex="0" 
        aria-label="Scroll Tabs Right"
        @click="${() => this.scrollTabsRight()}"
        class="hide-button"></mdc-button>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Tablist;
