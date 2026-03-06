import type { Locator, Page, PageScreenshotOptions } from '@playwright/test';

import CONSTANTS from './constants';

export type ScreenShotOptions = PageScreenshotOptions & {
  element?: Locator;
  assertionAfterSwitchingDirection?: (page: Page) => Promise<void>;
  source?: string;
  fileNameSuffix?: string;
};

export type ThemeClass = (typeof CONSTANTS.THEME_CLASSES)[keyof typeof CONSTANTS.THEME_CLASSES];

export type WaitForEventReturnType = { locator: Locator; eventName: string; check: () => Promise<boolean> };
