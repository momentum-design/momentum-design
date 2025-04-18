import { type ConsoleMessage, expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import type { Variant } from '../tab/tab.types';
import type Tab from '../tab/tab.component';

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
          aria-label="Photos"
          icon-name="add-photo-bold"
          tab-id="photos-tab"
          aria-controls="photos-panel">
        </mdc-tab>
        <mdc-tab variant=${restArgs.tabvariant}
          text="Videos"
          aria-label="Videos"
          icon-name="video-bold"
          tab-id="videos-tab"
          aria-controls="videos-panel">
          <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
        </mdc-tab>
        <mdc-tab variant=${restArgs.tabvariant}
          text="Music"
          aria-label="Music"
          icon-name="file-music-bold"
          tab-id="music-tab"
          aria-controls="music-panel">
        </mdc-tab>
        <mdc-tab
          variant=${restArgs.tabvariant}
          text="Documents"
          aria-label="Documents"
          icon-name="document-bold"
          tab-id="documents-tab"
          aria-controls="documents-panel">
        </mdc-tab>
        <mdc-tab
          variant=${restArgs.tabvariant}
          text="Downloads"
          aria-label="Downloads"
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

  const tablistParent = componentsPage.page.locator('div#mdc-tablist-example');
  await tablistParent.waitFor();

  return tablistParent;
};

test('mdc-tablist', async ({ componentsPage }) => {
  const tablistParent = await setup({ componentsPage });

  /**
   * ADDITIONAL LOCATORS
   *
   * tablistComponent - The mdc-tablist component itself.
   *
   * tablist - The role=tablist element within the mdc-tablist component.
   *
   * tabs - The role=tab element within the mdc-tablist component.
   *
   * arrowButtons - The mdc-button elements within the mdc-tablist component.
   */
  const tablistComponent = tablistParent.getByTestId('tablist-component');
  const tablist = tablistComponent.getByRole('tablist');
  const tabs = tablistComponent.getByRole('tab');
  const arrowButtons = tablistComponent.locator('mdc-button');

  /**
   * WIDTH FUNCTIONS
   *
   * @remarks
   *
   * Playwright runs with its own viewport, so the setViewPortSize function doesn't always trigger the resize event.
   * This causes bugs in tests where we rely on the resize event to trigger.
   * To know more, see https://github.com/microsoft/playwright/issues/20721#issuecomment-1421644560
   */
  const initialWidth = await tablistParent.evaluate((div) => div.getBoundingClientRect().width);

  const setTablistWidth = (width: number) => componentsPage.page.evaluate((width) => {
    const tablist = document.getElementById('mdc-tablist-example');
    if (tablist) {
      tablist.style.width = `${width}px`;
    }
  }, width);

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
    await tabs.nth(1).click();
    await componentsPage.accessibility.checkForA11yViolations('tablist-default');
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
      await componentsPage.setAttributes(tablistComponent, {
        'active-tab-id': (await tabs.last().getAttribute('tab-id')) || '',
      });
      const activeTab = tabs.last();
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
      await expect(activeTab).toHaveAttribute('active');
      await expect(activeTab).toHaveAttribute('aria-controls', (await tabs.last().getAttribute('aria-controls')) || '');
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

        await test.step('the element in the aria-labelledby attribute exists and matches text', async () => {
          await expect(tablistParent.locator(`${ariaLabelledBySelector}`)).toHaveText('Tablist example');
        });
      },
    );
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('resize', async () => {
      await tabs.nth(2).click();

      await test.step('resizing the viewport to 320px width should show atleast one arrow button', async () => {
        await setTablistWidth(320);
        await expect(arrowButtons.first()).toBeVisible();
      });

      await test.step('resizing the viewport to 2000px width should remove both arrow buttons', async () => {
        await setTablistWidth(2000);
        await expect(arrowButtons).toHaveCount(0);
      });

      await setTablistWidth(initialWidth);
    });

    await test.step('mouse/pointer', async () => {
      await test.step(
        'component should fire a Custom Event with type change and tabId of the clicked tab in the detail object',
        async () => {
          // set the first tab as active.
          await componentsPage.setAttributes(tablistComponent, {
            'active-tab-id': (await tabs.first().getAttribute('tab-id')) || '',
          });

          // listen for the change event and assert the tabId matches the last tab's tab-id
          const listener = async (msg: ConsoleMessage) => {
            await matchTabId(msg, (await tabs.last().getAttribute('tab-id')) || '');
          };

          componentsPage.page.on('console', listener);

          await tabs.last().click();

          await wait;

          componentsPage.page.off('console', listener);

          await test.step(
            'tab should become active when clicked on in previous step',
            async () => {
              const activeTab = tabs.last();
              await expect(activeTab).toHaveAttribute('aria-selected', 'true');
              await expect(activeTab).toHaveAttribute('active');
            },
          );
        },
      );

      await test.step('if arrow button is visible, pressing it should scroll the tabs', async () => {
        await tabs.first().click();
        await setTablistWidth(320);
        await arrowButtons.first().waitFor({ state: 'visible', timeout: 3000 });

        if (await arrowButtons.count()) {
          const xAxisPositionInitial = (await tablist.boundingBox())?.x;
          await arrowButtons.first().click();
          const xAxisPositionFinal = (await tablist.boundingBox())?.x;

          expect(xAxisPositionInitial).not.toEqual(xAxisPositionFinal);
        }
        await setTablistWidth(initialWidth);
      });
    });

    await test.step('keyboard', async () => {
      await test.step(
        `component should fire a Custom Event with type change and tabId of the focused tab in the detail object
         on pressing space/enter`,
        async () => {
          // set the first tab as active.
          await componentsPage.setAttributes(tablistComponent, {
            'active-tab-id': (await tabs.first().getAttribute('tab-id')) || '',
          });

          // listen for the change event and assert the tabId matches the 3rd tab's tab-id
          const listener = async (msg: ConsoleMessage) => {
            await matchTabId(msg, (await tabs.nth(2).getAttribute('tab-id')) || '');
          };

          componentsPage.page.on('console', listener);

          await tabs.nth(2).focus();
          // randomize between enter and space
          await componentsPage.page.keyboard.press(['Enter', 'Space'][Math.round(Math.random())]);
          await wait;
          componentsPage.page.off('console', listener);

          await test.step(
            'tab should become active on pressing space/enter in previous step',
            async () => {
              const activeTab = tabs.nth(2);
              await expect(activeTab).toHaveAttribute('aria-selected', 'true');
              await expect(activeTab).toHaveAttribute('active');
            },
          );
        },
      );
    });

    await test.step('focus', async () => {
      await test.step('tabbing into the tablist should set focus on the active element', async () => {
        await tabs.first().click();
        await tablistParent.focus();

        const activeTab = tabs.first();
        await expect(activeTab).toBeFocused();
      });

      await test.step('right arrow should focus next tab', async () => {
        await tabs.nth(3).focus();
        await componentsPage.page.keyboard.press('ArrowRight');

        await expect(tabs.nth(4)).toBeFocused();
      });

      await test.step('left arrow should focus previous tab', async () => {
        await tabs.nth(3).focus();
        await componentsPage.page.keyboard.press('ArrowLeft');

        await expect(tabs.nth(2)).toBeFocused();
      });

      await test.step('home should focus first tab', async () => {
        await tabs.nth(3).focus();
        await componentsPage.page.keyboard.press('Home');

        await expect(tabs.first()).toBeFocused();
      });

      await test.step('end should focus last tab', async () => {
        await tabs.nth(3).focus();
        await componentsPage.page.keyboard.press('End');

        await expect(tabs.last()).toBeFocused();
      });

      await test.step('left arrow on first tab should focus last tab', async () => {
        await tabs.first().focus();
        await componentsPage.page.keyboard.press('ArrowLeft');

        await expect(tabs.last()).toBeFocused();
      });

      await test.step('right arrow on last tab should focus first tab', async () => {
        await tabs.last().focus();
        await componentsPage.page.keyboard.press('ArrowRight');

        await expect(tabs.first()).toBeFocused();
      });

      await test.step('if one arrow button loses focus, the other arrow button gains focus', async () => {
        await tabs.nth(2).click();
        await setTablistWidth(320);
        await arrowButtons.first().waitFor({ state: 'visible', timeout: 3000 });

        if (await arrowButtons.count()) {
          await tabs.first().focus();

          const firstArrowButtonSelector = await arrowButtons.first().getAttribute('prefix-icon');

          const firstArrowButton = tablistComponent
            .locator(`mdc-button[prefix-icon="${firstArrowButtonSelector}"]`).first();

          await firstArrowButton.focus();

          // click the visible arrow button till it gets unrendered.
          await expect(async () => {
            await firstArrowButton.press('Space');
            await expect(firstArrowButton).toHaveCount(0);
          }).toPass();

          const secondArrowButton = tablistComponent
            .locator(`mdc-button:not([prefix-icon="${firstArrowButtonSelector}"])`).first();
          await secondArrowButton.waitFor({ state: 'visible', timeout: 3000 });

          if (await secondArrowButton.count()) {
            await expect(secondArrowButton).toBeFocused();
          }
        }

        await setTablistWidth(initialWidth);
      });

      await test.step(
        'if any arrow button is focused, when both arrow buttons disappear, the active tab should gain focus',
        async () => {
          await tabs.nth(2).click();
          await setTablistWidth(320);
          await arrowButtons.first().waitFor({ state: 'visible', timeout: 3000 });

          if (await arrowButtons.count()) {
            await arrowButtons.first().focus();
            await expect(arrowButtons.first()).toBeFocused();
            await setTablistWidth(2000);

            await expect(arrowButtons).toHaveCount(0);
          }

          await setTablistWidth(initialWidth);
        },
      );
    });
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-tablist');
    const options = {
      createNewRow: true,
    };

    // default variant
    stickerSheet.setChildren(await tablistParent.first().innerHTML());
    await stickerSheet.createMarkupWithCombination({}, options);

    // variant: glass tab
    await componentsPage.page.evaluate(() => {
      document.querySelectorAll('mdc-tab').forEach((tab) => {
        tab?.setAttribute('variant', 'glass');
      });
    });
    stickerSheet.setChildren(await tablistParent.first().innerHTML());
    await stickerSheet.createMarkupWithCombination({ }, options);

    // variant: line tab
    await componentsPage.page.evaluate(() => {
      document.querySelectorAll('mdc-tab').forEach((tab) => {
        tab?.setAttribute('variant', 'line');
      });
    });
    stickerSheet.setChildren(await tablistParent.first().innerHTML());
    await stickerSheet.createMarkupWithCombination({ }, options);

    // variant: icon only tabs
    await componentsPage.page.evaluate(() => {
      document.querySelectorAll('mdc-tab').forEach((tab) => {
        tab?.removeAttribute('text');
      });
    });
    stickerSheet.setChildren(await tablistParent.first().innerHTML());
    await stickerSheet.createMarkupWithCombination({ }, options);

    await stickerSheet.mountStickerSheet();
    const container = stickerSheet.getWrapperContainer();

    await test.step('matches screenshot of tab element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-tablist', {
        element: container,
        assertionAfterSwitchingDirection: async (page) => {
          await page.evaluate(() => {
            const tablists = Array.from(document.querySelectorAll('mdc-tablist') || []);

            tablists.forEach((tablist, index) => {
              const tabs = Array.from(tablist.querySelectorAll('mdc-tab')) as Tab[];
              tabs[0]?.click();
              tabs[index < tabs.length ? index : tabs.length - 1]?.click();
            });
          });
        },
      });
    });
  });
});
