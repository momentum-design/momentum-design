---
title: Progressbar
summary: Usage, guidelines, and accessibility for the mdc-progressbar component — a determinate, linear progress indicator with optional label, percentage readout, and helper/validation text.
status: draft
tier: 3
component: progressbar
---

## Overview

The progressbar is a determinate, linear progress indicator that visually represents the completion state of an ongoing process (loading, uploading, syncing, etc.). It renders an optional label, an optional helper/validation text, and a coloured bar that fills from 0 to 100 percent.

### When to use

- Use `mdc-progressbar` for a determinate task whose completion percentage is known.
- Use the `default` variant when the progressbar should stand on its own with a label above it and a percentage readout.
- Use the `inline` variant when the progressbar must sit on a single line next to its label (e.g. inside a list row).

### When not to use

- Use `mdc-progressspinner` for a circular determinate indicator (for example to indicate progress in a compact area or to surface a completion/error glyph at 100%).
- Use `mdc-spinner` for an indeterminate "work in progress" state where no percentage is known.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/progressbar/index.js"; // custom element registration
// or via React wrapper
import { Progressbar } from '@momentum-design/components/dist/react';
```

Minimal markup example:

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
  data-aria-label="Synchronisation progress"
></mdc-progressbar>
```

### Property/Attribute details

- `variant` — `default` (label and percentage rendered above the bar, helper text below) or `inline` (label rendered next to the bar on one line, no percentage readout). Default `default`.
- `value` — current progress as a string percentage from `"0"` to `"100"`. Values are clamped to that range; non-numeric values are treated as `0`. Default `"0"`.
- `error` — when `true`, switches the bar to the error visual treatment, fills the bar to 100% width, and forces `help-text-type` to `error`. Default `false`.
- `label` — visible label shown above the bar (default variant) or next to it (inline variant).
- `help-text` — helper/validation text rendered below the bar.
- `help-text-type` — derived automatically: `error` when `error` is `true`, `success` when value reaches 100, otherwise `default`. The matching helper icon is rendered.
- `data-aria-label` — accessible name applied to the bar element (`role="progressbar"`). Required for screen-reader users since the visible label does not provide an accessible name to the role.

## Accessibility

### Built-in features

The bar element is rendered with `role="progressbar"`, `aria-valuemin="0"`, `aria-valuemax="100"`, and `aria-valuenow` reflecting the clamped percentage so assistive technologies announce progress changes as the value updates. The bar's accessible name is supplied from `data-aria-label`. When `value` reaches 100 the helper icon switches to the success state, and when `error` is `true` it switches to the error state — both convey state visually as well as via the underlying validation type.

#### Internal ARIA managed by the component

| Element             | Attribute       | Value                                                |
| ------------------- | --------------- | ---------------------------------------------------- |
| Progress container  | `role`          | `progressbar`                                        |
| Progress container  | `aria-valuemin` | `0`                                                  |
| Progress container  | `aria-valuemax` | `100`                                                |
| Progress container  | `aria-valuenow` | clamped numeric value (`0`–`100`)                    |
| Progress container  | `aria-label`    | mirrors `data-aria-label`                            |

### Implementation requirements

#### Labelling

- Always provide `data-aria-label` describing what the progressbar represents (e.g. `"Upload progress"`) — without it the progressbar has no accessible name.
- Use the `label` property for a visible human-readable label; pair it with `data-aria-label` for the same text when no other context is provided.
