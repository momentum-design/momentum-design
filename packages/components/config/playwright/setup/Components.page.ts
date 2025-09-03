import { v4 as uuidv4 } from 'uuid';
import { Page, expect, Locator, TestInfo, test, JSHandle } from '@playwright/test';

import Accessibility from './utils/accessibility';
import VisualRegression from './utils/visual-regression';
import type { ThemeClass } from './types';
import Actionability from './utils/actionability';

const componentsDevPageTitle = 'Momentum Components Dev Page';
const htmlRootElementSelector = '#root';

interface MountOptions {
  html: string;
  clearDocument?: boolean;
  elementSelector?: string;
}

interface ComponentsPage {
  accessibility: Accessibility;
  actionability: Actionability;
  visualRegression: VisualRegression;
  page: Page;
  testInfo: TestInfo;
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
    this.actionability = new Actionability(this.page);
    this.visualRegression = new VisualRegression(this.page);
  }

  /**
   * Sets the theme on the global theme provider
   * for e2e tests. This allows testing
   * with specified themes.
   * @param themeClass - themeclass to be used for setting theme on themeprovider
   */
  async setGlobalTheme(themeClass: ThemeClass) {
    await this.page.evaluate(
      args => {
        const themeProvider = window.document.querySelector('body mdc-themeprovider');
        if (themeProvider) {
          themeProvider.setAttribute('themeclass', args.themeClass);
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
    await this.page.goto(url ?? '');
    await expect(this.page).toHaveTitle(componentsDevPageTitle);
  }

  /**
   * Mount a html string to the index.html which gets displayed
   *
   * @param options - a object with options, including the `html` string to mount
   */
  async mount({ html, clearDocument = false, elementSelector }: MountOptions) {
    await test.step('Mounting HTML', async () => {
      await this.page.evaluate(
        args => {
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
        { html, htmlRootElementSelector: elementSelector || htmlRootElementSelector, clearDocument },
      );
    });
  }

  /**
   * Wait for the event `eventName` to be fired on a HTMLElement, queried by the passed in `locator`
   *
   * The wait is deferred, meaning that it will do the waiting in 2 steps:
   * 1. async register the event listener on the element.
   * 2. return a function that will wait for the event to be fired.
   *
   * @example
   * ```ts
   *  // Register event listener before user interaction
   *  const waitForEventDispatch = await componentsPage.waitForEvent(someLocator, 'click');
   *
   *  // Do some user interaction that will trigger the event
   *
   *  // Wait for the event to be fired
   *  await waitForEventDispatch();
   * ```
   *
   * @param locator - Playwright locator
   * @param eventName - eventName to wait for to be fired on queried HTMLElement
   * @param options - options to pass to the waitForEvent function, including a timeout
   * @returns Promise, which resolves when event `eventName` listener registered and returns a function.
   *          The function returns a Promise that resolves when event was fired.
   */
  async waitForEvent(
    locator: Locator,
    eventName: string,
    options?: { timeout?: number },
  ): Promise<() => Promise<JSHandle<boolean>>> {
    const id = uuidv4();
    // Step 1: Register the event listener on the element
    await locator.evaluate(
      (element: HTMLElement, args) => {
        // @ts-ignore
        // eslint-disable-next-line no-multi-assign
        const events = (window.$$eventListeners$$ = window.$$eventListeners$$ || {});
        events[args.id] = 0;
        element.addEventListener(args.eventName, () => {
          events[args.id] += 1;
        });
      },

      { eventName, id },
    );

    // Step 2: Wait for the event to be fired
    return () =>
      locator.page().waitForFunction<boolean, string>(
        // @ts-ignore
        id => (window.$$eventListeners$$?.[id] > 0) as any,
        id,
        { timeout: options?.timeout },
      );
  }

  /**
   * Update one or multiple attributes on a HTMLElement, queried by the passed in `locator`.
   * Additionally, you can update attributes of a nested element by passing an optional nested `Locator`.
   * Boolean attributes are true if present on an element,
   * and should be set to an empty string ("") or the attribute's name without leading or trailing whitespace.
   *
   * Note, this will execute after component's firstUpdate.
   *
   * @param locator - Playwright locator
   * @param attributes - A record object where keys are attribute names, and values are the attribute values to be set.
   */
  async setAttributes(locator: Locator, attributes: Record<string, string>) {
    await locator.evaluate((element, attrs) => {
      Object.keys(attrs).forEach(key => {
        element.setAttribute(key, attrs[key]);
      });
    }, attributes);
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

  /**
   * Check if a promise times out after a certain amount of time
   *
   * @param promise - Promise to check if it times out
   * @param shouldTimeout - Boolean to check if the promise should time out
   * @param timeout - Timeout in milliseconds
   */
  async expectPromiseTimesOut(promise: Promise<unknown>, shouldTimeout: boolean, timeout: number = 2000) {
    const TIMED_OUT = 'TIMED_OUT';
    const timeoutPromise = new Promise(resolve => {
      setTimeout(resolve, timeout);
    }).then(() => TIMED_OUT);

    const [resolved, error] = await Promise.race([promise, timeoutPromise])
      .then(x => [x])
      .catch(err => [undefined, err]);

    const pass = resolved === TIMED_OUT;

    expect(pass, `Promise timedout after ${timeout}ms should be "${shouldTimeout}"`).toBe(shouldTimeout);
    expect(error).toBe(undefined);
  }
}
export default ComponentsPage;
