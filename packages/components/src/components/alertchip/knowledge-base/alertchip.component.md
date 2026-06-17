---
title: Alert Chip
summary: Usage, guidelines, and accessibility for the mdc-alertchip component — an interactive chip used to represent an alert with a leading icon and label.
status: draft
tier: 3
component: alertchip
---

## Overview

The alert chip is an interactive chip whose color and leading icon indicate one of five visual states — `error`, `informational`, `neutral`, `success`, and `warning`. The variant only changes the visual styling; it does not announce or read out any alert content to assistive technologies on its own.

### When to use

- Use `mdc-alertchip` to surface a short, interactive status (error, success, warning, informational, neutral) inline within content.

### When not to use

- Use a non-interactive status indicator (e.g. `mdc-badge` or `mdc-staticchip`) when the chip should not be clickable or focusable.
- Use `mdc-toast` or `mdc-banner` when the message needs more length, dedicated actions, or system-level prominence.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/alertchip/index.js"; // custom element registration
// or via React wrapper
import { AlertChip } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-alertchip variant="warning" label="Connection unstable"></mdc-alertchip>
```

### Content guidance

- Limit the label text to a **maximum of 20 characters**, including empty spaces to split words.

### Property/Attribute details

- `variant` selects the visual tone and drives the default leading icon. Supported values: `neutral` (default), `error`, `success`, `warning`, `informational`.
- `icon-name` overrides the default per-variant icon when a custom icon is required.

## Accessibility

### Built-in features

The alert chip behaves as a button.

#### Internal ARIA managed by the component

- The host element exposes `role="button"` and participates in tab order like any other button.
- Standard button keyboard interaction (Enter/Space activation) is provided.

### Implementation requirements

#### General

- Treat the alert chip as a button when integrating it: ensure the surrounding context makes the action it triggers clear.
- The variant color/icon is visual only and is not announced. If the alert state must be conveyed to assistive technologies, include the state in the `label` text (e.g. `label="Error: connection lost"`) or in surrounding context.

#### Labelling

- Always set a meaningful `label`. The label is the accessible name announced by screen readers.
- When the chip is icon-only (no label) for visual reasons, provide an `aria-label` so screen reader users still receive a name for the button.
