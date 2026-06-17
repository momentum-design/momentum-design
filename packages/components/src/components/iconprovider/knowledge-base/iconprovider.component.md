---
title: Iconprovider
summary: Usage and guidelines for the mdc-iconprovider component — a context provider supplying icon source, file extension, default sizing, and optional caching to every nested mdc-icon.
status: draft
tier: 3
component: iconprovider
---

## Overview

The iconprovider is a context provider for `mdc-icon`. It broadcasts the configuration every nested icon needs to resolve its `name` into a rendered SVG: which icon set to use, where to fetch from (for custom icons), what file extension to apply, the default size and length unit, and an optional cache strategy.

Wrap the application (or a sub-tree) with an `mdc-iconprovider` once; every `mdc-icon` inside it reads the same configuration via context. Without a surrounding iconprovider, an `mdc-icon` cannot resolve its source and renders nothing.

### When to use

- Wrap the root of the application (or any sub-tree that uses icons) with `mdc-iconprovider` to configure the icon source for all nested `mdc-icon` components in one place.
- Use it when icons should be cached across re-renders or page navigations to avoid repeated network fetches.

### When not to use

- Do not nest multiple `mdc-iconprovider`s when one provider is enough — the nearest provider wins per icon, so nesting only makes sense when different sub-trees genuinely need different sources.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/iconprovider/index.js"; // custom element registration
// or via React wrapper
import { IconProvider } from '@momentum-design/components/dist/react';
```

Momentum icons (dynamic import from the `@momentum-design/icons` package):

```html
<mdc-iconprovider icon-set="momentum-icons" length-unit="rem" size="1">
  <!-- application root with mdc-icon usages -->
</mdc-iconprovider>
```

Custom icons (fetched over HTTP from a URL the consumer hosts):

```html
<mdc-iconprovider
  icon-set="custom-icons"
  url="/assets/icons"
  file-extension="svg"
  length-unit="px"
  size="16"
  cache-strategy="web-cache-api"
  cache-name="my-app-icons"
>
  <!-- application root -->
</mdc-iconprovider>
```

The iconprovider does not render any visible UI of its own — it only acts as a context-broadcasting wrapper around its slotted children.

### Content guidance

- Place the iconprovider once near the root of the application; every nested `mdc-icon` will inherit its configuration.
- Pick `icon-set="momentum-icons"` for the standard Momentum icon library (the build tooling must support dynamic imports). Pick `icon-set="custom-icons"` when icons live in your own asset bundle.
- When using `cache-strategy`, always set `cache-name` to a value that is unique across the app's asset caches.

### Property/Attribute details

- `icon-set` — `momentum-icons` (default) for dynamic import from the `@momentum-design/icons` package, or `custom-icons` for fetch from `url`.
- `url` — base URL from which icons are fetched. Required when `icon-set="custom-icons"`.
- `file-extension` — extension appended to the icon `name` when fetching. Default `svg`. Restricted to an allow-list; invalid values fall back to the default.
- `length-unit` — CSS length unit (`em`, `rem`, `px`, etc.) used together with `size` on every nested `mdc-icon`. Default `em`. Restricted to an allow-list; invalid values fall back to the default.
- `size` — numeric default size for every nested `mdc-icon` when the icon does not set its own `size`. Default `1`.
- `cache-strategy` — `in-memory-cache` (JS in-memory) or `web-cache-api` (browser Cache API; HTTPS only). Only applies when `icon-set="custom-icons"`. Default unset (no caching).
- `cache-name` — name of the cache used by `cache-strategy`. Required when `cache-strategy` is set; must be unique across the app's caches.

### Limitations

- The iconprovider has no visible UI — its only effect is broadcasting configuration to nested `mdc-icon` components. Nesting outside this contract has no effect.
- `cache-strategy="web-cache-api"` only works in HTTPS environments (browser Cache API restriction).
- `cache-strategy` and `cache-name` only apply when `icon-set="custom-icons"`; with `momentum-icons` the icons are loaded via dynamic JS import and the bundler handles caching.

## Accessibility

### Built-in features

The iconprovider renders nothing of its own; it has no role, no focusable surface, and no keyboard interaction. Accessibility for icons is entirely owned by the nested `mdc-icon` components (decorative vs informative vs informative-standalone) — see the `mdc-icon` documentation for the ARIA contract.

### Implementation requirements

#### General

- Mount the provider once near the application root; every `mdc-icon` inside the sub-tree inherits its configuration through context.
- When using `cache-strategy`, always pair it with a unique `cache-name`.
- For HTTPS-only deployments using custom icons, prefer `cache-strategy="web-cache-api"` so cached icons survive page reloads; use `in-memory-cache` only when persistence across reloads is not needed.
