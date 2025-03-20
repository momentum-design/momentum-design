import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import type { BrandVisualNames } from './brandvisual.types';

// declare global {
//   interface Window {
//     iconLoaded?: boolean;
//     iconLoadError?: boolean;
//   }
// }

type SetupOptions = {
  componentsPage: ComponentsPage;
  name: BrandVisualNames;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, name } = args;

  await componentsPage.mount({
    html: `<mdc-brandvisual name="${name}"></mdc-brandvisual>`,
    clearDocument: true,
  });
  await componentsPage.page.pause();
  const brandVisualLogo = componentsPage.page.locator('mdc-brandvisual');
  // console.log('brand Visual', await brandVisualLogo.count());
  // console.log('Page content before waiting for locator:', await componentsPage.page.content());
  // console.log('Is component hidden:', await brandVisualLogo.isHidden());
  // console.log('Is component visible:', await brandVisualLogo.isVisible());
  await brandVisualLogo.waitFor();

  return brandVisualLogo;
};

// const visualTestingSetup = async (args: SetupOptions) => {
//   const { componentsPage, name } = args;
//   await componentsPage.mount({
//     html: `
//     <div class="componentWrapper componentRowWrapper">
//       <mdc-brandvisual name="${name}"></mdc-brandvisual>
//     </div>
//       `,
//     clearDocument: true,
//   });
//   const icon = componentsPage.page.locator('.componentRowWrapper');
//   await icon.waitFor();
//   return icon;
// };

test('mdc-brandvisual', async ({ componentsPage }) => {
  const name = 'zoom-color';

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const logo = await setup({ componentsPage, name });

    await test.step('attributes should be present on component by default', async () => {
      await expect(logo).toHaveAttribute('name', name);
    });
  });

  /**
   * VISUAL REGRESSION
   */
  // await test.step('visual-regression', async () => {
  //   const visualIcons = await visualTestingSetup({ componentsPage, name });

  //   await test.step('matches screenshot of element', async () => {
  //     await componentsPage.visualRegression.takeScreenshot(
  //       'mdc-brandvisual',
  //       { element: visualIcons },
  //     );
  //   });
  // });

  /**
   * ACCESSIBILITY
   */
  // await test.step('accessibility', async () => {
  //   await componentsPage.accessibility.checkForA11yViolations('brandvisual-default');
  // });

  /**
   * INTERACTIONS
   */
});
