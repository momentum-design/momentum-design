---
title: Alert Chip
summary: Usage, guidelines, and accessibility for the mdc-alertchip component — an interactive chip that calls attention to a status with a leading icon and label.
tier: 3
component: alertchip
---

## Overview

The alert chip calls attention to a status or piece of crucial information; its color and leading icon indicate one of five states — `error`, `informational`, `neutral`, `success`, and `warning`. The variant is visual only: it does not announce or read out the alert to assistive technologies on its own.

### When to use

- Use `mdc-alertchip` to surface a short, interactive status — `error`, `success`, `warning`, `informational`, or `neutral` — inline within content.
- Use `mdc-alertchip` with a supportive tooltip when a status needs a brief auxiliary explanation; keep the tooltip supplementary, not required reading.

### When not to use

- Do not use `mdc-alertchip` when the chip should not be clickable or focusable. Use `mdc-staticchip` or `mdc-badge`.
- Do not use `mdc-alertchip` for messaging that needs more length, dedicated actions, or system-level prominence. Use `mdc-toast` or `mdc-banner`.
- Do not use `mdc-alertchip` to filter content or capture user input. Use `mdc-filterchip` or `mdc-inputchip`.
- Do not use `mdc-alertchip` to label non-status content such as categories. Use `mdc-chip` or `mdc-staticchip` — the alert color set is reserved for status and validation to keep status meaning consistent across products.

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

- Limit the label to a maximum of 20 characters, including spaces. Keep labels self-evident and lean on the surrounding UI for context rather than expanding the label.
- When the status must be understood without relying on color, front-load the meaning in the label (see Accessibility) — for example `label="Error: connection lost"`.

### Property/Attribute details

| Option | Intent |
|---|---|
| `variant="neutral"` (default) | Sets the visual tone and the default leading icon for the status (`error`, `success`, `warning`, `informational`, `neutral`). Choose the value that matches the status; the color set is reserved for status meaning. |
| `icon-name` | Overrides the default per-variant icon. Use only when a custom icon communicates the status more clearly. |
| `label` | Visible text and accessible name. Front-load the status ("Error: connection lost") so meaning does not depend on color. |

### Limitations

- **No disabled state** — alert chips have only rest, hover, pressed, and focused states; there is no disabled state. Remove or replace the chip instead of disabling it.
- **Long labels don't wrap** — labels beyond 20 characters make the chip excessively wide and the text does not wrap. Trim the label rather than relying on truncation.
- **Color isn't a status signal** — the variant color and icon do not convey the state to color-blind users, high-contrast modes, or screen readers. Carry the status in the `label`.
- **Icon-only drops the name** — removing the label for visual density leaves no accessible name unless an `aria-label` is supplied (see Labeling).

### Notes

- Alert chip is one member of the broader chip family; shared chip concepts (fixed 24px height, general sizing) apply across the family.
- Built on `mdc-buttonsimple`, and renders `mdc-icon` and `mdc-text` internally.

## Accessibility

### Built-in features

The alert chip behaves as a button: the host exposes `role="button"`, participates in the tab order, and provides standard button keyboard interaction (`Enter`/`Space` activation).

#### Internal ARIA managed by the component

| Element | Attribute  | Value                                                             |
| ------- | ---------- | ---------------------------------------------------------------- |
| Host    | `role`     | `button`                                                         |
| Host    | `tabindex` | `0`; participates in the tab order with `Enter`/`Space` activation |

### Implementation requirements

#### General

- Treat the alert chip as a button when integrating it: ensure the surrounding context makes the action it triggers clear.
- The variant color and icon are visual only and are not announced. If the alert state must be conveyed to assistive technologies, include it in the `label` text (for example `label="Error: connection lost"`) or in surrounding context.
- If a supportive tooltip is attached, make sure its content is available to assistive technologies and does not hide information required to understand the status.

#### Labeling

- Always set a meaningful `label`. The label is the accessible name announced by screen readers.
- When the chip is icon-only (no label) for visual reasons, provide an `aria-label` so screen-reader users still receive a name for the button.

## Related components

| Component | Relationship |
|---|---|
| `mdc-chip` | General interactive label chip for tags or itemizing content when no status is involved. |
| `mdc-staticchip` | Non-interactive label chip; use when the chip should not be focusable or clickable. |
| `mdc-filterchip` | Selectable chip used in groups to refine lists or tables. |
| `mdc-inputchip` | Represents user-entered values with removal and error-validation states. |
| `mdc-badge` | Non-interactive status or count indicator when no focus or click behavior is needed. |
| `mdc-toast` / `mdc-banner` | Higher-prominence status messaging that supports longer content and dedicated actions. |
