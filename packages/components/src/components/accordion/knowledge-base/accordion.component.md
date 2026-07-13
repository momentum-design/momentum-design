---
title: Accordion
summary: Usage, guidelines, and accessibility for the mdc-accordion component — a stacked header/body component whose header holds interactive controls alongside a dedicated expand/collapse button.
tier: 3
component: accordion
---

## Overview

The accordion is a vertically stacked header/body component whose header can hold interactive controls — chips, badges, icon buttons — alongside a dedicated expand/collapse button. Only that button toggles the panel, so the other controls keep their own actions; this "multi-interactive" model is what distinguishes it from `mdc-accordionbutton`, whose entire header is the toggle.

### When to use

- Use `mdc-accordion` when the header needs interactive controls (buttons, interactive chips, icons) in addition to expand/collapse, and those controls must remain independently clickable.
- Use it to conceal secondary or independent content on information-heavy pages, so users get a high-level overview first and open only the sections they need.

### When not to use

- When the whole header should toggle the panel and carries no other interactive elements, use `mdc-accordionbutton` instead (the single-interactive pattern).
- When all content must be visible at once, when collapsing would hide critical information, or when frequent toggling would disrupt the task, use a plain layout instead of an accordion.
- When rendering several related sections that need shared styling and coordinated open/close behavior, wrap them in `mdc-accordiongroup` rather than managing individual accordions.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/accordion/index.js"; // custom element registration
// or via React wrapper
import { Accordion } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-accordion
  header-text="Section title"
  open-button-aria-label="Expand section"
  close-button-aria-label="Collapse section"
>
  Body content goes here.
</mdc-accordion>
```

### Content guidance

- Keep header text concise — it summarizes the panel content. Long titles can collide with header controls (chips, buttons) and reduce scannability.
- The panel accepts paragraphs, subheadings, or your own components via the default slot; structure longer content with subheadings so it stays scannable.

### Property/Attribute details

- `header-text` sets the header label; alternatively slot custom label content into `leading-header-text`.
- `prefix-icon` renders an icon before the header text.
- `leading-controls` and `trailing-controls` slots hold header controls; the toggle button always sits after `trailing-controls` (or before `leading-header` when `toggle-position="leading"`).
- `toggle-position` (`trailing` default, or `leading`) places the expand/collapse button at the end or start of the header.
- `size` (`small` default = 16px padding, `large` = 24px padding) and `variant` (`default` with borders, `borderless` without). When nested in `mdc-accordiongroup`, both are driven by the group: `size` takes the group's `size`, and `variant` takes the group's value (`stacked`, `borderless`, or `contained`) rather than the item's own `default`/`borderless`.
- `disabled` disables the accordion and propagates `disabled` to any elements slotted into `leading-controls` and `trailing-controls`.

### Edge cases

- The accordion dispatches its own `shown` event (React: `onShown`, detail `{ expanded }`) when toggled. `shown` events from slotted header controls are stopped from bubbling so the group and consumers don't mistake them for the accordion toggling.
- The header text does not wrap or truncate reliably and can collide with header controls — trim long titles rather than relying on layout to absorb them.
- When `disabled`, the body is not rendered even if `expanded` is set, and slotted header controls are disabled alongside it.
- Panels have no fixed maximum height and never scroll internally; let vertical scrolling happen at the page or container level.
- The chevron always reflects state — up when expanded, down when collapsed — and cannot be removed or hidden.

### Notes

- `mdc-accordion` extends `mdc-accordionbutton`, adding the header control slots and a dedicated `mdc-button` toggle.

## Accessibility

### Built-in features

The component manages expand/collapse state, reflects it in the chevron (up = expanded, down = collapsed), and exposes it to assistive technologies automatically.

#### Internal ARIA managed by the component

- The header text is wrapped in a `role="heading"` element with `aria-level` reflecting the `data-aria-level` property (default H3).
- The toggle button has `aria-expanded` set to the current expanded state.
- The toggle button has `aria-controls` pointing to the body section's `id`.
- The body section is a `role="region"` labelled by the header text.

### Implementation requirements

#### General

- Set `data-aria-level` to match the heading hierarchy where the accordion is embedded (e.g. `data-aria-level="2"` under an H1 section).
- Any interactive control you slot into the header must carry its own accessible name; the accordion does not label them for you.

#### Labelling

- **Always** provide both `open-button-aria-label` and `close-button-aria-label`. Without them, screen reader users cannot tell what the toggle button does.

### Notes

- Screen readers may lose focus when toggling if the accordion is expanded by default on initial render; prefer a collapsed initial state.

## Related components

- `mdc-accordionbutton` — the single-interactive variant whose entire header toggles the panel; use it when the header has no other interactive controls.
- `mdc-accordiongroup` — a container that coordinates several accordion items with shared `size`/`variant` and single- or multi-open behavior.
