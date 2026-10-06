import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';
import type { AssetLoadingOptions } from '../../utils/asset-loader';

declare global {
  interface Window {
    assetLoadingFixture: { configureAssetLoading: (options: AssetLoadingOptions) => void };
    assetErrors: number;
    assetSvgParses: number;
  }
}

const setup = async (componentsPage: ComponentsPage, mode = 'external') => {
  await componentsPage.page.goto(`/asset-loading/${mode}.html`);
  await componentsPage.page.evaluate(async () => {
    await customElements.whenDefined('mdc-icon');
    window.assetErrors = 0;
    document.addEventListener(
      'error',
      event => {
        if ((event.target as Element).tagName?.startsWith('MDC-')) window.assetErrors += 1;
      },
      true,
    );
  });
};

test('should fetch only rendered assets and reuse concurrent SVG loads', async ({ componentsPage }) => {
  const requests: string[] = [];
  componentsPage.page.on('request', request => {
    if (/\/dist\/(icons|illustrations|brandvisuals)\//.test(request.url())) requests.push(request.url());
  });
  await setup(componentsPage);
  expect(requests).toHaveLength(0);
  await componentsPage.mount({
    clearDocument: true,
    html: `<div>
    <mdc-icon name="accessibility-regular" aria-label="Accessibility"></mdc-icon>
    <mdc-icon name="accessibility-regular"></mdc-icon>
    <mdc-illustration name="people-talking-oneninetwo-empty-primary"></mdc-illustration>
    <mdc-brandvisual name="webex-wordmark-dark-horizontal-bycisco"></mdc-brandvisual>
    <mdc-brandvisual name="device-deskphone-eighteightsevenfour" alt-text="Example desk phone"></mdc-brandvisual>
    <mdc-button prefix-icon="accessibility-regular">Example</mdc-button>
  </div>`,
  });
  await expect(componentsPage.page.locator('mdc-brandvisual img')).toHaveAttribute('alt', 'Example desk phone');
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(3);
  expect(requests.filter(url => url.endsWith('/accessibility-regular.svg'))).toHaveLength(1);
  expect(requests).toHaveLength(4);
  await componentsPage.visualRegression.takeScreenshot('asset-loading-external-families');
});

test('should preserve packaged loading for consumers using the default condition', async ({ componentsPage }) => {
  await setup(componentsPage, 'bundled');
  await componentsPage.mount({
    clearDocument: true,
    html: '<div><mdc-icon name="accessibility-regular"></mdc-icon><mdc-brandvisual name="webex-wordmark-dark-horizontal-bycisco"></mdc-brandvisual></div>',
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(1);
  await expect(componentsPage.page.locator('mdc-brandvisual svg')).toHaveCount(1);
  expect(await componentsPage.page.evaluate(() => window.assetErrors)).toBe(0);
});

for (const failure of ['missing', 'html', 'script', 'event-attribute']) {
  test(`should reject ${failure} responses and reuse only a successful retry`, async ({ componentsPage }) => {
    await setup(componentsPage);
    let requests = 0;
    await componentsPage.page.route('**/asset-failure.svg', route => {
      requests += 1;
      const valid = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M0 0h32v32H0z"/></svg>';
      let body = valid;
      if (requests === 1) {
        if (failure === 'html') body = '<html><body>Not an asset</body></html>';
        else if (failure === 'event-attribute')
          body = '<svg xmlns="http://www.w3.org/2000/svg" onload="window.invalidAssetExecuted=true"></svg>';
        else body = '<svg xmlns="http://www.w3.org/2000/svg"><script>window.invalidAssetExecuted=true</script></svg>';
      }
      return route.fulfill({
        status: requests === 1 && failure === 'missing' ? 404 : 200,
        contentType: requests === 1 && failure === 'html' ? 'text/html' : 'image/svg+xml',
        body,
      });
    });
    await componentsPage.page.evaluate(() =>
      window.assetLoadingFixture.configureAssetLoading({
        resolveAsset: () => ({ format: 'svg', url: '/asset-failure.svg' }),
      }),
    );
    const html = '<mdc-icon name="accessibility-regular"></mdc-icon>';
    await componentsPage.mount({
      clearDocument: true,
      html,
    });
    await expect.poll(() => componentsPage.page.evaluate(() => window.assetErrors)).toBe(1);
    await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(0);
    expect(await componentsPage.page.evaluate(() => Reflect.has(window, 'invalidAssetExecuted'))).toBe(false);
    await componentsPage.mount({
      clearDocument: true,
      html,
    });
    await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(1);
    await componentsPage.mount({
      clearDocument: true,
      html,
    });
    await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(1);
    expect(requests).toBe(2);
    expect(await componentsPage.page.evaluate(() => window.assetErrors)).toBe(1);
  });
}

test('should keep the newest name when an older shared request finishes later', async ({ componentsPage }) => {
  await setup(componentsPage);
  let release: (() => void) | undefined;
  let started: (() => void) | undefined;
  const intercepted = new Promise<void>(resolve => {
    started = resolve;
  });
  const delayed = new Promise<void>(resolve => {
    release = resolve;
  });
  await componentsPage.page.route('**/accessibility-regular.svg', async route => {
    started?.();
    await delayed;
    await route.continue();
  });
  await componentsPage.page.evaluate(() => {
    document.querySelector('#root')!.innerHTML =
      '<mdc-icon name="accessibility-regular"></mdc-icon><mdc-icon name="accessibility-regular"></mdc-icon>';
  });
  await intercepted;
  await componentsPage.page
    .locator('mdc-icon')
    .first()
    .evaluate(element => element.setAttribute('name', 'arrow-left-bold'));
  await expect(componentsPage.page.locator('mdc-icon').first().locator('svg')).toHaveAttribute(
    'data-name',
    'arrow-left-bold',
  );
  release?.();
  await expect(componentsPage.page.locator('mdc-icon').nth(1).locator('svg')).toHaveAttribute(
    'data-name',
    'accessibility-regular',
  );
  await expect(componentsPage.page.locator('mdc-icon').first().locator('svg')).toHaveAttribute(
    'data-name',
    'arrow-left-bold',
  );
  expect(await componentsPage.page.evaluate(() => window.assetErrors)).toBe(0);
});

test('should render embedded icons while the network is unavailable', async ({ componentsPage }) => {
  await setup(componentsPage);
  await componentsPage.page.evaluate(() =>
    window.assetLoadingFixture.configureAssetLoading({
      resolveAsset: () => ({
        format: 'svg',
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M0 0h32v32H0z"/></svg>',
      }),
    }),
  );
  await componentsPage.page.context().setOffline(true);
  await componentsPage.mount({
    clearDocument: true,
    html: '<mdc-icon name="accessibility-regular"></mdc-icon>',
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(1);
  expect(await componentsPage.page.evaluate(() => window.assetErrors)).toBe(0);
});

test('should report missing external configuration without requesting legacy chunks', async ({ componentsPage }) => {
  const scripts: string[] = [];
  await setup(componentsPage, 'unconfigured');
  componentsPage.page.on('request', request => {
    if (request.resourceType() === 'script') scripts.push(request.url());
  });
  await componentsPage.mount({
    clearDocument: true,
    html: '<mdc-icon name="accessibility-regular"></mdc-icon>',
  });
  await expect.poll(() => componentsPage.page.evaluate(() => window.assetErrors)).toBe(1);
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(0);
  expect(scripts).toHaveLength(0);
});

test('should retry a failed SVG and render when persistent caching is unavailable', async ({ componentsPage }) => {
  await setup(componentsPage);
  await componentsPage.page.evaluate(() => Object.defineProperty(window, 'caches', { value: undefined }));
  let requests = 0;
  await componentsPage.page.route('**/accessibility-regular.svg', route => {
    requests += 1;
    return requests === 1 ? route.fulfill({ status: 404, body: 'Missing asset' }) : route.continue();
  });
  await componentsPage.mount({
    clearDocument: true,
    html: '<mdc-icon name="accessibility-regular"></mdc-icon>',
  });
  await expect.poll(() => componentsPage.page.evaluate(() => window.assetErrors)).toBe(1);
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(0);
  await componentsPage.mount({
    clearDocument: true,
    html: '<mdc-icon name="accessibility-regular"></mdc-icon>',
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(1);
  expect(requests).toBe(2);
});

test('should report a missing PNG and an incomplete custom brand provider', async ({ componentsPage }) => {
  await setup(componentsPage);
  await componentsPage.page.route('**/device-deskphone-eighteightsevenfour.png', route =>
    route.fulfill({ status: 404, body: 'Missing image' }),
  );
  await componentsPage.mount({
    clearDocument: true,
    html: '<div><mdc-brandvisual name="device-deskphone-eighteightsevenfour"></mdc-brandvisual><mdc-brandvisualprovider brand-visual-set="custom-brand-visuals"><mdc-brandvisual name="webex-wordmark-dark-horizontal-bycisco"></mdc-brandvisual></mdc-brandvisualprovider></div>',
  });
  await expect.poll(() => componentsPage.page.evaluate(() => window.assetErrors)).toBe(2);
  await expect(componentsPage.page.locator('mdc-brandvisual img, mdc-brandvisual svg')).toHaveCount(0);
});

test('should reload a changed provider and reconnect without changing the name', async ({ componentsPage }) => {
  await setup(componentsPage);
  await componentsPage.page.route('**/replacement/accessibility-regular.svg', route =>
    route.fulfill({
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 0h16v16H0z"/></svg>',
    }),
  );
  await componentsPage.mount({
    clearDocument: true,
    html: '<mdc-iconprovider><mdc-icon name="accessibility-regular"></mdc-icon></mdc-iconprovider>',
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveAttribute('viewBox', '0 0 32 32');
  await componentsPage.page.locator('#root > mdc-iconprovider').evaluate(element => {
    element.setAttribute('icon-set', 'custom-icons');
    element.setAttribute('url', '/replacement');
    element.setAttribute('cache-strategy', 'no-cache');
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveAttribute('viewBox', '0 0 16 16');
  await componentsPage.page.locator('mdc-icon').evaluate(element => {
    const parent = element.parentElement!;
    element.remove();
    parent.append(element);
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveAttribute('viewBox', '0 0 16 16');
  expect(await componentsPage.page.evaluate(() => window.assetErrors)).toBe(0);
});

test('should render assets inside shared component dependencies', async ({ componentsPage }) => {
  await setup(componentsPage);
  await componentsPage.mount({
    clearDocument: true,
    html: '<div><mdc-avatar icon-name="accessibility-regular"></mdc-avatar><mdc-link href="#" icon-name="accessibility-regular">Example link</mdc-link><mdc-announcementdialog visible header-text="Example announcement" close-button-aria-label="Close" illustration="onezerox-better-threetwozero-onboarding-tertiary"></mdc-announcementdialog></div>',
  });
  await expect(componentsPage.page.locator('mdc-avatar svg')).toHaveCount(1);
  await expect(componentsPage.page.locator('mdc-link svg')).toHaveCount(1);
  await expect(componentsPage.page.locator('mdc-announcementdialog mdc-illustration svg')).toHaveCount(1);
  expect(await componentsPage.page.evaluate(() => window.assetErrors)).toBe(0);
});

const observeSvgParsing = async (componentsPage: ComponentsPage) => {
  await componentsPage.page.evaluate(() => {
    window.assetSvgParses = 0;
    const parse = DOMParser.prototype.parseFromString;
    DOMParser.prototype.parseFromString = function observeParse(content, type) {
      window.assetSvgParses += 1;
      return parse.call(this, content, type);
    };
  });
};

test('should reuse prepared SVGs across canonical URLs while keeping instances independent', async ({
  componentsPage,
}) => {
  await setup(componentsPage);
  await observeSvgParsing(componentsPage);
  let requests = 0;
  await componentsPage.page.route('**/shared-template.svg', route => {
    requests += 1;
    return route.fulfill({
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M0 0h32v32H0z"/></svg>',
    });
  });
  await componentsPage.page.evaluate(() =>
    window.assetLoadingFixture.configureAssetLoading({
      resolveAsset: () => ({ format: 'svg', url: '/shared-template.svg' }),
    }),
  );
  await componentsPage.mount({
    clearDocument: true,
    html: '<div><mdc-icon name="accessibility-regular"></mdc-icon><mdc-icon name="arrow-left-bold"></mdc-icon><mdc-illustration name="people-talking-oneninetwo-empty-primary"></mdc-illustration><mdc-brandvisual name="webex-wordmark-dark-horizontal-bycisco"></mdc-brandvisual></div>',
  });
  await expect(componentsPage.page.locator('#root svg')).toHaveCount(4);
  expect(requests).toBe(1);
  expect(await componentsPage.page.evaluate(() => window.assetSvgParses)).toBe(1);
  await expect(componentsPage.page.locator('mdc-icon').nth(1).locator('svg')).toHaveAttribute(
    'data-name',
    'arrow-left-bold',
  );
  await expect(componentsPage.page.locator('mdc-illustration svg')).toHaveAttribute('part', 'illustration');
  await expect(componentsPage.page.locator('mdc-brandvisual svg')).toHaveAttribute('part', 'brandvisual');
  expect(
    await componentsPage.page
      .locator('#root svg')
      .evaluateAll(nodes => nodes.every(node => node.ownerDocument === document)),
  ).toBe(true);

  await componentsPage.page
    .locator('mdc-icon')
    .first()
    .evaluate(element => {
      element.shadowRoot!.querySelector('svg')!.setAttribute('viewBox', '0 0 1 1');
      element.shadowRoot!.querySelector('path')!.remove();
      element.remove();
    });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveAttribute('viewBox', '0 0 32 32');
  await expect(componentsPage.page.locator('#root svg path')).toHaveCount(3);

  await componentsPage.page.evaluate(() =>
    window.assetLoadingFixture.configureAssetLoading({
      resolveAsset: () => ({ format: 'svg', url: `${window.location.origin}/shared-template.svg` }),
    }),
  );
  await componentsPage.mount({
    clearDocument: true,
    html: '<mdc-icon name="accessibility-regular"></mdc-icon>',
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveAttribute('viewBox', '0 0 32 32');
  await expect(componentsPage.page.locator('mdc-icon svg path')).toHaveCount(1);
  expect(requests).toBe(1);
  expect(await componentsPage.page.evaluate(() => window.assetSvgParses)).toBe(1);
});

test('should reuse inline templates by content without returning stale or mutated SVGs', async ({ componentsPage }) => {
  await setup(componentsPage);
  await observeSvgParsing(componentsPage);
  const configure = (size: number) =>
    componentsPage.page.evaluate(
      size =>
        window.assetLoadingFixture.configureAssetLoading({
          resolveAsset: () => ({
            format: 'svg',
            content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}"><path d="M0 0h${size}v${size}H0z"/></svg>`,
          }),
        }),
      size,
    );
  await configure(32);
  await componentsPage.mount({
    clearDocument: true,
    html: '<div><mdc-icon name="accessibility-regular"></mdc-icon><mdc-icon name="arrow-left-bold"></mdc-icon></div>',
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveCount(2);
  expect(await componentsPage.page.evaluate(() => window.assetSvgParses)).toBe(1);
  await componentsPage.page
    .locator('mdc-icon')
    .first()
    .locator('path')
    .evaluate(path => path.remove());
  await expect(componentsPage.page.locator('mdc-icon').nth(1).locator('path')).toHaveCount(1);

  await configure(16);
  await componentsPage.mount({
    clearDocument: true,
    html: '<mdc-icon name="accessibility-regular"></mdc-icon>',
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveAttribute('viewBox', '0 0 16 16');
  expect(await componentsPage.page.evaluate(() => window.assetSvgParses)).toBe(2);
  await configure(32);
  await componentsPage.mount({
    clearDocument: true,
    html: '<mdc-icon name="accessibility-regular"></mdc-icon>',
  });
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveAttribute('viewBox', '0 0 32 32');
  await expect(componentsPage.page.locator('mdc-icon svg path')).toHaveCount(1);
  expect(await componentsPage.page.evaluate(() => window.assetSvgParses)).toBe(2);
  expect(await componentsPage.page.evaluate(() => window.assetErrors)).toBe(0);
});

test('should bound shared URL and inline reuse without removing live SVGs', async ({ componentsPage }) => {
  await setup(componentsPage);
  await observeSvgParsing(componentsPage);
  let requests = 0;
  await componentsPage.page.route('**/eviction-template.svg', route => {
    requests += 1;
    return route.fulfill({
      contentType: 'image/svg+xml',
      body: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M0 0h32v32H0z"/></svg>',
    });
  });
  const counts = await componentsPage.page.evaluate(async () => {
    window.assetLoadingFixture.configureAssetLoading({
      resolveAsset: ({ name }) =>
        name === 'cache-url'
          ? { format: 'svg', url: '/eviction-template.svg' }
          : {
              format: 'svg',
              content: `<svg xmlns="http://www.w3.org/2000/svg" data-source="${name}" viewBox="0 0 32 32"><path d="M0 0h32v32H0z"/></svg>`,
            },
    });
    const load = async (name: string, keep = false) => {
      const icon = document.createElement('mdc-icon');
      icon.setAttribute('name', name);
      const completed = new Promise<void>((resolve, reject) => {
        icon.addEventListener('load', () => resolve(), { once: true });
        icon.addEventListener('error', () => reject(new Error(`Failed to load ${name}`)), { once: true });
      });
      document.querySelector('#root')!.append(icon);
      await completed;
      await (icon as unknown as { updateComplete: Promise<boolean> }).updateComplete;
      if (!keep) icon.remove();
    };
    await load('cache-url', true);
    for (let i = 0; i < 254; i += 1) {
      // eslint-disable-next-line no-await-in-loop -- Eviction requires a stable request order.
      await load(`cache-${i}`);
    }
    await load('cache-0');
    await load('cache-254');
    const atLimit = window.assetSvgParses;
    await load('cache-255');
    await load('cache-url');
    const afterUrlEviction = window.assetSvgParses;
    await load('cache-0');
    const retainedRecent = window.assetSvgParses;
    await load('cache-1');
    return { atLimit, afterUrlEviction, retainedRecent, afterInlineEviction: window.assetSvgParses };
  });
  expect(counts).toEqual({ atLimit: 256, afterUrlEviction: 258, retainedRecent: 258, afterInlineEviction: 259 });
  expect(requests).toBe(2);
  await expect(componentsPage.page.locator('mdc-icon svg')).toHaveAttribute('viewBox', '0 0 32 32');
  await expect(componentsPage.page.locator('mdc-icon svg path')).toHaveCount(1);
  expect(await componentsPage.page.evaluate(() => window.assetErrors)).toBe(0);
});
