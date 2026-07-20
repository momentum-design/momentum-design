---
title: Listheader
summary: Usage, guidelines, and accessibility for the mdc-listheader component — a non-interactive header row for an mdc-list, with optional prefix and postfix icons and a default slot for actionable elements.
tier: 3
component: listheader
---

## Overview

`mdc-listheader` is a non-interactive header row for an `mdc-list`, placed in the list's `list-header` slot to label the list or a section within it. It can carry a leading icon and trailing actions, but the header itself is not interactive — any interactivity comes from elements slotted into it.

### When to use

- Use `mdc-listheader` in the `list-header` slot of an `mdc-list` to label the list with a heading, an optional leading icon, and optional trailing actions.
- Use `mdc-listheader` to introduce a section within a longer list, paired with an `mdc-divider` between sections.

### When not to use

- Do not use `mdc-listheader` as a row in the list body. Use `mdc-listitem` in the default slot instead.
- Do not use `mdc-listheader` when the list needs no leading icon, trailing icon, or trailing action. Use a plain section heading instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/listheader/index.js"; // custom element registration
// or via React wrapper
import { List, Listheader, ListItem } from '@momentum-design/components/dist/react';
```

Minimal markup example (text-only header):

```html
<mdc-list>
  <mdc-listheader slot="list-header" header-text="Recent files"></mdc-listheader>
  <mdc-listitem label="report.pdf"></mdc-listitem>
  <mdc-listitem label="notes.md"></mdc-listitem>
</mdc-list>
```

Header with a leading folder icon and a trailing "see all" link:

```html
<mdc-listheader
  slot="list-header"
  prefix-icon="folder-bold"
  header-text="Shared with me"
>
  <mdc-link href="/files/shared">See all</mdc-link>
</mdc-listheader>
```

### Content guidance

- Keep `header-text` short and noun-style — it labels the list section, it is not an action or a sentence.
- Keep header casing consistent across the sections of one list so the headers read as a set.

### Property/Attribute details

| Option | Intent |
|---|---|
| `header-text` | The label shown in the header (unset by default, so nothing renders). Set it to name the list or section. |
| `prefix-icon` | Optional leading icon. Use it to reinforce the section's meaning (a folder icon for a folder section, a star for favorites); leave it unset when text alone is clearer. |
| `postfix-icon` | Optional icon at the trailing end after the slot. Use it sparingly for a trailing status glyph; leave it unset to align slotted actions to the end. |
| `disabled` | Visually styles the header as disabled. Use when the whole section is unavailable — but disable any slotted actions separately (see Limitations). |

### Limitations

- **Disabled is visual only** — `disabled` styles the header but does not propagate to slotted actions; set `disabled` on the slotted `mdc-button`/`mdc-link` yourself.
- **Header slot only** — the component is built for the `list-header` slot; it is not a list row. Use `mdc-listitem` in the default slot for body content.

## Accessibility

### Built-in features

The header text and its accompanying icons are rendered with `aria-hidden="true"` on the inner `mdc-text` and `mdc-icon` elements so the listheader does not produce duplicate announcements when the list is read by a screen reader. The header is a presentational decoration on the list — accessibility for the list itself (`role="list"`, item count, item navigation) is owned by `mdc-list`.

Slotted actionable elements (links, buttons) keep their own accessibility semantics — they are focusable and announced like any other interactive element in the page.

#### Internal ARIA managed by the component

| Element                | Attribute     | Value      |
| ---------------------- | ------------- | ---------- |
| Prefix icon            | `aria-hidden` | `true`     |
| Postfix icon           | `aria-hidden` | `true`     |
| Header text `mdc-text` | `aria-hidden` | `true`     |

### Implementation requirements

#### Labeling

- Use the `header-text` attribute (rather than slotting plain text) so the header picks up the right typography and `aria-hidden` treatment.
- For trailing actions, slot a control with its own accessible name (e.g. `<mdc-link>See all</mdc-link>`) so the action is announced when focused.

## Related components

| Component | Relationship |
|---|---|
| `mdc-list` | Container whose `list-header` slot holds this header. |
| `mdc-listitem` | Row for the list body, distinct from this header. |
| `mdc-divider` | Separates sections when a list has more than one headed group. |
| `mdc-menusection` | Equivalent labeled grouping inside menus. |
| `mdc-virtualizedlist` | Also accepts a header in its `list-header` slot. |
