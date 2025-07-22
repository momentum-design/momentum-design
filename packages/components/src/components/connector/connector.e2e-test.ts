import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { ORIENTATION, STATUS } from './connector.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  status?: string;
  orientation?: string;
};

const setup = async (options: SetupOptions) => {
  const { componentsPage, status = 'incomplete', orientation = 'horizontal' } = options;
  const html = `
    <mdc-connector
      status="${status}"
      orientation="${orientation}"
    />
  `;
  await componentsPage.mount({ html, clearDocument: true });
  const connector = componentsPage.page.locator('mdc-connector');
  await connector.waitFor();
  return { connector };
};

test('mdc-connector', async ({ componentsPage }) => {
  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    const { connector } = await setup({ componentsPage });
    await componentsPage.accessibility.checkForA11yViolations('connector-default');
    await expect(connector).toBeVisible();
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const sheet = new StickerSheet(componentsPage, 'mdc-connector', 'margin: 0.5rem;');
    await sheet.createMarkupWithCombination(
      {
        status: STATUS,
        orientation: ORIENTATION,
      },
      { rowWrapperStyle: 'height: 200px; width: 200px; margin: 2rem;' },
    );
    await sheet.mountStickerSheet();
    await componentsPage.visualRegression.takeScreenshot('mdc-connector-stickersheet', {
      element: sheet.getWrapperContainer(),
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    // Scenario: Connector status attribute (default)
    const { connector } = await setup({ componentsPage });
    await test.step('should have default status and orientation attributes', async () => {
      expect(await connector.getAttribute('status')).toBe('incomplete');
      expect(await connector.getAttribute('orientation')).toBe('horizontal');
    });

    // Scenario: Connector status attribute (complete/incomplete)
    const { connector: completeConnector } = await setup({ componentsPage, status: 'complete' });
    await test.step('should visually indicate completion when status is complete', async () => {
      expect(await completeConnector.getAttribute('status')).toBe('complete');
    });
    const { connector: incompleteConnector } = await setup({ componentsPage, status: 'incomplete' });
    await test.step('should visually indicate incompletion when status is incomplete', async () => {
      expect(await incompleteConnector.getAttribute('status')).toBe('incomplete');
    });

    // Scenario: Connector orientation
    const { connector: verticalConnector } = await setup({ componentsPage, orientation: 'vertical' });
    await test.step('should be displayed vertically when orientation is vertical', async () => {
      expect(await verticalConnector.getAttribute('orientation')).toBe('vertical');
    });
    const { connector: horizontalConnector } = await setup({ componentsPage, orientation: 'horizontal' });
    await test.step('should be displayed horizontally when orientation is horizontal', async () => {
      expect(await horizontalConnector.getAttribute('orientation')).toBe('horizontal');
    });
  });
});
