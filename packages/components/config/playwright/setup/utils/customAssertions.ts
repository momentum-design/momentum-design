/* eslint-disable prefer-template */
import { expect as baseExpect } from '@playwright/test';

import type { WaitForEventReturnType } from '../types';

export { test } from '@playwright/test';

/**
 * Custom Assertions for Playwright tests
 */
export const expect = baseExpect.extend({
  /**
   * Asserts for an event to be emitted on a locator
   *
   * It works in conjunction with the `waitForEvent` method from the ComponentsPage.
   *
   * Usage:
   * ```ts
   * const waitForAnyEvent = await componentsPage.waitForEvent(locator, 'any');
   * // perform action that triggers the event
   * await expect.toEventEmitted(waitForAnyEvent);
   * ```
   *
   * @param eventChecker - The event checker object returned from the `waitForEvent` method
   */
  async toEventEmitted(eventChecker: WaitForEventReturnType) {
    const assertionName = 'toEventEmitted';
    let pass: boolean;
    let matcherResult: any;
    try {
      const result = await eventChecker.check();
      const expectation = this.isNot ? baseExpect(result).not : baseExpect(result);
      expectation.toBe(true);
      pass = true;
    } catch (e: any) {
      matcherResult = e.matcherResult;
      pass = false;
    }

    if (this.isNot) {
      pass = !pass;
    }

    const message = pass
      ? () =>
          this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
          '\n\n' +
          `Locator: ${eventChecker.locator}\n` +
          `Expected: "${eventChecker.eventName}" event${this.isNot ? ' not' : ''} emitted\n` +
          `Received: "${eventChecker.eventName}" event${!this.isNot ? ' not' : ''} emitted`
      : () =>
          this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
          '\n\n' +
          `Locator: ${eventChecker.locator}\n` +
          `Expected: "${eventChecker.eventName}" event${this.isNot ? ' not' : ''} emitted\n` +
          `Received: "${eventChecker.eventName}" event${!this.isNot ? ' not' : ''} emitted`;

    return {
      message,
      pass,
      name: assertionName,
      expected: !this.isNot,
      actual: matcherResult?.actual,
    };
  },
});
