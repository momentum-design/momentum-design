/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

import { DEFAULTS, MOTION_FALLBACKS, POSES } from './animatedbackground.constants';
import type { PoseName, PoseOffset } from './animatedbackground.types';

type AnimatedBackgroundHost = HTMLElement & {
  wakeUp: () => void;
  expand: () => void;
  collapse: () => void;
  disable: () => void;
  setPose: (name: PoseName, options?: { animate?: boolean }) => void;
  getPoseOffset: () => PoseOffset;
};

type SetupOptions = {
  componentsPage: ComponentsPage;
  initialPose?: string;
  blockWebGL?: boolean;
  reducedMotion?: boolean;
};

type AnimationMethod = keyof Pick<AnimatedBackgroundHost, 'wakeUp' | 'expand' | 'collapse' | 'disable'>;

const HOST_SELECTOR = 'mdc-animatedbackground';
const DURATION_TOLERANCE_MS = 50;
const WAKE_TOTAL_DURATION_MS =
  MOTION_FALLBACKS.durationSustainedMs + MOTION_FALLBACKS.durationExtendedMs;

const setup = async ({
  componentsPage,
  initialPose = DEFAULTS.INITIAL_POSE,
  blockWebGL = false,
  reducedMotion = false,
}: SetupOptions) => {
  if (blockWebGL) {
    await componentsPage.page.evaluate(() => {
      type WindowWithWebglBlock = Window & { mdsAnimatedBackgroundWebglBlocked?: boolean };
      const blockedWindow = window as WindowWithWebglBlock;

      if (blockedWindow.mdsAnimatedBackgroundWebglBlocked) {
        return;
      }

      const originalGetContext = HTMLCanvasElement.prototype.getContext;

      HTMLCanvasElement.prototype.getContext = function patchedGetContext(
        this: HTMLCanvasElement,
        contextId: string,
        options?: unknown,
      ) {
        if (contextId === 'webgl2') {
          return null;
        }

        return originalGetContext.call(this, contextId, options as never);
      } as typeof HTMLCanvasElement.prototype.getContext;

      blockedWindow.mdsAnimatedBackgroundWebglBlocked = true;
    });
  }

  await componentsPage.page.emulateMedia({
    reducedMotion: reducedMotion ? 'reduce' : 'no-preference',
  });

  await componentsPage.mount({
    html: `
      <div class="componentWrapper" style="position: relative; width: 640px; height: 360px;">
        <mdc-animatedbackground initial-pose="${initialPose}"></mdc-animatedbackground>
      </div>
    `,
    clearDocument: true,
  });

  const animatedBackground = componentsPage.page.locator(HOST_SELECTOR);
  await animatedBackground.waitFor();
  return animatedBackground;
};

const readPoseOffset = async (
  animatedBackground: Awaited<ReturnType<typeof setup>>,
): Promise<PoseOffset | null> =>
  animatedBackground.evaluate(element => {
    const host = element as AnimatedBackgroundHost;
    return host.getPoseOffset?.() ?? null;
  });

const readDomPoseOffset = async (
  animatedBackground: Awaited<ReturnType<typeof setup>>,
): Promise<PoseOffset | null> =>
  animatedBackground.evaluate(element => {
    const group = element.shadowRoot?.querySelector('.dom-ellipse-group') as HTMLElement | null;
    if (!group) {
      return null;
    }

    const match = group.style.transform.match(/translate3d\(([-\d.]+)px,\s*([-\d.]+)px/);
    return match ? { x: Number(match[1]), y: Number(match[2]) } : null;
  });

const expectPoseOffset = async (animatedBackground: Awaited<ReturnType<typeof setup>>, pose: PoseName) => {
  const expected = POSES[pose];
  const offset = await readPoseOffset(animatedBackground);

  expect(offset).not.toBeNull();
  expect(offset?.x).toBeCloseTo(expected.x, 1);
  expect(offset?.y).toBeCloseTo(expected.y, 1);
};

const expectDomPoseOffset = async (animatedBackground: Awaited<ReturnType<typeof setup>>, pose: PoseName) => {
  const expected = POSES[pose];
  const offset = await readDomPoseOffset(animatedBackground);

  expect(offset).not.toBeNull();
  expect(offset?.x).toBeCloseTo(expected.x, 1);
  expect(offset?.y).toBeCloseTo(expected.y, 1);
};

const usesWebGLRenderer = async (animatedBackground: Awaited<ReturnType<typeof setup>>): Promise<boolean> =>
  animatedBackground.evaluate(element => {
    const { shadowRoot } = element;
    return Boolean(shadowRoot?.querySelector('canvas')) && !shadowRoot?.querySelector('.dom-root');
  });

const usesDomRenderer = async (animatedBackground: Awaited<ReturnType<typeof setup>>): Promise<boolean> =>
  animatedBackground.evaluate(element => Boolean(element.shadowRoot?.querySelector('.dom-root')));

const expectDurationMs = (elapsed: number, expectedMs: number, toleranceMs = DURATION_TOLERANCE_MS) => {
  expect(elapsed).toBeGreaterThanOrEqual(expectedMs - toleranceMs);
  expect(elapsed).toBeLessThanOrEqual(expectedMs + toleranceMs);
};

const runAnimationAndWait = async (
  animatedBackground: Awaited<ReturnType<typeof setup>>,
  method: AnimationMethod,
  expectedPose: PoseName,
  timeoutMs = 8000,
): Promise<number> =>
  animatedBackground.evaluate(
    (element, { animationMethod, pose, timeout }) => {
      const host = element as AnimatedBackgroundHost;

      return new Promise<number>((resolve, reject) => {
        const start = performance.now();
        let timer = 0;

        const onSettle = (event: Event) => {
          const { detail } = event as CustomEvent<{ pose: PoseName }>;
          if (detail.pose !== pose) {
            return;
          }

          window.clearTimeout(timer);
          host.removeEventListener('gradientsettle', onSettle);
          resolve(performance.now() - start);
        };

        timer = window.setTimeout(() => {
          host.removeEventListener('gradientsettle', onSettle);
          reject(new Error(`Timed out waiting for gradientsettle (${pose}).`));
        }, timeout);

        host.addEventListener('gradientsettle', onSettle);
        host[animationMethod]();
      });
    },
    { animationMethod: method, pose: expectedPose, timeout: timeoutMs },
  );

test('mdc-animatedbackground', async ({ componentsPage }) => {
  const animatedBackground = await setup({ componentsPage });

  await test.step('component renders without error', async () => {
    await expect(animatedBackground).toBeVisible();
  });

  await test.step('attributes', async () => {
    await expect(animatedBackground).toHaveAttribute('initial-pose', DEFAULTS.INITIAL_POSE);
  });

  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('animatedbackground-default');
  });
});

test('mdc-animatedbackground reduced motion uses DOM fallback', async ({ componentsPage }) => {
  const animatedBackground = await setup({ componentsPage, initialPose: 'expanded', reducedMotion: true });
  expect(await usesDomRenderer(animatedBackground)).toBe(true);

  await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
});

test('mdc-animatedbackground setPose without animation', async ({ componentsPage }) => {
  await test.step('DOM fallback applies pose offset to ellipse group', async () => {
    const animatedBackground = await setup({ componentsPage, initialPose: 'collapsed', reducedMotion: true });

    await animatedBackground.evaluate(element => {
      (element as AnimatedBackgroundHost).setPose('expanded', { animate: false });
    });

    await expectDomPoseOffset(animatedBackground, 'expanded');
    await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
  });

  await test.step('WebGL path applies pose offset via public getPoseOffset API', async () => {
    const animatedBackground = await setup({ componentsPage, initialPose: 'collapsed', reducedMotion: false });

    if (!(await usesWebGLRenderer(animatedBackground))) {
      test.skip(true, 'WebGL 2 unavailable in this environment.');
    }

    await animatedBackground.evaluate(element => {
      (element as AnimatedBackgroundHost).setPose('expanded', { animate: false });
    });

    await expectPoseOffset(animatedBackground, 'expanded');
  });
});

test('mdc-animatedbackground programmatic animations settle at target poses (DOM fallback)', async ({
  componentsPage,
}) => {
  await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });

  const animatedBackground = await setup({ componentsPage, initialPose: 'collapsed', reducedMotion: true });
  expect(await usesDomRenderer(animatedBackground)).toBe(true);

  await test.step('expand settles at expanded pose', async () => {
    await runAnimationAndWait(animatedBackground, 'expand', 'expanded');
    await expectDomPoseOffset(animatedBackground, 'expanded');
  });

  await test.step('collapse settles at collapsed pose', async () => {
    await runAnimationAndWait(animatedBackground, 'collapse', 'collapsed');
    await expectDomPoseOffset(animatedBackground, 'collapsed');
  });

  await test.step('disable settles at disabled pose', async () => {
    await runAnimationAndWait(animatedBackground, 'disable', 'disabled');
    await expectDomPoseOffset(animatedBackground, 'disabled');
  });

  await test.step('wakeUp settles at collapsed pose', async () => {
    await animatedBackground.evaluate(element => {
      (element as AnimatedBackgroundHost).setPose('hidden', { animate: false });
    });

    await runAnimationAndWait(animatedBackground, 'wakeUp', 'collapsed');
    await expectDomPoseOffset(animatedBackground, 'collapsed');
  });

  await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
});

test('mdc-animatedbackground programmatic animations settle at target poses (WebGL)', async ({ componentsPage }) => {
  const animatedBackground = await setup({ componentsPage, initialPose: 'collapsed', reducedMotion: false });

  if (!(await usesWebGLRenderer(animatedBackground))) {
    test.skip(true, 'WebGL 2 unavailable in this environment.');
  }

  await test.step('expand settles at expanded pose', async () => {
    await runAnimationAndWait(animatedBackground, 'expand', 'expanded');
    await expectPoseOffset(animatedBackground, 'expanded');
  });

  await test.step('collapse settles at collapsed pose', async () => {
    await runAnimationAndWait(animatedBackground, 'collapse', 'collapsed');
    await expectPoseOffset(animatedBackground, 'collapsed');
  });

  await test.step('disable settles at disabled pose', async () => {
    await runAnimationAndWait(animatedBackground, 'disable', 'disabled');
    await expectPoseOffset(animatedBackground, 'disabled');
  });

  await test.step('wakeUp settles at collapsed pose', async () => {
    await animatedBackground.evaluate(element => {
      (element as AnimatedBackgroundHost).setPose('hidden', { animate: false });
    });

    await runAnimationAndWait(animatedBackground, 'wakeUp', 'collapsed');
    await expectPoseOffset(animatedBackground, 'collapsed');
  });
});

test('mdc-animatedbackground motion durations align with motion tokens', async ({ componentsPage }) => {
  await test.step('expand uses extended duration', async () => {
    const animatedBackground = await setup({ componentsPage, initialPose: 'collapsed', reducedMotion: false });
    const elapsed = await runAnimationAndWait(animatedBackground, 'expand', 'expanded');
    expectDurationMs(elapsed, MOTION_FALLBACKS.durationExtendedMs);
  });

  await test.step('collapse uses extended duration', async () => {
    const animatedBackground = await setup({ componentsPage, initialPose: 'expanded', reducedMotion: false });
    const elapsed = await runAnimationAndWait(animatedBackground, 'collapse', 'collapsed');
    expectDurationMs(elapsed, MOTION_FALLBACKS.durationExtendedMs);
  });

  await test.step('disable uses extended duration', async () => {
    const animatedBackground = await setup({ componentsPage, initialPose: 'collapsed', reducedMotion: false });
    const elapsed = await runAnimationAndWait(animatedBackground, 'disable', 'disabled');
    expectDurationMs(elapsed, MOTION_FALLBACKS.durationExtendedMs);
  });

  await test.step('wakeUp rise leg reaches wake pose within sustained duration', async () => {
    const animatedBackground = await setup({ componentsPage, initialPose: 'hidden', reducedMotion: false });

    const sustainedElapsed = await animatedBackground.evaluate(
      (element, { sustainedMs, wakePose }) => {
        const host = element as AnimatedBackgroundHost;

        return new Promise<number>(resolve => {
          const animationStart = performance.now();

          const pollWakePose = () => {
            const offset = host.getPoseOffset();
            const atWakePose =
              Math.abs(offset.x - wakePose.x) < 2 &&
              Math.abs(offset.y - wakePose.y) < 2;

            if (atWakePose) {
              resolve(performance.now() - animationStart);
              return;
            }

            if (performance.now() - animationStart > sustainedMs + 300) {
              resolve(performance.now() - animationStart);
              return;
            }

            requestAnimationFrame(pollWakePose);
          };

          host.wakeUp();
          requestAnimationFrame(pollWakePose);
        });
      },
      { sustainedMs: MOTION_FALLBACKS.durationSustainedMs, wakePose: POSES.wake },
    );

    expectDurationMs(sustainedElapsed, MOTION_FALLBACKS.durationSustainedMs, 150);
  });

  await test.step('wakeUp total sequence uses sustained plus extended duration', async () => {
    const animatedBackground = await setup({ componentsPage, initialPose: 'hidden', reducedMotion: false });
    const elapsed = await runAnimationAndWait(animatedBackground, 'wakeUp', 'collapsed', WAKE_TOTAL_DURATION_MS + 500);
    expectDurationMs(elapsed, WAKE_TOTAL_DURATION_MS);
  });
});

test('mdc-animatedbackground webgl blocked falls back to DOM renderer', async ({ componentsPage }) => {
  const animatedBackground = await setup({
    componentsPage,
    initialPose: 'collapsed',
    blockWebGL: true,
    reducedMotion: false,
  });

  expect(await usesDomRenderer(animatedBackground)).toBe(true);

  await runAnimationAndWait(animatedBackground, 'expand', 'expanded');
  await expectDomPoseOffset(animatedBackground, 'expanded');

  await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
});

test('mdc-animatedbackground reduced motion snaps instantly', async ({ componentsPage }) => {
  const animatedBackground = await setup({ componentsPage, initialPose: 'collapsed', reducedMotion: true });

  const elapsed = await runAnimationAndWait(animatedBackground, 'expand', 'expanded');
  expect(elapsed).toBeLessThan(100);

  await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
});

test('mdc-animatedbackground visual regression', async ({ componentsPage }) => {
  await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });

  for (const pose of ['collapsed', 'expanded', 'disabled'] as const) {
    await componentsPage.mount({
      html: `
        <div class="componentWrapper" style="position: relative; width: 640px; height: 360px;">
          <mdc-animatedbackground initial-pose="collapsed"></mdc-animatedbackground>
        </div>
      `,
      clearDocument: true,
    });

    const animatedBackground = componentsPage.page.locator(HOST_SELECTOR);
    await animatedBackground.waitFor();
    await animatedBackground.evaluate((element, targetPose) => {
      (element as AnimatedBackgroundHost).setPose(targetPose as PoseName, { animate: false });
    }, pose);

    const container = componentsPage.page.locator('.componentWrapper');
    await test.step(`matches screenshot for ${pose} pose`, async () => {
      await componentsPage.visualRegression.takeScreenshot(`mdc-animatedbackground-${pose}`, { element: container });
    });
  }

  await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
});
