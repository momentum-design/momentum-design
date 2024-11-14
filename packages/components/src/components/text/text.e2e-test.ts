/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import { FONT_TYPE, VALID_TEXT_TAGS } from './text.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  type?: string;
  children: any;
  tagname?: string;
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

const visualTestingSetup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  const textType = () =>
    Object.values(FONT_TYPE)
      .map((type) => `<mdc-text type="${type}">${restArgs.children}</mdc-text>`)
      .join('');
  const textTage = () =>
    Object.values(VALID_TEXT_TAGS)
      .map((tagname) => `<mdc-text tagname="${tagname}">${restArgs.children}</mdc-text>`)
      .join('');

  await componentsPage.mount({
    html: `
    <div class="text-container" style="backrgound-color: black">
      ${textType()}
      ${textTage()}
    </div>
    `,
    clearDocument: true,
  });
  const text = componentsPage.page.locator('.text-container');
  await text.waitFor();
  return text;
};

const textContent = 'abcdefghijklmnopqrstuvwxyz1234567890';

test.describe('mdc-text', () => {
  test.use({
    viewport: {
      width: 1280,
      height: 2040,
    },
  });

  test('matches screenshot of all elements', async ({ componentsPage }) => {
    const text = await visualTestingSetup({ componentsPage, children: textContent });

    /**
     * VISUAL REGRESSION
     */
    // skipping visual regression for firefox and webkit due to flakiness
    await test.step('visual-regression', async () => {
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-text, { element: text });
      });
    });
  });
  
  for (const textType of Object.values(FONT_TYPE)) {
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
        type: FONT_TYPE.BODY_MIDSIZE_REGULAR,
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
