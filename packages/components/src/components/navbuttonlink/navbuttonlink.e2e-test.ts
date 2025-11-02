import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  'icon-name'?: string;
  disabled?: boolean;
  'postfix-icon'?: string;
  'tooltip-text'?: string;
  'show-label'?: boolean;
  'aria-label'?: string;
  secondButtonForFocus?: boolean;
};

const primaryLabel = 'Navigation Button Link';
const iconName = 'placeholder-regular';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
        <mdc-navbuttonlink
          ${restArgs.label ? `label="${restArgs.label}"` : ''}
          ${restArgs['icon-name'] ? `icon-name="${restArgs['icon-name']}"` : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs['postfix-icon'] ? `postfix-icon="${restArgs['postfix-icon']}"` : ''}
          ${restArgs['tooltip-text'] ? `tooltip-text="${restArgs['tooltip-text']}"` : ''}
          ${restArgs['show-label'] ? 'show-label' : ''}
          ${restArgs['aria-label'] ? `aria-label="${restArgs['aria-label']}"` : ''}
        >
        </mdc-navbuttonlink>
      ${restArgs.secondButtonForFocus ? '<mdc-navbuttonlink label="Second Button" icon-name="placeholder-regular" show-label></mdc-navbuttonlink></div>' : ''}
    `,
    clearDocument: true,
  });

  const element = restArgs.secondButtonForFocus
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-navbuttonlink');
  await element.waitFor();

  // always return the first button:
  const firstButton = componentsPage.page.locator('mdc-navbuttonlink').first();
  return firstButton;
};

test('mdc-navbuttonlink', async ({ componentsPage }) => {
  /**
   * RENDERING AND VISUAL STATES
   */
  await test.step('rendering and visual states', async () => {
    await test.step('render navbuttonlinklink with label and icon', async () => {
      await setup({
        componentsPage,
        label: primaryLabel,
        'icon-name': iconName,
        'show-label': true,
        'postfix-icon': 'pop-out-bold',
      });

      const text = componentsPage.page.locator('mdc-text');
      const icon = componentsPage.page.locator('mdc-icon').first();

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

      await test.step('should show correct postfix icon', async () => {
        const postfixIcon = componentsPage.page.locator('mdc-icon').nth(1);
        await postfixIcon.waitFor();
        const postfixIconNameAttr = await postfixIcon.getAttribute('name');
        expect(postfixIconNameAttr).toBe('pop-out-bold');
      });
    });

    await test.step('render navbuttonlink without label (collapsed)', async () => {
      const navbuttonlink = await setup({
        componentsPage,
        label: primaryLabel,
        'icon-name': iconName,
        'show-label': false,
        'aria-label': primaryLabel,
        'postfix-icon': 'pop-out-bold',
      });

      const text = componentsPage.page.locator('mdc-text');
      const icon = componentsPage.page.locator('mdc-icon').first();

      await icon.waitFor();

      await test.step('should not show text label', async () => {
        await expect(text).not.toBeVisible();
      });

      await test.step('should only show 1 icon', async () => {
        expect((await componentsPage.page.locator('mdc-icon').all()).length).toBe(1);
      });

      await test.step('should have aria-label for accessibility', async () => {
        await expect(navbuttonlink).toHaveAttribute('aria-label', primaryLabel);
      });
    });

    await test.step('render disabled navbuttonlink', async () => {
      const navbuttonlink = await setup({
        componentsPage,
        label: primaryLabel,
        'icon-name': iconName,
        'show-label': true,
        disabled: true,
      });

      await test.step('should have disabled attribute', async () => {
        await expect(navbuttonlink).toHaveAttribute('disabled');
      });

      await test.step('should have aria-disabled', async () => {
        await expect(navbuttonlink).toHaveAttribute('aria-disabled', 'true');
      });
    });

    await test.step('component should show tooltip when collapsed and tooltip text is passed', async () => {
      const navbuttonlink = await setup({
        componentsPage,
        label: primaryLabel,
        'icon-name': iconName,
        'show-label': false,
        'tooltip-text': 'This is a tooltip Text',
      });

      await componentsPage.actionability.pressTab();
      await expect(navbuttonlink).toBeFocused();

      const tooltip = componentsPage.page.locator('mdc-tooltip');
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toHaveText('This is a tooltip Text');
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const navbuttonlink = await setup({
      componentsPage,
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
    });

    // href attribute
    await test.step('attribute href should set the link URL', async () => {
      const testUrl = 'https://www.example.com';
      await componentsPage.setAttributes(navbuttonlink, {
        href: testUrl,
      });
      await expect(navbuttonlink.locator('a')).toHaveAttribute('href', testUrl);
      await componentsPage.removeAttribute(navbuttonlink, 'href');
    });

    // Disabled button
    await test.step('attribute disabled should be present on button', async () => {
      await componentsPage.setAttributes(navbuttonlink, {
        disabled: '',
      });
      await expect(navbuttonlink).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(navbuttonlink, 'disabled');
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
    await componentsPage.accessibility.checkForA11yViolations('navbuttonlink-default');
  });

  /**
   * VISUAL REGRESSION
   *//**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const navbuttonlinkSheet = new StickerSheet(componentsPage, 'mdc-navbuttonlink', 'margin: 1rem;');
    const options = { createNewRow: true };

    // Basic navbuttonlink with label and icon
    navbuttonlinkSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
    });
    await navbuttonlinkSheet.createMarkupWithCombination({}, options);

    // Active navbuttonlink
    navbuttonlinkSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      active: true,
    });
    await navbuttonlinkSheet.createMarkupWithCombination({}, options);

    // navbuttonlink without label (collapsed state)
    navbuttonlinkSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
    });
    await navbuttonlinkSheet.createMarkupWithCombination({}, options);

    // navbuttonlink with postfix icon expanded
    navbuttonlinkSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      'postfix-icon': 'pop-out-bold',
    });
    await navbuttonlinkSheet.createMarkupWithCombination({}, options);

    // Disabled navbuttonlink
    navbuttonlinkSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      disabled: true,
    });
    await navbuttonlinkSheet.createMarkupWithCombination({}, options);

    // Soft-disabled navbuttonlink
    navbuttonlinkSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      'show-label': true,
      'soft-disabled': true,
    });
    await navbuttonlinkSheet.createMarkupWithCombination({}, options);

    // navbuttonlink (collapsed)
    navbuttonlinkSheet.setAttributes({
      label: primaryLabel,
      'icon-name': iconName,
      active: true,
      'aria-label': primaryLabel,
    });
    await navbuttonlinkSheet.createMarkupWithCombination({}, options);

    await navbuttonlinkSheet.mountStickerSheet({ role: 'navigation' });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-navbuttonlink', {
        element: navbuttonlinkSheet.getWrapperContainer(),
      });
    });
  });
});
