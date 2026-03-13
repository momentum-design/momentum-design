/* eslint-disable no-await-in-loop */
// AI-Assisted
import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { KEYS } from '../../utils/keys';

type SetupOptionsType = {
  componentsPage: ComponentsPage;
  'active-tab-id'?: string;
  'aria-label'?: string;
};

const renderTabs = () => `
  <mdc-tab text="Messages" icon-name="chat-regular" tab-id="messages-tab" aria-controls="messages-panel" active>
  </mdc-tab>
  <mdc-tab text="Favorites" icon-name="favorite-regular" tab-id="favorites-tab" aria-controls="favorites-panel">
  </mdc-tab>
  <mdc-tab text="Contacts" icon-name="contact-card-regular" tab-id="contacts-tab" aria-controls="contacts-panel">
  </mdc-tab>
  <mdc-tab text="Meetings" icon-name="meetings-regular" tab-id="meetings-tab" aria-controls="meetings-panel">
  </mdc-tab>
  <mdc-tab text="Calls" icon-name="handset-regular" tab-id="calls-tab" aria-controls="calls-panel">
  </mdc-tab>
`;

const renderTextOnlyTabs = () => `
  <mdc-tab text="Overview" tab-id="overview-tab" aria-label="Overview"></mdc-tab>
  <mdc-tab text="Details" tab-id="details-tab" aria-label="Details"></mdc-tab>
  <mdc-tab text="History" tab-id="history-tab" aria-label="History"></mdc-tab>
  <mdc-tab text="Settings" tab-id="settings-tab" aria-label="Settings"></mdc-tab>
`;

const renderTabsWithBadges = () => `
  <mdc-tab text="Messages" icon-name="chat-regular" tab-id="messages-tab" aria-controls="messages-panel" active>
    <mdc-badge slot="postfix" type="counter" counter="5" aria-label="5 New messages"></mdc-badge>
  </mdc-tab>
  <mdc-tab text="Contacts" icon-name="contact-card-regular" tab-id="contacts-tab" aria-controls="contacts-panel">
    <mdc-badge slot="postfix" type="dot"></mdc-badge>
  </mdc-tab>
  <mdc-tab text="Calls" icon-name="handset-regular" tab-id="calls-tab" aria-controls="calls-panel">
    <mdc-badge slot="postfix" type="counter" counter="3" aria-label="3 Missed calls"></mdc-badge>
  </mdc-tab>
`;

const setup = async (args: SetupOptionsType) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <div id="mdc-verticaltablist-example" style="display: flex; gap: 16px;">
      <mdc-verticaltablist
        active-tab-id=${restArgs['active-tab-id'] || 'messages-tab'}
        aria-label=${restArgs['aria-label'] || 'Navigation tabs'}
        id="verticaltablist-component"
      >
        ${renderTabs()}
      </mdc-verticaltablist>

      <!-- Tab panels for context -->
      <div id="messages-panel" role="tabpanel" aria-labelledby="messages-tab">
        <p>Messages panel</p>
        <button>Example focusable element</button>
      </div>
      <div id="favorites-panel" role="tabpanel" aria-labelledby="favorites-tab" hidden>
        <p>Favorites panel</p>
      </div>
      <div id="contacts-panel" role="tabpanel" aria-labelledby="contacts-tab" hidden>
        <p>Contacts panel</p>
      </div>
      <div id="meetings-panel" role="tabpanel" aria-labelledby="meetings-tab" hidden>
        <p>Meetings panel</p>
      </div>
      <div id="calls-panel" role="tabpanel" aria-labelledby="calls-tab" hidden>
        <p>Calls panel</p>
      </div>
    </div>
    `,
    clearDocument: true,
  });

  const mdcVerticaltablist = componentsPage.page.locator('mdc-verticaltablist');
  await mdcVerticaltablist.waitFor();
  return mdcVerticaltablist;
};

test('mdc-verticaltablist', async ({ componentsPage }) => {
  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-verticaltablist');

    // default tabs with icons and text
    stickerSheet.setChildren(renderTabs());
    await stickerSheet.createMarkupWithCombination({});

    // text only tabs
    stickerSheet.setChildren(renderTextOnlyTabs());
    await stickerSheet.createMarkupWithCombination({});

    // tabs with badges
    stickerSheet.setChildren(renderTabsWithBadges());
    await stickerSheet.createMarkupWithCombination({});

    await stickerSheet.mountStickerSheet();
    const container = stickerSheet.getWrapperContainer();

    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-verticaltablist', { element: container });
    });
  });

  /**
   * ADDITIONAL LOCATORS
   */
  const mdcVerticaltablist = await setup({ componentsPage });
  const tabs = mdcVerticaltablist.getByRole('tab');

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('verticaltablist-default');
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('should have role tablist', async () => {
      await expect(mdcVerticaltablist).toHaveAttribute('role', 'tablist');
    });

    await test.step('should have aria-orientation set to vertical', async () => {
      await expect(mdcVerticaltablist).toHaveAttribute('aria-orientation', 'vertical');
    });

    await test.step('active-tab-id should be set to first tab by default', async () => {
      const firstTab = tabs.first();
      await expect(firstTab).toHaveAttribute('active');
      await expect(firstTab).toHaveAttribute('tabindex', '0');
      await expect(firstTab).toHaveAttribute('aria-selected', 'true');
    });

    await test.step('active-tab-id should be set to calls-tab when changed', async () => {
      await componentsPage.setAttributes(mdcVerticaltablist, { 'active-tab-id': 'calls-tab' });
      await expect(mdcVerticaltablist).toHaveAttribute('active-tab-id', 'calls-tab');
      const activeTab = tabs.last();
      await expect(activeTab).toHaveAttribute('aria-selected', 'true');
      await expect(activeTab).toHaveAttribute('active');
      await expect(activeTab).toHaveAttribute('aria-controls', 'calls-panel');
      await expect(tabs.first()).not.toHaveAttribute('active');
    });

    await test.step('aria-label should be set on the tablist', async () => {
      await componentsPage.setAttributes(mdcVerticaltablist, { 'aria-label': 'Vertical navigation tabs' });
      await expect(mdcVerticaltablist).toHaveAttribute('aria-label', 'Vertical navigation tabs');
    });

    await test.step('tab variant should be set to line automatically', async () => {
      const allTabs = await tabs.all();
      for (const tab of allTabs) {
        await expect(tab).toHaveAttribute('variant', 'line');
      }
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('should change active tab when clicking on a tab', async () => {
        await setup({ componentsPage });
        const activeTab = tabs.nth(2);
        await activeTab.click();
        await expect(activeTab).toHaveAttribute('aria-selected', 'true');
        await expect(activeTab).toHaveAttribute('active');
        await expect(mdcVerticaltablist).toHaveAttribute('active-tab-id', 'contacts-tab');
        await expect(tabs.nth(0)).not.toHaveAttribute('active');
        await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'false');
      });
    });

    await test.step('focus', async () => {
      await test.step('should be focusable with tab key', async () => {
        await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await expect(tabs.first()).toBeFocused();
      });

      await test.step('should return focus to the previously focused tab on Shift+Tab', async () => {
        await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await expect(tabs.first()).toBeFocused();
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await expect(tabs.nth(1)).toBeFocused();
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await expect(tabs.nth(2)).toBeFocused();
        await componentsPage.actionability.pressTab();
        await expect(componentsPage.page.locator('button', { hasText: 'Example focusable element' })).toBeFocused();
        await componentsPage.actionability.pressShiftTab();
        await expect(tabs.nth(2)).toBeFocused();
      });
    });

    await test.step('keyboard', async () => {
      await test.step('should change active tab on pressing Enter', async () => {
        await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
        await expect(tabs.nth(1)).toHaveAttribute('active');
      });

      await test.step('should change active tab on pressing Space', async () => {
        await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await componentsPage.page.keyboard.press(KEYS.SPACE);
        await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
        await expect(tabs.nth(1)).toHaveAttribute('active');
      });

      await test.step('should fire change event when active tab changes', async () => {
        await setup({ componentsPage });
        const waitForChange = await componentsPage.waitForEvent(mdcVerticaltablist, 'change');
        await componentsPage.actionability.pressTab();
        await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
        await componentsPage.page.keyboard.press(KEYS.ENTER);
        await expect(waitForChange).toEventEmitted();
      });

      await test.step('should navigate with ArrowDown and ArrowUp keys', async () => {
        await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await expect(tabs.first()).toBeFocused();
        await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_DOWN, [
          tabs.nth(1),
          tabs.nth(2),
          tabs.nth(3),
          tabs.nth(4),
          tabs.first(),
        ]);
        await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_UP, [
          tabs.nth(4),
          tabs.nth(3),
          tabs.nth(2),
          tabs.nth(1),
          tabs.first(),
        ]);
      });

      await test.step('should navigate to first tab with Home and last tab with End', async () => {
        await setup({ componentsPage });
        await componentsPage.actionability.pressTab();
        await expect(tabs.first()).toBeFocused();
        await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_DOWN, [tabs.nth(1), tabs.nth(2)]);
        await componentsPage.page.keyboard.press(KEYS.HOME);
        await expect(tabs.first()).toBeFocused();
        await componentsPage.page.keyboard.press(KEYS.END);
        await expect(tabs.last()).toBeFocused();
      });
    });

    await test.step('spatial navigation', async () => {
      await setup({ componentsPage });
      await componentsPage.wrapElement({ wrapperTagName: 'mdc-spatialnavigationprovider' });
      const { keyboard } = componentsPage.page;

      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(tabs.nth(0)).toBeFocused();

      // No loop back at the beginning of the list
      await keyboard.press(KEYS.ARROW_UP);
      await expect(tabs.nth(0)).toBeFocused();

      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(tabs.nth(1)).toBeFocused();

      await keyboard.press(KEYS.ENTER);
      await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.nth(1)).toHaveAttribute('active');

      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(tabs.nth(2)).toBeFocused();

      await expect(tabs.nth(2)).not.toHaveAttribute('aria-selected', 'true');
      await expect(tabs.nth(2)).not.toHaveAttribute('active');

      await keyboard.press(KEYS.ENTER);
      await expect(tabs.nth(2)).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.nth(2)).toHaveAttribute('active');

      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(tabs.nth(3)).toBeFocused();
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(tabs.nth(4)).toBeFocused();

      // No loop back at the end of the list
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(tabs.nth(4)).toBeFocused();
    });
  });

  /**
   * USER STORIES
   */
  await test.step('user stories', async () => {
    await test.step(`Given a vertical tablist with 5 tabs,
       user can navigate using ArrowDown and ArrowUp to focus between tabs`, async () => {
      await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await expect(tabs.first()).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_DOWN, [
        tabs.nth(1),
        tabs.nth(2),
        tabs.nth(3),
        tabs.nth(4),
        tabs.first(),
      ]);
      await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_UP, [
        tabs.nth(4),
        tabs.nth(3),
        tabs.nth(2),
        tabs.nth(1),
        tabs.first(),
      ]);
    });

    await test.step(`Given a vertical tablist with 5 tabs,
       user can navigate using Home and End to focus first and last tabs respectively`, async () => {
      await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await expect(tabs.first()).toBeFocused();
      await componentsPage.actionability.pressAndCheckFocus(KEYS.ARROW_DOWN, [tabs.nth(1), tabs.nth(2)]);
      await componentsPage.page.keyboard.press(KEYS.HOME);
      await expect(tabs.first()).toBeFocused();
      await componentsPage.page.keyboard.press(KEYS.END);
      await expect(tabs.last()).toBeFocused();
    });

    await test.step(`Given a vertical tablist with 5 tabs,
       user can navigate to tab 3 and select it by pressing Enter`, async () => {
      await setup({ componentsPage });
      await componentsPage.actionability.pressTab();
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await componentsPage.page.keyboard.press(KEYS.ENTER);
      await expect(tabs.nth(2)).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.nth(2)).toHaveAttribute('active');
      await expect(mdcVerticaltablist).toHaveAttribute('active-tab-id', 'contacts-tab');
    });

    await test.step(`Given a vertical tablist with 5 tabs,
       user can click a tab to select it`, async () => {
      await setup({ componentsPage });
      await tabs.nth(3).click();
      await expect(tabs.nth(3)).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.nth(3)).toHaveAttribute('active');
      await expect(mdcVerticaltablist).toHaveAttribute('active-tab-id', 'meetings-tab');
      await expect(tabs.first()).not.toHaveAttribute('active');
      await expect(tabs.first()).toHaveAttribute('aria-selected', 'false');
    });

    await test.step(`Given a vertical tablist with disabled tabs,
       navigation should skip disabled tabs`, async () => {
      await componentsPage.mount({
        html: `
          <mdc-verticaltablist aria-label="Nav tabs" active-tab-id="tab-1">
            <mdc-tab text="Tab 1" tab-id="tab-1" aria-label="Tab 1"></mdc-tab>
            <mdc-tab text="Tab 2" tab-id="tab-2" aria-label="Tab 2" disabled></mdc-tab>
            <mdc-tab text="Tab 3" tab-id="tab-3" aria-label="Tab 3"></mdc-tab>
            <mdc-tab text="Tab 4" tab-id="tab-4" aria-label="Tab 4" disabled></mdc-tab>
            <mdc-tab text="Tab 5" tab-id="tab-5" aria-label="Tab 5"></mdc-tab>
          </mdc-verticaltablist>
        `,
        clearDocument: true,
      });
      const vtablist = componentsPage.page.locator('mdc-verticaltablist');
      await vtablist.waitFor();
      const vtabs = vtablist.getByRole('tab');

      await componentsPage.actionability.pressTab();
      await expect(vtabs.nth(0)).toBeFocused();

      // Should skip disabled tab-2 and focus tab-3
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(vtabs.nth(2)).toBeFocused();

      // Should skip disabled tab-4 and focus tab-5
      await componentsPage.page.keyboard.press(KEYS.ARROW_DOWN);
      await expect(vtabs.nth(4)).toBeFocused();
    });

    await test.step(`Given a vertical tablist,
       when active-tab-id is set programmatically, the corresponding tab should become active`, async () => {
      await setup({ componentsPage });
      await componentsPage.setAttributes(mdcVerticaltablist, { 'active-tab-id': 'meetings-tab' });
      await expect(tabs.nth(3)).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.nth(3)).toHaveAttribute('active');
      await expect(tabs.first()).toHaveAttribute('aria-selected', 'false');
      await expect(tabs.first()).not.toHaveAttribute('active');
    });
  });
});
// End AI-Assisted
