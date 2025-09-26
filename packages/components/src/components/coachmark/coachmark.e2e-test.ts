import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

import Coachmark from './coachmark.component';

type SetupOptions = {
  componentsPage: ComponentsPage;
  open: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, open } = args;
  await componentsPage.mount({
    html: `
      <div id="wrapper" style="height: 50vh; width: 300px; display: inline-block">
        <mdc-text id="trigger">Anchor</mdc-text>
        <mdc-coachmark
          id="coachmark"
          triggerID="trigger"
          aria-label="Coachmark label"
          close-button-aria-label="Close button label"
        >
          <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
        </mdc-coachmark>
      </div>
    `,
    clearDocument: true,
  });

  await componentsPage.page.locator('#wrapper').waitFor();
  if (open) {
    await componentsPage.page.evaluate(() => {
      (document.getElementById('coachmark') as Coachmark | undefined)?.show();
    });
    await expect(componentsPage.page.locator('[part="popover-content"]')).toBeVisible();
  }

  return componentsPage.page.locator('mdc-coachmark');
};

test('mdc-coachmark', async ({ componentsPage }) => {
  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await setup({ componentsPage, open: true });
    await componentsPage.accessibility.checkForA11yViolations('coachmark-default');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      await setup({ componentsPage, open: true });

      // screenshot on the wrapper instead of just coachmark
      // to capture the position of the coachmark relative to the anchor element as well
      const wrapper = componentsPage.page.locator('#wrapper');
      const assertionAfterSwitchingDirection = async () => {
        await setup({ componentsPage, open: true });
      };
      await componentsPage.visualRegression.takeScreenshot('mdc-coachmark', {
        element: wrapper,
        assertionAfterSwitchingDirection,
      });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const coachmark = await setup({ componentsPage, open: true });

    await test.step('default attributes', async () => {
      // these attributes are overridden in the coachmark component and are reflective
      await expect(coachmark).toHaveAttribute('trigger', 'manual');
      await expect(coachmark).toHaveAttribute('close-button');
    });

    await test.step('accessibility attributes', async () => {
      const dialog = componentsPage.page.locator('[role="dialog"]');
      await expect(dialog).toHaveAttribute('aria-label', 'Coachmark label');
      await expect(dialog).not.toHaveAttribute('aria-expanded');
      await expect(dialog).not.toHaveAttribute('aria-labelledby');
      await expect(dialog).not.toHaveAttribute('aria-describedby');

      const closeDialogButton = componentsPage.page.locator('[part="popover-close"]');
      await expect(closeDialogButton).toHaveAttribute('aria-label', 'Close button label');
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('programmatic', async () => {
      await test.step('coachmark should open when the show function is called', async () => {
        await setup({ componentsPage, open: false });
        await expect(componentsPage.page.locator('[part="popover-content"]')).not.toBeVisible();
        await componentsPage.page.evaluate(() =>
          (document.getElementById('coachmark') as Coachmark | undefined)?.show(),
        );
        await expect(componentsPage.page.locator('[part="popover-content"]')).toBeVisible();
      });
    });

    await test.step('mouse/pointer', async () => {
      await test.step('coachmark should close when clicking on close button', async () => {
        await setup({ componentsPage, open: true });

        await componentsPage.page.locator('[part="popover-close"]').click();
        await expect(componentsPage.page.locator('[part="popover-content"]')).not.toBeVisible();
      });
    });

    await test.step('focus and keyboard', async () => {
      await test.step('close button should be focusable with tab and actionable with enter', async () => {
        await setup({ componentsPage, open: true });

        const closeButton = componentsPage.page.locator('[part="popover-close"]');
        await expect(closeButton).not.toBeFocused();
        await componentsPage.page.keyboard.press('Tab');
        await expect(closeButton).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await expect(componentsPage.page.locator('[part="popover-content"]')).not.toBeVisible();
      });
    });
  });
});
