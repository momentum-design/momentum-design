---
title: Progressspinner
summary: Usage, guidelines, and accessibility for the mdc-progressspinner component — a determinate, circular progress indicator with success and error end states.
tier: 3
component: progressspinner
---

## Overview

The progressspinner shows how far a known task has advanced in a compact, circular form, and resolves to a clear success or error mark when the task finishes. It represents the same determinate 0-to-100 progress as `mdc-progressbar` in spaces where a full-width bar would not fit.

### When to use

- Use `mdc-progressspinner` for a determinate task whose completion percentage is known and where a compact, circular indicator suits the space better than a bar.

### When not to use

- Do not use `mdc-progressspinner` for an indeterminate wait where no percentage is known. Use `mdc-spinner` instead.
- Do not use `mdc-progressspinner` when a labeled bar with a visible percentage is clearer. Use `mdc-progressbar` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/progressspinner/index.js"; // custom element registration
// or via React wrapper
import { Progressspinner } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-progressspinner
  value="60"
  data-aria-label="Loading"
></mdc-progressspinner>
```

Error state:

```html
<mdc-progressspinner
  error
  data-aria-label="Upload failed"
></mdc-progressspinner>
```

Set the diameter with the `--mdc-spinner-size` CSS custom property; there is no size attribute.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `value` | Current progress as a string percentage `"0"`–`"100"` (clamped; non-numeric becomes `0`). At `100` the arcs are replaced by a success check icon. |
| `error` | When `true`, replaces the arcs with an error icon. |
| `data-aria-label` | Accessible name for the `progressbar` role and for the success/error end-state icons; required. |

### Limitations

- **No accessible name by default** — the `role="progressbar"` and the end-state icons are named only by `data-aria-label`; without it the spinner is unlabeled.
- **Bar features disabled** — the label, help text, required indicator, and variants inherited from `mdc-progressbar` are turned off here; use `mdc-progressbar` when you need them.
- **String value** — `value` is a string clamped to 0–100; non-numeric input silently becomes `0`.
- **Sizing via CSS only** — set the diameter with `--mdc-spinner-size`; there is no size attribute.

## Accessibility

### Built-in features

The spinner element is rendered with `role="progressbar"`, `aria-valuemin="0"`, `aria-valuemax="100"`, and `aria-valuenow` reflecting the clamped percentage. The success and error end-state icons carry `aria-label` from `data-aria-label` so they remain announceable when they replace the arcs.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Spinner container | `role` | `progressbar` |
| Spinner container | `aria-valuemin` | `0` |
| Spinner container | `aria-valuemax` | `100` |
| Spinner container | `aria-valuenow` | Clamped numeric value (`0`–`100`) |
| Spinner container | `aria-label` | Mirrors `data-aria-label` |
| Success icon (100%) | `aria-label` | Mirrors `data-aria-label` |
| Error icon (`error`) | `aria-label` | Mirrors `data-aria-label` |

### Implementation requirements

#### Labeling

- Always provide `data-aria-label` describing what is in progress (e.g. `"Loading"`, `"Uploading file"`); without it the indicator has no accessible name.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-progressbar` | The linear determinate counterpart with label, percentage, and helper text. |
| `mdc-spinner` | For indeterminate waits where no percentage is known. |
