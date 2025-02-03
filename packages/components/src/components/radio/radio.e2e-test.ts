import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
    componentsPage: ComponentsPage;
    name?: string;
    value?: string;
    label?: string;
    'help-text'?: string;
    readonly?: boolean;
    disabled?: boolean;
    checked?: boolean;
    'data-aria-label'?: string;
}

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
        <mdc-radio
          ${restArgs.name ? `name="${restArgs.name}"` : ''}
          ${restArgs.value ? `value="${restArgs.value}"` : ''}
          ${restArgs.label ? `label="${restArgs.label}"` : ''}
          ${restArgs['help-text'] ? `help-text="${restArgs['help-text']}"` : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.checked ? 'checked' : ''}
          ${restArgs.readonly ? 'readonly' : ''}
          ${restArgs['data-aria-label'] ? `data-aria-label="${restArgs['data-aria-label']}"` : ''}
        >
        </mdc-radio>
      `,
    clearDocument: true,
  });
  const radio = componentsPage.page.locator('mdc-radio');
  await radio.waitFor();
  return radio;
};

test.use({ viewport: { width: 400, height: 800 } });
test('mdc-radio', async ({ componentsPage }) => {
  await test.step('attributes and interactions', async () => {
    const radio = await setup({ componentsPage });

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      // For label
      await test.step('should have label element when the label attribute is passed', async () => {
        await componentsPage.setAttributes(radio, { label: 'Radio label' });
        const label = await componentsPage.page.locator('label');
        await expect(label).toHaveText('Radio label');
      });

      // For help text
      await test.step('should have mdc-text element when the help-text attribute is passed', async () => {
        await componentsPage.setAttributes(radio, { 'help-text': 'Help text for additional info' });
        const mdcText = await componentsPage.page.locator('mdc-text');
        const textContent = await mdcText.textContent();
        expect(textContent?.trim()).toBe('Help text for additional info');
      });

      // Disabled
      await test.step('attribute disabled should be present on radio', async () => {
        await componentsPage.setAttributes(radio, {
          disabled: '',
        });
        await expect(radio).toHaveAttribute('disabled');
        await componentsPage.removeAttribute(radio, 'disabled');
      });

      // checked
      await test.step('attribute disabled should be present on radio', async () => {
        await componentsPage.setAttributes(radio, {
          checked: '',
        });
        await expect(radio).toHaveAttribute('checked');
        await componentsPage.removeAttribute(radio, 'checked');
      });

      // readonly
      await test.step('attribute disabled should be present on radio', async () => {
        await componentsPage.setAttributes(radio, {
          readonly: '',
        });
        await expect(radio).toHaveAttribute('readonly');
        await componentsPage.removeAttribute(radio, 'readonly');
      });
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      const radio = componentsPage.page.locator('mdc-radio').locator('input[type="radio"]');
      await test.step('radio focus using tab', async () => {
        await componentsPage.actionability.pressTab();
        await expect(radio).toBeFocused();
        await radio.evaluate((el) => el.blur());
      });
      await test.step('select radio by pressing space', async () => {
        await radio.focus();
        await componentsPage.page.keyboard.press('Space');
        await expect(radio).toBeChecked();
        await componentsPage.removeAttribute(radio, 'checked');
        await radio.evaluate((el) => el.blur());
      });
      await test.step('radio clicked', async () => {
        await radio.click();
        await expect(radio).toBeChecked();
        await componentsPage.removeAttribute(radio, 'checked');
        await radio.evaluate((el) => el.blur());
      });
      await test.step('radio focus and click on disabled radio', async () => {
        await componentsPage.setAttributes(radio, {
          disabled: '',
        });
        await componentsPage.actionability.pressTab();
        await expect(radio).not.toBeFocused();

        await componentsPage.removeAttribute(radio, 'disabled');
        await radio.evaluate((el) => el.blur());
      });

      await test.step('radio focus but should not be checked if have readonly', async () => {
        await componentsPage.setAttributes(radio, {
          readonly: '',
        });
        await componentsPage.actionability.pressTab();
        await expect(radio).toBeFocused();

        await componentsPage.page.keyboard.press('Space');
        await expect(radio).not.toHaveAttribute('checked');
        await componentsPage.removeAttribute(radio, 'readonly');
        await radio.evaluate((el) => el.blur());
      });
    });

    /**
   * VISUAL REGRESSION
   */
    await test.step('visual-regression', async () => {
      const radioStickerSheet = new StickerSheet(componentsPage, 'mdc-radio');
      //   Radio btn without label
      await radioStickerSheet.setAttributes({
        'data-aria-label': 'Standard Plan',
        readonly: false,
      });

      // Radio btn with label
      await radioStickerSheet.createMarkupWithCombination({}, true);
      await radioStickerSheet.setAttributes({
        label: 'Standard Plan',
      });

      // Checked radio btn
      await radioStickerSheet.createMarkupWithCombination({}, true);
      await radioStickerSheet.setAttributes({
        label: 'Selected Radio Label',
        checked: true,
      });

      // Checked radio btn with help text
      await radioStickerSheet.createMarkupWithCombination({}, true);
      await radioStickerSheet.setAttributes({
        label: 'Selected Radio Label',
        'help-text': 'This is a help text',
        checked: true,
      });

      // Readonly radio btn
      await radioStickerSheet.createMarkupWithCombination({}, true);
      await radioStickerSheet.setAttributes({
        label: 'Read Only Radio Label',
        'help-text': 'This is a help text',
        readonly: true,
      });

      // Readonly but checked radio btn
      await radioStickerSheet.createMarkupWithCombination({}, true);
      await radioStickerSheet.setAttributes({
        label: 'Read Only Radio Label',
        'help-text': 'This is a help text',
        readonly: true,
        checked: true,
      });

      // Disabled radio btn
      await radioStickerSheet.createMarkupWithCombination({}, true);
      await radioStickerSheet.setAttributes({
        label: 'Disabled Radio Label',
        'help-text': 'This is a help text',
        disabled: true,
      });

      // Disabled but checked radio btn
      await radioStickerSheet.createMarkupWithCombination({}, true);
      await radioStickerSheet.setAttributes({
        label: 'Disabled Selected Radio Label',
        'help-text': 'This is a help text',
        disabled: true,
        checked: true,
      });
      await radioStickerSheet.createMarkupWithCombination({}, true);
      await radioStickerSheet.mountStickerSheet();

      await test.step('matches screenshot of radio stickersheet', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-radio', {
          element: radioStickerSheet.getWrapperContainer(),
        });
      });
    });

    /**
   * ACCESSIBILITY
   */
    await test.step('accessibility', async () => {
      await componentsPage.accessibility.checkForA11yViolations('radio-default');
    });
  });
});
