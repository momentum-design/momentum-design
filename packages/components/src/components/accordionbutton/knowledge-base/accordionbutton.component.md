---
title: Accordion Button
summary: Usage, guidelines, and accessibility for the mdc-accordionbutton component — a vertically stacked header/body component whose entire header toggles the panel.
tier: 3
component: accordionbutton
---

## Overview

The accordion button is a vertically stacked header/body component whose entire header toggles the panel — the "single-interactive" pattern. The header shows an optional prefix icon, header text (default heading level H3), and a chevron indicating state; the body holds any content via the default slot.

### When to use

- Use `mdc-accordionbutton` when the whole header should expand or collapse the panel and the header carries no other interactive elements.
- Use it to organize independent, non-sequential content compactly, so users can scan headers and open only what they need.

### When not to use

- When the header needs interactive controls (chips, buttons, icons) alongside toggling, use `mdc-accordion` instead — only its dedicated button toggles the panel.
- When all content must stay visible, when collapsing would bury critical information, or when frequent toggling would disrupt the task, avoid an accordion.
- When rendering several related sections that need shared styling and coordinated open/close, wrap them in `mdc-accordiongroup`.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/accordionbutton/index.js"; // custom element registration
// or via React wrapper
import { AccordionButton } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-accordionbutton header-text="Section title">
  Body content goes here.
</mdc-accordionbutton>
```

### Content guidance

- Keep `header-text` concise and descriptive of the panel; overly long titles reduce scannability.
- The body accepts paragraphs, subheadings, or your own components via the default slot.

### Property/Attribute details

- `variant`: `default` (bordered — use where visual separation matters, e.g. dense or mixed layouts) or `borderless` (use in minimalist or embedded contexts such as forms, settings, and inline sections). When placed inside `mdc-accordiongroup`, `variant` is driven by the group and takes the group's values (`stacked`, `borderless`, or `contained`) rather than being set on the item directly.
- `size`: `small` (16px padding, default) or `large` (24px padding). Collapsed height is fixed per size; expanded height grows with content.
- `toggle-position`: `trailing` (default) or `leading`, placing the chevron at the end or start of the header.
- `data-aria-level` sets the heading level (default 3).
- `expanded` (default `false`) controls initial visibility.
- `prefix-icon` renders an optional icon before the header text.
- `disabled` prevents toggling.

### Edge cases

- Long header text does not wrap or truncate reliably — trim it rather than relying on layout.
- When `disabled`, the body is not rendered even if `expanded` is set to `true`.
- Panels have no fixed maximum height and never scroll internally; let scrolling happen at the page or container level.
- The chevron always reflects state — up when expanded, down when collapsed — and cannot be hidden.

## Accessibility

### Built-in features

The whole header is a single keyboard-focusable control: Enter and Space toggle it, and the component exposes the expanded state to assistive technologies.

#### Internal ARIA managed by the component

- The header is a `role="heading"` element with `aria-level` from `data-aria-level`, containing a `role="button"` element with `aria-expanded` and `aria-controls` pointing to the body.
- The body section is a `role="region"` labelled by the header text.
- Setting `disabled` also sets `aria-disabled` on the host.

### Implementation requirements

#### General

- Set `data-aria-level` to match the page heading hierarchy (e.g. `data-aria-level="2"` when the accordion sits under an H1 section).

#### Labelling

- Provide a meaningful `header-text`; it is the accessible name of the toggle button announced by screen readers.

### Notes

- Screen readers may lose focus when toggling if the accordion button is expanded by default on initial render; prefer a collapsed initial state.

## Related components

- `mdc-accordion` — the multi-interactive variant that supports extra header controls (chips, buttons); only its dedicated button toggles the panel.
- `mdc-accordiongroup` — a container that coordinates several accordion items with shared styling and open/close behavior.
