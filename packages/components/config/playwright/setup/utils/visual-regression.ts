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
  private waitForPendingIcons: () => Promise<boolean>;

  constructor(page: Page, waitForPendingIcons: () => Promise<boolean>) {
    this.page = page;
    this.waitForPendingIcons = waitForPendingIcons;
  }

  /**
   * Waits for two animation frames so the browser finishes rendering and
   * painting any pending DOM changes (e.g. Lit re-renders after an icon fetch).
   */
  private async waitForNextPaint(): Promise<void> {
    await this.page.evaluate(
      () =>
        new Promise<void>(resolve => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => resolve());
          });
        }),
    );
  }

  /**
   * Waits for all in-flight icon network requests to complete, then waits for
   * the subsequent Lit re-render and browser paint via a double-rAF.
   * Always waits for a paint frame to ensure any async icon rendering
   * (e.g. from cached SVG fetches) has completed.
   */
  private async waitForIconsToRender(): Promise<void> {
    await this.waitForPendingIcons();
    await this.waitForNextPaint();
  }

  /**
   * Sets the `dir` attribute on the document's root element to control text direction.
   * @param direction - Either 'rtl' (right-to-left) or 'ltr' (left-to-right).
   */
  private async setDocumentDirection(direction: 'rtl' | 'ltr'): Promise<void> {
    await this.page.evaluate(dir => {
      document.documentElement.setAttribute('dir', dir);
    }, direction);

    // wait for the next 2 frames to ensure the direction change is applied
    // this is necessary to make sure that the browser has time to re-render the page
    // and apply the new direction before taking a screenshot
    // otherwise, the screenshot might not reflect the new direction
    // and the visual regression tests might fail
    await this.waitForNextPaint();
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
   * If options.element is provided, it will take a screenshot of that element instead of the whole page.
   *
   * @param name - name of the screenshot, file extension will be appended automatically!
   * @param options - An object that contains the
   * - element to take screenshot from
   * - assertion after switching direction
   * - type of screenshot - stickersheet or userflow
   */
  async takeScreenshot(name: string, options?: ScreenShotOptions): Promise<void> {
    const elementToTakeScreenShotFrom = options?.element || this.page;
    const isSnapshotRun = process.env.E2E_SKIP_SNAPSHOT !== 'true';
    const screenshotSource = options?.source ?? 'stickersheet';
    const browserName = this.page.context()?.browser()?.browserType().name() ?? 'unknown';

    // Ensure icons from component mount are fully loaded & painted before any screenshot.
    if (isSnapshotRun) {
      await this.waitForIconsToRender();
    }

    if (isSnapshotRun && screenshotSource === 'userflow') {
      await this.setDocumentDirection('ltr');
      expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
        name: `${name}-userflow-${options?.fileNameSuffix}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
      });
    } else if (isSnapshotRun && screenshotSource === 'stickersheet') {
      // High contrast screenshot only for LTR and supported browsers
      if (['chromium', 'msedge'].includes(browserName)) {
        await this.toggleHighContrastMode(true); // Enable high contrast
        // forced-colors can trigger new SVG requests; wait for them + paint
        await this.waitForIconsToRender();
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-high-contrast.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
        });
        await this.toggleHighContrastMode(false); // Reset high contrast
      }

      // Normal contrast screenshots for both RTL and LTR
      /* eslint-disable no-await-in-loop */
      /* eslint-disable no-restricted-syntax */
      for (const direction of ['ltr', 'rtl'] as const) {
        await this.setDocumentDirection(direction);
        await options?.assertionAfterSwitchingDirection?.(this.page);
        // direction change / remount can trigger new icon requests; wait + paint
        await this.waitForIconsToRender();
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-${direction}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
        });
      }

      // reset to LTR after taking screenshots
      await this.setDocumentDirection('ltr');
    }
  }
}

export default VisualRegression;
