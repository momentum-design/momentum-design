import { expect } from '@playwright/test';

import { test, type ComponentsPage } from '../../../config/playwright/setup';

const open = async (componentsPage: ComponentsPage, selector: string) => {
  const overlay = componentsPage.page.locator(selector);
  await componentsPage.setAttributes(overlay, { visible: '' });
  await expect(overlay).toBeVisible();
};

const mountChain = async (
  componentsPage: ComponentsPage,
  { siblings = false, menus = false, closeDelays = [0, 0, 0] } = {},
) => {
  const tag = menus ? 'mdc-menupopover' : 'mdc-popover';
  const button = (id: string, label: string) =>
    menus
      ? `<mdc-menuitem id="${id}" label="${label}"></mdc-menuitem>`
      : `<mdc-button id="${id}">${label}</mdc-button>`;
  const attributes = 'interactive hide-on-escape focus-back-to-trigger';
  const child = `<${tag} id="child" triggerid="child-trigger" ${attributes} delay="0,${closeDelays[2]}">
    ${button('child-action', 'Copy link')}
  </${tag}>`;
  const middle = `<${tag} id="middle" triggerid="middle-trigger" ${attributes} delay="0,${closeDelays[1]}">
    ${button('middle-action', 'Middle action')}
    ${button('child-trigger', 'Share')}
    ${siblings ? '' : child}
  </${tag}>`;
  const parent = `<${tag} id="parent" triggerid="original-trigger" ${attributes} delay="0,${closeDelays[0]}">
    ${button('parent-action', 'Parent action')}
    ${button('middle-trigger', 'Actions')}
    ${siblings ? '' : middle}
  </${tag}>`;

  await componentsPage.mount({
    html: `<div>
      <mdc-button id="original-trigger">Open</mdc-button>
      ${parent}
      ${siblings ? middle + child : ''}
      <mdc-dialog id="unrelated" stack-group-name="unrelated" hide-backdrop z-index="1"
        header-text="Reminder" close-button-aria-label="Close reminder">
        <div slot="dialog-body"><button>Dismiss reminder</button></div>
      </mdc-dialog>
    </div>`,
    clearDocument: true,
  });
  const { page } = componentsPage;
  await page.locator('#original-trigger').click();
  await expect(page.locator('#parent')).toBeVisible();
  await page.locator('#middle-trigger').click();
  await expect(page.locator('#middle')).toBeVisible();
  await page.locator('#child-trigger').click();
  await expect(page.locator('#child')).toBeVisible();
  await open(componentsPage, '#unrelated');
};

const mountCaptions = async (componentsPage: ComponentsPage, { backdrop = false, menus = false } = {}) => {
  const tag = menus ? 'mdc-menupopover' : 'mdc-popover';
  await componentsPage.mount({
    html: `<div>
      <button id="cc-options-trigger">Caption options</button>
      <${tag} id="cc-options" triggerid="cc-options-trigger" trigger="manual" stack-group-name="cc-options"
        interactive hide-on-escape hide-on-outside-click ${backdrop ? 'backdrop' : ''}>
        <button id="cc-option">Show captions</button>
      </${tag}>
      <mdc-dialog id="cc-dialog" stack-group-name="cc-dialog" hide-backdrop z-index="1" header-text="Captions"
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

test.describe('Focus-based overlay dismissal', () => {
  for (const siblings of [false, true]) {
    for (const menus of [false, true]) {
      const scenario = `${menus ? 'menus' : 'popovers'} rendered as ${siblings ? 'DOM siblings' : 'nested elements'}`;

      for (const level of ['child', 'middle', 'parent']) {
        test(`should close the focused ${level} and later same-group overlays for ${scenario}`, async ({
          componentsPage,
        }) => {
          const { page } = componentsPage;
          await mountChain(componentsPage, { siblings, menus });
          await page.locator(`#${level}-action`).focus();
          await expect(page.locator(`#${level}-action`)).toBeFocused();
          await page.keyboard.press('Escape');

          const levels = ['parent', 'middle', 'child'];
          await Promise.all(
            levels.map((id, index) =>
              index >= levels.indexOf(level)
                ? expect(page.locator(`#${id}`)).not.toHaveAttribute('visible')
                : expect(page.locator(`#${id}`)).toBeVisible(),
            ),
          );
          if (level === 'child') await expect(page.locator('#child-trigger')).toBeFocused();
          await expect(page.locator('#unrelated')).toBeVisible();
        });
      }

      test(`should treat focus on a child trigger as focus in the child for ${scenario}`, async ({
        componentsPage,
      }) => {
        const { page } = componentsPage;
        await mountChain(componentsPage, { siblings, menus });
        await page.locator('#child-trigger').focus();
        await expect(page.locator('#child-trigger')).toBeFocused();
        await page.keyboard.press('Escape');
        await expect(page.locator('#child')).not.toHaveAttribute('visible');
        await expect(page.locator('#middle')).toBeVisible();
        await expect(page.locator('#parent')).toBeVisible();
        await expect(page.locator('#child-trigger')).toBeFocused();
        await expect(page.locator('#unrelated')).toBeVisible();
      });
    }
  }

  for (const level of ['middle', 'parent']) {
    for (const closeDelays of [
      [0, 80, 160],
      [0, 160, 80],
    ]) {
      test(`should close the ${level} and later DOM-sibling popovers with delays ${closeDelays.join(', ')}`, async ({
        componentsPage,
      }) => {
        const { page } = componentsPage;
        await mountChain(componentsPage, { siblings: true, closeDelays });
        await page.locator(`#${level}-action`).focus();
        await expect(page.locator(`#${level}-action`)).toBeFocused();
        await page.keyboard.press('Escape');
        await expect(page.locator('#middle')).not.toHaveAttribute('visible');
        await expect(page.locator('#child')).not.toHaveAttribute('visible');
        if (level === 'parent') {
          await expect(page.locator('#parent')).not.toHaveAttribute('visible');
        } else {
          await expect(page.locator('#parent')).toBeVisible();
        }
        await expect(page.locator('#unrelated')).toBeVisible();
      });
    }
  }

  test('should close only the tooltip when its trigger has focus inside a popover', async ({ componentsPage }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: `<div>
        <button id="parent-trigger">Options</button>
        <mdc-popover id="parent" triggerid="parent-trigger" trigger="manual" interactive hide-on-escape>
          <mdc-button id="tooltip-trigger">Help</mdc-button>
          <mdc-tooltip id="tooltip" triggerid="tooltip-trigger" delay="0,0">More information</mdc-tooltip>
        </mdc-popover>
      </div>`,
      clearDocument: true,
    });
    await open(componentsPage, '#parent');
    await page.locator('#tooltip-trigger').focus();
    await expect(page.locator('#tooltip-trigger')).toBeFocused();
    await expect(page.locator('#tooltip')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#tooltip')).not.toBeVisible();
    await expect(page.locator('#parent')).toBeVisible();
    await expect(page.locator('#tooltip-trigger')).toBeFocused();
  });

  test('should use the last-opened popover when focus is outside all overlays and triggers', async ({
    componentsPage,
  }) => {
    const { page } = componentsPage;
    const { popover, dialog } = await mountCaptions(componentsPage);
    await componentsPage.mount({
      html: `<div>
        <button id="outside">Outside</button>
        <button id="later-trigger">More</button>
        <mdc-popover id="later" triggerid="later-trigger" trigger="manual"
          stack-group-name="later" hide-on-escape>More options</mdc-popover>
      </div>`,
    });
    await open(componentsPage, '#later');
    await page.locator('#outside').focus();
    await expect(page.locator('#outside')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('#later')).not.toBeVisible();
    await expect(dialog).toBeVisible();
    await expect(popover).toBeVisible();
  });

  test('should follow assigned slots and shadow hosts from the focused control', async ({ componentsPage }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: '<div id="shadow-host"><mdc-button id="slotted-action">Action</mdc-button></div>',
      clearDocument: true,
    });
    await page.locator('#shadow-host').evaluate(host => {
      const root = host.attachShadow({ mode: 'open' });
      root.innerHTML = `<div>
        <button id="shadow-trigger">Options</button>
        <mdc-popover id="shadow-overlay" triggerid="shadow-trigger" trigger="manual" interactive hide-on-escape>
          <slot></slot>
        </mdc-popover>
      </div>`;
    });
    await open(componentsPage, '#shadow-overlay');
    await componentsPage.mount({
      html: `<div>
        <button id="later-trigger">Later</button>
        <mdc-popover id="later" triggerid="later-trigger" trigger="manual" stack-group-name="later" hide-on-escape>
          Later options
        </mdc-popover>
      </div>`,
    });
    await open(componentsPage, '#later');
    await page.locator('#slotted-action').focus();
    await expect(page.locator('#slotted-action')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('#shadow-overlay')).not.toHaveAttribute('visible');
    await expect(page.locator('#later')).toBeVisible();
  });
});

test.describe('Backdrop owner dismissal', () => {
  for (const relocated of [false, true]) {
    test(`should close the default-group backdrop owner and later entries${relocated ? ' with a relocated backdrop' : ''}`, async ({
      componentsPage,
    }) => {
      const { page } = componentsPage;
      await componentsPage.mount({
        html: `<div>
          <div id="backdrop-container"></div>
          <button id="owner-trigger">Options</button>
          <mdc-popover id="owner" triggerid="owner-trigger" trigger="manual" backdrop z-index="3000"
            hide-on-outside-click ${relocated ? 'backdrop-append-to="backdrop-container"' : ''}>
            <button id="later-trigger">More</button>
          </mdc-popover>
          <mdc-popover id="later" triggerid="later-trigger" trigger="manual" stack-group-name="" hide-on-outside-click>
            More options
          </mdc-popover>
          <mdc-dialog id="unrelated" stack-group-name="unrelated" hide-backdrop z-index="1"
            header-text="Reminder" close-button-aria-label="Close reminder"></mdc-dialog>
        </div>`,
        clearDocument: true,
      });
      await open(componentsPage, '#owner');
      await open(componentsPage, '#later');
      await open(componentsPage, '#unrelated');

      const viewport = page.viewportSize()!;
      await page.mouse.click(viewport.width - 5, viewport.height - 5);
      await expect(page.locator('#owner')).not.toBeVisible();
      await expect(page.locator('#later')).not.toBeVisible();
      await expect(page.locator('#unrelated')).toBeVisible();
    });
  }

  test('should close a child backdrop owner, not the parent containing its backdrop', async ({ componentsPage }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: `<div>
        <button id="parent-trigger">Options</button>
        <mdc-popover id="parent" triggerid="parent-trigger" trigger="manual" hide-on-outside-click>
          <button id="child-trigger">More</button>
          <mdc-popover id="child" triggerid="child-trigger" trigger="manual" backdrop hide-on-outside-click>
            More options
          </mdc-popover>
        </mdc-popover>
      </div>`,
      clearDocument: true,
    });
    await open(componentsPage, '#parent');
    await open(componentsPage, '#child');
    const viewport = page.viewportSize()!;
    await page.mouse.click(viewport.width - 5, viewport.height - 5);
    await expect(page.locator('#child')).not.toBeVisible();
    await expect(page.locator('#parent')).toBeVisible();
  });

  for (const relocated of [false, true]) {
    test(`should route a shadow-DOM overlay's ${relocated ? 'externally relocated' : 'internal'} backdrop to its owner`, async ({
      componentsPage,
    }) => {
      const { page } = componentsPage;
      await componentsPage.mount({
        html: `<div>
          <div id="backdrop-container"></div>
          <div id="shadow-host"></div>
          <mdc-dialog id="unrelated" stack-group-name="unrelated" hide-backdrop z-index="1"
            header-text="Reminder" close-button-aria-label="Close reminder"></mdc-dialog>
        </div>`,
        clearDocument: true,
      });
      await page.locator('#shadow-host').evaluate((host, externalBackdrop) => {
        const root = host.attachShadow({ mode: 'open' });
        root.innerHTML = `<div>
          <button id="shadow-trigger">Options</button>
          <mdc-popover id="shadow-owner" triggerid="shadow-trigger" trigger="manual" backdrop
            hide-on-outside-click ${externalBackdrop ? 'backdrop-append-to="backdrop-container"' : ''}>
            Shadow options
          </mdc-popover>
        </div>`;
      }, relocated);
      await open(componentsPage, '#shadow-owner');
      await open(componentsPage, '#unrelated');
      const viewport = page.viewportSize()!;
      await page.mouse.click(viewport.width - 5, viewport.height - 5);
      await expect(page.locator('#shadow-owner')).not.toBeVisible();
      await expect(page.locator('#unrelated')).toBeVisible();
    });
  }

  test('should not emit a dismissal notification from a retired popover backdrop', async ({
    componentsPage,
  }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: `<div>
        <button id="root-trigger">Options</button>
        <mdc-popover id="chain-root" triggerid="root-trigger" trigger="manual" stack-group-name="chain"
          interactive hide-on-escape>
          <button id="root-action">Root action</button>
          <button id="retired-trigger">More</button>
        </mdc-popover>
        <mdc-popover id="retired" triggerid="retired-trigger" trigger="manual" stack-group-name="chain"
          backdrop hide-on-outside-click delay="0,1000">More options</mdc-popover>
      </div>`,
      clearDocument: true,
    });
    await open(componentsPage, '#chain-root');
    await open(componentsPage, '#retired');
    const retired = page.locator('#retired');
    await retired.evaluate(element => {
      element.setAttribute('data-dismissal-count', '0');
      element.addEventListener('closebyoutsideclick', () => {
        element.setAttribute('data-dismissal-count', `${Number(element.getAttribute('data-dismissal-count')) + 1}`);
      });
    });
    await page.locator('#root-action').focus();
    await expect(page.locator('#root-action')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('#chain-root')).not.toHaveAttribute('visible');
    await expect(retired).toBeVisible();

    const viewport = page.viewportSize()!;
    await page.mouse.click(viewport.width - 5, viewport.height - 5);
    await page.mouse.click(viewport.width - 5, viewport.height - 5);
    await expect(retired).toBeVisible();
    await expect(retired).not.toBeVisible();
    await expect(retired).toHaveAttribute('data-dismissal-count', '0');
  });
});

test.describe('Ordinary outside-click compatibility', () => {
  for (const laterDialog of [false, true]) {
    test(`should keep existing no-backdrop routing ${laterDialog ? 'with' : 'without'} a later unrelated dialog`, async ({
      componentsPage,
    }) => {
      const { page } = componentsPage;
      await componentsPage.mount({
        html: `<div>
          <button id="parent-trigger">Options</button>
          <mdc-popover id="parent" triggerid="parent-trigger" trigger="manual" interactive hide-on-outside-click>
            <button id="parent-action">Parent action</button>
            <button id="child-trigger">More</button>
          </mdc-popover>
          <mdc-popover id="child" triggerid="child-trigger" trigger="manual" interactive hide-on-outside-click>
            <button>Child action</button>
          </mdc-popover>
          <mdc-dialog id="unrelated" stack-group-name="unrelated" hide-backdrop z-index="1"
            header-text="Reminder" close-button-aria-label="Close reminder"></mdc-dialog>
        </div>`,
        clearDocument: true,
      });
      await open(componentsPage, '#parent');
      await open(componentsPage, '#child');

      await page.locator('#parent-action').click();
      await expect(page.locator('#child')).not.toBeVisible();
      await expect(page.locator('#parent')).toBeVisible();
      await open(componentsPage, '#child');
      if (laterDialog) await open(componentsPage, '#unrelated');
      const viewport = page.viewportSize()!;
      await page.mouse.click(viewport.width - 5, viewport.height - 5);
      if (laterDialog) {
        await expect(page.locator('#parent')).toBeVisible();
        await expect(page.locator('#child')).toBeVisible();
        await expect(page.locator('#unrelated')).toBeVisible();
      } else {
        await expect(page.locator('#child')).not.toBeVisible();
        await expect(page.locator('#parent')).toBeVisible();
      }
    });
  }
});

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

});

test.describe('Nested independent stack groups', () => {
  for (const input of ['Escape', 'backdrop']) {
    for (const owner of ['parent', 'child']) {
      const other = owner === 'parent' ? 'child' : 'parent';
      // Clicking parent A's backdrop is also an ordinary outside click for child B, which is on top.
      const closesBoth = input === 'backdrop' && owner === 'parent';
      const title = closesBoth
        ? 'should close group A on its backdrop and let top group B handle the outside click'
        : `should close only group ${owner === 'parent' ? 'A' : 'B'} on its ${input}`;

      test(title, async ({ componentsPage }) => {
        const { page } = componentsPage;
        await componentsPage.mount({
          html: `<div>
            <button id="parent-trigger">Options</button>
            <mdc-popover id="parent" triggerid="parent-trigger" stack-group-name="A"
              interactive hide-on-escape hide-on-outside-click ${owner === 'parent' ? 'backdrop' : ''}>
              <button id="parent-action">Parent action</button>
              <button id="child-trigger">More</button>
              <mdc-popover id="child" triggerid="child-trigger" stack-group-name="B"
                interactive hide-on-escape hide-on-outside-click ${owner === 'child' ? 'backdrop' : ''}>
                <button id="child-action">Child action</button>
              </mdc-popover>
            </mdc-popover>
          </div>`,
          clearDocument: true,
        });
        await page.locator('#parent-trigger').click();
        await expect(page.locator('#parent')).toBeVisible();
        await page.locator('#child-trigger').click();
        await expect(page.locator('#child')).toBeVisible();
        if (input === 'Escape') {
          await page.locator(`#${owner}-action`).focus();
          await expect(page.locator(`#${owner}-action`)).toBeFocused();
          await page.keyboard.press('Escape');
        } else {
          const viewport = page.viewportSize()!;
          await page.mouse.click(viewport.width - 5, viewport.height - 5);
        }
        await expect(page.locator(`#${owner}`)).not.toHaveAttribute('visible');
        if (closesBoth) {
          await expect(page.locator(`#${other}`)).not.toHaveAttribute('visible');
        } else {
          // A child remains registered as open even when its closed parent hides it.
          await expect(page.locator(`#${other}`)).toHaveAttribute('visible', '');
        }
      });
    }
  }
});

test('should close an earlier menu backdrop owner while a later dialog from another group stays open', async ({
  componentsPage,
}) => {
  const { page } = componentsPage;
  const { popover, dialog } = await mountCaptions(componentsPage, { backdrop: true, menus: true });
  const viewport = page.viewportSize()!;
  await page.mouse.click(viewport.width - 5, viewport.height - 5);
  await expect(popover).not.toBeVisible();
  await expect(dialog).toBeVisible();
});

test('should leave earlier menus open when a later menu owns the clicked backdrop', async ({ componentsPage }) => {
  const { page } = componentsPage;
  await componentsPage.mount({
    html: `<div>
      <mdc-button id="parent-trigger">Options</mdc-button>
      <mdc-menupopover id="parent" triggerid="parent-trigger">
        <mdc-button id="child-trigger">More</mdc-button>
        <mdc-menupopover id="child" triggerid="child-trigger">
          <mdc-menuitem label="Copy link"></mdc-menuitem>
        </mdc-menupopover>
      </mdc-menupopover>
    </div>`,
    clearDocument: true,
  });
  await page.locator('#parent-trigger').click();
  await expect(page.locator('#parent')).toBeVisible();
  await page.locator('#child-trigger').click();
  await expect(page.locator('#child')).toBeVisible();
  const viewport = page.viewportSize()!;
  await page.mouse.click(viewport.width - 5, viewport.height - 5);
  await expect(page.locator('#child')).not.toBeVisible();
  await expect(page.locator('#parent')).toBeVisible();
});
