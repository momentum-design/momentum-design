import { expect } from '@playwright/test';

import { KEYS } from '../../utils/keys';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  range?: boolean;
  disabled?: boolean;
  'soft-disabled'?: boolean;
  'leading-icon'?: string;
  'trailing-icon'?: string;
  min?: number;
  max?: number;
  value?: number;
  'value-start'?: number;
  'value-end'?: number;
  step?: number;
  label?: string;
  'label-start'?: string;
  'label-end'?: string;
  'value-label'?: string;
  'value-label-start'?: string;
  'value-label-end'?: string;
  'aria-label-start'?: string;
  'aria-valuetext-start'?: string;
  'aria-label-end'?: string;
  'aria-valuetext-end'?: string;
  name?: string;
  'name-start'?: string;
  'name-end'?: string;
  'data-aria-valuetext'?: string;
  'data-aria-label'?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  let attrs = '';
  Object.entries(restArgs).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (value) attrs += ` ${key}`;
    } else if (value !== undefined) {
      attrs += ` ${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}="${value}"`;
    }
  });
  await componentsPage.mount({
    html: `<mdc-slider${attrs}></mdc-slider>`,
    clearDocument: true,
  });
  const slider = componentsPage.page.locator('mdc-slider');
  await slider.waitFor();
  return slider;
};

test.describe('Slider Feature Scenarios', () => {
  test.skip('mdc-slider', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const sliderSheet = new StickerSheet(componentsPage, 'mdc-slider', 'margin: 0.25rem 0;');
      const options = { createNewRow: true };

      // Single-value slider
      sliderSheet.setAttributes({ min: 0, max: 100, value: 50, label: 'Volume' });
      await sliderSheet.createMarkupWithCombination({}, options);

      // Range slider
      sliderSheet.setAttributes({ range: true, min: 0, max: 100, 'value-start': 20, 'value-end': 80, label: 'Range' });
      await sliderSheet.createMarkupWithCombination({}, options);

      // Slider with icons
      sliderSheet.setAttributes({
        min: 0,
        max: 100,
        value: 50,
        'leading-icon': 'speaker-muted-bold',
        'trailing-icon': 'speaker-bold',
      });
      await sliderSheet.createMarkupWithCombination({}, options);

      // Slider with timeline labels
      sliderSheet.setAttributes({ min: 0, max: 100, value: 30, 'label-start': '00:00', 'label-end': '03:00' });
      await sliderSheet.createMarkupWithCombination({}, options);

      // Disabled slider
      sliderSheet.setAttributes({ min: 0, max: 100, value: 50, disabled: true });
      await sliderSheet.createMarkupWithCombination({}, options);

      // Soft-disabled slider
      sliderSheet.setAttributes({ min: 0, max: 100, value: 50, 'soft-disabled': true });
      await sliderSheet.createMarkupWithCombination({}, options);

      // Slider with step
      sliderSheet.setAttributes({ min: 0, max: 100, value: 40, step: 20 });
      await sliderSheet.createMarkupWithCombination({}, options);

      sliderSheet.setAttributes({
        min: 0,
        max: 120,
        step: 10,
        range: true,
        'value-start': 20,
        'value-end': 80,
        'value-label-start': '00:20',
        'value-label-end': '00:80',
        'label-start': '00:00',
        'label-end': '02:00',
      });
      await sliderSheet.createMarkupWithCombination({}, options);

      await sliderSheet.mountStickerSheet();
      // TODO: set focus on a particular slider to show tooltip
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-slider', {
          element: sliderSheet.getWrapperContainer(),
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility for single value', async () => {
      await setup({
        componentsPage,
        min: 0,
        max: 100,
        value: 35,
        label: 'Accessible Slider',
        'data-aria-label': 'Volume',
        'leading-icon': 'speaker-muted-bold',
        'trailing-icon': 'speaker-bold',
      });
      const slider = componentsPage.page.locator('mdc-slider');
      await expect(slider).toHaveAttribute('aria-valuemin', '0');
      await expect(slider).toHaveAttribute('aria-valuemax', '100');
      await expect(slider).toHaveAttribute('aria-valuenow', '35');
      await componentsPage.accessibility.checkForA11yViolations('slider-accessible');
    });

    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      await test.step('single value slider', async () => {
        const slider = await setup({
          componentsPage,
          min: 0,
          max: 100,
          value: 50,
          label: 'Test Slider',
          'data-aria-label': 'Volume',
          'leading-icon': 'speaker-muted-bold',
          'trailing-icon': 'speaker-bold',
          'value-label': '50',
          name: 'slider-volume',
        });
        await expect(slider).toHaveAttribute('min', '0');
        await expect(slider).toHaveAttribute('max', '100');
        await expect(slider).toHaveAttribute('value', '50');
        await expect(slider).toHaveAttribute('label', 'Test Slider');
        await expect(slider).toHaveAttribute('data-aria-label', 'Volume');
        await expect(slider).toHaveAttribute('leading-icon', 'speaker-muted-bold');
        await expect(slider).toHaveAttribute('trailing-icon', 'speaker-bold');
        await expect(slider).toHaveAttribute('value-label', '50');
        await expect(slider).toHaveAttribute('name', 'slider-volume');
      });

      await test.step('single value slider with steps', async () => {
        const slider = await setup({
          componentsPage,
          min: 0,
          max: 120,
          value: 50,
          step: 10,
          name: 'slider timeline',
          'data-aria-valuetext': 'Time stamp at 50 minutes',
          'label-start': '00:00',
          'label-end': '02:00',
          'value-label': '00:50',
        });
        await expect(slider).toHaveAttribute('min', '0');
        await expect(slider).toHaveAttribute('max', '120');
        await expect(slider).toHaveAttribute('value', '50');
        await expect(slider).toHaveAttribute('step', '10');
        await expect(slider).toHaveAttribute('name', 'slider timeline');
        await expect(slider).toHaveAttribute('data-aria-valuetext', 'Time stamp at 50 minutes');
        await expect(slider).toHaveAttribute('label-start', '00:00');
        await expect(slider).toHaveAttribute('label-end', '02:00');
        await expect(slider).toHaveAttribute('value-label', '00:50');
      });

      await test.step('range slider', async () => {
        const slider = await setup({
          componentsPage,
          range: true,
          min: 0,
          max: 100,
          'value-start': 20,
          'value-end': 80,
          label: 'Range Slider',
          'label-start': 'Low',
          'label-end': 'High',
          'value-label-start': '20',
          'value-label-end': '80',
          name: 'slider-range',
        });
        await expect(slider).toHaveAttribute('range');
        await expect(slider).toHaveAttribute('min', '0');
        await expect(slider).toHaveAttribute('max', '100');
        await expect(slider).toHaveAttribute('value-start', '20');
        await expect(slider).toHaveAttribute('value-end', '80');
        await expect(slider).toHaveAttribute('label', 'Range Slider');
        await expect(slider).toHaveAttribute('label-start', 'Low');
        await expect(slider).toHaveAttribute('label-end', 'High');
        await expect(slider).toHaveAttribute('value-label-start', '20');
        await expect(slider).toHaveAttribute('value-label-end', '80');
        await expect(slider).toHaveAttribute('name', 'slider-range');
      });

      await test.step('range slider with steps and timeline labels', async () => {
        const slider = await setup({
          componentsPage,
          range: true,
          min: 0,
          max: 120,
          step: 10,
          'value-start': 30,
          'value-end': 90,
          'label-start': '00:00',
          'label-end': '02:00',
          'value-label-start': '00:30',
          'value-label-end': '01:30',
          name: 'slider-range-timeline',
          'data-aria-label': 'Timeline Range',
        });
        await expect(slider).toHaveAttribute('range');
        await expect(slider).toHaveAttribute('min', '0');
        await expect(slider).toHaveAttribute('max', '120');
        await expect(slider).toHaveAttribute('step', '10');
        await expect(slider).toHaveAttribute('value-start', '30');
        await expect(slider).toHaveAttribute('value-end', '90');
        await expect(slider).toHaveAttribute('label-start', '00:00');
        await expect(slider).toHaveAttribute('label-end', '02:00');
        await expect(slider).toHaveAttribute('value-label-start', '00:30');
        await expect(slider).toHaveAttribute('value-label-end', '01:30');
        await expect(slider).toHaveAttribute('name', 'slider-range-timeline');
        await expect(slider).toHaveAttribute('data-aria-label', 'Timeline Range');
      });

      await test.step('step value is 5, user sets an even number', async () => {
        const slider = await setup({ componentsPage, min: 0, max: 100, step: 5, value: 42 });
        // Native input[type=range] snaps to nearest valid step (i.e. 40)
        await expect(slider).toHaveAttribute('value', '40');
      });

      await test.step('user provides a value out of range', async () => {
        // Value above max
        let slider = await setup({ componentsPage, min: 0, max: 100, value: 120 });
        await expect(slider).toHaveAttribute('value', '100');
        // Value below min
        slider = await setup({ componentsPage, min: 0, max: 100, value: -10 });
        await expect(slider).toHaveAttribute('value', '0');
      });

      await test.step('user provides a non-numeric value (NaN or other)', async () => {
        // Set initial valid value
        const slider = await setup({ componentsPage, min: 0, max: 100, value: 50 });
        await expect(slider).toHaveAttribute('value', '50');
        // Try to set NaN
        await componentsPage.setAttributes(slider, { value: 'NaN' });
        await expect(slider).toHaveAttribute('value', '50');
        // Try to set non-numeric string
        await componentsPage.setAttributes(slider, { value: 'abc' });
        await expect(slider).toHaveAttribute('value', '50');
      });

      /**
       * DISABLED & SOFT-DISABLED
       */
      await test.step('disabled slider', async () => {
        const slider = await setup({ componentsPage, min: 0, max: 100, value: 50, disabled: true });
        await expect(slider).toHaveAttribute('disabled');
        await expect(slider).toBeDisabled();
        await expect(slider).toHaveAttribute('aria-disabled', 'true');
      });
      await test.step('soft-disabled slider', async () => {
        const slider = await setup({ componentsPage, min: 0, max: 100, value: 50, 'soft-disabled': true });
        await expect(slider).toHaveAttribute('soft-disabled');
        await slider.focus();
        await expect(slider).toBeFocused();
        await expect(slider).toHaveAttribute('aria-disabled', 'true');
      });
    });

    /**
     * INTERACTIONS
     */
    await test.step('interactions', async () => {
      // Focus
      await test.step('component should be focusable with tab', async () => {
        const slider = await setup({ componentsPage, min: 0, max: 100, value: 50 });
        await componentsPage.actionability.pressTab();
        await expect(slider).toBeFocused();
      });

      // Keyboard
      await test.step('keyboard navigation changes value in single slider', async () => {
        const slider = await setup({ componentsPage, min: 0, max: 100, value: 50 });
        await componentsPage.actionability.pressTab();
        await expect(slider).toBeFocused();
        await componentsPage.page.keyboard.press(KEYS.ARROW_RIGHT);
        await expect(slider).toHaveAttribute('value', '51');
        await componentsPage.page.keyboard.press(KEYS.ARROW_LEFT);
        await expect(slider).toHaveAttribute('value', '50');
        await componentsPage.setAttributes(slider, { step: '5' });
        await componentsPage.page.keyboard.press(KEYS.ARROW_RIGHT);
        await expect(slider).toHaveAttribute('value', '55');
        await componentsPage.page.keyboard.press(KEYS.ARROW_LEFT);
        await expect(slider).toHaveAttribute('value', '50');
        await componentsPage.page.keyboard.press(KEYS.HOME);
        await expect(slider).toHaveAttribute('value', '0');
        await componentsPage.page.keyboard.press(KEYS.END);
        await expect(slider).toHaveAttribute('value', '100');
      });

      await test.step('keyboard navigation changes value in range slider', async () => {
        const slider = await setup({
          componentsPage,
          range: true,
          min: 0,
          max: 100,
          'value-start': 20,
          'value-end': 80,
        });
        await componentsPage.actionability.pressTab();
        await expect(slider).toBeFocused(); // FIXME: start thumb should be focused

        // Move start thumb right
        await componentsPage.page.keyboard.press(KEYS.ARROW_RIGHT);
        await expect(slider).toHaveAttribute('value-start', '21');
        // Move start thumb left
        await componentsPage.page.keyboard.press(KEYS.ARROW_LEFT);
        await expect(slider).toHaveAttribute('value-start', '20');

        // Move end thumb left (Shift+Tab to focus end thumb, if needed)
        await componentsPage.page.keyboard.press('Tab');
        await expect(slider).toBeFocused(); // FIXME: end thumb should be focused
        await componentsPage.page.keyboard.press(KEYS.ARROW_LEFT);
        await expect(slider).toHaveAttribute('value-end', '79');
        // Move end thumb right
        await componentsPage.page.keyboard.press(KEYS.ARROW_RIGHT);
        await expect(slider).toHaveAttribute('value-end', '80');

        // Set step and test increment
        await componentsPage.setAttributes(slider, { step: '5' });
        await componentsPage.page.keyboard.press(KEYS.ARROW_RIGHT);
        await expect(slider).toHaveAttribute('value-end', '85');
        await componentsPage.page.keyboard.press(KEYS.ARROW_LEFT);
        await expect(slider).toHaveAttribute('value-end', '80');

        // Home/End keys for start thumb
        await componentsPage.actionability.pressShiftTab();
        await expect(slider).toBeFocused();
        await componentsPage.page.keyboard.press(KEYS.HOME);
        await expect(slider).toHaveAttribute('value-start', '0');
        await componentsPage.page.keyboard.press(KEYS.END);
        await expect(slider).toHaveAttribute('value-start', '100');

        // Start thumb will not exceed end thumb
        await componentsPage.page.keyboard.press(KEYS.ARROW_RIGHT);
        await expect(slider).toHaveAttribute('value-start', '80');
        await componentsPage.page.keyboard.press(KEYS.ARROW_RIGHT);
        await expect(slider).toHaveAttribute('value-start', '80');

        // End thumb will not go below start thumb
        await componentsPage.page.keyboard.press(KEYS.ARROW_LEFT);
        await expect(slider).toHaveAttribute('value-end', '80');
        await componentsPage.page.keyboard.press(KEYS.ARROW_LEFT);
        await expect(slider).toHaveAttribute('value-end', '80');
      });

      await test.step('slider will not be focusable in disabled state', async () => {
        const slider = await setup({ componentsPage, min: 0, max: 100, value: 50, disabled: true });
        await componentsPage.actionability.pressTab();
        await expect(slider).not.toBeFocused();
      });

      await test.step('slider will be focusable in soft-disabled state', async () => {
        const slider = await setup({ componentsPage, min: 0, max: 100, value: 50, 'soft-disabled': true });
        await componentsPage.actionability.pressTab();
        await expect(slider).toBeFocused();
        // TODO: show tooltip to be visible
      });

      await test.step('range slider will not be focusable in disabled state', async () => {
        const slider = await setup({
          componentsPage,
          range: true,
          min: 0,
          max: 100,
          'value-start': 20,
          'value-end': 80,
          disabled: true,
        });
        await componentsPage.actionability.pressTab();
        await expect(slider).not.toBeFocused();
      });

      await test.step('range slider will be focusable in soft-disabled state', async () => {
        const slider = await setup({
          componentsPage,
          range: true,
          min: 0,
          max: 100,
          'value-start': 20,
          'value-end': 80,
          'soft-disabled': true,
        });
        await componentsPage.actionability.pressTab();
        await expect(slider).toBeFocused();
        // TODO: show tooltip to be visible
      });

      // Mouse/pointer
      await test.step('drag thumb to change value', async () => {
        // TODO: will update it once the component is built
      });
    });
  });
});
