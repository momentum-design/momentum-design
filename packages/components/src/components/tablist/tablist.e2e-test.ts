import { type ConsoleMessage, expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
// import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { Variant } from '../tab/tab.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  'active-tab-id': string;
  'data-aria-labelledby': string;
  'data-aria-label': string;
  tabvariant: Variant;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="mdc-tablist-example">
      <h3 id="tabs-title" hidden>Tablist example</h3>
      <mdc-tablist
        active-tab-id="${restArgs['active-tab-id']}"
        data-aria-labelledby="${restArgs['data-aria-labelledby']}"
        data-aria-label="${restArgs['data-aria-label']}"
        data-testid="tablist-component"
      >
        <mdc-tab
          variant=${restArgs.tabvariant}
          text="Photos"
          icon-name="add-photo-bold"
          tab-id="photos-tab"
          aria-controls="photos-panel">
        </mdc-tab>
        <mdc-tab variant=${restArgs.tabvariant}
          text="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel">
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab variant=${restArgs.tabvariant}
          text="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel">
        </mdc-tab>
        <mdc-tab
          variant=${restArgs.tabvariant}
          text="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel">
        </mdc-tab>
        <mdc-tab
          variant=${restArgs.tabvariant}
          text="Downloads"
          icon-name="cloud-download-bold"
          tab-id="downloads-tab"
          aria-controls="downloads-panel">
        </mdc-tab>
      </mdc-tablist>

      <!-- The following is an example of the markup for the tab panels.
      This markup is not part of the component and is only provided for context. -->
        <div id="photos-panel" role="tabpanel" aria-labelledby="photos-tab" hidden>
          <p>Photos panel</p>
        </div>
        <div id="videos-panel" role="tabpanel" aria-labelledby="videos-tab" hidden>
          <p>Videos panel</p>
        </div>
        <div id="music-panel" role="tabpanel" aria-labelledby="music-tab" hidden>
          <p>Music panel</p>
        </div>
        <div id="documents-panel" role="tabpanel" aria-labelledby="documents-tab" hidden>
          <p>Documents panel</p>
        </div>
        <div id="downloads-panel" role="tabpanel" aria-labelledby="downloads-tab" hidden>
          <p>Downloads panel</p>
        </div>
      <!-- End of example markup for the tab panels -->
    </div>
    `,
    clearDocument: true,
  });

  const tablist = componentsPage.page.locator('div#mdc-tablist-example');
  await tablist.waitFor();

  return tablist;
};

// test.use({ viewport: { width: 400, height: 1000 } });
test('mdc-tablist', async ({ componentsPage }) => {
  const tablistPage = await setup({
    componentsPage,
    'active-tab-id': 'videos-tab',
    'data-aria-labelledby': '',
    'data-aria-label': 'Media types',
    tabvariant: 'pill',
  });
  const tablistComponent = tablistPage.getByTestId('tablist-component');
  const tablist = tablistPage.getByRole('tablist');

  /**
   * MATCH TAB ID
   * @param msg - ConsoleMessage type
   * @param tabId - The tabId to match
   * @returns boolean - true if the tabId matches, false otherwise
   */
  const matchTabId = async (msg: ConsoleMessage, tabId: string): Promise<boolean> => {
    const type: string = await (await msg.args()[0]?.getProperty('type'))?.jsonValue();

    if (type !== 'change') {
      return false;
    }

    const tabIdFromMsg: string = await (await msg.args()[0]?.getProperty('tabId'))?.jsonValue();
    return tabIdFromMsg === tabId;
  };

  /**
   * EVENT LISTENERS
   */
  await componentsPage.page.evaluate(() => {
    const tablist = document.querySelector('mdc-tablist');
    tablist?.addEventListener('change', ((event: CustomEvent<{tabId: string}>) => {
      /**
       * since playwright does not listen for dom events,
       * and does not have a way to share data between browser and test environments,
       * we need to depend on the console to share data between the browser and tests.
       */
      // eslint-disable-next-line no-console
      console.dir({
        tabId: event.detail.tabId,
        type: event.type,
      });
    }) as EventListener);
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('tablist-default');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-tablist', { element: tablistPage,
        assertionAfterSwitchingDirection: async (page) => {
          await page.setViewportSize({
            width: page.viewportSize()?.width || 600 - 1,
            height: page.viewportSize()?.height || 200,
          });
        },
      });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('default tab ID is set', async () => {
      await expect(tablistComponent).toHaveAttribute('active-tab-id', 'videos-tab');
    });

    await test.step('active tab is set', async () => {
      const activeTab = tablistComponent.getByRole('tab', { name: 'Videos' });
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
      await expect(activeTab).toHaveAttribute('tab-id', 'videos-tab');
      await expect(activeTab).toHaveAttribute('aria-controls', 'videos-panel');
    });

    await test.step(
      'role tablist should have aria-labelled attribute if tabList element has data-aria-label',
      async () => {
        await componentsPage.setAttributes(tablistComponent, { 'data-aria-label': 'Media types tabs' });
        await expect(tablist).toHaveAttribute('aria-label', 'Media types tabs');
      },
    );

    await test.step(
      'if data-aria-labelledby is set, the tablist has aria-labelledby attribute and the target exists',
      async () => {
        await componentsPage.setAttributes(tablistComponent, { 'data-aria-labelledby': 'h3#tabs-title' });
        const ariaLabelledBySelector = await tablist.getAttribute('aria-labelledby');
        expect(ariaLabelledBySelector).toBe('h3#tabs-title');

        await test.step('the element in the aria-labelledby attribute exists', async () => {
          await expect(tablistPage.locator(String(ariaLabelledBySelector))).toHaveText('Tablist example');
        });
      },
    );
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step(
        'component should fire a Custom Event with type change and tabId of the clicked tab in the detail object',
        async () => {
          const msgPromise = componentsPage.page.waitForEvent('console');

          await tablistComponent.getByRole('tab', { name: 'Downloads' }).click();

          const msg = await msgPromise;
          expect(await matchTabId(msg, 'downloads-tab')).toBeTruthy();
        },
      );

      await test.step(
        'tab should become active when clicked in previous step',
        async () => {
          const activeTab = tablistComponent.getByRole('tab', { name: 'Downloads' });
          await expect(activeTab).toHaveAttribute('aria-selected', 'true');
          await expect(activeTab).toHaveAttribute('active');
        },
      );
    });

    await test.step('keyboard', async () => {
      await test.step(
        'component should fire a Custom Event with type change and tabId of the clicked tab in the detail object',
        async () => {
          const msgPromise = componentsPage.page.waitForEvent('console');

          await tablistComponent.getByRole('tab', { name: 'Documents' }).focus();
          await componentsPage.page.keyboard.press('Enter');

          const msg = await msgPromise;
          expect(await matchTabId(msg, 'documents-tab')).toBeTruthy();

          await test.step(
            'tab should become active when clicked in previous step',
            async () => {
              const activeTab = tablistComponent.getByRole('tab', { name: 'Documents' });
              await expect(activeTab).toHaveAttribute('aria-selected', 'true');
              await expect(activeTab).toHaveAttribute('active');
            },
          );
        },
      );
    });

    await test.step('focus', async () => {
      await test.step('tabbing into the tablist should set focus on the active element', async () => {
        await tablistPage.focus();

        const activeTab = tablistComponent.getByRole('tab', { selected: true });
        await expect(activeTab).toBeFocused();
      });

      // add additional tests here, like tabbing through several parts of the component
    });
  });
});
