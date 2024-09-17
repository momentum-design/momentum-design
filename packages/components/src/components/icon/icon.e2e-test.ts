import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import steps from '../../../config/playwright/setup/steps/accessibility';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name: string;
  scale?: number;
  role?: string;
  ariaLabel?: string;
};
const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-icon 
      name="${restArgs.name}" 
      ${restArgs.scale ? `scale="${restArgs.scale}"` : ''}
      ${restArgs.role ? `role="${restArgs.role}"` : ''}
      ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
    >
    </mdc-icon>
      `,
    clearDocument: true,
  });
  const icon = componentsPage.page.locator('mdc-icon');
  await icon.waitFor();
  return icon;
};

test('mdc-icon', async ({ componentsPage }) => {
  const name = 'accessibility-regular';
  await setup({ componentsPage, name });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility with default props', async () => {
    await steps.automaticA11yCheckStep(componentsPage);
  });

  const iconWithRole = await setup({
    componentsPage,
    name,
    role: 'graphics-document',
    ariaLabel: 'test aria label',
  });

  await test.step('accessibility with role / aria-label passed in', async () => {
    await steps.automaticA11yCheckStep(componentsPage);
  });

  /**
   * VISUAL REGRESSION
   */

  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element with role / aria-label passed in', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-icon-default', { element: iconWithRole });
    });

    await test.step('matches screenshot of element with scale set to 2', async () => {
      const iconScaled = await setup({
        componentsPage,
        name,
        scale: 2,
      });
      await componentsPage.visualRegression.takeScreenshot('mdc-icon-scale', { element: iconScaled });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component by default', async () => {
      const icon = await setup({ componentsPage, name });
      await expect(icon).toHaveAttribute('name', name);
      await expect(icon).toHaveAttribute('style', 'width: 1em; height: 1em;');
    });

    await test.step('attributes should be present on component with scale passed in', async () => {
      const icon = await setup({ componentsPage, name, scale: 2 });
      await expect(icon).toHaveAttribute('name', name);
      await expect(icon).toHaveAttribute('scale', '2');
      await expect(icon).toHaveAttribute('style', 'width: 2em; height: 2em;');
    });

    await test.step('attributes should be present on component with role / aria-label passed in', async () => {
      const iconWithRole = await setup({
        componentsPage,
        name,
        role: 'graphics-document',
        ariaLabel: 'test aria label',
      });
      await expect(iconWithRole).toHaveAttribute('name', name);
      await expect(iconWithRole).toHaveAttribute('style', 'width: 1em; height: 1em;');
    });
  });
});
