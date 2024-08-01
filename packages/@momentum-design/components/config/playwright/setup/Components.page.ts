/* eslint-disable no-redeclare */
import { Page, expect, Locator, TestInfo } from '@playwright/test';
import type { ThemeName } from '../../../src/components/themeprovider/themeprovider.types';
import utils from '../../../src/components/themeprovider/themeprovider.utils';
import Accessibility from './utils/accessibility';
import VisualRegression from './utils/visual-regression';

const componentsDevPageTitle = 'Momentum Components Dev Page';
const htmlRootElementSelector = '#root';

interface MountOptions {
  html: string;
  clearDocument?: boolean;
}

interface ComponentsPage {
  accessibility: Accessibility;
  visualRegression: VisualRegression;
  page: Page;
  testInfo: TestInfo
}

/**
 * Components Page Object Model
 *
 * This object model includes basic functionalities like setup, teardown, mount, etc.
 * used for Momentum components E2E testing
 */
class ComponentsPage {
  constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;

    // creates utility objects on components page and inject dependencies:
    this.accessibility = new Accessibility(this.page, this.testInfo);
    this.visualRegression = new VisualRegression(this.page);
  }

  /**
   * Sets the theme on the global theme provider
   * for e2e tests. This allows testing
   * with specified themes.
   * @param theme - themeName to be used for setting theme on themeprovider
   */
  async setGlobalTheme(theme: ThemeName) {
    const themeClass = utils.getFullQualifiedTheme(theme);
    await this.page.evaluate(
      (args) => {
        const themeProvider = window.document.querySelector('body mdc-themeprovider');
        if (themeProvider) {
          themeProvider.setAttribute('theme', args.themeClass);
        }
      },
      { themeClass },
    );
  }

  /**
   * **Setup function**
   *
   * to run before the test to navigate correctly
   */
  async setup() {
    await this.navigate();
  }

  /**
   * **TearDown function**
   *
   * to run after the test
   */
  async tearDown() {
    await this.page.close();
  }

  /**
   * **Navigate function**
   *
   * Path urls are allowed
   *
   * If no url provided, it navigates to baseURL
   *
   * - Go to the provided url
   * - Await till page has been loaded
   */
  async navigate(url?: string) {
    await this.page.goto(url || '');
    await expect(this.page).toHaveTitle(componentsDevPageTitle);
  }

  /**
   * Mount a html string to the index.html which gets displayed
   *
   * @param options - a object with options, including the `html` string to mount
   */
  async mount({ html, clearDocument = false }: MountOptions) {
    await this.page.evaluate(
      (args) => {
        function htmlToElement(htmlString: string): Element {
          const template = document.createElement('template');
          template.innerHTML = htmlString.trim();
          return template.content.firstChild as Element;
        }
        const rootElement = window.document.querySelector(args.htmlRootElementSelector);
        if (rootElement) {
          // delete children of textContent before mounting the passed in html:
          if (args.clearDocument) {
            rootElement.textContent = '';
          }
          rootElement.appendChild(htmlToElement(args.html));
        }
      },
      { html, htmlRootElementSelector, clearDocument },
    );
  }

  /**
   * Wait for the event `eventName` to be fired on a HTMLElement, queried by the passed in `locator`
   * @param locator - Playwright locator
   * @param eventName - eventName to wait for to be fired on queried HTMLElement
   * @returns Promise, which resolves when event `eventName` gets fired
   */
  async waitForEvent(locator: Locator, eventName: string) {
    return locator.evaluate(
      (element: HTMLElement, args) => new Promise((resolve: (value?: unknown) => void) => {
        element.addEventListener(args.eventName, () => {
          resolve();
        });
      }),
      { eventName },
    );
  }

  /**
   * Set a attribute on a HTMLElement, queried by the passed in `locator`
   * @param locator - Playwright locator
   * @param qualifiedName - qualifiedName of the attribute to be set
   * @param value - value of the attribute to be set
   */
  async setAttribute(locator: Locator, qualifiedName: string, value: any) {
    await locator.evaluate(
      (element: HTMLElement, args) => {
        element.setAttribute(args.qualifiedName, args.value);
      },
      { qualifiedName, value },
    );
  }

  /**
   * Remove a attribute of a HTMLElement, queried by the passed in `locator`
   * @param locator - Playwright locator
   * @param qualifiedName - qualifiedName of the attribute to be removed
   */
  async removeAttribute(locator: Locator, qualifiedName: string) {
    await locator.evaluate(
      (element: HTMLElement, args) => {
        element.removeAttribute(args.qualifiedName);
      },
      { qualifiedName },
    );
  }
}
export default ComponentsPage;
