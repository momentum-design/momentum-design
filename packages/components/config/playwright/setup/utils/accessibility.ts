/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { Locator, Page, expect, TestInfo } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import CONSTANTS from '../constants';

interface Accessibility {
  page: Page;
  testInfo: TestInfo;
}

/**
 * Contains common `accessibility` utils, which are useful when doing accessibility tests
 */
class Accessibility {
  constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
  }

  /**
   * Attaches the provided scan results as JSON
   * to the test report
   * @param accessibilityScanResults
   */
  async attachA11yResults(accessibilityScanResults: any) {
    await this.testInfo.attach('accessibility-scan-results', {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: 'application/json',
    });
  }

  /**
   * Checks for Accessibility violations by scanning the whole
   * page with axe-core, using the specific accessibility WCAG tags to check
   * and disabled rules. The results will be attached as a JSON file
   * to the test report afterwards.
   *
   * This function will fail if there are any accessibility violations.
   */
  async checkForA11yViolations() {
    const accessibilityScanResults = await new AxeBuilder({ page: this.page })
      .withTags(CONSTANTS.ACCESSIBILITY.WCAG_TAGS_TO_CHECK)
      .disableRules(CONSTANTS.ACCESSIBILITY.RULES_TO_DISABLE)
      .analyze();

    await this.attachA11yResults(accessibilityScanResults);

    expect(accessibilityScanResults.violations).toEqual([]);
  }

  /**
   * pressAndCheckFocus utility function - it will press the provided `keyToPress` as often
   * as the provided `elementsToBeFocused` are and checks afterwards, if the provided element of the
   * `elementsToBeFocused` has been focused.
   *
   * If only 1 keyPress needs to be done, just simply provide the `elementsToBeFocused` array with
   * 1 element, which should receive focus.
   * @param keyToPress key which should be pressed
   * @param elementsToBeFocused array of elements, which have to be focused after pressing a key
   */
  async pressAndCheckFocus(keyToPress: string, elementsToBeFocused: Array<Locator>) {
    for (const elementToBeFocused of elementsToBeFocused) {
      await this.page.keyboard.press(keyToPress);
      await expect(elementToBeFocused).toBeFocused();
    }
  }
}

export default Accessibility;
