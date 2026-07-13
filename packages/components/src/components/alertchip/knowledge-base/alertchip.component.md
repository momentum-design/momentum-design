---
title: Alert Chip
summary: Usage, guidelines, and accessibility for the mdc-alertchip component — an interactive chip that calls attention to a status with a leading icon and label.
tier: 3
component: alertchip
---

## Overview

The alert chip calls attention to a status or piece of crucial information; its color and leading icon indicate one of five states — `error`, `informational`, `neutral`, `success`, and `warning`. The variant is visual only: it does not announce or read out the alert to assistive technologies on its own.

### When to use

- When you need to surface a short, interactive status (error, success, warning, informational, neutral) inline within content, use `mdc-alertchip`.
- When a status needs a brief auxiliary explanation, use `mdc-alertchip` with a supportive tooltip — keep the tooltip supplementary, not required reading.

### When not to use

- When the chip should not be clickable or focusable, use `mdc-staticchip` or `mdc-badge` instead.
- When the message needs more length, dedicated actions, or system-level prominence, use `mdc-toast` or `mdc-banner` instead.
- When you need to filter content or capture user input, use `mdc-filterchip` or `mdc-inputchip` instead.
- When labeling non-status content such as categories, use `mdc-chip` or `mdc-staticchip` instead — the alert color set is reserved for status and validation to keep status meaning consistent across products.

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

- Limit the label text to a **maximum of 20 characters**, including spaces. Keep labels self-evident and lean on the surrounding UI for context rather than expanding the label.
- When the status must be understood without relying on color, front-load the meaning in the label (see Accessibility) — for example `label="Error: connection lost"`.

### Property/Attribute details

- `variant` selects the visual tone and drives the default leading icon. Supported values: `neutral` (default), `error`, `success`, `warning`, `informational`.
- `icon-name` overrides the default per-variant icon when a custom icon is required.

### Edge cases

- **No disabled state.** Unlike label and filter chips, alert chips have only rest, hover, pressed, and focused states — there is no disabled state. Do not attempt to disable an alert chip to take it out of use; remove or replace it instead. _Detect in review: any `disabled` attribute set on `mdc-alertchip`._
- **Long labels.** Labels beyond 20 characters make the chip excessively wide; the component does not wrap text, so trim the label rather than relying on truncation.
- **Color is not a status signal on its own.** For color-blind users, high-contrast modes, or screen readers, the variant color/icon does not convey the state — the label must carry it.
- **Icon-only usage.** Dropping the label for visual density removes the accessible name unless an `aria-label` is supplied (see Labelling).

### Notes

- Alert chip is one member of the broader chip family; shared chip concepts (fixed 24px height, general sizing) apply across the family.
- Built on `mdc-buttonsimple`, and renders `mdc-icon` and `mdc-text` internally.

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
- If a supportive tooltip is attached, make sure its content is available to assistive technologies and does not hide information required to understand the status.

#### Labelling

- Always set a meaningful `label`. The label is the accessible name announced by screen readers.
- When the chip is icon-only (no label) for visual reasons, provide an `aria-label` so screen reader users still receive a name for the button.

## Related components

- `mdc-staticchip` — non-interactive label chip for static info or categories; use it when the chip should not be focusable or clickable.
- `mdc-filterchip` — selectable chip used in groups to refine lists or tables; use it for filtering interactions rather than conveying status.
- `mdc-inputchip` — represents user-entered values (tags, emails) paired with a text field, and supports removal and error-validation states.
- `mdc-chip` — the general interactive chip for labeling or itemizing content when no alert status is involved.
- `mdc-badge` — non-interactive status or count indicator when no focus or click behavior is needed.
- `mdc-toast` / `mdc-banner` — higher-prominence status messaging that supports longer content and dedicated actions.
