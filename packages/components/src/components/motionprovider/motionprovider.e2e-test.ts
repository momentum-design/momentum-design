import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

const MOTION_SCOPE_CLASSES = ['mds-motion', 'mds-animation'] as const;
const MOTION_MODE_CLASSES = {
  full: ['mds-motion-full', 'mds-animation-full'],
  reduce: ['mds-motion-reduce', 'mds-animation-reduce'],
  system: [],
} as const;

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

const expectMotionClasses = async (componentsPage: ComponentsPage, mode: MotionMode) => {
  const hostClass = await componentsPage.page.locator('mdc-motionprovider#local').getAttribute('class');

  MOTION_SCOPE_CLASSES.forEach((className: string) => {
    expect(hostClass).toContain(className);
  });
  Object.entries(MOTION_MODE_CLASSES).forEach(([candidateMode, classNames]) => {
    classNames.forEach((className) => {
      if (candidateMode === mode) expect(hostClass).toContain(className);
      else expect(hostClass ?? '').not.toContain(className);
    });
  });
};

const expectFastDuration = async (componentsPage: ComponentsPage, expected: string) => {
  const provider = componentsPage.page.locator('mdc-motionprovider#local');
  await expect
    .poll(() => provider.evaluate((element) => getComputedStyle(element).getPropertyValue('--mds-motion-duration-fast')))
    .toBe(expected);
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
    await expectMotionClasses(componentsPage, 'full');
    await expectFastDuration(componentsPage, '200ms');
  });

  test('motion="reduce" applies reduced values while retaining scope classes', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'reduce' });

    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();
    await expectMotionClasses(componentsPage, 'reduce');
    await expectFastDuration(componentsPage, '0ms');
  });

  test('motion="system" follows prefers-reduced-motion', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'system' });

    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
    await expectMotionClasses(componentsPage, 'system');
    await expectFastDuration(componentsPage, '200ms');

    await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
    await expectMotionClasses(componentsPage, 'system');
    await expectFastDuration(componentsPage, '0ms');
  });

  test('updates motion scope classes when motion changes from full to reduce', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'full' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await expectMotionClasses(componentsPage, 'full');
    await setMotion(componentsPage, 'reduce');
    await expectMotionClasses(componentsPage, 'reduce');
  });

  test('updates motion scope classes when motion changes from reduce to full', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'reduce' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await expectMotionClasses(componentsPage, 'reduce');
    await setMotion(componentsPage, 'full');
    await expectMotionClasses(componentsPage, 'full');
  });

  test('rebinds system preference when motion changes from full to system', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'full' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await expectMotionClasses(componentsPage, 'full');

    await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
    await setMotion(componentsPage, 'system');
    await expectMotionClasses(componentsPage, 'system');

    await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
    await expectMotionClasses(componentsPage, 'system');
  });

  test('keeps motion scope classes when motion changes from system to full', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'system' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
    await expectMotionClasses(componentsPage, 'system');

    await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
    await expectMotionClasses(componentsPage, 'system');

    await setMotion(componentsPage, 'full');
    await expectMotionClasses(componentsPage, 'full');

    await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
    await expectMotionClasses(componentsPage, 'full');
    await expectFastDuration(componentsPage, '200ms');
  });

  test('accessibility', async ({ componentsPage }) => {
    await setup({ componentsPage, motion: 'full' });
    await componentsPage.page.locator('mdc-motionprovider#local').waitFor();

    await componentsPage.accessibility.checkForA11yViolations('mdc-motionprovider-full', true);
  });
});
