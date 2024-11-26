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
      // RTL Screenshot
      await this.page.evaluate(() => {
        document.documentElement.setAttribute('dir', 'rtl');
      });
      expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
        name: `${name}-rtl.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
        threshold: CONSTANTS.VISUAL_REGRESSION.THRESHOLD,
        maxDiffPixelRatio: CONSTANTS.VISUAL_REGRESSION.MAX_DIFF_PIXELS_RATIO,
      });

      // LTR Screenshot
      await this.page.evaluate(() => {
        document.documentElement.setAttribute('dir', 'ltr');
      });
      expect(await elementToTakeScreenShotFrom.screenshot(options)).toMatchSnapshot({
        name: `${name}.${CONSTANTS.VISUAL_REGRESSION.FILE_EXTENSION}`,
        threshold: CONSTANTS.VISUAL_REGRESSION.THRESHOLD,
        maxDiffPixelRatio: CONSTANTS.VISUAL_REGRESSION.MAX_DIFF_PIXELS_RATIO,
      });
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
