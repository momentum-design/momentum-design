import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import { BUTTON_SIZES, DEFAULTS } from './buttonsimple.constants';

type SetupOptions = {
  componentsPage: ComponentsPage;
  active?: boolean;
  disabled?: boolean;
  softDisabled?: boolean;
  size?: number;
  children?: any;
  ariaLabel?: string;
  secondButtonForFocus?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      ${restArgs.secondButtonForFocus ? '<div id="wrapper">' : ''}
        <mdc-buttonsimple
          ${restArgs.active ? 'active' : ''}
          ${restArgs.disabled ? 'disabled' : ''}
          ${restArgs.softDisabled ? 'soft-disabled' : ''}
          ${restArgs.size ? `size="${restArgs.size}"` : ''}
        >
          ${restArgs.children}
        </mdc-buttonsimple>
      ${restArgs.secondButtonForFocus ? '<mdc-buttonsimple>Second Button</mdc-buttonsimple></div>' : ''}
        `,
    clearDocument: true,
  });

  const element = restArgs.secondButtonForFocus
    ? componentsPage.page.locator('div#wrapper')
    : componentsPage.page.locator('mdc-buttonsimple');
  await element.waitFor();

  // always return the first button:
  const firstButton = await componentsPage.page.locator('mdc-buttonsimple').first();
  return firstButton;
};

test('mdc-buttonsimple', async ({ componentsPage }) => {
  const buttonsimple = await setup({ componentsPage });
  await test.step('default attributes for button', async () => {
    // Default values for button
    await test.step('attributes size should be present on component by default', async () => {
      await expect(buttonsimple).toHaveAttribute('size', DEFAULTS.SIZE.toString());
    });

    // eslint-disable-next-line no-restricted-syntax
    for (const size of Object.values(BUTTON_SIZES)) {
      // eslint-disable-next-line no-await-in-loop
      await test.step(`attribute size ${size} should be present as expected`, async () => {
        await componentsPage.setAttributes(buttonsimple, { size: size.toString() });
        await expect(buttonsimple).toHaveAttribute('size', size.toString());
      });
    }
  });

  /**
 * ATTRIBUTES
 */
  await test.step('attributes', async () => {
  // Disabled button
    await test.step('attribute disabled should be present on button', async () => {
      await componentsPage.setAttributes(buttonsimple, {
        disabled: '',
      });
      await expect(buttonsimple).toHaveAttribute('disabled');
      await componentsPage.removeAttribute(buttonsimple, 'disabled');
    });

    // Soft Disabled button
    await test.step('attribute soft-disabled should be present on button', async () => {
      await componentsPage.setAttributes(buttonsimple, {
        'soft-disabled': '',
      });
      await expect(buttonsimple).toHaveAttribute('soft-disabled');
      await componentsPage.removeAttribute(buttonsimple, 'soft-disabled');
    });

    // Active button
    await test.step('attribute active should be present on button', async () => {
      await componentsPage.setAttributes(buttonsimple, {
        active: '',
      });
      await expect(buttonsimple).toHaveAttribute('active');
      await componentsPage.removeAttribute(buttonsimple, 'active');
    });

    // Active Disabled button
    await test.step('attribute active and disabled should be present on button', async () => {
      await componentsPage.setAttributes(buttonsimple, {
        disabled: '',
        active: '',
      });
      await expect(buttonsimple).toHaveAttribute('disabled');
      await expect(buttonsimple).toHaveAttribute('active');
      await componentsPage.removeAttribute(buttonsimple, 'disabled');
      await componentsPage.removeAttribute(buttonsimple, 'active');
    });

    // Active Soft Disabled button
    await test.step('attribute active and soft-disabled should be present on button', async () => {
      await componentsPage.setAttributes(buttonsimple, {
        'soft-disabled': '',
        active: '',
      });
      await expect(buttonsimple).toHaveAttribute('soft-disabled');
      await expect(buttonsimple).toHaveAttribute('active');
      await componentsPage.removeAttribute(buttonsimple, 'soft-disabled');
      await componentsPage.removeAttribute(buttonsimple, 'active');
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('buttonsimple-default');
  });

  /**
   * INTERACTIONS
   */
  await test.step('button key pressed and focused events', async () => {
    const button = await setup({ componentsPage, children: 'Click Me', secondButtonForFocus: true });

    await componentsPage.page.evaluate(() => {
      const btn = document.getElementsByTagName('mdc-buttonsimple')[0];
      btn.addEventListener('click', () => {
        btn.classList.toggle('btn-listener');
      });
      (btn as HTMLElement).onclick = () => {
        btn.classList.toggle('btn-onclick');
      };

      (btn as HTMLElement).onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const value = e.key === 'Enter' ? 'enter' : 'space';
          btn.textContent = `${value} down`;
        }
      };

      (btn as HTMLElement).onkeyup = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const value = e.key === 'Enter' ? 'enter' : 'space';
          btn.textContent = `${value} up`;
        }
      };
    });

    await test.step('button focus event', async () => {
      await componentsPage.page.keyboard.press('Tab');
      await expect(button).toBeFocused();

      await componentsPage.page.keyboard.down('Space');
      await expect(button).toHaveClass('pressed');
      await expect(button).toHaveText('space down');
      await componentsPage.page.keyboard.up('Space');
      await expect(button).toHaveText('space up');
      await expect(button).toHaveClass('btn-listener btn-onclick');
      await expect(button).not.toHaveClass('pressed');

      await componentsPage.page.keyboard.down('Enter');
      await expect(button).toHaveText('enter down');
      await expect(button).toHaveClass('pressed');
      await componentsPage.page.keyboard.up('Enter');
      await expect(button).toHaveText('enter up');
      await expect(button).not.toHaveClass('pressed');
      await expect(button).not.toHaveClass('btn-listener btn-onclick'); // toggled class to remove

      await componentsPage.page.keyboard.press('Tab');
      await expect(button).not.toBeFocused();

      // expect second button to be focused (Tab moves away)
      const bothButtons = await componentsPage.page.locator('mdc-buttonsimple').all();
      await expect(bothButtons[1]).toBeFocused();
    });

    await test.step('button click event', async () => {
      await button.click();
      await expect(button).toHaveClass('btn-listener btn-onclick');
      await button.click();
      await expect(button).not.toHaveClass('btn-listener btn-onclick');
    });

    await test.step('button click event for disabled', async () => {
      await componentsPage.setAttributes(button, { disabled: '' });
      await expect(button).toHaveAttribute('disabled');
      await expect(button).toBeDisabled();
      await componentsPage.removeAttribute(button, 'disabled');
      await expect(button).not.toBeDisabled();
    });

    await test.step('button key press event for disabled', async () => {
      await componentsPage.setAttributes(button, { disabled: '' });

      await componentsPage.page.keyboard.press('Tab');
      await expect(button).not.toBeFocused();

      await componentsPage.page.keyboard.down('Space');
      await expect(button).not.toHaveClass('pressed');
      await componentsPage.page.keyboard.up('Space');
      await expect(button).not.toHaveClass('btn-listener btn-onclick');

      await componentsPage.page.keyboard.down('Enter');
      await expect(button).not.toHaveClass('pressed');
      await expect(button).not.toHaveClass('btn-listener btn-onclick');
      await componentsPage.page.keyboard.up('Enter');
    });
  });
});
