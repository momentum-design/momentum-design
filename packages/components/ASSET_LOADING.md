# Asset loading

Momentum renders named SVG assets inline so `currentColor`, CSS custom
properties, CSS parts, accessibility and sizing work as before. Brand PNGs
render as images. The default package graph continues to import the generated
asset factories on demand.

## External assets at build time

Applications that serve their own trusted asset files can select the
`momentum-external-assets` package condition for the entire compilation:

```js
// webpack.config.js
module.exports = {
  resolve: {
    conditionNames: ['momentum-external-assets', '...'],
  },
};
```

Configure the resolver before rendering any component:

```ts
import { configureAssetLoading } from '@momentum-design/components/asset-loading';

configureAssetLoading({
  resolveAsset({ family, name }) {
    // Resolve the application's versioned URL and each brand's SVG/PNG format.
    return resolveApplicationAsset(family, name);
  },
});
```

The resolver receives `family` (`icon`, `illustration`, or `brandvisual`) and
`name`. Return `{format: 'svg', url}`, `{format: 'png', url}` for brand
photography, or `{format: 'svg', content}` for a small set of critical offline
assets. Names must contain lowercase letters/digits separated by hyphens,
without an extension. The application owns the versioned files, format metadata,
public URL base, CSP compatibility and retention of assets still needed by older
application versions. `dist/svg` and `dist/png` in the asset packages provide
the original files.

This condition applies to React barrels, per-component wrappers, web-component
registration and internal component dependencies. All paths share the same
component classes. Do not mix a separately prebuilt browser bundle into an
external compilation: its already-selected asset factories cannot be removed by
the application's condition. Importing the configuration API alone does not
change the build graph. The physical
`@momentum-design/components/dist/asset-loading` entry is also available for
tooling that does not support package export maps.

The component graph uses package-private `#momentum-assets/*` imports. The
bundler must support package import maps even when keeping the default graph.
Webpack 5 and esbuild are covered by the compiled-package fixtures. Older
tooling may need a resolver bridge; the documentation workspace uses one for
Astro's Vite 3 and selects the default factories.

## Rendering and errors

Icons and illustrations still require their existing providers. A bare
brandvisual uses the configured resolver. Fully configured custom providers
retain their existing HTTP and cache behavior. An incomplete custom provider
reports `error` in the external graph; a legacy brand provider retains its
previous packaged fallback. No external failure falls back to a JavaScript asset
importer.

Successful loads emit the existing `load` event; missing/invalid configuration,
HTTP failures, malformed SVGs and image failures emit `error`. Native PNG
loading waits for image decoding/loading before reporting success, whereas the
legacy factory can report success before its embedded image finishes loading.
SVGs retain `part`, `data-name` and `aria-hidden`; PNGs retain
`part="brandvisualImage"` and `alt-text`.

Each component receives its own SVG node. A page-local cache retains up to 256
validated, detached SVG templates across fetched URLs and inline content, with
least-recently-used eviction. A first load parses and validates once; subsequent
loads deep-clone the template without parsing again. Clones receive their own
family/name/accessibility attributes. URL keys are absolute; inline keys use the
actual content, so changed embedded content cannot reuse a stale template. PNGs
and existing custom-provider caches are separate.

A temporary pending-request registry shares concurrent fetches and removes each
entry when its request settles. These mechanisms replace the asset-specific
module/template reuse provided by generated JavaScript factories and Lit; HTTP
caching alone retains response bytes, not prepared SVG DOM. This is one
completed-asset cache plus pending coordination, not an additional persistent
cache. The 256-entry limit bounds count rather than bytes and is an engineering
cap, not a measured optimum. Eviction leaves live component SVGs intact; evicted
inline assets can be rebuilt offline from content, while evicted URL assets need
another fetch, which may use the browser HTTP cache. Failed loads remain
retryable. Changing a name or provider source reloads the component; late
completions cannot overwrite a newer source or update a disconnected instance.
Disconnecting one consumer does not cancel a shared transport needed by another.
Resolver reconfiguration affects subsequent loads; it is not a reactive update
to assets already rendered.

Use only trusted SVG sources: root validation and script/event-attribute
rejection are defensive checks, not a general sanitizer for arbitrary uploaded
SVGs. SVG gradients and `foreignObject` content used by the shipped brand assets
remain intact. CORS and CSP continue to apply to URL requests. This API does not
add per-file integrity checks.

## Validation

`yarn components test:asset-loading:build` checks Webpack external, legacy and
icon-only graphs, plus an independent esbuild external graph. The external
graphs must contain zero icon/illustration/brand factories; icon-only legacy
consumers must not acquire illustration/brand contexts. Public browser behavior
is covered by `src/components/icon/asset-loading.e2e-test.ts`.
