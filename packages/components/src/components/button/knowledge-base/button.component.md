---
title: Button
summary: Usage, guidelines, and accessibility for the mdc-button component — a configurable button that supports pill, pill-with-icon, and icon-only layouts in multiple variants, colors, and sizes.
tier: 3
component: button
---

## Overview

The button triggers user actions such as submitting a form, opening a dialog, or running a command. It supports three layouts — pill (text only), pill with leading/trailing icons, and icon-only — and offers variant, color, and size options so it can scale from a primary call-to-action down to a compact toolbar control.

### When to use

- Use `mdc-button` to trigger an action — submitting a form, opening a dialog, or running a command.
- Use `mdc-button` `primary` for the single most important action in a view. Keep at most one primary button per context; when a dialog offers "Save" and "Cancel", only "Save" is primary.
- Use `mdc-button` `secondary` for actions that are available but not the expected next step. More than one secondary button can appear together.
- Use `mdc-button` with `variant="secondary"` and `color="overlay"` for actions placed directly over images, video, or other non-uniform backgrounds. Its dedicated background and border maintain visual separation and contrast against the underlying content.
- Use `mdc-button` `tertiary` for low-emphasis actions that should not compete for attention; unlike secondary, it has no resting outline, so its footprint appears only on hover or interaction.
- Use an icon-only `mdc-button` for compact targets such as toolbars or table-row controls where space is constrained and the icon's meaning is unambiguous.
- Use `mdc-button` with `inverted` on a dark or inverted surface so the color scheme keeps the required contrast.

### When not to use

- Do not use `mdc-button` for navigation to another page or route. Use `mdc-link` for a text link, or `mdc-buttonlink` when the navigation needs button styling — both render an `<a>` and carry link semantics such as open-in-new-tab.
- Do not use `mdc-button` for binary on/off state in a form. Use `mdc-toggle` or `mdc-checkbox`, which expose the correct form-control semantics instead of mimicking state with a pressed button.
- Do not use `mdc-button` for switching between panels of content. Use `mdc-tablist` for tabbed navigation.
- Do not use `mdc-button` for a command that lives inside a menu surface. Use `mdc-menuitem` (or a related menu item) so it inherits menu semantics and keyboard handling.
- Do not use more than one `mdc-button` `primary` in the same context. If two actions feel equally important, reconsider the information hierarchy.

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

### Property/Attribute details

| Option | Intent |
|---|---|
| `variant="primary"` (default) | Solid, high-emphasis style. Use for the single most important action in a context. |
| `variant="secondary"` | Outlined, medium-emphasis style. Use for supporting actions; several can coexist. |
| `variant="tertiary"` | No resting outline, low-emphasis style. Use to reduce noise; supports only `default`, `accent`, and `negative` colors. |
| `color="default"` (default) | Neutral color. Use unless the action carries positive, destructive, accent, or promotional meaning. |
| `color="overlay"` | Dedicated background and border for use over images, video, or other non-uniform backgrounds. Supported only with `variant="secondary"`. |
| `color="negative"` | Signals a destructive or irreversible action such as delete or remove. Pair high-risk actions with a confirmation. |
| `color="positive"` / `color="accent"` / `color="promotional"` | Reserve for success/affirmative, emphasized, and marketing actions respectively; do not apply color purely for decoration. |
| `prefix-icon` / `postfix-icon` | Adds a leading or trailing icon. An icon with no label produces an icon-only button — set `aria-label`. Avoid icons on both sides at once. |
| `inverted` | Flips the palette for dark or inverted surfaces. Honored only with `variant="primary"`, `color="default"`, and when not `active`. |
| `active` + `aria-state-key` | Makes the button a toggle; mirrors state into `aria-pressed` by default (or the listed `aria-*` attributes). Use for pressed/toggle controls, not navigation. |
| `soft-disabled` | Looks disabled but stays focusable so assistive tech can reach it and you can explain why the action is unavailable. Prefer over `disabled` when the reason matters. |
| `type="submit"` / `type="reset"` | Wires native form submit/reset. Prefer over custom click handlers so native form behavior is preserved. |

**Note:** `size` depends on the button type — pill `40`/`32` (default)/`28`/`24`; icon adds `64`/`52` and `20` (tertiary only). Invalid combinations fall back to `32`.

### Limitations

- **Icon-only needs a label** — an icon-only button has no accessible name of its own; set `aria-label` describing the action or it is announced without context.
- **`inverted` is conditional** — it is ignored unless `variant="primary"`, `color="default"`, and the button is not `active`. Match the surface and variant.
- **`color="overlay"` is secondary-only** — primary and tertiary buttons fall back to `color="default"`. Use it with `variant="secondary"`.
- **`size="20"` is tertiary-only** — other variants fall back to the default `32`. Use `variant="tertiary"` if you need the 20px icon button.
- **No built-in busy state** — the button does not manage a loading or pending state. Disable it and show your own spinner while an action is in flight.

## Accessibility

### Built-in features

The button is rendered with `role="button"` and is part of the page's tab order by default. It dispatches `click` with native `<button>` keyboard behavior — on `Enter` and on `Space` (press on keydown, fire on keyup). While focused, pressing and releasing the key updates an internal `pressed` class so the styling tracks the interaction; losing focus mid-press clears it.

When `active` is set, the component writes the boolean state into the configured ARIA state attribute (default `aria-pressed`) so screen readers announce the toggled state. Setting `disabled` removes the button from the tab order and marks it `aria-disabled="true"`; `soft-disabled` keeps the button focusable while still announcing it as disabled, so the consumer can convey *why* the action is unavailable.

#### Internal ARIA managed by the component

| Element | Attribute                  | Value                                                                                                                       |
| ------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Host    | `role`                     | `button` by default; reflects the `role` property when overridden                                                           |
| Host    | `tabindex`                 | `0` when enabled; `-1` while `disabled`                                                                                     |
| Host    | `aria-disabled`            | `true` while `disabled` or `soft-disabled`; removed otherwise                                                               |
| Host    | `aria-pressed` (default)   | `true`/`false` mirroring the `active` property when `aria-state-key` is left at its default                                 |
| Host    | configured `aria-state-key` attribute(s) | `true`/`false` mirroring `active` when `aria-state-key` is set (for example `aria-expanded`); removed when `active` is `undefined` |

### Implementation requirements

#### Labeling

- Text buttons get their accessible name from the slotted label — keep the label concise and self-describing.
- Icon-only buttons (no default slot content, only `prefix-icon` or `postfix-icon`) MUST have an `aria-label` describing the action; without it, the button is announced without context.
- When using `aria-state-key` with a non-default ARIA attribute (for example `aria-expanded`), make sure the visual treatment for `active` matches the semantic meaning of that attribute — `aria-pressed` is for toggle buttons, `aria-expanded` is for disclosure controls.
- If a button triggers form submission or reset, prefer `type="submit"` / `type="reset"` over wiring custom click handlers so the native form behavior is preserved.

## Related components

| Component | Relationship |
|---|---|
| `mdc-buttonsimple` | The unstyled primitive `mdc-button` is built on. Reach for it only when building a custom button surface that needs button semantics without visual styling. |
| `mdc-buttonlink` | Looks like a button but renders an `<a>`. Use when the control navigates rather than triggers an action. |
| `mdc-buttongroup` | Wrapper that clusters related buttons into one segmented control with shared `size` and `variant`. |
| `mdc-link` | Text link for navigation. Use when the control should look and behave like a link, not a button. |
| `mdc-toggle` | Form control for binary on/off state. Use instead of a pressed/`active` button when the state is a form value. |
