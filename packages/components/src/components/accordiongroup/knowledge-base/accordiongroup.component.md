---
title: Accordion Group
summary: Usage, guidelines, and accessibility for the mdc-accordiongroup component — a container that manages multiple accordion or accordionbutton components as a unified set.
tier: 3
component: accordiongroup
---

## Overview

The accordion group is a container for multiple `mdc-accordion` or `mdc-accordionbutton` items stacked vertically. It applies consistent `variant` and `size` to all children and coordinates expansion behaviour across the set.

### When to use

- When presenting two or more related collapsible sections that users can expand individually.
- When clear visual separation between items matters — for example onboarding flows, checkout steps, settings, dashboards, or FAQs.
- When sections are independent and do not need to be read in sequence.

### When not to use

- When only one collapsible section is needed. Use a single `mdc-accordion` or `mdc-accordionbutton`.

## Guidelines

### Behavior
By default, expanding one accordion collapses the others (`allow-multiple` is false); set `allow-multiple` to true to allow multiple expanded items.

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/accordiongroup/index.js"; // custom element registration
// or via React wrapper
import { AccordionGroup } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-accordiongroup>
  <mdc-accordionbutton header-text="Section one">Body one</mdc-accordionbutton>
  <mdc-accordionbutton header-text="Section two">Body two</mdc-accordionbutton>
</mdc-accordiongroup>
```

### Content guidance

- Only `mdc-accordion` and `mdc-accordionbutton` elements are managed by the group; any other slotted elements are ignored.
- Keep child header text concise so items remain scannable when stacked.

### Property/Attribute details

- **`variant`**: Applied to all child items.
  - `stacked` (default): Items have clear visual separation with spacing between them. Use when users need to compare or browse across multiple items, or when structure aids clarity in content-heavy layouts.
  - `borderless`: Removes borders from items and the group. Use in minimalist or dense interfaces such as forms, settings panels, FAQs, dialogs, or drawers where borders add visual weight.
  - `contained`: Items share a continuous bordered container with no gaps. Use when sections are conceptually grouped — such as grouped FAQs or compact modules — and vertical space should be conserved.
- **`size`**: `small` (16px padding) or `large` (24px padding), applied to all child items.
- **`allow-multiple`**: Defaults to `false`, so expanding one item collapses the others. Set to `true` to allow multiple expanded items simultaneously.

### Limitations

- Panel width follows the parent container and responsive grid; horizontal scrolling inside panels is not supported.
- Expanded panel height grows with content; scrolling should occur at the page or container level, not within individual panels.

## Accessibility

### Implementation requirements

#### General

- Set the `data-aria-level` of child accordions to match the heading hierarchy of the surrounding page.

### Notes

- Screen readers may lose focus when toggling if the first accordion is expanded by default on initial render.
