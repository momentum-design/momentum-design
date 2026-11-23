---
title: Brandvisualprovider
summary: Usage, guidelines, and accessibility for the mdc-brandvisualprovider component — a context provider that supplies brand visual source and caching to nested mdc-brandvisual components.
tier: 3
component: brandvisualprovider
---

## Overview

The brandvisualprovider is the context provider for `mdc-brandvisual`. It lets an application configure where brand visuals come from and how they are cached in one place, so every nested brand visual stays consistent without repeating that setup at each usage.

Without a provider, `mdc-brandvisual` resolves its asset through a dynamic import of the lit template shipped in `@momentum-design/brand-visuals`. That import is not statically analysable, so bundlers have to account for every asset in the package. Pointing the provider at a URL replaces that import with an HTTP fetch, which lets an application serve the brand visual set itself and keep it out of the bundle entirely.

### When to use

- Use `mdc-brandvisualprovider` to configure the brand visual source once for every nested `mdc-brandvisual` in a subtree.
- Use `mdc-brandvisualprovider` with `brand-visual-set="custom-brand-visuals"` when brand visuals should be served over HTTP rather than bundled — for example in a host framework that cannot afford to bundle the full asset set.
- Use `mdc-brandvisualprovider` when brand visuals should be cached across re-renders or navigations to avoid repeated network fetches.

### When not to use

- Do not expect one provider to cover every brand visual when fetching over HTTP. The set is split across an `svg` and a `png` folder and a provider points at one of them, so a page using artwork from both needs one provider for each — see **Content guidance** below. Outside that case, prefer a single provider near the root and nest only when a subtree genuinely needs a different source.
- Do not reach for `mdc-brandvisualprovider` to render a logo — it has no visible UI. Use `mdc-brandvisual` for the visual itself.
- Do not add a provider purely to keep the existing behaviour. `mdc-brandvisual` works without one.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/brandvisualprovider/index.js"; // custom element registration
// or via React wrapper
import { BrandVisualProvider } from '@momentum-design/components/dist/react';
```

Momentum brand visuals (dynamic import from the `@momentum-design/brand-visuals` package):

```html
<mdc-brandvisualprovider brand-visual-set="momentum-brand-visuals">
  <!-- application root with mdc-brandvisual usages -->
</mdc-brandvisualprovider>
```

Custom brand visuals (fetched over HTTP from a URL the consumer hosts):

```html
<mdc-brandvisualprovider
  brand-visual-set="custom-brand-visuals"
  url="/assets/brandvisuals/svg"
  file-extension="svg"
  cache-strategy="web-cache-api"
  cache-name="my-app-brand-visuals"
>
  <!-- application root -->
</mdc-brandvisualprovider>
```

This provider reaches the `svg` folder only. Using any of the raster brand visuals as well needs a second provider pointing at the `png` folder — see **Content guidance**.

### Composition

- Wrap the application root, or any subtree that uses brand visuals, with an `mdc-brandvisualprovider`; every nested `mdc-brandvisual` reads its configuration through context.
- Each `mdc-brandvisual` resolves against its nearest ancestor provider, so a nested provider overrides the configuration for its own subtree only.
- The provider renders no UI of its own — it only broadcasts configuration to its slotted children.

### Content guidance

`@momentum-design/brand-visuals` publishes the set as two sibling folders, `svg` and `png`, and a provider's `url` and `file-extension` point at one of them. The folders do not overlap — every brand visual lives in exactly one of them — so a single provider can reach only part of the set:

- `svg` holds the vector artwork: the logos, wordmarks, app icons, and the devices that have a vector drawing. These are fetched, inlined, and exposed through `::part(brandvisual)`.
- `png` holds the raster artwork: the device renders and thumbnails that exist only as photography, plus the full-bleed background images. These are rendered as an `img` and exposed through `::part(brandvisualImage)`.

The split does not follow the name. `device-` names appear in **both** folders — `device-deskpro` is vector artwork in `svg`, while `device-deskphone-eighteightsevenfour` is raster artwork in `png` — so check the package rather than inferring the folder from a prefix.

An application that serves its own brand visuals over HTTP and uses artwork from both folders must serve both folders and put **two providers** on the page, one per folder. Because a brand visual resolves against its nearest ancestor provider, cover the folder most of the page needs at the root and wrap the region that needs the other folder in its own provider:

```html
<mdc-brandvisualprovider brand-visual-set="custom-brand-visuals" url="/assets/brandvisuals/svg" file-extension="svg">
  <!-- application root: vector artwork resolves against this provider -->
  <mdc-brandvisual name="cisco-logo-light-color"></mdc-brandvisual>

  <mdc-brandvisualprovider brand-visual-set="custom-brand-visuals" url="/assets/brandvisuals/png" file-extension="png">
    <!-- device picker: raster artwork resolves against this provider -->
    <mdc-brandvisual name="device-deskphone-eighteightsevenfour"></mdc-brandvisual>
  </mdc-brandvisualprovider>
</mdc-brandvisualprovider>
```

Two sibling providers work just as well when the two regions live in unrelated parts of the tree.

Pointing a brand visual at the wrong provider fails quietly. `device-deskphone-eighteightsevenfour` under the `svg` provider above resolves to `/assets/brandvisuals/svg/device-deskphone-eighteightsevenfour.svg`, which does not exist — the request fails and nothing renders, without throwing. A vector name under the `png` provider fails the same way. This applies only to `custom-brand-visuals`; the default `momentum-brand-visuals` set resolves the whole set through the dynamic import and needs no `url` at all.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `brand-visual-set` | `momentum-brand-visuals` (default, dynamic import from the package) or `custom-brand-visuals` (fetched from `url`). Pick `custom-brand-visuals` when brand visuals are served from your own asset host. |
| `url` | Base URL brand visuals are fetched from, including the `svg` or `png` folder — the name and `file-extension` are appended to it. Required when `brand-visual-set="custom-brand-visuals"`, and must match `file-extension`. |
| `file-extension` | Extension appended to the brand visual `name` when fetching, either `svg` or `png`. Default `svg`; allow-listed, invalid values fall back to the default. |
| `cache-strategy` | `in-memory-cache` or `web-cache-api` (HTTPS only). Applies only to `custom-brand-visuals` with `file-extension="svg"`. Default off. |
| `cache-name` | Cache name used by `cache-strategy`; required when it is set and must be unique across the app's caches. |

### Limitations

- **No visible UI** — the provider only broadcasts configuration; it renders nothing itself.
- **Web cache needs HTTPS** — `cache-strategy="web-cache-api"` works only in HTTPS environments.
- **Caching is custom-brand-visuals only** — `cache-strategy` and `cache-name` apply only when `brand-visual-set="custom-brand-visuals"`; `momentum-brand-visuals` load via dynamic import and the bundler handles caching.
- **Caching does not apply to `png`** — raster visuals are loaded by the browser through an `img` element and use the regular HTTP cache instead.
- **Incomplete configuration falls back** — a `custom-brand-visuals` set without a `url` falls back to the dynamic import rather than failing, so a partially configured provider cannot break rendering.
- **One provider covers one folder** — `url` and `file-extension` select either the `svg` or the `png` folder, and the two do not overlap. A page using artwork from both needs two providers; a name served from the other folder simply fails to load, with no error. See **Content guidance**.

### Notes

Caching is opt-in and needs both attributes: a `cache-strategy` without a unique `cache-name` is ignored. On HTTPS deployments serving custom brand visuals, prefer `cache-strategy="web-cache-api"` so cached brand visuals survive a reload; `in-memory-cache` only lasts for the life of the page.

## Accessibility

### Built-in features

The brandvisualprovider renders nothing of its own; it has no role, no focusable surface, and no keyboard interaction. Accessibility for brand visuals is owned entirely by the nested `mdc-brandvisual` components — see the `mdc-brandvisual` documentation for the ARIA contract.

#### Internal ARIA managed by the component

None. The provider contributes no element to the accessibility tree.

### Implementation requirements

#### Labeling

- The provider takes no label of its own.
- Set `alt-text` on any `mdc-brandvisual` rendering a `png`, since those render an `img`. Vector visuals are `aria-hidden` and take no alt text.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-brandvisual` | The consumer this provider configures. |
| `mdc-iconprovider` | The parallel context provider for `mdc-icon`. |
| `mdc-illustrationprovider` | The parallel context provider for `mdc-illustration`. |
