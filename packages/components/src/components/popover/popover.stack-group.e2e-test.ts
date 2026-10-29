import { expect } from '@playwright/test';

import { test, type ComponentsPage } from '../../../config/playwright/setup';

const open = async (componentsPage: ComponentsPage, selector: string) => {
  const overlay = componentsPage.page.locator(selector);
  await componentsPage.setAttributes(overlay, { visible: '' });
  await expect(overlay).toBeVisible();
};

const mountCaptions = async (componentsPage: ComponentsPage, { backdrop = false } = {}) => {
  await componentsPage.mount({
    html: `<div>
      <button id="cc-options-trigger">Caption options</button>
      <mdc-popover id="cc-options" triggerid="cc-options-trigger" trigger="manual" stack-group-name="cc-options"
        interactive hide-on-escape hide-on-outside-click ${backdrop ? 'backdrop' : ''}>
        <button id="cc-option">Show captions</button>
      </mdc-popover>
      <mdc-dialog id="cc-dialog" stack-group-name="cc-dialog" hide-backdrop header-text="Captions"
        close-button-aria-label="Close captions">
        <div slot="dialog-body"><button id="cc-dialog-action">Apply</button></div>
      </mdc-dialog>
    </div>`,
    clearDocument: true,
  });
  await open(componentsPage, '#cc-options');
  await open(componentsPage, '#cc-dialog');
  return {
    popover: componentsPage.page.locator('#cc-options'),
    dialog: componentsPage.page.locator('#cc-dialog'),
  };
};

test.describe('Overlay dismissal across stack groups', () => {
  test('Escape closes an earlier popover while a later dialog from another group is open', async ({
    componentsPage,
  }) => {
    const { page } = componentsPage;
    const { popover, dialog } = await mountCaptions(componentsPage);

    await page.locator('#cc-option').focus();
    await expect(page.locator('#cc-option')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(popover).not.toBeVisible();
    await expect(dialog).toBeVisible();

    await page.locator('#cc-dialog-action').focus();
    await expect(page.locator('#cc-dialog-action')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('backdrop click closes an earlier popover while a later dialog from another group is open', async ({
    componentsPage,
  }) => {
    const { page } = componentsPage;
    const { popover, dialog } = await mountCaptions(componentsPage, { backdrop: true });
    const viewport = page.viewportSize()!;

    // The trigger sits above the backdrop at the top-left, so click the opposite corner.
    await page.mouse.click(viewport.width - 5, viewport.height - 5);
    await expect(popover).not.toBeVisible();
    await expect(dialog).toBeVisible();
  });

  test('Escape closes the popover holding focus, not a later popover from another group', async ({
    componentsPage,
  }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: `<div style="display: flex; justify-content: space-between">
        <button id="assistant-trigger">AI assistant</button>
        <mdc-popover id="assistant" triggerid="assistant-trigger" trigger="manual" stack-group-name="ai-assistant"
          interactive hide-on-escape>
          <button id="assistant-action">Summarize</button>
        </mdc-popover>
        <button id="options-trigger">More options</button>
        <mdc-popover id="options" triggerid="options-trigger" trigger="manual" interactive hide-on-escape>
          <button>Settings</button>
        </mdc-popover>
      </div>`,
      clearDocument: true,
    });
    await open(componentsPage, '#assistant');
    await open(componentsPage, '#options');

    await page.locator('#assistant-action').focus();
    await expect(page.locator('#assistant-action')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('#assistant')).not.toBeVisible();
    await expect(page.locator('#options')).toBeVisible();
  });

  test('Escape closes an earlier dialog, not a later popover from another group', async ({ componentsPage }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: `<div>
        <mdc-dialog id="settings" stack-group-name="settings" hide-backdrop header-text="Settings"
          close-button-aria-label="Close settings">
          <div slot="dialog-body"><button id="settings-action">Save</button></div>
        </mdc-dialog>
        <button id="hint-trigger">Hint</button>
        <mdc-popover id="hint" triggerid="hint-trigger" trigger="manual" hide-on-escape>Hint text</mdc-popover>
      </div>`,
      clearDocument: true,
    });
    await open(componentsPage, '#settings');
    await open(componentsPage, '#hint');

    await page.locator('#settings-action').focus();
    await expect(page.locator('#settings-action')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('#settings')).not.toBeVisible();
    await expect(page.locator('#hint')).toBeVisible();
  });

  test('selecting a menu item closes its menu chain while a later popover from another group is open', async ({
    componentsPage,
  }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: `<div style="display: flex; justify-content: space-between">
        <mdc-button id="menu-trigger">Actions</mdc-button>
        <mdc-menupopover id="menu" triggerid="menu-trigger" stack-group-name="actions">
          <mdc-menuitem id="share-trigger" label="Share"></mdc-menuitem>
          <mdc-menupopover id="submenu" triggerid="share-trigger" placement="right-start" stack-group-name="actions">
            <mdc-menuitem label="Copy link"></mdc-menuitem>
          </mdc-menupopover>
        </mdc-menupopover>
        <button id="assistant-trigger">AI assistant</button>
        <mdc-popover id="assistant" triggerid="assistant-trigger" trigger="manual" stack-group-name="ai-assistant">
          Assistant text
        </mdc-popover>
      </div>`,
      clearDocument: true,
    });
    await page.locator('#menu-trigger').click();
    await page.getByRole('menuitem', { name: 'Share' }).click();
    await expect(page.locator('#submenu')).toBeVisible();
    await open(componentsPage, '#assistant');

    await page.getByRole('menuitem', { name: 'Copy link' }).click();
    await expect(page.locator('#submenu')).not.toBeVisible();
    await expect(page.locator('#menu')).not.toBeVisible();
    await expect(page.locator('#assistant')).toBeVisible();
  });

  test('a propagating Escape is handled once by a popover with close delay', async ({ componentsPage }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: `<div>
        <button id="trigger">Open</button>
        <mdc-popover id="popover" triggerid="trigger" trigger="manual" interactive hide-on-escape
          propagate-event-on-escape delay="0,50">
          <button id="action">Action</button>
        </mdc-popover>
      </div>`,
      clearDocument: true,
    });
    await open(componentsPage, '#popover');
    const popover = page.locator('#popover');
    await popover.evaluate(element => {
      element.setAttribute('data-escape-count', '0');
      element.addEventListener('closebyescape', () => {
        element.setAttribute('data-escape-count', `${Number(element.getAttribute('data-escape-count')) + 1}`);
      });
    });

    await page.locator('#action').focus();
    await expect(page.locator('#action')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(popover).not.toBeVisible();
    await expect(popover).toHaveAttribute('data-escape-count', '1');
  });
});
