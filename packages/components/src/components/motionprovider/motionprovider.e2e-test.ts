import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

const MOTION_SCOPE_CLASSES = ['mds-motion', 'mds-animation'] as const;

type MotionMode = 'full' | 'reduce' | 'system';

type SetupOptions = {
  componentsPage: ComponentsPage;
  motion?: MotionMode;
};

const setup = async ({ componentsPage, motion }: SetupOptions) => {
  await componentsPage.mount({
    html: `
      <mdc-motionprovider id="local"${motion ? ` motion="${motion}"` : ''}>
        <mdc-button id="motion-child">Button</mdc-button>
      </mdc-motionprovider>
    `,
  });
};

const expectMotionClasses = async (componentsPage: ComponentsPage, present: boolean) => {
  const hostClass = await componentsPage.page.locator('mdc-motionprovider#local').getAttribute('class');

  MOTION_SCOPE_CLASSES.forEach((className: string) => {
    if (present) {
      expect(hostClass).toContain(className);
    } else {
      expect(hostClass ?? '').not.toContain(className);
    }
  });
};

const setMotion = async (componentsPage: ComponentsPage, motion: MotionMode) => {
  const provider = componentsPage.page.locator('mdc-motionprovider#local');
  await provider.evaluate((element, value) => {
    element.setAttribute('motion', value);
  }, motion);
  await expect(provider).toHaveAttribute('motion', motion);
};

test.describe('mdc-motionprovider', () => {
  test('defaults to motion="full" with motion scope classes', async ({ componentsPage }) => {
    await setup({ componentsPage });

    const provider = componentsPage.page.locator('mdc-motionprovider#local');
    await provider.waitFor();

    await expect(provider).toHaveAttribute('motion', 'full');
    await expectMotionClasses(componentsPage, true);
  });

  test('motion="reduce" removes motion scope classes', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'reduce' });

    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();
    await expectMotionClasses(componentsPage, false);
  });

  test('motion="system" follows prefers-reduced-motion', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'system' });

    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
    await expectMotionClasses(componentsPage, true);

    await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
    await expectMotionClasses(componentsPage, false);
  });

  test('updates motion scope classes when motion changes from full to reduce', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'full' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await expectMotionClasses(componentsPage, true);
    await setMotion(componentsPage, 'reduce');
    await expectMotionClasses(componentsPage, false);
  });

  test('updates motion scope classes when motion changes from reduce to full', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'reduce' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await expectMotionClasses(componentsPage, false);
    await setMotion(componentsPage, 'full');
    await expectMotionClasses(componentsPage, true);
  });

  test('rebinds system preference when motion changes from full to system', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'full' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await expectMotionClasses(componentsPage, true);

    await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
    await setMotion(componentsPage, 'system');
    await expectMotionClasses(componentsPage, false);

    await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
    await expectMotionClasses(componentsPage, true);
  });

  test('keeps motion scope classes when motion changes from system to full', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'system' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
    await expectMotionClasses(componentsPage, true);

    await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
    await expectMotionClasses(componentsPage, false);

    await setMotion(componentsPage, 'full');
    await expectMotionClasses(componentsPage, true);

    await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
    await expectMotionClasses(componentsPage, true);
  });

  test('accessibility', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'full' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await componentsPage.accessibility.checkForA11yViolations('mdc-motionprovider-full', true);
  });
});
