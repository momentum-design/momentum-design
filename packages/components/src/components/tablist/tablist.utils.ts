import type Tab from '../tab/tab.component';

export const getFirstTab = (tabs: Tab[]): Tab | undefined => tabs[0];

export const getLastTab = (tabs: Tab[]): Tab | undefined => tabs[tabs.length - 1];

export const getPreviousTab = (tabs: Tab[], focusedTabElement: Tab, loopBack: boolean): Tab | undefined => {
  const newIndex = tabs.findIndex(tab => focusedTabElement === tab) - 1;
  const index = loopBack ? (newIndex + tabs.length) % tabs.length : Math.max(0, newIndex);
  return tabs[index];
};

export const getNextTab = (tabs: Tab[], focusedTabElement: Tab, loopBack: boolean): Tab | undefined => {
  const newIndex = tabs.findIndex(tab => focusedTabElement === tab) + 1;
  const index = loopBack ? newIndex % tabs.length : Math.min(newIndex, tabs.length - 1);
  return tabs[index];
};

export const findTab = (tabs: Tab[], tabId: string): Tab | undefined => tabs.find(tab => tab.tabId === tabId);

export const getActiveTab = (tabs: Tab[]): Tab | undefined => tabs.find(tab => tab.active);
