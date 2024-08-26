import { Locator, PageScreenshotOptions } from '@playwright/test';

export type ScreenShotOptions = PageScreenshotOptions & {
  element?: Locator;
};
