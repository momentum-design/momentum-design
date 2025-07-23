import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  children: string;
  label?: string;
  disabled?: boolean;
  'data-aria-label'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-optgroup
        ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : ''}
        ${restArgs.disabled ? `disabled="${restArgs.disabled}"` : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
      >
        ${restArgs.children ? restArgs.children : ''}
      </mdc-optgroup>
    `,
    clearDocument: true,
  });
  const option = componentsPage.page.locator('mdc-optgroup');
  await option.waitFor();
  return option;
};

test('mdc-optgroup', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const markUpOptions = { createNewRow: true };
    const optionGroupChildren = `
      <mdc-option label="Boston"></mdc-option>
      <mdc-option label="Mexico" selected></mdc-option>
      <mdc-option label="Toronto"></mdc-option>
      <mdc-option label="Canada" disabled></mdc-option>
    `;
    const optionSheet = new StickerSheet(componentsPage, 'mdc-optgroup', 'margin: 0.25rem');
    optionSheet.setAttributes({ label: 'List options' });
    optionSheet.setChildren(optionGroupChildren);
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ disabled: '' });
    optionSheet.setChildren(optionGroupChildren);
    await optionSheet.createMarkupWithCombination({}, markUpOptions);

    await optionSheet.mountStickerSheet({ role: 'listbox' });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-optgroup', {
        element: optionSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('option-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const optgroup = await setup({ componentsPage, children: '<mdc-option label="Option Label"></mdc-option>' });

    await test.step('should have header text label when the label attribute is passed', async () => {
      await componentsPage.setAttributes(optgroup, { label: 'Primary Label' });
      const textContent = await componentsPage.page.locator('mdc-text[part="header-text"]').textContent();
      expect(textContent?.trim()).toBe('Primary Label');
    });

    await test.step('should be disabled when the disabled attribute is passed', async () => {
      await componentsPage.setAttributes(optgroup, { disabled: '' });
      await expect(optgroup).toHaveAttribute('disabled');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    const optionsChildren = `
      <mdc-option label="California"></mdc-option>
      <mdc-option label="Texas"></mdc-option>
      <mdc-option label="Florida"></mdc-option>
      <mdc-option label="New York"></mdc-option>
      <mdc-option label="Pennsylvania"></mdc-option>
      <mdc-option label="Illinois"></mdc-option>
    `;
    await test.step('mouse/pointer', async () => {
      await test.step('component should focus on specific option when clicking on it', async () => {
        const optionGroup = await setup({ componentsPage, children: optionsChildren });

        await optionGroup.locator('mdc-option >> nth=2').click();
        await expect(optionGroup.locator('mdc-option >> nth=2')).toBeFocused();

        await optionGroup.locator('mdc-option >> nth=4').click();
        await expect(optionGroup.locator('mdc-option >> nth=4')).toBeFocused();
      });
    });

    await test.step('keyboard', async () => {
      await test.step('component should navigate in between option list items', async () => {
        const optionGroup = await setup({ componentsPage, children: optionsChildren });

        await componentsPage.actionability.pressTab();
        await expect(optionGroup.locator('mdc-option[label="California"]')).toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(optionGroup.locator('mdc-option[label="Texas"]')).toBeFocused();

        await componentsPage.actionability.pressTab();
        await expect(optionGroup.locator('mdc-option[label="Florida"]')).toBeFocused();

        await componentsPage.actionability.pressShiftTab();
        await expect(optionGroup.locator('mdc-option[label="Texas"]')).toBeFocused();

        await componentsPage.actionability.pressShiftTab();
        await expect(optionGroup.locator('mdc-option[label="California"]')).toBeFocused();
      });
    });
  });
});
