---
title: Responsivesettingsprovider
summary: Usage and guidelines for the mdc-responsivesettingsprovider component — a provider supplying responsive context (media type, popover positioning, fullscreen dialog) to descendants.
tier: 3
component: responsivesettingsprovider
---

## Overview

The responsivesettingsprovider is a provider component that supplies a shared responsive-settings context to every descendant component that consumes it. The provider does not detect screen size itself — the consumer chooses when and how to update its attributes (via media queries, device-detection scripts, or any other strategy) so the same descendant components can adapt their layout without each one re-implementing breakpoint logic.

### When to use

- Wrap a subtree (typically near the application root) with `mdc-responsivesettingsprovider` when descendant components should adapt their layout based on a shared responsive signal — for example, rendering popovers centred on small screens or forcing dialogs to fullscreen on mobile.

### When not to use

- Do not use it as a generic media-query helper for arbitrary CSS — components that don't read this context will not be affected.
- Do not use it for theme tokens (use `mdc-themeprovider`) or icon set configuration (use `mdc-iconprovider`).

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/responsivesettingsprovider/index.js"; // custom element registration
// or via React wrapper
import { Responsivesettingsprovider } from '@momentum-design/components/dist/react';
```

Minimal markup example — update attributes from your own breakpoint logic:

```html
<mdc-responsivesettingsprovider
  media="mobile"
  popover-positioning="centered"
  force-fullscreen-dialog
>
  <!-- app content -->
</mdc-responsivesettingsprovider>
```

Descendant components can read the context, and CSS rules can target the provider's attributes (e.g. `mdc-some-component[media="mobile"] { … }`) when fine-grained styling is needed.

### Property/Attribute details

- `media` — generic media type indicating the current device class. Validated against a supported set; values outside the set are ignored. Default `unknown`, so descendant components fall back to their default behaviour when no responsive decision has been made yet.
- `popover-positioning` — controls how popovers position themselves: e.g. anchored close to the trigger or centred on the viewport for small screens. Validated against a supported set; values outside the set are ignored. Default `float`.
- `force-fullscreen-dialog` — when `true`, descendant dialogs render in fullscreen mode (useful on small screens). Default `false`.

The provider exposes a static `Context` accessor for descendants and custom consumer code to subscribe to context updates.

## Accessibility

### Built-in features

The provider is a non-visual context container — it has no interactive surface, no focusable elements, and no ARIA roles of its own. Accessibility of the affected descendant behaviour (focus management, labelling, escape handling) is owned by those descendant components.
