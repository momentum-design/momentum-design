import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { VARIANT } from './progressbar.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  value?: string;
  variant?: string;
  label?: string;
  error?: boolean;
  'help-text'?: string;
  'data-aria-label'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-progressbar
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.error ? 'error' : ''}
        ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
        ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : ''}
      >
      </mdc-progressbar>
    `,
    clearDocument: true,
  });
  const progressbar = componentsPage.page.locator('mdc-progressbar');
  await progressbar.waitFor();
  return progressbar;
};

const attributeTestCases = async (componentsPage: ComponentsPage) => {
  const progressbar = await setup({ componentsPage });
  await test.step('default attributes', async () => {
    await expect(progressbar).toHaveAttribute('variant', 'default');
    await expect(progressbar).toHaveAttribute('value', '0');
  });
  await test.step('attributes are set properly', async () => {
    await componentsPage.setAttributes(progressbar, { value: '30' });
    await expect(progressbar).toHaveAttribute('value', '30');
  });
};

const runVisualRegressionTest = async (componentsPage: ComponentsPage, progressbarStickerSheet: any) => {
  progressbarStickerSheet.setAttributes({
    label: 'Label',
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progress bar',
  });

  // Default progressbar
  await progressbarStickerSheet.createMarkupWithCombination(
    {
      variant: [VARIANT.DEFAULT],
      value: [0, 25, 50, 75],
    },
    { rowWrapperStyle: 'display: flex; gap: 3rem; align-items: center; margin-bottom: 3.5rem;' },
  );

  // Success state (default variant)
  await progressbarStickerSheet.createMarkupWithCombination(
    {
      variant: [VARIANT.DEFAULT],
      value: [100],
    },
    { rowWrapperStyle: 'display: flex; gap: 3rem; align-items: center; margin-bottom: 3.5rem;' },
  );

  // Error state (default variant) - only set error if `error: true`
  await progressbarStickerSheet.setAttributes({
    error: true,
    label: 'Label',
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progress bar',
  });
  await progressbarStickerSheet.createMarkupWithCombination(
    {
      variant: [VARIANT.DEFAULT],
      value: [10],
    },
    { rowWrapperStyle: 'display: flex; gap: 3rem; align-items: center; margin-bottom: 3.5rem;' },
  );

  // Inline progressbar
  // Reset error to false for inline progressbars, and include label for inline
  progressbarStickerSheet.setAttributes({
    label: 'Label',
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progress bar',
  });
  await progressbarStickerSheet.createMarkupWithCombination(
    {
      variant: [VARIANT.INLINE],
      value: [0, 25, 50, 75],
    },
    { rowWrapperStyle: 'display: flex; gap: 3rem; align-items: center; margin-bottom: 3.5rem;' },
  );

  // Success state (inline variant)
  await progressbarStickerSheet.createMarkupWithCombination(
    {
      variant: [VARIANT.INLINE],
      value: [100],
    },
    { rowWrapperStyle: 'display: flex; gap: 3rem; align-items: center; margin-bottom: 3.5rem;' },
  );

  // Error state (inline variant)
  await progressbarStickerSheet.setAttributes({
    error: true,
    label: 'Label',
    'help-text': 'Helper text',
    'data-aria-label': 'This is a progress bar',
  });
  await progressbarStickerSheet.createMarkupWithCombination(
    {
      variant: [VARIANT.INLINE],
      value: [10],
    },
    { rowWrapperStyle: 'display: flex; gap: 3rem; align-items: center; margin-bottom: 3.5rem;' },
  );

  await progressbarStickerSheet.mountStickerSheet({ wrapperStyle: 'padding: 1.25rem' });
  const container = progressbarStickerSheet.getWrapperContainer();

  await test.step('Matches screenshot for progress bar variants', async () => {
    await componentsPage.visualRegression.takeScreenshot('mdc-progressbar-variants', { element: container });
  });

  await test.step('Accessibility check for progress bar variants', async () => {
    await componentsPage.accessibility.checkForA11yViolations('mdc-progressbar-variants');
  });
};

const testToRun = async (componentsPage: ComponentsPage) => {
  await test.step('Attributes for Progressbar Component', async () => {
    await attributeTestCases(componentsPage);
  });

  await test.step('Visual Regression and Accessibility tests', async () => {
    const progressbarStickerSheet = new StickerSheet(componentsPage, 'mdc-progressbar');
    await runVisualRegressionTest(componentsPage, progressbarStickerSheet);
  });
};

test.use({ viewport: { width: 1000, height: 1200 } });
test('Standalone Progressbar Tests', async ({ componentsPage }) => {
  await testToRun(componentsPage);
});
