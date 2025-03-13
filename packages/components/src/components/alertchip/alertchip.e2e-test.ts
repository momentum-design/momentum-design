import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import type { VariantType } from './alertchip.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label: string;
  variant?: VariantType;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, label, variant } = args;

  await componentsPage.mount({
    html: `
      <mdc-alertchip
        label="${label}"
        variant="${variant}"
      />
    `,
    clearDocument: true,
  });

  const alertchip = componentsPage.page.locator('mdc-alertchip');
  await alertchip.waitFor();
  return alertchip;
};

test('mdc-alertchip', async ({ componentsPage }) => {
  const alertchip = await setup({ componentsPage, label: 'Alertchip' });

  // initial check for the alertchip be visible on the screen:
  await alertchip.waitFor();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('alertchip-default');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-alertchip', { element: alertchip });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute label should be present on component by default', async () => {
      await expect(alertchip).toHaveAttribute('label', 'Alertchip');
    });

    await test.step('attribute variant should be present on component by default', async () => {
      await expect(alertchip).toHaveAttribute('variant', 'info');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('component should fire callback x when clicking on it', async () => {
        // TODO: add test here
      });
    });

    await test.step('focus', async () => {
      await test.step('component should be focusable with tab', async () => {
        // TODO: add test here
      });

      // add additional tests here, like tabbing through several parts of the component
    });

    await test.step('keyboard', async () => {
      await test.step('component should fire callback x when pressing y', async () => {
        // TODO: add test here
      });
    });
  });
});
