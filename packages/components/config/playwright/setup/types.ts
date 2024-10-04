import { Locator, PageScreenshotOptions } from '@playwright/test';
import CONSTANTS from './constants';

export type ScreenShotOptions = PageScreenshotOptions & {
  element?: Locator;
};

export type ThemeClass = typeof CONSTANTS.THEME_CLASSES[keyof typeof CONSTANTS.THEME_CLASSES];
