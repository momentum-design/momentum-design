---
title: Accordion
summary: Usage, guidelines, and accessibility for the mdc-accordion component — a vertically stacked header/body component with dedicated expand/collapse controls.
tier: 3
component: accordion
---

## Overview

The accordion is a vertically stacked component with a header and an expandable/collapsible body section. The header displays an optional prefix icon, header text, optional leading and trailing control slots, and a dedicated expand/collapse button. Unlike `mdc-accordionbutton`, only the expand/collapse button is interactive — the rest of the header is not clickable.

### When to use

- Use `mdc-accordion` when you need additional interactive controls (chips, badges, buttons, icons) in the header alongside the expand/collapse behaviour.

### When not to use

- Use `mdc-accordionbutton` instead when you only need a simple clickable header without extra controls in the header row.

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
  heading-text="Section title"
  open-button-aria-label="Expand section"
  close-button-aria-label="Collapse section"
>
  Body content goes here.
</mdc-accordion>
```

### Content guidance

- Keep header text concise — the heading communicates the topic of the body content.

### Limitations

- The `shown` event fired by child elements inside the header (e.g. slotted controls) is stopped from bubbling to prevent confusion with the accordion's own `shown` event.
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
