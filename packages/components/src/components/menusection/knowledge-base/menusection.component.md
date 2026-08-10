---
title: Menusection
summary: Usage, guidelines, and accessibility for the mdc-menusection component — a labeled grouping of menu items inside a menu or menubar.
tier: 3
component: menusection
---

## Overview

`mdc-menusection` groups related menu items under a labeled header inside a menu or menubar, so longer menus stay scannable. It also scopes single-selection for any `mdc-menuitemradio` children that share a `name`.

### When to use

- Use `mdc-menusection` to label and visually separate related entries inside an `mdc-menupopover` or `mdc-menubar`.
- Use it to scope a `mdc-menuitemradio` group: the section bounds the single-selection rule applied to radios with the same `name`.

### When not to use

- Do not nest `mdc-menusection` inside another `mdc-menusection`. Use a single flat set of sections instead.
- Do not use `mdc-menusection` outside a menu context. Use `mdc-optgroup` to group options inside `mdc-listbox`/`mdc-select` instead.

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

### Content guidance

- Write `header-text` as a short noun phrase that names what the group contains ("Appearance", "Notifications"), not a sentence or an instruction.
- Keep headers in title or sentence case consistently across the sections in one menu.

### Property/Attribute details

| Option | Intent |
|---|---|
| `header-text` | Visible group heading (via `mdc-listheader`). Set it whenever the grouping has a visible purpose; it also becomes the group's `aria-label` when no explicit label is given. |
| `aria-label` | Accessible name for the group. Set it only when the section has no visible `header-text`; otherwise `header-text` supplies it. |
| `prefix-icon` | Optional icon beside the header text. Use it to reinforce the group's meaning, not for decoration. |
| `show-divider` | Renders an `mdc-divider` after the section. Use it to separate a section from the one below when the header alone is not enough. |
| `divider-variant="solid"` (default) | Divider style; leave at `solid`. A section directly inside `mdc-menubar` is forced to `gradient`, so do not set it there. |

**Note:** `hide-header-text` is an internal flag driven by `mdc-sidenavigation` to hide the header when the nav is collapsed — do not set it manually. The component forwards `change` (from contained checkbox/radio items) and `action` (from contained menu items).

### Limitations

- **No nesting** — sections are flat; a section cannot contain another section. Use one level of sections per menu.
- **Menu context only** — outside `mdc-menupopover`, `mdc-menubar`, or `mdc-sidenavigation` the roving-tabindex and grouping semantics do not apply. Use `mdc-optgroup` for listbox grouping.
- **Header is non-interactive** — the header has no hover/press/focus behavior and cannot act as a trigger or selectable row; when every item in the section is disabled, disable the section context so the header does not read as available.
- **Items only in the default slot** — place only `mdc-menuitem`, `mdc-menuitemcheckbox`, or `mdc-menuitemradio` inside; other content is not managed by the surrounding menu.

## Accessibility

### Built-in features

- Sets `role="group"` on the host so assistive technology announces the items as a labeled grouping.
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

#### Labeling

- Provide a meaningful `header-text` whenever the grouping has a visible purpose; the component will mirror it to `aria-label` automatically.
- When the section has no visible header, set `aria-label` explicitly so the group still has an accessible name.

## Related components

| Component | Relationship |
|---|---|
| `mdc-menuitem` | Action entry placed inside the section. |
| `mdc-menuitemcheckbox` | Checkable entry grouped inside the section. |
| `mdc-menuitemradio` | Single-select entry whose group is scoped by the section. |
| `mdc-menupopover` | Floating menu surface that hosts sections. |
| `mdc-menubar` | Persistent menu container that hosts sections with a gradient divider. |
| `mdc-optgroup` | Equivalent grouping for options inside `mdc-listbox`/`mdc-select`. |
