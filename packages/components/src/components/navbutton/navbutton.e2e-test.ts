import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  'icon-name'?: string;
  disabled?: boolean;
  'badge-type'?: string;
  counter?: number;
  'tooltip-text'?: string;
  'max-counter'?: number;
  'show-label'?: boolean;
  'aria-label'?: string;
  secondButtonForFocus?: boolean;
};

const primaryLabel = 'Navigation Button';
const iconName = 'placeholder-regular';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
        <mdc-navbutton
          ${restArgs.label ? `label="${restArgs.label}"` : ''}
          ${restArgs['icon-name'] ? `icon-name="${restArgs['icon-name']}"` : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs['badge-type'] ? `badge-type="${restArgs['badge-type']}"` : ''}
          ${restArgs.counter ? `counter="${restArgs.counter}"` : ''}
          ${restArgs['max-counter'] ? `max-counter="${restArgs['max-counter']}"` : ''}
          ${restArgs['tooltip-text'] ? `tooltip-text="${restArgs['tooltip-text']}"` : ''}
          ${restArgs['show-label'] ? 'show-label' : ''}
          ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
        >
        </mdc-navbutton>
      ${restArgs.secondButtonForFocus ? '<mdc-navbutton label="Second Button" icon-name="placeholder-regular" show-label></mdc-navbutton></div>' : ''}
    `,
    clearDocument: true,
  });

  const element = restArgs.secondButtonForFocus
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-navbutton');
  await element.waitFor();

  // always return the first button:
  const firstButton = componentsPage.page.locator('mdc-navbutton').first();
  return firstButton;
};

test('mdc-navbutton', async ({ componentsPage }) => {
  /**
   * RENDERING AND VISUAL STATES
   */
  await test.step('rendering and visual states', async () => {
    await test.step('render navbutton with label and icon', async () => {
      await setup({
        componentsPage,
        label: primaryLabel,
        'icon-name': iconName,
        'show-label': true,
      });

      const text = componentsPage.page.locator('mdc-text');
      const icon = componentsPage.page.locator('mdc-icon');

      await text.waitFor();
      await icon.waitFor();

      await test.step('should have correct text content', async () => {
        const textContent = await text.textContent();
        expect(textContent?.trim()).toBe(primaryLabel);
      });

      await test.step('should have correct icon', async () => {
        const iconNameAttr = await icon.getAttribute('name');
        expect(iconNameAttr).toBe(iconName);
      });
    });

    await test.step('render navbutton without label (collapsed)', async () => {
      const navbutton = await setup({
        componentsPage,
        label: primaryLabel,
        'icon-name': iconName,
        'show-label': false,
        'aria-label': primaryLabel,
      });

      const text = componentsPage.page.locator('mdc-text');
      const icon = componentsPage.page.locator('mdc-icon');

      await icon.waitFor();

      await test.step('should not show text label', async () => {
        await expect(text).not.toBeVisible();
      });

      await test.step('should have aria-label for accessibility', async () => {
        await expect(navbutton).toHaveAttribute('aria-label', primaryLabel);
      });
    });

    await test.step('render navbutton with badges', async () => {
      await test.step('render with dot badge', async () => {
        await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'show-label': true,
          'badge-type': 'dot',
        });

        const badge = componentsPage.page.locator('mdc-badge');
        await badge.waitFor();

        const badgeType = await badge.getAttribute('type');
        expect(badgeType).toBe('dot');
      });

      await test.step('render with counter badge', async () => {
        await setup({
          componentsPage,
          label: primaryLabel,
          'icon-name': iconName,
          'show-label': true,
          'badge-type': 'counter',
          counter: 10,
        });

        const badge = componentsPage.page.locator('mdc-badge');
        await badge.waitFor();

        const badgeType = await badge.getAttribute('type');
        const counter = await badge.getAttribute('counter');
        expect(badgeType).toBe('counter');
        expect(counter).toBe('10');
      });
    });

    await test.step('render disabled navbutton', async () => {
      const navbutton = await setup({
        componentsPage,
        label: primaryLabel,
        'icon-name': iconName,
        'show-label': true,
        disabled: true,
      });

      await test.step('should have disabled attribute', async () => {
        await expect(navbutton).toHaveAttribute('disabled');
      });

      await test.step('should have aria-disabled', async () => {
        await expect(navbutton).toHaveAttribute('aria-disabled', 'true');
      });
    });

    await test.step('component should show tooltip when collapsed and tooltip text is passed', async () => {
      const navbutton = await setup({
        componentsPage,
        label: primaryLabel,
        'icon-name': iconName,
        'show-label': false,
        'tooltip-text': 'This is a tooltip Text',
      });

      await componentsPage.actionability.pressTab();
      await expect(navbutton).toBeFocused();

      const tooltip = componentsPage.page.locator('mdc-tooltip');
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toHaveText('This is a tooltip Text');
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const navbutton = await setup({
      componentsPage,
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
    });

    // Disabled button
    await test.step('attribute disabled should be present on button', async () => {
      await componentsPage.setAttributes(navbutton, {
        disabled: '',
      });
      await expect(navbutton).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(navbutton, 'disabled');
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await setup({
      componentsPage,
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
    });
    await componentsPage.accessibility.checkForA11yViolations('navbutton-default');
  });

  /**
   * VISUAL REGRESSION
   *//**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const navbuttonSheet = new StickerSheet(componentsPage, 'mdc-navbutton', 'margin: 1rem;');
    const options = { createNewRow: true };

    // Basic navbutton with label and icon
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    // Active navbutton
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      active: true,
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    // navbutton without label (collapsed state)
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    // navbutton with dot badge
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      'badge-type': 'dot',
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    // navbutton with counter badge
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      'badge-type': 'counter',
      counter: 5,
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    // navbutton with high counter badge
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      'badge-type': 'counter',
      counter: 150,
      'max-counter': 99,
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    // Disabled navbutton
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      disabled: true,
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    // Soft-disabled navbutton
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      'soft-disabled': true,
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    // Active navbutton with badge (collapsed)
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      active: true,
      'badge-type': 'counter',
      counter: 3,
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    // navbutton with dot badge (collapsed)
    navbuttonSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      active: true,
      'badge-type': 'dot',
      'aria-label': primaryLabel,
    });
    await navbuttonSheet.createMarkupWithCombination({}, options);

    await navbuttonSheet.mountStickerSheet({ role: 'navigation' });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-navbutton', {
        element: navbuttonSheet.getWrapperContainer(),
      });
    });
  });
});
