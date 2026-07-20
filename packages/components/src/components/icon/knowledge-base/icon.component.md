---
title: Icon
summary: Usage, guidelines, and accessibility for the mdc-icon component — a dynamically loaded SVG icon reading its source from a parent mdc-iconprovider, supporting decorative and informative roles.
tier: 3
component: icon
---

## Overview

The icon renders a single Momentum design-system glyph by name. It resolves its source and default sizing from a surrounding `mdc-iconprovider`, so a whole subtree shares one icon configuration, and it can be either decorative or carry an accessible name depending on how it is used.

### When to use

- Use `mdc-icon` inside any component or layout that needs a Momentum design-system icon.
- Use `mdc-icon` when the icon source is shared across the app and configured once by the surrounding `mdc-iconprovider`.

### When not to use

- Do not use `mdc-icon` for a larger illustrative graphic. Use `mdc-illustration` instead.
- Do not use `mdc-icon` for brand logos or wordmarks. Use `mdc-brandvisual` instead.
- Do not use `mdc-icon` for a one-off graphic that should not load through the provider system. Use an inline `<svg>` instead.

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

### Composition

- Mount `mdc-icon` inside an `mdc-iconprovider`; outside of one it cannot resolve its source and renders nothing.
- For an informative standalone icon (informative and not inside an interactive element), pair it with an `mdc-tooltip` via the tooltip's `triggerid` and make the icon focusable so its meaning is also available to sighted users.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `name` | Filename of the icon to load (without extension). When unset or the fetch fails, nothing renders. |
| `size` | Numeric size combined with `length-unit` (e.g. `size="1.5"` + `length-unit="rem"` → a 1.5rem square). Falls back to the provider's `size`, then to `1`. Match it to the surrounding type scale. |
| `length-unit` | CSS length unit paired with `size` (`em`, `rem`, `px`, `%`). Falls back to the provider's `length-unit`. |
| `aria-label` / `aria-labelledby` | Accessible name for an informative icon; setting either gives the host `role="img"`. Leave both unset for decorative icons. |

### Limitations

- **Provider required** — outside an `mdc-iconprovider` the icon cannot resolve its source and renders nothing.
- **SVG only** — the component fetches and inlines SVG assets; other formats are not supported.
- **Silent on failure** — a missing or failed `name` renders nothing rather than a fallback; listen to `error` to react.
- **No built-in keyboard behavior** — a standalone informative icon depends on the consumer's `tabindex` and a connected `mdc-tooltip`.

## Accessibility

### Built-in features

The component handles three accessibility modes, selected by what the consumer sets on it:

- **Decorative**: no `aria-label` and no `aria-labelledby`. The host has no `role`, and the inlined `<svg>` is set to `aria-hidden="true"` so screen readers skip it entirely.
- **Informative**: `aria-label` (or `aria-labelledby`) is set. The host receives `role="img"` and the configured accessible name is announced. The inlined `<svg>` remains `aria-hidden="true"` so its internal contents do not duplicate the announcement.
- **Informative standalone**: informative as above, plus the consumer sets `tabindex="0"` and connects an `mdc-tooltip` via `triggerid`. This case applies only when an informative icon is **not** inside an interactive element (button, link) that already provides hover/focus context.

The component does not own keyboard handling. Standalone icons rely on the consumer's `tabindex="0"` and the connected tooltip's own keyboard handling.

#### Internal ARIA managed by the component

| Element     | Attribute         | Value                                                                  |
| ----------- | ----------------- | ---------------------------------------------------------------------- |
| Host        | `role`            | `img` when `aria-label` or `aria-labelledby` is set, otherwise removed |
| Host        | `aria-label`      | mirrors `aria-label` when set                                          |
| Host        | `aria-labelledby` | mirrors `aria-labelledby` when set                                     |
| Inlined SVG | `aria-hidden`     | `true` (the SVG content is never announced; the host's name is)        |
| Inlined SVG | `data-name`       | mirrors the icon `name`, used for styling/automation                   |
| Inlined SVG | `part`            | `icon`                                                                 |

### Implementation requirements

#### General

- Mount every `mdc-icon` inside an `mdc-iconprovider`; outside one the fetch fails and the component renders nothing.
- Decide the accessibility mode from context: an icon inside an `mdc-button` is decorative (the button owns the name); an icon-only button carries `aria-label` on the **button**, not on the icon.

#### Labeling

- Leave `aria-label`/`aria-labelledby` unset for decorative icons — the SVG is already hidden from screen readers.
- For informative icons, provide a meaningful `aria-label` (or `aria-labelledby`) describing what the icon conveys.
- For informative standalone icons, also set `tabindex="0"` and anchor an `mdc-tooltip` via `triggerid` so the meaning is visible to sighted users too.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-iconprovider` | Required ancestor that configures the icon source and default sizing. |
| `mdc-illustration` | For larger illustrative graphics rather than single glyphs. |
| `mdc-brandvisual` | For brand logos and wordmarks. |
| `mdc-tooltip` | Pairs with an informative standalone icon to surface its meaning visually. |
