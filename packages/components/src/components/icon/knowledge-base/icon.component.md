---
title: Icon
summary: Usage, guidelines, and accessibility for the mdc-icon component — a dynamically loaded SVG icon reading its URL from a parent mdc-iconprovider, supporting decorative and informative roles.
tier: 3
component: icon
---

## Overview

The icon renders an SVG by name. It must be mounted inside an `mdc-iconprovider`, which supplies the source URL (or selects the `momentum-icons` package), file extension, default size, and length unit. Setting `name` triggers a fetch (or dynamic import) for that icon; on success the SVG is inlined into the component, and on failure the component renders nothing.

The size is computed from the `size` and `length-unit` attributes, with fallbacks to the values broadcast by `mdc-iconprovider`. The accessibility contract depends on whether the icon is decorative, informative, or informative-standalone — see the Accessibility section.

### When to use

- Use `mdc-icon` inside any component or layout that needs a Momentum design-system icon.
- Use it when the icon source is shared across the app — the surrounding `mdc-iconprovider` configures it once.

### When not to use

- Use `mdc-illustration` when the asset is a larger illustrative graphic rather than a simple, single-colour icon.
- Use an inline `<svg>` when the icon is a one-off graphic that does not need to be loaded through the icon provider system.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/icon/index.js"; // custom element registration
// or via React wrapper
import { Icon, IconProvider } from '@momentum-design/components/dist/react';
```

Minimal markup example (decorative icon inside a provider):

```html
<mdc-iconprovider icon-set="momentum-icons">
  <mdc-icon name="check-bold" size="1.5" length-unit="rem"></mdc-icon>
</mdc-iconprovider>
```

Informative icon (announced by screen readers):

```html
<mdc-icon name="warning-bold" aria-label="Warning"></mdc-icon>
```

Informative standalone icon (informative and not inside an interactive element — needs an accompanying tooltip):

```html
<mdc-icon
  id="info-icon"
  name="info-circle-bold"
  aria-label="More information"
  tabindex="0"
></mdc-icon>
<mdc-tooltip triggerid="info-icon">More information about this row.</mdc-tooltip>
```

Listen for the `load` event to react to a successful icon fetch and `error` to handle a failed fetch.

### Content guidance

- Pick an icon `name` that exists in the configured icon set (`momentum-icons` package, or a file in the provider's `url` directory). When the icon cannot be fetched, nothing is rendered.
- Set `size` (with `length-unit`) to match the surrounding type scale. When omitted, the size falls back to the value supplied by the provider, then to `1` (in the provider's `length-unit`).
- Decide deliberately whether the icon is decorative, informative, or informative-standalone — the right answer drives the ARIA contract (see below).

### Property/Attribute details

- `name` — the filename of the icon to load (without extension). When unset or fetch fails, nothing is rendered.
- `size` — numeric size; combined with `length-unit` it produces the rendered dimensions (e.g. `size="1.5"` + `length-unit="rem"` → `1.5rem` square). Falls back to the provider's `size`, then to the provider's `DEFAULTS.SIZE`.
- `length-unit` — CSS length unit (`em`, `rem`, `px`, etc.) used together with `size`. Falls back to the provider's `length-unit`.
- `aria-label` — accessible name for informative icons. When set (or `aria-labelledby` is set), the host receives `role="img"`. When unset, `role` is removed.
- `aria-labelledby` — id of an element that labels the icon. Same effect on `role` as `aria-label`.

## Accessibility

### Built-in features

The component handles three accessibility modes, selected by what the consumer sets on it:

- **Decorative**: no `aria-label` and no `aria-labelledby`. The host has no `role`, and the inlined `<svg>` is set to `aria-hidden="true"` so screen readers skip it entirely.
- **Informative**: `aria-label` (or `aria-labelledby`) is set. The host receives `role="img"` and the configured accessible name is announced. The inlined `<svg>` remains `aria-hidden="true"` so the SVG's internal contents do not duplicate the announcement.
- **Informative standalone**: informative as above, plus the consumer must set `tabindex="0"` and connect an `mdc-tooltip` via `triggerid` pointing at the icon's `id`. This case applies only when an informative icon is **not** inside an interactive element (button, link) that already provides hover/focus context.

The component does not own keyboard handling. Standalone icons rely on the consumer's `tabindex="0"` and the connected tooltip's own keyboard handling.

#### Internal ARIA managed by the component

| Element       | Attribute     | Value                                                                       |
| ------------- | ------------- | --------------------------------------------------------------------------- |
| Host          | `role`        | `img` when `aria-label` or `aria-labelledby` is set, otherwise removed      |
| Host          | `aria-label`  | mirrors `aria-label` when set                                               |
| Host          | `aria-labelledby` | mirrors `aria-labelledby` when set                                      |
| Inlined SVG   | `aria-hidden` | `true` (the SVG content is never announced; the host's `aria-label` is)     |
| Inlined SVG   | `data-name`   | mirrors the icon `name`, used for styling/automation                        |
| Inlined SVG   | `part`        | `icon`                                                                      |

### Implementation requirements

#### General

- Mount every `mdc-icon` inside an `mdc-iconprovider`; outside of one the fetch fails and the component renders nothing.
- Decide the accessibility mode based on the surrounding context: an icon inside an `mdc-button` is decorative (the button has the accessible name); an icon-only button uses an `aria-label` on the **button**, not on the icon.

#### Labelling

- Leave `aria-label`/`aria-labelledby` unset for decorative icons — the SVG is already hidden from screen readers.
- For informative icons, provide a meaningful `aria-label` (or `aria-labelledby`) that describes what the icon conveys.
- For informative standalone icons, also set `tabindex="0"` and anchor an `mdc-tooltip` via the tooltip's `triggerid` pointing at the icon's `id`, so the meaning is also visible to sighted users.
