---
title: List
summary: Usage, guidelines, and accessibility for the mdc-list component — a keyboard-navigable container grouping mdc-listitem elements with an optional header slot and configurable orientation.
tier: 3
component: list
---

## Overview

The list is a container that groups `mdc-listitem` children and provides shared keyboard navigation across them. Listitems are placed in the default slot; an optional `mdc-listheader` can be placed in the `list-header` slot. The list manages roving tabindex across items so the keyboard user only enters the list once, then moves between items with arrow keys.

The list's orientation (`vertical` or `horizontal`) selects whether arrow Up/Down or Left/Right navigate; looping (`loop="true"` / `loop="false"`) chooses whether navigation wraps at the ends; `initial-focus` selects which item receives focus when the list is entered for the first time.

### When to use

- Use `mdc-list` to display a related group of `mdc-listitem` elements (selection lists, navigation lists, settings lists) that should share keyboard navigation.
- Use it whenever a list of two or more listitems is rendered — even a single listitem should be wrapped in `mdc-list` for screen-reader semantics.

### When not to use

- Use `mdc-listbox` for a list of selectable options that participate in single- or multi-select selection semantics (the listbox uses `role="listbox"` and `mdc-option` children rather than `mdc-listitem`).
- Use `mdc-menubar` / `mdc-menupopover` for application menus.
- Use `mdc-virtualizedlist` for very large lists where DOM virtualisation is needed.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/list/index.js"; // custom element registration
// or via React wrapper
import { List, ListItem, Listheader } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-list>
  <mdc-listheader slot="list-header" header-text="Recent files"></mdc-listheader>
  <mdc-listitem label="report.pdf"></mdc-listitem>
  <mdc-listitem label="notes.md"></mdc-listitem>
  <mdc-listitem label="design.fig"></mdc-listitem>
</mdc-list>
```

Horizontal list without wrap-around navigation:

```html
<mdc-list orientation="horizontal" loop="false">
  <mdc-listitem label="Tab 1"></mdc-listitem>
  <mdc-listitem label="Tab 2"></mdc-listitem>
  <mdc-listitem label="Tab 3"></mdc-listitem>
</mdc-list>
```

### Content guidance

- Place `mdc-listitem` children in the default slot; use the `list-header` slot for `mdc-listheader`.
- Use the `vertical` orientation for column-style lists (the default) and `horizontal` only when listitems flow side-by-side and the surrounding layout truly reads left-to-right.
- Set `loop="false"` when the ends of the list matter to the user (e.g. when item position implies progress); leave the default `loop="true"` for menus / navigation lists where wrapping feels natural.

### Property/Attribute details

- `loop` — `"true"` (default) wraps navigation at both ends; `"false"` stops at the first / last item.
- `initial-focus` — zero-based index of the item that receives focus the first time the list is entered. Out-of-bounds values clamp to the nearest valid index. Default `0`.
- `orientation` — `vertical` (default; Up/Down arrows navigate) or `horizontal` (Left/Right arrows navigate). Also drives the Flexbox direction.

### Limitations

- The list only manages listitems that match `mdc-listitem:not([disabled])`. Items with the `disabled` attribute are skipped by keyboard navigation but remain in the DOM.
- The list does not own selection state — selection is a property of the individual listitem (or of the surrounding pattern such as a checkbox group). The list's job is grouping and navigation, not single-/multi-select semantics.

## Accessibility

### Built-in features

The host exposes itself with `role="list"` so screen readers announce the group. Keyboard navigation is managed by the list: pressing the arrow key matching the orientation moves focus between listitems with a roving tabindex (only the focused item has `tabindex="0"`, the others have `tabindex="-1"`). `Home` and `End` jump to the first / last item; `Space` is intercepted at the list level when it targets a listitem so the page does not scroll. When `loop="true"`, navigation wraps at both ends; when `loop="false"`, it stops at the first / last item.

When a listitem is added or removed (via the element-store life-cycle hooks), the list re-computes the focusable item — the first item gets `tabindex="0"` on initial population, and removing the currently focused item moves focus to the next valid sibling.

#### Internal ARIA managed by the component

| Element       | Attribute     | Value                                                       |
| ------------- | ------------- | ----------------------------------------------------------- |
| Host          | `role`        | `list`                                                      |
| Container slot| `role`        | `presentation` (so the wrapper does not break the a11y tree)|
| Each listitem | `tabindex`    | `0` for the currently focused item, `-1` for the rest       |

### Implementation requirements

#### General

- Always wrap `mdc-listitem` children in `mdc-list`, even when there is only one item, so screen readers announce the list semantics.
- Use `mdc-listheader` (in the `list-header` slot) for any visible heading that introduces the list, instead of rendering plain text above it.
- Match `orientation` to the visual flow of the list; mismatched orientation makes arrow-key navigation feel broken.
