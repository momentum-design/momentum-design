import { expect } from '@playwright/test';

import { test, ComponentsPage } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  headerText?: string;
  prefixIcon?: string;
  postfixIcon?: string;
  disabled?: boolean;
  children?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-listheader
        ${restArgs.headerText ? `header-text="${restArgs.headerText}"` : ''}
        ${restArgs.prefixIcon ? `prefix-icon="${restArgs.prefixIcon}"` : ''}
        ${restArgs.postfixIcon ? `postfix-icon="${restArgs.postfixIcon}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
      >
        ${restArgs.children ?? ''}
      </mdc-listheader>
    `,
    clearDocument: true,
  });
  const listheader = componentsPage.page.locator('mdc-listheader');
  await listheader.waitFor();
  return listheader;
};

test('mdc-listheader', async ({ componentsPage }) => {
  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await setup({
      componentsPage,
      headerText: 'List Header',
      prefixIcon: 'placeholder-regular',
      postfixIcon: 'placeholder-regular',
      children: '<mdc-button>Action</mdc-button>',
    });

    await test.step('focus', async () => {
      await test.step('Listheader allows actionable content in slot', async () => {
        const button = componentsPage.page.getByRole('button', { name: 'Action' });
        await expect(button).not.toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(button).toBeFocused();
      });
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await setup({
      componentsPage,
      headerText: 'List Header',
      prefixIcon: 'placeholder-regular',
      postfixIcon: 'placeholder-regular',
      children: '<mdc-button>Action</mdc-button>',
    });

    const listheaderStickerSheet = new StickerSheet(componentsPage, 'mdc-listheader');
    listheaderStickerSheet.setAttributes({ 'header-text': 'Label' });
    await listheaderStickerSheet.createMarkupWithCombination({});
    listheaderStickerSheet.setAttributes({ 'header-text': 'Label', 'prefix-icon': 'placeholder-regular' });
    await listheaderStickerSheet.createMarkupWithCombination({});
    listheaderStickerSheet.setAttributes({
      'header-text': 'Label',
      'prefix-icon': 'placeholder-regular',
      'postfix-icon': 'placeholder-regular',
    });
    await listheaderStickerSheet.createMarkupWithCombination({});
    listheaderStickerSheet.setAttributes({
      'header-text': 'Label',
      'prefix-icon': 'placeholder-regular',
      'postfix-icon': 'placeholder-regular',
    });
    listheaderStickerSheet.setChildren('<mdc-button>Action</mdc-button>');
    await listheaderStickerSheet.createMarkupWithCombination({});
    listheaderStickerSheet.setAttributes({
      'header-text': 'Label',
      'prefix-icon': 'placeholder-regular',
      'postfix-icon': 'placeholder-regular',
      disabled: '',
    });
    listheaderStickerSheet.setChildren('<mdc-button>Action</mdc-button>');
    await listheaderStickerSheet.createMarkupWithCombination({});

    await listheaderStickerSheet.mountStickerSheet({
      wrapperStyle: 'display: flex; flex-direction: column; gap: 0.5rem',
    });
    const container = listheaderStickerSheet.getWrapperContainer();

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-listheader', { element: container });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('listheader-default');
  });
});
