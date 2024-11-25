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
   *
   * @returns Locator for the component list containing all generated components.
   */
  async createStickerSheet(
    componentsPage: ComponentsPage,
    componentTag: string,
    attributes: Record<string, Record<string, string>>,
    children = '',
  ) {
    const generateComponentMarkup = () => {
      const attributeEntries = Object.entries(attributes);
      let markup = '';

      if (attributeEntries.length === 0) {
        return markup;
      }

      const [primaryAttribute, ...otherAttributes] = attributeEntries;
      const [primaryKey, primaryValues] = primaryAttribute;

      // eslint-disable-next-line
      for (const primaryValue of Object.values(primaryValues)) {
        let rowMarkup = '';

        if (otherAttributes.length === 0) {
          rowMarkup = `<div class="componentRowWrapper">
            <${componentTag} ${primaryKey}="${primaryValue}">${children}</${componentTag}>
          </div>`;
        } else {
          const combinations = otherAttributes.reduce(
            (acc, [key, values]) => {
              const valueArray = Object.values(values);
              if (acc.length === 0) {
                return valueArray.map((value) => `${key}="${value}"`);
              }
              const combined: string[] = [];
              acc.forEach((prev) => {
                valueArray.forEach((currVal) => {
                  combined.push(`${prev} ${key}="${currVal}"`);
                });
              });
              return combined;
            },
            [''],
          );

          rowMarkup = `<div class="componentRowWrapper">
            ${combinations
    .map(
      (combination) =>
        `<${componentTag} ${primaryKey}="${primaryValue}" ${combination}>${children}</${componentTag}>`,
    )
    .join('')}
          </div>`;
        }

        markup += rowMarkup;
      }

      return markup;
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
