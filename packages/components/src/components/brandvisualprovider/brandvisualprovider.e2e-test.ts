import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

import { DEFAULTS } from './brandvisualprovider.constants';

// the full brand visual set is served by the e2e server, see scripts/copyBrandvisuals.js
const SVG_URL = '/dist/brandvisuals/svg';
const PNG_URL = '/dist/brandvisuals/png';

// a vector visual, only ever shipped as svg
const SVG_NAME = 'cisco-logo-light-color';
// a device visual, only ever shipped as png
const PNG_NAME = 'device-deskphone-eighteightsevenfour';

type SetupOptions = {
  componentsPage: ComponentsPage;
  url?: string;
  brandVisualSet?: string;
  fileExtension?: string;
  cacheStrategy?: string;
  cacheName?: string;
  name?: string;
  type?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;

  const renderBrandVisualProvider = (children: string = '') => `
    <mdc-brandvisualprovider
      id="local"
      brand-visual-set="${restArgs.brandVisualSet ?? 'custom-brand-visuals'}"
      url="${restArgs.url ?? SVG_URL}"
      ${restArgs.fileExtension ? `file-extension="${restArgs.fileExtension}"` : ''}
      ${restArgs.cacheStrategy ? `cache-strategy="${restArgs.cacheStrategy}"` : ''}
      ${restArgs.cacheName ? `cache-name="${restArgs.cacheName}"` : ''}
    >
      <mdc-subcomponent-brandvisual id="sub-local" brand-visual-label-prefix="BrandVisualProvider Set: ">
      </mdc-subcomponent-brandvisual>
      <mdc-brandvisual id="brandvisual-local" name="${restArgs.name ?? SVG_NAME}"></mdc-brandvisual>
      ${children}
    </mdc-brandvisualprovider>
  `;

  if (restArgs.type === 'nested') {
    await componentsPage.mount({
      clearDocument: true,
      html: renderBrandVisualProvider(`
        <mdc-brandvisualprovider
          id="nested"
          brand-visual-set="custom-brand-visuals"
          url="${restArgs.url ?? SVG_URL}"
          ${restArgs.fileExtension ? `file-extension="${restArgs.fileExtension}"` : ''}
        >
          <mdc-subcomponent-brandvisual id="sub-nested" brand-visual-label-prefix="Nested BrandVisualProvider Set: ">
          </mdc-subcomponent-brandvisual>
          <mdc-brandvisual id="brandvisual-nested" name="${restArgs.name ?? SVG_NAME}"></mdc-brandvisual>
        </mdc-brandvisualprovider>
      `),
    });
  } else {
    await componentsPage.mount({
      clearDocument: true,
      html: renderBrandVisualProvider(),
    });
  }
};

test('mdc-brandvisualprovider', async ({ componentsPage }) => {
  /**
   * BACKWARDS COMPATIBILITY
   *
   * This is the most important case in this suite. Every `mdc-brandvisual` written before this
   * provider existed has no provider above it, and must keep resolving through the dynamic import.
   * If this breaks, every existing consumer breaks with it.
   */
  await test.step('no provider', async () => {
    await componentsPage.mount({
      html: `<mdc-brandvisual id="standalone" name="${SVG_NAME}"></mdc-brandvisual>`,
      clearDocument: true,
    });

    const brandvisual = componentsPage.page.locator('mdc-brandvisual#standalone');
    await brandvisual.waitFor();

    await test.step('should still render without a provider', async () => {
      // esbuild rewrites the dynamic import to a single fixture, so assert that something
      // was rendered rather than asserting on which visual it is
      await expect(brandvisual.locator('svg')).toBeVisible();
    });
  });

  /**
   * MOMENTUM SET
   */
  await test.step('momentum-brand-visuals set', async () => {
    await setup({ componentsPage, brandVisualSet: 'momentum-brand-visuals', name: SVG_NAME });

    const brandvisual = componentsPage.page.locator('mdc-brandvisual#brandvisual-local');
    await brandvisual.waitFor();

    await test.step('should resolve through the dynamic import, not the url', async () => {
      await expect(brandvisual.locator('svg')).toBeVisible();
    });
  });

  /**
   * CUSTOM SET - SVG
   */
  await test.step('custom-brand-visuals set with svg', async () => {
    await setup({ componentsPage, fileExtension: 'svg', name: SVG_NAME });

    const brandvisualprovider = componentsPage.page.locator('mdc-brandvisualprovider#local');
    const subComponentLocator = componentsPage.page.locator('mdc-subcomponent-brandvisual#sub-local');
    const brandvisual = componentsPage.page.locator('mdc-brandvisual#brandvisual-local');
    await brandvisualprovider.waitFor();

    await test.step('should expose its configuration through context', async () => {
      await expect(brandvisualprovider).toHaveAttribute('brand-visual-set', 'custom-brand-visuals');
      await expect(brandvisualprovider).toHaveAttribute('url', SVG_URL);
      await expect(brandvisualprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
      await expect(subComponentLocator).toBeVisible();
      await expect(subComponentLocator).toContainText('BrandVisualProvider Set: custom-brand-visuals');
    });

    await test.step('should fetch the svg over http and inline it', async () => {
      const svg = brandvisual.locator('svg');
      await expect(svg).toBeVisible();
      // the fetched file carries none of these, so their presence proves the component added them
      await expect(svg).toHaveAttribute('part', 'brandvisual');
      await expect(svg).toHaveAttribute('data-name', SVG_NAME);
      await expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  /**
   * CUSTOM SET - PNG
   */
  await test.step('custom-brand-visuals set with png', async () => {
    await setup({ componentsPage, url: PNG_URL, fileExtension: 'png', name: PNG_NAME });

    const brandvisual = componentsPage.page.locator('mdc-brandvisual#brandvisual-local');
    await brandvisual.waitFor();

    await test.step('should render an img pointing at the url', async () => {
      const image = brandvisual.locator('img');
      await expect(image).toBeVisible();
      await expect(image).toHaveAttribute('part', 'brandvisualImage');
      await expect(image).toHaveAttribute('data-name', PNG_NAME);
      await expect(image).toHaveAttribute('src', `${PNG_URL}/${PNG_NAME}.png`);
    });
  });

  /**
   * ERROR HANDLING
   */
  await test.step('error handling', async () => {
    await test.step('should dispatch an error event when the svg 404s', async () => {
      await componentsPage.mount({
        html: `
          <mdc-brandvisualprovider brand-visual-set="custom-brand-visuals" url="${SVG_URL}" file-extension="svg">
            <mdc-brandvisual id="missing"></mdc-brandvisual>
          </mdc-brandvisualprovider>
        `,
        clearDocument: true,
      });

      const brandvisual = componentsPage.page.locator('mdc-brandvisual#missing');
      await brandvisual.waitFor();

      const waitForError = await componentsPage.waitForEvent(brandvisual, 'error');
      await componentsPage.setAttributes(brandvisual, { name: 'this-brand-visual-does-not-exist' });
      await waitForError;
    });

    await test.step('should dispatch an error event when the png 404s', async () => {
      await componentsPage.mount({
        html: `
          <mdc-brandvisualprovider brand-visual-set="custom-brand-visuals" url="${PNG_URL}" file-extension="png">
            <mdc-brandvisual id="missing-png"></mdc-brandvisual>
          </mdc-brandvisualprovider>
        `,
        clearDocument: true,
      });

      const brandvisual = componentsPage.page.locator('mdc-brandvisual#missing-png');
      await brandvisual.waitFor();

      const waitForError = await componentsPage.waitForEvent(brandvisual, 'error');
      await componentsPage.setAttributes(brandvisual, { name: 'this-brand-visual-does-not-exist' });
      await waitForError;
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await setup({ componentsPage, fileExtension: 'svg', name: SVG_NAME });
    const brandvisualprovider = componentsPage.page.locator('mdc-brandvisualprovider#local');
    await brandvisualprovider.waitFor();

    await test.step('should fall back to the default file extension when an invalid one is passed', async () => {
      await componentsPage.setAttributes(brandvisualprovider, { 'file-extension': 'exe' });

      await expect(brandvisualprovider).toHaveAttribute('file-extension', DEFAULTS.FILE_EXTENSION);
    });

    await test.step('should accept every allowed file extension', async () => {
      await componentsPage.setAttributes(brandvisualprovider, { 'file-extension': 'png' });
      await expect(brandvisualprovider).toHaveAttribute('file-extension', 'png');

      await componentsPage.setAttributes(brandvisualprovider, { 'file-extension': 'svg' });
      await expect(brandvisualprovider).toHaveAttribute('file-extension', 'svg');
    });
  });

  /**
   * CACHING
   */
  await test.step('cache strategy', async () => {
    await test.step('should only request the asset once when caching is enabled', async () => {
      const requests: string[] = [];
      const countRequest = (url: string) => {
        if (url.includes(`${SVG_NAME}.svg`)) {
          requests.push(url);
        }
      };
      componentsPage.page.on('request', request => countRequest(request.url()));

      await componentsPage.mount({
        clearDocument: true,
        html: `
          <mdc-brandvisualprovider
            brand-visual-set="custom-brand-visuals"
            url="${SVG_URL}"
            file-extension="svg"
            cache-strategy="in-memory-cache"
            cache-name="e2e-brand-visual-cache"
          >
            <mdc-brandvisual id="cached-one" name="${SVG_NAME}"></mdc-brandvisual>
            <mdc-brandvisual id="cached-two" name="${SVG_NAME}"></mdc-brandvisual>
            <mdc-brandvisual id="cached-three" name="${SVG_NAME}"></mdc-brandvisual>
          </mdc-brandvisualprovider>
        `,
      });

      await expect(componentsPage.page.locator('mdc-brandvisual#cached-three svg')).toBeVisible();

      // three components, one network request - the in-flight dedupe and the cache between them
      // collapse the rest
      expect(requests.length).toBe(1);
    });
  });

  /**
   * NESTED PROVIDERS
   */
  await test.step('nested providers', async () => {
    await setup({ componentsPage, fileExtension: 'svg', name: SVG_NAME, type: 'nested' });

    const nestedSubComponentLocator = componentsPage.page.locator('mdc-subcomponent-brandvisual#sub-nested');
    await nestedSubComponentLocator.waitFor();

    await test.step('should resolve the nearest provider', async () => {
      await expect(nestedSubComponentLocator).toContainText('Nested BrandVisualProvider Set: custom-brand-visuals');
      await expect(componentsPage.page.locator('mdc-brandvisual#brandvisual-nested svg')).toBeVisible();
    });
  });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await setup({ componentsPage, fileExtension: 'svg', name: SVG_NAME });
    await componentsPage.accessibility.checkForA11yViolations('brand-visual-provider-default');
  });
});
