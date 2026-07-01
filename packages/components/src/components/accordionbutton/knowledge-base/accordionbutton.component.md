---
title: Accordion Button
summary: Usage, guidelines, and accessibility for the mdc-accordionbutton component — a vertically stacked component with a fully clickable header and an expandable/collapsible body section.
tier: 3
component: accordionbutton
---

## Overview

The accordion button is a vertically stacked component with a clickable header and an expandable/collapsible body section. The entire header is clickable to toggle the visibility of the body content. The header contains an optional prefix icon, header text (default H3, customizable via `data-aria-level`), and an expand/collapse arrow icon as visual indicator. The body contains a default slot for any content. The component supports different border styles through the `variant` attribute and different spacing through the `size` attribute, and can be disabled to prevent the header from being clickable.

### When to use

- Use `mdc-accordionbutton` for simple clickable headers without additional controls.

### When not to use

- Use `mdc-accordion` instead if you need extra controls (chips, badges, icons) in the header itself.

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

## Accessibility

### Implementation requirements

#### General

- Adjust `data-aria-level` based on the heading hierarchy in your page (e.g., `data-aria-level="2"` if the accordion button is a second-level heading).

### Notes

- Screen readers may lose focus when toggling if the accordion button is expanded by default on initial render.
