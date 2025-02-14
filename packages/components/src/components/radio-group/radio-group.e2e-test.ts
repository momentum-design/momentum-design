import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name?: string;
  'header-text'?: string;
  description?: string;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <form id="radio-form">
        <mdc-radio-group
          ${restArgs.name ? `name="${restArgs.name}"` : ''}
          ${restArgs['header-text'] ? `header-text="${restArgs['header-text']}"` : ''}
          ${restArgs.description ? `description="${restArgs.description}"` : ''}
        >
          <mdc-radio label="Standard Plan" value="standard-plan"></mdc-radio>
          <mdc-radio label="Premium Plan" value="premium-plan" disabled></mdc-radio>
          <mdc-radio label="Business Plan" value="business-plan"></mdc-radio>
        </mdc-radio-group>
      </form>
      `,
    clearDocument: true,
  });

  const radio = componentsPage.page.locator('mdc-radio-group').first();
  await radio.waitFor();
  return radio;
};

test('mdc-radio-group', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const radioGroupStickerSheet = new StickerSheet(componentsPage, 'mdc-radio-group', 'margin: 0.25rem');
    radioGroupStickerSheet.setChildren(
      `<mdc-radio label="Standard Plan" value="standard-plan"></mdc-radio>
      <mdc-radio label="Premium Plan" value="premium-plan" checked></mdc-radio>
      <mdc-radio label="Business Plan" value="business-plan" disabled></mdc-radio>`,
    );

    // Radio Group with header text only
    await radioGroupStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    await radioGroupStickerSheet.setAttributes({
      'header-text': 'Select your plan',
    });

    // Radio Group with header text and description
    await radioGroupStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    await radioGroupStickerSheet.setAttributes({
      'header-text': 'Select your plan',
      description: 'The plan you select will be the plan you are billed for',
    });

    await radioGroupStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
    await radioGroupStickerSheet.mountStickerSheet();

    await test.step('matches screenshot of radio group stickersheet', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-radio-group', {
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
    // For Header Text
    await test.step('should have header text when the header text attribute is passed', async () => {
      await componentsPage.setAttributes(radioGroup, { 'header-text': 'Header Text' });
      const mdcText = await componentsPage.page.locator('mdc-text');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe('Header Text');
      await componentsPage.removeAttribute(radioGroup, 'header-text');
    });

    // For description
    await test.step('should have description when the description attribute is passed', async () => {
      await componentsPage.setAttributes(radioGroup, { description: 'Description' });
      const mdcText = await componentsPage.page.locator('mdc-text');
      const textContent = await mdcText.textContent();
      expect(textContent?.trim()).toBe('Description');
      await componentsPage.removeAttribute(radioGroup, 'description');
    });

    // For radio count
    await test.step('should have two radio buttons', async () => {
      const radios = await componentsPage.page.locator('mdc-radio');
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
        'header-text': 'Select your plan',
        name: 'student-plan',
      });
      const radios = await componentsPage.page.locator('mdc-radio').locator('input[name="student-plan"]');
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
