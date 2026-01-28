/* eslint-disable no-await-in-loop */
import { capitalize } from 'lodash';

import { ComponentsPage, test, expect } from '../../../config/playwright/setup';

import type Spatialnavigationprovider from './index';

type SetupOptions = {
  componentsPage: ComponentsPage;
  keyMapping?: 'arrows' | 'wasd';
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, keyMapping } = args;

  await componentsPage.mount({
    html: ` 
      <div>
        <style>
          .button-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
          }
        </style>
        <mdc-spatialnavigationprovider id="snp-provider">
          <div class="button-grid">
            <mdc-button id="btn-1">button 1</mdc-button>
            <mdc-button id="btn-2">button 2</mdc-button>
            <mdc-button id="btn-3">button 3</mdc-button>
            <mdc-button id="btn-4">button 4</mdc-button>
            <mdc-button id="btn-5">button 5</mdc-button>
            <mdc-button id="btn-6">button 6</mdc-button>
            <mdc-button id="btn-7">button 7</mdc-button>
            <mdc-button id="btn-8">button 8</mdc-button>
            <mdc-button id="btn-9">button 9</mdc-button>
          </div>
        </mdc-spatialnavigationprovider
      </div>
    `,
    clearDocument: true,
  });

  const locators = {
    snpProvider: componentsPage.page.locator('#snp-provider'),
    btn1: componentsPage.page.locator('#btn-1'),
    btn2: componentsPage.page.locator('#btn-2'),
    btn3: componentsPage.page.locator('#btn-3'),
    btn4: componentsPage.page.locator('#btn-4'),
    btn5: componentsPage.page.locator('#btn-5'),
    btn6: componentsPage.page.locator('#btn-6'),
    btn7: componentsPage.page.locator('#btn-7'),
    btn8: componentsPage.page.locator('#btn-8'),
    btn9: componentsPage.page.locator('#btn-9'),
  } as const;

  await locators.snpProvider.waitFor();
  await locators.snpProvider.evaluate((el: Spatialnavigationprovider, keyMapping) => {
    // eslint-disable-next-line no-param-reassign
    el.navigationKeyMapping =
      keyMapping === 'arrows'
        ? {
            up: 'ArrowUp',
            down: 'ArrowDown',
            left: 'ArrowLeft',
            right: 'ArrowRight',
            enter: 'Enter',
            escape: 'Escape',
          }
        : {
            up: 'w',
            down: 's',
            left: 'a',
            right: 'd',
            enter: 'e',
            escape: 'q',
          };
  }, keyMapping || 'arrows');

  return locators;
};

test('mdc-spatialnavigationprovider', async ({ componentsPage }) => {
  await test.step(`Press any direction key moves the focus to the first button in the grid`, async () => {
    for (const key of ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']) {
      const locators = await setup({ componentsPage });

      await componentsPage.page.keyboard.press(key);
      await expect(locators.btn1).toBeFocused();
    }
  });

  await test.step('2D navigation works correctly', async () => {
    const locators = await setup({ componentsPage });
    const { keyboard } = componentsPage.page;

    await keyboard.press('ArrowDown');
    await expect(locators.btn1).toBeFocused();

    await keyboard.press('ArrowRight');
    await expect(locators.btn2).toBeFocused();

    await keyboard.press('ArrowRight');
    await expect(locators.btn3).toBeFocused();

    // Focus does not change
    await keyboard.press('ArrowRight');
    await expect(locators.btn3).toBeFocused();

    await keyboard.press('ArrowDown');
    await expect(locators.btn6).toBeFocused();

    await keyboard.press('ArrowDown');
    await expect(locators.btn9).toBeFocused();

    // Focus does not change
    await keyboard.press('ArrowDown');
    await expect(locators.btn9).toBeFocused();

    await keyboard.press('ArrowUp');
    await expect(locators.btn6).toBeFocused();

    await keyboard.press('ArrowLeft');
    await expect(locators.btn5).toBeFocused();

    await keyboard.press('ArrowLeft');
    await expect(locators.btn4).toBeFocused();

    // Focus does not change
    await keyboard.press('ArrowLeft');
    await expect(locators.btn4).toBeFocused();

    await keyboard.press('ArrowUp');
    await expect(locators.btn1).toBeFocused();

    // Focus does not change
    await keyboard.press('ArrowUp');
    await expect(locators.btn1).toBeFocused();
  });

  await test.step('pressing Enter triggers button click', async () => {
    const locators = await setup({ componentsPage });
    const { keyboard } = componentsPage.page;

    const waitForClick = await componentsPage.waitForEvent(locators.btn1, 'click');
    await keyboard.press('ArrowDown');
    await keyboard.press('Enter');

    await expect(waitForClick).toEventEmitted();
  });

  await test.step('provider events', async () => {
    await test.step('two events emitted before navigation', async () => {
      const locators = await setup({ componentsPage });
      const { keyboard } = componentsPage.page;

      await keyboard.press('ArrowRight');
      await expect(locators.btn1).toBeFocused();
      const waitForNavBeforeProcessEvent = await componentsPage.waitForEvent(locators.btn1, 'navbeforeprocess');
      const waitForNavBeforeFocus = await componentsPage.waitForEvent(locators.btn1, 'navbeforefocus');

      await keyboard.press('ArrowRight');

      await expect(locators.btn2).toBeFocused();
      await expect(waitForNavBeforeProcessEvent).toEventEmitted();
      await expect(waitForNavBeforeFocus).toEventEmitted();
    });

    await test.step('only navbeforeprocess emitted when no more focusable element(s) in the given direction', async () => {
      const locators = await setup({ componentsPage });
      const { keyboard } = componentsPage.page;

      await keyboard.press('ArrowLeft');
      await expect(locators.btn1).toBeFocused();
      await locators.btn1.evaluate(el => {
        el.addEventListener('navbeforeprocess', event => event.preventDefault(), { once: true });
      });

      const waitForNavBeforeProcessEvent = await componentsPage.waitForEvent(locators.btn1, 'navbeforeprocess');
      const waitForNavBeforeFocus = await componentsPage.waitForEvent(locators.btn1, 'navbeforefocus');

      await keyboard.press('ArrowLeft');

      await expect(waitForNavBeforeProcessEvent).toEventEmitted();

      // navbeforefocus not triggered
      await expect(waitForNavBeforeFocus).not.toEventEmitted();
      // Focus does not change
      await expect(locators.btn2).not.toBeFocused();
    });

    await test.step('call preventDefault on navbeforeprocess event stops spatial navigation search for the next focusable element', async () => {
      const locators = await setup({ componentsPage });
      const { keyboard } = componentsPage.page;

      await keyboard.press('ArrowRight');
      await expect(locators.btn1).toBeFocused();
      await locators.btn1.evaluate(el => {
        el.addEventListener('navbeforeprocess', event => event.preventDefault(), { once: true });
      });

      const waitForNavBeforeProcessEvent = await componentsPage.waitForEvent(locators.btn1, 'navbeforeprocess');
      const waitForNavBeforeFocus = await componentsPage.waitForEvent(locators.btn1, 'navbeforefocus');

      await keyboard.press('ArrowRight');

      await expect(waitForNavBeforeProcessEvent).toEventEmitted();

      // navbeforefocus not triggered
      await expect(waitForNavBeforeFocus).not.toEventEmitted();
      // Focus does not change
      await expect(locators.btn2).not.toBeFocused();
    });

    await test.step('escape key trigger "navback" event', async () => {
      const locators = await setup({ componentsPage });
      const { keyboard } = componentsPage.page;

      const waitForNavBackEvent = await componentsPage.waitForEvent(locators.snpProvider, 'navback');

      await keyboard.press('Escape');

      await expect(waitForNavBackEvent).toEventEmitted();
    });

    await test.step('"navback" event can be canceled', async () => {
      const locators = await setup({ componentsPage });
      const { keyboard } = componentsPage.page;

      await locators.snpProvider.evaluate(el => {
        el.addEventListener('navback', event => event.preventDefault(), { once: true });
      });

      // setup multiple go back elements
      await componentsPage.setAttributes(locators.btn5, {
        [`data-spatial-go-back`]: '',
      });

      const waitForBtn5Click = await componentsPage.waitForEvent(locators.btn5, 'click');

      // Move to btn 1 first
      await keyboard.press('Escape');

      await expect(waitForBtn5Click).not.toEventEmitted();
    });
  });

  await test.step('Data attributes', async () => {
    for (const dir of ['up', 'down', 'left', 'right']) {
      await test.step(`next focusable overwrites in "${dir}" direction`, async () => {
        const locators = await setup({ componentsPage });
        const { keyboard } = componentsPage.page;

        // Focus should jump to btn 9 when direction key pressed on btn 1
        await componentsPage.setAttributes(locators.btn1, {
          [`data-spatial-${dir}`]: 'btn-9',
        });

        // Move to btn 1 first
        await keyboard.press('ArrowRight');

        await keyboard.press(`Arrow${capitalize(dir)}`);
        await expect(locators.btn9).toBeFocused();
      });
    }

    await test.step(`first element data-spatial-go-back clicked when escape pressed`, async () => {
      const locators = await setup({ componentsPage });
      const { keyboard } = componentsPage.page;

      // setup multiple go back elements
      await componentsPage.setAttributes(locators.btn5, {
        [`data-spatial-go-back`]: '',
      });
      await componentsPage.setAttributes(locators.btn9, {
        [`data-spatial-go-back`]: '',
      });

      const waitForBtn5Click = await componentsPage.waitForEvent(locators.btn5, 'click');
      const waitForBtn9Click = await componentsPage.waitForEvent(locators.btn9, 'click');

      // Move to btn 1 first
      await keyboard.press('Escape');

      await expect(waitForBtn5Click).toEventEmitted();
      await expect(waitForBtn9Click).not.toEventEmitted();
    });

    await test.step('data-spatial-focusable make element focusable', async () => {
      const locators = await setup({ componentsPage });
      const { keyboard } = componentsPage.page;

      await componentsPage.setAttributes(locators.btn4, { tabindex: '-1' });
      await componentsPage.setAttributes(locators.btn7, { tabindex: '-1', 'data-spatial-focusable': '' });

      // initial focus on btn1
      await keyboard.press('ArrowDown');
      await expect(locators.btn1).toBeFocused();

      // skip btn2 and focus btn3
      await keyboard.press('ArrowDown');
      await expect(locators.btn7).toBeFocused();
    });
  });
});
