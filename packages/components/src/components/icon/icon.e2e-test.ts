import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name: string;
  size?: number;
  ariaLabel?: string;
  lengthUnit?: string;
};
const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-icon 
      name="${restArgs.name}" 
      ${restArgs.size ? `size="${restArgs.size}"` : ''}
      ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
      ${restArgs.lengthUnit ? `length-unit="${restArgs.lengthUnit}"` : ''}
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
  const ariaLabel = 'test aria label';
  await setup({ componentsPage, name });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility with default props', async () => {
    await componentsPage.accessibility.checkForA11yViolations('icon-default');
  });

  const iconWithAriaLabel = await setup({
    componentsPage,
    name,
    ariaLabel,
  });

  await test.step('accessibility with aria-label passed in', async () => {
    await componentsPage.accessibility.checkForA11yViolations('icon-aria-passed-in');
  });

  /**
   * VISUAL REGRESSION
   */

  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element with aria-label passed in', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-icon-default', { element: iconWithAriaLabel });
    });

    await test.step('matches screenshot of element with size set to 2', async () => {
      const iconScaled = await setup({
        componentsPage,
        name,
        size: 2,
      });
      await componentsPage.visualRegression.takeScreenshot('mdc-icon-scale', { element: iconScaled });
    });

    await test.step('matches screenshot of element with icon color set to red using css property', async () => {
      const iconWithColor = await setup({
        componentsPage,
        name,
      });
      await componentsPage.setAttributes(iconWithColor, {
        style: '--mdc-icon-fill-color: red;',
      });
      await componentsPage.visualRegression.takeScreenshot('mdc-icon-color', { element: iconWithColor });
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

    await test.step('attributes should be present on component with size passed in', async () => {
      const icon = await setup({ componentsPage, name, size: 2 });
      await expect(icon).toHaveAttribute('name', name);
      await expect(icon).toHaveAttribute('size', '2');
      await expect(icon).toHaveAttribute('style', 'width: 2em; height: 2em;');
    });

    await test.step('attribute length unit can be overridden to rem', async () => {
      const icon = await setup({ componentsPage, name, lengthUnit: 'rem' });
      await expect(icon).toHaveAttribute('name', name);
      await expect(icon).toHaveAttribute('style', 'width: 1rem; height: 1rem;');
    });

    await test.step('attributes should be present on component with aria-label passed in', async () => {
      const iconWithRole = await setup({
        componentsPage,
        name,
        ariaLabel,
      });
      await expect(iconWithRole).toHaveAttribute('name', name);
      await expect(iconWithRole).toHaveAttribute('style', 'width: 1em; height: 1em;');
      await expect(iconWithRole).toHaveAttribute('aria-label', ariaLabel);
      await expect(iconWithRole).toHaveAttribute('role', 'img');
    });

    await test.step('role attribute should not be present on component when aria-label is not passed in', async () => {
      const iconWithoutRole = await setup({
        componentsPage,
        name,
      });
      await expect(iconWithoutRole).toHaveAttribute('name', name);
      await expect(iconWithoutRole).toHaveAttribute('style', 'width: 1em; height: 1em;');
      await expect(iconWithoutRole).not.toHaveAttribute('role');
    });

    await test.step('attribute aria-hidden should always be set to true for SVG', async () => {
      const svgIcon = componentsPage.page.locator('svg');
      await expect(svgIcon).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
