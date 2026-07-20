---
title: Menupopover
summary: Usage, guidelines, and accessibility for the mdc-menupopover component — a floating menu overlay for menu items and nested submenus.
tier: 3
component: menupopover
---

## Overview

`mdc-menupopover` is a floating overlay that surfaces a menu of actions from a trigger, hosting menu items optionally grouped in `mdc-menusection`. It manages keyboard navigation, focus, and dismissal, including nested submenus when used with another `mdc-menupopover` or `mdc-menubar`.

### When to use

- Use `mdc-menupopover` to surface a menu of actions from a trigger button or menu item.
- Use `mdc-menupopover` as a submenu by nesting it under another `mdc-menupopover` or anchoring it to an `mdc-menuitem` inside an `mdc-menubar`.

### When not to use

- Do not use `mdc-menupopover` for generic non-menu overlays. Use `mdc-popover` instead.
- Do not use `mdc-menupopover` to host arbitrary form controls or a single non-menu row. Use `mdc-popover` for custom content instead.

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

| Option | Intent |
|---|---|
| `triggerid` | Required. The `id` of the element that opens the menu. For a submenu, point it at the parent `mdc-menuitem`'s `id`. |
| `placement="bottom"` (default) | Where the menu opens relative to its trigger. Adjust for layout fit; a menu nested in `mdc-menubar` is forced to `right-start`, so leave it unset there. |
| `visible` | Open state (default `false`). Prefer `.show()` / `.hide()` for programmatic control over toggling the attribute. |
| `trigger="click"` (default) | Which trigger events open the menu (`click`, `mouseenter`, `focusin`, `manual`). Keep `click` for action menus; use `manual` when you control open/close yourself. |
| `offset` / `boundary` / `boundary-root` / `boundary-padding` | Fine-tune position and collision boundaries when the default placement overflows a container. |
| `append-to` / `strategy` / `z-index` / `disable-flip` / `size` / `inline` / `animation-frame` | Stacking and positioning controls for tricky overflow or portal scenarios; leave at defaults unless a layout problem needs them. |
| `aria-labelledby` / `aria-describedby` | Point assistive technology at a label/description when the trigger does not already name the menu. |

**Note:** on connect the component forces `role="menu"`, `aria-orientation="vertical"`, `color="tonal"`, `focus-trap=true`, `focus-back-to-trigger=true`, `hide-on-escape=true`, `hide-on-outside-click=true`, `interactive=true`, `show-arrow=false`, and `close-button=false`; `backdrop` is off for menu-item triggers and on for other triggers. It emits `change` (contained checkbox/radio toggles), `action` (an item is selected and the menu closes), `shown`, `hidden`, `created`, and `destroyed`.

### Limitations

- **Menu content only** — the popover expects menu items (`mdc-menuitem`, `mdc-menuitemcheckbox`, `mdc-menuitemradio`, optionally grouped in `mdc-menusection`), not arbitrary controls. Use `mdc-popover` for custom content.
- **Requires a trigger in the same root** — the element referenced by `triggerid` must exist in the same document or shadow root; a missing trigger leaves the menu unopenable.
- **Forced options can't be overridden** — role, focus trap, dismissal, and arrow/close settings are set on connect; do not try to re-enable an arrow, close button, or non-menu role.
- **React `append-to` unmount** — when using `append-to`, wrap the render in a stable parent element so React does not throw `NotFoundError` unmounting a moved popover.

### Notes

- The popover shows a clickable backdrop when opened from a non-menu trigger (a standalone button) and hides it when opened from another menu item.
- Closing a popover recursively closes any submenus it owns.
- `Space` on a contained `mdc-menuitemcheckbox`/`mdc-menuitemradio` toggles state without closing; `Enter` on a non-trigger item dispatches `action` and closes all menus.

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

#### Labeling

- Provide an `aria-label` or `aria-labelledby` on the trigger so that the trigger announces what the menu does. When the popover is interactive, set `aria-labelledby` on the popover itself if it does not inherit a usable name from the trigger.

## Related components

| Component | Relationship |
|---|---|
| `mdc-menuitem` | Action entry hosted inside the popover. |
| `mdc-menuitemcheckbox` | Checkable entry for independent on/off state within the menu. |
| `mdc-menuitemradio` | Single-select entry for mutually exclusive options within the menu. |
| `mdc-menusection` | Labeled grouping of items inside the popover. |
| `mdc-menubar` | Persistent menu container that anchors submenu popovers. |
| `mdc-popover` | Generic overlay for non-menu content. |
