---
title: Accordion
summary: Usage, guidelines, and accessibility for mdc-accordion — a multi-interactive accordion whose header supports additional controls alongside a dedicated expand/collapse button.
tier: 3
component: accordion
---

## Overview

The accordion delivers large amounts of content in a compact space through progressive disclosure. Each header title gives users a high-level overview so they can decide which sections to read, making information processing and discovery more effective — but collapsed content is easy to miss, so do not rely on users noticing or reading everything included. `mdc-accordion` uses the multi-interactive pattern: only the dedicated expand/collapse button toggles the panel, while other header controls perform their own actions.

### When to use

- When the header needs additional interactive elements — such as buttons, chips, or custom actions — in addition to expand/collapse behaviour.
- When sections are independent, users may not need all content at once, or a space-efficient layout helps reduce page length and scrolling.

### When not to use

- When the header only needs a title and chevron with no other interactive controls. Use `mdc-accordionbutton` instead.
- If a user is likely to read all content, because critical information will hidden by default, and would require an extra click to access.

## Guidelines

### Behavior
- Accordions start collapsed by default so users get a high-level overview before expanding sections.

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
  heading-text="Section title"
  open-button-aria-label="Expand section"
  close-button-aria-label="Collapse section"
>
  Body content goes here.
</mdc-accordion>
```

Use the `leading-controls` and `trailing-controls` slots for icon buttons, chips, or custom header actions. Use the `leading-header-text` slot when header text needs custom markup instead of the `header-text` attribute. The expand/collapse chevron is always present on the dedicated toggle button and cannot be removed.

### Content guidance

- Keep header text concise. Long titles can overlap with slotted controls and reduce scannability.
- Structure panel content with paragraphs and subheadings where appropriate. Use the default body slot for body copy or custom components.

### Property/Attribute details

- **`variant`**: `default` adds visual separation from surrounding content — use in dense or mixed layouts. `borderless` removes borders — use in minimalist layouts such as forms, settings, or inline sections.
- **`size`**: `small` (16px padding) or `large` (24px padding). Expanded panel height grows with content; avoid internal scrolling inside panels.
- **`expanded`**: Defaults to `false` (collapsed). The chevron points down when collapsed and up when expanded.
- **`toggle-position`**: `trailing` (default) places the toggle button at the end of the header; `leading` places it at the start.

### Limitations

- The `shown` event fired by child elements inside the header (e.g. slotted controls) is stopped from bubbling to prevent confusion with the accordion's own `shown` event.
- Panel width follows the parent container and responsive grid; horizontal scrolling inside panels is not supported.
- Screen readers may lose focus when toggling if the accordion is expanded by default on initial render.

## Accessibility

### Built-in features

The component manages expand/collapse state and exposes it to assistive technologies automatically.

#### Internal ARIA managed by the component

- The header text is wrapped in a `role="heading"` element with `aria-level` reflecting the `data-aria-level` property (default H3).
- The toggle button has `aria-expanded` set to the current expanded state.
- The toggle button has `aria-controls` pointing to the body section's `id`.

### Implementation requirements

#### General

- Use Accordion component when you need additional interactive controls (chips, badges, buttons, icons) in the header alongside the expand/collapse behaviour.
- Set `data-aria-level` to match the heading hierarchy of the page context where the accordion is embedded (e.g. `data-aria-level="2"` if the accordion is a second-level heading).

#### Labelling

- **Always** provide both `open-button-aria-label` and `close-button-aria-label`. Without these, screen reader users cannot determine what the toggle button does.
