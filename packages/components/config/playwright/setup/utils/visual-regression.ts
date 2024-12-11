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
    await this.page.emulateMedia({ forcedColors: enable ? 'active' : 'none' });
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
    const browserName = this.page.context()?.browser()?.browserType().name() ?? 'unknown';

    if (isSnapshotRun) {
      // Normal contrast screenshots for both RTL and LTR
      /* eslint-disable no-await-in-loop */
      /* eslint-disable no-restricted-syntax */
      for (const direction of ['rtl', 'ltr'] as const) {
        await this.setDocumentDirection(direction);
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-${direction}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
        });
      }

      // High contrast screenshot only for LTR and supported browsers
      if (['chromium', 'msedge'].includes(browserName)) {
        await this.toggleHighContrastMode(true); // Enable high contrast
        await this.setDocumentDirection('ltr');
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-high-contrast.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
        });
        await this.toggleHighContrastMode(false); // Reset high contrast
      }
    }
  }
}

export default VisualRegression;
