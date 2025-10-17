import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { Size } from '../accordiongroup/accordiongroup.types';
import { KEYS } from '../../utils/keys';
import { SIZE } from '../accordiongroup/accordiongroup.constants';
import type { Variant } from '../accordionbutton/accordionbutton.types';
import { VARIANT } from '../accordionbutton/accordionbutton.constants';
import { ROLE } from '../../utils/roles';

type SetupOptions = {
  componentsPage: ComponentsPage;
  expanded?: boolean;
  disabled?: boolean;
  size?: Size;
  variant?: Variant;
  headerText?: string;
  prefixIcon?: string;
  children?: string;
  closeButtonAriaLabel?: string;
  openButtonAriaLabel?: string;
};

const defaultHeaderText = 'Header';
const defaultPrefixIcon = 'placeholder-bold';
const defaultContent = `<mdc-chip slot="leading-controls" label="Label"></mdc-chip>
  <mdc-icon slot="trailing-controls" name="${defaultPrefixIcon}"></mdc-icon>
  <mdc-icon slot="trailing-controls" name="${defaultPrefixIcon}"></mdc-icon>
  <mdc-chip slot="trailing-controls" label="Label"></mdc-chip>
  <mdc-badge slot="trailing-controls" type="counter" counter="911" max-counter="99"></mdc-badge>
  Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`;
const defaultCloseButtonAriaLabel = 'Close';
const defaultOpenButtonAriaLabel = 'Open';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-accordion
        ${restArgs.expanded ? 'expanded' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
        ${restArgs.prefixIcon ? `prefix-icon="${restArgs.prefixIcon}"` : ''}
        ${`close-button-aria-label="${restArgs.closeButtonAriaLabel ? restArgs.closeButtonAriaLabel : defaultCloseButtonAriaLabel}"`}
        ${`open-button-aria-label="${restArgs.openButtonAriaLabel ? restArgs.openButtonAriaLabel : defaultOpenButtonAriaLabel}"`}
        header-text="${restArgs.headerText ?? defaultHeaderText}"
      >
        ${restArgs.children}
      </mdc-accordion>
    `,
    clearDocument: true,
  });

  const accordion = componentsPage.page.locator('mdc-accordion');
  const headerButton = accordion.locator('[part="header-section"]');
  const content = accordion.locator('[part="body-section"]');
  const headerButtonSection = headerButton.locator('[part="trailing-header"]').locator('mdc-button');

  await accordion.waitFor();

  return { accordion, headerButton, headerButtonSection, content };
};

test.use({ viewport: { width: 500, height: 1000 } });
test.describe('Accordion Feature Scenarios', () => {
  test('mdc-accordion', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const accordionSheet = new StickerSheet(componentsPage, 'mdc-accordion', 'margin: 0.25rem 0;');
      const options = { createNewRow: true };

      // Default accordion (collapsed)
      accordionSheet.setAttributes({
        'header-text': defaultHeaderText,
        'prefix-icon': defaultPrefixIcon,
        'open-button-aria-label': defaultOpenButtonAriaLabel,
        'close-button-aria-label': defaultCloseButtonAriaLabel,
      });
      await accordionSheet.createMarkupWithCombination({}, options);

      // Expanded accordion
      accordionSheet.setAttributes({
        'header-text': defaultHeaderText,
        'prefix-icon': defaultPrefixIcon,
        'open-button-aria-label': defaultOpenButtonAriaLabel,
        'close-button-aria-label': defaultCloseButtonAriaLabel,
        expanded: true,
      });
      accordionSheet.setChildren(defaultContent);
      await accordionSheet.createMarkupWithCombination({ variant: VARIANT, size: SIZE }, options);

      // Disabled state
      accordionSheet.setAttributes({
        'header-text': defaultHeaderText,
        'prefix-icon': defaultPrefixIcon,
        'open-button-aria-label': defaultOpenButtonAriaLabel,
        'close-button-aria-label': defaultCloseButtonAriaLabel,
        disabled: true,
      });
      await accordionSheet.createMarkupWithCombination({}, options);

      await accordionSheet.mountStickerSheet();
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-accordion', {
          element: accordionSheet.getWrapperContainer(),
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await setup({ componentsPage });
      await componentsPage.accessibility.checkForA11yViolations('accordion-default');
    });

    /**
     * RENDERING AND VISUAL STATES
     */
    await test.step('rendering and visual states', async () => {
      await test.step('render accordion with default settings', async () => {
        const { accordion, headerButton, headerButtonSection } = await setup({ componentsPage });

        await expect(accordion).toHaveAttribute('header-text', defaultHeaderText);
        await expect(headerButton.locator('div[part="leading-header"]').locator('div[aria-level]')).toHaveAttribute(
          'role',
          ROLE.HEADING,
        );
        await expect(headerButtonSection).toHaveAttribute('aria-label', defaultOpenButtonAriaLabel);
        await expect(headerButtonSection).toHaveAttribute('role', ROLE.BUTTON);
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
      });

      await test.step('render accordion with labels', async () => {
        const { accordion } = await setup({
          componentsPage,
          children: `
          <mdc-chip slot="leading-controls" label="New"></mdc-chip>
          <mdc-chip slot="trailing-controls" label="Updated"></mdc-chip>
        `,
        });

        const leadingChip = accordion.locator('mdc-chip[slot="leading-controls"]');
        const trailingChip = accordion.locator('mdc-chip[slot="trailing-controls"]');

        await expect(leadingChip).toBeVisible();
        await expect(trailingChip).toBeVisible();
        await expect(leadingChip).toHaveText('New');
        await expect(trailingChip).toHaveText('Updated');
      });

      await test.step('render expanded accordion', async () => {
        const { content, headerButtonSection } = await setup({
          componentsPage,
          expanded: true,
          children: 'Expanded content',
        });

        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'true');
        await expect(headerButtonSection).toHaveAttribute('aria-label', defaultCloseButtonAriaLabel);
        await expect(content).toBeVisible();
      });

      await test.step('render empty accordion content', async () => {
        const { accordion, headerButtonSection, content } = await setup({
          componentsPage,
          children: '',
          expanded: true,
        });

        await expect(accordion.locator('div[part="leading-header"]').locator('div[aria-level]')).toHaveAttribute(
          'role',
          ROLE.HEADING,
        );
        await expect(headerButtonSection).toHaveAttribute('role', ROLE.BUTTON);
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'true');
        await expect(content).toBeEmpty();
        await expect(content).toHaveAttribute('role', ROLE.REGION);
      });

      await test.step('render accordion with invalid icon', async () => {
        const { accordion, headerButtonSection } = await setup({ componentsPage, prefixIcon: 'invalid-icon' });

        await expect(accordion).toHaveAttribute('prefix-icon', 'invalid-icon');
        await expect(headerButtonSection).toHaveAttribute('role', ROLE.BUTTON);
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
      });
    });

    /**
     * USER INTERACTION
     */
    await test.step('user interaction', async () => {
      await test.step('mouse click on header', async () => {
        const { accordion, headerButtonSection, content } = await setup({ componentsPage });

        // Initially collapsed
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(headerButtonSection).toHaveAttribute('aria-label', defaultOpenButtonAriaLabel);
        await expect(accordion).not.toHaveAttribute('expanded');
        await expect(content).not.toBeVisible();

        // Expand
        let waitForShownEvent = await componentsPage.waitForEvent(accordion, 'shown');
        await headerButtonSection.click();
        await waitForShownEvent();
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'true');
        await expect(headerButtonSection).toHaveAttribute('aria-label', defaultCloseButtonAriaLabel);
        await expect(accordion).toHaveAttribute('expanded');
        await expect(content).toBeVisible();
        await expect(content).toHaveAttribute('role', ROLE.REGION);

        // Collapse
        waitForShownEvent = await componentsPage.waitForEvent(accordion, 'shown');
        await headerButtonSection.click();
        await waitForShownEvent();
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(headerButtonSection).toHaveAttribute('aria-label', defaultOpenButtonAriaLabel);
        await expect(accordion).not.toHaveAttribute('expanded');
        await expect(content).not.toBeVisible();
      });

      await test.step('keyboard navigation', async () => {
        const { accordion, headerButtonSection, content } = await setup({ componentsPage, children: 'Content' });

        // Focus the header button
        await componentsPage.actionability.pressTab();
        await expect(headerButtonSection).toBeFocused();

        // Test Enter key
        let waitForShownEvent = await componentsPage.waitForEvent(accordion, 'shown');
        await headerButtonSection.press(KEYS.ENTER);
        await waitForShownEvent();
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'true');
        await expect(headerButtonSection).toHaveAttribute('aria-label', defaultCloseButtonAriaLabel);
        await expect(accordion).toHaveAttribute('expanded');
        await expect(content).toBeVisible();
        await expect(content).toHaveAttribute('role', ROLE.REGION);

        // Test Space key
        waitForShownEvent = await componentsPage.waitForEvent(accordion, 'shown');
        await headerButtonSection.press(KEYS.SPACE);
        await waitForShownEvent();
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(headerButtonSection).toHaveAttribute('aria-label', defaultOpenButtonAriaLabel);
        await expect(accordion).not.toHaveAttribute('expanded');
        await expect(content).not.toBeVisible();
      });

      await test.step('disabled state', async () => {
        const { accordion, headerButtonSection, content } = await setup({ componentsPage, disabled: true });

        await expect(accordion).toHaveAttribute('aria-disabled', 'true');

        // Should not expand when clicked
        await headerButtonSection.click({ force: true });
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(headerButtonSection).toHaveAttribute('aria-label', defaultOpenButtonAriaLabel);
        await expect(content).not.toBeVisible();

        // Should not respond to keyboard
        await headerButtonSection.focus();
        await headerButtonSection.press(KEYS.ENTER);
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(headerButtonSection).toHaveAttribute('aria-label', defaultOpenButtonAriaLabel);
        await expect(content).not.toBeVisible();
      });
    });
  });
});
