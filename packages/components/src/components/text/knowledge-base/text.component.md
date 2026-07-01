---
title: Text
summary: Usage, guidelines, and accessibility for the mdc-text component — the typography primitive that renders styled text with a configurable semantic tag.
tier: 3
component: text
---

## Overview

The text component is the typography primitive for the design system. It renders any of the standard text-bearing HTML elements (`p`, `span`, `div`, `small`, `h1`–`h6`) and applies one of the predefined token-driven type styles. Mount the component inside an `mdc-themeprovider` so colour and font tokens resolve correctly.

### When to use

- Use whenever you need a piece of styled text inside any component or page.
- Use to choose the semantic tag (`tagname`) independently from the visual style (`type`), so the heading hierarchy of the page stays correct without forcing a specific size.

### When not to use

- Do not use to render rich interactive controls — wrap text inside the appropriate interactive component instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/text/index.js"; // custom element registration
// or via React wrapper
import { Text } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-themeprovider>
  <mdc-text tagname="h2" type="heading-midsize-bold">Section title</mdc-text>
  <mdc-text type="body-midsize-regular">Body copy goes here.</mdc-text>
</mdc-themeprovider>
```

### Property/Attribute details

- `type` (string, default `'body-midsize-medium'`) — selects the text style. Accepted values:
  - Body: `'body-small-regular'`, `'body-small-medium'`, `'body-small-bold'`, `'body-midsize-regular'`, `'body-midsize-medium'`, `'body-midsize-bold'`, `'body-large-regular'`, `'body-large-medium'`, `'body-large-bold'`, plus the underline variants `'body-small-regular-underline'`, `'body-small-medium-underline'`, `'body-midsize-regular-underline'`, `'body-midsize-medium-underline'`, `'body-large-regular-underline'`, `'body-large-medium-underline'`.
  - Heading: `'heading-small-regular'`, `'heading-small-medium'`, `'heading-small-bold'`, `'heading-midsize-regular'`, `'heading-midsize-medium'`, `'heading-midsize-bold'`, `'heading-large-regular'`, `'heading-large-medium'`, `'heading-large-bold'`, `'heading-xlarge-regular'`, `'heading-xlarge-medium'`, `'heading-xlarge-bold'`.
  - Headline: `'headline-small-light'`, `'headline-small-regular'`.
- `tagname` (string, default `'p'`) — chooses the HTML tag the slotted content is wrapped in. Accepted values: `'h1'`, `'h2'`, `'h3'`, `'h4'`, `'h5'`, `'h6'`, `'p'`, `'small'`, `'span'`, `'div'`. Invalid values fall back to the default `'p'`. The choice of tag does not change the typography — that is driven by `type`.

### Limitations

- The component must be rendered inside an `mdc-themeprovider` for the colour and font tokens it relies on to be defined.

## Accessibility

### Notes

- Choose `tagname` to preserve the semantic heading and document outline expected by assistive technologies, independently of the visual `type`.
- For long content that may be visually truncated, the component reads truncation through its overflow handling — for inline tags (`span`, `small`) the host element itself is the overflow boundary; for block tags the inner element is.
