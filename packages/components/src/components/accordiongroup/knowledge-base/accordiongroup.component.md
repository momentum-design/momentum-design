---
title: Accordion Group
summary: Usage, guidelines, and accessibility for the mdc-accordiongroup component — a wrapper that coordinates multiple accordion items with shared sizing, variants, and single-open behavior.
tier: 3
component: accordiongroup
---

## Overview

`mdc-accordiongroup` is a container that manages several `mdc-accordion` or `mdc-accordionbutton` items as one coordinated set. It applies a shared `size` and `variant` to every child and, by default, keeps only one item open at a time.

### When to use

- Use `mdc-accordiongroup` to render two or more related accordions that should share styling and spacing and coordinate their expansion.
- Use `mdc-accordiongroup` when opening one section should collapse the others, so people focus on a single section at a time.
- Use `mdc-accordiongroup` with `allow-multiple` when several sections may usefully stay open together, such as a settings page people work down in order.

### When not to use

- Do not use `mdc-accordiongroup` for a single collapsible section. Use `mdc-accordion` or `mdc-accordionbutton` directly instead.
- Do not use `mdc-accordiongroup` for content people switch between frequently rather than expanding in place. Use `mdc-tablist` instead.

## Guidelines

### Developer usage

Register the custom element, or import the React wrapper:

```tsx
import "@momentum-design/components/dist/components/accordiongroup/index.js"; // custom element registration
// or via React wrapper
import { AccordionGroup } from '@momentum-design/components/dist/react';
```

Slot two or more accordion items directly into the group:

```html
<mdc-accordiongroup size="small" variant="stacked">
  <mdc-accordionbutton header-text="Section one">Body one</mdc-accordionbutton>
  <mdc-accordionbutton header-text="Section two">Body two</mdc-accordionbutton>
</mdc-accordiongroup>
```

### Content guidance

- The group renders no copy of its own; the visible text lives in the child accordions.
- Keep sibling `header-text` values parallel and scannable so the set reads as one group.

### Property/Attribute details

| Option | Intent |
|---|---|
| `variant="stacked"` (default) | Items separated by a 1.5rem gap. Use for distinct, independent sections. |
| `variant="borderless"` | Removes all borders from the items and the group. Use in minimalist or embedded layouts. |
| `variant="contained"` | Continuous borders with no gaps, grouping items into one visual container. Use when the set reads as a single object. |
| `size="small"` (default) | 16px padding on every child. Default for most contexts. |
| `size="large"` | 24px padding on every child. Use for primary content blocks or larger touch targets. |
| `allow-multiple` | Lets multiple items stay open at once. Defaults to `false` (opening one collapses the others). |

**Note:** `size` and `variant` set here override each child accordion's own values.

### Limitations

- **Only accordion children are managed** — any non-`mdc-accordion` / `mdc-accordionbutton` slotted elements are ignored, neither styled nor coordinated. Slot only accordion items into the group.
- **Group overrides child `size` and `variant`** — set those on the group, not on the individual accordions.
- **Single-open relies on `shown`** — coordination is driven by the child `shown` event: when one item opens, the group collapses any other expanded item (only while `allow-multiple` is `false`).

## Accessibility

### Built-in features

The group coordinates expansion across its items; each child accordion continues to manage its own heading and toggle semantics.

### Implementation requirements

#### General

- Set `data-aria-level` on the child accordions to match the surrounding heading hierarchy. The group does not set the heading level for its children.

### Notes

- Screen readers may lose focus when toggling if the first accordion is expanded by default on initial render; prefer starting all items collapsed unless one section is the primary content.

## Related components

| Component | Relationship |
|---|---|
| `mdc-accordion` | A single accordion whose header can hold interactive controls beside the dedicated toggle button. Slot these as group children. |
| `mdc-accordionbutton` | A single accordion whose entire header toggles the panel. Slot these as group children. |
