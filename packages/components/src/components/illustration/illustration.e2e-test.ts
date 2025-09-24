import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

import type { IllustrationNames } from './illustration.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name: IllustrationNames;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};
const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.page.pause();
  await componentsPage.mount({
    html: `
    <mdc-illustration 
      name="${restArgs.name}" 
      ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
      ${restArgs.ariaLabelledBy ? `aria-labelledby="${restArgs.ariaLabelledBy}"` : ''}
    >
    </mdc-illustration>
      `,
    clearDocument: true,
  });
  const illustration = componentsPage.page.locator('mdc-illustration');
  await illustration.waitFor();
  return illustration;
};

const visualTestingSetup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div class="componentWrapper componentRowWrapper">
      <mdc-illustration name="${restArgs.name}"></mdc-illustration>
      <mdc-illustration name="${restArgs.name}" style="--mdc-illustration-size: 400px;"></mdc-illustration>
    </div>
      `,
    clearDocument: true,
  });
  const illustration = componentsPage.page.locator('.componentRowWrapper');
  await illustration.waitFor();
  return illustration;
};

test('mdc-illustration', async ({ componentsPage }) => {
  const name = 'astronaut-avatar-onetwozero-empty-primary';
  const ariaLabel = 'test aria label';
  const ariaLabelledBy = 'testId';
  await setup({ componentsPage, name });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility with default props', async () => {
    await componentsPage.accessibility.checkForA11yViolations('illustration-default');
  });

  await setup({
    componentsPage,
    name,
    ariaLabel,
  });

  await test.step('accessibility with aria-label passed in', async () => {
    await componentsPage.accessibility.checkForA11yViolations('illustration-aria-passed-in');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const visualIllustrations = await visualTestingSetup({ componentsPage, name });

    await test.step('matches screenshot of elements with default & size override', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-illustration', { element: visualIllustrations });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attributes should be present on component by default', async () => {
      const illustration = await setup({ componentsPage, name });
      await expect(illustration).toHaveAttribute('name', name);
    });

    await test.step('attributes should be present on component with aria-label passed in', async () => {
      const illustrationWithRole = await setup({
        componentsPage,
        name,
        ariaLabel,
      });
      await expect(illustrationWithRole).toHaveAttribute('name', name);
      await expect(illustrationWithRole).toHaveAttribute('aria-label', ariaLabel);
      await expect(illustrationWithRole).toHaveAttribute('role', 'img');
    });

    await test.step('attributes should be present on component with aria-labelledby passed in', async () => {
      const illustrationWithRole = await setup({
        componentsPage,
        name,
        ariaLabel,
        ariaLabelledBy,
      });
      await expect(illustrationWithRole).toHaveAttribute('name', name);
      await expect(illustrationWithRole).toHaveAttribute('aria-labelledby', ariaLabelledBy);
      await expect(illustrationWithRole).toHaveAttribute('role', 'img');
    });

    await test.step('role attribute should not be present on component when aria-label is not passed in', async () => {
      const illustrationWithoutRole = await setup({
        componentsPage,
        name,
      });
      await expect(illustrationWithoutRole).toHaveAttribute('name', name);
      await expect(illustrationWithoutRole).not.toHaveAttribute('role');
    });

    await test.step('attribute aria-hidden should always be set to true for SVG', async () => {
      const svgIllustration = componentsPage.page.locator('svg');
      await expect(svgIllustration).toHaveAttribute('aria-hidden', 'true');
    });

    await test.step('attribute data-name should always be set same as the name attribute for SVG', async () => {
      const svgIllustration = componentsPage.page.locator('svg');
      await expect(svgIllustration).toHaveAttribute('data-name', name);
    });
  });
});
