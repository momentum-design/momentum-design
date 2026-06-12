---
title: Accordion
summary: Expandable section with a dedicated expand control and optional interactive header elements such as buttons, chips, or icons.
status: draft
tier: 3
component: accordion
---

## Overview

An accordion is a vertically stacked header and body that reveals or hides a single section of content. Only the dedicated expand/collapse control toggles the panel — other interactive elements in the header perform their own actions.

### When to use

- Organize content in a space-efficient format when users may not need to read everything at once.
- The header needs additional interactive controls such as icon buttons, chips, or custom actions alongside expand/collapse.
- Sections are independent and do not need to be read in sequence.

### When not to use

- All content needs to be visible at once, or critical information must not be hidden by default.
- Frequent toggling might disrupt the user experience.
- The header only needs a simple clickable title without extra controls — use the [Accordion](../accordionbutton/knowledge-base/accordionbutton.component.md) component with a fully clickable header instead.
- Multiple stacked sections with shared group behaviour — wrap items in an [Accordion Group](../accordiongroup/knowledge-base/accordiongroup.component.md).

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
  header-text="Section title"
  open-button-aria-label="Expand section"
  close-button-aria-label="Collapse section"
>
  Body content goes here.
</mdc-accordion>
```

Example with header controls:

```html
<mdc-accordion
  header-text="Section title"
  open-button-aria-label="Expand section"
  close-button-aria-label="Collapse section"
>
  <mdc-chip slot="leading-controls" label="Status"></mdc-chip>
  <mdc-button slot="trailing-controls" variant="tertiary" icon-only prefix-icon="settings-bold"></mdc-button>
  Body content goes here.
</mdc-accordion>
```

### Content guidance

- Keep header text concise. Long titles may overlap with slotted controls (buttons, icons, chips), disrupting layout and scannability.
- Use icon buttons in `leading-controls` or `trailing-controls` slots for supplementary actions (e.g. drag handle, settings).
- Use chips in header slots to display status, count, or type labels — interactive or non-interactive.
- Use `leading-controls` and `trailing-controls` slots for custom header content when specific objects or actions are required.
- The chevron on the dedicated expand/collapse button indicates state (down = collapsed, up = expanded) and must remain visible.
- Structure body copy with paragraphs and subheadings where appropriate, or insert custom content via the default slot.
- Accordions are available in two sizes: small (16px padding) and large (24px padding). Collapsed height is fixed per size; expanded height grows with content.
- Content should always be fully visible without internal scrolling — vertical scrolling belongs at the page or container level, not inside the panel.
- Width follows the parent container and responsive grid rules; do not allow horizontal scrolling within the panel.
- Accordions begin collapsed by default, giving users a high-level overview before they expand individual sections.

### Property/Attribute details

- **`variant`** — `default` adds borders for visual separation in dense or mixed layouts. `borderless` removes borders for minimalist contexts such as forms, settings, or inline sections.
- **`size`** — `small` (16px padding) or `large` (24px padding).
- **`expanded`** — Controls whether the body is visible. Defaults to `false` (collapsed).
- **`toggle-position`** — `trailing` (default) or `leading` placement of the expand/collapse button.
- **`prefix-icon`** — Optional icon before the header text.
- **`open-button-aria-label`** / **`close-button-aria-label`** — Required accessible names for the expand/collapse button in collapsed and expanded states.
- **`data-aria-level`** — Heading level for the header text (default `3`). Match the page heading hierarchy.

### Limitations

- The `shown` event fired by child elements inside the header (e.g. slotted controls) is stopped from bubbling to prevent confusion with the accordion's own `shown` event.
- When `disabled` is set, slotted header controls inherit the disabled state.
- When `disabled` is set, the body is hidden even if `expanded` is true.
- Screen readers may lose focus when toggling if the accordion is expanded by default on initial render.

### Notes

- Design reference: [Component page](https://www.figma.com/design/MrrkzCQ0YXzUTca2XhesDZ/%F0%9F%93%9C-Momentum-Component-Guidelines?node-id=9827-1137248), [Guidelines frame](https://www.figma.com/design/MrrkzCQ0YXzUTca2XhesDZ/Momentum-Component-Guidelines?node-id=10257-1136161).

## Accessibility

### Built-in features

The component manages expand/collapse state and exposes it to assistive technologies automatically. Only the dedicated toggle button expands or collapses the panel.

#### Internal ARIA managed by the component

- The header text is wrapped in a `role="heading"` element with `aria-level` reflecting `data-aria-level` (default H3).
- The toggle button has `aria-expanded` set to the current expanded state.
- The toggle button has `aria-controls` pointing to the body section's `id`.

### Implementation requirements

#### General

- Set `data-aria-level` to match the heading hierarchy of the page context where the accordion is embedded (e.g. `data-aria-level="2"` for a second-level heading).

#### Labelling

- **Always** provide both `open-button-aria-label` and `close-button-aria-label`. Without these, screen reader users cannot determine what the toggle button does.
