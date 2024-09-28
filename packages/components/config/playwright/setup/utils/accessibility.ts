/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import fs from "fs";
import { Locator, Page, expect, TestInfo } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import {createHtmlReport} from 'axe-html-reporter';
import CONSTANTS from "../constants";

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
   * Attaches the provided file to the test report
   *
   * File will be deleted after being attached, since after attaching to test report, the file is not needed anymore locally
   *
   * @param fileName name of the file to attach
   */
  async attachToReport(fileName: string) {
    await this.testInfo.attach(fileName, {
      path: `./${fileName}`,
    });

    fs.unlinkSync(`./${fileName}`);
  }

  /**
   * Attaches the provided scan results as HTML
   * to the test report
   * @param accessibilityScanResults
   */
  async attachA11yResults(testResultsName: string, accessibilityScanResults: any) {
    const fileName = `accessibility-scan-results-${testResultsName}.html`;

    // todo: add option to suppress the output of the report if
    // https://github.com/lpelypenko/axe-html-reporter/issues/40 is resolved
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: `"${this.testInfo.title}"`,
        outputDir: "./",
        reportFileName: fileName,
      },
    });

    await this.attachToReport(fileName);
  }

  /**
   * Checks for Accessibility violations by scanning the whole
   * page with axe-core, using the specific accessibility WCAG tags to check
   * and disabled rules. The results will be attached as a JSON file
   * to the test report afterwards.
   *
   * This function will fail if there are any accessibility violations.
   */
  async checkForA11yViolations(
    testResultsName: string,
    shouldCheck = true,
    options: {
      tags?: string[];
      rules?: string[];
      exclusions?: string[];
      inclusions?: string[];
    } = {},
  ) {
    const {exclusions, inclusions, rules, tags} = {...CONSTANTS.DEFAULT_ACCESSIBILITY_SCAN_OPTIONS, ...options};
    const accessibilityScanner = new AxeBuilder({page: this.page}).withTags(tags).disableRules(rules);

    exclusions?.forEach((exclusion) => {
      accessibilityScanner.exclude(exclusion);
    });

    inclusions?.forEach((inclusion) => {
      accessibilityScanner.include(inclusion);
    });

    const accessibilityScanResults = await accessibilityScanner.analyze();

    await this.attachA11yResults(testResultsName, accessibilityScanResults);

    if (shouldCheck) {
      expect(accessibilityScanResults.violations).toEqual([]);
    }
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
