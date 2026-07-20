---
title: Menuitem
summary: Usage, guidelines, and accessibility for the mdc-menuitem component — an actionable item inside a menubar or menu popover with leading/trailing controls and an optional arrow indicator.
tier: 3
component: menuitem
---

## Overview

`mdc-menuitem` is the actionable entry inside a `mdc-menubar` or `mdc-menupopover`. It represents an individual command in a menu, including items that open a submenu.

### When to use

- Use `mdc-menuitem` for the individual entries inside a menubar or menu popover that perform an action or open a submenu.
- Use `mdc-menuitem` as the trigger that opens a nested `mdc-menupopover` submenu.

### When not to use

- Do not use `mdc-menuitem` for a toggleable on/off state. Use `mdc-menuitemcheckbox` or `mdc-menuitemradio` instead.
- Do not use `mdc-menuitem` in a selection list where the user picks a value to submit. Use `mdc-option` inside `mdc-listbox`/`mdc-select` instead.
- Do not use `mdc-menuitem` as a stand-alone clickable row outside a menu context. Use `mdc-listitem` for generic lists instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/menuitem/index.js";
import { MenuItem } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-menuitem
  label="Open"
  name="file-action"
  value="open"
></mdc-menuitem>

<mdc-menuitem id="share-menu" label="Share" arrow-position="trailing"></mdc-menuitem>
<mdc-menupopover triggerid="share-menu">...</mdc-menupopover>
```

Always place `mdc-menuitem` inside an ancestor element with `role="menu"` or `role="menubar"` (typically `mdc-menupopover` or `mdc-menubar`), even when there is only a single item, so assistive technology announces it correctly.

### Content guidance

- Keep the `label` short and action-led — verb-first for commands ("Rename", "Duplicate"); use `secondary-label`/`tertiary-label` only for genuine supporting detail, not to restate the label.
- Keep labels parallel across a menu — the same voice and grammatical form (all verbs, or all nouns) so the set reads as one list.
- Keep trailing metadata terse — a keyboard shortcut, a short status word, or a count, not a sentence.
- Prefer labels short enough not to truncate; menu items do not add an overflow tooltip on their own (see Limitations).

### Property/Attribute details

| Option | Intent |
|---|---|
| `label` + `secondary-label` / `tertiary-label` | Leading-side text. Use `label` for the action; add secondary/tertiary lines only for genuine supporting detail. Slot `leading-text-*` instead when you need custom markup. |
| `side-header-text` / `subline-text` | Trailing-side text for metadata such as shortcuts or status. Slot `trailing-text-*` for custom markup. |
| `name` / `value` | Identify the item when a selection is reported; most useful on the checkbox/radio variants but available on every item. |
| `arrow-position="trailing"` | Renders a submenu arrow on the leading or trailing side. Set `trailing` on items that open a nested `mdc-menupopover`; omit it for plain actions. |
| `arrow-direction="positive"` (default) | Flips which way the arrow points; keep the default unless an RTL or mirrored layout needs `negative`. |
| `disabled` | Fully disables the item and removes it from keyboard navigation. Use for actions that are unavailable and should not be reachable. |
| `soft-disabled` | Looks disabled but stays focusable so users can discover why it is unavailable; you must prevent it from triggering unintended actions. |
| `active` | Visual-only active styling; does not move focus or change ARIA. Use for highlighting, not for selection state. |
| `data-index` | Zero-based index for virtualized menus; mirrored to `aria-posinset` so position is announced correctly. |

**Note:** the component emits `click`, `keydown`, `keyup`, `focus`, `enabled`, `disabled`, `created`, and `destroyed` events.

### Limitations

- **No built-in submenu** — `arrow-position` only draws the arrow; opening a submenu requires a sibling `mdc-menupopover` whose `triggerid` matches the item's `id`.
- **No toggle state** — the item has no checked/selected semantics. Use `mdc-menuitemcheckbox` or `mdc-menuitemradio` when state must be conveyed.
- **Needs a menu ancestor** — outside an element with `role="menu"`/`role="menubar"`, roving focus and arrow-key navigation do not apply. Place it in `mdc-menupopover` or `mdc-menubar`.
- **Tooltip isn't automatic** — truncated labels do not get a tooltip on their own; wire an `mdc-tooltip` to the item's `id` to expose the full text.

## Accessibility

### Built-in features

- Sets `role="menuitem"` on the host and adopts the inset-rectangle list-item visual variant.
- `Enter` triggers a synthetic click on `keydown` (matching native behavior); `Space` triggers the click on `keyup` and prevents page scroll.
- When `disabled` is set, the host becomes `tabindex="-1"`, `aria-disabled="true"`, and click/keyboard events are stopped before reaching consumers.
- Any controls slotted into `leading-controls`/`trailing-controls` have their `disabled` attribute mirrored from the host while the menu item is `disabled` or `soft-disabled`.
- `data-index` is reflected to `aria-posinset` so virtualized usages announce correct position.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| host | role | `menuitem` |
| host | tabindex | `0` when active, `-1` when disabled (parent menu controls focus) |
| host | aria-disabled | `true` when `disabled` or `soft-disabled`, otherwise `false` |
| host | aria-posinset | reflects `data-index + 1` when `data-index` is set |

### Implementation requirements

#### General

- Place `mdc-menuitem` inside an `mdc-menubar`, `mdc-menupopover`, or other element with `role="menu"` / `role="menubar"` so the surrounding navigation, focus management, and roving tabindex are applied.
- For items that open submenus, give the item a unique `id`, set `arrow-position="trailing"`, and create a sibling `mdc-menupopover` whose `triggerid` matches the `id`.

#### Labeling

- Always provide an accessible name through `label`, slotted text in `leading-text-primary-label`, or `aria-label` on the host.
- When the item contains only icons or non-text content, set `aria-label` explicitly.

## Related components

| Component | Relationship |
|---|---|
| `mdc-menuitemcheckbox` | Checkable menu item for an independent on/off state within a menu. |
| `mdc-menuitemradio` | Single-select menu item for mutually exclusive options within a group. |
| `mdc-menupopover` | Floating menu surface that hosts menu items and manages focus and keyboard navigation. |
| `mdc-menubar` | Persistent menu container that hosts menu items and their submenus. |
| `mdc-menusection` | Labeled grouping of menu items within a menu or menubar. |
| `mdc-option` | Selectable row for value-picking lists (`mdc-select`/`mdc-listbox`), not action menus. |
| `mdc-listitem` | Generic list row for non-menu contexts. |
