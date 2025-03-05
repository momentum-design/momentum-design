import { CSSResult, html } from 'lit';
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
 * @tagname mdc-tablist
 *
 * @slot Default slot for mdc-tab elements.
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Tablist extends Component {
  @property({ type: String })
  activeTabId: string = '';

  @property({ type: Array<Tab> })
  private tabs: Array<Tab> = [];

  @property({ type: String })
  private direction: String = '';

  @property({ type: Number })
  private scrollDistance: number = 100;

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

    this.tabsContainer.addEventListener('scroll', this.handleScroll);
  }

  override attributeChangedCallback = (_activeTabId: string, _oldTabId: string, newTabId: string) => {
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

  private handleClick = (event: MouseEvent): void => {
    const tab = event.target;

    if (!(tab instanceof Tab)) { return; }

    this.selectTab(tab);
    this.focusTab(tab);
  };

  private handleScroll = (): void => {
    this.handleArrowButtonVisibility();
  };

  private isArrowButtonHidden = (arrowButton: Button): boolean => arrowButton.classList.contains('hide-button');

  private showLeftArrowButton = (): void => {
    this.leftArrowButton.classList.remove('hide-button');
    this.classList.add('show-left-arrow-button-padding');
  };

  private hideLeftArrowButton = (): void => {
    this.leftArrowButton.classList.add('hide-button');
    this.classList.remove('show-left-arrow-button-padding');
  };

  private showRightArrowButton = (): void => {
    this.rightArrowButton.classList.remove('hide-button');
    this.classList.add('show-right-arrow-button-padding');
  };

  private hideRightArrowButton = (): void => {
    this.classList.remove('show-right-arrow-button-padding');
    this.rightArrowButton.classList.add('hide-button');
  };

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

  private scrollTabsLeft = (): void => {
    this.tabsContainer?.scrollBy({
      left: this.scrollDistance * -1,
      // @ts-ignore : https://github.com/Microsoft/TypeScript/issues/28755
      behavior: 'instant',
    });
  };

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
