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
   * Sets the `dir` attribute on the document's root element to control text direction.
   * @param direction - Either 'rtl' (right-to-left) or 'ltr' (left-to-right).
   */
   private async setDocumentDirection(direction: 'rtl' | 'ltr'): Promise<void> {
    await this.page.evaluate((dir) => {
      document.documentElement.setAttribute('dir', dir);
    }, direction);
  }

   /**
   * Enables or disables high contrast mode by emulating the `forcedColors` setting in the browser.
   * @param enable - Boolean flag to enable or disable high contrast mode.
   */
  private async toggleHighContrastMode(enable: boolean): Promise<void> {
    if (enable) {
      await this.page.emulateMedia({ forcedColors: 'active' });
    } else {
      await this.page.emulateMedia({ forcedColors: 'none' });
    }
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
    const isSnapshotRun = process.env.E2E_SKIP_SNAPSHOT !== 'true';

    if (isSnapshotRun) {
      // Normal contrast screenshots
      for (const direction of ['rtl', 'ltr'] as const) {
        await this.setDocumentDirection(direction);
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-${direction}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
          threshold: CONSTANTS.VISUAL_REGRESSION.THRESHOLD,
          maxDiffPixelRatio: CONSTANTS.VISUAL_REGRESSION.MAX_DIFF_PIXELS_RATIO,
        });
      }

      // High contrast screenshots
      await this.toggleHighContrastMode(true); // Enable high contrast
      for (const direction of ['rtl', 'ltr'] as const) {
        await this.setDocumentDirection(direction);
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-high-contrast-${direction}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
          threshold: CONSTANTS.VISUAL_REGRESSION.THRESHOLD,
          maxDiffPixelRatio: CONSTANTS.VISUAL_REGRESSION.MAX_DIFF_PIXELS_RATIO,
        });
      }
      await this.toggleHighContrastMode(false); // Reset high contrast
    }
  }
}

export default VisualRegression;
