---
title: Progressspinner
summary: Usage, guidelines, and accessibility for the mdc-progressspinner component — a determinate, circular progress indicator with success and error end states.
status: draft
tier: 3
component: progressspinner
---

## Overview

The progressspinner is a determinate, circular progress indicator built from two concentric SVG arcs — one representing completed work and one representing remaining work. When the value reaches 100 the spinner is replaced by a check-circle success icon; when the component is in an error state it is replaced by an error icon.

### When to use

- Use `mdc-progressspinner` for a determinate task whose completion percentage is known and where a compact, circular indicator fits better than a linear bar.
- Use it when the final state should be communicated with a clear success or error glyph rather than a filled bar.

### When not to use

- Use `mdc-progressbar` when a linear bar with an explicit percentage readout and label is more appropriate.
- Use `mdc-spinner` for an indeterminate spinner where no percentage is known.

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

### Property/Attribute details

- `value` — current progress as a string percentage from `"0"` to `"100"`. Values are clamped to that range; non-numeric values are treated as `0`. When `value` reaches `100`, the component renders a check-circle success icon instead of the arcs. Default `"0"`.
- `error` — when `true`, the component renders an error icon in place of the arcs. Default `false`.
- `data-aria-label` — accessible name applied to the spinner element (`role="progressbar"`) and to the success/error end-state icons.

## Accessibility

### Built-in features

The spinner element is rendered with `role="progressbar"`, `aria-valuemin="0"`, `aria-valuemax="100"`, and `aria-valuenow` reflecting the clamped percentage. The success and error end-state icons are decorated with `aria-label` from `data-aria-label` so they remain announceable when they replace the spinner.

#### Internal ARIA managed by the component

| Element             | Attribute       | Value                                       |
| ------------------- | --------------- | ------------------------------------------- |
| Spinner container   | `role`          | `progressbar`                               |
| Spinner container   | `aria-valuemin` | `0`                                         |
| Spinner container   | `aria-valuemax` | `100`                                       |
| Spinner container   | `aria-valuenow` | clamped numeric value (`0`–`100`)           |
| Spinner container   | `aria-label`    | mirrors `data-aria-label`                   |
| Success icon (100%) | `aria-label`    | mirrors `data-aria-label`                   |
| Error icon (`error`)| `aria-label`    | mirrors `data-aria-label`                   |

### Implementation requirements

#### Labelling

- Always provide `data-aria-label` describing what is in progress (e.g. `"Loading"`, `"Uploading file"`) — without it the indicator has no accessible name.
