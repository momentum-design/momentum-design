import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { Size } from '../accordiongroup/accordiongroup.types';
import { KEYS } from '../../utils/keys';
import { SIZE } from '../accordiongroup/accordiongroup.constants';
import { ROLE } from '../../utils/roles';

import type { Variant } from './accordionbutton.types';
import { VARIANT } from './accordionbutton.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  expanded?: boolean;
  disabled?: boolean;
  size?: Size;
  variant?: Variant;
  headerText?: string;
  prefixIcon?: string;
  children?: string;
};

const defaultHeaderText = 'Accordion Header';
const defaultPrefixIcon = 'placeholder-bold';
const defaultContent =
  'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-accordionbutton
        ${restArgs.expanded ? 'expanded' : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs.size ? `size="${restArgs.size}"` : ''}
        ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
        ${restArgs.prefixIcon ? `prefix-icon="${restArgs.prefixIcon}"` : ''}
        header-text="${restArgs.headerText ?? defaultHeaderText}"
      >
        ${restArgs.children}
      </mdc-accordionbutton>
    `,
    clearDocument: true,
  });

  const accordionButton = componentsPage.page.locator('mdc-accordionbutton');
  const headerButton = accordionButton.locator('[part="header-section"]');
  const content = accordionButton.locator('[part="body-section"]');
  const headerButtonSection = headerButton.locator('[part="header-button-section"]');

  await accordionButton.waitFor();

  return { accordionButton, headerButton, headerButtonSection, content };
};

test.use({ viewport: { width: 500, height: 1000 } });
test.describe('AccordionButton Feature Scenarios', () => {
  test('mdc-accordionbutton', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const accordionSheet = new StickerSheet(componentsPage, 'mdc-accordionbutton', 'margin: 0.25rem 0;');
      const options = { createNewRow: true };

      // Default accordion button (collapsed)
      accordionSheet.setAttributes({ 'header-text': defaultHeaderText, 'prefix-icon': defaultPrefixIcon });
      await accordionSheet.createMarkupWithCombination({}, options);

      // Expanded accordion button
      accordionSheet.setAttributes({
        'header-text': defaultHeaderText,
        'prefix-icon': defaultPrefixIcon,
        expanded: true,
      });
      accordionSheet.setChildren(defaultContent);
      await accordionSheet.createMarkupWithCombination({ variant: VARIANT, size: SIZE }, options);

      // Disabled state
      accordionSheet.setAttributes({
        'header-text': defaultHeaderText,
        'prefix-icon': defaultPrefixIcon,
        disabled: true,
      });
      await accordionSheet.createMarkupWithCombination({}, options);

      await accordionSheet.mountStickerSheet();
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-accordionbutton', {
          element: accordionSheet.getWrapperContainer(),
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await setup({ componentsPage });
      await componentsPage.accessibility.checkForA11yViolations('accordionbutton-default');
    });

    /**
     * RENDERING AND VISUAL STATES
     */
    await test.step('rendering and visual states', async () => {
      await test.step('render accordion button with default settings', async () => {
        const { headerButton, headerButtonSection } = await setup({ componentsPage });

        await expect(headerButton).toHaveAttribute('role', ROLE.HEADING);
        await expect(headerButton).toHaveAttribute('aria-level', '3');
        await expect(headerButtonSection).toHaveAttribute('role', ROLE.BUTTON);
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        expect(await headerButtonSection.textContent()).toContain(defaultHeaderText);
      });

      await test.step('render accordion button with prefix icon', async () => {
        const { headerButton } = await setup({
          componentsPage,
          prefixIcon: defaultPrefixIcon,
          headerText: 'With Icon',
        });

        const icon = headerButton.locator(`mdc-icon[name="${defaultPrefixIcon}"]`);
        await expect(icon).toBeVisible();
        expect(await headerButton.textContent()).toContain('With Icon');
      });

      await test.step('render different sizes', async () => {
        // Test small size (default)
        const small = await setup({ componentsPage, size: SIZE.SMALL });
        await expect(small.accordionButton).toHaveAttribute('size', SIZE.SMALL);

        // Test large size
        const large = await setup({ componentsPage, size: SIZE.LARGE });
        await expect(large.accordionButton).toHaveAttribute('size', SIZE.LARGE);
      });

      await test.step('render different variants', async () => {
        // Test default variant
        const defaultVariant = await setup({ componentsPage, variant: VARIANT.DEFAULT });
        await expect(defaultVariant.accordionButton).toHaveAttribute('variant', VARIANT.DEFAULT);

        // Test borderless variant
        const borderless = await setup({ componentsPage, variant: VARIANT.BORDERLESS });
        await expect(borderless.accordionButton).toHaveAttribute('variant', VARIANT.BORDERLESS);
      });

      await test.step('render empty accordion button content', async () => {
        const { headerButton, headerButtonSection, content } = await setup({
          componentsPage,
          children: '',
          expanded: true,
        });

        await expect(headerButton).toHaveAttribute('role', ROLE.HEADING);
        await expect(headerButton).toHaveAttribute('aria-level', '3');
        await expect(headerButtonSection).toHaveAttribute('role', ROLE.BUTTON);
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'true');
        await expect(content).toBeEmpty();
        await expect(content).toHaveAttribute('role', ROLE.REGION);
      });

      await test.step('render accordion button with invalid icon', async () => {
        const { accordionButton, headerButtonSection } = await setup({ componentsPage, prefixIcon: 'invalid-icon' });

        await expect(accordionButton).toHaveAttribute('prefix-icon', 'invalid-icon');
        await expect(headerButtonSection).toHaveAttribute('role', ROLE.BUTTON);
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
      });
    });

    /**
     * USER INTERACTION
     */
    await test.step('user interaction', async () => {
      await test.step('mouse click on header', async () => {
        const { headerButton, headerButtonSection, content, accordionButton } = await setup({ componentsPage });

        // Initially collapsed
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(content).not.toBeVisible();

        // Expand
        let waitForShown = await componentsPage.waitForEvent(accordionButton, 'shown');
        await headerButton.click();
        await expect(waitForShown).toEventEmitted();
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'true');
        await expect(content).toBeVisible();
        await expect(content).toHaveAttribute('role', ROLE.REGION);

        // Collapse
        waitForShown = await componentsPage.waitForEvent(accordionButton, 'shown');
        await headerButton.click();
        await expect(waitForShown).toEventEmitted();
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(content).not.toBeVisible();
      });

      await test.step('keyboard navigation', async () => {
        const { headerButton, headerButtonSection, content, accordionButton } = await setup({ componentsPage });

        // Focus the header button
        await componentsPage.actionability.pressTab();
        await expect(headerButton).toBeFocused();

        // Test Enter key
        let waitForShown = await componentsPage.waitForEvent(accordionButton, 'shown');
        await headerButtonSection.press(KEYS.ENTER);
        await expect(waitForShown).toEventEmitted();
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'true');
        await expect(content).toBeVisible();
        await expect(content).toHaveAttribute('role', ROLE.REGION);

        // Test Space key
        waitForShown = await componentsPage.waitForEvent(accordionButton, 'shown');
        await headerButton.press(KEYS.SPACE);
        await expect(waitForShown).toEventEmitted();
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(content).not.toBeVisible();
      });

      await test.step('disabled state', async () => {
        const { accordionButton, headerButton, headerButtonSection, content } = await setup({
          componentsPage,
          disabled: true,
        });

        await expect(accordionButton).toHaveAttribute('aria-disabled', 'true');

        // Should not expand when clicked
        await headerButton.click();
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(content).not.toBeVisible();

        // Should not respond to keyboard
        await headerButton.focus();
        await headerButton.press(KEYS.ENTER);
        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
      });
    });

    /**
     * PROGRAMMATIC CONTROL
     */
    await test.step('programmatic control', async () => {
      await test.step('set expanded state programmatically', async () => {
        const { accordionButton, headerButtonSection, content } = await setup({
          componentsPage,
          expanded: false,
        });

        // Expand programmatically
        await accordionButton.evaluate((el: HTMLElement) => {
          el.setAttribute('expanded', '');
        });

        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'true');
        await expect(content).toBeVisible();

        // Collapse programmatically
        await accordionButton.evaluate((el: HTMLElement) => {
          el.removeAttribute('expanded');
        });

        await expect(headerButtonSection).toHaveAttribute('aria-expanded', 'false');
        await expect(content).not.toBeVisible();
      });
    });
  });
});
