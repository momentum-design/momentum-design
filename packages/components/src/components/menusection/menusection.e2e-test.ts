import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { ROLE } from '../../utils/roles';

type SetupOptions = {
  componentsPage: ComponentsPage;
  headerText?: string;
  ariaLabel?: string;
  prefixIcon?: string;
  showDivider?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <div role="${ROLE.MENU}">
        <mdc-menusection
          ${restArgs.headerText ? `header-text="${restArgs.headerText}"` : ''}
          ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
          ${restArgs.prefixIcon ? `prefix-icon="${restArgs.prefixIcon}"` : ''}
          ${restArgs.showDivider ? `show-divider="${restArgs.showDivider}"` : ''}
        >
          <mdc-menuitemradio name="option" value="1" label="Option 1"></mdc-menuitemradio>
          <mdc-menuitemradio name="option" value="2" label="Option 2"></mdc-menuitemradio>
          <mdc-menuitemcheckbox name="setting" value="notify" label="Enable notifications"></mdc-menuitemcheckbox>
        </mdc-menusection>
      </div>
    `,
    clearDocument: true,
  });

  const menusection = componentsPage.page.locator('mdc-menusection');
  await menusection.waitFor();
  return menusection;
};

const setupMultipleSections = async (componentsPage: ComponentsPage) => {
  await componentsPage.mount({
    html: `
      <div role="${ROLE.MENU}">
        <mdc-menusection header-text="Theme">
          <mdc-menuitemradio name="theme" value="light" label="Light"></mdc-menuitemradio>
          <mdc-menuitemradio name="theme" value="dark" checked label="Dark"></mdc-menuitemradio>
        </mdc-menusection>
        <mdc-menusection header-text="View">
          <mdc-menuitemradio name="view" value="grid" label="Grid"></mdc-menuitemradio>
          <mdc-menuitemradio name="view" value="list" checked label="List"></mdc-menuitemradio>
        </mdc-menusection>
      </div>
    `,
    clearDocument: true,
  });

  const sections = componentsPage.page.locator('mdc-menusection');
  await sections.first().waitFor();
  return {
    themeSection: sections.nth(0),
    viewSection: sections.nth(1),
  };
};

test('mdc-menusection', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await componentsPage.page.setViewportSize({ width: 600, height: 1300 });
    const menusectionSheet = new StickerSheet(componentsPage, 'mdc-menusection', 'margin: 0.25rem 0;');
    const options = { createNewRow: true };

    menusectionSheet.setAttributes({ 'header-text': 'Default Section', 'show-divider': true });
    menusectionSheet.setChildren(`
      <mdc-menuitem label="MenuItem1"></mdc-menuitem>
      <mdc-menuitem label="MenuItem2"></mdc-menuitem>
    `);
    await menusectionSheet.createMarkupWithCombination({}, options);
    menusectionSheet.setAttributes({ 'header-text': 'Settings Section', 'show-divider': true });
    menusectionSheet.setChildren(`
      <mdc-menuitemcheckbox indicator="none" label="Profile"></mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox checked label="Notifications"></mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox checked indicator="checkmark" label="Privacy"></mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox checked indicator="toggle" label="Location"></mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox checked disabled label="Restart"></mdc-menuitemcheckbox>
    `);
    await menusectionSheet.createMarkupWithCombination({}, options);
    menusectionSheet.setAttributes({ 'header-text': 'Select a color', 'show-divider': true });
    menusectionSheet.setChildren(`
      <mdc-menuitemradio name="color" indicator="none" label="Red"></mdc-menuitemradio>
      <mdc-menuitemradio name="color" checked label="Green"></mdc-menuitemradio>
      <mdc-menuitemradio name="color" indicator="checkmark" label="Blue"></mdc-menuitemradio>
      <mdc-menuitemradio name="color" disabled label="Black"></mdc-menuitemradio>
    `);
    await menusectionSheet.createMarkupWithCombination({}, options);
    menusectionSheet.setAttributes({ 'header-text': 'Multiple options'});
    menusectionSheet.setChildren(`
      <mdc-menuitem label="Save Text"></mdc-menuitem>
      <mdc-menuitemcheckbox name="style" indicator="none" label="Bold"></mdc-menuitemcheckbox>
      <mdc-menuitemcheckbox name="style" checked label="Italic"></mdc-menuitemcheckbox>
      <mdc-menuitemradio name="radio" indicator="checkmark" checked label="Zoom In"></mdc-menuitemradio>
      <mdc-menuitemradio name="radio" label="Zoom Out"></mdc-menuitemradio>
    `);
    await menusectionSheet.createMarkupWithCombination({}, options);
    await menusectionSheet.mountStickerSheet({ role: 'menu' });
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-menusection', {
        element: menusectionSheet.getWrapperContainer(),
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await test.step('screen reader support', async () => {
      await componentsPage.accessibility.checkForA11yViolations('menusection-accessibility');
    });
  });

  /**
   * BASIC FUNCTIONALITY
   */
  await test.step('basic functionality', async () => {
    // Default state
    await test.step('default state', async () => {
      const section = await setup({ componentsPage });
      await expect(section).toHaveAttribute('role', ROLE.GROUP);
      await expect(section.locator('mdc-menuitemradio')).toHaveCount(2);
      await expect(section.locator('mdc-menuitemcheckbox')).toHaveCount(1);
    });

    // With header text
    await test.step('with header text', async () => {
      const section = await setup({ componentsPage, headerText: 'Settings' });
      const header = section.locator('mdc-listheader[part*="header"]');
      await expect(header).toHaveText('Settings');
      await expect(section).toHaveAttribute('aria-label', 'Settings');
    });

    // With custom aria-label
    await test.step('with custom aria-label', async () => {
      const section = await setup({ componentsPage, ariaLabel: 'Custom Section' });
      await expect(section).toHaveAttribute('aria-label', 'Custom Section');
    });

    // With show-divider
    await test.step('with show-divider', async () => {
      const section = await setup({ componentsPage, showDivider: 'true' });
      const divider = section.locator('mdc-divider[part="divider"]');
      await expect(divider).toHaveCount(1);
    });

    // With prefix-icon
    await test.step('with prefix-icon', async () => {
      const section = await setup({ componentsPage, headerText: 'Settings', prefixIcon: 'settings' });
      const icon = section.locator('mdc-listheader mdc-icon[name="settings"]');
      await expect(icon).toHaveCount(1);
    });
  });

  /**
   * GROUPING BEHAVIOR
   */
  await test.step('grouping behavior', async () => {
    const { themeSection, viewSection } = await setupMultipleSections(componentsPage);

    // Test radio button grouping within section
    await test.step('radio button grouping', async () => {
      const lightRadio = themeSection.locator('mdc-menuitemradio[value="light"]');
      const darkRadio = themeSection.locator('mdc-menuitemradio[value="dark"]');

      await expect(darkRadio).toHaveAttribute('aria-checked', 'true');
      await lightRadio.click();
      await expect(lightRadio).toHaveAttribute('aria-checked', 'true');
      await expect(darkRadio).toHaveAttribute('aria-checked', 'false');
    });

    // Test independence between sections
    await test.step('section independence', async () => {
      const listRadio = viewSection.locator('mdc-menuitemradio[value="list"]');
      await expect(listRadio).toHaveAttribute('aria-checked', 'true');

      // Change selection in theme section shouldn't affect view section
      const lightRadio = themeSection.locator('mdc-menuitemradio[value="light"]');
      await lightRadio.click();
      await expect(listRadio).toHaveAttribute('aria-checked', 'true');
    });
  });
});
