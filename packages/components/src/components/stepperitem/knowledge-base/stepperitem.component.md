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
- Use `mdc-stepperitem` `loading` when a step is processing and its completion percentage is unknown, such as generating a staffing plan.
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

For a step that is processing, set `status="loading"`:

```html
<mdc-stepperitem
  status="loading"
  label="Generate staffing plan"
  aria-current="step"
  aria-label="Step 4 of 4, generating staffing plan"
></mdc-stepperitem>
```

### Composition

- Place `mdc-stepperitem` in the default slot of `mdc-stepper`, with an `mdc-stepperconnector` between it and the next item.
- Do not set `orientation` or `variant` here; the parent `mdc-stepper` supplies them through context and overrides local values.

### Content guidance

- Keep `label` concise so the sequence remains easy to scan. In the stacked variant, the item uses the label's natural width when possible, then wraps to a maximum of two lines before showing an ellipsis.
- Write labels as short, parallel names for each stage ("Shipping", "Payment", "Review"), not full sentences.
- Use `help-text` for a brief supporting line, or a concise error message on the error statuses. In the stacked variant, it is clamped independently to two lines.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `status` | Drives the indicator: `completed` shows a check, `current` and `error-current` show a pencil, `not-started` and `error-incomplete` show the `step-number`. The error statuses also surface an error icon by the help text. Set it as the user progresses. |
| `status="loading"` | Shows an indeterminate spinner inset within the outlined step circle. Change status to `completed` when the operation succeeds or `error-current` when it fails; loading cannot be combined with another status. |
| `step-number` | The step's position in the sequence; shown only for `not-started` and `error-incomplete` steps (completed and current show an icon instead). |
| `help-text` | Optional supporting line under the label; on error statuses, use it for the short error message. |
| `disabled` | Marks a step as unreachable and prevents pointer and keyboard activation. Set it on future steps that users cannot open yet in a linear flow. |
| `variant` | Accepts `inline` or `stacked`, but inside `mdc-stepper` the parent context overrides any local value on every update. |

### Limitations

- **Progress is consumer-driven** — the item does not compute its own status or reachability; update `status` and `disabled` as the user moves through the flow.
- **Loading does not disable activation** — a loading step remains interactive unless `disabled` is set. Set `disabled` when the step cannot be opened during processing.
- **Visible label is not enough** — the label omits position and status for screen readers, so provide a full `aria-label` (see Labeling).
- **Variant is context-owned** — a locally set `variant` is overwritten by the parent stepper on every update.
- **Long stacked copy truncates** — stacked labels and helper text each wrap to a maximum of two lines before showing an ellipsis. Shorten the copy or use a vertical stepper when the complete visible text is required.

## Accessibility

### Built-in features

- The host exposes `role="listitem"` so it nests semantically inside the parent stepper list.
- The host reflects `tabindex` so each step joins the tab order; consumers can override per item to implement a roving tabindex.
- `Enter` and `Space` activate an enabled step like a native button, dispatching a `click` event.
- A disabled item ignores pointer and keyboard activation and is removed from the tab order.
- A loading item exposes `aria-busy="true"` on the host and hides its decorative spinner from assistive technologies. Changing to another status removes `aria-busy`.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host element | `role` | `listitem` |
| Host element | `tabindex` | `0` (default; reflects the `tabindex` property) |
| Loading host element | `aria-busy` | `true`; removed for other statuses |
| Disabled host element | `aria-disabled` | `true` |
| Disabled host element | `tabindex` | `-1` |

### Implementation requirements

#### General

- Set `disabled` on every step whose destination is unavailable. In a linear flow, keep future steps disabled until the workflow allows the user to open them.
- Provide an application live region when users need loading, completion, or failure announcements without moving focus; `aria-busy` alone does not announce these changes.

#### Labeling

- Give each item an `aria-label` with its full context — position, label, and status (for example "Step 2 of 3, Payment, current") — since the visible label alone does not convey position or state.
- Set `aria-current="step"` on the single current item (`current`, `loading`, or `error-current`) and remove it from every other item.
- For a loading item, include the operation in its accessible label, such as "Step 4 of 4, generating staffing plan". Update the label when the operation finishes.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-stepper` | The container that holds and coordinates the steps. |
| `mdc-stepperconnector` | The progress line placed between adjacent steps. |
| `mdc-cardbutton` | For a large, clickable content tile that is a single action rather than a step. |
