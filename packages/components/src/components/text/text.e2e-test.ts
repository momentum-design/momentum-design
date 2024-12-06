/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
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

const textContent = 'abcdefghijklmnopqrstuvwxyz1234567890';

test.describe('mdc-text', () => {
  test.use({
    viewport: {
      width: 1280,
      height: 2500,
    },
  });

  /**
   * VISUAL REGRESSION
   */
  test('visual-regression', async ({ componentsPage }) => {
    const textTypesMarkup = componentsPage.visualRegression.generateComponentMarkup(
      'mdc-text',
      {
        type: TYPE,
      },
      { children: textContent },
    );
    const textTypes = await componentsPage.visualRegression.createStickerSheet(componentsPage, textTypesMarkup);

    await test.step('matches screenshot of element types', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-text-types', { element: textTypes });
    });

    const textTagsMarkup = componentsPage.visualRegression.generateComponentMarkup(
      'mdc-text',
      {
        tagname: VALID_TEXT_TAGS,
      },
      { children: textContent },
    );
    const textTags = await componentsPage.visualRegression.createStickerSheet(componentsPage, textTagsMarkup);

    await test.step('matches screenshot of element tagnames', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-text-tagname', { element: textTags });
    });
  });

  for (const textType of Object.values(TYPE)) {
    test(textType, async ({ componentsPage }) => {
      const text = await setup({ componentsPage, type: textType, children: textContent });

      /**
       * ACCESSIBILITY
       */
      await test.step('accessibility', async () => {
        await componentsPage.accessibility.checkForA11yViolations(`text-default-${textType}`);
      });

      /**
       * ATTRIBUTES
       */
      await test.step('attributes', async () => {
        await test.step('attribute type should be present on component', async () => {
          expect(await text.getAttribute('type')).toBe(textType);
        });
      });
    });
  }

  for (const tagname of Object.values(VALID_TEXT_TAGS)) {
    test(tagname, async ({ componentsPage }) => {
      const text = await setup({
        componentsPage,
        type: TYPE.BODY_MIDSIZE_REGULAR,
        tagname,
        children: textContent,
      });

      /**
       * ACCESSIBILITY
       */
      await test.step('accessibility', async () => {
        await componentsPage.accessibility.checkForA11yViolations(`text-with-${tagname}-tag`);
      });

      /**
       * ATTRIBUTES
       */
      await test.step('tagname should be present on component', async () => {
        expect(await text.getAttribute('tagname')).toBe(tagname);
      });
    });
  }
});
