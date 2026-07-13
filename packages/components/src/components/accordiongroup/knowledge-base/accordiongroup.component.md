---
title: Accordion Group
summary: Usage, guidelines, and accessibility for the mdc-accordiongroup component — a container that manages multiple accordion or accordionbutton components as a unified set.
tier: 3
component: accordiongroup
---

## Overview

The accordion group is a container that manages multiple `mdc-accordion` or `mdc-accordionbutton` components as a unified set. It applies consistent `variant` and `size` to all children automatically and coordinates their expansion: by default expanding one collapses the others (`allow-multiple` is false), and setting `allow-multiple` keeps several open at once.

### When to use

- When rendering two or more related accordion items that need consistent styling, spacing, and coordinated open/close behavior — for example grouped FAQs, settings sections, or multi-step content — use `mdc-accordiongroup`.

### When not to use

- When only one collapsible section is needed, use a single `mdc-accordion` or `mdc-accordionbutton` directly instead.

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

### Property/Attribute details

- `variant` applies to every child and sets the group's visual grouping:
  - `stacked` (default): 1.5rem gap between items, giving clear visual separation. Good for distinct-content steps (onboarding, checkout) and content-heavy layouts (settings, dashboards).
  - `borderless`: removes borders from the group and its items. Suits minimalist or embedded contexts (forms, FAQs, dialogs, drawers) where layout already conveys hierarchy.
  - `contained`: continuous borders with no gaps, for items that are conceptually tied together (grouped FAQs, compact modules); also conserves vertical space.
- `size` (`small` default = 16px padding, `large` = 24px padding) is applied to all children.
- `allow-multiple` (default `false`): when false, expanding one item collapses the others; when true, multiple items can stay open.
- The group overrides each child's own `size` and `variant`, so set those on the group rather than the items.

### Edge cases

- Elements other than `mdc-accordion`/`mdc-accordionbutton` are ignored — they receive no group styling or coordination.
- With `allow-multiple="false"`, expanding an item automatically collapses any other expanded item in the group.

## Accessibility

### Implementation requirements

#### General

- Set `data-aria-level` on the child accordions to match the heading hierarchy of the surrounding page; the group does not set it for you.

### Notes

- Screen readers may lose focus when toggling if the first accordion is expanded by default on initial render; prefer a collapsed initial state.

## Related components

- `mdc-accordion` — a single multi-interactive item with extra header controls; the group coordinates several of these.
- `mdc-accordionbutton` — a single single-interactive item whose whole header toggles; the group coordinates several of these.
