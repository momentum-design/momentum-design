---
title: Stepper Item
summary: Usage, guidelines, and accessibility for the mdc-stepperitem component — a single step inside an mdc-stepper sequence.
status: draft
tier: 3
component: stepperitem
---

## Overview

The stepper item represents a single step inside an `mdc-stepper`. It renders a status indicator (completed checkmark, current pencil, error icon, or step number), a label, and an optional help text line. The component is uncontrolled — consumers drive the `status` of each step.

### When to use

- Use one stepper item per step in a sequenced process, placed inside an `mdc-stepper` with `mdc-stepperconnector` elements between adjacent items.

### When not to use

- Do not use as a standalone clickable card; for selectable cards use `mdc-cardbutton` or similar.
- Do not use outside of `mdc-stepper`, since orientation and variant come from the parent context.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/stepperitem/index.js"; // custom element registration
// or via React wrapper
import { StepperItem } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-stepperitem
  status="current"
  step-number="2"
  label="Profile"
  help-text="Tell us about yourself"
  aria-current="step"
  aria-label="Step 2 of 3, Profile, current"
></mdc-stepperitem>
```

### Property/Attribute details

- `status` (`'completed' | 'current' | 'not-started' | 'error-current' | 'error-incomplete'`, default `'not-started'`):
  - `completed` renders the check icon.
  - `current` and `error-current` render the pencil icon.
  - `not-started` and `error-incomplete` render the `step-number` value (if provided) inside the status badge.
  - The error variants also prepend an error icon next to the help text.
- `variant` (`'inline' | 'stacked'`, default `'inline'`) — placed inside `mdc-stepper`, this value is overwritten by the parent context on every update.
- `label` (string, default `''`) — main step label rendered next to (or below) the status indicator.
- `help-text` (string) — optional supporting text rendered beneath the label.
- `step-number` (number) — numeric indicator displayed inside the status badge for `not-started` and `error-incomplete` statuses.
- `tabindex` (number, default `0`) — the host is focusable by default. Adjust if the consumer manages a different focus strategy.

The component dispatches the bubbling `click`, `keydown`, and `keyup` events. Pressing Enter dispatches a synthetic `click`, releasing Space dispatches a synthetic `click`; both keys apply the `pressed` class while held to reflect the visual press state, and both call `preventDefault()` to avoid scrolling or double-firing.

## Accessibility

### Built-in features

- The host element exposes `role="listitem"` so it nests semantically inside the parent stepper list.
- The component reflects `tabindex` so each step participates in the tab order; consumers can override per item to implement roving tabindex.
- Enter and Space activate the step just like a native button.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host element | `role` | `listitem` |
| Host element | `tabindex` | `0` (default; reflects the `tabindex` property) |

### Implementation requirements

#### Labelling

- Always set `aria-label` on each stepper item with the full context (position, label, status). The visible label alone is not enough for screen reader users to understand where they are in the sequence.
- Set `aria-current="step"` on the single item representing the current step (only valid when `status` is `current` or `error-current`). Remove it from every other item.

### Notes

- Without an explicit `aria-label`, screen readers announce only the visible label text, which omits the step number, total count, and status. Always provide an `aria-label`.
- Only one item in a stepper may carry `aria-current="step"` at a time.
