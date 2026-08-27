import type { BaseArray } from '../../utils/virtualIndexArray';
import { INDICATOR_ORIGIN_ATTRIBUTE, type IndicatorTransformOrigin } from '../tab/tab.constants';
import type Tab from '../tab/tab.component';

export type { IndicatorTransformOrigin };

export const getFirstTab = (tabs: BaseArray<Tab>): Tab | undefined => tabs.at(0);

export const getLastTab = (tabs: BaseArray<Tab>): Tab | undefined => tabs.at(tabs.length - 1);

export const findTab = (tabs: BaseArray<Tab>, tabId: string): Tab | undefined => tabs.find(tab => tab.tabId === tabId);

export const getActiveTab = (tabs: BaseArray<Tab>): Tab | undefined =>
  tabs.find(tab => tab.active || tab.hasAttribute('active'));

export type IndicatorOriginPair = {
  incoming: IndicatorTransformOrigin;
  outgoing?: IndicatorTransformOrigin;
};

export { INDICATOR_ORIGIN_ATTRIBUTE };

export const resolveIndicatorOrigins = (
  previousIndex: number | undefined,
  newIndex: number,
): IndicatorOriginPair | undefined => {
  if (previousIndex !== undefined && previousIndex === newIndex) {
    return undefined;
  }

  if (previousIndex === undefined) {
    return { incoming: 'center' };
  }

  if (newIndex > previousIndex) {
    return { incoming: 'inline-start', outgoing: 'inline-end' };
  }

  return { incoming: 'inline-end', outgoing: 'inline-start' };
};
