---
title: Alert Chip
summary: Usage, guidelines, and accessibility for mdc-alertchip — an interactive chip that calls attention to status or crucial information using reserved alert colors and a leading icon.
tier: 3
component: alertchip
---

## Overview

Alert chips call attention to a status or crucial piece of information inline within content. `mdc-alertchip` pairs a short label with a leading icon and one of five alert color treatments — `error`, `informational`, `neutral`, `success`, and `warning` — reserved for conveying status across Momentum products.

### When to use

- To surface a short, interactive status inline — such as errors, warnings, successes, or informational callouts.
- When alert-specific colors and icons should communicate status at a glance alongside a concise label.

### When not to use

- When the chip is purely decorative or read-only with no associated action. Consider `mdc-staticchip` for non-interactive display.
- When the message needs more length, dedicated actions, or system-level prominence. Use `mdc-toast` or `mdc-banner` instead.
- When the chip should toggle a content filter. Use `mdc-filterchip` instead.
- When categorizing content with general-purpose label colors. Use `mdc-chip` or `mdc-staticchip` instead — alert colors are reserved for status and validation.

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
<mdc-alertchip variant="warning" label="Unstable"></mdc-alertchip>
```

### Content guidance

- Keep the `label` short — limit to a maximum of **20 characters** including spaces.
- Include the status in the label when assistive technology users must hear it (e.g. `label="Error: offline"`), because the variant color and icon are not announced on their own.
- Use sentence case for the label.

### Property/Attribute details

- **`variant`**: Selects the visual tone and default leading icon. Supported values: `neutral` (default), `error`, `success`, `warning`, `informational`. These colors should not be used outside of alerts or validation. The variant is visual only and is not announced as a separate status by assistive technologies.
- **`icon-name`**: Overrides the default per-variant icon when a custom icon is required.

An alert chip may have an `mdc-tooltip` associated with it when supplementary detail is needed.

### Limitations

- Fixed at 24px height; width grows with the label. Only one size is available.
- Long labels are visually truncated with ellipsis.

## Accessibility

### Built-in features

The alert chip behaves as a button.

#### Internal ARIA managed by the component

- The host element exposes `role="button"` and participates in tab order like any other button.
- Standard button keyboard interaction (`Enter`/`Space` activation) is provided.

### Implementation requirements

#### General

- Treat the alert chip as a button when integrating it: ensure the surrounding context makes the action it triggers clear.
- The variant color and icon are visual only and are not announced. If the alert state must be conveyed to assistive technologies, include the state in the `label` text or in surrounding context.

#### Labelling

- Always set a meaningful `label`. The label is the accessible name announced by screen readers.
- When the chip is icon-only (no label) for visual reasons, provide an `aria-label` so screen reader users still receive a name for the button.
