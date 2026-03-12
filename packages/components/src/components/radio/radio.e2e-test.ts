import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { KEYS } from '../../utils/keys';

type SetupOptions = {
  componentsPage: ComponentsPage;
  name?: string;
  value?: string;
  label?: string;
  readonly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  'aria-label'?: string;
  secondRadioBtn?: boolean;
  'soft-disabled'?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <form id="radio-form">
        <mdc-radio
          ${restArgs.name ? `name="${restArgs.name}"` : ''}
          ${restArgs.value ? `value="${restArgs.value}"` : ''}
          ${restArgs.label ? `label="${restArgs.label}"` : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.checked ? 'checked' : ''}
          ${restArgs.readonly ? 'readonly' : ''}
          ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}
          ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
        >
        </mdc-radio>
        ${
          restArgs.secondRadioBtn
            ? `
          <mdc-radio ${restArgs.name ? `name="${restArgs.name}"` : ''}
          label="Second Radio Button"
          value="Default plan"
          ></mdc-radio>
          `
            : ''
        }
      </form>
      `,
    clearDocument: true,
  });

  const element = restArgs.secondRadioBtn
    ? componentsPage.page.locator('form#radio-form')
    : componentsPage.page.locator('mdc-radio');
  await element.waitFor();

  const radio = componentsPage.page.locator('mdc-radio').first();
  await radio.waitFor();
  return radio;
};

test('mdc-radio', async ({ componentsPage }) => {
  await test.step('attributes and interactions', async () => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const radioStickerSheet = new StickerSheet(componentsPage, 'mdc-radio');

      // Radio btn without label
      radioStickerSheet.setAttributes({
        'aria-label': 'Standard Plan',
      });

      // Radio btn with label
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Standard Plan',
      });

      // Checked radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Selected Radio Label',
        checked: true,
      });

      // Checked radio btn with help text
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Selected Radio Label',
        'help-text': 'This is a help text',
        checked: true,
      });

      // Readonly radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Read Only Radio Label',
        'help-text': 'This is a help text',
        readonly: true,
      });

      // Readonly but checked radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Read Only Radio Label',
        'help-text': 'This is a help text',
        readonly: true,
        checked: true,
      });

      // Disabled radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Disabled Radio Label',
        'help-text': 'This is a help text',
        disabled: true,
      });

      // Disabled but checked radio btn
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Disabled Selected Radio Label',
        'help-text': 'This is a help text',
        disabled: true,
        checked: true,
      });
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });

      radioStickerSheet.setAttributes({
        label: 'Soft Disabled Radio Label',
        'help-text': 'This is a help text',
        'soft-disabled': true,
      });
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });
      radioStickerSheet.setAttributes({
        label: 'Soft Disabled Selected Radio Label',
        'help-text': 'This is a help text',
        'soft-disabled': true,
        checked: true,
      });
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });

      // Short width test for word wrapping
      radioStickerSheet.setAttributes({
        label: 'This is a very long label that should wrap to multiple lines when constrained to a short width',
        'help-text': 'This is also a very long help text that should wrap properly',
        style: 'width: 7.5rem;',
      });
      await radioStickerSheet.createMarkupWithCombination({}, { createNewRow: true });

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

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      await test.step('radio focus using tab', async () => {
        const radio = await setup({ componentsPage, label: 'Standard Plan for student' });

        await componentsPage.actionability.pressTab();
        await expect(radio).toBeFocused();
      });
      await test.step('select radio by pressing space', async () => {
        await setup({ componentsPage, label: 'Standard Plan for student' });
        const radio = componentsPage.page.locator('mdc-radio');

        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expect(radio).toBeChecked();
      });

      await test.step('radio clicked', async () => {
        await setup({ componentsPage, label: 'Standard Plan for student' });
        const radio = componentsPage.page.locator('mdc-radio');

        await radio.click();
        await expect(radio).toBeChecked();
      });

      await test.step('radio focus and click on disabled radio', async () => {
        await setup({ componentsPage, label: 'Standard Plan for student', disabled: true });
        const radio = componentsPage.page.locator('mdc-radio');

        await componentsPage.actionability.pressTab();
        await expect(radio).not.toBeFocused();
        await expect(radio).toHaveAttribute('disabled');
      });

      await test.step('radio focus but should not be checked if have readonly', async () => {
        await setup({
          componentsPage,
          label: 'Standard Plan for student',
          name: 'student-plan',
          value: 'standard',
          readonly: true,
        });
        const radio = componentsPage.page.locator('mdc-radio[name="student-plan"]');
        await componentsPage.actionability.pressTab();
        await componentsPage.page.pause();
        await expect(radio).toBeFocused();
        await expect(radio).not.toBeChecked();

        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expect(radio).not.toBeChecked();

        await radio.click({ force: true });
        await expect(radio).not.toBeChecked();
      });

      await test.step('radio should be focused but not change state when soft-disabled', async () => {
        await setup({
          componentsPage,
          label: 'Standard Plan for student',
          name: 'student-plan',
          value: 'standard',
          'soft-disabled': true,
        });
        const radio = componentsPage.page.locator('mdc-radio');

        await componentsPage.actionability.pressTab();
        await expect(radio).toBeFocused();
        await expect(radio).not.toBeChecked();

        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expect(radio).not.toBeChecked();

        await radio.click({ force: true });
        await expect(radio).not.toBeChecked();
      });

      await test.step('navigate and select between radio buttons using arrow keys.', async () => {
        await setup({
          componentsPage,
          label: 'Standard Plan for student',
          name: 'student-plan',
          value: 'standard',
          secondRadioBtn: true,
        });

        const radios = componentsPage.page.locator('mdc-radio[name="student-plan"]');
        const changeEvents: Array<{ value: string; method: string }> = [];

        // Expose function to capture change events
        await componentsPage.page.exposeFunction('captureChangeEvent', (value: string) => {
          changeEvents.push({ value, method: 'change' });
        });

        // Set up change event listeners
        await componentsPage.page.evaluate(() => {
          const radioInputs = document.querySelectorAll('mdc-radio[name="student-plan"]');

          radioInputs.forEach(radio => {
            radio.addEventListener('change', event => {
              const target = event.target as HTMLInputElement;
              (window as any).captureChangeEvent(target.value);
            });
          });
        });

        await componentsPage.actionability.pressTab();
        await expect(radios.nth(0)).toBeFocused();

        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(radios.nth(1)).toBeFocused();
        await expect(radios.nth(1)).toBeChecked();

        // Check that change event was fired for keyboard navigation
        expect(changeEvents).toHaveLength(1);
        expect(changeEvents[0].value).toBe('Default plan');

        await componentsPage.page.keyboard.press('ArrowUp');
        await expect(radios.nth(0)).toBeFocused();
        await expect(radios.nth(0)).toBeChecked();

        // Check that second change event was fired
        expect(changeEvents).toHaveLength(2);
        expect(changeEvents[1].value).toBe('standard');
      });

      await test.step('radio btn inside form', async () => {
        await setup({
          componentsPage,
          label: 'Standard Plan for student',
          name: 'student-plan',
          value: 'standard',
          secondRadioBtn: true,
        });
        const radios = componentsPage.page.locator('mdc-radio[name="student-plan"]');
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press('ArrowDown');
        await expect(radios.nth(1)).toBeChecked();

        const submittedValue = await componentsPage.page.evaluate(() => {
          const form = document.getElementById('radio-form') as HTMLFormElement;
          const formData = new FormData(form);
          return formData.get('student-plan');
        });
        expect(submittedValue).toBe('Default plan');
      });

      await test.step('spatial navigation', async () => {
        const radio = await setup({ componentsPage });
        await componentsPage.wrapElement({ wrapperTagName: 'mdc-spatialnavigationprovider' });
        const { keyboard } = componentsPage.page;
        const form = componentsPage.page.locator('form');
        const waitForSubmit = await componentsPage.waitForEvent(form, 'submit');

        await keyboard.press(KEYS.ARROW_DOWN);
        await expect(radio).toBeFocused();

        await keyboard.press(KEYS.ENTER);
        await expect(radio).toBeChecked();

        await keyboard.press(KEYS.ENTER);
        await expect(radio).toBeChecked();

        await expect(waitForSubmit).not.toEventEmitted();
      });
    });

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      const radio = await setup({ componentsPage });
      // For label
      await test.step('should have label element when the label attribute is passed', async () => {
        await componentsPage.setAttributes(radio, { label: 'Radio label' });
        const label = componentsPage.page.locator('mdc-text');
        await expect(label).toHaveText('Radio label');
      });

      // For help text
      await test.step('should not have mdc-text element when the help-text attribute is passed', async () => {
        await componentsPage.setAttributes(radio, { 'help-text': 'Help text for additional info' });
        const mdcText = componentsPage.page.locator('mdc-text').getByText('Help text for additional info');
        await expect(mdcText).not.toBeVisible();
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
      await test.step('attribute readonly should be present on radio', async () => {
        await componentsPage.setAttributes(radio, {
          readonly: '',
        });
        await expect(radio).toHaveAttribute('readonly');
        await componentsPage.removeAttribute(radio, 'readonly');
      });

      // soft-disabled
      await test.step('attribute soft-disabled should be present on radio', async () => {
        await componentsPage.setAttributes(radio, {
          'soft-disabled': '',
        });
        await expect(radio).toHaveAttribute('soft-disabled');
        await componentsPage.removeAttribute(radio, 'soft-disabled');
      });
    });
  });

  await test.step('radios inside shadow DOM', async () => {
    await test.step('should find radios within same group when rendered inside a shadow DOM host', async () => {
      await componentsPage.mount({
        html: `<div id="shadow-wrapper"></div>`,
        clearDocument: true,
      });

      await componentsPage.page.evaluate(() => {
        const wrapper = document.getElementById('shadow-wrapper');
        if (wrapper) {
          const shadow = wrapper.attachShadow({ mode: 'open' });
          shadow.innerHTML = `
            <mdc-radio name="shadow-group" value="alpha" label="Alpha"></mdc-radio>
            <mdc-radio name="shadow-group" value="beta" label="Beta"></mdc-radio>
            <mdc-radio name="shadow-group" value="gamma" label="Gamma"></mdc-radio>
          `;
        }
      });

      const shadowHost = componentsPage.page.locator('#shadow-wrapper');
      await shadowHost.waitFor();

      const radioInputs = shadowHost.locator('mdc-radio input[type="radio"]');
      await radioInputs.nth(0).waitFor();

      // Click first radio — should become checked
      await radioInputs.nth(0).click();
      await expect(radioInputs.nth(0)).toBeChecked();

      // Click second radio — should become checked, first should uncheck
      await radioInputs.nth(1).click();
      await expect(radioInputs.nth(1)).toBeChecked();
      await expect(radioInputs.nth(0)).not.toBeChecked();

      // Click third radio — should become checked, second should uncheck
      await radioInputs.nth(2).click();
      await expect(radioInputs.nth(2)).toBeChecked();
      await expect(radioInputs.nth(1)).not.toBeChecked();

      // Click first radio again — should still work (this was the bug)
      await radioInputs.nth(0).click();
      await expect(radioInputs.nth(0)).toBeChecked();
      await expect(radioInputs.nth(2)).not.toBeChecked();
    });

    await test.step('change event should fire on every selection inside shadow DOM', async () => {
      await componentsPage.mount({
        html: `<div id="shadow-wrapper-events"></div>`,
        clearDocument: true,
      });

      await componentsPage.page.evaluate(() => {
        const wrapper = document.getElementById('shadow-wrapper-events');
        if (wrapper) {
          const shadow = wrapper.attachShadow({ mode: 'open' });
          shadow.innerHTML = `
            <mdc-radio name="shadow-events" value="one" label="One"></mdc-radio>
            <mdc-radio name="shadow-events" value="two" label="Two"></mdc-radio>
          `;
        }
      });

      const shadowHost = componentsPage.page.locator('#shadow-wrapper-events');
      await shadowHost.waitFor();

      // Wait for custom elements to upgrade
      await shadowHost.locator('mdc-radio input[type="radio"]').nth(0).waitFor();

      // Attach change event counters via data attributes
      await componentsPage.page.evaluate(() => {
        const wrapper = document.getElementById('shadow-wrapper-events');
        wrapper?.shadowRoot?.querySelectorAll('mdc-radio[name="shadow-events"]').forEach(radio => {
          radio.addEventListener('change', () => {
            const count = parseInt(radio.getAttribute('data-change-count') || '0', 10);
            radio.setAttribute('data-change-count', String(count + 1));
          });
        });
      });

      const radios = shadowHost.locator('mdc-radio');
      const radioInputs = shadowHost.locator('mdc-radio input[type="radio"]');

      await radioInputs.nth(0).click();
      await expect(radios.nth(0)).toHaveAttribute('data-change-count', '1');

      await radioInputs.nth(1).click();
      await expect(radios.nth(1)).toHaveAttribute('data-change-count', '1');

      // Click first again — change should still fire
      await radioInputs.nth(0).click();
      await expect(radios.nth(0)).toHaveAttribute('data-change-count', '2');
    });

    await test.step('arrow key navigation should work inside shadow DOM', async () => {
      await componentsPage.mount({
        html: `<div id="shadow-wrapper-keys"></div>`,
        clearDocument: true,
      });

      await componentsPage.page.evaluate(() => {
        const wrapper = document.getElementById('shadow-wrapper-keys');
        if (wrapper) {
          const shadow = wrapper.attachShadow({ mode: 'open' });
          shadow.innerHTML = `
            <mdc-radio name="shadow-keys" value="first" label="First"></mdc-radio>
            <mdc-radio name="shadow-keys" value="second" label="Second"></mdc-radio>
            <mdc-radio name="shadow-keys" value="third" label="Third"></mdc-radio>
          `;
        }
      });

      const shadowHost = componentsPage.page.locator('#shadow-wrapper-keys');
      await shadowHost.waitFor();

      const radioInputs = shadowHost.locator('mdc-radio input[type="radio"]');
      await radioInputs.nth(0).waitFor();

      // Focus first radio and select it
      await radioInputs.nth(0).click();
      await expect(radioInputs.nth(0)).toBeChecked();

      // Arrow down to second
      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(radioInputs.nth(1)).toBeFocused();
      await expect(radioInputs.nth(1)).toBeChecked();

      // Arrow down to third
      await componentsPage.page.keyboard.press('ArrowDown');
      await expect(radioInputs.nth(2)).toBeFocused();
      await expect(radioInputs.nth(2)).toBeChecked();

      // Arrow up back to second
      await componentsPage.page.keyboard.press('ArrowUp');
      await expect(radioInputs.nth(1)).toBeFocused();
      await expect(radioInputs.nth(1)).toBeChecked();
    });
  });

  await test.step('programmatic control', async () => {
    await test.step('click method works as expected', async () => {
      const radio = await setup({ componentsPage });
      const waitForClickAfterChecked = await componentsPage.waitForEvent(radio, 'click');
      const waitForInputAfterChecked = await componentsPage.waitForEvent(radio, 'input');
      const waitForChangeAfterChecked = await componentsPage.waitForEvent(radio, 'change');
      await radio.evaluate((el: HTMLElement) => el.click());

      await expect(radio).toHaveAttribute('checked');
      await expect(waitForClickAfterChecked).toEventEmitted();
      await expect(waitForInputAfterChecked).toEventEmitted();
      await expect(waitForChangeAfterChecked).toEventEmitted();
    });

    await test.step('click method works as expected when component disabled', async () => {
      const radio = await setup({ componentsPage, disabled: true });
      const waitForClickAfterDisabled = await componentsPage.waitForEvent(radio, 'click');
      await radio.evaluate((el: HTMLElement) => el.click());

      await expect(radio).not.toHaveAttribute('checked');
      await expect(waitForClickAfterDisabled).not.toEventEmitted();
    });
  });
});
