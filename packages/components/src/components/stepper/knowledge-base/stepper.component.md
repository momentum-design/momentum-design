---
title: Stepper
summary: Usage, guidelines, and accessibility for the mdc-stepper component — the container that coordinates a sequence of steps and connectors into one progress indicator.
tier: 3
component: stepper
---

## Overview

The stepper communicates a user's progress through a multi-step process, showing which steps are complete, which is active, and what remains so people can orient themselves in a longer task. It is the container that coordinates a run of steps and connectors as a single sequence.

### When to use

- Use `mdc-stepper` to show progress through a multi-step process where seeing completed, current, and upcoming steps helps — checkout, onboarding, or a setup wizard.
- Use `mdc-stepper` `horizontal` for short flows of roughly three to six steps with concise labels, typically as a top-of-page progress indicator on wider screens.
- Use `mdc-stepper` `vertical` for longer processes, longer labels, or narrow and mobile layouts where steps read top to bottom.

### When not to use

- Do not use `mdc-stepper` for navigation between unrelated views. Use `mdc-tablist` instead.
- Do not use `mdc-stepper` for a single-step task. Present the content directly instead.
- Do not use `mdc-stepper` for indeterminate or continuous progress with no discrete stages. Use `mdc-progressbar` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/stepper/index.js"; // custom element registration
import "@momentum-design/components/dist/components/stepperitem/index.js";
import "@momentum-design/components/dist/components/stepperconnector/index.js";
// or via React wrapper
import { Stepper, StepperItem, StepperConnector } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-stepper orientation="horizontal" variant="inline" aria-label="Checkout steps">
  <mdc-stepperitem status="completed" step-number="1" label="Shipping" aria-label="Step 1 of 3, Shipping, completed"></mdc-stepperitem>
  <mdc-stepperconnector status="complete"></mdc-stepperconnector>
  <mdc-stepperitem status="current" step-number="2" label="Payment" aria-current="step" aria-label="Step 2 of 3, Payment, current"></mdc-stepperitem>
  <mdc-stepperconnector></mdc-stepperconnector>
  <mdc-stepperitem status="not-started" step-number="3" label="Review" aria-label="Step 3 of 3, Review, not started"></mdc-stepperitem>
</mdc-stepper>
```

### Composition

- Place `mdc-stepperitem` elements in the default slot with an `mdc-stepperconnector` between each adjacent pair, so the progress chain is unbroken.
- Order steps in the DOM in the order users move through them; the sequence is conveyed by source order.
- Set `orientation` and `variant` on `mdc-stepper` only — it propagates both to its children through context, so they should not be set on individual items or connectors.

### Content guidance

- Keep step labels parallel across the sequence — the same part of speech and tense — so the set reads as one coherent process.
- Keep each label short (one or two words); the layout reserves limited room per step and long labels wrap.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `orientation` | Choose `horizontal` (default) for short, top-of-page flows on wide screens; choose `vertical` for long flows, long labels, or narrow layouts. Propagates to all children. |
| `variant` | Choose `inline` (default) to keep the label beside the indicator when vertical space is tight; choose `stacked` to place the label below the indicator for a clearer horizontal rhythm. Propagates to all children. |

### Limitations

- **No focus management** — the stepper does not move focus between steps or manage a roving tabindex. Wire step focus and keyboard flow in the consuming app.
- **No flow enforcement** — it renders state but does not block navigation or validate order; linear versus non-linear behavior is the consumer's responsibility.
- **Fixed stacked width** — `stacked` steps use a fixed width, so long labels wrap. Keep labels to one or two words.

## Accessibility

### Built-in features

- The container exposes `role="list"` so assistive technologies announce the steps as one grouped sequence.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host element | `role` | `list` |

### Implementation requirements

#### Labeling

- Give the host a descriptive name with `aria-label` (for example "Checkout steps") so the sequence is announced meaningfully.
- Set `aria-current="step"` on the single `mdc-stepperitem` that is current, and remove it from all others, so only one step is announced as current.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-stepperitem` | The individual steps placed inside the stepper. |
| `mdc-stepperconnector` | The progress line rendered between adjacent steps. |
| `mdc-tablist` | For switching between parallel views rather than showing sequential progress. |
| `mdc-progressbar` | For continuous or indeterminate progress without discrete steps. |
