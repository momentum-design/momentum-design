---
title: Navmenuitem
summary: Usage, guidelines, and accessibility for the mdc-navmenuitem component — a navigation-styled menu item with leading icon, optional badge, and tooltip support.
tier: 3
component: navmenuitem
---

## Overview

`mdc-navmenuitem` is a menu item styled to work as a navigation tab inside `mdc-sidenavigation`. It renders a leading icon, an optional badge, and a dynamic label that appears when the surrounding side navigation is expanded. The item can be in an active or inactive state to indicate the current page, and a tooltip can be attached for collapsed states or for parent items whose nested child is active.

### When to use

- Use `mdc-navmenuitem` for primary navigation entries inside `mdc-sidenavigation` (or an `mdc-menubar` used as a side navigation tree).
- Use the active/inactive state to reflect which destination corresponds to the current route or view.

### When not to use

- Do not use `mdc-navmenuitem` for action menu items inside `mdc-menupopover`; use `mdc-menuitem`, `mdc-menuitemcheckbox`, or `mdc-menuitemradio` there.
- Do not use it as a stand-alone link or button outside a navigation context — use `mdc-link` or `mdc-button` instead.

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

### Property/Attribute details

- `nav-id` — required unique identifier used by `mdc-sidenavigation` to track the item. If omitted, the component logs an error via `onerror`.
- `active` — boolean. Reflects whether the item is currently selected. When `true`, the surrounding navigation will also set `aria-current="page"` (unless `cannot-activate` or `disable-aria-current` are set).
- `cannot-activate` — boolean, default `false`. Prevents the surrounding `mdc-sidenavigation` from toggling `active` when the item is clicked (use for items that act like external links or buttons that do not change the current page). The active styling can still be applied manually.
- `disable-aria-current` — boolean. Keeps the visual active styling but suppresses the automatic `aria-current="page"` attribute. Use when you manage `aria-current` yourself.
- `icon-name` — leading icon name. The component automatically derives the filled icon variant used when the item is active.
- `badge-type` — `'dot'` (notification) or `'counter'`. When omitted, no badge is rendered.
- `counter` — number rendered in the counter badge.
- `max-counter` — `9`, `99`, or `999`, default `99`. Values exceeding the max render as `N+`.
- `show-label` — boolean. Controlled automatically by `mdc-sidenavigation` based on its expanded state for top-level items; nested items always show the label.
- `aria-label` — explicit accessible name. When the navigation collapses (`show-label=false`) and no `aria-label` is set, the visible `label` is mirrored to `aria-label` so the icon-only state still announces correctly.
- `tooltip-text` — text displayed in the auto-managed tooltip. Shown only when `show-label` is false (i.e. when the side navigation is collapsed) unless `tooltip-appearance="always"`.
- `tooltip-placement` — popover placement for the tooltip, default `right`.
- `tooltip-type` — `'description' | 'label' | 'none'`. Choose `none` when an `aria-label` is already set so the tooltip does not duplicate it.
- `tooltip-appearance` — `'when-collapsed'` (default) or `'always'`.
- `tooltip-boundary-padding` — number of pixels of padding between the tooltip and the viewport edges; default `0`.
- `is-active-parent-tooltip-text` — text displayed when this parent item has an active descendant in a nested navmenu (for example, `"Messaging, contains active navmenuitem"`).
- Plus all menu-item attributes (`label`, `disabled`, `soft-disabled`, `arrow-position`, `arrow-direction`, `name`, `value`).
- Events: `click`, `keydown`, `keyup`, `focus`, `activechange` (custom event with `detail: { navId, active }` dispatched after a non-disabled click that did not set `cannot-activate`).

### Notes

- The tooltip is created and removed programmatically as a sibling of the navmenuitem; it is re-rendered whenever `tooltip-text`, `show-label`, or the parent's active-child state changes.
- When the item is nested under an `mdc-menupopover`, an internal `in-menupopover` attribute is added and the item always shows its label (the collapse logic only applies to top-level items inside `mdc-sidenavigation`).

## Accessibility

### Built-in features

- Sets `role="menuitem"` on the host and supports `Enter` (on `keydown`) and `Space` (on `keyup`) to trigger a click — matching native menu item activation semantics.
- When the item becomes active, the surrounding navigation sets `aria-current="page"` on it (unless `disable-aria-current` is set). The component also sets `aria-current="page"` on initial render when `active` is already `true`.
- When the navigation collapses, the component copies `label` to `aria-label` if no `aria-label` is already set, so the icon-only display remains announceable.
- When `tooltip-text` or `is-active-parent-tooltip-text` is provided, the component automatically generates an `mdc-tooltip` sibling, assigns the navmenuitem a unique `id` if missing, and points the tooltip's `triggerid` at it.
- Disables interaction (`disabled`) entirely or visually (`soft-disabled`) using the same rules as `mdc-menuitem`.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| host | role | `menuitem` |
| host | aria-current | `page` while `active` (unless `disable-aria-current` or `cannot-activate`) |
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

#### Labelling

- Provide a `label` for the visible text; set `aria-label` explicitly only when the visible label is not descriptive enough or when the item renders icon-only without a `tooltip-text`.
- For a parent navmenuitem whose nested child can be active, provide `is-active-parent-tooltip-text` (for example `"Messaging, contains active navmenuitem"`) so the collapsed parent still communicates the active descendant.
- Set `tooltip-type="none"` when you have already supplied an explicit `aria-label` to avoid duplicate announcements.
