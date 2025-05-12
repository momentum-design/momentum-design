/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { TYPE, VALID_TEXT_TAGS } from './text.constants';
import type { TextType, TagName } from './text.types';

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
  /**
   * VISUAL REGRESSION
   */
  const createSnapshot = async ({ componentsPage, combination, fileNameSuffix }: {
    componentsPage: ComponentsPage;
    combination: Record<string, Record<string, any>>;
    fileNameSuffix: string;
  }) => {
    const textStickerSheet = new StickerSheet(componentsPage, 'mdc-text');
    textStickerSheet.setChildren(textContent);
    await textStickerSheet.createMarkupWithCombination(combination, { createNewRow: true });

    await textStickerSheet.mountStickerSheet();
    const container = textStickerSheet.getWrapperContainer();

    await componentsPage.visualRegression.takeScreenshot(`mdc-text-${fileNameSuffix}`, { element: container });
    /**
     * ACCESSIBILITY
     */
    await test.step(`accessibility for ${fileNameSuffix}`, async () => {
      await componentsPage.accessibility.checkForA11yViolations(`mdc-text-${fileNameSuffix}`);
    });
  };

  test.use({ viewport: { width: 400, height: 800 } });
  test('visual-regression & accessibility', async ({ componentsPage }) => {
    const body = Object.fromEntries(Object.entries(TYPE).filter(([k]) => k.startsWith('BODY')));
    const heading = Object.fromEntries(Object.entries(TYPE).filter(([k]) => k.startsWith('HEAD')));

    await test.step('create snapshot for body type text component', async () => {
      await createSnapshot({ componentsPage, combination: { type: body }, fileNameSuffix: 'body' });
    });

    await test.step('create snapshot for tagname text component', async () => {
      await createSnapshot({ componentsPage, combination: { tagname: VALID_TEXT_TAGS }, fileNameSuffix: 'tagname' });
    });

    await test.step('create snapshot for heading type text component', async () => {
      await componentsPage.page.setViewportSize({ width: 1200, height: 1700 });
      await createSnapshot({ componentsPage, combination: { type: heading }, fileNameSuffix: 'heading' });
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
