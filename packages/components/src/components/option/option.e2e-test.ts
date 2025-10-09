import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  'prefix-icon'?: string;
  disabled?: boolean;
  'soft-disabled'?: boolean;
  'aria-label'?: string;
  label?: string;
  secondaryLabel?: string;
  selected?: boolean;
  style?: string;
};

const label = 'Primary Label';
const secondaryLabel = 'Secondary Label';
const icon = 'placeholder-bold';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-option
        ${restArgs['prefix-icon'] ? `prefix-icon="${restArgs['prefix-icon']}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs.secondaryLabel ? `secondary-label="${restArgs.secondaryLabel}"` : ''}
        ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
        ${restArgs.selected ? `selected="${restArgs.selected}"` : ''}
        ${restArgs.style ? `style="${restArgs.style}"` : ''}
      ></mdc-option>
    `,
    clearDocument: true,
  });
  const option = componentsPage.page.locator('mdc-option');
  await option.waitFor();
  return option;
};

test('mdc-option', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const markUpOptions = { createNewRow: true };
    const optionSheet = new StickerSheet(componentsPage, 'mdc-option', 'margin: 0.25rem');
    optionSheet.setAttributes({ label });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'prefix-icon': icon });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'secondary-label': secondaryLabel, 'prefix-icon': icon });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'prefix-icon': icon, selected: '' });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({ label, 'prefix-icon': icon, selected: '', disabled: '' });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({
      label: 'It`s chai time',
      selected: '',
    });
    optionSheet.setChildren(`<mdc-avatar
        slot="leading-controls"
        size="24"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IB2cksfwAAAAlwSFlzAACZygAAmcoB45GkIgAAAC1QTFRFejgAxIlH6urq4Z9Wj04Wm14nr3M47LFuy5Za///+t24d8c6o9MOA4NbNzrObv1/50QAAA3JJREFUeJzt2M9r02AYB/DUpd1AJgt1Je4gUnRsh4rl1XWIh461Zd42u5bpQSajpZsgSsR42GFlOjLEHbz1IAzcPPQP8BK3i4cdrCA7KdKCA2Uymr/BN83yq23W52n8cckXspW8PJ++70uaN28YxosXL168eDkpia4btfjEq86NaXGgI9ArinGnNlYUHwJ64PwtfSe0mUnxj52aJkOzneuzcSbp1DbNsPlO9T7x2knNUx3H4Hui96SgKPVqI/ENRcrFtdNpwCTQ2X6wEzYTCTT+1b7HIbVq7n4tlV6ZwOV+/dMhrN5fKtmA4QPj42eY8NIOfDH7AhsE+3OmPmoB9NRyqRVYD0Yjh5mspFSrxjRWa4ehTLYeBgJ0DksRRQrlMnryvFLfp9I8DPhlzoF6Geybo5hGA02Jw4B1RwBWzyyqF0K7+ggQuO0WuOkEXAYCp5yAESDQ7wQMA4EzGhD5Jsu7iiLTHF+Tl+BARBYFIlrzcWc/fBEI9L1+L1bM0oqWvdinC0DALy5XdGC5YkQUrgABVv3SdgDofqgmpva4aQSVPRIF/pYYJkhEE9ATXSrH4QAhUUmif9VKgZBxqcgNlcvQemZBBbimYIC0W2DyLwHbYKCnHVAub4GBAN8WAF8G9FpMaEkaN/YE4PHKEp/ag7wt23c2cQAZbx4BDqhUBI4ixAiHAgLkxt44F3zKcauCJMXEKB8bQwJEoEMoar3nKcQPoQB/o9Mcz5kHbg4osECBOVpYOD5SKIA1Af1wC4RSmAuRYQh5owJFE5iA3480IE2BKQ0IdQcIJpDmuEEkEDSAKQPA1B8DE38QOIsEFtwDcx+KNmAGB6TJPTsw4AYY7AKYpEDUBrx1AyxQALEqqOlpBeCrggZwboEQBWa6B3ytwOa/BQIkJES5rAVYwgJrFqCAB/wGMKcB80iAJWNuget0acqbwBYeIK4AhoxZAF4FUMtCAyANoKADcRwQbKyuRWNxLePu6jpgfUDB1TNZftUOIDvAnF+jD2YJ7QltVn1eKyABun8OV2uKlsaLAGQX1lt2frj65LkWwI8oD2zsLjYDkdO7z6D1/iNZvtUMjNyX5RUg0Ev3qj8OtNcXRp7Tk++AAPuC7nkHM/bQczJ428cUjuTWPEL9nJKFDWuxUtTfxmHCJjLqg35uFrdX8OLFi5f/ld/YPBWUjcanfAAAAABJRU5ErkJggg=="
      ></mdc-avatar>`);
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({
      'prefix-icon': icon,
      label: 'A long text which should be truncated',
      style: 'width: 15rem;',
    });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);
    optionSheet.setAttributes({
      label: 'A long text which should be truncated',
      'secondary-label': secondaryLabel,
      'prefix-icon': icon,
      selected: '',
      style: 'width: 15rem;',
    });
    await optionSheet.createMarkupWithCombination({}, markUpOptions);

    await optionSheet.mountStickerSheet({ role: 'listbox' });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-option', {
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
    const option = await setup({ componentsPage });

    await test.step('attribute role, tabindex and variant should be present on component by default', async () => {
      await expect(option).toHaveAttribute('role', 'option');
      await expect(option).toHaveAttribute('aria-selected', 'false');
      await expect(option).toHaveAttribute('aria-disabled', 'false');
    });

    await test.step('should have label text when the attribute is passed', async () => {
      await componentsPage.setAttributes(option, { label });
      const mdcTextElement = option.locator('mdc-text[part="leading-text-primary-label"]');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe(label);
    });

    await test.step('should have secondary label text when the label and secondary-label attribute are passed', async () => {
      await componentsPage.setAttributes(option, { label, 'secondary-label': secondaryLabel });
      const mdcTextElement = option.locator('mdc-text[part="leading-text-secondary-label"]');
      const textContent = await mdcTextElement.textContent();
      expect(textContent?.trim()).toBe(secondaryLabel);
    });

    await test.step('should have icon on the left when the prefix-icon attribute is passed', async () => {
      await componentsPage.setAttributes(option, { 'prefix-icon': 'placeholder-bold' });
      await expect(option.locator("mdc-icon[slot='leading-controls']")).toHaveAttribute('name', 'placeholder-bold');
    });

    await test.step('should have icon on the right when the selected attribute is passed', async () => {
      await componentsPage.setAttributes(option, { selected: '' });
      await expect(option.locator("mdc-icon[slot='trailing-controls']")).toHaveAttribute('name', 'check-bold');
    });

    await test.step('should be disabled when the disabled attribute is passed', async () => {
      await componentsPage.setAttributes(option, { disabled: '' });
      await expect(option).toHaveAttribute('disabled');
      await expect(option).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('should have soft-disabled attribute when set', async () => {
      await componentsPage.setAttributes(option, { 'soft-disabled': '' });
      await expect(option).toHaveAttribute('soft-disabled');
      await expect(option).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('should set aria-label attribute when provided', async () => {
      const option = await setup({ componentsPage, 'aria-label': 'Custom Aria Label' });
      await expect(option).toHaveAttribute('aria-label', 'Custom Aria Label');
    });
  });
  await test.step('interactions', async () => {
    await test.step('should dispatch click event when clicked', async () => {
      const option = await setup({ componentsPage, label: 'Clickable Option' });
      const clickPromise = componentsPage.waitForEvent(option, 'click');
      await option.click();
      await clickPromise;
    });

    await test.step('should dispatch keydown and keyup events when keys are pressed', async () => {
      const option = await setup({ componentsPage, label: 'Key Option' });
      const keydownPromise = componentsPage.waitForEvent(option, 'keydown');
      const keyupPromise = componentsPage.waitForEvent(option, 'keyup');
      await option.focus();
      await option.press('Space');
      await keydownPromise;
      await keyupPromise;
    });

    await test.step('should be focusable and have aria-disabled when soft-disabled is set', async () => {
      const option = await setup({ componentsPage, label: 'Soft Disabled Option', 'soft-disabled': true });
      await option.focus();
      await expect(option).toBeFocused();
      await expect(option).toHaveAttribute('aria-disabled', 'true');
    });

    await test.step('should display tooltip for truncated/long label text', async () => {
      await componentsPage.mount({
        html: `<div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option id='option-1'
        label="This is a very long text and it should be truncated."
      ></mdc-option>
      <mdc-tooltip triggerID="option-1" show-arrow>
        This is a very long text and it should be truncated.
      </mdc-tooltip>
    </div>`,
        clearDocument: true,
      });
      const option = await componentsPage.page.locator('mdc-option');
      await option.waitFor();
      await componentsPage.actionability.pressTab();
      await expect(option).toBeFocused();
      const tooltip = componentsPage.page.locator('mdc-tooltip');
      await expect(tooltip).toBeVisible();
    });
  });
});
