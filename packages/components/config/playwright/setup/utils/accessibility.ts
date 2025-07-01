import fs from 'fs';

import { Page, expect, TestInfo } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { createHtmlReport } from 'axe-html-reporter';

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
   * Attaches the provided file to the test report
   *
   * File will be deleted after being attached, since after attaching to test report,
   * the file is not needed anymore locally
   *
   * @param fileName - name of the file to attach
   */
  async attachToReport(fileName: string) {
    const reportPath = `./${fileName}`;
    await this.testInfo.attach(fileName, {
      path: reportPath,
    });

    if (fs.existsSync(reportPath)) {
      fs.unlinkSync(reportPath);
    }
  }

  /**
   * Attaches the provided scan results as HTML
   * to the test report
   * @param accessibilityScanResults - scan results
   */
  async attachA11yResults(testResultsName: string, accessibilityScanResults: any) {
    const fileName = `accessibility-scan-results-${testResultsName}.html`;

    // todo: add option to suppress the output of the report if
    // https://github.com/lpelypenko/axe-html-reporter/issues/40 is resolved
    createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: `"${this.testInfo.title}"`,
        outputDir: './',
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
    const { exclusions, inclusions, rules, tags } = { ...CONSTANTS.DEFAULT_ACCESSIBILITY_SCAN_OPTIONS, ...options };
    const accessibilityScanner = new AxeBuilder({ page: this.page }).withTags(tags).disableRules(rules);

    exclusions?.forEach(exclusion => {
      accessibilityScanner.exclude(exclusion);
    });

    inclusions?.forEach(inclusion => {
      accessibilityScanner.include(inclusion);
    });

    const accessibilityScanResults = await accessibilityScanner.analyze();

    await this.attachA11yResults(testResultsName, accessibilityScanResults);

    if (shouldCheck) {
      expect(accessibilityScanResults.violations).toEqual([]);
    }
  }
}

export default Accessibility;
