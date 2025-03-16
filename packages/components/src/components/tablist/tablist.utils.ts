import type Tab from '../tab/tab.component';

export const getTabsLength = (tabs: Tab[]): number => tabs.length;

export const getFirstTab = (tabs: Tab[]): Tab => tabs[0];

export const getLastTab = (tabs: Tab[]): Tab => tabs[getTabsLength(tabs) - 1];

export const getPreviousTab = (tabs: Tab[], focusedTabElement: Tab): Tab | undefined => {
  const newIndex = tabs.findIndex((tab) => focusedTabElement === tab) - 1;
  return tabs[(newIndex + tabs.length) % tabs.length];
};

export const getNextTab = (tabs: Tab[], focusedTabElement: Tab): Tab | undefined => {
  const newIndex = tabs.findIndex((tab) => focusedTabElement === tab) + 1;
  return tabs[newIndex % getTabsLength(tabs)];
};

export const getTabById = (tabs: Tab[], id?: string): Tab | undefined => tabs.find(({ tabId }) => tabId === id);
