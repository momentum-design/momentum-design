import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { ORIENTATION, STATUS } from './stepperconnector.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  status?: string;
  orientation?: string;
};

const setup = async (options: SetupOptions) => {
  const { componentsPage, status = 'incomplete', orientation = 'horizontal' } = options;
  const html = `
    <mdc-stepperconnector
      status="${status}"
      orientation="${orientation}"
    />
  `;
  await componentsPage.mount({ html, clearDocument: true });
  const connector = componentsPage.page.locator('mdc-stepperconnector');
  await connector.waitFor();
  return { connector };
};

test('mdc-stepperconnector', async ({ componentsPage }) => {
  /**
   * ACCESSIBILITY & VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const sheet = new StickerSheet(componentsPage, 'mdc-stepperconnector', 'margin: 0.5rem;');
    await sheet.createMarkupWithCombination(
      {
        status: STATUS,
        orientation: ORIENTATION,
      },
      { rowWrapperStyle: 'height: 200px; width: 200px; margin: 2rem;' },
    );
    await sheet.mountStickerSheet();
    await componentsPage.visualRegression.takeScreenshot('mdc-stepperconnector-stickersheet', {
      element: sheet.getWrapperContainer(),
    });
    await componentsPage.accessibility.checkForA11yViolations('mdc-stepperconnector-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    // Scenario: Connector status attribute (default)
    const { connector } = await setup({ componentsPage });
    await test.step('should have default status and orientation attributes', async () => {
      await expect(connector).toHaveAttribute('status', 'incomplete');
      await expect(connector).toHaveAttribute('orientation', 'horizontal');
    });

    // Scenario: Connector status attribute (complete/incomplete)
    const { connector: completeConnector } = await setup({ componentsPage, status: 'complete' });
    await test.step('should visually indicate completion when status is complete', async () => {
      await expect(completeConnector).toHaveAttribute('status', 'complete');
    });
    const { connector: incompleteConnector } = await setup({ componentsPage, status: 'incomplete' });
    await test.step('should visually indicate incompletion when status is incomplete', async () => {
      await expect(incompleteConnector).toHaveAttribute('status', 'incomplete');
    });

    // Scenario: Connector orientation
    const { connector: verticalConnector } = await setup({ componentsPage, orientation: 'vertical' });
    await test.step('should be displayed vertically when orientation is vertical', async () => {
      await expect(verticalConnector).toHaveAttribute('orientation', 'vertical');
    });
    const { connector: horizontalConnector } = await setup({ componentsPage, orientation: 'horizontal' });
    await test.step('should be displayed horizontally when orientation is horizontal', async () => {
      await expect(horizontalConnector).toHaveAttribute('orientation', 'horizontal');
    });
  });
});
