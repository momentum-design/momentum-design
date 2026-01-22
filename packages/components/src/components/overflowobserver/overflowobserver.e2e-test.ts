import { expect, type Locator } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

import type OverflowObserverE2EUtil from './overflowobserver.e2e-test.utils';

test('mdc-overflowobserver', async ({ componentsPage }) => {
  type Args = {
    overflowing?: boolean;
  };

  const mountComponent = async ({ overflowing = false }: Args = {}) => {
    await componentsPage.mount({
      html: `
          <mdc-overflowobserver>
            <mdc-overflowobserver-e2e ${overflowing ? 'overflowing' : ''}></mdc-overflowobserver-e2e>
            <mdc-button>After</mdc-button>
          </mdc-overflowobserver>
        `,
      clearDocument: true,
    });

    const e2eUtil = componentsPage.page.locator('mdc-overflowobserver-e2e');
    await e2eUtil.waitFor();

    const textElement = e2eUtil.locator('mdc-text');
    await textElement.waitFor();

    return { e2eUtil, textElement };
  };

  const setTextOverflowing = async (e2eUtil: Locator, overflowing: boolean) => {
    if (overflowing) {
      await componentsPage.setAttributes(e2eUtil, { overflowing: '' });
    } else {
      await componentsPage.removeAttribute(e2eUtil, 'overflowing');
    }

    // Give ResizeObserver time to trigger
    await componentsPage.page.waitForTimeout(100);
  };

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await mountComponent();

    await componentsPage.accessibility.checkForA11yViolations('overflowobserver-default');
  });

  await test.step('adds tabindex and data attribute when overflowing and observing starts', async () => {
    const { e2eUtil, textElement } = await mountComponent({ overflowing: true });

    await expect(textElement).not.toHaveAttribute('tabindex');
    await expect(textElement).not.toHaveAttribute('data-overflowing');

    await e2eUtil.evaluate((node: OverflowObserverE2EUtil) => node.observeText());
    await expect(textElement).toHaveAttribute('tabindex');
    await expect(textElement).toHaveAttribute('data-overflowing');
  });

  await test.step('remove tabindex and data attribute when not overflowing and observing stops', async () => {
    const { e2eUtil, textElement } = await mountComponent({ overflowing: true });

    await e2eUtil.evaluate((node: OverflowObserverE2EUtil) => node.observeText());
    await expect(textElement).toHaveAttribute('tabindex');
    await expect(textElement).toHaveAttribute('data-overflowing');

    await e2eUtil.evaluate((node: OverflowObserverE2EUtil) => node.unobserveText());
    await expect(textElement).not.toHaveAttribute('tabindex');
    await expect(textElement).not.toHaveAttribute('data-overflowing');
  });

  await test.step('only adds the tabindex and data attribute when overflowing', async () => {
    const { e2eUtil, textElement } = await mountComponent({ overflowing: false });

    await e2eUtil.evaluate((node: OverflowObserverE2EUtil) => node.observeText());

    await expect(textElement).not.toHaveAttribute('tabindex');
    await expect(textElement).not.toHaveAttribute('data-overflowing');

    await setTextOverflowing(e2eUtil, true);
    await expect(textElement).toHaveAttribute('tabindex');
    await expect(textElement).toHaveAttribute('data-overflowing');

    await setTextOverflowing(e2eUtil, false);
    await expect(textElement).not.toHaveAttribute('tabindex');
    await expect(textElement).not.toHaveAttribute('data-overflowing');
  });

  await test.step('should not change existing tabindex when observing', async () => {
    const { e2eUtil, textElement } = await mountComponent({ overflowing: true });

    await componentsPage.setAttributes(textElement, { tabindex: '0' });

    await e2eUtil.evaluate((node: OverflowObserverE2EUtil) => node.observeText());
    await expect(textElement).toHaveAttribute('tabindex', '0');
    await expect(textElement).not.toHaveAttribute('data-overflowing');

    await setTextOverflowing(e2eUtil, false);
    await expect(textElement).toHaveAttribute('tabindex', '0');
    await expect(textElement).not.toHaveAttribute('data-overflowing');

    await setTextOverflowing(e2eUtil, true);
    await e2eUtil.evaluate((node: OverflowObserverE2EUtil) => node.unobserveText());
    await expect(textElement).toHaveAttribute('tabindex', '0');
    await expect(textElement).not.toHaveAttribute('data-overflowing');
  });

  await test.step('focus', async () => {
    const { e2eUtil, textElement } = await mountComponent({ overflowing: true });
    await e2eUtil.evaluate((node: OverflowObserverE2EUtil) => node.observeText());

    await test.step('can focus when overflowing', async () => {
      await componentsPage.actionability.pressTab();
      await expect(textElement).toBeFocused();
    });

    await test.step('keeps focus on text if it stops overflowing', async () => {
      await setTextOverflowing(e2eUtil, false);
      await expect(textElement).toBeFocused();
    });

    await test.step('remove tabindex on text blur', async () => {
      await componentsPage.actionability.pressTab();
      await expect(textElement).not.toBeFocused();
      await expect(textElement).not.toHaveAttribute('tabindex');
      await expect(textElement).not.toHaveAttribute('data-overflowing');
    });

    await test.step('jumpy overflow', async () => {
      await setTextOverflowing(e2eUtil, true);
      await componentsPage.actionability.pressShiftTab();
      await expect(textElement).toBeFocused();

      await setTextOverflowing(e2eUtil, false);
      await expect(textElement).toBeFocused();
      await componentsPage.page.waitForTimeout(200);
      await setTextOverflowing(e2eUtil, true);
      await expect(textElement).toBeFocused();

      await componentsPage.actionability.pressTab();
      await expect(textElement).not.toBeFocused();
      await expect(textElement).toHaveAttribute('tabindex');
      await expect(textElement).toHaveAttribute('data-overflowing');
    });

    await componentsPage.page.pause();
  });
});
