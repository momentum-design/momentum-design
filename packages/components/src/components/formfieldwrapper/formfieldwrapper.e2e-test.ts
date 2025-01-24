/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import { VALIDATION } from './formfieldwrapper.constants';
import { getHelperIcon } from './formfieldwrapper.utils';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  id?: string;
  label?: string;
  helpText?: string;
  helpTextType?: string;
  children?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-formfieldwrapper
      id="${restArgs.id}"
      ${restArgs.label ? `label="${restArgs.label}"` : ''}
      ${restArgs.helpText ? `help-text="${restArgs.helpText}"` : ''}
      ${restArgs.helpTextType ? `help-text-type="${restArgs.helpTextType}"` : ''}
      >${restArgs.children}</mdc-formfieldwrapper>
    `,
    clearDocument: true,
  });
  const text = componentsPage.page.locator('mdc-formfieldwrapper');
  await text.waitFor();
  return text;
};

test('mdc-formfieldwrapper', async ({ componentsPage }) => {
  const formfieldwrapper = await setup({
    componentsPage,
    id: 'test-formfieldwrapper',
    label: 'Label',
    helpText: 'Help Text',
    children: 'Form Input Component',
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('formfieldwrapper-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component', async () => {
      await expect(formfieldwrapper).toHaveAttribute('id', 'test-formfieldwrapper');
      await expect(formfieldwrapper).toHaveAttribute('label', 'Label');
      await expect(formfieldwrapper).toHaveAttribute('help-text', 'Help Text');
    });

    await test.step('help-text-type attribute with appropriate icons', async () => {
      for (const type of Object.values(VALIDATION)) {
        await componentsPage.setAttributes(formfieldwrapper, { 'help-text-type': type });
        await expect(formfieldwrapper).toHaveAttribute('help-text-type', type);
        const icon = getHelperIcon(type);
        if (icon) {
          await expect(formfieldwrapper.locator(`mdc-icon[name="${icon}"]`)).toBeVisible();
        }
      }
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual regression', async () => {
    const wrapperStickerSheet = new StickerSheet(componentsPage, 'mdc-formfieldwrapper');
    await wrapperStickerSheet.setChildren('Form Input Component');
    await wrapperStickerSheet.setAttributes({
      id: 'test-formfieldwrapper',
      label: 'Label',
      'help-text': 'Help Text',
    });
    await wrapperStickerSheet.createMarkupWithCombination({ 'help-text-type': VALIDATION }, true);
    await wrapperStickerSheet.mountStickerSheet();
    await wrapperStickerSheet.getWrapperContainer();

    await test.step('matches screenshot of pill-button element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-formfieldwrapper', {
        element: wrapperStickerSheet.getWrapperContainer(),
      });
    });
  });
});
