---
title: Menuitem
summary: Usage, guidelines, and accessibility for the mdc-menuitem component — an actionable item inside a menubar or menu popover with leading/trailing controls and an optional arrow indicator.
tier: 3
component: menuitem
---

## Overview

`mdc-menuitem` is an actionable entry placed inside a `mdc-menubar` or `mdc-menupopover`. It exposes leading and trailing slots for controls and text, supports an optional arrow indicator for items that open submenus, and emits a click event when activated by mouse, `Enter`, or `Space`.

### When to use

- Use `mdc-menuitem` for the individual entries inside a menubar or menu popover that perform an action or open a submenu.
- Use it as the trigger element for a nested `mdc-menupopover` by giving it a unique `id` and pointing the popover's `triggerid` at it.

### When not to use

- Do not use `mdc-menuitem` for toggleable state — use `mdc-menuitemcheckbox` or `mdc-menuitemradio`.
- Do not use it inside `mdc-listbox`/`mdc-select` (selection lists) — use `mdc-option` there.
- Do not use it as a stand-alone clickable row outside of a `menu`/`menubar`/`menupopover` context; use `mdc-listitem` for generic lists.

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

- Use the `label` attribute (or `leading-text-primary-label` slot) for the primary text and `secondary-label`/`tertiary-label` for supporting detail.
- Use the trailing slots (`trailing-text-side-header`, `trailing-text-subline`, `trailing-controls`) for metadata such as shortcuts, status, or badges.
- If the item text is long enough to truncate, connect an `mdc-tooltip` via its `triggerid` to the menu item's `id` to expose the full text on hover and focus. The component does not create the tooltip automatically.

### Property/Attribute details

- `label`, `secondary-label`, `tertiary-label` — primary, secondary, and tertiary text rendered on the leading side. May be replaced by slotting custom text into `leading-text-primary-label`, `leading-text-secondary-label`, `leading-text-tertiary-label`.
- `side-header-text`, `subline-text` — trailing text. May be replaced by slotting custom text into `trailing-text-side-header`, `trailing-text-subline`.
- `name` — identifier used to identify the menu item when it is selected.
- `value` — value associated with the menu item when it is selected. Especially useful for checkbox or radio variants but available on every menu item.
- `arrow-position` — `'leading' | 'trailing'`. When set, an arrow icon is rendered on the chosen side. Defaults to no arrow.
- `arrow-direction` — `'positive' | 'negative'`. Controls which way the arrow points. With `positive`, leading arrows point left and trailing arrows point right; with `negative`, the directions invert.
- `disabled` — disables interaction entirely and removes the item from keyboard navigation; clicks and key presses are stopped before they bubble.
- `soft-disabled` — appears disabled but remains focusable and reachable. Consumers must ensure that the item does not trigger unintended actions while soft-disabled.
- `active` — visual-only flag that styles the item as active without changing focus or ARIA state.
- `data-index` — zero-based index used by virtualized lists; mirrored to `aria-posinset`.
- Events emitted: `click`, `keydown`, `keyup`, `focus`, `enabled`, `disabled`, `created`, `destroyed`.

## Accessibility

### Built-in features

- Sets `role="menuitem"` on the host and adopts the inset-rectangle list-item visual variant.
- `Enter` triggers a synthetic click on `keydown` (matching native behaviour); `Space` triggers the click on `keyup` and prevents page scroll.
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

#### Labelling

- Always provide an accessible name through `label`, slotted text in `leading-text-primary-label`, or `aria-label` on the host.
- When the item contains only icons or non-text content, set `aria-label` explicitly.
