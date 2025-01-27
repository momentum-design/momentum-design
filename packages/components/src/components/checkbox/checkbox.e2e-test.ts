/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name?: string;
  value?: string;
  label?: string;
  'help-text'?: string;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-checkbox
        ${restArgs.name ? `name="${restArgs.name}"` : ''}
        ${restArgs.value ? `value="${restArgs.value}"` : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.checked ? 'checked' : ''}
        ${restArgs.indeterminate ? 'indeterminate' : ''}
      >
      </mdc-checkbox>
    `,
    clearDocument: true,
  });
  const checkbox = componentsPage.page.locator('mdc-checkbox');
  await checkbox.waitFor();
  return checkbox;
};

const testToRun = async (componentsPage: ComponentsPage) => {
  /**
   * ACCESSIBILITY
   */
  // await test.step('accessibility', async () => {
  //   await componentsPage.accessibility.checkForA11yViolations('checkbox-default');
  // });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const checkbox = await setup({ componentsPage });

    await test.step('should fallback to default icon and size to 32 when no attributes are passed', async () => {
      await componentsPage.setAttributes(checkbox, {});
      await expect(checkbox).toHaveAttribute('name');
      await expect(checkbox).toHaveAttribute('value');
    });

    await test.step('should have label element when the label attribute is passed', async () => {
      await componentsPage.setAttributes(checkbox, { label: 'Checkbox label' });
      const label = await componentsPage.page.locator('label');
      await expect(label).toHaveText('Checkbox label');
    });

    await test.step('should have mdc-text element when the help-text attribute is passed', async () => {
      await componentsPage.setAttributes(checkbox, { 'help-text': 'This is a help text' });
      const mdcText = await componentsPage.page.locator('mdc-text');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe('This is a help text');
    });

    await test.step(`should have icon element with minus-regular icon name,
      when the indeterminate attribute is passed`, async () => {
      await componentsPage.removeAttribute(checkbox, 'checked');
      await componentsPage.setAttributes(checkbox, { indeterminate: '' });
      const icon = await componentsPage.page.locator('mdc-icon');
      await icon.waitFor();
      await expect(icon).toHaveAttribute('name', 'minus-regular');
    });

    await test.step(`should have icon element with check-regular icon name,
      when the checked attribute is passed`, async () => {
      await componentsPage.removeAttribute(checkbox, 'indeterminate');
      await componentsPage.setAttributes(checkbox, { checked: '' });
      const icon = await componentsPage.page.locator('mdc-icon');
      await icon.waitFor();
      await expect(icon).toHaveAttribute('name', 'check-regular');
    });

    await test.step('should have disabled attribute when the disabled attribute is passed', async () => {
      await componentsPage.setAttributes(checkbox, { disabled: '' });
      await expect(checkbox).toHaveAttribute('disabled');
    });
  });
};

test.describe.parallel('mdc-checkbox', () => {
  test.use({ viewport: { width: 600, height: 800 } });

  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage);
  });
});
