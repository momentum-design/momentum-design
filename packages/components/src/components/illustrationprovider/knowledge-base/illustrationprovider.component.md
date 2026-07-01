---
title: Illustrationprovider
summary: Usage and guidelines for the mdc-illustrationprovider component — a context provider supplying illustration source, file extension, and optional caching to every nested mdc-illustration.
tier: 3
component: illustrationprovider
---

## Overview

The illustrationprovider is a context provider for `mdc-illustration`. It broadcasts the configuration every nested illustration needs to resolve its `name` into a rendered SVG: which illustration set to use, where to fetch from (for custom illustrations), what file extension to apply, and an optional cache strategy.

Wrap the application (or a sub-tree) with an `mdc-illustrationprovider` once; every `mdc-illustration` inside it reads the same configuration via context. Without a surrounding illustrationprovider, an `mdc-illustration` cannot resolve its source and renders nothing.

### When to use

- Wrap the root of the application (or any sub-tree that uses illustrations) with `mdc-illustrationprovider` to configure the source once for every nested `mdc-illustration`.
- Use it when illustrations should be cached across re-renders or page navigations to avoid repeated network fetches.

### When not to use

- Do not nest multiple `mdc-illustrationprovider`s when one provider is enough — the nearest provider wins per illustration, so nesting only makes sense when different sub-trees genuinely need different sources.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/illustrationprovider/index.js"; // custom element registration
// or via React wrapper
import { IllustrationProvider } from '@momentum-design/components/dist/react';
```

Momentum illustrations (dynamic import from the `@momentum-design/illustrations` package):

```html
<mdc-illustrationprovider illustration-set="momentum-illustrations">
  <!-- application root with mdc-illustration usages -->
</mdc-illustrationprovider>
```

Custom illustrations (fetched over HTTP from a URL the consumer hosts):

```html
<mdc-illustrationprovider
  illustration-set="custom-illustrations"
  url="/assets/illustrations"
  file-extension="svg"
  cache-strategy="web-cache-api"
  cache-name="my-app-illustrations"
>
  <!-- application root -->
</mdc-illustrationprovider>
```

The illustrationprovider does not render any visible UI of its own — it only acts as a context-broadcasting wrapper around its slotted children.

### Content guidance

- Place the illustrationprovider once near the root of the application; every nested `mdc-illustration` will inherit its configuration.
- Pick `illustration-set="momentum-illustrations"` for the standard Momentum illustration library (the build tooling must support dynamic imports). Pick `illustration-set="custom-illustrations"` when illustrations live in your own asset bundle.
- When using `cache-strategy`, always set `cache-name` to a value that is unique across the app's asset caches.

### Property/Attribute details

- `illustration-set` — `momentum-illustrations` (default) for dynamic import from the `@momentum-design/illustrations` package, or `custom-illustrations` for fetch from `url`.
- `url` — base URL from which illustrations are fetched. Required when `illustration-set="custom-illustrations"`.
- `file-extension` — extension appended to the illustration `name` when fetching. Default `svg`. Restricted to an allow-list; invalid values fall back to the default.
- `cache-strategy` — `in-memory-cache` (JS in-memory) or `web-cache-api` (browser Cache API; HTTPS only). Only applies when `illustration-set="custom-illustrations"`. Default unset (no caching).
- `cache-name` — name of the cache used by `cache-strategy`. Required when `cache-strategy` is set; must be unique across the app's caches.

### Limitations

- The illustrationprovider has no visible UI — its only effect is broadcasting configuration to nested `mdc-illustration` components. Nesting outside this contract has no effect.
- `cache-strategy="web-cache-api"` only works in HTTPS environments (browser Cache API restriction).
- `cache-strategy` and `cache-name` only apply when `illustration-set="custom-illustrations"`; with `momentum-illustrations` the illustrations are loaded via dynamic JS import and the bundler handles caching.

## Accessibility

### Built-in features

The illustrationprovider renders nothing of its own; it has no role, no focusable surface, and no keyboard interaction. Accessibility for illustrations is entirely owned by the nested `mdc-illustration` components (decorative vs informative) — see the `mdc-illustration` documentation for the ARIA contract.

### Implementation requirements

#### General

- Mount the provider once near the application root; every `mdc-illustration` inside the sub-tree inherits its configuration through context.
- When using `cache-strategy`, always pair it with a unique `cache-name`.
- For HTTPS-only deployments using custom illustrations, prefer `cache-strategy="web-cache-api"` so cached illustrations survive page reloads; use `in-memory-cache` only when persistence across reloads is not needed.
