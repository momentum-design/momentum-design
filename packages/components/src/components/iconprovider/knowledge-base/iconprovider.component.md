---
title: Iconprovider
summary: Usage, guidelines, and accessibility for the mdc-iconprovider component — a context provider that supplies icon source, sizing, and caching to every nested mdc-icon.
tier: 3
component: iconprovider
---

## Overview

The iconprovider is the context provider for `mdc-icon`. It lets an application configure where icons come from and how they are sized and cached in one place, so every nested icon stays consistent without repeating that setup at each usage.

### When to use

- Use `mdc-iconprovider` to configure the icon source, sizing, and length unit once for every nested `mdc-icon` in a subtree.
- Use `mdc-iconprovider` when icons should be cached across re-renders or navigations to avoid repeated network fetches.

### When not to use

- Do not nest multiple `mdc-iconprovider`s when one is enough. Use a single provider near the root, and nest only when subtrees genuinely need different sources.
- Do not reach for `mdc-iconprovider` to render a glyph — it has no visible UI. Use `mdc-icon` for the icon itself.

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

### Composition

- Wrap the application root, or any subtree that uses icons, with a single `mdc-iconprovider`; every nested `mdc-icon` reads its configuration through context.
- The provider renders no UI of its own — it only broadcasts configuration to its slotted children.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `icon-set` | `momentum-icons` (default, dynamic import from the package) or `custom-icons` (fetched from `url`). Pick `custom-icons` when icons live in your own asset bundle. |
| `url` | Base URL icons are fetched from. Required when `icon-set="custom-icons"`. |
| `file-extension` | Extension appended to the icon `name` when fetching. Default `svg`; allow-listed, invalid values fall back to the default. |
| `length-unit` | CSS length unit (`em`, `rem`, `px`, `%`) applied with `size` on every nested icon. Default `em`; allow-listed. |
| `size` | Default numeric size for nested icons that do not set their own. Default `1`. |
| `cache-strategy` | `in-memory-cache` or `web-cache-api` (HTTPS only). Applies only to `custom-icons`. Default off. |
| `cache-name` | Cache name used by `cache-strategy`; required when it is set and must be unique across the app's caches. |

### Limitations

- **No visible UI** — the provider only broadcasts configuration; it renders nothing itself.
- **Web cache needs HTTPS** — `cache-strategy="web-cache-api"` works only in HTTPS environments.
- **Caching is custom-icons only** — `cache-strategy` and `cache-name` apply only when `icon-set="custom-icons"`; `momentum-icons` load via dynamic import and the bundler handles caching.

## Accessibility

### Built-in features

The iconprovider renders nothing of its own; it has no role, no focusable surface, and no keyboard interaction. Accessibility for icons is owned entirely by the nested `mdc-icon` components — see the `mdc-icon` documentation for the ARIA contract.

### Implementation requirements

#### General

- Mount the provider once near the application root; every `mdc-icon` in the subtree inherits its configuration through context.
- When using `cache-strategy`, always pair it with a unique `cache-name`.
- For HTTPS-only deployments using custom icons, prefer `cache-strategy="web-cache-api"` so cached icons survive reloads; use `in-memory-cache` only when persistence across reloads is not needed.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-icon` | The consumer this provider configures. |
| `mdc-illustrationprovider` | The parallel context provider for `mdc-illustration`. |
