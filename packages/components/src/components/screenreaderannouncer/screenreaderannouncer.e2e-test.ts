import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  announcement?: string;
  dataAriaLive?: string;
  delay?: number;
  identity?: string;
  timeout?: number;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="wrapper">
      <mdc-text>Test</mdc-text>
      <mdc-screenreaderannouncer
        ${restArgs.announcement ? `announcement="${restArgs.announcement}"` : ''}
        ${restArgs.dataAriaLive ? `data-aria-live="${restArgs.dataAriaLive}"` : ''}
        ${restArgs.delay ? `delay="${restArgs.delay}"` : ''}
        ${restArgs.identity ? `identity="${restArgs.identity}"` : ''}
        ${restArgs.timeout ? `timeout="${restArgs.timeout}"` : ''}>
      </mdc-screenreaderannouncer>
      <div id="test-identity" style="
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      ">
      </div>
    </div>
    `,
    clearDocument: true,
  });

  const wrapper = componentsPage.page.locator('div#wrapper');
  await wrapper.waitFor();

  const screenReaderAnnouncer = componentsPage.page.locator('mdc-screenreaderannouncer').first();
  return { screenReaderAnnouncer };
};

test('mdc-screenreaderannouncer', async ({ componentsPage }) => {
  const { screenReaderAnnouncer } = await setup({ componentsPage });

  await test.step('attributes and announcements', async () => {
    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      // Default values for screenreader announcer
      await test.step('default attributes', async () => {
        await expect(screenReaderAnnouncer).toHaveAttribute('announcement', '');
        await expect(screenReaderAnnouncer).toHaveAttribute('data-aria-live', 'polite');
        await expect(screenReaderAnnouncer).toHaveAttribute('delay', '150');
        await expect(screenReaderAnnouncer).toHaveAttribute('identity', 'mdc-screenreaderannouncer-identity');
        await expect(screenReaderAnnouncer).toHaveAttribute('timeout', '20000');
      });

      await test.step('attribute announcement should create annoucement element and reset', async () => {
        await componentsPage.setAttributes(screenReaderAnnouncer, {
          announcement: 'Test Announcement 1',
          delay: '10',
          timeout: '1000',
        });

        await expect(screenReaderAnnouncer).toHaveAttribute('announcement', '');

        const ariaLiveRegion = componentsPage.page
          .locator('[id="mdc-screenreaderannouncer-identity"]')
          .first()
          .locator('div');
        await expect(ariaLiveRegion.first().locator('p').first()).toHaveText('Test Announcement 1');
        await expect(ariaLiveRegion.first()).toHaveAttribute('aria-live', 'polite');
        await expect(ariaLiveRegion).toHaveCount(0);
      });

      await test.step(`creating an assertive announcement shall create announcement element
         with aria live as assertive`, async () => {
        await componentsPage.setAttributes(screenReaderAnnouncer, {
          announcement: 'Test Announcement 2',
          'data-aria-live': 'assertive',
          delay: '10',
          timeout: '1000',
        });
        await expect(screenReaderAnnouncer).toHaveAttribute('announcement', '');

        const ariaLiveRegion = componentsPage.page
          .locator('[id="mdc-screenreaderannouncer-identity"]')
          .first()
          .locator('div');
        await expect(ariaLiveRegion.first().locator('p').first()).toHaveText('Test Announcement 2');
        await expect(ariaLiveRegion.first()).toHaveAttribute('aria-live', 'assertive');
        await expect(ariaLiveRegion).toHaveCount(0);
      });

      await test.step('attribute identity should create annoucement element in identity element', async () => {
        await componentsPage.setAttributes(screenReaderAnnouncer, {
          announcement: 'Test Announcement 3',
          'data-aria-live': 'polite',
          delay: '10',
          timeout: '1000',
          identity: 'test-identity',
        });

        await expect(screenReaderAnnouncer).toHaveAttribute('identity', 'test-identity');
        const identityAriaLiveRegion = componentsPage.page.locator('[id="test-identity"]').first().locator('div');
        await expect(screenReaderAnnouncer).toHaveAttribute('announcement', '');
        await expect(identityAriaLiveRegion.first().locator('p').first()).toHaveText('Test Announcement 3');
        await expect(identityAriaLiveRegion.first()).toHaveAttribute('aria-live', 'polite');
        await expect(identityAriaLiveRegion).toHaveCount(0);
      });
    });
    /**
     * VISIBILITY
     */
    await test.step('visibility', async () => {
      await test.step('screen reader announcer element is hidden', async () => {
        await expect(screenReaderAnnouncer).toHaveCSS('display', 'none');
        await expect(screenReaderAnnouncer).toHaveCSS('visibility', 'hidden');
      });
      await test.step('screen reader announcer aria live region is visually hidden', async () => {
        const ariaLiveRegion = componentsPage.page.locator('[id="mdc-screenreaderannouncer-identity"]').first();

        await expect(ariaLiveRegion).toHaveCSS('clip', 'rect(0px, 0px, 0px, 0px)');
        await expect(ariaLiveRegion).toHaveCSS('clip-path', 'inset(50%)');
        await expect(ariaLiveRegion).toHaveCSS('height', '1px');
        await expect(ariaLiveRegion).toHaveCSS('overflow', 'hidden');
        await expect(ariaLiveRegion).toHaveCSS('position', 'absolute');
        await expect(ariaLiveRegion).toHaveCSS('white-space', 'nowrap');
        await expect(ariaLiveRegion).toHaveCSS('width', '1px');
      });
    });
    /**
     * ANNOUNCEMENTS
     */
    await test.step('announcements', async () => {
      await test.step('make an announcement', async () => {
        const { screenReaderAnnouncer } = await setup({ componentsPage });
        await expect(screenReaderAnnouncer).toHaveAttribute('announcement', '');
        await componentsPage.setAttributes(screenReaderAnnouncer, {
          announcement: 'Test Announcement 4',
          delay: '10',
          timeout: '1000',
        });

        const ariaLiveRegion = componentsPage.page.locator('[id="mdc-screenreaderannouncer-identity"]').first();
        const announcement = ariaLiveRegion.locator('div').first().locator('p').first();
        await expect(announcement).toHaveText('Test Announcement 4');
        await expect(componentsPage.page.getByText('Test Announcement 4')).not.toBeVisible();
      });

      await test.step('make multiple announcements', async () => {
        const { screenReaderAnnouncer } = await setup({ componentsPage });
        const announcements = [
          'Test Announcement 5',
          'Test Announcement 6',
          'Test Announcement 7',
          'Test Announcement 8',
        ];

        await componentsPage.setAttributes(screenReaderAnnouncer, { announcement: announcements[0], delay: '10' });
        // add debounce time off 500ms + 10ms (for delay)
        await componentsPage.page.waitForTimeout(510);
        await componentsPage.setAttributes(screenReaderAnnouncer, { announcement: announcements[1], delay: '0' });
        await componentsPage.setAttributes(screenReaderAnnouncer, { announcement: announcements[2], delay: '0' });
        await componentsPage.setAttributes(screenReaderAnnouncer, { announcement: announcements[3], delay: '1000' });

        const ariaLiveRegion = componentsPage.page.locator('[id="mdc-screenreaderannouncer-identity"]').first();

        const announcementElements = ariaLiveRegion.locator('div').locator('p');
        await expect(announcementElements.nth(0)).toHaveText(announcements[0]);
        // announce 1st and 2nd get cancelled as there are announced immediately.
        await expect(announcementElements.nth(1)).toHaveText(announcements[3]);
      });
    });
  });
});
