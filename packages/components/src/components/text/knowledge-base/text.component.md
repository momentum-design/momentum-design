---
title: Text
summary: Usage, guidelines, and accessibility for the mdc-text component — the typography primitive that renders styled text with a configurable semantic tag.
tier: 3
component: text
---

## Overview

The text component is the typography primitive of the design system. It gives every piece of copy a consistent, token-driven type style while letting the author pick the correct semantic element, so appearance and document structure stay in sync across products.

### When to use

- Use `mdc-text` for any styled text inside a component or page.
- Use `mdc-text` to set the semantic tag (`tagname`) independently of the visual style (`type`), keeping the heading outline correct without forcing a specific size.

### When not to use

- Do not use `mdc-text` to render interactive controls. Use `mdc-button` or `mdc-link` instead.
- Do not use `mdc-text` for iconography or brand artwork. Use `mdc-icon` or `mdc-brandvisual` instead.

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

| Option | Intent |
| --- | --- |
| `type` | The token-driven type style, spanning the `body`, `heading`, and `headline` families across `small`/`midsize`/`large` sizes and `regular`/`medium`/`bold` weights (plus underline `body` variants). Default `body-midsize-medium`. Choose it for the text's visual role — it sets appearance only, never the tag. |
| `tagname` | The rendered HTML element: `p` (default), `h1`–`h6`, `span`, `small`, or `div`. Choose it for correct document semantics, independently of `type`; invalid values fall back to `p`. |

### Limitations

- **Theme provider required** — the color and font tokens the component depends on resolve only inside an `mdc-themeprovider`; outside one the text renders unstyled.
- **Style and semantics are separate** — `type` sets appearance and `tagname` sets semantics, so a heading `type` does not make the element a heading; set `tagname` as well.
- **No built-in line clamping** — the component reports overflow but does not truncate on its own; the consumer applies any clamping.

## Accessibility

### Built-in features

- Renders the semantic element chosen by `tagname`, so the document outline and text semantics come from real HTML rather than styling.
- Exposes its overflow state, so a consumer can surface the full string (for example via a tooltip or `title`) when text is visually truncated.

### Implementation requirements

#### General

- Choose `tagname` to preserve the heading and reading order expected by assistive technologies, independently of the visual `type`.
- When text may be visually truncated, provide the full value through the overflow boundary the component exposes — for inline tags (`span`, `small`) the host element is the boundary; for block tags the inner element is.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-themeprovider` | Required ancestor that supplies the color and font tokens `mdc-text` renders with. |
| `mdc-link` | For inline text that navigates or triggers an action. |
| `mdc-icon` | For a glyph paired alongside text. |
