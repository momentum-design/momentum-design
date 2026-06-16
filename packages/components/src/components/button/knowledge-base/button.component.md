---
title: Button
summary: Usage, guidelines, and accessibility for the mdc-button component — a configurable button that supports pill, pill-with-icon, and icon-only layouts in multiple variants, colors, and sizes.
status: draft
tier: 3
component: button
---

## Overview

The button triggers user actions such as submitting a form, opening a dialog, or running a command. It supports three layouts — pill (text only), pill with leading/trailing icons, and icon-only — and offers variant, color, and size options so it can scale from a primary call-to-action down to a compact toolbar control.

### When to use

- Use `mdc-button` for the primary, secondary, or tertiary actions inside forms, dialogs, toolbars, and content surfaces.
- Use the icon-only layout for compact action targets such as toolbars or table-row controls where space is constrained and the icon's meaning is unambiguous.
- Use the `inverted` flag when placing a primary default button on a dark or inverted surface so the color scheme keeps the required contrast.

### When not to use

- Use `mdc-link` when the control navigates to a different URL or in-app route — links should look and behave like links, not buttons.
- Use `mdc-linkbutton` when you need the visual styling of a button but the underlying action is a navigation (renders an `<a>` instead of a `<button>`, so it carries link semantics and browser affordances like open-in-new-tab).
- Use `mdc-toggle` or `mdc-checkbox` for binary on/off state inside forms — they expose the right form-control semantics rather than mimicking state with a toggled button.
- Use `mdc-tab` inside `mdc-tablist` for tabbed navigation rather than a styled button.
- Use `mdc-menuitem` (or a related menu item) when the control lives inside a menu surface.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/button/index.js"; // custom element registration
// or via React wrapper
import { Button } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-button variant="primary" color="default" size="32">Save changes</mdc-button>

<mdc-button variant="secondary" prefix-icon="download-bold" size="32">Download</mdc-button>

<mdc-button variant="tertiary" prefix-icon="more-bold" size="32" aria-label="More options"></mdc-button>
```

### Content guidance

- Keep labels short and action-oriented; prefer a verb or verb phrase ("Save changes", "Send invite") over generic words like "OK" or "Submit".
- Use sentence case for button labels.
- For icon-only buttons, always set `aria-label` to describe the action (e.g. `aria-label="Delete"`); the icon alone is not announced.

### Property/Attribute details

- `variant` — visual style. `primary` (default, solid background), `secondary` (transparent background with border), `tertiary` (text-only). Tertiary supports a reduced color palette (see `color`).
- `color` — semantic color. `default` (default), `positive`, `negative`, `accent`, `promotional`. Tertiary buttons only support `default`, `accent`, and `negative`; other values fall back to `default`.
- `size` — pixel-derived sizing. The valid set depends on the inferred button type:
  - Pill / pill-with-icon: `40`, `32` (default), `28`, `24`.
  - Icon: `64`, `52`, `40`, `32` (default), `28`, `24`. The `20` size is only valid when `variant="tertiary"`.
  - Invalid combinations are coerced back to the default (`32`).
- `prefix-icon` / `postfix-icon` — icon name rendered before/after the label. Supplying an icon without a default slot label produces an icon-only button. When the button is `active`, prefix/postfix icons automatically switch to their `-filled` variant if one exists.
- `inverted` — flips the color scheme for use on dark backgrounds. Only valid with `variant="primary"`, `color="default"`, and when the button is not `active`.
- `active` — toggles the button between pressed/unpressed. While set, the component reflects the state via `aria-pressed` (or whichever ARIA attribute(s) are listed in `aria-state-key`) and swaps prefix/postfix icons to their filled variants.
- `aria-state-key` — ARIA attribute(s) toggled by `active`. Defaults to `aria-pressed`; pass a comma-separated list (e.g. `aria-pressed,aria-expanded`) to toggle several at once.
- `disabled` — fully disables the button. The host receives `aria-disabled="true"`, tab order is removed (`tabindex="-1"`), and click/keyboard handlers are blocked.
- `soft-disabled` — visually disabled but still focusable and clickable. Sets `aria-disabled="true"` without removing the button from the tab order; consumers must suppress side-effects themselves.
- `type` — native button behaviour: `button` (default, no implicit action), `submit` (calls `form.requestSubmit()`), `reset` (calls `form.reset()`).
- `name` / `value` — submitted with the form data when the button submits the surrounding form.
- `role` — defaults to `button`. Override only when a different role is genuinely required for the surrounding context.

### Limitations

- The button does not own its accessible name when used as icon-only — the consumer must supply `aria-label`.
- `inverted` is ignored unless the variant/color/active combination above is met.
- `size="20"` is only honoured for tertiary icon buttons; other variants fall back to the default size.

## Accessibility

### Built-in features

The button is rendered with `role="button"` and is part of the page's tab order by default. It dispatches `click` on `Enter` keyup-equivalent behaviour and on `Space` (press on keydown, fire on keyup), matching native `<button>` keyboard semantics. While focused, pressing and releasing the key updates an internal `pressed` class so the styling tracks the interaction; losing focus mid-press clears it.

When `active` is set, the component writes the boolean state into the configured ARIA state attribute (default `aria-pressed`) so screen readers announce the toggled state. Setting `disabled` removes the button from the tab order and marks it `aria-disabled="true"`; `soft-disabled` keeps the button focusable while still announcing it as disabled, so the consumer can convey *why* the action is unavailable.

#### Internal ARIA managed by the component

| Element | Attribute                  | Value                                                                                                                       |
| ------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Host    | `role`                     | `button` by default; reflects the `role` property when overridden                                                           |
| Host    | `tabindex`                 | `0` when enabled; `-1` while `disabled`                                                                                     |
| Host    | `aria-disabled`            | `true` while `disabled` or `soft-disabled`; removed otherwise                                                               |
| Host    | `aria-pressed` (default)   | `true`/`false` mirroring the `active` property when `aria-state-key` is left at its default                                 |
| Host    | configured `aria-state-key` attribute(s) | `true`/`false` mirroring `active` when `aria-state-key` is set (e.g. `aria-expanded`); removed when `active` is `undefined` |

### Implementation requirements

#### Labelling

- Text buttons get their accessible name from the slotted label — keep the label concise and self-describing.
- Icon-only buttons (no default slot content, only `prefix-icon` or `postfix-icon`) MUST have an `aria-label` describing the action; without it, the button is announced without context.
- When using `aria-state-key` with a non-default ARIA attribute (e.g. `aria-expanded`), make sure the visual treatment for `active` matches the semantic meaning of that attribute — `aria-pressed` is for toggle buttons, `aria-expanded` is for disclosure controls.
- If a button triggers form submission or reset, prefer `type="submit"` / `type="reset"` over wiring custom click handlers so the native form behaviour is preserved.
