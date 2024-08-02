import { Page, expect } from '@playwright/test';
import type { ScreenShotOptions } from '../types';
import CONSTANTS from '../constants';

interface VisualRegression {
  page: Page;
}

/**
 * Contains common `visual-regression` utils, which are useful when doing visual-regression tests
 */
class VisualRegression {
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Takes a screenshot of the whole page, with the passed in options
   *
   * @param name - name of the screenshot, file extension will be appended automatically!
   * @param options - description
   * @param options.element - element to take screenshot from
   */
  async takeScreenshot(name: string, options?: ScreenShotOptions): Promise<void> {
    const elementToTakeScreenShotFrom = options?.element || this.page;

    expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
      name: `${name}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
      threshold: CONSTANTS.VISUAL_REGRESSION.THRESHOLD,
      maxDiffPixelRatio: CONSTANTS.VISUAL_REGRESSION.MAX_DIFF_PIXELS_RATIO,
    });
  }
}

export default VisualRegression;
