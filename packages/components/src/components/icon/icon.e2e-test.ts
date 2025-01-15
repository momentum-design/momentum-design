import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import type { IconNames } from './icon.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name: IconNames;
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

const visualTestingSetup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div class="componentWrapper componentRowWrapper">
      <mdc-icon name="${restArgs.name}"></mdc-icon>
      <mdc-icon name="${restArgs.name}" size="2"></mdc-icon>
      <mdc-icon name="${restArgs.name}" size="2" style="--mdc-icon-fill-color: red;"></mdc-icon>
    </div>
      `,
    clearDocument: true,
  });
  const icon = componentsPage.page.locator('.componentRowWrapper');
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

  await setup({
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
    const visualIcons = await visualTestingSetup({ componentsPage, name });
    await test.step('matches screenshot of elements with default, size equal 2 and color set to red', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-icon', { element: visualIcons });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component by default', async () => {
      const icon = await setup({ componentsPage, name });
      await expect(icon).toHaveAttribute('name', name);
      await expect(icon).toHaveAttribute('style', '--computed-icon-size: 1em;');
    });

    await test.step('attributes should be present on component with size passed in', async () => {
      const icon = await setup({ componentsPage, name, size: 2 });
      await expect(icon).toHaveAttribute('name', name);
      await expect(icon).toHaveAttribute('size', '2');
      await expect(icon).toHaveAttribute('style', '--computed-icon-size: 2em;');
    });

    await test.step('attribute length unit can be overridden to rem', async () => {
      const icon = await setup({ componentsPage, name, lengthUnit: 'rem' });
      await expect(icon).toHaveAttribute('name', name);
      await expect(icon).toHaveAttribute('style', '--computed-icon-size: 1rem;');
    });

    await test.step('attributes should be present on component with aria-label passed in', async () => {
      const iconWithRole = await setup({
        componentsPage,
        name,
        ariaLabel,
      });
      await expect(iconWithRole).toHaveAttribute('name', name);
      await expect(iconWithRole).toHaveAttribute('style', '--computed-icon-size: 1em;');
      await expect(iconWithRole).toHaveAttribute('aria-label', ariaLabel);
      await expect(iconWithRole).toHaveAttribute('role', 'img');
    });

    await test.step('role attribute should not be present on component when aria-label is not passed in', async () => {
      const iconWithoutRole = await setup({
        componentsPage,
        name,
      });
      await expect(iconWithoutRole).toHaveAttribute('name', name);
      await expect(iconWithoutRole).toHaveAttribute('style', '--computed-icon-size: 1em;');
      await expect(iconWithoutRole).not.toHaveAttribute('role');
    });

    await test.step('attribute aria-hidden should always be set to true for SVG', async () => {
      const svgIcon = componentsPage.page.locator('svg');
      await expect(svgIcon).toHaveAttribute('aria-hidden', 'true');
    });

    await test.step('attribute data-name should always be set same as the name attribute for SVG', async () => {
      const svgIcon = componentsPage.page.locator('svg');
      await expect(svgIcon).toHaveAttribute('data-name', name);
    });
  });
});
