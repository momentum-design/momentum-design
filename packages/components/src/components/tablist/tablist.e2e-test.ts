import { type ConsoleMessage, expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
// import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { Variant } from '../tab/tab.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  'active-tab-id'?: string;
  'data-aria-labelledby'?: string;
  'data-aria-label'?: string;
  tabvariant?: Variant;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="mdc-tablist-example">
      <h3 id="tabs-title" hidden>Tablist example</h3>
      <mdc-tablist
        active-tab-id=${restArgs['active-tab-id']}
        data-aria-labelledby=${restArgs['data-aria-labelledby']}
        data-aria-label=${restArgs['data-aria-label']}
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

test('mdc-tablist', async ({ componentsPage, isMobile }) => {
  const tablistPage = await setup({
    componentsPage,
  });

  /**
   * ADDITIONAL LOCATORS
   * tablistComponent - The mdc-tablist component itself.
   * tablist - The role=tablist element within the mdc-tablist component.
   */
  const tablistComponent = tablistPage.getByTestId('tablist-component');
  const tablist = tablistPage.getByRole('tablist');

  const tabIds: Array<string> = await componentsPage.page.evaluate(() => {
    const tabs = Array.from(document.querySelectorAll('mdc-tab') || []);
    const tabIds = tabs.map((tab) => String(tab.tabId));
    return tabIds;
  });

  /**
   * MATCH TAB ID
   * Checks if the tabId from the console message matches the tabId passed in.
   * @param msg - ConsoleMessage type
   * @param tabId - The tabId to match
   * @returns boolean - true if the tabId matches, false otherwise
   */
  const matchTabId = async (msg: ConsoleMessage, tabId: string) => {
    if (msg.type() === 'dir') {
      const type: string = await (await msg.args()[0]?.getProperty('type'))?.jsonValue();
      if (type !== 'change') {
        return;
      }

      const tabIdFromMsg: string = await (await msg.args()[0]?.getProperty('tabId'))?.jsonValue();

      expect(tabIdFromMsg === tabId).toBeTruthy();
    }
  };

  /**
   * DOM EVENT LISTENER
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
   * DELAY
   * Wait for 300ms.
   */
  const wait: Promise<void> = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
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
          await page.evaluate((isMobile) => {
            const tablist = document.querySelector('mdc-tablist');
            if (isMobile) {
              // set the music tab as active
              tablist?.setAttribute('active-tab-id', 'photos-tab');
              tablist?.setAttribute('active-tab-id', 'music-tab');
            }
          }, isMobile);
        },
      });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('default tab ID is set if active-tab-id is not provided', async () => {
      const activeTab = tablistComponent.getByRole('tab', { selected: true });
      await expect(activeTab).toHaveAttribute('active');
      await expect(activeTab).toHaveAttribute('tabindex', '0');
    });

    await test.step('active tab is set', async () => {
      await componentsPage.setAttributes(tablistComponent, { 'active-tab-id': 'downloads-tab' });
      const activeTab = tablistComponent.getByRole('tab', { name: 'Downloads' });
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
      await expect(activeTab).toHaveAttribute('tab-id', 'downloads-tab');
      await expect(activeTab).toHaveAttribute('aria-controls', 'downloads-panel');
    });

    await test.step(
      'role tablist should have default aria-labelled attribute if not provided',
      async () => {
        await expect(tablist).toHaveAttribute('aria-label', 'Tab List');
      },
    );

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
          const listener = async (msg: ConsoleMessage) => { await matchTabId(msg, 'downloads-tab'); };
          await componentsPage.setAttributes(tablistComponent, { 'active-tab-id': 'photos-tab' });
          await wait;
          componentsPage.page.on('console', listener);

          await tablistComponent.getByRole('tab', { name: 'Downloads' }).click();

          await wait;

          componentsPage.page.off('console', listener);

          await test.step(
            'tab should become active when clicked on in previous step',
            async () => {
              const activeTab = tablistComponent.getByRole('tab', { name: 'Downloads' });
              await expect(activeTab).toHaveAttribute('aria-selected', 'true');
              await expect(activeTab).toHaveAttribute('active');
            },
          );
        },
      );
    });

    await test.step('keyboard', async () => {
      await test.step(
        `component should fire a Custom Event with type change and tabId of the focused tab in the detail object
         on pressing space/enter`,
        async () => {
          await componentsPage.setAttributes(tablistComponent, { 'active-tab-id': 'photos-tab' });
          const listener = async (msg: ConsoleMessage) => { await matchTabId(msg, 'videos-tab'); };
          await wait;
          componentsPage.page.on('console', listener);

          await tablistComponent.getByRole('tab', { selected: true }).focus();
          await componentsPage.page.keyboard.press('ArrowRight');
          // randomize between enter and space
          await componentsPage.page.keyboard.press(['Enter', 'Space'][Math.round(Math.random())]);
          await wait;
          componentsPage.page.off('console', listener);

          await test.step(
            'tab should become active on pressing space/enter in previous step',
            async () => {
              const activeTab = tablistComponent.getByRole('tab', { name: 'Videos' });
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

      await test.step('right arrow should focus next tab', async () => {
        await tablistPage.focus();
        await tablistComponent.locator(`[tab-id="${tabIds[3]}"]`)?.first()?.focus();
        await componentsPage.page.keyboard.press('ArrowRight');

        await expect(tablistComponent.locator(`[tab-id="${tabIds[4]}"]`)?.first())?.toBeFocused();
      });

      await test.step('left arrow should focus previous tab', async () => {
        await tablistPage.focus();
        await tablistComponent.locator(`[tab-id="${tabIds[2]}"]`)?.first()?.focus();
        await componentsPage.page.keyboard.press('ArrowLeft');

        await expect(tablistComponent.locator(`[tab-id="${tabIds[1]}"]`)?.first())?.toBeFocused();
      });

      await test.step('home should focus first tab', async () => {
        await tablistPage.focus();
        await tablistComponent.locator(`[tab-id="${tabIds[3]}"]`)?.first()?.focus();
        await componentsPage.page.keyboard.press('Home');

        await expect(tablistComponent.locator(`[tab-id="${tabIds[0]}"]`)?.first())?.toBeFocused();
      });

      await test.step('end should focus last tab', async () => {
        await tablistPage.focus();
        await tablistComponent.locator(`[tab-id="${tabIds[3]}"]`)?.first()?.focus();
        await componentsPage.page.keyboard.press('End');

        await expect(tablistComponent.locator(`[tab-id="${tabIds[tabIds.length - 1]}"]`)?.first())?.toBeFocused();
      });

      await test.step('left arrow on first tab should focus last tab', async () => {
        await tablistPage.focus();
        await tablistComponent.locator(`[tab-id="${tabIds[0]}"]`)?.first()?.focus();
        await componentsPage.page.keyboard.press('ArrowLeft');

        await expect(tablistComponent.locator(`[tab-id="${tabIds[tabIds.length - 1]}"]`)?.first())?.toBeFocused();
      });

      await test.step('right arrow on last tab should focus first tab', async () => {
        await tablistPage.focus();
        await tablistComponent.locator(`[tab-id="${tabIds[tabIds.length - 1]}"]`)?.first()?.focus();
        await componentsPage.page.keyboard.press('ArrowRight');

        await expect(tablistComponent.locator(`[tab-id="${tabIds[0]}"]`)?.first())?.toBeFocused();
      });
    });
  });
});
