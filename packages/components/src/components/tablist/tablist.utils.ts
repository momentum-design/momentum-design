import type Tab from '../tab/tab.component';

export const getFirstTab = (tabs: Tab[]): Tab | undefined => tabs[0];

export const getLastTab = (tabs: Tab[]): Tab | undefined => tabs[tabs.length - 1];

export const getPreviousTab = (tabs: Tab[], focusedTabElement: Tab): Tab | undefined => {
  const newIndex = tabs.findIndex(tab => focusedTabElement === tab) - 1;
  return tabs[(newIndex + tabs.length) % tabs.length];
};

export const getNextTab = (tabs: Tab[], focusedTabElement: Tab): Tab | undefined => {
  const newIndex = tabs.findIndex(tab => focusedTabElement === tab) + 1;
  return tabs[newIndex % tabs.length];
};

export const findTab = (tabs: Tab[], tabId: string): Tab | undefined => tabs.find(tab => tab.tabId === tabId);

export const getActiveTab = (tabs: Tab[]): Tab | undefined => tabs.find(tab => tab.active);
