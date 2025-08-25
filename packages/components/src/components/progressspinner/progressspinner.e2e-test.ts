import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  value?: string;
  error?: boolean;
  'data-aria-label'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-progressspinner
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
        ${restArgs.error ? 'error' : ''}
        ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : ''}
      >
      </mdc-progressspinner>
    `,
    clearDocument: true,
  });
  const progressspinner = componentsPage.page.locator('mdc-progressspinner');
  await progressspinner.waitFor();
  return progressspinner;
};

const attributeTestCases = async (componentsPage: ComponentsPage) => {
  const progressspinner = await setup({ componentsPage });
  await test.step('default attributes', async () => {
    await expect(progressspinner).toHaveAttribute('value', '0');
  });
  await test.step('attributes are set properly', async () => {
    await componentsPage.setAttributes(progressspinner, { value: '30' });
    await expect(progressspinner).toHaveAttribute('value', '30');
  });
};

const runVisualRegressionTest = async (componentsPage: ComponentsPage, progressspinnerStickerSheet: StickerSheet) => {
  progressspinnerStickerSheet.setAttributes({
    'data-aria-label': 'Progress spinner',
  });

  // Default progress spinner
  await progressspinnerStickerSheet.createMarkupWithCombination(
    {
      value: [0, 1, 25, 50, 75, 99],
    },
    { createNewRow: true },
  );

  // Success state
  await progressspinnerStickerSheet.createMarkupWithCombination(
    {
      value: [100],
    },
    { createNewRow: true },
  );

  // Error state- only set error if `error` is true
  progressspinnerStickerSheet.setAttributes({
    error: true,
    'data-aria-label': 'Error progress bar',
  });
  await progressspinnerStickerSheet.createMarkupWithCombination(
    {
      value: [10],
    },
    { createNewRow: true },
  );

  progressspinnerStickerSheet.setAttributes({
    'data-aria-label': 'Progress spinner',
  });

  // Progress spinner with custom sizes
  await progressspinnerStickerSheet.createMarkupWithCombination(
    {
      style: ['--mdc-spinner-size: 2rem', '--mdc-spinner-size: 4rem'],
      value: [66, 100],
    },
    { createNewRow: true },
  );

  progressspinnerStickerSheet.setAttributes({
    error: true,
    'data-aria-label': 'Progress spinner',
  });

  await progressspinnerStickerSheet.createMarkupWithCombination(
    {
      style: ['--mdc-spinner-size: 2rem', '--mdc-spinner-size: 4rem'],
    },
    { createNewRow: true },
  );

  await progressspinnerStickerSheet.mountStickerSheet({ wrapperStyle: 'padding: 1.25rem' });
  const container = progressspinnerStickerSheet.getWrapperContainer();

  await test.step('Matches screenshot for progress bar variants', async () => {
    await componentsPage.visualRegression.takeScreenshot('mdc-progressspinner-variants', { element: container });
  });

  await test.step('Accessibility check for progress bar variants', async () => {
    await componentsPage.accessibility.checkForA11yViolations('mdc-progressspinner-variants');
  });
};

const testToRun = async (componentsPage: ComponentsPage) => {
  await test.step('Attributes for Progress Spinner Component', async () => {
    await attributeTestCases(componentsPage);
  });

  await test.step('Visual Regression and Accessibility tests', async () => {
    const progressSpinnerStickerSheet = new StickerSheet(componentsPage, 'mdc-progressspinner');
    await runVisualRegressionTest(componentsPage, progressSpinnerStickerSheet);
  });
};

test.use({ viewport: { width: 200, height: 750 } });
test('Standalone Progress Spinner Tests', async ({ componentsPage }) => {
  await testToRun(componentsPage);
});
