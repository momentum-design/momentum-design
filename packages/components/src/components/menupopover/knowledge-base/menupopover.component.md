---
title: Menupopover
summary: Usage, guidelines, and accessibility for the mdc-menupopover component — a floating menu overlay for menu items and nested submenus.
status: draft
tier: 3
component: menupopover
---

## Overview

`mdc-menupopover` is a floating overlay that hosts menu items (`mdc-menuitem`, `mdc-menuitemcheckbox`, `mdc-menuitemradio`) optionally grouped in `mdc-menusection`. It is anchored to a trigger element via the `triggerid` attribute and provides keyboard navigation, focus trapping, dismissal, and automatic submenu behaviour when nested inside another `mdc-menupopover` or used with `mdc-menubar`.

### When to use

- Use `mdc-menupopover` to surface a menu of actions from a trigger button or menu item.
- Use it as a submenu by nesting it under another `mdc-menupopover` or by anchoring it to an `mdc-menuitem` inside an `mdc-menubar`.

### When not to use

- Do not use `mdc-menupopover` for generic non-menu overlays — use `mdc-popover` for those.
- Do not use it to host a single non-menu item or arbitrary form controls; the contents should be menu items.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/menupopover/index.js";
import { MenuPopover } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-button id="actions-trigger">Actions</mdc-button>
<mdc-menupopover triggerid="actions-trigger">
  <mdc-menuitem label="Rename"></mdc-menuitem>
  <mdc-menuitem label="Duplicate"></mdc-menuitem>
  <mdc-menuitem id="more-trigger" label="More" arrow-position="trailing"></mdc-menuitem>
</mdc-menupopover>

<mdc-menupopover triggerid="more-trigger">
  <mdc-menuitem label="Archive"></mdc-menuitem>
  <mdc-menuitem label="Delete"></mdc-menuitem>
</mdc-menupopover>
```

The `triggerid` attribute must match the `id` of the element that opens the popover. Submenus are created by adding additional `mdc-menupopover` elements whose `triggerid` references the `id` of the parent menu item.

### Property/Attribute details

- `triggerid` — required. The `id` of the trigger element (button, menu item, etc.).
- `placement` — default `bottom`. Accepts any of `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`. When the popover is nested inside an `mdc-menubar`, the menubar overrides this to `right-start`.
- `visible` — controls the open state (default `false`). Use `.show()` / `.hide()` for programmatic control.
- `trigger` — space-separated trigger events: `click`, `mouseenter`, `focusin`, `manual`. Defaults to `click`.
- `offset`, `boundary`, `boundary-root`, `boundary-padding` — position tuning options forwarded to the underlying floating-ui layout engine.
- `append-to`, `strategy`, `z-index`, `disable-flip`, `size`, `inline`, `animation-frame` — positioning and stacking controls.
- `aria-labelledby`, `aria-describedby` — label/description ids for assistive technology.
- The following options are forced when the component connects and should not be overridden: `role="menu"`, `aria-orientation="vertical"`, `backdrop=false` (set to `true` automatically when the trigger is not a menu item), `color="tonal"`, `focus-trap=true`, `focus-back-to-trigger=true`, `hide-on-escape=true`, `hide-on-outside-click=true`, `interactive=true`, `show-arrow=false`, `close-button=false`.
- Events: `change` (when a contained `mdc-menuitemcheckbox` or `mdc-menuitemradio` toggles), `action` (when an `mdc-menuitem` is selected and the menu closes), `shown`, `hidden`, `created`, `destroyed`.

### Notes

- The popover automatically switches its backdrop on when opened from a non-menu trigger (so a standalone trigger button gets a clickable backdrop), and keeps it off when opened from another menu item.
- When the popover closes, any open submenus that it owns are closed recursively.
- Pressing `Space` on a contained `mdc-menuitemcheckbox` or `mdc-menuitemradio` does not close the menu; pressing `Enter` on a non-trigger menu item dispatches `action` and closes all menus.

## Accessibility

### Built-in features

- Sets `role="menu"` on the host and `aria-orientation="vertical"`.
- Manages a roving tabindex across the contained menu items (including those slotted inside `mdc-menusection`); only one item is `tabindex="0"` at a time, focus moves it as the user navigates.
- Traps focus inside the popover while it is open and returns focus to the trigger element when it closes.
- Supports the following keys on the contained items:
  - `Home` / `End` — focus the first / last item.
  - `ArrowDown` / `ArrowUp` — move focus to the next / previous item, looping at the ends.
  - `ArrowRight` — open the submenu of the focused item if one exists.
  - `ArrowLeft` — when this popover is itself a submenu, close it and return focus to the parent.
  - `Escape` — close this popover (if it is the topmost overlay).
  - `Enter` — activate the focused item and (unless it opens a submenu) close all menus; dispatches a bubbling `action` event from the item.
  - `Space` — same as `Enter` for plain menu items; for checkbox/radio items it toggles state without closing the menu.
- Clicking outside the popover or on the backdrop closes the popover (and any deeper submenus).
- Items marked `soft-disabled` remain focusable but cannot be activated by click, `Enter`, or `Space`.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| host | role | `menu` |
| host | aria-orientation | `vertical` |
| host | aria-modal | toggled by the underlying popover when used as an interactive dialog-like surface |
| trigger element | aria-expanded | `true` while the popover is visible, `false` otherwise (unless `disable-aria-expanded` is set) |
| trigger element | aria-haspopup | set automatically on the trigger |
| each menu item | tabindex | `0` for the focused item, `-1` for the rest |

### Implementation requirements

#### General

- The element referenced by `triggerid` must exist in the same root (document or shadow root) as the popover.
- Wrap React renders of `mdc-menupopover` with `append-to` in a stable parent element (for example a `div`), not directly as a conditional fragment, to avoid `NotFoundError` when React tries to unmount a popover that has been moved by the `append-to` logic.
- Submenu popovers must be siblings of their parent popover (or of the menubar), each anchored to its trigger menu item via `triggerid`.

#### Labelling

- Provide an `aria-label` or `aria-labelledby` on the trigger so that the trigger announces what the menu does. When the popover is interactive, set `aria-labelledby` on the popover itself if it does not inherit a usable name from the trigger.
