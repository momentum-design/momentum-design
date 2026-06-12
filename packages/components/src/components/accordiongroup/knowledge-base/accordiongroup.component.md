---
title: Accordion Group
summary: Container for multiple accordion sections with shared spacing, visual variants, and expansion behaviour.
status: draft
tier: 3
component: accordiongroup
---

## Overview

An accordion group is a vertically stacked set of accordion sections that users can expand or collapse individually or one at a time. The group applies consistent sizing and visual styling to all child accordions.

### When to use

- Present multiple related sections users can expand individually — the most common accordion pattern.
- Divide content into well-defined, scannable sections such as onboarding steps, checkout flows, settings, FAQs, or dashboards.
- Group sections that are conceptually tied together inside a shared visual container.
- Reduce page length when content is not crucial to read in full.

### When not to use

- All content needs to be visible at once, or critical information must not be hidden by default.
- A single standalone expandable section is enough — use [Accordion](../accordionbutton/knowledge-base/accordionbutton.component.md) or [Accordion](../accordion/knowledge-base/accordion.component.md) directly without a group wrapper.
- Frequent toggling might disrupt the user experience.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/accordiongroup/index.js"; // custom element registration
// or via React wrapper
import { AccordionGroup } from '@momentum-design/components/dist/react';
```

Minimal markup example with simple headers:

```html
<mdc-accordiongroup>
  <mdc-accordionbutton header-text="First section">Content for section one.</mdc-accordionbutton>
  <mdc-accordionbutton header-text="Second section">Content for section two.</mdc-accordionbutton>
</mdc-accordiongroup>
```

Example with multi-interactive accordion children:

```html
<mdc-accordiongroup allow-multiple>
  <mdc-accordion
    header-text="First section"
    open-button-aria-label="Expand first section"
    close-button-aria-label="Collapse first section"
  >
    <mdc-chip slot="leading-controls" label="Step 1"></mdc-chip>
    Content for section one.
  </mdc-accordion>
</mdc-accordiongroup>
```

### Content guidance

- Use [Accordion](../accordionbutton/knowledge-base/accordionbutton.component.md) children when headers are simple and fully clickable.
- Use [Accordion](../accordion/knowledge-base/accordion.component.md) children when headers need additional interactive controls.
- Only `mdc-accordion` and `mdc-accordionbutton` elements in the default slot are managed; other elements are ignored.
- Keep individual section titles concise across the group for consistent scannability.
- Group-level `size` (small: 16px padding, large: 24px padding) is propagated to all child accordions automatically.
- Child panel content should not scroll internally — vertical scrolling belongs at the page or container level.
- Accordions begin collapsed by default, giving users a high-level overview of available sections.

### Property/Attribute details

- **`variant`** — Visual layout applied to all children:
  - `stacked` (default) — Clear separation between items with gap. Ideal for onboarding, checkout, settings, or dashboards where users compare or browse across sections.
  - `borderless` — No borders on items or group. Ideal for dense interfaces (forms, settings panels, FAQs), dialogs, or drawers where layout and typography already provide hierarchy.
  - `contained` — Continuous borders with no gaps inside a shared container. Ideal for grouped FAQs or compact content modules; conserves vertical space.
- **`size`** — `small` or `large` padding applied to all child accordions.
- **`allow-multiple`** — When `false` (default), expanding one section collapses others. When `true`, multiple sections can remain open simultaneously.

### Limitations

- Group `variant` values (`stacked`, `borderless`, `contained`) differ from item-level `variant` values (`default`, `borderless`) on child accordions. The group sets both group layout and propagates item variant where applicable.
- Screen readers may lose focus when toggling if the first accordion is expanded by default on initial render.

### Notes

- Design reference: [Component page](https://www.figma.com/design/MrrkzCQ0YXzUTca2XhesDZ/%F0%9F%93%9C-Momentum-Component-Guidelines?node-id=9827-1137248), [Guidelines frame](https://www.figma.com/design/MrrkzCQ0YXzUTca2XhesDZ/Momentum-Component-Guidelines?node-id=10257-1136161).

## Accessibility

### Built-in features

The group coordinates expansion behaviour across child accordions but does not replace their individual accessibility contracts.

#### Internal ARIA managed by the component

- The group container does not expose expand/collapse semantics itself. ARIA roles and states are managed by each child accordion.

### Implementation requirements

#### General

- Choose the appropriate child component per section: [Accordion](../accordionbutton/knowledge-base/accordionbutton.component.md) for simple headers, [Accordion](../accordion/knowledge-base/accordion.component.md) when header controls require a dedicated expand button.
- When using `mdc-accordion` children, provide `open-button-aria-label` and `close-button-aria-label` on each instance.

#### Labelling

- Each child accordion must supply its own header labelling via `header-text` or slotted header content. The group does not provide a collective accessible name.
