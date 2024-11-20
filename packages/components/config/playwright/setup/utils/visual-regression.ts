import { Page, expect } from '@playwright/test';
import type { ScreenShotOptions } from '../types';
import { ComponentsPage } from '../../setup';
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

  async createStickerSheet(componentsPage: ComponentsPage, componentTag: string, attributes: ) {
    const generateComponentMarkup = () => {
      const attributeCombinations = Object.entries(attributes).map(([key, values]) => {
        return Array.isArray(values) ? values.map(value => `${key}="${value}"`) : [`${key}="${values}"`];
      });
  
      const combinations = attributeCombinations.reduce((acc, curr) => {
        if (acc.length === 0) return curr;
        const combined = [];
        acc.forEach(prev => {
          curr.forEach(currVal => {
            combined.push(`${prev} ${currVal}`);
          });
        });
        return combined;
      }, []);
  
      return combinations
        .map((combination) => `<${componentTag} ${combination}></${componentTag}>`)
        .join('');
    };
 
    
    await componentsPage.mount({
      html: `
      <div class="presence-list">
      ${Object.values(typeValues)
        .map(
          (type: any) => `
        <div class="presence-row">
          ${generateComponentMarkup(type)}
        </div>
      `,
        )
        .join('')}
      </div>
      `,
    });
  
    const componentList = componentsPage.page.locator('.presence-list');
    const lastComponent = componentsPage.page.locator(`${componentTag}`).last();
    await lastComponent.waitFor();
  
    return componentList;
  };
}

export default VisualRegression;
