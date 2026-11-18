/* eslint-disable no-await-in-loop */
import { expect } from '@playwright/test';

import { test } from '../../../config/playwright/setup';

const configurations = [
  { name: 'default', style: '', widths: [232, 320] },
  { name: 'rem control', style: '--mdc-select-width: 12rem', widths: [192, 192] },
  { name: 'rem listbox', style: '--mdc-select-listbox-width: 20rem', widths: [320, 320] },
  {
    name: 'narrow listbox',
    style: '--mdc-select-width: 400px; --mdc-select-listbox-width: 120px',
    widths: [120, 120],
  },
  {
    name: 'inherited Popover width',
    style: '--mdc-popover-width: 15rem; --mdc-select-listbox-width: 20rem',
    widths: [240, 240],
  },
  // Absolute sizing already applies the control percentage again to the listbox.
  { name: 'percentage control', style: '--mdc-select-width: 75%', widths: [130.5, 180] },
  { name: 'percentage listbox', style: '--mdc-select-listbox-width: 50%', widths: [116, 160] },
  {
    name: 'calculated listbox',
    style: '--mdc-select-listbox-width: calc(100% - 2rem)',
    widths: [200, 288],
  },
  {
    name: 'documented wider listbox',
    style: '--mdc-select-width: 300px; --mdc-select-listbox-width: 400px',
    widths: [400, 400],
  },
];

test.describe('mdc-select sizing', () => {
  test('should update fixed sizing after CSS changes, visibility changes and reconnection', async ({
    componentsPage,
  }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: `
        <div id="select-container" hidden style="width: 232px;">
          <mdc-select label="Example choice" strategy="fixed">
            <mdc-selectlistbox>
              <mdc-option value="first" label="First option"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
        </div>
      `,
      clearDocument: true,
    });
    const container = page.locator('#select-container');
    const select = page.locator('mdc-select');
    const combobox = select.getByRole('combobox');
    const dropdown = select.locator('mdc-popover');
    await container.evaluate(element => element.removeAttribute('hidden'));
    await combobox.click();
    for (const [width, expected] of [
      ['20rem', 320],
      ['50%', 116],
      ['calc(100% - 2rem)', 200],
    ] as const) {
      await select.evaluate((element: HTMLElement, value) => {
        element.style.setProperty('--mdc-select-listbox-width', value);
      }, width);
      await expect(async () => {
        expect((await dropdown.boundingBox())!.width).toBeCloseTo(expected, 0);
        expect(await container.evaluate(element => element.scrollWidth)).toBe(232);
      }).toPass({ timeout: 3000 });
    }
    await page.keyboard.press('Escape');
    await container.evaluate(element => {
      const child = element.querySelector('mdc-select')!;
      child.remove();
      element.append(child);
    });
    await combobox.click();
    await expect(async () => {
      expect((await dropdown.boundingBox())!.width).toBeCloseTo(200, 0);
    }).toPass({ timeout: 3000 });
  });

  test('should preserve intrinsic listbox widths across strategies', async ({ componentsPage }) => {
    const { page } = componentsPage;
    await componentsPage.mount({
      html: `
        <div style="width: 232px;">
          <mdc-select label="Example choice">
            <mdc-selectlistbox>
              <mdc-option value="first" label="First option"></mdc-option>
            </mdc-selectlistbox>
          </mdc-select>
        </div>
      `,
      clearDocument: true,
    });
    const select = page.locator('mdc-select');
    const combobox = select.getByRole('combobox');
    const dropdown = select.locator('mdc-popover');
    for (const width of ['max-content', 'min-content', 'fit-content']) {
      await select.evaluate((element: HTMLElement, value) => {
        element.style.setProperty('--mdc-select-listbox-width', value);
      }, width);
      let absoluteWidth = 0;
      for (const strategy of ['absolute', 'fixed']) {
        await select.evaluate((element, value) => element.setAttribute('strategy', value), strategy);
        await combobox.click();
        await expect(dropdown).toBeVisible();
        if (strategy === 'absolute') {
          absoluteWidth = (await dropdown.boundingBox())!.width;
          expect(absoluteWidth).toBeGreaterThan(50);
        } else {
          const expectedWidth = absoluteWidth;
          await expect(async () => {
            expect((await dropdown.boundingBox())!.width).toBeCloseTo(expectedWidth, 0);
          }).toPass({ timeout: 3000 });
        }
        await page.keyboard.press('Escape');
      }
    }
  });

  configurations.forEach(configuration => {
    test(`should preserve ${configuration.name} sizing across strategies, direction and resizing`, async ({
      componentsPage,
    }) => {
      const { page } = componentsPage;
      await page.setViewportSize({ width: 1000, height: 760 });
      await componentsPage.mount({
        html: `
          <div id="select-container" style="width: 232px; margin: 8rem;">
            <mdc-select label="Example choice" style="${configuration.style}">
              <mdc-selectlistbox>
                <mdc-option value="first" label="First option"></mdc-option>
                <mdc-option value="last" label="Last option"></mdc-option>
              </mdc-selectlistbox>
            </mdc-select>
          </div>
        `,
        clearDocument: true,
      });
      const select = page.locator('mdc-select');
      const combobox = select.getByRole('combobox');
      const dropdown = select.locator('mdc-popover');
      for (const direction of ['ltr', 'rtl']) {
        await page.locator('html').evaluate((element, dir) => element.setAttribute('dir', dir), direction);
        for (const strategy of [undefined, 'absolute', 'fixed']) {
          await select.evaluate((element, value) => {
            if (value) element.setAttribute('strategy', value);
            else element.removeAttribute('strategy');
          }, strategy);
          await combobox.click();
          await expect(dropdown).toBeVisible();
          for (const [width, expectedWidth] of [
            [232, configuration.widths[0]],
            [320, configuration.widths[1]],
          ]) {
            await page.locator('#select-container').evaluate((element: HTMLElement, value) => {
              const { style } = element;
              style.width = `${value}px`;
            }, width);
            await expect(async () => {
              expect((await dropdown.boundingBox())!.width).toBeCloseTo(expectedWidth, 0);
            }).toPass({ timeout: 3000 });
          }
          await page.keyboard.press('Escape');
          await expect(dropdown).not.toBeVisible();
          await expect(combobox).toBeFocused();
        }
      }
    });
  });
});
