import { type ConsoleMessage, expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { TAB_VARIANTS } from '../tab/tab.constants';
import type { Variant } from '../tab/tab.types';

type Set = {
  componentsPage: ComponentsPage;
  'active-tab-id'?: string;
  'data-aria-label'?: string;
};

const renderTabs = (variant: Variant = TAB_VARIANTS.PILL, hideText = false) => `<mdc-tab
  variant=${variant}
  ${hideText ? '' : 'text="Photos"'}
  aria-label="Photos"
  icon-name="add-photo-bold"
  tab-id="photos-tab"
  aria-controls="photos-panel"
  active>
  </mdc-tab>
  <mdc-tab variant=${variant}
  ${hideText ? '' : 'text="Videos"'}
  aria-label="Videos"
  icon-name="video-bold"
  tab-id="videos-tab"
  aria-controls="videos-panel">
  <mdc-badge slot="badge" type="counter" counter="5" aria-label="5 New videos"></mdc-badge>
  </mdc-tab>
  <mdc-tab variant=${variant}
  ${hideText ? '' : 'text="Music"'}
  aria-label="Music"
  icon-name="file-music-bold"
  tab-id="music-tab"
  aria-controls="music-panel">
  </mdc-tab>
  <mdc-tab
  variant=${variant}
  ${hideText ? '' : 'text="Documents"'}
  aria-label="Documents"
  icon-name="document-bold"
  tab-id="documents-tab"
  aria-controls="documents-panel">
  </mdc-tab>
  <mdc-tab
  variant=${variant}
  ${hideText ? '' : 'text="Downloads"'}
  aria-label="Downloads"
  icon-name="cloud-download-bold"
  tab-id="downloads-tab"
  aria-controls="downloads-panel">
  </mdc-tab>`;

const setup = async (args: Set) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="mdc-tablist-example">
      <mdc-tablist
        active-tab-id=${restArgs['active-tab-id']}
        data-aria-label=${restArgs['data-aria-label']}
        data-testid="tablist-component"
      >
        ${renderTabs()}
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

  const mdcTablist = componentsPage.page.locator('mdc-tablist');
  await mdcTablist.waitFor();

  return mdcTablist;
};

test('mdc-tablist', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-tablist');

    // default variant
    stickerSheet.setChildren(renderTabs());
    await stickerSheet.createMarkupWithCombination({});

    // variant: glass tab
    stickerSheet.setChildren(renderTabs(TAB_VARIANTS.GLASS));
    await stickerSheet.createMarkupWithCombination({});

    // variant: line tab
    stickerSheet.setChildren(renderTabs(TAB_VARIANTS.LINE));
    await stickerSheet.createMarkupWithCombination({});

    // variant: icon only tabs
    stickerSheet.setChildren(renderTabs(TAB_VARIANTS.PILL, true));
    await stickerSheet.createMarkupWithCombination({});

    await stickerSheet.mountStickerSheet();
    const container = stickerSheet.getWrapperContainer();

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-tablist', { element: container });
    });
  });

  /**
   * ADDITIONAL LOCATORS
   *
   * tablist - The role=tablist element within the mdc-tablist component.
   * tabs - The role=tab element within the mdc-tablist component.
   * arrowButtons - The mdc-button elements within the mdc-tablist component.
   */
  const mdcTablist = await setup({ componentsPage });
  const tablist = mdcTablist.getByRole('tablist');
  const tabs = mdcTablist.getByRole('tab');
  const arrowButtons = mdcTablist.locator('mdc-button');

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute active-tab-id is set to first tab by default', async () => {
      const activeTab = tabs.first();
      await expect(activeTab).toHaveAttribute('active');
      await expect(activeTab).toHaveAttribute('tabindex', '0');
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
    });

    await test.step('attribute active-tab-id should be set to downloads-tab', async () => {
      await componentsPage.setAttributes(mdcTablist, { 'active-tab-id': 'downloads-tab' });
      await expect(mdcTablist).toHaveAttribute('active-tab-id', 'downloads-tab');
      const activeTab = tabs.last();
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
      await expect(activeTab).toHaveAttribute('active');
      await expect(tabs.first()).not.toHaveAttribute('active');
      await expect(activeTab).toHaveAttribute('aria-controls', 'downloads-panel');
    });

    await test.step('attribute data-aria-label should be set to aria-label on tablist container', async () => {
      await componentsPage.setAttributes(mdcTablist, { 'data-aria-label': 'Media types tabs' });
      await expect(tablist).toHaveAttribute('aria-label', 'Media types tabs');
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('tablist-default');
  });

  /**
   * WIDTH FUNCTIONS
   *
   * @remarks
   *
   * Playwright runs with its own viewport, so the setViewPortSize function doesn't always trigger the resize event.
   * This causes bugs in tests where we rely on the resize event to trigger.
   * To know more, see https://github.com/microsoft/playwright/issues/20721#issuecomment-1421644560
   */
  const initialWidth = await mdcTablist.evaluate((div) => div.getBoundingClientRect().width);

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
          await componentsPage.setAttributes(tablist, {
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
          await componentsPage.setAttributes(tablist, {
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
        await mdcTablist.focus();

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

          const firstArrowButton = tablist
            .locator(`mdc-button[prefix-icon="${firstArrowButtonSelector}"]`).first();

          await firstArrowButton.focus();

          // click the visible arrow button till it gets unrendered.
          await expect(async () => {
            await firstArrowButton.press('Space');
            await expect(firstArrowButton).toHaveCount(0);
          }).toPass();

          const secondArrowButton = tablist
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
});
