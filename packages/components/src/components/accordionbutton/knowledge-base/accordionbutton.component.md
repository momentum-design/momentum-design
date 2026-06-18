---
title: Accordion Button
summary: Usage, guidelines, and accessibility for mdc-accordionbutton — a single-interactive accordion with a fully clickable header and expandable body section.
tier: 3
component: accordionbutton
---

## Overview

The accordion button is a vertically stacked component with a clickable header and an expandable/collapsible body section. It uses the single-interactive pattern: the entire header toggles the panel, with an optional prefix icon, header text, and chevron as a visual state indicator.

### When to use

- When the header does not need additional interactive controls beyond expand/collapse, for a standalone collapsible section.
- When organizing grouped content in a space-efficient format and users may not need all information at once and sections are independent.
- When reducing page length and scrolling and full content is not crucial to read in full.

### When not to use

- When the header needs extra controls such as chips, icon buttons, or custom actions. Use `mdc-accordion` instead.
- When rendering two or more related accordion items with shared styling and coordinated expansion behaviour. Use `mdc-accordiongroup` instead.
- When all content must remain visible at once, when critical information would be hidden by default, or when frequent toggling would disrupt the experience. Do not use.

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

- Keep header text concise. Long titles reduce scannability and can disrupt header layout.
- Structure panel content with paragraphs and subheadings where appropriate. Use the default body slot for body copy or custom components.
- Accordions start collapsed by default so users get a high-level overview before expanding sections.

### Property/Attribute details

- **`variant`**: `default` adds visual separation from surrounding content — use in dense or mixed layouts. `borderless` removes borders — use in minimalist layouts such as forms, settings, or inline sections.
- **`size`**: `small` (16px padding) or `large` (24px padding). Expanded panel height grows with content; avoid internal scrolling inside panels.
- **`expanded`**: Defaults to `false` (collapsed). The chevron points down when collapsed and up when expanded.
- **`toggle-position`**: `trailing` (default) places the chevron at the end of the header; `leading` places it at the start.
- **`prefix-icon`**: Optional icon displayed before the header text.

## Accessibility

### Built-in features

The component manages expand/collapse state and exposes it to assistive technologies automatically.

#### Internal ARIA managed by the component

- The header text is wrapped in a `role="heading"` element with `aria-level` reflecting the `data-aria-level` property (default H3).
- The header button has `aria-expanded` set to the current expanded state.
- The header button has `aria-controls` pointing to the body section's `id`.

### Implementation requirements

#### General

- Set `data-aria-level` to match the heading hierarchy of the page context where the accordion button is embedded (e.g. `data-aria-level="2"` if it acts as a second-level heading).

### Notes

- Screen readers may lose focus when toggling if the accordion button is expanded by default on initial render.
