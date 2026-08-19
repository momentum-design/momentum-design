---
title: ButtonSimple
summary: Usage, guidelines, and accessibility for the mdc-buttonsimple component — an unstyled, form-associated button primitive supplying keyboard, focus, disabled, and toggle semantics.
tier: 3
component: buttonsimple
---

## Overview

The buttonsimple is a low-level button primitive that handles keyboard activation, focus management, disabled/soft-disabled states, form association, and optional toggled state. It does not provide visual styling on its own — consumers wrap or compose it when they need button semantics without the opinionated appearance of `mdc-button`.

### When to use

- Use `mdc-buttonsimple` when building a custom button surface (a card, list item, or composite control) that needs correct keyboard and ARIA semantics without the visual styling of `mdc-button`.
- Use `mdc-buttonsimple` inside design-system components that must behave like buttons but render their own layout, such as `mdc-button`, `mdc-cardbutton`, or list-item actions.

### When not to use

- Do not use `mdc-buttonsimple` when you need the standard visual treatment (variant, color, size, prefix/postfix icons). Use `mdc-button`.
- Do not use `mdc-buttonsimple` for a navigation. Use `mdc-buttonlink`, which renders an anchor.
- Do not use `mdc-buttonsimple` for binary state in a form. Use `mdc-toggle` or `mdc-checkbox`, which expose the correct form-control semantics and labeling.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/buttonsimple/index.js"; // custom element registration
// or via React wrapper
import { Buttonsimple } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-buttonsimple aria-label="Save">
  <!-- consumer-provided content / styling -->
  <span class="custom-surface">Save</span>
</mdc-buttonsimple>

<!-- Toggle button: aria-pressed reflects the active state automatically -->
<mdc-buttonsimple active aria-label="Mute microphone">…</mdc-buttonsimple>

<!-- Form submit -->
<form>
  <mdc-buttonsimple type="submit" name="action" value="save">Save</mdc-buttonsimple>
</form>
```

### Content guidance

- Keep the slotted content focused on the button's action; do not nest focusable controls inside it.

### Property/Attribute details

| Option | Intent |
|---|---|
| `active` + `aria-state-key` | Makes the primitive a toggle; mirrors state into `aria-pressed` by default (or the listed `aria-*` attributes). Leave `active` unset for a non-toggle button. |
| `type="submit"` / `type="reset"` | Triggers the associated form's submit/reset. Form association is automatic inside a `<form>`; prefer these over custom handlers. |
| `soft-disabled` | Looks disabled but stays focusable so assistive tech reaches it and you can explain why. Prefer over `disabled` when the reason matters. |
| `role` | Defaults to `button`. Override only when the surrounding context genuinely needs a different role — then re-audit the keyboard contract. |
| `size` | Numeric token (default `32`); the primitive accepts the superset of sizes and leaves visual interpretation to the consumer. |

**Note:** `name`/`value` are submitted as a form-data pair when the primitive submits its form.

### Limitations

- **No visual styling** — the primitive ships no appearance, hover/focus indicators, or active-state visuals; the consumer or wrapping component must supply them.
- **Needs `ElementInternals`** — form association relies on `ElementInternals`, so the page must run in a browser that supports it.
- **`aria-state-key` is ARIA-only** — only names starting with `aria-` are written; other attribute names in the list are ignored.

## Accessibility

### Built-in features

The host carries `role="button"` (overridable) and participates in the page's tab order via the `TabIndexMixin`. The primitive replicates native `<button>` keyboard behavior: `Enter` activates immediately on keydown (firing `click`) and `Space` activates on keyup after a keydown — the component temporarily adds a `pressed` class during the press so consumers can style the down-state, and clears it on blur if focus is lost mid-press. The default browser action for both keys is prevented so the surrounding page does not scroll on `Space`.

`active` is mirrored into the configured ARIA state attribute(s); by default that is `aria-pressed`, but consumers can broaden it (for example `aria-pressed,aria-expanded`) for disclosure-style buttons. Setting `disabled` removes the element from the tab order and marks it `aria-disabled="true"`; setting `soft-disabled` keeps the tab stop but still announces the button as disabled, which is useful when you want to explain *why* the action is unavailable without hiding the control.

The element is form-associated (`formAssociated = true`): with `type="submit"`/`"reset"` it triggers `requestSubmit()` / `reset()` on the surrounding form, and `name`/`value` are sent with the form data.

#### Internal ARIA managed by the component

| Element | Attribute                                | Value                                                                                                                                  |
| ------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Host    | `role`                                   | `button` by default; reflects the `role` property when overridden                                                                      |
| Host    | `tabindex`                               | Consumer-provided value (default `0`); forced to `-1` while `disabled` and restored on re-enable                                       |
| Host    | `aria-disabled`                          | `true` while `disabled` or `soft-disabled`; removed otherwise                                                                          |
| Host    | `aria-pressed` (default)                 | `true`/`false` mirroring the `active` property when `aria-state-key` is left at its default; attribute removed when `active` is `undefined` |
| Host    | configured `aria-state-key` attribute(s) | `true`/`false` mirroring `active` when `aria-state-key` is set to one or more `aria-*` names                                           |

### Implementation requirements

#### General

- Wrap or compose `mdc-buttonsimple` with your own focus ring and pressed-state styles — the primitive only toggles a `pressed` class while a key is held.
- When using `soft-disabled`, also convey *why* the button is unavailable (helper text, tooltip) so the announcement is actionable rather than confusing.
- If you change `role` away from `button`, audit the resulting keyboard contract: `Enter`/`Space` handling and `aria-pressed` semantics are tuned for the button role and may not match the new role's expectations.

#### Labeling

- Supply an accessible name via the default slot text or `aria-label` — the primitive does not generate one.
- For icon-only or visually empty buttons, `aria-label` is required.
- When `aria-state-key` uses a non-default ARIA attribute (for example `aria-expanded`), make sure the visible state and the chosen attribute carry compatible meaning (`aria-pressed` for toggle, `aria-expanded` for disclosure, etc.).

## Related components

| Component | Relationship |
|---|---|
| `mdc-button` | The styled button built on this primitive. Use it whenever the standard appearance is wanted. |
| `mdc-buttonlink` | Styled navigation that renders an `<a>`. Use for navigations rather than actions. |
| `mdc-toggle` | Form control for binary state. Use instead of a toggled primitive when the state is a form value. |
