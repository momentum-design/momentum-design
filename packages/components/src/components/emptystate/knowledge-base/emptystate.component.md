---
title: Empty state
summary: Usage, guidelines, and accessibility for the `mdc-emptystate` component — a presentation for empty views with descriptive text and context-appropriate headings, illustrations, or actions.
tier: 3
component: emptystate
---

## Overview

The `mdc-emptystate` gives people context when a view has no content and helps them decide what to do next. It supports first-use views, empty collections, and searches or filters that return no results.

### When to use

- Use `mdc-emptystate` when a collection is empty and people need context or a next step.
- Use `mdc-emptystate` when filters or a search query leave a view without results; explain how to adjust the query or filters when that helps.
- Use `mdc-emptystate` for first-use views that can guide people toward creating or adding content.

### When not to use

- Do not use `mdc-emptystate` to represent content that is still loading. Use `mdc-skeleton` when the content layout is known or `mdc-spinner` when it is not.
- Do not use `mdc-emptystate` for a short status beside a control. Use `mdc-statusmessage` instead.

## Guidelines

### Developer usage

Import and use the component through its React wrapper or directly as a custom element:

```tsx
import '@momentum-design/components/dist/components/emptystate/index.js'; // custom element registration
// or via React wrapper
import { EmptyState } from '@momentum-design/components/dist/react';
```

```html
<mdc-emptystate heading="Your inbox is clear" description="New messages will appear here.">
  <mdc-button slot="actions">Compose message</mdc-button>
</mdc-emptystate>
```

### Composition

- Place an optional illustration or icon in the `illustration` slot. An `mdc-illustration` needs an ancestor `mdc-illustrationprovider`; an `mdc-icon` does not.
- Use the `heading` property for plain text headings, or the `heading` slot when the title needs rich content such as an inline decorative icon. Slotted heading content takes precedence over the property.
- Place one or more action controls in the `actions` slot. Use controls such as `mdc-button` or `mdc-link` so the available next step is keyboard accessible.
- Always set `description` to explain the empty state and the next step. Add a heading for first-use or empty collections; omit it for search or filter results when a title would repeat the description.

### Content guidance

- For first-use and empty collections, use a descriptive, situation-specific heading and a brief explanation or encouragement. Avoid starting the heading with “No”; explain what is happening and what the person can do next.
- Keep the heading short and easy to scan. Use the description for supporting context.
- For search or filter results, omit a redundant heading and use the description to suggest changing the search or clearing filters.
- Keep the description focused on the purpose of the empty view. Use the action control’s label to say what it does.

### Property/Attribute details

| Option | Intent |
|---|---|
| `layout="vertical"` (default) | Places the illustration above the text and actions. Use for a centered empty view or when the available width is limited. |
| `layout="horizontal"` | Places the illustration beside the text and actions. Use when a wider content area supports a side-by-side presentation. |
| `size="medium"` (default) | Uses the standard content width and illustration size. Use for most empty views. |
| `size="large"` | Gives the illustration and content more room. Use when the design calls for a larger treatment, such as a page-level empty view. |
| `heading-tag-name="h2"` (default) | Renders the heading as a level-two heading. Set a different supported tag to match the page outline; use `span` when the title should not create a heading. |

### Limitations

- **No live announcement** — the component does not announce content changes when it appears dynamically. Announce the changed state through the surrounding view when screen-reader users need to know it appeared.
- **Illustration provider required** — a slotted `mdc-illustration` cannot load without an ancestor `mdc-illustrationprovider`. Add the provider or use an `mdc-icon` instead.

## Accessibility

### Built-in features

When the `heading` property is supplied, the component renders it with the configured heading tag; the default is `h2`. For the `heading` slot, provide appropriate heading semantics in the slotted content. The component does not add a landmark role to its host, and it does not manage focus for slotted actions.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
|---|---|---|
| Host | `role` | None set by the component |

### Implementation requirements

#### General

- When using a heading, choose `heading-tag-name` to fit the surrounding page structure. The default `h2` may need to change when the empty state appears at a different level in the page.
- Keep actions operable with a keyboard and in a logical focus order; the component leaves their interaction behavior to the slotted controls.

#### Labeling

- Make the description understandable without relying on the illustration. When a heading is present, make sure it and the description complement each other. If the illustration adds information that the text does not convey, give the slotted illustration an accessible name; leave it decorative when it adds no unique information.

## Related components

| Component | Relationship |
|---|---|
| `mdc-illustration` | Optional visual context in the `illustration` slot; it must be inside an `mdc-illustrationprovider`. |
| `mdc-button` / `mdc-link` | Place the primary next step or navigation action in the `actions` slot. |
| `mdc-skeleton` / `mdc-spinner` | Show pending content before deciding that the view is empty. |
