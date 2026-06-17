---
title: ButtonSimple
summary: Usage, guidelines, and accessibility for the mdc-buttonsimple component — an unstyled, form-associated button primitive supplying keyboard, focus, disabled, and toggle semantics.
tier: 3
component: buttonsimple
---

## Overview

The buttonsimple is a low-level button primitive that handles keyboard activation, focus management, disabled/soft-disabled states, form association, and optional toggled state. It does not provide visual styling on its own — consumers wrap or compose it when they need button semantics without the opinionated appearance of `mdc-button`.

### When to use

- Use `mdc-buttonsimple` when you are building a custom button surface (for example a card, list item, or composite control) and need correct keyboard/ARIA semantics without inheriting the visual styling of `mdc-button`.
- Use it inside design-system components that need to behave like buttons but render their own layout (e.g. `mdc-button`, `mdc-cardbutton`, `mdc-listitem` actions).

### When not to use

- Use `mdc-button` when the design calls for the standard visual treatment (variant, color, size, prefix/postfix icons).
- Use `mdc-buttonlink` when the control is a navigation that should render as an anchor.
- Use `mdc-toggle` or `mdc-checkbox` for binary state in forms — they expose the correct form-control semantics and labelling.

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

- Always supply an accessible name (visible text in the default slot or `aria-label`) — the primitive has no built-in label.
- Keep the slotted content focused on the button's action; do not nest focusable controls inside it.

### Property/Attribute details

- `type` — native button behaviour: `button` (default, no implicit action), `submit` (calls the associated form's `requestSubmit()`), `reset` (calls `reset()`). Form association is automatic when the element is placed inside a `<form>`.
- `name` / `value` — submitted as a form-data pair when this button is used to submit the form.
- `size` — numeric size token. Defaults to `32`. Higher-level buttons (e.g. `mdc-button`) validate sizes against their own supported sets; `mdc-buttonsimple` accepts the superset and leaves visual interpretation to the consumer.
- `active` — toggles the button between pressed and unpressed states. While set, the component writes `true`/`false` into the configured ARIA state attribute (default `aria-pressed`). Leave it `undefined` to remove the attribute entirely (i.e. not a toggle button).
- `aria-state-key` — the ARIA attribute(s) toggled by `active`. Defaults to `aria-pressed`; supply a comma-separated list (e.g. `aria-pressed,aria-expanded`) to mirror the active state across multiple attributes.
- `role` — defaults to `button`. Override only when a different role is required for the surrounding context.
- `disabled` — fully disables the button. The host receives `aria-disabled="true"`, tab order is removed (`tabindex="-1"`, the previous value is restored when re-enabled), and click/keyboard handlers are blocked.
- `soft-disabled` — visually disabled but still focusable and clickable. Sets `aria-disabled="true"` without removing the tab stop; consumers must suppress side-effects themselves so the button behaves as disabled.
- `tabindex` — standard tabindex; the primitive saves and restores the consumer-provided value across `disabled` toggles.

### Limitations

- The component ships with no visual styling — consumers (or wrapping components) are responsible for the appearance, hover/focus indicators, and active-state visuals.
- The form-association integration relies on `ElementInternals`; the surrounding page must run in a browser that supports it.
- `aria-state-key` only writes attributes that start with `aria-`; non-ARIA attribute names in the list are ignored.

## Accessibility

### Built-in features

The host carries `role="button"` (overridable) and participates in the page's tab order via the `TabIndexMixin`. The primitive replicates native `<button>` keyboard behaviour: `Enter` activates immediately on keydown (firing `click`) and `Space` activates on keyup after a keydown — the component temporarily adds a `pressed` class during the press so consumers can style the down-state, and clears it on blur if focus is lost mid-press. The default browser action for both keys is prevented so the surrounding page does not scroll on `Space`.

`active` is mirrored into the configured ARIA state attribute(s); by default that is `aria-pressed`, but consumers can broaden it (e.g. `aria-pressed,aria-expanded`) for disclosure-style buttons. Setting `disabled` removes the element from the tab order and marks it `aria-disabled="true"`; setting `soft-disabled` keeps the tab stop but still announces the button as disabled, which is useful when you want to explain *why* the action is unavailable without hiding the control.

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

#### Labelling

- Supply an accessible name via the default slot text or `aria-label` — the primitive does not generate one.
- For icon-only or visually empty buttons, `aria-label` is required.
- When `aria-state-key` uses a non-default ARIA attribute (e.g. `aria-expanded`), make sure the visible state and the chosen attribute carry compatible meaning (`aria-pressed` for toggle, `aria-expanded` for disclosure, etc.).
