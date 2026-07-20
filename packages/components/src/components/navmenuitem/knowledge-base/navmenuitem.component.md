---
title: Navmenuitem
summary: Usage, guidelines, and accessibility for the mdc-navmenuitem component — a navigation-styled menu item with leading icon, optional badge, and tooltip support.
tier: 3
component: navmenuitem
---

## Overview

`mdc-navmenuitem` is a navigation entry for `mdc-sidenavigation` that marks the current destination and can reveal child navigation. It works as a single item or as a parent that opens its children in a flyout or inline dropdown submenu.

### When to use

- Use `mdc-navmenuitem` for primary navigation entries inside `mdc-sidenavigation` (or an `mdc-menubar` used as a side navigation tree).
- Use `mdc-navmenuitem` `active` to mark the entry that matches the current route or view, keeping exactly one item active at a time.

### When not to use

- Do not use `mdc-navmenuitem` for action items inside a menu. Use `mdc-menuitem`, `mdc-menuitemcheckbox`, or `mdc-menuitemradio` inside `mdc-menupopover` instead.
- Do not use `mdc-navmenuitem` as a stand-alone link or button outside a navigation context. Use `mdc-link` or `mdc-button` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/navmenuitem/index.js";
import { NavMenuItem } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-navmenuitem
  nav-id="inbox"
  icon-name="email-regular"
  label="Inbox"
  badge-type="counter"
  counter="3"
  tooltip-text="Inbox"
  active
></mdc-navmenuitem>
```

A unique `nav-id` is required so the surrounding `mdc-sidenavigation` can manage active state and badge placement. When the navigation is collapsed and `tooltip-text` is provided, the component creates and attaches an `mdc-tooltip` as a sibling for the collapsed state automatically.

The component supports three usage configurations:

1. **Simple navmenuitem** — Contains text and optionally an icon and/or badge. Can be active or inactive to reflect the current route.
2. **Navmenuitem with flyout submenu** — Contains a nested `mdc-menupopover` that opens on hover or click (configurable). The parent receives `aria-haspopup="true"` and the popover gets `role="menu"`. When a child is active, the parent receives `active` styling but not `aria-current`, to avoid confusion for screen readers. If `is-active-parent-tooltip-text` is provided, a tooltip is shown on hover of the parent.
3. **Navmenuitem with dropdown submenu** — Contains a sibling `div[data-trigger]` that opens on click. The parent receives `aria-expanded="true"` when open and `aria-expanded="false"` when closed. Active styling is only applied to the parent when the dropdown is closed; when open, only the active child carries active styling. If `is-active-parent-tooltip-text` is provided, a tooltip is shown on hover of the parent.

Choose one submenu style per navigation tree, not both. Prefer flyout submenus to keep a long side navigation compact; choose the dropdown (accordion) style when showing the active child in the context of its siblings matters more than saving vertical space. Whichever you use, keep exactly one item active: when a child is active and its parent is collapsed, the parent carries the active styling; when the parent is expanded, only the active child does.

### Content guidance

- Write `label` as the destination name — a short noun or noun phrase ("Inbox", "Team settings"), not a verb or a sentence.
- Keep labels short enough to survive the icon-only collapsed state.
- Badge only meaningful, changing information — a count of unread items, or a wordless dot for "something new"; do not badge a static value.

### Property/Attribute details

| Option | Intent |
|---|---|
| `nav-id` | Required unique id `mdc-sidenavigation` uses to track the item and place its badge. Omitting it logs an error, so always set one. |
| `active` | Marks the current destination; the navigation also sets `aria-current="page"` unless `cannot-activate` or `disable-aria-current` is set. Keep only one item active per tree. |
| `cannot-activate` | Prevents the navigation from toggling `active` on click. Use for items that behave like buttons or external links and do not change the current page. |
| `disable-aria-current` | Keeps active styling but suppresses the automatic `aria-current="page"`. Use only when you set `aria-current` yourself. |
| `icon-name` | Leading icon; the component derives the filled variant shown while active. Provide one for every top-level item so the collapsed icon-only state is recognizable. |
| `badge-type` + `counter` / `max-counter` | `dot` for a wordless "new" cue, `counter` for a number (`counter`, capped by `max-counter` `9`/`99`/`999`, rendering `N+` above the cap). Omit for no badge. |
| `show-label` | Managed automatically by `mdc-sidenavigation` for top-level items (hidden when collapsed); nested items always show the label. Do not drive it manually. |
| `tooltip-text` + `tooltip-appearance` / `tooltip-placement` / `tooltip-boundary-padding` | Text for the auto-managed tooltip, shown only when collapsed unless `tooltip-appearance="always"`. Set `tooltip-text` so collapsed items expose their name. |
| `tooltip-type="description"` | Set `none` when an explicit `aria-label` already names the item so the tooltip does not duplicate the announcement. |
| `is-active-parent-tooltip-text` | Tooltip for a collapsed parent that has an active descendant, so it still communicates the active child. |
| `aria-label` | Explicit accessible name; auto-mirrored from `label` when collapsed and no `aria-label` is set. |
| Inherited menu-item attributes | `label`, `disabled`, `soft-disabled`, `arrow-position`, `arrow-direction`, `name`, and `value` behave as on `mdc-menuitem`. |

**Note:** the component emits `click`, `keydown`, `keyup`, `focus`, and `activechange` (`detail: { navId, active }`, after a non-disabled click that did not set `cannot-activate`).

### Limitations

- **Side-navigation only** — spacing, collapse, and active-state logic are tuned for `mdc-sidenavigation`/`mdc-menubar`; outside that context the item does not manage itself. Use `mdc-link` or `mdc-button` elsewhere.
- **One active item** — parent and child must not read as active at once; when a child is active the parent shows active only while collapsed. Do not set `active` on both.
- **Don't mix submenu styles** — a tree should use flyout submenus or dropdown (accordion) submenus, not both; mixing them makes the active-state indicator ambiguous.
- **Tooltip is collapsed-only by default** — `tooltip-text` appears only when the nav is collapsed unless `tooltip-appearance="always"`; do not rely on it for always-visible help.
- **Requires `nav-id`** — without a unique `nav-id` the surrounding navigation cannot coordinate active state or badge placement.

## Accessibility

### Built-in features

- Sets `role="menuitem"` on the host and supports `Enter` (on `keydown`) and `Space` (on `keyup`) to trigger a click — matching native menu item activation semantics.
- When used as a parent with a flyout submenu, sets `aria-haspopup="true"` on the host and the `mdc-menupopover` receives `role="menu"`. When a child is active, the parent receives `active` styling but not `aria-current`, to avoid confusion for screen readers.
- When used as a parent with a dropdown submenu, sets `aria-expanded="true"` when open and `aria-expanded="false"` when closed. Active styling on the parent is suppressed while the dropdown is open so only the active child navmenuitem carries the indicator.
- When the item becomes active, the surrounding navigation sets `aria-current="page"` on it (unless `disable-aria-current` is set). The component also sets `aria-current="page"` on initial render when `active` is already `true`.
- When the navigation collapses, the component copies `label` to `aria-label` if no `aria-label` is already set, so the icon-only display remains announceable.
- When `tooltip-text` or `is-active-parent-tooltip-text` is provided, the component automatically generates an `mdc-tooltip` sibling, assigns the navmenuitem a unique `id` if missing, and points the tooltip's `triggerid` at it.
- Disables interaction (`disabled`) entirely or visually (`soft-disabled`) using the same rules as `mdc-menuitem`.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| host | role | `menuitem` |
| host | aria-current | `page` while `active` (unless `disable-aria-current` or `cannot-activate`) |
| host | aria-haspopup | `true` when the host contains a flyout submenu (`mdc-menupopover`) |
| host | aria-expanded | `true` when a dropdown submenu is open; `false` when closed |
| host | aria-label | mirrors `label` when `show-label` is false and no explicit `aria-label` is set |
| host | aria-disabled | `true` when `disabled` or `soft-disabled` |
| host | tabindex | managed by the parent navigation/menu roving tabindex |
| generated tooltip | triggerid | matches the auto-assigned `id` of the navmenuitem |
| generated tooltip | placement | mirrors `tooltip-placement` |

### Implementation requirements

#### General

- Always provide a unique `nav-id`; the surrounding `mdc-sidenavigation` relies on it to coordinate active state and badge placement.
- Use `cannot-activate` for items that should behave like buttons or external links rather than navigation destinations.
- When the navigation can be collapsed, supply `tooltip-text` so collapsed items expose their name on hover/focus.

#### Labeling

- Provide a `label` for the visible text; set `aria-label` explicitly only when the visible label is not descriptive enough or when the item renders icon-only without a `tooltip-text`.
- For a parent navmenuitem whose nested child can be active, provide `is-active-parent-tooltip-text` (for example `"Messaging, contains active navmenuitem"`) so the collapsed parent still communicates the active descendant.
- Set `tooltip-type="none"` when you have already supplied an explicit `aria-label` to avoid duplicate announcements.

## Related components

| Component | Relationship |
|---|---|
| `mdc-menubar` | Container that hosts navmenuitems as a side-navigation tree. |
| `mdc-menupopover` | Flyout surface for a navmenuitem's child navigation items. |
| `mdc-menuitem` | Action item for menus; navmenuitem is the navigation-styled counterpart. |
| `mdc-menusection` | Labeled grouping of navigation items within the tree. |
| `mdc-tooltip` | Auto-generated by the component to reveal the label when collapsed. |
| `mdc-link` / `mdc-button` | Alternatives for navigation or actions outside a side-navigation context. |
