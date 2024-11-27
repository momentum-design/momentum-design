import { Page, expect } from '@playwright/test';
import type { ScreenShotOptions } from '../types';
import type { ComponentsPage } from '..';
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
    await this.page.evaluate(dir => {
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
      for (const direction of ['rtl', 'ltr'] as const) {
        await this.setDocumentDirection(direction);
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-${direction}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`
        });
      }

      // High contrast screenshot only for LTR and supported browsers
      if (['chromium', 'msedge'].includes(browserName)) {
        await this.toggleHighContrastMode(true); // Enable high contrast
        await this.setDocumentDirection('ltr');
        expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
          name: `${name}-high-contrast.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`
        });
        await this.toggleHighContrastMode(false); // Reset high contrast
      }
    }
  }

  /**
   * Creates a sticker sheet on the page, grouping variants of components for visual regression testing.
   *
   * @param componentsPage - The page object used to interact with the components.
   * @param componentTag - The tag name of the component to generate.
   * @param attributes - Attributes to apply to the components, with key-value pairs representing attribute
   *                     names and their possible values. The values are defined as an object of key-value pairs.
   * @param defaultAttributes - Default attributes that should be applied to every component generated.
   *                            If `children` is provided, it will be used as the inner content of the component.
   *
   * @returns Locator for the component list containing all generated components.
   */
  async createStickerSheet(
    componentsPage: ComponentsPage,
    componentTag: string,
    attributes: Record<string, Record<string, string>>,
    defaultAttributes?: Record<string, string>,
  ) {
    const generateComponentMarkup = () => {
      if (Object.keys(attributes).length === 0) return '';

      const [primaryKey, primaryValues] = Object.entries(attributes)[0];
      const otherAttributes = Object.entries(attributes).slice(1);

      const defaultAttrs = defaultAttributes
        ? Object.entries(defaultAttributes)
          .filter(([key]) => key !== 'children')
          .map(([key, value]) => `${key}="${value}"`)
          .join(' ')
        : '';
      const children = defaultAttributes?.children || '';

      return Object.values(primaryValues)
        .map((primaryValue) => {
          const combinations = otherAttributes.reduce<string[]>(
            (acc, [key, values]) =>
              acc.flatMap((prev) => Object.values(values).map((currVal) => `${prev} ${key}="${currVal}"`)),
            [''],
          );
          return `<div class="componentRowWrapper">
          ${combinations.map((combination) => `
          <${componentTag} ${defaultAttrs} ${primaryKey}="${primaryValue}" ${combination}>
            ${children}
          </${componentTag}>`).join('')}
        </div>`;
        })
        .join('');
    };

    await componentsPage.mount({
      html: `
      <div class="componentWrapper">
        ${generateComponentMarkup()}
      </div>
      `,
      clearDocument: true,
    });

    const componentList = componentsPage.page.locator('.componentWrapper');
    await componentsPage.page.waitForLoadState('networkidle');

    return componentList;
  }
}

export default VisualRegression;
