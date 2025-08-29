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

    await test.step('should update help-text and help-text-type dynamically based on radio group validity (RadioGroupInFormWithHelpTextValidation)', async () => {
      await componentsPage.mount({
        html: `
          <form id="test-form" novalidate>
            <fieldset style="display: flex; flex-direction: column; gap: 1rem;">
              <legend>Select your subscription plan (with validation)</legend>
              <mdc-radiogroup
                label="Choose a plan"
                name="plan"
                required
                help-text="Choose a plan that best suits your needs"
                help-text-type="default"
              >
                <mdc-radio label="Standard Plan" value="standard-plan"></mdc-radio>
                <mdc-radio label="Premium Plan" value="premium-plan"></mdc-radio>
                <mdc-radio label="Business Plan" value="business-plan"></mdc-radio>
              </mdc-radiogroup>
              <div style="display: flex; gap: 0.25rem;">
                <mdc-button type="submit" size="24">Submit</mdc-button>
                <mdc-button type="reset" size="24" variant="secondary">Reset</mdc-button>
              </div>
            </fieldset>
          </form>
        `,
        clearDocument: true,
      });

      const form = componentsPage.page.locator('#test-form');
      const radioGroup = form.locator('mdc-radiogroup[name="plan"]');
      const submitButton = form.locator('mdc-button[type="submit"]');
      const resetButton = form.locator('mdc-button[type="reset"]');
      const radios = radioGroup.locator('mdc-radio input[type="radio"]');

      // Always re-query help-text
      const getHelpText = () => radioGroup.locator('mdc-text[part="help-text"]');

      // Helper to check help-text and help-text-type
      async function expectHelpText(text: string, type: string) {
        if (text === '') {
          await expect(getHelpText()).toHaveCount(0);
        } else {
          await expect(getHelpText()).toHaveText(text);
        }
        await expect(radioGroup).toHaveAttribute('help-text-type', type);
      }

      // Add dynamic help-text handler to the form
      await form.evaluate(formEl => {
        formEl.addEventListener('submit', event => {
          event.preventDefault();
          const radioGroup = formEl.querySelector('mdc-radiogroup[name="plan"]');
          const checkedRadio = radioGroup?.querySelector('mdc-radio input[type="radio"]:checked');
          if (radioGroup) {
            if (!checkedRadio) {
              radioGroup.setAttribute('help-text', 'Please select a plan');
              radioGroup.setAttribute('help-text-type', 'error');
            } else {
              radioGroup.setAttribute('help-text', 'Looks good!');
              radioGroup.setAttribute('help-text-type', 'success');
            }
          }
        });
        formEl.addEventListener('reset', () => {
          const radioGroup = formEl.querySelector('mdc-radiogroup[name="plan"]');
          if (radioGroup) {
            radioGroup.setAttribute('help-text', 'Choose a plan that best suits your needs');
            radioGroup.setAttribute('help-text-type', 'default');
          }
        });
      });

      // 1. Initially → default help-text
      await expectHelpText('Choose a plan that best suits your needs', 'default');

      // 2. Submit with no radio selected → error
      await submitButton.click();
      await expectHelpText('Please select a plan', 'error');

      // 3. Select a radio and submit → success
      await radios.nth(1).click(); // Select Premium Plan
      await expect(radios.nth(1)).toBeChecked();
      await submitButton.click();
      // await expectHelpText('Looks good!', 'success');

      // 4. Reset → back to default help-text
      await resetButton.click();
      await expectHelpText('Choose a plan that best suits your needs', 'default');
    });
  });
});
