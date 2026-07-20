---
title: Illustrationprovider
summary: Usage, guidelines, and accessibility for the mdc-illustrationprovider component — a context provider that supplies illustration source and caching to nested mdc-illustration components.
tier: 3
component: illustrationprovider
---

## Overview

The illustrationprovider is the context provider for `mdc-illustration`. It lets an application configure where illustrations come from and how they are cached in one place, so every nested illustration stays consistent without repeating that setup at each usage.

### When to use

- Use `mdc-illustrationprovider` to configure the illustration source once for every nested `mdc-illustration` in a subtree.
- Use `mdc-illustrationprovider` when illustrations should be cached across re-renders or navigations to avoid repeated network fetches.

### When not to use

- Do not nest multiple `mdc-illustrationprovider`s when one is enough. Use a single provider near the root, and nest only when subtrees genuinely need different sources.
- Do not reach for `mdc-illustrationprovider` to render artwork — it has no visible UI. Use `mdc-illustration` for the illustration itself.

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

### Composition

- Wrap the application root, or any subtree that uses illustrations, with a single `mdc-illustrationprovider`; every nested `mdc-illustration` reads its configuration through context.
- The provider renders no UI of its own — it only broadcasts configuration to its slotted children.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `illustration-set` | `momentum-illustrations` (default, dynamic import from the package) or `custom-illustrations` (fetched from `url`). Pick `custom-illustrations` when illustrations live in your own asset bundle. |
| `url` | Base URL illustrations are fetched from. Required when `illustration-set="custom-illustrations"`. |
| `file-extension` | Extension appended to the illustration `name` when fetching. Default `svg`; allow-listed, invalid values fall back to the default. |
| `cache-strategy` | `in-memory-cache` or `web-cache-api` (HTTPS only). Applies only to `custom-illustrations`. Default off. |
| `cache-name` | Cache name used by `cache-strategy`; required when it is set and must be unique across the app's caches. |

### Limitations

- **No visible UI** — the provider only broadcasts configuration; it renders nothing itself.
- **Web cache needs HTTPS** — `cache-strategy="web-cache-api"` works only in HTTPS environments.
- **Caching is custom-illustrations only** — `cache-strategy` and `cache-name` apply only when `illustration-set="custom-illustrations"`; `momentum-illustrations` load via dynamic import and the bundler handles caching.

## Accessibility

### Built-in features

The illustrationprovider renders nothing of its own; it has no role, no focusable surface, and no keyboard interaction. Accessibility for illustrations is owned entirely by the nested `mdc-illustration` components — see the `mdc-illustration` documentation for the ARIA contract.

### Implementation requirements

#### General

- Mount the provider once near the application root; every `mdc-illustration` in the subtree inherits its configuration through context.
- When using `cache-strategy`, always pair it with a unique `cache-name`.
- For HTTPS-only deployments using custom illustrations, prefer `cache-strategy="web-cache-api"` so cached illustrations survive reloads; use `in-memory-cache` only when persistence across reloads is not needed.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-illustration` | The consumer this provider configures. |
| `mdc-iconprovider` | The parallel context provider for `mdc-icon`. |
