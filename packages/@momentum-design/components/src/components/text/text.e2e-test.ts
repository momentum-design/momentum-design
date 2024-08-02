/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import steps from '../../../config/playwright/setup/steps/accessibility';
import { VALUES } from './text.constants';
import { FontType } from './text.types';
import { getAriaLevel, isHeading } from './text.utils';

type SetupOptions = {
  componentsPage: ComponentsPage;
  type: FontType;
  children: any;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-text type="${restArgs.type}">${restArgs.children}</mdc-text>
      `,
    clearDocument: true,
  });
  const text = componentsPage.page.locator('mdc-text');
  await text.waitFor();
  return text;
};

const typesToTest: Array<FontType> = VALUES.TYPE;

test.describe('mdc-text', () => {
  test.use({
    viewport: {
      width: 3000,
      height: 500,
    },
  });
  for (const textType of typesToTest) {
    test(textType, async ({ componentsPage }) => {
      const textContent = 'abcdefghijklmnopqrstuvwxyz1234567890';
      const text = await setup({ componentsPage, type: textType, children: textContent });

      /**
       * ACCESSIBILITY
       */
      await test.step('accessibility', async () => {
        await steps.automaticA11yCheckStep(componentsPage);
      });

      /**
       * VISUAL REGRESSION
       */
      // TODO: fix visual regression test on CI
      // await test.step('visual-regression', async () => {
      //   await test.step('matches screenshot of element', async () => {
      //     await componentsPage.visualRegression.takeScreenshot(`mdc-text-${textType}`, { element: text });
      //   });
      // });

      /**
       * ATTRIBUTES
       */
      await test.step('attributes', async () => {
        if (isHeading(textType)) {
          await test.step('attribute role=heading should be present on component if type is heading', async () => {
            expect(await text.getAttribute('role')).toBe('heading');
          });

          await test.step('attribute aria-level should be present on component if type is heading', async () => {
            const expectedLevel = getAriaLevel(textType);
            expect(await text.getAttribute('aria-level')).toBe(expectedLevel);
          });
        }
      });
    });
  }
});
