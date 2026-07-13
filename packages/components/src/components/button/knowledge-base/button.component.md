---
title: Button
summary: Usage, guidelines, and accessibility for the mdc-button component — a configurable button that supports pill, pill-with-icon, and icon-only layouts in multiple variants, colors, and sizes.
tier: 3
component: button
---

## Overview

The button triggers user actions such as submitting a form, opening a dialog, or running a command. It supports three layouts — pill (text only), pill with leading/trailing icons, and icon-only — and offers variant, color, and size options so it can scale from a primary call-to-action down to a compact toolbar control.

### When to use

- When the control triggers an action — submitting a form, opening a dialog, running a command — rather than navigating, use `mdc-button`.
- When a context has one clearly most important action, use `variant="primary"` for it; there should be at most one primary button per view.
- When space is constrained (toolbars, table-row controls) and the icon's meaning is unambiguous, use the icon-only layout.
- When a primary default button sits on a dark or inverted surface, use `inverted` so it keeps the required contrast.

### When not to use

- When the control navigates to another URL or route, use `mdc-link` instead — links navigate and buttons act, and misusing one misrepresents the interaction to screen-reader and keyboard users.
- When you need button styling but the underlying action is navigation, use `mdc-linkbutton` instead so the control renders as an `<a>` and keeps link affordances like open-in-new-tab and middle-click.
- When you need binary on/off state inside a form, use `mdc-toggle` or `mdc-checkbox` instead — they expose the correct form-control semantics rather than mimicking state with a toggled button.
- When switching between panels of content, use `mdc-tab` inside `mdc-tablist` instead — tabs carry the right semantics.
- When the command lives inside a menu surface, use `mdc-menuitem` (or a related menu item) instead.

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
- Keep labels concise so the button stays readable — avoid pill buttons wider than roughly 200–250px; shorten the label rather than letting it grow unbounded.
- Place a decorative icon on either the leading or trailing side, but rarely both at once: a single icon aids recognition, while two add visual noise.
- For icon-only buttons, always set `aria-label` to describe the action (e.g. `aria-label="Delete"`); the icon alone is not announced.

### Property/Attribute details

- `variant` — visual style. `primary` (default, solid background), `secondary` (transparent background with border), `tertiary` (text-only). Tertiary supports a reduced color palette (see `color`). When several buttons appear together, mark only one as `primary` (the expected or recommended action); multiple `secondary` buttons may coexist, and `tertiary` lowers emphasis for low-priority actions.
- `color` — semantic color. `default` (default), `positive`, `negative`, `accent`, `promotional`. `positive` signals an affirmative or successful action, `negative` a destructive or high-caution one, `accent` draws attention to a key action, and `promotional` highlights marketing or offer-driven actions. Tertiary buttons only support `default`, `accent`, and `negative`; other values fall back to `default`.
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
- `type` — native button behavior: `button` (default, no implicit action), `submit` (calls `form.requestSubmit()`), `reset` (calls `form.reset()`).
- `name` / `value` — submitted with the form data when the button submits the surrounding form.
- `role` — defaults to `button`. Override only when a different role is genuinely required for the surrounding context.

### Edge cases

- The button does not own its accessible name when used as icon-only — the consumer must supply `aria-label`.
- `inverted` is ignored unless the variant/color/active combination above is met.
- `size="20"` is only honored for tertiary icon buttons; other variants fall back to the default size.

## Accessibility

### Built-in features

The button is rendered with `role="button"` and is part of the page's tab order by default. It dispatches `click` on `Enter` keyup-equivalent behavior and on `Space` (press on keydown, fire on keyup), matching native `<button>` keyboard semantics. While focused, pressing and releasing the key updates an internal `pressed` class so the styling tracks the interaction; losing focus mid-press clears it.

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
- If a button triggers form submission or reset, prefer `type="submit"` / `type="reset"` over wiring custom click handlers so the native form behavior is preserved.
