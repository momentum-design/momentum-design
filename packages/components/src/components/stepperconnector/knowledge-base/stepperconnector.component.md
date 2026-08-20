---
title: Stepper Connector
summary: Usage, guidelines, and accessibility for the mdc-stepperconnector component — the progress line drawn between two steps in an mdc-stepper.
tier: 3
component: stepperconnector
---

## Overview

The stepper connector shows the progress between two adjacent steps, signaling whether the transition from one step to the next has been completed. It reinforces the sense of a continuous path through the sequence.

### When to use

- Use `mdc-stepperconnector` between each pair of adjacent `mdc-stepperitem` elements so the progress chain stays continuous.
- Use `mdc-stepperconnector` `complete` for the segment leading into a completed or current step, and `incomplete` for segments toward steps not yet reached.

### When not to use

- Do not use `mdc-stepperconnector` outside `mdc-stepper`. Its orientation comes from the stepper context and will not follow the group on its own.
- Do not use `mdc-stepperconnector` as a general separator between content. Use `mdc-divider` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/stepperconnector/index.js"; // custom element registration
// or via React wrapper
import { StepperConnector } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-stepper orientation="horizontal">
  <mdc-stepperitem status="completed" step-number="1" label="Shipping"></mdc-stepperitem>
  <mdc-stepperconnector status="complete"></mdc-stepperconnector>
  <mdc-stepperitem status="current" step-number="2" label="Payment" aria-current="step"></mdc-stepperitem>
</mdc-stepper>
```

### Composition

- Place one `mdc-stepperconnector` between each adjacent pair of `mdc-stepperitem` elements inside `mdc-stepper`.
- Do not set `orientation` here; the parent `mdc-stepper` supplies it through context and overrides any local value.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `status` | Choose `complete` for the segment between a completed step and the next completed or current step; choose `incomplete` (default) for segments leading to steps not yet reached. Set it to match the steps it joins. |
| `orientation` | Accepts `horizontal` or `vertical`, but inside `mdc-stepper` the parent context overrides any local value on every update. |

### Limitations

- **Decorative only** — the connector exposes no ARIA state; progress is announced through the `mdc-stepperitem` states and `aria-current`, not the connector.
- **Status is manual** — set `status` to match the steps it joins; it does not derive completion from neighboring items.
- **Orientation is context-owned** — a locally set `orientation` is overwritten by the parent stepper.

## Accessibility

### Built-in features

- The connector is presentational and contributes no semantics of its own; assistive technologies convey progress through the surrounding `mdc-stepperitem` states and `aria-current`.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-stepper` | The container that sets the connector's orientation through context. |
| `mdc-stepperitem` | The steps a connector visually links; they carry the progress semantics. |
| `mdc-divider` | For a general separator between unrelated content rather than steps. |
