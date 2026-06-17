---
title: Accordion Group
summary: Usage, guidelines, and accessibility for the mdc-accordiongroup component — a container that manages multiple accordion or accordionbutton components as a unified set.
status: draft
tier: 3
component: accordiongroup
---

## Overview

The accordion group is a container that manages multiple accordion or accordionbutton components as a unified set. It controls the visual styling, spacing, and expansion behavior of all child accordions. The group applies consistent `variant` and `size` attributes to all children automatically. By default, expanding one accordion collapses the others (`allow-multiple` is false); set `allow-multiple` to true to allow multiple expanded items.

### When to use

- Use `mdc-accordiongroup` when you need to render two or more related `mdc-accordion` or `mdc-accordionbutton` items with consistent styling, spacing, and coordinated expansion behaviour.

### When not to use

- Use a single `mdc-accordion` or `mdc-accordionbutton` directly when only one collapsible section is needed.

## Guidelines

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

## Accessibility

### Implementation requirements

#### General

- Set the `data-aria-level` of the child accordions to match the heading hierarchy of the surrounding page.

### Notes

- Screen readers may lose focus when toggling if the first accordion is expanded by default on initial render.
