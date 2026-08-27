import { property } from 'lit/decorators.js';
import type { PropertyValues } from 'lit';

import type { Component } from '../../models';
import Tab from '../../components/tab';
import { TAB_VARIANTS } from '../../components/tab/tab.constants';
import {
  findTab,
  getActiveTab,
  resolveIndicatorOrigins,
} from '../../components/tablist/tablist.utils';
import type { BaseArray } from '../virtualIndexArray';

import type { Constructor } from './index.types';

export declare abstract class TabListComponentMixinInterface {
  protected abstract get navItems(): BaseArray<Tab>;

  activeTabId?: string;
}

export const TabListComponentMixin = <T extends Constructor<Component>>(superClass: T) => {
  abstract class InnerMixinClass extends superClass {
    /**
     * @internal
     */
    protected abstract get navItems(): BaseArray<Tab>;

    /**
     * ID of the active tab, defaults to the first tab if not provided
     */
    @property({ type: String, attribute: 'active-tab-id', reflect: true })
    activeTabId?: string;

    /**
     * Tracks whether the initial line-tab indicator origin has been applied.
     * @internal
     */
    private initialIndicatorOriginApplied = false;

    /**
     * Last selected tab id used for direction-aware indicator animation.
     * @internal
     */
    private lastActiveTabId?: string;

    constructor(...rest: any[]) {
      super(...rest);

      // Reason for assertion below: https://github.com/microsoft/TypeScript/issues/28357
      this.addEventListener('activechange', this.handleNestedTabActiveChange as (event: Event) => Promise<void>);
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
        if (!this.navItems || !this.activeTabId) {
          return;
        }

        const newTab = findTab(this.navItems, this.activeTabId);
        if (!(newTab instanceof Tab)) {
          return;
        }

        this.setActiveTab(newTab, changedProperties.get('activeTabId') as string | undefined);

        // Only fire the change event if activeTabId was previously set (not the initial assignment).
        // On first render, old value is undefined by default, which means it's being set for the first time.
        if (changedProperties.get('activeTabId')) {
          this.fireTabChangeEvent(newTab);
        }
      }
    }

    /**
     * Removes active attribute from all tabs and sets active on the new tab.
     *
     * @param newTab - The new active tab.
     * @internal
     */
    private setActiveTab(newTab: Tab, previousActiveTabId?: string): void {
      const resolvedPreviousTabId =
        previousActiveTabId && previousActiveTabId !== newTab.tabId ? previousActiveTabId : this.lastActiveTabId;
      const previousTab = this.resolvePreviousTab(newTab, resolvedPreviousTabId);

      if (previousTab === newTab && this.initialIndicatorOriginApplied) {
        return;
      }

      if (this.shouldApplyDirectionalIndicator(newTab)) {
        this.applyIndicatorOrigins(newTab, previousTab, resolvedPreviousTabId);
        this.initialIndicatorOriginApplied = true;
      }

      this.navItems?.forEach(tab => {
        if (tab === newTab) {
          tab.setAttribute('active', '');
        } else {
          tab.removeAttribute('active');
        }
      });

      this.lastActiveTabId = newTab.tabId;
    }

    /**
     * @internal
     */
    private resolvePreviousTab(newTab: Tab, previousActiveTabId?: string): Tab | undefined {
      if (previousActiveTabId && previousActiveTabId !== newTab.tabId && this.navItems) {
        const tabFromId = findTab(this.navItems, previousActiveTabId);
        if (tabFromId instanceof Tab) {
          return tabFromId;
        }
      }

      return getActiveTab(this.navItems);
    }

    /**
     * @internal
     */
    private shouldApplyDirectionalIndicator(newTab: Tab): boolean {
      return this.tagName === 'MDC-TABLIST' && newTab.getAttribute('variant') === TAB_VARIANTS.LINE;
    }

    /**
     * @internal
     */
    private applyIndicatorOrigins(newTab: Tab, previousTab: Tab | undefined, previousActiveTabId?: string): void {
      if (!this.navItems) {
        return;
      }

      const newIndex = this.navItems.findIndex(tab => tab === newTab);
      let previousIndex: number | undefined;

      if (previousActiveTabId && previousActiveTabId !== newTab.tabId && previousTab) {
        previousIndex = this.navItems.findIndex(tab => tab === previousTab);
      } else if (previousTab && previousTab !== newTab) {
        previousIndex = this.navItems.findIndex(tab => tab === previousTab);
      }

      const origins = resolveIndicatorOrigins(previousIndex, newIndex);

      if (!origins) {
        return;
      }

      if (previousTab && origins.outgoing) {
        previousTab.setIndicatorTransformOrigin(origins.outgoing);
        void previousTab.offsetWidth;
      }

      newTab.setIndicatorTransformOrigin(origins.incoming);
      void newTab.offsetWidth;
    }

    /**
     * Dispatch the change event.
     *
     * @param newTab - the new tab that is active.
     * @internal
     */
    private fireTabChangeEvent(newTab: Tab): void {
      const event = new CustomEvent('change', {
        detail: { tabId: newTab.tabId },
      });

      this.dispatchEvent(event);
    }

    /**
     * Handle the tab active change event fired from the nested tab.
     *
     * @param event - Custom Event fired from the nested tab.
     * @internal
     */
    private async handleNestedTabActiveChange(event: CustomEvent<any>): Promise<void> {
      event.stopPropagation();
      const tab = event.target;
      if (!(tab instanceof Tab)) {
        return;
      }

      this.activeTabId = tab.tabId;
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<TabListComponentMixinInterface> & T;
};
