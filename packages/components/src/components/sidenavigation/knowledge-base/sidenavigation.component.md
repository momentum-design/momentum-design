---
title: Side Navigation
summary: Usage, guidelines, and accessibility for the mdc-sidenavigation component — a vertically stacked navigation landmark with expand/collapse behaviour and support for nested menu items.
tier: 3
component: sidenavigation
---

## Overview

The side navigation is a vertically stacked navigation landmark, typically used as a persistent or collapsible sidebar. It supports five layout variants, toggleable expand/collapse behaviour, an optional brand logo, an optional footer text, and acts as a context provider for nested `mdc-menubar` and `mdc-navmenuitem` elements.

### When to use

- Use `mdc-sidenavigation` for primary, persistent in-app navigation rendered alongside the main content area.
- Use it when you need an expandable/collapsible sidebar with icon-only and icon-plus-label modes.
- Use it as the host of nested `mdc-menubar` and `mdc-navmenuitem` content (with optional submenus via `mdc-menupopover`).

### When not to use

- Use `mdc-appheader` for top-of-page navigation.
- Use `mdc-menubar` on its own when no expand/collapse, branding, or fixed footer area is needed.
- Use `mdc-tablist` when navigation is scoped to switching between sibling views inside a single page.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/sidenavigation/index.js"; // custom element registration
// or via React wrapper
import { SideNavigation, MenuBar, NavMenuItem } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-sidenavigation
  variant="flexible"
  footer-text="Acme Corp"
  grabber-btn-aria-label="Toggle navigation"
>
  <mdc-menubar slot="scrollable-menubar" aria-label="Main">
    <mdc-navmenuitem nav-id="home" aria-label="Home" icon-name="home-bold"></mdc-navmenuitem>
    <mdc-navmenuitem nav-id="messages" aria-label="Messages" icon-name="chat-bold"></mdc-navmenuitem>
  </mdc-menubar>

  <mdc-icon slot="brand-logo" name="logo-bold"></mdc-icon>
</mdc-sidenavigation>
```

Slot structure:

- `scrollable-section` — full custom content for the scrollable area. Replaces the default menubar wrapper.
- `scrollable-menubar` — items rendered inside the default scrollable `mdc-menubar` wrapper.
- `fixed-section` — full custom content for the bottom fixed area.
- `fixed-menubar` — items rendered inside the default fixed `mdc-menubar` wrapper.
- `brand-logo` — informative icon or image rendered next to the footer text (only visible when `footer-text` is set).

NavMenuItem patterns:

1. **Simple navmenuitem** — No submenu or action beyond selection.

2. **NavMenuItem with flyout submenu**:
   - Add an `id` to the `mdc-navmenuitem`.
   - Set `triggerId` on the linked `mdc-menupopover` to match that `id`.
   - Set `is-active-parent-tooltip-text` to convey which submenu item is currently active when the flyout is open.
   - Flyout menus work in both expanded and collapsed navigation states.
   - The component automatically adds `aria-haspopup="menu"` to the parent navmenuitem.

3. **NavMenuItem with dropdown submenu**:
   - Add an `id` to the `mdc-navmenuitem` and set `submenu-type="dropdown"`.
   - Add a sibling `div` with `data-trigger` set to the navmenuitem's `id` and nest the dropdown submenu items inside it.
   - Dropdowns only display in expanded mode. In collapsed mode they automatically convert to flyout menus and revert to dropdowns when the navigation is expanded again.
   - Dropdown submenu items never render when the navigation is collapsed, regardless of `submenu-type`.
   - Only one level of dropdown submenus is supported. For multi-level navigation use flyouts instead.
   - The component manages `aria-expanded` on the parent navmenuitem automatically.

4. **Action-based navmenuitem (no submenu)** — performs an action such as navigation or an alert trigger. Set `disable-aria-current="true"` to keep the visual active state without announcing the item as the current page to screen readers; this is ideal for items that trigger actions rather than navigate.

Listen for `toggle` to react to user-driven expand/collapse and `activechange` to react to the active nav item changing.

### Content guidance

- Use `mdc-text` for section headers.
- Use `mdc-divider` with `variant="gradient"` to separate sections.
- Use an informative icon for the brand logo slot (refer to the Momentum Informative Icons set).
- Use icons for parent navmenuitems only. For submenu items (in both flyouts and dropdowns), use text labels without icons to ensure readability.

### Property/Attribute details

- `variant` — layout variant. One of:
  - `fixed-collapsed` — icons only, fixed width (4.5 rem); `expanded` is locked to `false`.
  - `fixed-expanded` — icons and labels, fixed width (15 rem); `expanded` is locked to `true`.
  - `flexible` — user-togglable; the grabber button is always visible.
  - `flexible-on-hover` — user-togglable; the grabber button only appears on hover or keyboard focus.
  - `hidden` — the component renders nothing.
  - Default: `flexible`.
- `expanded` — whether the navigation is expanded. For `fixed-*` variants this is forced; for `flexible` and `flexible-on-hover` it can be set or toggled by the user (defaults to `true` on first render).
- `footer-text` — text rendered in the bottom brand-logo area. When empty, the entire brand-logo container (including the `brand-logo` slot) is not rendered.
- `grabber-btn-aria-label` — accessible name applied to the expand/collapse grabber button.
- `hide-fixed-section-divider` — when `true`, hides the divider between the scrollable and fixed sections. Default `false`.
- `submenu-type` — controls how child submenu items are presented on a parent navmenuitem. Set to `"dropdown"` to render an inline dropdown in expanded mode. In collapsed mode the component automatically promotes a dropdown to a flyout. Omit or leave unset for flyout-only submenus using `mdc-menupopover`.

Events dispatched by the host:

- `toggle` — `event.detail = { expanded }`; dispatched when the grabber button is clicked.
- `activechange` — dispatched when the active state of a nested `mdc-navmenuitem` changes.

### Limitations

- For `fixed-collapsed` and `fixed-expanded` variants, `expanded` is hard-set internally and cannot be changed by the user or consumer.
- When `variant="hidden"`, no DOM is rendered for the navigation.
- Dropdown submenus support only one level of nesting. For multi-level navigation use flyout menus (`mdc-menupopover`) instead.
- Dropdown submenu items do not render when the navigation is collapsed; they are automatically promoted to flyout menus in that state and revert to dropdowns when expanded again.

## Accessibility

### Built-in features

The host is registered as a navigation landmark with `role="navigation"`. The expand/collapse grabber button (rendered for `flexible` and `flexible-on-hover` variants) exposes `aria-expanded` reflecting the current `expanded` state and `aria-controls` pointing at the container id. Pressing Space on the scrollable section is intercepted to prevent page scroll.

For the `flexible-on-hover` variant, the grabber button is only made visible (via a `data-grabber-visible` attribute) when the user hovers the side navigation or moves keyboard focus into it via `:focus-visible`; non-focus-visible focus moves (e.g. mouse-driven focus into a navmenuitem) do not reveal the grabber.

#### Internal ARIA managed by the component

| Element                       | Attribute       | Value                                                            |
| ----------------------------- | --------------- | ---------------------------------------------------------------- |
| Host                          | `role`          | `navigation`                                                     |
| Grabber button                | `aria-label`    | mirrors `grabber-btn-aria-label`                                 |
| Grabber button                | `aria-expanded` | reflects the current `expanded` state                            |
| Grabber button                | `aria-controls` | id of the side navigation container                              |
| NavMenuItem (flyout parent)   | `aria-haspopup` | `"menu"` — set automatically when linked to an `mdc-menupopover` |
| NavMenuItem (dropdown parent) | `aria-expanded` | `"true"` when the dropdown is open, `"false"` when closed        |

### Implementation requirements

#### General

- Provide a meaningful `aria-label` on every nested `mdc-menubar` and `mdc-navmenuitem` so screen readers can identify them.
- Pair each flyout submenu pattern with `is-active-parent-tooltip-text` on the `mdc-navmenuitem` so users can tell which submenu item is currently active.
- For dropdown submenus, the parent navmenuitem receives `aria-expanded` automatically — do not override it manually.

#### Labelling

- Always set `grabber-btn-aria-label` for `flexible` and `flexible-on-hover` variants; the grabber button is unlabelled otherwise.
- The host has `role="navigation"`; if multiple navigation landmarks exist on the page, add a host-level `aria-label` to distinguish them.
