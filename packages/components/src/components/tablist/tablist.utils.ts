import type { BaseArray } from '../../utils/virtualIndexArray';
import type Tab from '../tab/tab.component';

export const getFirstTab = (tabs: BaseArray<Tab>): Tab | undefined => tabs.at(0);

export const getLastTab = (tabs: BaseArray<Tab>): Tab | undefined => tabs.at(tabs.length - 1);

export const findTab = (tabs: BaseArray<Tab>, tabId: string): Tab | undefined => tabs.find(tab => tab.tabId === tabId);

export const getActiveTab = (tabs: BaseArray<Tab>): Tab | undefined => tabs.find(tab => tab.active);
