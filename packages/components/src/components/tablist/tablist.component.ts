import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import styles from './tablist.styles';
import { Component } from '../../models';
import { KEYCODES } from './tablist.constants';

import type Tab from '../tab/tab.component';

/**
 * tablist component, which ...
 *
 * @tagname mdc-tablist
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Tablist extends Component {
  @property({ type: Array<Tab> })
    tabs: Array<Tab> = [];

  @property({ type: String })
    activeTabId: string = '';

  constructor() {
    super();
    this.role = 'tablist';
    this.attachShadow({ mode: 'open' });

    this.tabs = this.allTabs();
    this.activeTabId = this.getAttribute('activetabid') || this.tabs[0].getAttribute('tabid') || '';

    this.selectTab(this.tabs.find((tab) => tab.getAttribute('tabid') === this.activeTabId) || this.tabs[0]);

    this.addEventListener('keydown', this.handleKeydown.bind(this));
    this.addEventListener('click', this.handleClick.bind(this));
  }

  override connectedCallback() {
    super.connectedCallback();

    const resizeObserver = new ResizeObserver((entries) => {
      const parentWidth = entries[0].target.clientWidth;
      const tablistWidth = entries[1].target.scrollWidth;

      const rightButton = this?.shadowRoot?.querySelectorAll('mdc-button')[1];
      (rightButton as HTMLElement).style.position = 'absolute';
      (rightButton as HTMLElement).style.left = `${parentWidth - 32}px`;

      if (tablistWidth > parentWidth) {
        this.shadowRoot?.querySelectorAll('mdc-button').forEach((button) => {
          (button as HTMLElement).classList.remove('hide-button');
        });
      } else {
        this.shadowRoot?.querySelectorAll('mdc-button').forEach((button) => {
          // (button as HTMLElement).classList.add('hide-button');
        });
      }
    });

    resizeObserver.observe(this.parentElement as Element);
    resizeObserver.observe(this);
  }

  override attributeChangedCallback(_activetabid: string, _oldTabId: string, newTabId: string) {
    this.selectTab(this.tabs.find((tab) => tab.getAttribute('tabid') === newTabId) || this.tabs[0]);
  }

  allTabs() {
    return Array.from(this.querySelectorAll('mdc-tab'));
  }

  previousTab() {
    const newIndex = this.tabs.findIndex((tab) => document.activeElement === tab) - 1;
    return this.tabs[(newIndex + this.tabs.length) % this.tabs.length];
  }

  firstTab() {
    return this.tabs[0];
  }

  lastTab() {
    return this.tabs[this.tabs.length - 1];
  }

  nextTab() {
    const newIndex = this.tabs.findIndex((tab) => document.activeElement === tab) + 1;
    return this.tabs[newIndex % this.tabs.length];
  }

  resetSelection() {
    this.tabs.forEach((tab) => { tab.removeAttribute('active'); });
  }

  focusTab(newTab: Tab) {
    newTab.focus();
  }

  selectTab(newTab: Tab) {
    this.resetSelection();
    newTab.setAttribute('active', '');
    this.handleTabChange(newTab);
  }

  handleTabChange(tab: Tab) {
    const event = new CustomEvent('change', {
      detail: { tabId: tab.getAttribute('tabid') },
    });
    this.dispatchEvent(event);
  }

  handleKeydown(event: KeyboardEvent): void {
    const tab = event.target as Tab;

    if (tab.getAttribute('role') !== 'tab') { return; }

    // Don’t handle modifier shortcuts typically used by assistive technology.
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
        newTab = this.previousTab();
        break;

      case KEYCODES.RIGHT:
        newTab = this.nextTab();
        break;

      case KEYCODES.HOME:
        newTab = this.firstTab();
        break;

      case KEYCODES.END:
        newTab = this.lastTab();
        break;

      case KEYCODES.TAB:
        event.preventDefault();

        if (event.shiftKey) {
          const leftArrowButton = this?.shadowRoot?.querySelectorAll('mdc-button[prefix-icon="arrow-left-regular"]')[0];
          if (leftArrowButton && window.getComputedStyle(leftArrowButton).display !== 'none') {
            (leftArrowButton as HTMLElement).focus();
          } else (this.previousElementSibling as HTMLElement)?.focus();
        } else {
          // eslint-disable-next-line max-len
          const rightArrowButton = this?.shadowRoot?.querySelectorAll('mdc-button[prefix-icon="arrow-right-regular"]')[0];
          if (rightArrowButton && window.getComputedStyle(rightArrowButton).display !== 'none') {
            (rightArrowButton as HTMLElement).focus();
          } else (this.previousElementSibling as HTMLElement)?.focus();
        }
        break;

      default:
    }

    if (newTab) {
      this.focusTab(newTab);
    }
  }

  handleClick(event: MouseEvent): void {
    const tab = event.target as Tab;
    if (tab.getAttribute('role') !== 'tab') { return; }

    this.selectTab(tab);
    this.focusTab(tab);
  }

  scrollTabsLeft() {
    console.log('scrollTabsLeft');
  }

  scrollTabsRight() {
    console.log('scrollTabsRight');
  }

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
      class="hide-button">
    </mdc-button>
    <slot></slot>
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
      @click="${() => this.scrollTabsRight()}">
    </mdc-button>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Tablist;
