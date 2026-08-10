---
title: Progressbar
summary: Usage, guidelines, and accessibility for the mdc-progressbar component — a determinate, linear progress indicator with optional label, percentage readout, and helper/validation text.
tier: 3
component: progressbar
---

## Overview

The progressbar shows how far a known, ongoing task has advanced, so users can gauge how much remains and trust the system is still working. It represents determinate progress from 0 to 100 percent, including its completion and error outcomes.

### When to use

- Use `mdc-progressbar` for a determinate task whose completion percentage is known, such as an upload, download, or sync.

### When not to use

- Do not use `mdc-progressbar` for an indeterminate wait where no percentage is known. Use `mdc-spinner` instead.
- Do not use `mdc-progressbar` where a compact circular indicator fits the space better than a full-width bar. Use `mdc-progressspinner` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/progressbar/index.js"; // custom element registration
// or via React wrapper
import { Progressbar } from '@momentum-design/components/dist/react';
```

Default variant:

```html
<mdc-progressbar
  label="Uploading"
  value="42"
  data-aria-label="Upload progress"
></mdc-progressbar>
```

Inline variant with helper text:

```html
<mdc-progressbar
  variant="inline"
  label="Sync"
  value="80"
  help-text="80% complete"
  data-aria-label="Synchronization progress"
></mdc-progressbar>
```

### Composition

- Provide the label through the `label` property, or slot richer label content into the `label` slot; the slot takes precedence when both are set.
- Slot a custom validation icon into the `help-icon` slot; otherwise the icon is derived from the resolved `help-text-type`.

### Content guidance

- Keep `label` short and name the task in progress ("Uploading", "Syncing") rather than the percentage — the percentage renders automatically in the `default` variant.
- Use `help-text` for a brief status or the reason for an error; it appears below the bar in the `default` variant.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `variant` | `default` stacks the label and percentage above the bar with helper text below; `inline` places the label beside the bar on one line with no percentage. Choose `inline` for dense rows. |
| `value` | Current progress as a string percentage `"0"`–`"100"`; out-of-range or non-numeric values clamp to that range (default `"0"`). |
| `error` | When `true`, applies the error treatment, fills the bar, and forces `help-text-type` to `error`. |
| `label` | Visible label for the bar; use the `label` slot instead for richer content. |
| `help-text` | Helper or validation text shown below the bar. |
| `help-text-type` | Derived automatically — `error` on error, `success` at 100, otherwise `default` — with the matching icon. |
| `data-aria-label` | Accessible name for the `progressbar` role; required, since the visible label does not name the role. |

### Limitations

- **No accessible name by default** — the `role="progressbar"` is named only by `data-aria-label`; without it the bar is unlabeled.
- **Determinate only** — the bar is meant to move forward toward completion; driving `value` backward visually regresses and confuses users.
- **String value** — `value` is a string attribute clamped to 0–100; non-numeric input silently becomes `0`.
- **Inline hides percentage** — the `inline` variant shows no percentage readout; use `default` (or `help-text`) when the exact percent must be visible.

## Accessibility

### Built-in features

The bar element is rendered with `role="progressbar"`, `aria-valuemin="0"`, `aria-valuemax="100"`, and `aria-valuenow` reflecting the clamped percentage, so assistive technologies announce progress as the value updates. The bar's accessible name comes from `data-aria-label`. When `value` reaches 100 the helper icon switches to the success state, and when `error` is `true` it switches to the error state, conveying the outcome visually and through the underlying validation type.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Progress container | `role` | `progressbar` |
| Progress container | `aria-valuemin` | `0` |
| Progress container | `aria-valuemax` | `100` |
| Progress container | `aria-valuenow` | Clamped numeric value (`0`–`100`) |
| Progress container | `aria-label` | Mirrors `data-aria-label` |

### Implementation requirements

#### Labeling

- Always provide `data-aria-label` describing what the progressbar represents (e.g. `"Upload progress"`); without it the progressbar has no accessible name.
- Use the `label` property for a visible, human-readable label, and mirror the same text in `data-aria-label` when no other context is present.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-progressspinner` | The circular determinate counterpart for compact areas. |
| `mdc-spinner` | For indeterminate waits where no percentage is known. |
| `mdc-formfieldwrapper` | The label and help-text foundation this component builds on. |
