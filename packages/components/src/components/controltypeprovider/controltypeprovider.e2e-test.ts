import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

import { ControlType } from './controltypeprovider.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  controlType: string | undefined;
  type: 'standalone' | 'nested';
  nestedControlType?: string | undefined;
};

type TestOptions = SetupOptions & {
  expectedControlType: ControlType;
  expectedNestedControlType?: ControlType;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  const renderControlTypeProvider = (children: string = '') => `
    <mdc-controltypeprovider id="local" ${restArgs.controlType ? `control-type="${restArgs.controlType}"` : ''}>
      <mdc-subcomponent-control-type id="sub-local" control-type-label-prefix="ControlTypeProvider control type: "></mdc-subcomponent-control-type>
      ${children}
    </mdc-controltypeprovider>
  `;

  if (restArgs.type === 'nested') {
    await componentsPage.mount({
      html: renderControlTypeProvider(`
      <mdc-controltypeprovider id="nested" ${restArgs.controlType ? `control-type="${args.nestedControlType}"` : ''}>
        <mdc-subcomponent-control-type id="sub-nested" control-type-label-prefix="Nested ControlTypeProvider control type: ">
        </mdc-subcomponent-control-type>
      </mdc-controltypeprovider>
        `),
    });
  } else {
    await componentsPage.mount({
      html: renderControlTypeProvider(),
    });
  }
};

const testToRun = async ({
  componentsPage,
  controlType,
  type,
  nestedControlType,
  expectedControlType,
  expectedNestedControlType,
}: TestOptions) => {
  await setup({ componentsPage, controlType, type, nestedControlType });
  const controltypeprovider = componentsPage.page.locator('mdc-controltypeprovider#local');
  const subComponentLocator = componentsPage.page.locator('mdc-subcomponent-control-type#sub-local');

  let nestedControlTypeProvider: any;
  let nestedSubComponentLocator: any;
  if (type === 'nested') {
    nestedControlTypeProvider = componentsPage.page.locator('mdc-controltypeprovider#nested');
    nestedSubComponentLocator = componentsPage.page.locator('mdc-subcomponent-control-type#sub-nested');
    await nestedControlTypeProvider.waitFor();
  }

  await controltypeprovider.waitFor();

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations(`control-type-provider-${type}`, true);
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      const screenshotName = `mdc-controltypeprovider-${type}`;

      await componentsPage.visualRegression.takeScreenshot(screenshotName);
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await expect(controltypeprovider).toHaveAttribute('control-type', expectedControlType);
    // SUBCOMPONENT
    await expect(subComponentLocator).toBeVisible();
    await expect(subComponentLocator).toContainText(`ControlTypeProvider control type: ${expectedControlType}`);

    if (type === 'nested') {
      await expect(nestedControlTypeProvider).toHaveAttribute('control-type', expectedNestedControlType as ControlType);
      await expect(nestedSubComponentLocator).toBeVisible();
      await expect(nestedSubComponentLocator).toContainText(
        `ControlTypeProvider control type: ${expectedNestedControlType}`,
      );
    }
  });
};

test.describe.parallel('mdc-control-type-provider', () => {
  test('standalone controlled', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'standalone',
      controlType: 'controlled',
      expectedControlType: 'controlled',
    });
  });
  test('standalone uncontrolled', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'standalone',
      controlType: 'uncontrolled',
      expectedControlType: 'uncontrolled',
    });
  });
  test('nested uncontrolled in controlled', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'nested',
      controlType: 'controlled',
      nestedControlType: 'uncontrolled',
      expectedControlType: 'controlled',
      expectedNestedControlType: 'uncontrolled',
    });
  });
  test('nested controlled in uncontrolled', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'nested',
      controlType: 'uncontrolled',
      nestedControlType: 'controlled',
      expectedControlType: 'uncontrolled',
      expectedNestedControlType: 'controlled',
    });
  });
  test('standalone undefined is changed to uncontrolled', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'standalone',
      controlType: undefined,
      expectedControlType: 'uncontrolled',
    });
  });
  test('standalone invalid is changed to uncontrolled', async ({ componentsPage }) => {
    await testToRun({
      componentsPage,
      type: 'standalone',
      controlType: 'invalid',
      expectedControlType: 'uncontrolled',
    });
  });
});
