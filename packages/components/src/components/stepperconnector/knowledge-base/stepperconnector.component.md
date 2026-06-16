---
title: Stepper Connector
summary: Usage, guidelines, and accessibility for the mdc-stepperconnector component — the visual line drawn between two stepper items.
status: draft
tier: 3
component: stepperconnector
---

## Overview

The stepper connector is the decorative line drawn between two `mdc-stepperitem` elements inside an `mdc-stepper`. Its colour reflects whether the connection between the two steps is complete or incomplete.

### When to use

- Place between every pair of adjacent `mdc-stepperitem` elements so the visual progress chain is unbroken.

### When not to use

- Do not use outside of an `mdc-stepper` — without the parent context the orientation will not follow the group.
- Do not use as a generic divider; use a divider component instead.

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
  <mdc-stepperitem status="completed" step-number="1" label="One"></mdc-stepperitem>
  <mdc-stepperconnector status="complete"></mdc-stepperconnector>
  <mdc-stepperitem status="current" step-number="2" label="Two" aria-current="step"></mdc-stepperitem>
</mdc-stepper>
```

### Property/Attribute details

- `status` (`'complete' | 'incomplete'`, default `'incomplete'`) — `'complete'` renders the connector with the completed colour, indicating the user has passed this transition; `'incomplete'` renders the muted colour.
- `orientation` (`'horizontal' | 'vertical'`, default `'horizontal'`) — sets the connector direction. When the connector is placed inside an `mdc-stepper`, the parent's `orientation` is read from context and overrides any locally set value on every update.

## Accessibility

### Notes

- The connector is purely decorative and does not expose ARIA state. Convey progress through the `status` and `aria-current` attributes on the surrounding `mdc-stepperitem` elements.
