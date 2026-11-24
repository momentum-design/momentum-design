import { expect } from '@playwright/test';

import { test } from '../../../config/playwright/setup';
import type { ComponentsPage } from '../../../config/playwright/setup';

const setup = async (componentsPage: ComponentsPage, containingBlock: string) => {
  await componentsPage.mount({
    html: `
      <div id="shadow-fixture" class="mds-elevation" style="padding: 6rem 10rem; min-height: 42rem;">
        <style>
          #shadow-parent::part(popover-content) {
            ${containingBlock}
            height: 14rem;
          }
        </style>
        <mdc-button id="shadow-parent-trigger">Open settings</mdc-button>
        <mdc-popover id="shadow-parent" triggerid="shadow-parent-trigger" placement="bottom-start"
          interactive size style="width: 16rem;">
          <div style="padding-block-start: 4rem;">
            <mdc-button id="shadow-tooltip-trigger">Details</mdc-button>
            <mdc-tooltip id="shadow-tooltip" triggerid="shadow-tooltip-trigger" strategy="fixed"
              placement="right" offset="8" show-arrow delay="0,0" boundary="#shadow-fixture">
              Settings details
            </mdc-tooltip>
            <mdc-select label="Example choice" placeholder="Choose an option" strategy="fixed"
              boundary="#shadow-fixture" style="margin-block-start: 1rem; --mdc-select-listbox-width: 12rem;">
              <mdc-selectlistbox>
                <mdc-option value="first" label="First option"></mdc-option>
                <mdc-option value="second" label="Second option"></mdc-option>
              </mdc-selectlistbox>
            </mdc-select>
            <div style="height: 28rem;">End of settings</div>
          </div>
        </mdc-popover>
      </div>
    `,
    clearDocument: true,
  });
  await componentsPage.page.getByRole('button', { name: 'Open settings', exact: true }).click();
  await expect(componentsPage.page.locator('#shadow-parent')).toBeVisible();
};

for (const containingBlock of ['will-change: transform;', 'contain: layout;']) {
  test(`should keep fixed overlays at their triggers after scrolling a shadow part with ${containingBlock}`, async ({
    componentsPage,
  }) => {
    await setup(componentsPage, containingBlock);
    const { page } = componentsPage;
    const trigger = page.getByRole('button', { name: 'Details', exact: true });
    const tooltip = page.locator('#shadow-tooltip');
    const expectTooltipAtTrigger = async () => {
      await expect(tooltip).toBeVisible();
      await expect(async () => {
        const triggerBox = (await trigger.boundingBox())!;
        const tooltipBox = (await tooltip.boundingBox())!;
        const gap = tooltipBox.x - triggerBox.x - triggerBox.width;
        expect(gap).toBeGreaterThanOrEqual(8);
        expect(gap).toBeLessThan(32);
        expect(Math.abs(tooltipBox.y + tooltipBox.height / 2 - triggerBox.y - triggerBox.height / 2)).toBeLessThan(1);
      }).toPass();
    };

    await trigger.hover();
    await expectTooltipAtTrigger();
    const initialTriggerBox = (await trigger.boundingBox())!;
    await page.mouse.wheel(0, 48);
    await expect(async () => {
      const scrolledTriggerBox = (await trigger.boundingBox())!;
      expect(initialTriggerBox.y - scrolledTriggerBox.y).toBeGreaterThan(30);
    }).toPass();
    await trigger.hover();
    await expectTooltipAtTrigger();

    await page.mouse.move(0, 0);
    await expect(tooltip).not.toBeVisible();
    const selectTrigger = page.getByRole('combobox', { name: 'Example choice' });
    const listbox = page.getByRole('listbox');
    await selectTrigger.click();
    await expect(listbox).toBeVisible();
    await expect(async () => {
      const triggerBox = (await selectTrigger.boundingBox())!;
      const listboxBox = (await listbox.boundingBox())!;
      expect(Math.abs(listboxBox.x - triggerBox.x)).toBeLessThan(16);
      expect(listboxBox.y).toBeGreaterThanOrEqual(triggerBox.y + triggerBox.height);
      expect(listboxBox.y - triggerBox.y - triggerBox.height).toBeLessThan(32);
    }).toPass();
    await page.getByRole('option', { name: 'First option', exact: true }).click();
    await expect(listbox).not.toBeVisible();
    await expect(selectTrigger).toContainText('First option');
  });
}
