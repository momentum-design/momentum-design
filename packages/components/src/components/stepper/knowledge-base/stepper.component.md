---
title: Stepper
summary: Usage, guidelines, and accessibility for the mdc-stepper component — the container that orchestrates a sequence of steps and their connectors.
tier: 3
component: stepper
---

## Overview

The stepper is the container component that arranges a sequence of `mdc-stepperitem` elements interleaved with `mdc-stepperconnector` elements. It provides the shared orientation and variant context that the items and connectors read so they render consistently with the group.

### When to use

- Use to communicate progress through a multi-step linear process (e.g. an onboarding flow, a checkout, a wizard).
- Use horizontally for top-of-page progress indicators and vertically when the steps need richer help text alongside each entry.

### When not to use

- Do not use for non-sequential navigation between unrelated views — use `mdc-tablist` or another navigation pattern instead.
- Do not use when there is only one step.

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
<mdc-stepper orientation="horizontal" variant="inline">
  <mdc-stepperitem status="completed" step-number="1" label="Account" aria-label="Step 1, Account, completed"></mdc-stepperitem>
  <mdc-stepperconnector status="complete"></mdc-stepperconnector>
  <mdc-stepperitem status="current" step-number="2" label="Profile" aria-current="step" aria-label="Step 2, Profile, current"></mdc-stepperitem>
  <mdc-stepperconnector></mdc-stepperconnector>
  <mdc-stepperitem status="not-started" step-number="3" label="Review" aria-label="Step 3, Review, not started"></mdc-stepperitem>
</mdc-stepper>
```

### Property/Attribute details

- `orientation` (`'horizontal' | 'vertical'`, default `'horizontal'`) — propagates to every child `mdc-stepperitem` and `mdc-stepperconnector` through the stepper context, so children automatically follow the group's layout.
- `variant` (`'inline' | 'stacked'`, default `'inline'`) — propagates to every child `mdc-stepperitem` through the stepper context, controlling whether label and help text sit beside or below the status indicator.

## Accessibility

### Built-in features

- The container element exposes `role="list"` so assistive technologies announce the steps as a grouped sequence.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host element | `role` | `list` |

### Implementation requirements

#### Labelling

- Provide a descriptive label on the host (for example via `aria-label`) so the list is announced with a meaningful name such as "Checkout steps".
- Set `aria-current="step"` on the single `mdc-stepperitem` representing the current step. Remove it from all other steps so only one item is announced as current at a time.

### Notes

- The stepper does not move focus between steps automatically. Manage focus and selection on the consumer side when steps are interactive.
