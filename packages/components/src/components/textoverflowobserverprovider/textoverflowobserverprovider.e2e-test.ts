import { expect } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

import type TextOverflowObserverE2EUtil from './textoverflowobserverprovider.e2e-test.utils';

test('mdc-textoverflowobserverprovider', async ({ componentsPage }) => {
  type Args = {
    overflowing?: boolean;
  };

  const mountComponent = async ({ overflowing = false }: Args = {}) => {
    await componentsPage.mount({
      html: `
          <mdc-textoverflowobserverprovider>
            <mdc-textoverflowobserver-provider-e2e ${overflowing ? 'overflowing' : ''}></mdc-textoverflowobserver-provider-e2e>
            <mdc-button>After</mdc-button>
          </mdc-textoverflowobserverprovider>
        `,
      clearDocument: true,
    });

    const e2eUtil = componentsPage.page.locator('mdc-textoverflowobserver-provider-e2e');
    await e2eUtil.waitFor();

    const textElement = e2eUtil.locator('mdc-text');
    await textElement.waitFor();

    return { e2eUtil, textElement };
  };

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await mountComponent();

    await componentsPage.accessibility.checkForA11yViolations('textoverflowobserverprovider-default');
  });

  await test.step('adds tabindex and data attribute when overflowing and observing starts', async () => {
    const { e2eUtil, textElement } = await mountComponent({ overflowing: true });

    await expect(textElement).not.toHaveAttribute('tabindex');
    await expect(textElement).not.toHaveAttribute('data-overflowing');

    await e2eUtil.evaluate((node: TextOverflowObserverE2EUtil) => node.observeText());
    await expect(textElement).toHaveAttribute('tabindex');
    await expect(textElement).toHaveAttribute('data-overflowing');
  });

  await test.step('remove tabindex and data attribute when not overflowing and observing stops', async () => {
    const { e2eUtil, textElement } = await mountComponent({ overflowing: true });

    await e2eUtil.evaluate((node: TextOverflowObserverE2EUtil) => node.observeText());
    await expect(textElement).toHaveAttribute('tabindex');
    await expect(textElement).toHaveAttribute('data-overflowing');

    await e2eUtil.evaluate((node: TextOverflowObserverE2EUtil) => node.unobserveText());
    await expect(textElement).not.toHaveAttribute('tabindex');
    await expect(textElement).not.toHaveAttribute('data-overflowing');
  });

  await test.step('only adds the tabindex and data attribute when overflowing', async () => {
    const { e2eUtil, textElement } = await mountComponent({ overflowing: false });

    await e2eUtil.evaluate((node: TextOverflowObserverE2EUtil) => node.observeText());

    await expect(textElement).not.toHaveAttribute('tabindex');
    await expect(textElement).not.toHaveAttribute('data-overflowing');

    await componentsPage.setAttributes(e2eUtil, { overflowing: '' });
    await expect(textElement).toHaveAttribute('tabindex');
    await expect(textElement).toHaveAttribute('data-overflowing');

    await componentsPage.removeAttribute(e2eUtil, 'overflowing');
    await expect(textElement).not.toHaveAttribute('tabindex');
    await expect(textElement).not.toHaveAttribute('data-overflowing');
  });

  await test.step('should not change existing tabindex when observing', async () => {
    await componentsPage.page.pause();
    const { e2eUtil, textElement } = await mountComponent({ overflowing: true });

    await componentsPage.setAttributes(textElement, { tabindex: '0' });

    await e2eUtil.evaluate((node: TextOverflowObserverE2EUtil) => node.observeText());
    await expect(textElement).toHaveAttribute('tabindex', '0');
    await expect(textElement).not.toHaveAttribute('data-overflowing');

    await componentsPage.removeAttribute(e2eUtil, 'overflowing');
    await expect(textElement).toHaveAttribute('tabindex', '0');
    await expect(textElement).not.toHaveAttribute('data-overflowing');

    await componentsPage.setAttributes(e2eUtil, { overflowing: '' });
    await e2eUtil.evaluate((node: TextOverflowObserverE2EUtil) => node.unobserveText());
    await expect(textElement).toHaveAttribute('tabindex', '0');
    await expect(textElement).not.toHaveAttribute('data-overflowing');
  });

  await test.step('focus', async () => {
    const { e2eUtil, textElement } = await mountComponent({ overflowing: true });
    await e2eUtil.evaluate((node: TextOverflowObserverE2EUtil) => node.observeText());

    await test.step('can focus when overflowing', async () => {
      await componentsPage.actionability.pressTab();
      await expect(textElement).toBeFocused();
    });

    // This is to avoid the focus jumping away
    await test.step('keeps focus on text if it stops overflowing', async () => {
      await componentsPage.removeAttribute(e2eUtil, 'overflowing');
      await expect(textElement).toBeFocused();
    });

    await test.step('remove tabindex on text blur', async () => {
      await componentsPage.actionability.pressTab();
      await expect(textElement).not.toBeFocused();
      await expect(textElement).not.toHaveAttribute('tabindex');
      await expect(textElement).not.toHaveAttribute('data-overflowing');
    });
  });
});
