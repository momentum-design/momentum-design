/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { expect, Locator, Page } from '@playwright/test';

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
  browserName(): string {
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
   * Release focus for the specified subcomponent locator
   * @param subComponent - Locator
   */
  async releaseFocus(subComponent: Locator) {
    const browserName = this.browserName();
    if (browserName === 'webkit') {
      // Explicitly blur to remove focus in WebKit
      await subComponent.evaluate((el) => el.blur());
    } else {
      await this.page.keyboard.press('Tab');
    }
  }

  /**
   * pressAndCheckFocus utility function - it will press the provided `keyToPress` as often
   * as the provided `elementsToBeFocused` are and checks afterwards, if the provided element of the
   * `elementsToBeFocused` has been focused.
   *
   * If only 1 keyPress needs to be done, just simply provide the `elementsToBeFocused` array with
   * 1 element, which should receive focus.
   * @param keyToPress - key which should be pressed
   * @param elementsToBeFocused - array of elements, which have to be focused after pressing a key
   */
  async pressAndCheckFocus(keyToPress: string, elementsToBeFocused: Array<Locator>) {
    for (const elementToBeFocused of elementsToBeFocused) {
      await this.page.keyboard.press(keyToPress);
      await expect(elementToBeFocused).toBeFocused();
    }
  }
}

export default Actionability;
