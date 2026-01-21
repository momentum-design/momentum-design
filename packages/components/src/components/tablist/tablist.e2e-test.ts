import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { TAB_VARIANTS } from '../tab/tab.constants';
import type { Variant } from '../tab/tab.types';

type SetupOptionsType = {
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

const setup = async (args: SetupOptionsType) => {
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
      const firstTab = tabs.first();
      await expect(firstTab).toHaveAttribute('active');
      await expect(firstTab).toHaveAttribute('tabindex', '0');
      await expect(firstTab).toHaveAttribute('aria-selected', 'true');
    });

    await test.step('attribute active-tab-id should be set to meetings-tab', async () => {
      await componentsPage.setAttributes(mdcTablist, { 'active-tab-id': 'meetings-tab' });
      await expect(mdcTablist).toHaveAttribute('active-tab-id', 'meetings-tab');
      const activeTab = tabs.last();
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
      await expect(activeTab).toHaveAttribute('active');
      await expect(activeTab).toHaveAttribute('aria-controls', 'meetings-panel');
      await expect(tabs.first()).not.toHaveAttribute('active');
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
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('component should change active tab to the clicked tab', async () => {
      const activeTab = tabs.nth(1);
      await activeTab.click();
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
      await expect(activeTab).toHaveAttribute('active');
      await expect(mdcTablist).toHaveAttribute('active-tab-id', 'videos-tab');
      await expect(tabs.nth(0)).not.toHaveAttribute('active');
      await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'false');
    });

    await test.step('component should change active tab on pressing space/enter', async () => {
      await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await componentsPage.page.keyboard.press('Enter');
      const activeTab = tabs.first();
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
      await expect(activeTab).toHaveAttribute('active');
    });

    await test.step('component should fire change event when active tab changes', async () => {
      await setup({ componentsPage });
      const waitForChange = await componentsPage.waitForEvent(mdcTablist, 'change');
      await componentsPage.actionability.pressTab();
      await componentsPage.page.keyboard.press('ArrowRight');
      await componentsPage.page.keyboard.press('Enter');
      await expect(waitForChange).toEventEmitted();
    });
  });

  await test.step('user stories', async () => {
    await test.step(`Given a tablist component with 5 tabs,
       user can navigate using Arrowright and Arrowleft to focus between tabs`, async () => {
      await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await expect(tabs.first()).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus('ArrowRight', [
        tabs.nth(1),
        tabs.nth(2),
        tabs.nth(3),
        tabs.nth(4),
        tabs.first(),
      ]);
      await componentsPage.actionability.pressAndCheckFocus('ArrowLeft', [
        tabs.nth(4),
        tabs.nth(3),
        tabs.nth(2),
        tabs.nth(1),
        tabs.first(),
      ]);
    });

    await test.step(`Given a tablist component with 5 tabs,
       user can navigate using Home and End to focus first and last tabs respectively`, async () => {
      await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await expect(tabs.first()).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus('ArrowRight', [tabs.nth(1), tabs.nth(2)]);
      await componentsPage.page.keyboard.press('Home');
      await expect(tabs.first()).toBeFocused();
      await componentsPage.page.keyboard.press('End');
      await expect(tabs.last()).toBeFocused();
    });

    await test.step(`Given a tablist component with 5 tabs,
       user can navigate to tab 2 and select it by pressing enter`, async () => {
      await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await componentsPage.page.keyboard.press('ArrowRight');
      await componentsPage.page.keyboard.press('Enter');
      await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.nth(1)).toHaveAttribute('active');
      await expect(mdcTablist).toHaveAttribute('active-tab-id', 'videos-tab');
    });

    // resizing viewport only on desktop devices.
    const deviceName = test.info().project.name;
    if (['chrome', 'firefox', 'msedge', 'webkit'].includes(deviceName)) {
      await test.step(`Given a tablist component with 5 tabs and a smaller viewport,
       user can navigate between the arrow buttons and tablist using tab key`, async () => {
        await componentsPage.page.setViewportSize({ width: 320, height: 450 });
        await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressAndCheckFocus('ArrowRight', [tabs.nth(1), tabs.nth(2), tabs.nth(3)]);
        await componentsPage.page.keyboard.press('Space');
        await expect(tabs.nth(3)).toHaveAttribute('aria-selected', 'true');
        await expect(tabs.nth(3)).toHaveAttribute('active');
        await expect(mdcTablist).toHaveAttribute('active-tab-id', 'documents-tab');
        await componentsPage.actionability.pressTab();
        await expect(arrowButtons.last()).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(tabs.nth(3)).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(arrowButtons.first()).toBeFocused();
      });

      await test.step(`Given a tablist component with 5 tabs and a smaller viewport,
          if any arrow button is focused, when both arrow buttons disappear, 
          the active tab should gain focus`, async () => {
        await componentsPage.page.setViewportSize({ width: 320, height: 450 });
        await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressAndCheckFocus('ArrowRight', [tabs.nth(1), tabs.nth(2)]);
        await componentsPage.accessibility.checkForA11yViolations('tablist-with-arrow-buttons');
        await componentsPage.page.keyboard.press('Enter');
        await expect(tabs.nth(2)).toHaveAttribute('aria-selected', 'true');
        await expect(tabs.nth(2)).toHaveAttribute('active');
        await expect(mdcTablist).toHaveAttribute('active-tab-id', 'music-tab');
        await componentsPage.actionability.pressTab();
        await expect(arrowButtons.last()).toBeFocused();
        await componentsPage.page.setViewportSize({ width: 800, height: 450 });
        await expect(tabs.nth(2)).toBeFocused();
        await componentsPage.accessibility.checkForA11yViolations('tablist-without-arrow-buttons');
      });

      await test.step(`Given a tablist component with 5 tabs and a smaller viewport,
        user can scroll to view the tabs by using arrow buttons`, async () => {
        await componentsPage.page.setViewportSize({ width: 320, height: 450 });
        await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await componentsPage.actionability.pressAndCheckFocus('ArrowRight', [tabs.nth(1)]);
        await componentsPage.actionability.pressAndCheckFocus('ArrowLeft', [tabs.first()]);
        await componentsPage.page.keyboard.press('Enter');
        await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
        await expect(tabs.first()).toHaveAttribute('active');
        await expect(mdcTablist).toHaveAttribute('active-tab-id', 'calls-tab');
        await componentsPage.actionability.pressTab();
        await expect(arrowButtons.last()).toBeFocused();
        await componentsPage.visualRegression.takeScreenshot('mdc-tablist', {
          source: 'userflow',
          fileNameSuffix: 'forward-arrow-focused',
        });
        await componentsPage.accessibility.checkForA11yViolations('tablist-forward-arrow-focused');
        await componentsPage.page.keyboard.press('Enter');
        await componentsPage.visualRegression.takeScreenshot('mdc-tablist', {
          source: 'userflow',
          fileNameSuffix: 'forward-arrow-pressed-and-focused',
        });
        await componentsPage.page.keyboard.press('Space');
        await componentsPage.visualRegression.takeScreenshot('mdc-tablist', {
          source: 'userflow',
          fileNameSuffix: 'backward-arrow-focused',
        });
        await componentsPage.accessibility.checkForA11yViolations('tablist-backward-arrow-focused');
        await expect(arrowButtons.first()).toBeFocused();
        await componentsPage.page.keyboard.press('Enter');
        await componentsPage.visualRegression.takeScreenshot('mdc-tablist', {
          source: 'userflow',
          fileNameSuffix: 'backward-arrow-pressed-and-focused',
        });
        await componentsPage.page.keyboard.press('Space');
        await componentsPage.visualRegression.takeScreenshot('mdc-tablist', {
          source: 'userflow',
          fileNameSuffix: 'forward-arrow-focused',
        });
        await expect(arrowButtons.last()).toBeFocused();
      });
    }
  });
});
