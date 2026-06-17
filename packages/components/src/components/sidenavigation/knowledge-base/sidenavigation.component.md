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

- Simple item — no submenu, no extra action beyond selection.
- Item with submenu — set an `id` on the `mdc-navmenuitem`, set `triggerid` on the corresponding `mdc-menupopover` to that id, and set `parent-nav-tooltip-text` so the tooltip can convey which submenu item is currently active.
- Actionable item without submenu — performs an action such as navigation; set `disable-aria-current="true"` to keep the visual active state without the navigation behaviour.

Listen for `toggle` to react to user-driven expand/collapse and `activechange` to react to the active nav item changing.

### Content guidance

- Use `mdc-text` for section headers.
- Use `mdc-divider` with `variant="gradient"` to separate sections.
- Use an informative icon for the brand logo slot (refer to the Momentum Informative Icons set).

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

Events dispatched by the host:

- `toggle` — `event.detail = { expanded }`; dispatched when the grabber button is clicked.
- `activechange` — dispatched when the active state of a nested `mdc-navmenuitem` changes.

### Limitations

- For `fixed-collapsed` and `fixed-expanded` variants, `expanded` is hard-set internally and cannot be changed by the user or consumer.
- When `variant="hidden"`, no DOM is rendered for the navigation.

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

### Implementation requirements

#### General

- Provide a meaningful `aria-label` on every nested `mdc-menubar` and `mdc-navmenuitem` so screen readers can identify them.
- Pair each submenu pattern with `parent-nav-tooltip-text` on the `mdc-navmenuitem` so users can tell which submenu item is currently active.

#### Labelling

- Always set `grabber-btn-aria-label` for `flexible` and `flexible-on-hover` variants; the grabber button is unlabelled otherwise.
- The host has `role="navigation"`; if multiple navigation landmarks exist on the page, add a host-level `aria-label` to distinguish them.
