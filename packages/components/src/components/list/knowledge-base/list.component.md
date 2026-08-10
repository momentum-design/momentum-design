---
title: List
summary: Usage, guidelines, and accessibility for the mdc-list component — a keyboard-navigable container grouping mdc-listitem elements with an optional header slot and configurable orientation.
tier: 3
component: list
---

## Overview

`mdc-list` is a container that groups `mdc-listitem` children and gives them shared keyboard navigation through a roving tabindex, so the keyboard user enters the list once and then moves between items with arrow keys. It owns grouping and navigation only — selection state lives on the individual items or the surrounding pattern.

### When to use

- Use `mdc-list` to display a related group of `mdc-listitem` elements (navigation lists, settings lists, content rows) that should share keyboard navigation.
- Use `mdc-list` to wrap `mdc-listitem` elements even when there is only one, so screen readers announce the list semantics.

### When not to use

- Do not use `mdc-list` for a set of selectable options with single- or multi-select semantics. Use `mdc-listbox` with `mdc-option` instead.
- Do not use `mdc-list` for application menus. Use `mdc-menubar` or `mdc-menupopover` instead.
- Do not use `mdc-list` for very large or unbounded data sets where mounting every row is expensive. Use `mdc-virtualizedlist` instead.

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

### Property/Attribute details

| Option | Intent |
|---|---|
| `orientation="vertical"` (default) | Sets which arrow keys navigate (Up/Down for `vertical`, Left/Right for `horizontal`) and the flex direction. Use `horizontal` only when items genuinely flow side by side and the layout reads left to right. |
| `loop="true"` (default) | Whether arrow navigation wraps at the ends. Keep `true` for menus and navigation lists where wrapping feels natural; set `false` when item position implies order or progress and the ends should stop. |
| `initial-focus="0"` (default) | Zero-based index of the item focused the first time the list is entered; out-of-bounds values clamp to the nearest valid index. Set it when the most useful starting row is not the first. |

### Limitations

- **Grouping and navigation only** — the list does not own selection; single-/multi-select state lives on the items or the surrounding pattern (such as a checkbox group).
- **Disabled items are skipped** — navigation only visits `mdc-listitem:not([disabled])`; disabled items stay in the DOM but are unreachable by arrow keys.
- **One list role** — the host is always `role="list"`; for selectable-option semantics use `mdc-listbox`, and for menu semantics use `mdc-menupopover`.

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

#### Labeling

- Give the list an accessible name: use an `mdc-listheader` in the `list-header` slot for a visible heading, or set `aria-label` on the `mdc-list` when there is no visible header.

## Related components

| Component | Relationship |
|---|---|
| `mdc-listitem` | The row placed in the list's default slot. |
| `mdc-listheader` | Non-interactive header for the list's `list-header` slot. |
| `mdc-virtualizedlist` | Windowed alternative for very large or unbounded data sets. |
| `mdc-listbox` | Selectable-option container with `role="listbox"` and `mdc-option` children. |
| `mdc-menupopover` / `mdc-menubar` | Menu containers for application menus rather than content lists. |
