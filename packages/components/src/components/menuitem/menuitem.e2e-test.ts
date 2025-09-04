import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

type SetupOptions = {
  componentsPage: ComponentsPage;
  label?: string;
  'secondary-label'?: string;
  'arrow-position'?: string;
  disabled?: boolean;
  'arrow-direction'?: string;
  'soft-disabled'?: boolean;
  'side-header-text'?: string;
  children?: string;
};

const primaryLabel = 'Primary Label';
const secondaryLabel = 'Secondary Label';

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-menuitem
        ${restArgs.label ? `label="${restArgs.label}"` : ''}
        ${restArgs['secondary-label'] ? `secondary-label="${restArgs['secondary-label']}"` : ''}
        ${restArgs.disabled ? 'disabled' : ''}
        ${restArgs['soft-disabled'] ? 'soft-disabled' : ''}
        ${restArgs['arrow-direction'] ? `arrow-direction="${restArgs['arrow-direction']}"` : ''}
        ${restArgs['arrow-position'] ? `arrow-position="${restArgs['arrow-position']}"` : ''}
        ${restArgs['side-header-text'] ? `side-header-text="${restArgs['side-header-text']}"` : ''}
      >
        ${restArgs.children ?? ''}
      </mdc-menuitem>
    `,
    clearDocument: true,
  });
  const menuitem = componentsPage.page.locator('mdc-menuitem');
  await menuitem.waitFor();
  return menuitem;
};

test.describe('Menuitem Feature Scenarios', () => {
  test('mdc-menuitem', async ({ componentsPage }) => {
    /**
     * VISUAL REGRESSION
     */
    await test.step('visual-regression', async () => {
      const menuitemSheet = new StickerSheet(componentsPage, 'mdc-menuitem', 'margin: 0.25rem 0;');
      const options = { createNewRow: true };

      // Basic menuitem with primary label
      menuitemSheet.setAttributes({ label: primaryLabel });
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with primary and secondary labels
      menuitemSheet.setAttributes({ label: primaryLabel, 'secondary-label': secondaryLabel });
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with leading icon controls
      menuitemSheet.setChildren(`
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      `);
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with trailing icon controls
      menuitemSheet.setChildren(`
        <mdc-icon length-unit="rem" slot="trailing-controls" name="placeholder-bold"></mdc-icon>
      `);
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with trailing badge controls
      menuitemSheet.setChildren(`
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      `);
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with trailing icon badge
      menuitemSheet.setChildren(`
        <mdc-badge slot="trailing-controls" variant="primary" type="icon" icon-name="placeholder-bold"></mdc-badge>
      `);
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with trailing counter badge
      menuitemSheet.setChildren(`
        <mdc-badge slot="trailing-controls" type="counter" counter="10"></mdc-badge>
      `);
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with side header text
      menuitemSheet.setAttributes({ label: primaryLabel, 'secondary-label': secondaryLabel, 'side-header-text': '##' });
      menuitemSheet.setChildren('');
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with leading arrow
      menuitemSheet.setAttributes({ label: primaryLabel, 'arrow-position': 'leading' });
      menuitemSheet.setChildren('');
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with trailing arrow
      menuitemSheet.setAttributes({ label: primaryLabel, 'arrow-position': 'trailing' });
      menuitemSheet.setChildren('');
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Disabled menuitem
      menuitemSheet.setAttributes({ label: primaryLabel, 'secondary-label': secondaryLabel, disabled: true });
      menuitemSheet.setChildren('');
      await menuitemSheet.createMarkupWithCombination({}, options);

      // Menuitem with short width
      menuitemSheet.setAttributes({
        label: 'This is an extremely long label text that should wrap or truncate properly inside a fixed width',
        'secondary-label': secondaryLabel,
        style: 'width: 25rem; outline: 2px solid red;', // 400px
      });
      menuitemSheet.setChildren(`
        <mdc-badge slot="trailing-controls" type="dot"></mdc-badge>
      `);
      await menuitemSheet.createMarkupWithCombination({}, options);

      await menuitemSheet.mountStickerSheet({ role: 'menu' });
      await test.step('matches screenshot of element', async () => {
        await componentsPage.visualRegression.takeScreenshot('mdc-menuitem', {
          element: menuitemSheet.getWrapperContainer(),
        });
      });
    });

    /**
     * ACCESSIBILITY
     */
    await test.step('accessibility', async () => {
      await setup({ componentsPage, label: primaryLabel });
      await componentsPage.mount({
        html: `
        <div role="menu">
        <mdc-menuitem label="${primaryLabel}">
        </mdc-menuitem>
        </div>
      `,
        clearDocument: true,
      });
      const menuitem = componentsPage.page.locator('mdc-menuitem');
      await menuitem.waitFor();
      await componentsPage.accessibility.checkForA11yViolations('menuitem-default');
    });

    /**
     * RENDERING AND VISUAL STATES
     */
    await test.step('rendering and visual states', async () => {
      await test.step('render menuitem with primary label only', async () => {
        const menuitem = await setup({ componentsPage, label: primaryLabel });
        await expect(menuitem).toHaveAttribute('role', 'menuitem');
        await expect(menuitem).toHaveAttribute('tabindex', '0');
        await expect(menuitem).toHaveAttribute('variant', 'inset-rectangle');

        const mdcText = componentsPage.page.locator('mdc-text');
        const textContent = await mdcText.textContent();
        expect(textContent?.trim()).toBe(primaryLabel);
      });

      await test.step('render menuitem with primary and secondary labels', async () => {
        await setup({
          componentsPage,
          label: primaryLabel,
          'secondary-label': secondaryLabel,
        });

        const primaryText = componentsPage.page.locator('mdc-text').first();
        const secondaryText = componentsPage.page.locator('mdc-text[part="leading-text-secondary-label"]');

        expect(await primaryText.textContent()).toContain(primaryLabel);
        expect(await secondaryText.textContent()).toContain(secondaryLabel);
      });

      await test.step('render menuitem with leading icon controls', async () => {
        await setup({
          componentsPage,
          label: primaryLabel,
          children: '<mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>',
        });

        const leadingIcon = componentsPage.page.locator('mdc-icon[slot="leading-controls"]');
        await expect(leadingIcon).toBeVisible();
        await expect(leadingIcon).toHaveAttribute('name', 'placeholder-bold');
      });

      await test.step('render menuitem with trailing controls', async () => {
        await setup({
          componentsPage,
          label: primaryLabel,
          children: '<mdc-badge slot="trailing-controls" type="dot"></mdc-badge>',
        });

        const trailingBadge = componentsPage.page.locator('mdc-badge[slot="trailing-controls"]');
        await expect(trailingBadge).toBeVisible();
        await expect(trailingBadge).toHaveAttribute('type', 'dot');
      });

      await test.step('render menuitem with arrow indicators', async () => {
        // Leading arrow
        await setup({
          componentsPage,
          label: primaryLabel,
          'arrow-position': 'leading',
          'arrow-direction': 'positive',
        });

        const leadingArrow = componentsPage.page.locator('mdc-icon[part="leading-arrow"]');
        await leadingArrow.waitFor();
        await expect(leadingArrow).toHaveAttribute('name', 'arrow-right-bold');

        // Trailing arrow
        await setup({
          componentsPage,
          label: primaryLabel,
          'arrow-position': 'trailing',
          'arrow-direction': 'negative',
        });

        const trailingArrow = componentsPage.page.locator('mdc-icon[part="trailing-arrow"]');
        await trailingArrow.waitFor();
        await expect(trailingArrow).toHaveAttribute('name', 'arrow-left-bold');
      });

      await test.step('render disabled menuitem', async () => {
        const menuitem = await setup({
          componentsPage,
          label: primaryLabel,
          disabled: true,
        });

        await expect(menuitem).toHaveAttribute('disabled');
        await expect(menuitem).toBeDisabled();
        await expect(menuitem).toHaveAttribute('aria-disabled', 'true');
      });

      await test.step('render soft-disabled menuitem', async () => {
        const menuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'soft-disabled': true,
        });

        await expect(menuitem).toHaveAttribute('soft-disabled');
        await menuitem.focus();
        await expect(menuitem).toBeFocused();
        await expect(menuitem).toHaveAttribute('aria-disabled', 'true');
      });
    });

    /**
     * MOUSE INTERACTIONS
     */
    await test.step('mouse interactions', async () => {
      await test.step('click on normal menuitem triggers action', async () => {
        const menuitem = await setup({ componentsPage, label: primaryLabel });
        const clickPromise = componentsPage.waitForEvent(menuitem, 'click');
        await menuitem.click();
        await clickPromise;
      });

      await test.step('click on disabled menuitem does nothing', async () => {
        const menuitem = await setup({
          componentsPage,
          label: primaryLabel,
          disabled: true,
        });

        // Disabled elements should not be clickable
        await expect(menuitem).toBeDisabled();
      });

      await test.step('hover over menuitem with tooltip shows tooltip', async () => {
        await componentsPage.mount({
          html: `   <div role="menu" style="width: 15rem; height: 10rem;">
      <mdc-menuitem label="Hover on this menu item" id="menuitem-1">
        <mdc-icon length-unit="rem" slot="leading-controls" name="placeholder-bold"></mdc-icon>
      </mdc-menuitem>
      <mdc-tooltip triggerID="menuitem-1" show-arrow>This is the tooltip text.</mdc-tooltip>
    </div>`,
          clearDocument: true,
        });
        const menuitem = componentsPage.page.locator('mdc-menuitem');
        await menuitem.waitFor();
        await componentsPage.actionability.pressTab();
        await expect(menuitem).toBeFocused();
        const tooltip = componentsPage.page.locator('mdc-tooltip');
        await expect(tooltip).toBeVisible();
        await expect(tooltip).toContainText('This is the tooltip text.');
      });
    });

    /**
     * KEYBOARD INTERACTIONS
     */
    await test.step('keyboard interactions', async () => {
      await test.step('activate menuitem using Enter key', async () => {
        const menuitem = await setup({ componentsPage, label: primaryLabel });
        const clickPromise = componentsPage.waitForEvent(menuitem, 'click');
        await menuitem.focus();
        await menuitem.press('Enter');
        await clickPromise;
      });

      await test.step('activate menuitem using Space key', async () => {
        const menuitem = await setup({ componentsPage, label: primaryLabel });
        const clickPromise = componentsPage.waitForEvent(menuitem, 'click');
        await menuitem.focus();
        await menuitem.press('Space', { delay: 10 });
        await clickPromise;
      });

      await test.step('arrow key navigation triggers keydown events', async () => {
        const menuitem = await setup({ componentsPage, label: primaryLabel });
        const keydownPromise = componentsPage.waitForEvent(menuitem, 'keydown');
        const keyupPromise = componentsPage.waitForEvent(menuitem, 'keyup');

        await menuitem.focus();
        await menuitem.press('ArrowDown');
        await keydownPromise;

        await menuitem.press('ArrowUp');
        await keyupPromise;
      });

      await test.step('disabled menuitem keyboard behavior', async () => {
        const menuitem = await setup({
          componentsPage,
          label: primaryLabel,
          disabled: true,
        });

        // Disabled menuitem should not be focusable
        await expect(menuitem).toBeDisabled();
      });
    });

    /**
     * ARIA AND ACCESSIBILITY ATTRIBUTES
     */
    await test.step('ARIA and accessibility attributes', async () => {
      await test.step('default ARIA attributes are correct', async () => {
        const menuitem = await setup({ componentsPage, label: primaryLabel });

        await expect(menuitem).toHaveAttribute('role', 'menuitem');
        await expect(menuitem).toHaveAttribute('tabindex', '0');
        await expect(menuitem).toHaveAttribute('variant', 'inset-rectangle');
      });

      await test.step('disabled state ARIA attributes', async () => {
        const menuitem = await setup({
          componentsPage,
          label: primaryLabel,
          disabled: true,
        });

        await expect(menuitem).toHaveAttribute('aria-disabled', 'true');
        await expect(menuitem).toBeDisabled();
      });

      await test.step('soft-disabled state ARIA attributes', async () => {
        const menuitem = await setup({
          componentsPage,
          label: primaryLabel,
          'soft-disabled': true,
        });

        await expect(menuitem).toHaveAttribute('aria-disabled', 'true');
      });
    });

    /**
     * EVENT HANDLING
     */
    await test.step('event handling', async () => {
      await test.step('click event propagation works correctly', async () => {
        const menuitem = await setup({ componentsPage, label: primaryLabel });
        const clickPromise = componentsPage.waitForEvent(menuitem, 'click');
        await menuitem.click();
        await clickPromise;
      });

      await test.step('keyboard event propagation works correctly', async () => {
        const menuitem = await setup({ componentsPage, label: primaryLabel });
        const keydownPromise = componentsPage.waitForEvent(menuitem, 'keydown');
        const keyupPromise = componentsPage.waitForEvent(menuitem, 'keyup');
        await menuitem.focus();

        await menuitem.press('ArrowDown');
        await keydownPromise;

        await menuitem.press('ArrowUp');
        await keyupPromise;
      });
    });
  });
});
