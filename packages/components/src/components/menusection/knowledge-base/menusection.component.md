---
title: Menusection
summary: Usage, guidelines, and accessibility for the mdc-menusection component — a labelled grouping of menu items inside a menu or menubar.
status: draft
tier: 3
component: menusection
---

## Overview

`mdc-menusection` groups a set of menu items (`mdc-menuitem`, `mdc-menuitemcheckbox`, `mdc-menuitemradio`) under an optional visible header, optional prefix icon, and optional divider. It also enforces single-selection semantics across any `mdc-menuitemradio` children that share a `name`.

### When to use

- Use `mdc-menusection` to label and visually separate related entries inside an `mdc-menupopover` or `mdc-menubar`.
- Use it to scope a `mdc-menuitemradio` group: the section bounds the single-selection rule applied to radios with the same `name`.

### When not to use

- Do not nest `mdc-menusection` inside another `mdc-menusection`; sections are flat.
- Do not use it outside of a menu context (`mdc-menupopover`, `mdc-menubar`, `mdc-sidenavigation`).

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/menusection/index.js";
import { MenuSection } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-menupopover triggerid="settings-trigger">
  <mdc-menusection header-text="Appearance" show-divider>
    <mdc-menuitemradio label="Light" name="theme" value="light" checked></mdc-menuitemradio>
    <mdc-menuitemradio label="Dark" name="theme" value="dark"></mdc-menuitemradio>
  </mdc-menusection>

  <mdc-menusection header-text="Notifications">
    <mdc-menuitemcheckbox label="Mute" name="mute"></mdc-menuitemcheckbox>
  </mdc-menusection>
</mdc-menupopover>
```

### Property/Attribute details

- `header-text` — visible heading rendered through an internal `mdc-listheader`. When set, it is also used as the section's `aria-label` if no explicit `aria-label` is supplied.
- `aria-label` — accessible name for the group. Defaults to `header-text` when omitted.
- `prefix-icon` — icon name displayed next to the header text inside the `mdc-listheader`.
- `show-divider` — boolean. Renders an `mdc-divider` after the section content.
- `divider-variant` — `'solid' | 'gradient'`, defaults to `'solid'`. When the section is a direct child of `mdc-menubar`, the menubar overrides this to `'gradient'`.
- `hide-header-text` — internal flag used by `mdc-sidenavigation` to hide the header when the side navigation is collapsed; do not set this manually outside of that context.
- Events: `change` (forwarded from any contained `mdc-menuitemcheckbox`/`mdc-menuitemradio`), `action` (forwarded from any contained `mdc-menuitem`).

## Accessibility

### Built-in features

- Sets `role="group"` on the host so assistive technology announces the items as a labelled grouping.
- Mirrors `header-text` to `aria-label` automatically when no explicit label is provided.
- When connected inside `mdc-sidenavigation`, automatically hides the visible header text while the side navigation is collapsed; the group's `aria-label` is retained.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| host | role | `group` |
| host | aria-label | mirrors `header-text` unless an explicit `aria-label` is set |
| inner header container | aria-labelledby | references the internal header text id when `header-text` is present |
| inner slot wrapper | role | `presentation` |

### Implementation requirements

#### General

- Place `mdc-menusection` inside `mdc-menupopover`, `mdc-menubar`, or `mdc-sidenavigation` so the surrounding menu manages roving tabindex across the contained items.
- Only place menu items (`mdc-menuitem`, `mdc-menuitemcheckbox`, `mdc-menuitemradio`) in the default slot.

#### Labelling

- Provide a meaningful `header-text` whenever the grouping has a visible purpose; the component will mirror it to `aria-label` automatically.
- When the section has no visible header, set `aria-label` explicitly so the group still has an accessible name.
