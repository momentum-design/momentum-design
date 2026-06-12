---
title: Accordion
summary: Vertically stacked expandable section with a fully clickable header for toggling one content panel.
status: draft
tier: 3
component: accordionbutton
---

## Overview

An accordion is a vertically stacked header and body that reveals or hides a single section of content. The entire header is clickable to expand or collapse the panel.

### When to use

- Organize content in a space-efficient format when users may not need to read everything at once.
- Conceal secondary details on information-heavy pages with a standalone expandable section.
- Sections are independent and do not need to be read in sequence.
- The header does not contain other interactive elements — only the title, optional prefix icon, and expand/collapse chevron.

### When not to use

- All content needs to be visible at once, or critical information must not be hidden by default.
- Frequent toggling might disrupt the user experience.
- The header needs additional interactive controls (buttons, chips, icon buttons) alongside expand/collapse — use the [Accordion](../accordion/knowledge-base/accordion.component.md) component instead.
- Multiple stacked sections with shared group behaviour — wrap items in an [Accordion Group](../accordiongroup/knowledge-base/accordiongroup.component.md).

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

- Keep header text concise. Long titles can disrupt layout and reduce scannability.
- The optional prefix icon appears before the header text; the chevron indicates collapsed (down) or expanded (up) state and must remain visible.
- Structure body copy with paragraphs and subheadings where appropriate. Insert custom content via the default slot.
- Accordions are available in two sizes: small (16px padding) and large (24px padding). Collapsed height is fixed per size; expanded height grows with content.
- Content should always be fully visible without internal scrolling — vertical scrolling belongs at the page or container level, not inside the panel.
- Width follows the parent container and responsive grid rules; do not allow horizontal scrolling within the panel.
- Accordions begin collapsed by default, giving users a high-level overview before they expand individual sections.

### Property/Attribute details

- **`variant`** — `default` adds borders for visual separation in dense or mixed layouts. `borderless` removes borders for minimalist contexts such as forms, settings, or inline sections.
- **`size`** — `small` (16px padding) or `large` (24px padding). Applied to header and body spacing.
- **`expanded`** — Controls whether the body is visible. Defaults to `false` (collapsed).
- **`toggle-position`** — `trailing` (default) or `leading` placement of the chevron icon.
- **`prefix-icon`** — Optional decorative or semantic icon before the header text.
- **`data-aria-level`** — Heading level for accessibility (default `3`). Match the page heading hierarchy.

### Limitations

- When `disabled` is set, the body is hidden even if `expanded` is true.
- Screen readers may lose focus when toggling if the accordion is expanded by default on initial render.

### Notes

- Design reference: [Component page](https://www.figma.com/design/MrrkzCQ0YXzUTca2XhesDZ/%F0%9F%93%9C-Momentum-Component-Guidelines?node-id=9827-1137248), [Guidelines frame](https://www.figma.com/design/MrrkzCQ0YXzUTca2XhesDZ/Momentum-Component-Guidelines?node-id=10257-1136161).

## Accessibility

### Built-in features

The component manages expand/collapse state and exposes it to assistive technologies automatically. The entire header acts as a single interactive control.

#### Internal ARIA managed by the component

- The header section uses `role="heading"` with `aria-level` reflecting `data-aria-level` (default H3).
- The inner header control uses `role="button"` with `aria-expanded` set to the current state.
- The toggle control has `aria-controls` pointing to the body section's `id`.
- The body region uses `role="region"` with `aria-labelledby` referencing the header text when expanded.

### Implementation requirements

#### General

- Set `data-aria-level` to match the heading hierarchy of the page context where the accordion is embedded (e.g. `data-aria-level="2"` for a second-level heading).
- The header supports keyboard activation via Enter and Space.

#### Labelling

- Provide visible header text via `header-text`, or slotted content in the header text area. The header text is referenced by `aria-labelledby` on the expanded body region.
