---
title: Stepper Item
summary: Usage, guidelines, and accessibility for the mdc-stepperitem component — a single step within an mdc-stepper that shows its place and state in the sequence.
tier: 3
component: stepperitem
---

## Overview

The stepper item represents one step within a stepper and communicates that step's place in the sequence and its state — complete, current, upcoming, or in error. It gives users a scannable marker for each stage of a multi-step task.

### When to use

- Use `mdc-stepperitem` for each stage of an `mdc-stepper` sequence, one item per step.
- Use `mdc-stepperitem` `completed`, `current`, and `not-started` to reflect where the user is in the flow so status reads at a glance.
- Use `mdc-stepperitem` `error-current` or `error-incomplete` to flag a step with unresolved problems the user must fix before finishing.

### When not to use

- Do not use `mdc-stepperitem` outside `mdc-stepper`. It reads orientation and variant from the stepper context and will not lay out correctly on its own.
- Do not use `mdc-stepperitem` as a general clickable card or tile. Use `mdc-cardbutton` instead.
- Do not use `mdc-stepperitem` to link between unrelated pages. Use `mdc-tablist` or a link instead.

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
  label="Payment"
  help-text="Enter your card details"
  aria-current="step"
  aria-label="Step 2 of 3, Payment, current"
></mdc-stepperitem>
```

### Composition

- Place `mdc-stepperitem` in the default slot of `mdc-stepper`, with an `mdc-stepperconnector` between it and the next item.
- Do not set `orientation` or `variant` here; the parent `mdc-stepper` supplies them through context and overrides local values.

### Content guidance

- Keep `label` to one or two words so it fits the step's limited width without wrapping.
- Write labels as short, parallel names for each stage ("Shipping", "Payment", "Review"), not full sentences.
- Use `help-text` for a brief supporting line, or a concise error message on the error statuses — keep it to a phrase.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `status` | Drives the indicator: `completed` shows a check, `current` and `error-current` show a pencil, `not-started` and `error-incomplete` show the `step-number`. The error statuses also surface an error icon by the help text. Set it as the user progresses. |
| `step-number` | The step's position in the sequence; shown only for `not-started` and `error-incomplete` steps (completed and current show an icon instead). |
| `help-text` | Optional supporting line under the label; on error statuses, use it for the short error message. |
| `variant` | Accepts `inline` or `stacked`, but inside `mdc-stepper` the parent context overrides any local value on every update. |

### Limitations

- **Status is consumer-driven** — the item does not compute its own state; set `status` as the user moves through the flow.
- **Visible label is not enough** — the label omits position and status for screen readers, so provide a full `aria-label` (see Labeling).
- **Variant is context-owned** — a locally set `variant` is overwritten by the parent stepper on every update.

## Accessibility

### Built-in features

- The host exposes `role="listitem"` so it nests semantically inside the parent stepper list.
- The host reflects `tabindex` so each step joins the tab order; consumers can override per item to implement a roving tabindex.
- `Enter` and `Space` activate the step like a native button, dispatching a `click` event.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host element | `role` | `listitem` |
| Host element | `tabindex` | `0` (default; reflects the `tabindex` property) |

### Implementation requirements

#### Labeling

- Give each item an `aria-label` with its full context — position, label, and status (for example "Step 2 of 3, Payment, current") — since the visible label alone does not convey position or state.
- Set `aria-current="step"` on the single current item (only when `status` is `current` or `error-current`) and remove it from every other item.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-stepper` | The container that holds and coordinates the steps. |
| `mdc-stepperconnector` | The progress line placed between adjacent steps. |
| `mdc-cardbutton` | For a large, clickable content tile that is a single action rather than a step. |
