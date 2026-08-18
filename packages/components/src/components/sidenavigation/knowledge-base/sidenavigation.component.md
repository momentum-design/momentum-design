---
title: Side Navigation
summary: Usage, guidelines, and accessibility for the mdc-sidenavigation component — a vertically stacked navigation landmark with expand/collapse behavior and support for nested menu items.
tier: 3
component: sidenavigation
---

## Overview

`mdc-sidenavigation` is the primary in-app navigation landmark, letting users move between the main sections of a product from a persistent sidebar. It can expand to show labels or collapse to icons, and hosts the nested `mdc-menubar` and `mdc-navmenuitem` content that forms the navigation tree.

### When to use

- Use `mdc-sidenavigation` for primary, persistent in-app navigation rendered alongside the main content area.
- Use `mdc-sidenavigation` when the sidebar needs to switch between icon-only and icon-plus-label modes.
- Use `mdc-sidenavigation` to host nested `mdc-menubar` and `mdc-navmenuitem` content, with optional submenus via `mdc-menupopover`.

### When not to use

- Do not use `mdc-sidenavigation` for top-of-page controls and branding. Use `mdc-appheader` instead.
- Do not use `mdc-sidenavigation` when no expand/collapse, branding, or fixed footer area is needed. Use `mdc-menubar` on its own instead.
- Do not use `mdc-sidenavigation` for switching between sibling views inside a single page. Use `mdc-tablist` or `mdc-verticaltablist` instead.

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

Composition guidance:

- Show the active state on only one item at a time — the active child when its group is expanded, or the parent when the group is collapsed, never both together.
- Use icons on parent navmenuitems only; give submenu items (flyout or dropdown) plain text labels for readability.
- Separate grouped sections with an `mdc-divider` (`variant="gradient"`), and keep the information architecture flat enough that a tertiary level is rarely needed.

### Content guidance

- Keep section header labels short and descriptive so the group's purpose is clear; the label is hidden in the icon-only (collapsed) mode, so never rely on it alone to convey meaning.
- Keep `footer-text` to a short product or organization name — it is a label for the footer area, not a sentence.

### Property/Attribute details

| Option | Intent |
|---|---|
| `variant="flexible"` (default) | Sets the layout and who controls expand/collapse. Use `flexible` (grabber always visible) or `flexible-on-hover` (grabber appears on hover/focus) when the user can toggle the sidebar; use `fixed-expanded` (icons + labels, locked open) or `fixed-collapsed` (icons only, locked closed) when the product fixes the mode; `hidden` renders nothing. |
| `expanded` | Whether the sidebar shows labels. Toggleable for the `flexible*` variants (defaults to `true` on first render); forced for the `fixed-*` variants (see Limitations). |
| `footer-text` | Text in the bottom brand area. When empty, the whole brand-logo container (including the `brand-logo` slot) is not rendered, so set it when you need the logo/footer. |
| `grabber-btn-aria-label` | Accessible name for the expand/collapse grabber button. Always set it for the `flexible*` variants (see Labeling). |
| `hide-fixed-section-divider` (default `false`) | Hides the divider between the scrollable and fixed sections. Set `true` when the visual split is unwanted. |
| `submenu-type` | How a parent navmenuitem presents its children. Set `"dropdown"` for an inline accordion in expanded mode; leave unset for flyout submenus via `mdc-menupopover`. Dropdowns auto-promote to flyouts when collapsed. |

The host dispatches `toggle` (`event.detail = { expanded }`) when the grabber is clicked, and `activechange` when a nested `mdc-navmenuitem`'s active state changes.

### Limitations

- **Fixed variants lock expansion** — for `fixed-collapsed` and `fixed-expanded`, `expanded` is hard-set internally and cannot be changed by the user or consumer.
- **Hidden renders nothing** — `variant="hidden"` outputs no DOM for the navigation.
- **One dropdown level** — dropdown submenus nest only one level deep; use flyout menus (`mdc-menupopover`) for multi-level navigation.
- **Dropdowns collapse to flyouts** — dropdown items do not render while the navigation is collapsed; they are promoted to flyouts in that state and revert when expanded.
- **Don't mix submenu styles** — within one navigation, use either dropdown (accordion) or flyout children throughout, not both; when using dropdowns, all nested items must be dropdowns.

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

#### Labeling

- Always set `grabber-btn-aria-label` for `flexible` and `flexible-on-hover` variants; the grabber button is unlabeled otherwise.
- The host has `role="navigation"`; if multiple navigation landmarks exist on the page, add a host-level `aria-label` to distinguish them.

## Related components

| Component | Relationship |
|---|---|
| `mdc-appheader` | Top-of-page shell bar paired with the sidebar. |
| `mdc-menubar` | Container for the navigation items, slotted into the scrollable/fixed sections. |
| `mdc-navmenuitem` | Individual navigation entry rendered inside the menubar. |
| `mdc-menupopover` | Flyout submenu surface for a parent navmenuitem. |
| `mdc-tablist` / `mdc-verticaltablist` | In-page panel switching rather than section-to-section navigation. |
