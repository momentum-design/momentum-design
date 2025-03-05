import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import styles from './tablist.styles';
import { Component } from '../../models';
import { KEYCODES } from './tablist.constants';
import { remToPx } from './tablist.utils';

import type Tab from '../tab/tab.component';
import type Button from '../button';

/**
 * Tab list organizes tabs into a container.
 *
 * @tagname mdc-tablist
 *
 * @slot Default slot for mdc-tab elements.
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Tablist extends Component {
  @property({ type: String })
  activeTabId: string = '';

  @property()
  private tabs: Array<Tab> = [];

  @property()
  private direction: String | null = '';

  @property()
  scrollDistance: number = 100;

  constructor() {
    super();
    this.role = 'tablist';
    this.attachShadow({ mode: 'open' });

    this.tabs = this.allTabs;
    this.activeTabId = this.getAttribute('activetabid') || this.tabs[0].getAttribute('tabid') || '';

    this.selectTab(this.tabs.find((tab) => tab.getAttribute('tabid') === this.activeTabId) || this.tabs[0]);

    this.addEventListener('keydown', this.handleKeydown.bind(this));
    this.addEventListener('click', this.handleClick.bind(this));
    this.addEventListener('scroll', this.handleScroll.bind(this));
  }

  override async connectedCallback() {
    super.connectedCallback();
    await customElements.whenDefined('mdc-tablist');

    this.scrollDistance = remToPx(6.25);
    this.direction = (document.querySelector('html')?.getAttribute('dir')) || window.getComputedStyle(this).direction;

    const resizeObserver = new ResizeObserver((entries): void => {
      const tablistWidth: number = this.tabList.scrollWidth || 0;
      const tablistContainerWidth: number = entries[0].borderBoxSize[0].inlineSize;

      if (this.direction === 'rtl') {
        this.leftArrowButton.style.right = `${tablistContainerWidth - remToPx(1)}px`;
      } else {
        this.rightArrowButton.style.left = `${tablistContainerWidth - remToPx(1)}px`;
      }

      if (tablistContainerWidth >= tablistWidth) {
        this.hideLeftArrow();
        this.hideRightArrow();
      } else if (this.direction === 'rtl') {
        this.showLeftArrow();
      } else {
        this.showRightArrow();
      }
    });

    resizeObserver.observe(this);

    this.tabList.addEventListener('scroll', this.handleScroll);
  }

  override attributeChangedCallback = (_activetabid: string, _oldTabId: string, newTabId: string) => {
    this.selectTab(this.tabs.find((tab) => tab.getAttribute('tabid') === newTabId) || this.tabs[0]);
  };

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

  private get tabListContainer(): HTMLElement {
    return this.shadowRoot?.querySelector('.tab_list__container') as HTMLElement;
  }

  private get tabList(): HTMLElement {
    return this.shadowRoot?.querySelector('.tab_list') as HTMLElement;
  }

  private get leftArrowButton(): Button {
    return this.shadowRoot?.querySelector('mdc-button[prefix-icon="arrow-left-regular"]') as Button;
  }

  private get rightArrowButton(): Button {
    return this.shadowRoot?.querySelector('mdc-button[prefix-icon="arrow-right-regular"]') as Button;
  }

  private resetSelection = (): void => {
    this.tabs.forEach((tab) => { tab.removeAttribute('active'); });
  };

  private focusTab = (newTab: Tab): void => {
    newTab.focus();
    // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
    newTab.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' });
  };

  private selectTab = (newTab: Tab): void => {
    this.resetSelection();
    newTab.setAttribute('active', '');
    this.handleTabChange(newTab);
  };

  private handleTabChange = (tab: Tab): void => {
    const event = new CustomEvent('change', {
      detail: { tabId: tab.getAttribute('tabid') },
    });
    this.dispatchEvent(event);
  };

  private handleKeydown = (event: KeyboardEvent): void => {
    const tab = event.target as Tab;

    if (tab.getAttribute('role') !== 'tab') { return; }

    if (event.altKey) { return; }

    let newTab;
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
        if (this.direction === 'rtl') {
          newTab = this.nextTab;
        } else newTab = this.previousTab;
        break;

      case KEYCODES.RIGHT:

        if (this.direction === 'rtl') {
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
          if (this.isArrrowHidden(this.leftArrowButton)) {
            (this?.previousElementSibling as HTMLElement)?.focus();
          } else {
            this.leftArrowButton.focus();
          }
        } else if (this.isArrrowHidden(this.rightArrowButton)) {
          (this?.nextElementSibling as HTMLElement)?.focus();
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

  private handleClick = (event: MouseEvent): void => {
    const tab = event.target as Tab;
    if (tab.getAttribute('role') !== 'tab') { return; }

    this.selectTab(tab);
    this.focusTab(tab);
  };

  private handleScroll = (): void => {
    this.handleArrowVisibility();
  };

  private isArrrowHidden = (arrowButton: Button): boolean => arrowButton.classList.contains('hide-button');

  private showLeftArrow = (): void => {
    this.leftArrowButton.classList.remove('hide-button');
    this.tabListContainer.classList.add('show-left-button-padding');
  };

  private hideLeftArrow = (): void => {
    this.leftArrowButton.classList.add('hide-button');
    this.tabListContainer.classList.remove('show-left-button-padding');
  };

  private showRightArrow = (): void => {
    this.rightArrowButton.classList.remove('hide-button');
    this.tabListContainer.classList.add('show-right-button-padding');
  };

  private hideRightArrow = (): void => {
    this.tabListContainer.classList.remove('show-right-button-padding');
    this.rightArrowButton.classList.add('hide-button');
  };

  private handleArrowVisibility = () => {
    let leftMostTab;
    let rightMostTab;

    if (this.direction === 'rtl') {
      leftMostTab = this.lastTab;
      rightMostTab = this.firstTab;
    } else {
      leftMostTab = this.firstTab;
      rightMostTab = this.lastTab;
    }

    const leftMostTabPosition = Math.round(leftMostTab.getBoundingClientRect().left);
    const rightMostTabPosition = Math.round(rightMostTab.getBoundingClientRect().right);
    const tabListContainerPositionLeft = Math.round(this.getBoundingClientRect().left);
    const tabListContainerPositionRight = Math.round(this.getBoundingClientRect().right);

    if (leftMostTabPosition < tabListContainerPositionLeft) {
      this.showLeftArrow();
    } else {
      this.hideLeftArrow();
    }

    if (rightMostTabPosition > tabListContainerPositionRight) {
      this.showRightArrow();
    } else {
      this.hideRightArrow();
    }
  };

  private scrollTabsLeft = (): void => {
    this.tabList?.scrollBy({
      left: this.scrollDistance * -1,
      // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
      behavior: 'instant',
    });
  };

  private scrollTabsRight = (): void => {
    this.tabList?.scrollBy({
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
      <div class="tab_list__container">
        <div class="tab_list">
          <slot></slot>
        </div>
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
