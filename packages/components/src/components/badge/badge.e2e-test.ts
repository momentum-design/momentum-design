import { expect } from '@playwright/test';
import { ComponentsPage, test } from '../../../config/playwright/setup';
import { TYPE, ICON_NAMES_LIST, DEFAULTS, ICON_VARIANT } from './badge.constants';
import type { BadgeType, IconVariant } from './badge.types';
import type { IconNames } from '../icon/icon.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  type?: BadgeType;
  iconName?: IconNames;
  variant?: IconVariant;
  counter?: number;
  maxCounter?: number;
  ariaLabel?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-badge
      ${restArgs.type ? `type="${restArgs.type}"` : ''}
      ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
      ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
      ${restArgs.counter ? `counter="${restArgs.counter}"` : ''}
      ${restArgs.maxCounter ? `max-counter="${restArgs.maxCounter}"` : ''}
      ${restArgs.ariaLabel ? `aria-label="${restArgs.ariaLabel}"` : ''}
    >
    </mdc-badge> 
      `,
    clearDocument: true,
  });
  const badge = componentsPage.page.locator('mdc-badge');
  await badge.waitFor();
  return badge;
};

const visualTestingSetup = async (args: SetupOptions) => {
  const { componentsPage } = args;

  await componentsPage.mount({
    html: `
      <div class="componentWrapper componentRowWrapper">
        <mdc-badge></mdc-badge>
        <mdc-badge type="${TYPE.ICON}" icon-name="${ICON_NAMES_LIST.SUCCESS_ICON_NAME}"></mdc-badge>
        <mdc-badge type="${TYPE.COUNTER}" counter="10000" max-counter="999"></mdc-badge>
        <mdc-badge type="${TYPE.SUCCESS}"></mdc-badge>
        <mdc-badge type="${TYPE.WARNING}"></mdc-badge>
        <mdc-badge type="${TYPE.ERROR}" overlay="true"></mdc-badge>
      </div>
    `,
    clearDocument: true,
  });

  const badgesContainer = componentsPage.page.locator('.componentRowWrapper');
  await badgesContainer.waitFor();
  return badgesContainer;
};

const testToRun = async (componentsPage: ComponentsPage) => {
  const ariaLabel = 'test aria label';
  const badge = await setup({ componentsPage });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('badge-default');
  });

  await componentsPage.setAttributes(badge, {
    'aria-label': ariaLabel,
  });

  await test.step('accessibility with aria-label passed in', async () => {
    await componentsPage.accessibility.checkForA11yViolations('badge-aria-passed-in');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    const visualBadge = await visualTestingSetup({ componentsPage });
    await test.step('matches screenshot of different types element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-badge', { element: visualBadge });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    const badge = await setup({ componentsPage });

    await test.step('attribute should be present on component by default', async () => {
      await expect(badge).toHaveAttribute('type', DEFAULTS.TYPE);
      await expect(badge).toHaveAttribute('variant', DEFAULTS.VARIANT);
      await expect(badge).toHaveAttribute('max-counter', DEFAULTS.MAX_COUNTER.toString());
      await expect(badge).not.toHaveAttribute('role');
    });

    await test.step('should fallback to default values when invalid attributes are passed', async () => {
      await componentsPage.setAttributes(badge, {
        type: 'invalid',
      });
      await expect(badge).toHaveAttribute('type', DEFAULTS.TYPE);

      await componentsPage.setAttributes(badge, {
        type: TYPE.ICON,
        variant: 'invalid',
      });
      await expect(badge).toHaveAttribute('variant', DEFAULTS.VARIANT);
    });

    await test.step('should only accept allowed type and variant', async () => {
      await componentsPage.setAttributes(badge, {
        type: TYPE.ICON,
        variant: ICON_VARIANT.SECONDARY,
      });

      await expect(badge).toHaveAttribute('type', TYPE.ICON);
      await expect(badge).toHaveAttribute('variant', ICON_VARIANT.SECONDARY);
    });

    await test.step('attributes should be present on component with aria-label passed in', async () => {
      await componentsPage.setAttributes(badge, {
        'aria-label': ariaLabel,
      });

      await expect(badge).toHaveAttribute('aria-label', ariaLabel);
      await expect(badge).toHaveAttribute('role', 'img');
    });

    await test.step('should only show 99+ if counter more than 99 and maxCounter set to 99', async () => {
      await componentsPage.setAttributes(badge, {
        type: TYPE.COUNTER,
        counter: '100',
      });

      await expect(badge).toHaveAttribute('type', TYPE.COUNTER);
      const mdcTextElement = await componentsPage.page.locator('mdc-text');
      const textContent = await mdcTextElement.textContent();

      expect(textContent?.trim()).toBe('99+');
    });

    await test.step('should only show 999+ if counter set to 1234 and maxCounter set to 9999', async () => {
      await componentsPage.setAttributes(badge, {
        type: TYPE.COUNTER,
        counter: '1234',
        'max-counter': '9999',
      });

      await expect(badge).toHaveAttribute('type', TYPE.COUNTER);
      const mdcTextElement = await componentsPage.page.locator('mdc-text');
      const textContent = await mdcTextElement.textContent();

      expect(textContent?.trim()).toBe('999+');
    });

    await test.step('should only show 9+ if counter set to 10000 and maxCounter set to 9', async () => {
      await componentsPage.setAttributes(badge, {
        type: TYPE.COUNTER,
        counter: '10000',
        'max-counter': '9',
      });

      await expect(badge).toHaveAttribute('type', TYPE.COUNTER);
      const mdcTextElement = await componentsPage.page.locator('mdc-text');
      const textContent = await mdcTextElement.textContent();

      expect(textContent?.trim()).toBe('9+');
    });
  });
};

test.describe.parallel('mdc-Badge', () => {
  test('standalone', async ({ componentsPage }) => {
    await testToRun(componentsPage);
  });
});
