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
    console.log('HITLER: ', fileName, ' attacthToReport called bro');
    const reportPath = `./${fileName}`;
    await this.testInfo.attach(fileName, {
      path: reportPath,
    });

    console.log('HITLER: ', fileName, ' checking file sync ', reportPath);
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
    const browserName = this.page.context()?.browser()?.browserType().name() ?? 'unknown';
    const fileName = `accessibility-scan-results-${testResultsName}-${browserName}.html`;
    console.log('HITLER: ', testResultsName, ' browserName ', browserName, ' createHtmlReport about to be called');

    // todo: add option to suppress the output of the report if
    // https://github.com/lpelypenko/axe-html-reporter/issues/40 is resolved
    try {
      createHtmlReport({
        results: accessibilityScanResults,
        options: {
          projectKey: `"${this.testInfo.title}"`,
          outputDir: './',
          reportFileName: fileName,
        },
      });
    } catch (e) {
      console.error('HITLER: ', testResultsName, ' browserName ', browserName, ' createHtmlReport exception');
      console.error(e);
    }

    console.log('HITLER: ', testResultsName, ' browserName ', browserName, ' attachReport called');
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
    const browserName = this.page.context()?.browser()?.browserType().name() ?? 'unknown';
    console.log('HITLER: ', testResultsName, ' START checkForA11yViolations with ', browserName);
    const { exclusions, inclusions, rules, tags } = { ...CONSTANTS.DEFAULT_ACCESSIBILITY_SCAN_OPTIONS, ...options };
    const accessibilityScanner = new AxeBuilder({ page: this.page }).withTags(tags).disableRules(rules);
    console.log('HITLER: ', testResultsName, ' accessibilityScanner ', typeof accessibilityScanner);

    exclusions?.forEach(exclusion => {
      accessibilityScanner.exclude(exclusion);
    });

    inclusions?.forEach(inclusion => {
      accessibilityScanner.include(inclusion);
    });

    console.log(
      'HITLER: ',
      testResultsName,
      ' AFTER inclusions and exclusions accessibilityScanner ',
      typeof accessibilityScanner,
    );

    const accessibilityScanResults = await accessibilityScanner.analyze();

    console.log('HITLER: ', testResultsName, ' calling attachA11yResults with ', typeof accessibilityScanResults);
    await this.attachA11yResults(testResultsName, accessibilityScanResults);

    if (shouldCheck) {
      console.log('HITLER: ', testResultsName, ' last violation check ', shouldCheck);
      expect(accessibilityScanResults.violations).toEqual([]);
    }
    console.log('HITLER: ', testResultsName, ' END checkForA11yViolations');
  }
}

export default Accessibility;
