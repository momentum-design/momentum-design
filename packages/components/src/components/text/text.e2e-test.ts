/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { DEFAULTS, TYPE, VALID_TEXT_TAGS } from './text.constants';
import type { TextType, TagName } from './text.types';

// Custom timeout for mobile chrome device only on text component test suite
const setTimeoutForMobileChrome = () => {
  if (test.info().project.name === 'mobile chrome') {
    test.setTimeout(45000);
  }
};

type SetupOptions = {
  componentsPage: ComponentsPage;
  type?: TextType;
  children: any;
  tagname?: TagName;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-text
        type="${restArgs.type}"
        ${restArgs.tagname ? `tagname="${restArgs.tagname}"` : ''}
      >${restArgs.children}</mdc-text>
    `,
    clearDocument: true,
  });
  const text = componentsPage.page.locator('mdc-text');
  await text.waitFor();
  return text;
};

const setupEllipsis = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-text
        type="${restArgs.type}"
        ${restArgs.tagname ? `tagname="${restArgs.tagname}"` : ''}
        style="width: 50px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
      >${restArgs.children}</mdc-text>
    `,
    clearDocument: true,
  });
  const text = componentsPage.page.locator('mdc-text');
  await text.waitFor();
  return text;
};

const textContent = 'abcdefghijklmnopqrstuvwxyz1234567890';

test.describe('mdc-text', () => {
  test.use({
    viewport: {
      width: 1200,
      height: 3200,
    },
  });

  /**
   * VISUAL REGRESSION
   */
  test('visual-regression & accessibility', async ({ componentsPage }) => {
    setTimeoutForMobileChrome();
    const textStickerSheet = new StickerSheet(componentsPage, 'mdc-text');
    await test.step('add text component with different types to sheet', async () => {
      textStickerSheet.setChildren(textContent);
      await textStickerSheet.createMarkupWithCombination({ type: TYPE }, true);
    });

    await test.step('add text component with different tagnames to sheet', async () => {
      textStickerSheet.setAttributes({ type: DEFAULTS.TYPE });
      await textStickerSheet.createMarkupWithCombination({ tagname: VALID_TEXT_TAGS }, true);
    });

    await textStickerSheet.mountStickerSheet();
    /**
     * VISUAL REGRESSION
     */
    await test.step('matches screenshot of element tagnames', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-text');
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('text');
    });
  });

  test('attributes', async ({ componentsPage }) => {
    const text = await setup({
      componentsPage,
      children: textContent,
    });

    /**
     * ATTRIBUTE TYPE CHECK
     */
    for (const textType of Object.values(TYPE)) {
      await test.step(textType, async () => {
        await componentsPage.setAttributes(text, { type: textType });

        await test.step('type should be present on component', async () => {
          expect(await text.getAttribute('type')).toBe(textType);
        });
      });
    }

    /**
     * ATTRIBUTE TAGNAME CHECK
     */
    for (const tagname of Object.values(VALID_TEXT_TAGS)) {
      await test.step(tagname, async () => {
        await componentsPage.setAttributes(text, { tagname });

        await test.step('tagname should be present on component', async () => {
          expect(await text.getAttribute('tagname')).toBe(tagname);
        });
      });
    }
  });

  test('visual-regression for ellipsis', async ({ componentsPage }) => {
    const ellipsisText = await setupEllipsis({
      componentsPage,
      children: textContent,
      tagname: 'p',
    });

    /**
     * VISUAL REGRESSION
     */
    await test.step('matches screenshot of text with elipsis', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-text-ellipsis', { element: ellipsisText });
    });
  });
});
