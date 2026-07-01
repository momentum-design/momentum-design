---
title: Listitem
summary: Usage, guidelines, and accessibility for the mdc-listitem component — a flexible row inside an mdc-list with optional leading/trailing controls, three label slots, and keyboard activation.
tier: 3
component: listitem
---

## Overview

The listitem is a single row inside an `mdc-list`. It supports a leading control (radio, checkbox, avatar, icon), a trailing control (toggle, badge, icon), three leading text slots (primary / secondary / tertiary label), and two trailing text slots (side header, subline). The listitem is focusable, activates on click, `Enter`, or `Space` (dispatching a `click` event), and exposes life-cycle events (`enabled`, `disabled`, `created`, `destroyed`) that the surrounding list uses to track its items.

Three visual variants are available: `full-width` (default), `rectangle`, and `pill`. The `active` flag is a visual-only state that bolds the primary label; the canonical active / selected state belongs to the parent list pattern.

### When to use

- Use `mdc-listitem` as a row inside an `mdc-list`. Even a single listitem should be wrapped in `mdc-list` for screen-reader semantics.
- Use it whenever a row needs to combine an icon / avatar / control with a label and optional trailing content.

### When not to use

- Use `mdc-option` inside `mdc-listbox` / `mdc-selectlistbox` when the row represents a selectable option in a listbox pattern.
- Use `mdc-menuitem`, `mdc-menuitemcheckbox`, or `mdc-menuitemradio` inside menu patterns rather than `mdc-listitem`.
- Use `mdc-navmenuitem` when the row is a navigation entry inside `mdc-sidenavigation`.

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

Listen for `click`, `keydown`, `keyup`, and `focus` to react to user interaction; listen for `enabled` / `disabled` / `created` / `destroyed` if your code needs to mirror the list's life-cycle (e.g. when synchronising with a virtualised store).

### Content guidance

- Use `label` for the primary, scannable text; `secondary-label` for supporting context (e.g. count, status); `tertiary-label` for low-priority metadata.
- Use `side-header-text` and `subline-text` for trailing-side text that belongs to the row (e.g. a timestamp and a status line).
- Use `leading-controls` for radios, checkboxes, avatars, or icons that identify the row; use `trailing-controls` for toggles, badges, or actions that affect the row.
- When the primary label may be too long to fit, connect an `mdc-tooltip` to the listitem via the tooltip's `triggerid` attribute pointing at the listitem's `id`, and let the tooltip render the full text on hover / focus.

### Property/Attribute details

- `variant` — `full-width` (default), `rectangle`, or `pill`. Controls the row's visual treatment.
- `label`, `secondary-label`, `tertiary-label` — the three leading-side text slots. Each is also exposed as a slot (`leading-text-primary-label`, `leading-text-secondary-label`, `leading-text-tertiary-label`) for custom markup.
- `side-header-text`, `subline-text` — the two trailing-side text slots. Slot equivalents are `trailing-text-side-header` and `trailing-text-subline`.
- `disabled` — when `true`, the row is removed from the tab order, its `aria-disabled` is set to `true`, click is suppressed, and slotted controls are disabled.
- `soft-disabled` — when `true`, the row looks disabled but remains focusable so assistive technology can read it; click and keyboard actions still pass through (consumers must suppress unintended actions themselves).
- `data-index` — zero-based index used by virtualised lists. When set, the row's `aria-posinset` is updated so screen readers announce the correct position even when items are not sequentially rendered.
- `active` — visual-only state that bolds the primary label. It does not affect behaviour or accessibility; use it to highlight the current row (e.g. the selected route) when the canonical state lives elsewhere.

Slots:

- `leading-controls` — radio, checkbox, avatar, or icon at the leading edge.
- `leading-text-primary-label`, `leading-text-secondary-label`, `leading-text-tertiary-label` — override the default text rendering for each leading label.
- `trailing-text-side-header`, `trailing-text-subline` — override the default trailing text rendering.
- `trailing-controls` — toggle, badge, or action at the trailing edge.
- `content` — replaces the entire built-in layout with custom markup (use sparingly — overriding `content` discards the structured leading / trailing layout).

### Limitations

- The `active` attribute is purely visual. It does not set `aria-current` or any selected state; the surrounding pattern (e.g. a navigation list) must own the canonical "current item" semantics.
- The listitem is not form-associated. Form fields placed inside the row (checkbox, toggle, radio) handle their own form values; the row itself does not submit anything.

## Accessibility

### Built-in features

The host exposes itself with `role="listitem"` (overrideable when a parent pattern needs a different role, e.g. `role="option"` inside a listbox). The row is focusable: when the parent `mdc-list` is entered the row receives `tabindex="0"`, and the standard arrow-key navigation in the list moves focus between rows.

Activation follows the button pattern: `Enter` fires `click` on keydown; `Space` fires `click` on keyup (so holding Space does not repeatedly trigger). Activation events from inside slotted controls (a slotted toggle, a slotted button) are stopped from re-triggering the row's own click handler.

When `disabled` is set, the host's `aria-disabled` is set to `true`, the row's `tabindex` becomes `-1`, click is prevented, and any slotted controls in the leading / trailing slots are disabled too. The component dispatches a `disabled` (or `enabled`) life-cycle event so the parent list can update its item store.

When `data-index` is set, the row's `aria-posinset` is set to `data-index + 1` so virtualised lists report the correct position to screen readers.

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
- For virtualised lists, set `data-index` on every row so `aria-posinset` reflects the row's true position, not its position in the rendered window.
- When the row's primary label may truncate, connect an `mdc-tooltip` to the row via the tooltip's `triggerid` pointing at the row's `id`. Do not rely on the truncated label alone — the tooltip is the only way to surface the full text to screen-reader users.
- When using `soft-disabled`, suppress unintended click / keyboard actions in your own handlers; the row only changes visuals, it does not block activation.

#### Labelling

- Provide `label` on every listitem; without it the row has no announced name unless the consumer slots their own text into `leading-text-primary-label`.
