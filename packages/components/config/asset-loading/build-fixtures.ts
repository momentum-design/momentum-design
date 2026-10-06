import fs from 'node:fs';
import path from 'node:path';
import { promisify } from 'node:util';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

import webpack from 'webpack';
import esbuild from 'esbuild';

const require = createRequire(import.meta.url);

const buildFixtures = async () => {
  const root = process.cwd();
  const destination = path.join(root, 'config/playwright/public/asset-loading');
  const families = ['icons', 'illustrations', 'brand-visuals'];
  const pngNames = fs
    .readdirSync(path.join(path.dirname(require.resolve('@momentum-design/brand-visuals/dist/manifest.json')), 'png'))
    .filter(name => name.endsWith('.png'))
    .map(name => path.basename(name, '.png'));
  const fixture = `
import { configureAssetLoading } from '@momentum-design/components/asset-loading';
import '@momentum-design/components/dist/components/iconprovider/index.js';
import '@momentum-design/components/dist/components/illustrationprovider/index.js';
import '@momentum-design/components/dist/components/brandvisualprovider/index.js';
import '@momentum-design/components/dist/components/icon/index.js';
import '@momentum-design/components/dist/components/illustration/index.js';
import '@momentum-design/components/dist/components/brandvisual/index.js';
import '@momentum-design/components/dist/components/button/index.js';
import '@momentum-design/components/dist/components/avatar/index.js';
import '@momentum-design/components/dist/components/link/index.js';
import '@momentum-design/components/dist/components/announcementdialog/index.js';
import '@momentum-design/components/dist/react/button/index.js';
const pngNames = new Set(${JSON.stringify(pngNames)});
configureAssetLoading({resolveAsset({family, name}) {
  const directory = {icon:'icons', illustration:'illustrations', brandvisual:'brandvisuals'}[family];
  const format = family === 'brandvisual' && pngNames.has(name) ? 'png' : 'svg';
  return {format, url:'/dist/' + directory + '/' + format + '/' + name + '.' + format};
}});
window.assetLoadingFixture = {configureAssetLoading};
`;
  fs.mkdirSync(destination, { recursive: true });
  fs.writeFileSync(path.join(destination, 'entry.js'), fixture);
  const results: Record<string, unknown> = {};

  for (const mode of ['bundled', 'external', 'icon-only', 'unconfigured']) {
    const directory = path.join(destination, mode);
    const external = mode === 'external' || mode === 'unconfigured';
    const entry = path.join(destination, `${mode === 'unconfigured' || mode === 'icon-only' ? mode : 'entry'}.js`);
    if (mode === 'icon-only')
      fs.writeFileSync(entry, "import '@momentum-design/components/dist/components/button/index.js';");
    if (mode === 'unconfigured') {
      const start = fixture.indexOf('configureAssetLoading({');
      const end = fixture.indexOf('window.assetLoadingFixture');
      fs.writeFileSync(entry, fixture.slice(0, start) + fixture.slice(end));
    }
    const compiler = webpack({
      mode: 'production',
      entry,
      output: {
        path: directory,
        filename: 'index.js',
        publicPath: `/asset-loading/${mode}/`,
        hashFunction: 'xxhash64',
      },
      resolve: {
        // This fixture consumes compiled package exports, not the monorepo's source paths.
        tsconfig: false,
        extensions: ['.js', '.ts'],
        conditionNames: external ? ['momentum-external-assets', '...'] : ['...'],
      },
      optimization: { minimize: false },
    });
    // Build sequentially to bound memory when the legacy graph emits thousands of chunks.
    // eslint-disable-next-line no-await-in-loop
    const stats = await promisify(compiler.run.bind(compiler))();
    // eslint-disable-next-line no-await-in-loop
    await promisify(compiler.close.bind(compiler))();
    assert(stats && !stats.hasErrors(), stats?.toString({ all: false, errors: true }));
    const json = stats.toJson({ modules: true, nestedModules: true, assets: true, errors: true });
    const modules: { identifier?: string; modules?: unknown[] }[] = [];
    const flatten = (items: typeof modules) =>
      items.forEach(item => {
        modules.push(item);
        if (item.modules) flatten(item.modules as typeof modules);
      });
    flatten(json.modules ?? []);
    const counts = Object.fromEntries(
      families.map(family => [
        family,
        modules.filter(module =>
          new RegExp(`(?:@momentum-design|assets)/${family}/dist/ts/`).test(module.identifier ?? ''),
        ).length,
      ]),
    );
    const files = (json.assets ?? []).filter(asset => asset.name.endsWith('.js'));
    if (external)
      assert(
        Object.values(counts).every(count => count === 0),
        `External graph contains asset importers: ${JSON.stringify(counts)}. ${modules
          .filter(module => /asset-loader\/bundled-/.test(module.identifier ?? ''))
          .map(module => module.identifier)
          .join(', ')}`,
      );
    else if (mode === 'icon-only')
      assert(
        counts.icons > 0 && counts.illustrations === 0 && counts['brand-visuals'] === 0,
        'Icon-only graph gained another asset family.',
      );
    else
      assert(
        Object.values(counts).every(count => count > 0),
        'Legacy graph lost an asset family.',
      );
    results[mode] = { counts, jsFiles: files.length, jsBytes: files.reduce((sum, asset) => sum + asset.size, 0) };
    fs.writeFileSync(
      path.join(destination, `${mode}.html`),
      `<!doctype html><html lang="en"><head><title>Momentum Components Dev Page</title><link rel="stylesheet" href="/index.css"><link rel="stylesheet" href="/dist/complete.css"><script defer src="/asset-loading/${mode}/index.js"></script></head><body><main><mdc-iconprovider icon-set="momentum-icons"><mdc-illustrationprovider illustration-set="momentum-illustrations"><div id="root"></div></mdc-illustrationprovider></mdc-iconprovider></main></body></html>`,
    );
  }
  const independent = await esbuild.build({
    entryPoints: [path.join(destination, 'entry.js')],
    bundle: true,
    write: false,
    metafile: true,
    conditions: ['momentum-external-assets'],
    tsconfigRaw: { compilerOptions: {} },
    platform: 'browser',
    target: 'es2019',
  });
  assert(
    !Object.keys(independent.metafile!.inputs).some(file =>
      /(?:icons|illustrations|brand-visuals)\/dist\/ts\//.test(file),
    ),
    'Independent bundler includes asset factories.',
  );
  results.esbuild = { jsBytes: independent.outputFiles[0].contents.length };
  fs.writeFileSync(path.join(destination, 'graph-results.json'), JSON.stringify(results, null, 2));
  // eslint-disable-next-line no-console -- Consumer build evidence is this CLI's output.
  console.log(JSON.stringify(results, null, 2));
};
buildFixtures().catch(error => {
  // eslint-disable-next-line no-console -- Surface fixture build failures to CI.
  console.error(error);
  process.exitCode = 1;
});
