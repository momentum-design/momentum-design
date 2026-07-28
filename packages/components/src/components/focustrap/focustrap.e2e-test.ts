// AI-Assisted
import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import { KEYS } from '../../utils/keys';

type SetupOptions = {
  componentsPage: ComponentsPage;
  trapDisabled?: boolean;
  restoreFocusDisabled?: boolean;
  autoFocus?: boolean;
  shouldFocusTrapWrap?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <div id="wrapper" style="display: flex; flex-direction: column; gap: 8px;">
        <button id="before-1">Before 1</button>
        <button id="before-2">Before 2</button>
        <mdc-focustrap
          id="focustrap"
          ${restArgs.trapDisabled ? 'trap-disabled' : ''}
          ${restArgs.restoreFocusDisabled ? 'restore-focus-disabled' : ''}
          ${restArgs.autoFocus ? 'auto-focus' : ''}
        >
          <button id="inside-1">Inside 1</button>
          <button id="inside-2">Inside 2</button>
          <button id="inside-3">Inside 3</button>
        </mdc-focustrap>
        <button id="after">After</button>
      </div>
    `,
    clearDocument: true,
  });

  await componentsPage.page.locator('div#wrapper').waitFor();

  // `shouldFocusTrapWrap` defaults to `true`, so setting it to `false` cannot be expressed
  // via a bare boolean attribute in markup (any attribute presence, incl. "false", parses to
  // true) - it must be set directly via the JS property instead.
  if (restArgs.shouldFocusTrapWrap === false) {
    await componentsPage.page.evaluate(() => {
      const el = document.querySelector('#focustrap') as HTMLElement & { shouldFocusTrapWrap: boolean };
      el.shouldFocusTrapWrap = false;
    });
  }

  return {
    focustrap: componentsPage.page.locator('#focustrap'),
    before1: componentsPage.page.locator('#before-1'),
    before2: componentsPage.page.locator('#before-2'),
    inside1: componentsPage.page.locator('#inside-1'),
    inside2: componentsPage.page.locator('#inside-2'),
    inside3: componentsPage.page.locator('#inside-3'),
    after: componentsPage.page.locator('#after'),
  };
};

test('mdc-focustrap', async ({ componentsPage }) => {
  await test.step('accessibility', async () => {
    await setup({ componentsPage });
    await componentsPage.accessibility.checkForA11yViolations('focustrap-default');
  });

  await test.step('attributes', async () => {
    await test.step('default properties', async () => {
      const { focustrap } = await setup({ componentsPage });
      await expect(focustrap).not.toHaveAttribute('trap-disabled');
      await expect(focustrap).not.toHaveAttribute('restore-focus-disabled');
      await expect(focustrap).not.toHaveAttribute('auto-focus');
    });

    await test.step('trapDisabled attribute reflects', async () => {
      const { focustrap } = await setup({ componentsPage, trapDisabled: true });
      await expect(focustrap).toHaveAttribute('trap-disabled', '');
    });
  });

  await test.step('focus trapping', async () => {
    await test.step('tab cycles only through elements inside the trap and wraps around', async () => {
      const { before2, inside1, inside2, inside3 } = await setup({ componentsPage });

      await before2.focus();
      await componentsPage.page.keyboard.press('Tab');
      await expect(inside1).toBeFocused();

      await componentsPage.page.keyboard.press('Tab');
      await expect(inside2).toBeFocused();

      await componentsPage.page.keyboard.press('Tab');
      await expect(inside3).toBeFocused();

      // wraps back to the first focusable element inside the trap
      await componentsPage.page.keyboard.press('Tab');
      await expect(inside1).toBeFocused();

      // shift+tab wraps back to the last focusable element inside the trap
      await componentsPage.page.keyboard.press('Shift+Tab');
      await expect(inside3).toBeFocused();
    });

    await test.step('tab does not wrap when shouldFocusTrapWrap is false', async () => {
      const { before2, inside1, inside2, inside3 } = await setup({ componentsPage, shouldFocusTrapWrap: false });

      await before2.focus();
      await componentsPage.page.keyboard.press('Tab');
      await expect(inside1).toBeFocused();

      await componentsPage.page.keyboard.press('Tab');
      await expect(inside2).toBeFocused();

      await componentsPage.page.keyboard.press('Tab');
      await expect(inside3).toBeFocused();

      // stays on the last element instead of wrapping to the first
      await componentsPage.page.keyboard.press('Tab');
      await expect(inside3).toBeFocused();

      await componentsPage.page.keyboard.press('Shift+Tab');
      await expect(inside2).toBeFocused();
      await componentsPage.page.keyboard.press('Shift+Tab');
      await expect(inside1).toBeFocused();

      // stays on the first element instead of wrapping to the last
      await componentsPage.page.keyboard.press('Shift+Tab');
      await expect(inside1).toBeFocused();
    });

    await test.step('focus is not trapped when trapDisabled is true', async () => {
      const { before2, inside1, after } = await setup({ componentsPage, trapDisabled: true });

      await before2.focus();
      await componentsPage.page.keyboard.press('Tab');
      await expect(inside1).toBeFocused();

      await componentsPage.page.keyboard.press('Tab');
      await componentsPage.page.keyboard.press('Tab');
      await componentsPage.page.keyboard.press('Tab');
      await expect(after).toBeFocused();
    });
  });

  await test.step('auto focus', async () => {
    await test.step('first focusable element receives focus automatically when autoFocus is true', async () => {
      const { inside1 } = await setup({ componentsPage, autoFocus: true });
      await expect(inside1).toBeFocused();
    });

    await test.step('focus is not moved automatically when autoFocus is false (default)', async () => {
      const { before1, inside1 } = await setup({ componentsPage, autoFocus: false });
      await before1.focus();
      await expect(before1).toBeFocused();
      await expect(inside1).not.toBeFocused();
    });
  });

  await test.step('restore focus', async () => {
    await test.step('focus is restored to the previously focused element when the trap is deactivated', async () => {
      const { focustrap, before1, after } = await setup({ componentsPage, trapDisabled: true });

      await before1.focus();
      await expect(before1).toBeFocused();

      // activating the trap captures `before1` as the previously focused element
      await focustrap.evaluate(el => {
        el.removeAttribute('trap-disabled');
      });

      // simulate focus moving elsewhere while the trap is active
      await after.focus();
      await expect(after).toBeFocused();

      // deactivating the trap should restore focus back to `before1`
      await focustrap.evaluate(el => {
        el.setAttribute('trap-disabled', '');
      });

      await expect(before1).toBeFocused();
    });

    await test.step('focus is not restored when restoreFocusDisabled is true', async () => {
      const { focustrap, before1, after } = await setup({
        componentsPage,
        trapDisabled: true,
        restoreFocusDisabled: true,
      });

      await before1.focus();
      await expect(before1).toBeFocused();

      await focustrap.evaluate(el => {
        el.removeAttribute('trap-disabled');
      });

      await after.focus();
      await expect(after).toBeFocused();

      await focustrap.evaluate(el => {
        el.setAttribute('trap-disabled', '');
      });

      await expect(after).toBeFocused();
    });
  });

  await test.step('events', async () => {
    await test.step('focus-trap-activated is fired when trapDisabled becomes false', async () => {
      const { focustrap } = await setup({ componentsPage, trapDisabled: true });

      const waitForActivated = await componentsPage.waitForEvent(focustrap, 'focus-trap-activated');

      await focustrap.evaluate(el => {
        el.removeAttribute('trap-disabled');
      });

      await expect(waitForActivated).toEventEmitted();
    });

    await test.step('focus-trap-deactivated is fired when trapDisabled becomes true', async () => {
      const { focustrap } = await setup({ componentsPage });

      const waitForDeactivated = await componentsPage.waitForEvent(focustrap, 'focus-trap-deactivated');

      await focustrap.evaluate(el => {
        el.setAttribute('trap-disabled', '');
      });

      await expect(waitForDeactivated).toEventEmitted();
    });
  });

  await test.step('disconnect', async () => {
    await test.step('focus is restored when the component is removed from the DOM', async () => {
      const { focustrap, before1 } = await setup({ componentsPage, trapDisabled: true });

      await before1.focus();
      await expect(before1).toBeFocused();

      // activating the trap captures `before1` as the previously focused element
      await focustrap.evaluate(el => {
        el.removeAttribute('trap-disabled');
      });

      await componentsPage.page.evaluate(() => {
        document.querySelector('#focustrap')?.remove();
      });

      await expect(before1).toBeFocused();
    });
  });

  await test.step('spatial navigation', async () => {
    await test.step('arrow key navigation is confined within an active focus trap', async () => {
      // Mount with the trap initially disabled and activate it only after `wrapElement` has
      // re-parented the DOM under `mdc-spatialnavigationprovider`. Re-parenting an already
      // connected custom element triggers disconnectedCallback/connectedCallback, which would
      // otherwise deactivate an already-active trap without reactivating it.
      const { focustrap, before1, before2, inside1, inside2, inside3 } = await setup({
        componentsPage,
        trapDisabled: true,
      });
      await componentsPage.wrapElement({ wrapperTagName: 'mdc-spatialnavigationprovider' });
      await focustrap.evaluate(el => {
        el.removeAttribute('trap-disabled');
      });
      const { keyboard } = componentsPage.page;

      // navigate down from outside the trap, into it
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(before1).toBeFocused();
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(before2).toBeFocused();
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(inside1).toBeFocused();

      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(inside2).toBeFocused();
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(inside3).toBeFocused();

      // reaching the last focusable element inside the trap should not escape to elements
      // outside of it (e.g. the "after" button)
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(inside3).toBeFocused();

      await keyboard.press(KEYS.ARROW_UP);
      await expect(inside2).toBeFocused();
      await keyboard.press(KEYS.ARROW_UP);
      await expect(inside1).toBeFocused();

      // reaching the first focusable element inside the trap should not escape to elements
      // outside of it (e.g. the "before-2" button)
      await keyboard.press(KEYS.ARROW_UP);
      await expect(inside1).toBeFocused();

      const waitForClick = await componentsPage.waitForEvent(inside1, 'click');
      await keyboard.press(KEYS.ENTER);
      await expect(waitForClick).toEventEmitted();
    });

    await test.step('arrow key navigation is not confined when the trap is disabled', async () => {
      const { before1, before2, inside1, inside2, inside3, after } = await setup({
        componentsPage,
        trapDisabled: true,
      });
      await componentsPage.wrapElement({ wrapperTagName: 'mdc-spatialnavigationprovider' });
      const { keyboard } = componentsPage.page;

      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(before1).toBeFocused();
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(before2).toBeFocused();
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(inside1).toBeFocused();
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(inside2).toBeFocused();
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(inside3).toBeFocused();

      // navigation freely escapes past the (disabled) trap boundary
      await keyboard.press(KEYS.ARROW_DOWN);
      await expect(after).toBeFocused();
    });
  });
});
// End AI-Assisted
