import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name?: string;
  label?: string;
  'help-text'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <form id="radio-form">
        <mdc-radiogroup
          ${restArgs.name ? `name="${restArgs.name}"` : ''}
          ${restArgs.label ? `label="${restArgs.label}"` : ''}
          ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
        >
          <mdc-radio label="Standard Plan" value="standard-plan"></mdc-radio>
          <mdc-radio label="Premium Plan" value="premium-plan" disabled></mdc-radio>
          <mdc-radio label="Business Plan" value="business-plan"></mdc-radio>
        </mdc-radiogroup>
      </form>
      `,
    clearDocument: true,
  });

  const radioGroup = componentsPage.page.locator('mdc-radiogroup').first();
  await radioGroup.waitFor();
  return radioGroup;
};

test('mdc-radiogroup', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const radioGroupStickerSheet = new StickerSheet(componentsPage, 'mdc-radiogroup', 'margin: 0.25rem');
    radioGroupStickerSheet.setChildren(
      `<mdc-radio label="Standard Plan" value="standard-plan"></mdc-radio>
      <mdc-radio label="Premium Plan" value="premium-plan" checked></mdc-radio>
      <mdc-radio label="Business Plan" value="business-plan" disabled></mdc-radio>`,
    );

    // Radio Group with label only
    await radioGroupStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    radioGroupStickerSheet.setAttributes({
      label: 'Select your plan',
    });

    // Radio Group with label and help text
    await radioGroupStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    radioGroupStickerSheet.setAttributes({
      label: 'Select your plan',
      'help-text': 'The plan you select will be the plan you are billed for',
    });

    await radioGroupStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    await radioGroupStickerSheet.mountStickerSheet();

    await test.step('matches screenshot of radio group stickersheet', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-radiogroup', {
        element: radioGroupStickerSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('radio-group-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const radioGroup = await setup({ componentsPage });
    // For label
    await test.step('should have label text when the label text attribute is passed', async () => {
      await componentsPage.setAttributes(radioGroup, { label: 'Label Text' });
      const labelElement = componentsPage.page.locator('mdc-text[id="heading-id"]');
      const groupLabelText = await labelElement.nth(0).textContent();
      expect(groupLabelText?.trim()).toBe('Label Text');
      await componentsPage.removeAttribute(radioGroup, 'label');
    });

    // For help text
    await test.step('should have help text when the help text attribute is passed', async () => {
      await componentsPage.setAttributes(radioGroup, { 'help-text': 'Help Text' });
      const mdcText = componentsPage.page.locator('mdc-text');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe('Help Text');
      await componentsPage.removeAttribute(radioGroup, 'help-text');
    });

    // For radio count
    await test.step('should have two radio buttons', async () => {
      const radios = componentsPage.page.locator('mdc-radio');
      const radioCount = await radios.count();
      expect(radioCount).toBe(3);
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('navigate and select between radio buttons using arrow keys.', async () => {
      await setup({
        componentsPage,
        label: 'Select your plan',
        name: 'student-plan',
      });
      const radios = componentsPage.page.locator('mdc-radio').locator('input[name="student-plan"]');
      await componentsPage.actionability.pressTab();
      await expect(radios.nth(0)).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowDown');
      // As the second radio is disabled, it should skip to the third radio directly
      await expect(radios.nth(2)).toBeFocused();
      await expect(radios.nth(2)).toBeChecked();
      await componentsPage.page.keyboard.press('ArrowUp');
      // As the second radio is checked, it should skip to the first radio directly
      await expect(radios.nth(0)).toBeFocused();
      await expect(radios.nth(0)).toBeChecked();
    });
  });
});
