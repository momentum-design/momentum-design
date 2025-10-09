import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { IconNames } from '../icon/icon.types';

import { DEFAULTS, TAB_VARIANTS } from './tab.constants';
import type { Variant } from './tab.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  active?: boolean;
  disabled?: boolean;
  softDisabled?: boolean;
  iconName?: IconNames;
  role?: string;
  tabIndex?: number;
  text?: string;
  variant?: Variant;
};

const ICON_PLACEHOLDER = 'placeholder-bold';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="wrapper" role="tablist">
      <mdc-tab
        ${restArgs.active ? 'active' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.softDisabled ? 'soft-disabled' : ''}
        ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
        ${restArgs.tabIndex ? `tabindex="${restArgs.tabIndex}"` : ''}
        ${restArgs.text ? `text="${restArgs.text}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : DEFAULTS.VARIANT}>
        <mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>
      </mdc-tab>
      <mdc-tab text="Dummy Tab"></mdc-tab>
    </div>
    `,
    clearDocument: true,
  });

  const tabs = componentsPage.page.locator('div#wrapper');
  await tabs.waitFor();

  // return the first tab only, the second tab is a dummy tab
  const tab = componentsPage.page.locator('mdc-tab').first();
  return tab;
};

test.use({ viewport: { width: 800, height: 1000 } });
test('mdc-tab', async ({ componentsPage }) => {
  const tab = await setup({ componentsPage });
  await componentsPage.setAttributes(tab, { text: 'Label' });

  await test.step('attributes and interactions', async () => {
    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      // Default values for tab
      await test.step('default attributes on tab', async () => {
        await expect(tab).toHaveAttribute('aria-selected', 'false');
        await expect(tab).toHaveRole('tab');
        await expect(tab).toHaveAttribute('tabindex', '0');
        await expect(tab).toHaveAttribute('text', 'Label');
        await expect(tab).toHaveAttribute('variant', DEFAULTS.VARIANT);
        await expect(tab).not.toHaveAttribute('active');
        await expect(tab).not.toHaveAttribute('disabled');
        await expect(tab).not.toHaveAttribute('icon-name');
      });

      // active
      await test.step('attribute active should be present on tab', async () => {
        await componentsPage.setAttributes(tab, { active: '' });
        await expect(tab).toHaveAttribute('active');
        await expect(tab).toHaveAttribute('aria-selected', 'true');
        await componentsPage.removeAttribute(tab, 'active');
        await expect(tab).toHaveAttribute('aria-selected', 'false');
      });

      // disabled
      await test.step('attribute disabled should be present on tab', async () => {
        await componentsPage.setAttributes(tab, { disabled: '' });
        await expect(tab).toHaveAttribute('disabled');
        await expect(tab).toHaveAttribute('tabindex', '-1');
        await expect(tab).toHaveAttribute('aria-disabled', 'true');
        await componentsPage.removeAttribute(tab, 'disabled');
        await expect(tab).toHaveAttribute('tabindex', '0');
        await expect(tab).not.toHaveAttribute('aria-disabled');
      });

      // soft-disabled
      await test.step('attribute soft-disabled should be present on tab', async () => {
        await componentsPage.setAttributes(tab, { 'soft-disabled': '' });
        await expect(tab).toHaveAttribute('soft-disabled');
        await expect(tab).toHaveAttribute('aria-disabled', 'true');
        await componentsPage.removeAttribute(tab, 'soft-disabled');
        await expect(tab).not.toHaveAttribute('aria-disabled');
      });

      // icon-name
      await test.step('attribute icon-name should be present on tab', async () => {
        await componentsPage.setAttributes(tab, { 'icon-name': ICON_PLACEHOLDER });
        await expect(tab.locator('mdc-icon')).toHaveAttribute('name', ICON_PLACEHOLDER);
        await componentsPage.removeAttribute(tab, 'icon-name');
      });

      // tabIndex
      await test.step('attribute tabindex should be present on tab', async () => {
        await componentsPage.setAttributes(tab, { tabindex: '1' });
        await expect(tab).toHaveAttribute('tabindex', '1');
        await componentsPage.setAttributes(tab, { tabindex: '0' });
      });

      // variant
      // eslint-disable-next-line no-restricted-syntax
      for (const tabVariant of Object.values(TAB_VARIANTS)) {
        // eslint-disable-next-line no-await-in-loop
        await test.step(`attribute variant ${tabVariant} should be present as expected`, async () => {
          await componentsPage.setAttributes(tab, { variant: tabVariant });
          await expect(tab).toHaveAttribute('variant', tabVariant);
        });
      }

      // invalid tab variant
      const tabVariant = 'invalid-variant';
      await test.step(`attribute variant with invalid value ${tabVariant}, it should update to default`, async () => {
        await componentsPage.setAttributes(tab, { variant: tabVariant });
        await expect(tab).toHaveAttribute('variant', DEFAULTS.VARIANT);
      });
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('mdc-tab key pressed and focused events', async () => {
    await test.step('tab focus event', async () => {
      await componentsPage.actionability.pressTab();
      await expect(tab).toBeFocused();
      await componentsPage.page.keyboard.press('ArrowRight');
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-tab');

    // Add badge to tab
    stickerSheet.setChildren('<mdc-badge slot="badge" type="counter" counter="1"></mdc-badge>');

    // Tabs with label, badge and icon - not active
    stickerSheet.setAttributes({ text: 'Inactive', 'icon-name': ICON_PLACEHOLDER });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label, badge and icon - active
    stickerSheet.setAttributes({ text: 'Active', 'icon-name': ICON_PLACEHOLDER, active: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label, badge and icon - active - disabled
    stickerSheet.setAttributes({ text: 'Active Disabled', 'icon-name': ICON_PLACEHOLDER, active: '', disabled: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label, badge and icon - not active - disabled
    stickerSheet.setAttributes({ text: 'Inactive Disabled', 'icon-name': ICON_PLACEHOLDER, disabled: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label, badge and icon - active - soft-disabled
    stickerSheet.setAttributes({
      text: 'Active Soft Disabled',
      'icon-name': ICON_PLACEHOLDER,
      active: '',
      'soft-disabled': '',
    });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label, badge and icon - not active - soft-disabled
    stickerSheet.setAttributes({ text: 'Inactive Soft Disabled', 'icon-name': ICON_PLACEHOLDER, 'soft-disabled': '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Remove badge from tab
    stickerSheet.setChildren('');

    // Tabs with label and icon - not active
    stickerSheet.setAttributes({ text: 'Inactive', 'icon-name': ICON_PLACEHOLDER });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label and icon - active
    stickerSheet.setAttributes({ text: 'Active', 'icon-name': ICON_PLACEHOLDER, active: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label and icon - not active - disabled
    stickerSheet.setAttributes({ text: 'Inactive Disabled', 'icon-name': ICON_PLACEHOLDER, disabled: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label and icon - active - disabled
    stickerSheet.setAttributes({ text: 'Active Disabled', 'icon-name': ICON_PLACEHOLDER, active: '', disabled: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label and icon - not active - soft-disabled
    stickerSheet.setAttributes({ text: 'Inactive Soft Disabled', 'icon-name': ICON_PLACEHOLDER, 'soft-disabled': '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label and icon - active - soft-disabled
    stickerSheet.setAttributes({
      text: 'Active Soft Disabled',
      'icon-name': ICON_PLACEHOLDER,
      active: '',
      'soft-disabled': '',
    });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label - not active
    stickerSheet.setAttributes({ text: 'Inactive', 'icon-name': '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label - active
    stickerSheet.setAttributes({ text: 'Active', 'icon-name': '', active: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label - not active - disabled
    stickerSheet.setAttributes({ text: 'Inactive Disabled', 'icon-name': '', disabled: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label - active - disabled
    stickerSheet.setAttributes({ text: 'Active Disabled', 'icon-name': '', active: '', disabled: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label - not active - soft-disabled
    stickerSheet.setAttributes({ text: 'Inactive Soft Disabled', 'icon-name': '', 'soft-disabled': '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with label - active - soft-disabled
    stickerSheet.setAttributes({ text: 'Active Soft Disabled', 'icon-name': '', active: '', 'soft-disabled': '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with icon only - not active
    stickerSheet.setAttributes({ text: '', 'icon-name': ICON_PLACEHOLDER, 'aria-label': 'Inactive' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with icon only - active
    stickerSheet.setAttributes({ text: '', 'icon-name': ICON_PLACEHOLDER, 'aria-label': 'Active', active: '' });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with icon only - not active - disabled
    stickerSheet.setAttributes({
      text: '',
      'icon-name': ICON_PLACEHOLDER,
      'aria-label': 'Inactive Disabled',
      disabled: '',
    });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with icon only - active - disabled
    stickerSheet.setAttributes({
      text: '',
      'icon-name': ICON_PLACEHOLDER,
      'aria-label': 'Active Disabled',
      active: '',
      disabled: '',
    });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with icon only - not active - soft-disabled
    stickerSheet.setAttributes({
      text: '',
      'icon-name': ICON_PLACEHOLDER,
      'aria-label': 'Inactive Soft Disabled',
      'soft-disabled': '',
    });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    // Tabs with icon only - active - soft-disabled
    stickerSheet.setAttributes({
      text: '',
      'icon-name': ICON_PLACEHOLDER,
      'aria-label': 'Active Soft Disabled',
      active: '',
      'soft-disabled': '',
    });
    await stickerSheet.createMarkupWithCombination({ variant: Object.values(TAB_VARIANTS) });

    await stickerSheet.mountStickerSheet();
    const container = stickerSheet.getWrapperContainer();

    // Add role tablist to the row wrapper. A tab with role tab requires parent to have role tablist.
    await container.evaluate(wrapper => {
      const rowWrappers = wrapper.querySelectorAll('.componentRowWrapper') as NodeListOf<HTMLElement>;
      rowWrappers.forEach(rowWrapper => {
        const modifiedRowWrapper = rowWrapper;
        modifiedRowWrapper.setAttribute('role', 'tablist');
      });
    });

    await test.step('matches screenshot of tab element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-tab', {
        element: container,
      });
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessbility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('mdc-tab');
  });
});
