import { resolve } from 'node:path';

import { expect } from '@playwright/test';

import { test } from '../../config/playwright/setup';
import type { ComponentsPage } from '../../config/playwright/setup';

const setup = async (componentsPage: ComponentsPage, iterations = '2') => {
  await componentsPage.page.addStyleTag({ path: resolve(__dirname, 'gradient-border.css') });
  await componentsPage.mount({
    html: `<div
      class="mdc-gradient-border-secondary mdc-gradient-border-animated
        mdc-gradient-border-fade-in mdc-gradient-border-fade-out"
      style="--mdc-gradient-border-duration: 500ms; --mdc-gradient-border-iteration-count: ${iterations}"
    >AI generated</div>`,
    clearDocument: true,
  });

  return componentsPage.page.getByText('AI generated', { exact: true });
};

test.describe('Gradient border playback', () => {
  test('should finish finite playback while keeping the content visible', async ({ componentsPage }) => {
    await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
    const panel = await setup(componentsPage);

    await expect.poll(() => panel.evaluate(element => element.getAnimations({ subtree: true }).length)).toBeGreaterThan(0);
    await panel.evaluate(async element => {
      await Promise.all(element.getAnimations({ subtree: true }).map(animation => animation.finished));
    });

    await expect(panel).toBeVisible();
    expect(await panel.evaluate(element => element.getAnimations({ subtree: true })
      .some(animation => animation.playState === 'running'))).toBe(false);
  });

  test('should keep infinite playback running after a complete turn', async ({ componentsPage }) => {
    await componentsPage.page.emulateMedia({ reducedMotion: 'no-preference' });
    const panel = await setup(componentsPage, 'infinite');

    await panel.evaluate(element => new Promise<void>(resolveIteration => {
      element.addEventListener('animationiteration', () => resolveIteration(), { once: true });
    }));

    await expect(panel).toBeVisible();
    expect(await panel.evaluate(element => element.getAnimations({ subtree: true })
      .some(animation => animation.playState === 'running'))).toBe(true);
  });

  test('should suppress animation when reduced motion is requested', async ({ componentsPage }) => {
    await componentsPage.page.emulateMedia({ reducedMotion: 'reduce' });
    const panel = await setup(componentsPage);

    await expect(panel).toBeVisible();
    expect(await panel.evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);
  });
});
