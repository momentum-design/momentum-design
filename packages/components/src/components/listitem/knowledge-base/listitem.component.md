---
title: Listitem
summary: Usage, guidelines, and accessibility for the mdc-listitem component — a flexible row inside an mdc-list with optional leading/trailing controls, three label slots, and keyboard activation.
tier: 3
component: listitem
---

## Overview

`mdc-listitem` is the row primitive for an `mdc-list` — a single focusable entry that presents one piece of repeated content and lets the user act on it. The parent `mdc-list` manages navigation between rows, so each item only has to represent its own content and behavior.

### When to use

- Use `mdc-listitem` as a row inside an `mdc-list`, even when there is only one row, so screen readers announce the list semantics.
- Use `mdc-listitem` when a row needs to combine an icon, avatar, or control with a label and optional trailing content.

### When not to use

- Do not use `mdc-listitem` for a selectable option in a listbox. Use `mdc-option` inside `mdc-listbox`/`mdc-selectlistbox` instead.
- Do not use `mdc-listitem` inside menu patterns. Use `mdc-menuitem`, `mdc-menuitemcheckbox`, or `mdc-menuitemradio` instead.
- Do not use `mdc-listitem` for a navigation entry in `mdc-sidenavigation`. Use `mdc-navmenuitem` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/listitem/index.js"; // custom element registration
// or via React wrapper
import { List, ListItem } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-list>
  <mdc-listitem label="Inbox" secondary-label="42 unread"></mdc-listitem>
  <mdc-listitem label="Drafts" secondary-label="3"></mdc-listitem>
</mdc-list>
```

Listitem with a leading avatar, primary/secondary labels, side-header text, and a trailing toggle:

```html
<mdc-listitem label="Alex Kim" secondary-label="alex@example.com" side-header-text="Online">
  <mdc-avatar slot="leading-controls" initials="AK" size="32"></mdc-avatar>
  <mdc-toggle slot="trailing-controls" checked></mdc-toggle>
</mdc-listitem>
```

Long-text listitem with an attached tooltip (rendered as a sibling, not a wrapper):

```html
<mdc-listitem id="long-row" label="A very long file name that may not fit"></mdc-listitem>
<mdc-tooltip triggerid="long-row">A very long file name that may not fit</mdc-tooltip>
```

Listen for `click`, `keydown`, `keyup`, and `focus` to react to user interaction; listen for `enabled` / `disabled` / `created` / `destroyed` if your code needs to mirror the list's life-cycle (e.g. when synchronizing with a virtualized store).

### Content guidance

- Keep `label` short and scannable — it is the primary text a user reads to identify the row.
- Use `secondary-label` for supporting context (a count or status) and `tertiary-label` for low-priority metadata; never use a secondary or tertiary label without a primary `label`.
- Keep trailing text (`side-header-text`, `subline-text`) supplementary — a timestamp, count, or status — not a substitute for the primary label.
- Keep rows in one list consistent: use the same combination of leading and trailing content across items rather than mixing layouts row to row.

### Property/Attribute details

| Option | Intent |
|---|---|
| `variant="full-width"` (default) | Sets the row's shape. Use `full-width` (no border radius) in large content areas that span the container; use `rectangle` (inset, 8px radius) inside a container such as a menu or card; `pill` is the fully rounded treatment for compact, chip-like rows. |
| `label` / `secondary-label` / `tertiary-label` | The three leading text lines. Set `label` at minimum; add the others only for supporting context (see Content guidance). Each also has a slot (`leading-text-*-label`) for custom markup. |
| `side-header-text` / `subline-text` | The two trailing text lines (slots `trailing-text-side-header` / `trailing-text-subline`). Use for supplementary trailing content such as a timestamp and status. |
| `disabled` | Removes the row from the tab order, sets `aria-disabled`, suppresses click, and disables slotted controls. Use for a row that is currently unavailable. |
| `soft-disabled` | Looks disabled but stays focusable so assistive tech can still read it; you must suppress unintended actions in your own handlers. Use when the row must remain announceable. |
| `active` | Visual-only state that bolds the primary label. Use to highlight the current row when the canonical selected/current state lives on the surrounding pattern (see Limitations). |
| `data-index` | Zero-based dataset index used by virtualized lists; drives `aria-posinset` so the position is announced correctly even when rows are windowed. |

Slots follow the same leading/trailing structure: put a radio, checkbox, avatar, or icon in `leading-controls`; put a toggle, badge, or action button in `trailing-controls`. Overriding the `content` slot replaces the entire built-in layout, so use it sparingly.

### Limitations

- **Active is visual only** — `active` bolds the label but sets no `aria-current` or selected state; the surrounding pattern must own the canonical "current item" semantics.
- **Not form-associated** — controls inside the row (checkbox, toggle, radio) own their own form values; the row itself submits nothing.
- **Leading icon is not a checkmark** — do not put a selection checkmark in the leading icon slot; show selection with a trailing check and, when the label bolds on selection, use the filled icon variant.
- **Controls have a fixed side** — place checkboxes and radios in `leading-controls` and toggles in `trailing-controls`; do not swap sides.

## Accessibility

### Built-in features

The host exposes itself with `role="listitem"` (overrideable when a parent pattern needs a different role, e.g. `role="option"` inside a listbox). The row is focusable: when the parent `mdc-list` is entered the row receives `tabindex="0"`, and the standard arrow-key navigation in the list moves focus between rows.

Activation follows the button pattern: `Enter` fires `click` on keydown; `Space` fires `click` on keyup (so holding Space does not repeatedly trigger). Activation events from inside slotted controls (a slotted toggle, a slotted button) are stopped from re-triggering the row's own click handler.

When `disabled` is set, the host's `aria-disabled` is set to `true`, the row's `tabindex` becomes `-1`, click is prevented, and any slotted controls in the leading / trailing slots are disabled too. The component dispatches a `disabled` (or `enabled`) life-cycle event so the parent list can update its item store.

When `data-index` is set, the row's `aria-posinset` is set to `data-index + 1` so virtualized lists report the correct position to screen readers.

#### Internal ARIA managed by the component

| Element       | Attribute       | Value                                                              |
| ------------- | --------------- | ------------------------------------------------------------------ |
| Host          | `role`          | `listitem` (defaults; overrideable by the parent pattern)          |
| Host          | `aria-disabled` | `true` when `disabled`, otherwise `false`                          |
| Host          | `aria-posinset` | `data-index + 1` when `data-index` is set, otherwise removed       |
| Host          | `tabindex`      | `-1` when `disabled`, otherwise managed by the parent list         |

### Implementation requirements

#### General

- Always wrap listitems in `mdc-list` so screen readers announce the list semantics, even when there is only one row.
- For virtualized lists, set `data-index` on every row so `aria-posinset` reflects the row's true position, not its position in the rendered window.
- When the row's primary label may truncate, connect an `mdc-tooltip` to the row via the tooltip's `triggerid` pointing at the row's `id`. Do not rely on the truncated label alone — the tooltip is the only way to surface the full text to screen-reader users.
- When using `soft-disabled`, suppress unintended click / keyboard actions in your own handlers; the row only changes visuals, it does not block activation.

#### Labeling

- Provide `label` on every listitem; without it the row has no announced name unless the consumer slots their own text into `leading-text-primary-label`.

## Related components

| Component | Relationship |
|---|---|
| `mdc-list` | Container that wraps and navigates these rows. |
| `mdc-listheader` | Non-interactive header for a list or a section of rows. |
| `mdc-virtualizedlist` | Renders these rows in a windowed list for very large data sets. |
| `mdc-option` | Selectable-option equivalent inside `mdc-listbox`/`mdc-selectlistbox`. |
| `mdc-menuitem` | Actionable row equivalent inside menu patterns. |
| `mdc-navmenuitem` | Navigation-entry equivalent inside `mdc-sidenavigation`. |
