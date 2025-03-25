import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  announcement?: string;
  dataAriaLive?: string;
  delay?: number;
  timeout?: number;
}

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
        ${restArgs.timeout ? `timeout="${restArgs.timeout}"` : ''}>
      </mdc-screenreaderannouncer>
    </div>
    `,
    clearDocument: true,
  });

  const wrapper = componentsPage.page.locator('div#wrapper');
  await wrapper.waitFor();

  const screenReaderAnnouncer = await componentsPage.page.locator('mdc-screenreaderannouncer').first();

  const ariaLiveRegion = await componentsPage.page
    .getByTestId('mdc-screenreaderannouncer-aria-live-region-data-test-id').first();
  return { screenReaderAnnouncer, ariaLiveRegion };
};

test('mdc-screenreaderannouncer', async ({ componentsPage }) => {
  const { screenReaderAnnouncer, ariaLiveRegion } = await setup({ componentsPage });
  await componentsPage.setAttributes(screenReaderAnnouncer, { text: 'Label' });

  await test.step('attributes and announcements', async () => {
    /**
     * ATTRIBUTES
     */
    await test.step('attributes', async () => {
      // Default values for screenreader announcer
      await test.step('default attributes on tab', async () => {
        await expect(screenReaderAnnouncer).toHaveAttribute('announcement', '');
        await expect(screenReaderAnnouncer).toHaveAttribute('data-aria-live', 'polite');
        await expect(screenReaderAnnouncer).toHaveAttribute('delay', '150');
        await expect(screenReaderAnnouncer).toHaveAttribute('timeout', '20000');
      });

      await test.step('set aria live on announcement', async () => {
        await componentsPage.setAttributes(screenReaderAnnouncer, {
          announcement: 'Test announcement',
          'data-aria-live': 'assertive',
          delay: '10',
        });
        await expect(screenReaderAnnouncer).toHaveAttribute('data-aria-live', 'assertive');

        await expect(ariaLiveRegion.locator('div').first()).toHaveAttribute('aria-live', 'assertive');
        await expect(ariaLiveRegion.locator('div').first().locator('p').first())
          .toHaveText('Test announcement');
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
      await test.step('make an announcement with delay', async () => {
        const { screenReaderAnnouncer, ariaLiveRegion } = await setup({ componentsPage });
        await expect(screenReaderAnnouncer).toHaveAttribute('announcement', '');
        await componentsPage.setAttributes(screenReaderAnnouncer, {
          announcement: 'Test announcement 1',
          delay: '10',
          timeout: '100',
        });

        const announcement = ariaLiveRegion.locator('div').locator('p').first();
        await expect(announcement).toHaveText('Test announcement 1');
        await expect(componentsPage.page.getByText('Test announcement 1')).not.toBeVisible();
      });

      await test.step('make multiple announcements', async () => {
        const { screenReaderAnnouncer, ariaLiveRegion } = await setup({ componentsPage });
        const announcements = ['Test announcement 2', 'Test announcement 3'];

        await componentsPage.setAttributes(screenReaderAnnouncer, { announcement: announcements[0], delay: '10' });
        await componentsPage.setAttributes(screenReaderAnnouncer, { announcement: announcements[1], delay: '100' });

        const announcementElements = ariaLiveRegion.locator('div').locator('p');
        await expect(announcementElements.nth(0)).toHaveText('Test announcement 2');

        await expect(announcementElements.nth(1)).toHaveText('Test announcement 3');
      });
    });
  });
});
