---
title: Menubar
summary: Usage, guidelines, and accessibility for the mdc-menubar component — a vertical container for menu items with keyboard navigation and nested submenu support.
tier: 3
component: menubar
---

## Overview

`mdc-menubar` is a navigational menu container that holds a fixed list of menu items and manages keyboard navigation, focus, and the opening of nested submenus. It wraps its children in an internal group so screen readers announce the menu structure correctly.

### When to use

- Use `mdc-menubar` when grouping a set of `mdc-menuitem`, `mdc-menuitemcheckbox`, or `mdc-menuitemradio` entries that may also expose nested submenus via `mdc-menupopover`.
- Use it as the root for a persistent menu region (for example, the navigation tree inside `mdc-sidenavigation`).

### When not to use

- Do not use `mdc-menubar` for a single overlay menu opened from a trigger button — use `mdc-menupopover` directly.
- Do not use it for selection lists where users pick a value to submit with a form — use `mdc-listbox` with `mdc-option` (typically inside `mdc-select`).

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/menubar/index.js";
import "@momentum-design/components/dist/components/menuitem/index.js";
import "@momentum-design/components/dist/components/menupopover/index.js";
import { MenuBar, MenuItem, MenuPopover } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-menubar>
  <mdc-menuitem id="file-menu" label="File" arrow-position="trailing"></mdc-menuitem>
  <mdc-menupopover triggerid="file-menu">
    <mdc-menuitem label="New"></mdc-menuitem>
    <mdc-menuitem label="Open"></mdc-menuitem>
  </mdc-menupopover>

  <mdc-menuitem id="edit-menu" label="Edit"></mdc-menuitem>
</mdc-menubar>
```

- Each `mdc-menuitem` that opens a submenu must have a unique `id` matching the sibling `mdc-menupopover`'s `triggerid`.
- Items may optionally be grouped inside `mdc-menusection`; sections inside a menubar receive a gradient divider variant automatically.

### Property/Attribute details

- The component reads no public attributes of its own. Navigation behaviour is driven by the keyboard handling described below and configured through the surrounding `mdc-spatialnavigationprovider` keyboard navigation mode.
- Each direct or grouped `mdc-menuitem` is tracked as a navigable entry; items with `disabled` are skipped, items with `soft-disabled` remain focusable but do not open their submenu.

### Notes

- The component automatically applies `divider-variant="gradient"` to any direct child `mdc-menusection` after mount.
- All submenu popovers attached via `triggerid` are forced to `placement="right-start"` so nested menus open consistently.

## Accessibility

### Built-in features

- Manages `role="menubar"` on itself and `aria-orientation="vertical"`.
- Implements a roving tabindex: the first enabled menu item is tabbable (`tabindex="0"`) and all others are `tabindex="-1"`. Arrow keys move focus and update the tab stop.
- Closes any other sibling submenu when a different top-level menu item is activated, so only one branch is open at a time.
- Supports the following keys on focused items:
  - `Home` — focus the first item.
  - `End` — focus the last item.
  - `ArrowUp` / `ArrowDown` — move focus between items. In the default keyboard navigation mode focus loops; with arrow-mode navigation it clamps at the ends.
  - `ArrowRight` — on a top-level item with a submenu, open the submenu; from inside a nested submenu, close back to the parent and open the next top-level submenu.
  - `ArrowLeft` — from inside a submenu, close it and focus the previous top-level item (opening its submenu if it has one).
- Items marked `soft-disabled` are focusable but their submenu will not open via keyboard or click.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| host | role | `menubar` |
| host | aria-orientation | `vertical` |
| each menu item | tabindex | `0` for the active item, `-1` for the rest |
| nested `mdc-menupopover` | placement | `right-start` |

### Implementation requirements

#### General

- Place only `mdc-menuitem`, `mdc-menuitemcheckbox`, `mdc-menuitemradio`, or `mdc-menusection` (containing those items) as direct children.
- Pair each item that opens a submenu with an `mdc-menupopover` whose `triggerid` matches the item's `id`.

#### Labelling

- The menubar itself does not render visible text; provide an `aria-label` on the host element if the surrounding context does not already describe the menu.
- Each menu item is responsible for its own accessible name via `label`, slotted text, or `aria-label`.
