---
title: Responsivesettingsprovider
summary: Usage, guidelines, and accessibility for the mdc-responsivesettingsprovider component — a provider supplying responsive context (media type, popover positioning, fullscreen dialog) to descendants.
tier: 3
component: responsivesettingsprovider
---

## Overview

The responsive settings provider supplies a shared responsive-settings context so descendant components can adapt their layout from one signal instead of each re-implementing breakpoint logic. It does not detect screen size itself — the consumer decides when and how to update its attributes.

### When to use

- Use `mdc-responsivesettingsprovider` near the application root so descendants adapt to one shared responsive signal — for example centering popovers or forcing dialogs to fullscreen on small screens.
- Use `mdc-responsivesettingsprovider` when you already track device class or breakpoints yourself and want components to react to it consistently.

### When not to use

- Do not use `mdc-responsivesettingsprovider` as a generic media-query helper for arbitrary CSS. Use CSS media queries directly instead.
- Do not use `mdc-responsivesettingsprovider` for theme tokens or icon configuration. Use `mdc-themeprovider` or `mdc-iconprovider` instead.

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

### Composition

- Wrap the subtree (typically near the application root) whose components should share one responsive signal; the provider renders no UI of its own.
- Descendants read the context automatically; custom consumer code can subscribe through the static `Context` accessor.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `media` | Current device class: `unknown` (default), `mobile`, `tablet`, or `desktop`. `unknown` lets descendants keep their default behavior until you set a real value. Values outside the set are ignored. |
| `popover-positioning` | How popovers position themselves: `float` (default, anchored to the trigger) or `dialog` (centered like a dialog, better for small screens). Values outside the set are ignored. |
| `force-fullscreen-dialog` | When `true`, descendant dialogs render fullscreen — useful on small screens. Default `false`. |

### Limitations

- **No breakpoint detection** — the provider never measures the viewport; you set `media` and positioning from your own logic.
- **Opt-in consumers only** — only components that read this context adapt; others are unaffected.
- **Validated enums** — `media` and `popover-positioning` silently ignore unsupported values and fall back to the default.

## Accessibility

### Built-in features

The provider is a non-visual context container: it has no interactive surface, no focusable elements, and no ARIA roles of its own. Accessibility of the affected behavior — focus management, labeling, escape handling — is owned by the descendant components that consume the context.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-dialog` | Consumes this context for fullscreen and positioning decisions on small screens. |
| `mdc-announcementdialog` | Consumes this context for the same responsive dialog behavior. |
| `mdc-themeprovider` | A sibling context provider for theme tokens rather than responsive settings. |
