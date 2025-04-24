import { expect } from '@playwright/test';
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
  ${hideText ? '' : 'text="Calls"'}
  aria-label="Calls"
  icon-name="audio-call-bold"
  tab-id="calls-tab"
  aria-controls="calls-panel"
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
  ${hideText ? '' : 'text="Meetings"'}
  aria-label="Meetings"
  icon-name="calendar-month-bold"
  tab-id="meetings-tab"
  aria-controls="meetings-panel">
  </mdc-tab>`;

const setup = async (args: Set) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="mdc-tablist-example">
      <mdc-tablist
        active-tab-id=${restArgs['active-tab-id']}
        data-aria-label=${restArgs['data-aria-label']}
        id="tablist-component"
      >
        ${renderTabs()}
      </mdc-tablist>

      <!-- The following is an example of the markup for the tab panels.
      This markup is not part of the component and is only provided for context. -->
        <div id="calls-panel" role="tabpanel" aria-labelledby="calls-tab" hidden>
        <p>Calls panel</p>
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
      <div id="meetings-panel" role="tabpanel" aria-labelledby="meetings-tab" hidden>
        <p>Meetings panel</p>
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

    await test.step('attribute active-tab-id should be set to meetings-tab', async () => {
      await componentsPage.setAttributes(mdcTablist, { 'active-tab-id': 'meetings-tab' });
      await expect(mdcTablist).toHaveAttribute('active-tab-id', 'meetings-tab');
      const activeTab = tabs.last();
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
      await expect(activeTab).toHaveAttribute('active');
      await expect(tabs.first()).not.toHaveAttribute('active');
      await expect(activeTab).toHaveAttribute('aria-controls', 'meetings-panel');
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
   * Playwright runs with its own viewport, so the setViewPortSize function doesn't always trigger the resize event.
   * This causes bugs in tests where we rely on the resize event to trigger.
   * To know more, see https://github.com/microsoft/playwright/issues/20721#issuecomment-1421644560
   */
  const setTablistWidth = (width: number) => componentsPage.page.evaluate((width) => {
    const tablist = document.getElementById('tablist-component');
    if (tablist) {
      tablist.style.width = `${width}px`;
    }
  }, width);

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
      await setTablistWidth(800);
    });

    await test.step('mouse/pointer', async () => {
      await test.step('component should change active tab to the clicked tab', async () => {
        // set the first tab as active.
        await componentsPage.setAttributes(tablist, {
          'active-tab-id': 'calls-tab',
        });
        const activeTab = tabs.nth(1);
        await activeTab.click();
        await expect(activeTab).toHaveAttribute('aria-selected', 'true');
        await expect(activeTab).toHaveAttribute('active');
        await expect(mdcTablist).toHaveAttribute('active-tab-id', 'videos-tab');
        await expect(tabs.nth(0)).not.toHaveAttribute('active');
        await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'false');
      });

      await test.step('if arrow button is visible, pressing it should scroll the tabs', async () => {
        await tabs.first().click();
        await setTablistWidth(320);
        await arrowButtons.first().waitFor({ state: 'visible', timeout: 1000 });

        if (await arrowButtons.count()) {
          const xAxisPositionInitial = (await tablist.boundingBox())?.x;
          await arrowButtons.first().click();
          const xAxisPositionFinal = (await tablist.boundingBox())?.x;

          expect(xAxisPositionInitial).not.toEqual(xAxisPositionFinal);
        }
        await setTablistWidth(800);
      });
    });

    await test.step('keyboard', async () => {
      await test.step('component should change active tab on pressing space/enter', async () => {
        await tabs.first().focus();
        await componentsPage.page.keyboard.press('Enter'); // activate this tab.
        const activeTab = tabs.first();
        await expect(activeTab).toHaveAttribute('aria-selected', 'true');
        await expect(activeTab).toHaveAttribute('active');
      });
    });

    await test.step('focus', async () => {
      await test.step('right arrow should focus next tab', async () => {
        await tabs.nth(2).focus();
        await componentsPage.page.keyboard.press('ArrowRight');
        await expect(tabs.nth(3)).toBeFocused();
      });

      await test.step('left arrow should focus previous tab', async () => {
        await componentsPage.page.keyboard.press('ArrowLeft');
        await expect(tabs.nth(2)).toBeFocused();
      });

      await test.step('home should focus first tab', async () => {
        await componentsPage.page.keyboard.press('Home');
        await expect(tabs.first()).toBeFocused();
      });

      await test.step('end should focus last tab', async () => {
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

      await test.step(
        'if any arrow button is focused, when both arrow buttons disappear, the active tab should gain focus',
        async () => {
          await tabs.nth(2).click();
          await setTablistWidth(320);
          await arrowButtons.first().waitFor({ state: 'visible', timeout: 1000 });

          if (await arrowButtons.count()) {
            await arrowButtons.first().focus();
            await expect(arrowButtons.first()).toBeFocused();
            await setTablistWidth(2000);

            await expect(arrowButtons).toHaveCount(0);
          }
          await setTablistWidth(800);
        },
      );

      await test.step('if one arrow button loses focus, the other arrow button gains focus', async () => {
        await tabs.nth(2).click();
        await setTablistWidth(320);
        await arrowButtons.first().waitFor({ state: 'visible', timeout: 1000 });

        if (await arrowButtons.count()) {
          await tabs.first().focus();

          const firstArrowButtonSelector = await arrowButtons.first().getAttribute('prefix-icon');

          const firstArrowButton = mdcTablist
            .locator(`mdc-button[prefix-icon="${firstArrowButtonSelector}"]`).first();

          await firstArrowButton.focus();

          // click the visible arrow button till it gets unrendered.
          await expect(async () => {
            await firstArrowButton.press('Space');
            await expect(firstArrowButton).toHaveCount(0);
          }).toPass();

          const secondArrowButton = mdcTablist
            .locator(`mdc-button:not([prefix-icon="${firstArrowButtonSelector}"])`).first();
          await secondArrowButton.waitFor({ state: 'visible', timeout: 1000 });

          if (await secondArrowButton.count()) {
            await expect(secondArrowButton).toBeFocused();
          }
        }
        await setTablistWidth(800);
      });
    });
  });
});
