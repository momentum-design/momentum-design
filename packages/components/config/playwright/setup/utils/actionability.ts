import { Locator, Page } from '@playwright/test';

interface Actionability {
  page: Page;
}

/**
 * Contains common `actionability` utils for actions on page
 */
class Actionability {
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * To get the name of the browser on which page is opened.
   * @returns The name of the browser being used like 'webkit', 'chromium', 'firefox'.
   * Returns 'unknown' if browser name is not found.
   */
  private browserName(): string {
    return this.page.context().browser()?.browserType()?.name() ?? 'unknown';
  }

  /**
   * Presses the Tab key to navigate to the next focusable element.
   */
  async pressTab() {
    const browserName = this.browserName();
    if (browserName === 'webkit') {
      await this.page.keyboard.press('Alt+Tab');
    } else {
      await this.page.keyboard.press('Tab');
    }
  }

  /**
   * Explicitly blurs the component to remove focus from the component in WebKit only.
   * @param component - The component to blur
   */
  async blurForWebKit(component: Locator) {
    const browserName = this.browserName();
    if (browserName === 'webkit') {
      await component.evaluate((el) => el.blur());
    }
  }
}

export default Actionability;
