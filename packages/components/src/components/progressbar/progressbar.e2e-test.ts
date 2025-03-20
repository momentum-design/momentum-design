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
    await progressbar.evaluate((el) => el.setAttribute('value', '30'));
    await expect(progressbar).toHaveAttribute('value', '30');
  });
};

const runVisualRegressionTest = async (componentsPage: ComponentsPage, progressbarStickerSheet, variant: string) => {
  progressbarStickerSheet.setAttributes({ variant, label: 'Label', 'help-text': 'Helper text' });

  await test.step(`${variant} - Default State`, async () => {
    await progressbarStickerSheet.createMarkupWithCombination(
      { value: [0, 25, 50, 75] },
      { rowWrapperStyle: 'margin-bottom: 3.5rem; gap: 1.5rem' },
    );
  });

  await test.step(`${variant} - Success State`, async () => {
    await progressbarStickerSheet.createMarkupWithCombination(
      { value: [100] },
      { rowWrapperStyle: 'margin-bottom: 3.5rem; gap: 1.5rem' },
    );
  });

  await test.step(`${variant} - Error State`, async () => {
    await progressbarStickerSheet.setAttributes({ error: true, variant, label: 'Label', 'help-text': 'Helper text' });
    await progressbarStickerSheet.createMarkupWithCombination(
      { value: [10] },
      { rowWrapperStyle: 'margin-bottom: 3.5rem; gap: 1.5rem' },
    );
  });

  await progressbarStickerSheet.mountStickerSheet({ wrapperStyle: 'padding: 1.25rem' });
  const container = progressbarStickerSheet.getWrapperContainer();

  await test.step(`matches screenshot for ${variant}`, async () => {
    await componentsPage.visualRegression.takeScreenshot(`mdc-progressbar-${variant}`, { element: container });
  });

  await test.step(`Accessibility check for ${variant}`, async () => {
    await componentsPage.accessibility.checkForA11yViolations(`mdc-progressbar-${variant}`);
  });
};

const testToRun = async (componentsPage: ComponentsPage) => {
  await test.step('Attributes for Progressbar Component', async () => {
    await attributeTestCases(componentsPage);
  });

  await test.step('Visual Regression and Accessibility tests', async () => {
    const progressbarStickerSheet = new StickerSheet(componentsPage, 'mdc-progressbar');
    // await runVisualRegressionTest(componentsPage, progressbarStickerSheet, VARIANT.DEFAULT);
    await runVisualRegressionTest(componentsPage, progressbarStickerSheet, VARIANT.INLINE);
  });
};

test('Standalone Progressbar Tests', async ({ componentsPage }) => {
  await testToRun(componentsPage);
});
