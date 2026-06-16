---
title: Listheader
summary: Usage, guidelines, and accessibility for the mdc-listheader component — a non-interactive header row for an mdc-list, with optional prefix and postfix icons and a default slot for actionable elements.
status: draft
tier: 3
component: listheader
---

## Overview

The listheader is a header row rendered above the items of an `mdc-list` (via the list's `list-header` slot). It displays optional prefix and postfix icons and a header text, plus a default slot for actionable content (buttons, links) aligned to the trailing end. The header itself is not interactive — interactivity comes only from elements placed in the slot.

### When to use

- Use `mdc-listheader` (in the `list-header` slot of an `mdc-list`) to label a list with a heading, an optional leading icon, and optional trailing actions.

### When not to use

- Do not use `mdc-listheader` as an item inside the list's default slot — it is designed for the `list-header` slot only.
- Use a plain section title outside the list when no leading icon, trailing icon, or trailing action is needed.

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

- Keep `header-text` short and noun-style — it labels the list section, it is not an action.
- Use the default slot for trailing actionable elements (e.g. an `mdc-link`, `mdc-button`, or `mdc-icon` rendered as a control); plain decorative text in the slot is not announced as part of the header.
- Use `prefix-icon` to reinforce the section's meaning visually (folder icon for a folder section, star icon for favourites); leave it unset when text alone is clearer.

### Property/Attribute details

- `header-text` — the text displayed in the header. Default unset (header text is not rendered).
- `prefix-icon` — name of an icon rendered before the header text. Default unset; when unset, the text is aligned to the start.
- `postfix-icon` — name of an icon rendered at the trailing end after the slot. Default unset; when unset, slot content is aligned to the end.
- `disabled` — when `true`, the header is visually styled as disabled. Default `false`.

### Limitations

- The `disabled` flag only changes the visual style of the header itself — it does not propagate to elements inside the default slot. Disable any actionable slotted elements explicitly (e.g. set `disabled` on the slotted `mdc-button` / `mdc-link`).

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

#### Labelling

- Use the `header-text` attribute (rather than slotting plain text) so the header picks up the right typography and `aria-hidden` treatment.
- For trailing actions, slot a control with its own accessible name (e.g. `<mdc-link>See all</mdc-link>`) so the action is announced when focused.
