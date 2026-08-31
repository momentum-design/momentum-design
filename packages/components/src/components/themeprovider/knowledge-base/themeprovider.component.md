---
title: Theme Provider
summary: Usage, guidelines, and accessibility for the mdc-themeprovider component — the context wrapper that applies a Momentum theme class to its subtree.
tier: 3
component: themeprovider
---

## Overview

The theme provider makes a Momentum theme available to everything inside it. It applies a theme class to its host and exposes that theme as context, so descendant components resolve their color, font, and scrollbar tokens consistently from a single source of truth.

### When to use

- Use `mdc-themeprovider` to wrap the part of the app that should render with Momentum tokens; a single provider at the application root is the most common pattern.
- Use a nested `mdc-themeprovider` to render a region (for example a modal or preview pane) with a different theme; switching adds the new theme class and removes the previous one automatically.

### When not to use

- Do not use `mdc-themeprovider` to scope behavior unrelated to theming. Use the appropriate feature-specific provider or container instead.
- Do not use `mdc-themeprovider` to supply icon or illustration configuration. Use `mdc-iconprovider` or `mdc-illustrationprovider` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/themeprovider/index.js"; // custom element registration
// or via React wrapper
import { ThemeProvider } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-themeprovider themeclass="mds-theme-stable-darkWebex">
  <!-- app or section content -->
</mdc-themeprovider>
```

Switching themes:

```js
document.querySelector('mdc-themeprovider').themeclass = 'mds-theme-stable-lightWebex';
```

### Composition

- Wrap the application root, or any subtree that should be themed, with a single `mdc-themeprovider`; descendant components read the theme through context.
- Nest a second `mdc-themeprovider` only when a region genuinely needs a different theme from its surroundings.
- The provider renders only its slotted children; it has no UI of its own.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `themeclass` | Fully qualified theme class name(s) matching the loaded theme stylesheet. Default `mds-theme-stable-darkWebex`. Space-separated values are supported; on each change the previous classes are removed from the host and the new ones added. |

Available Momentum theme classes:

- `mds-theme-stable-darkWebex`, `mds-theme-stable-lightWebex`
- `mds-theme-stable-darkBronzeWebex`, `mds-theme-stable-lightBronzeWebex`
- `mds-theme-stable-darkIndigoWebex`, `mds-theme-stable-lightIndigoWebex`
- `mds-theme-stable-darkJadeWebex`, `mds-theme-stable-lightJadeWebex`
- `mds-theme-stable-darkLavenderWebex`, `mds-theme-stable-lightLavenderWebex`
- `mds-theme-stable-darkRoseWebex`, `mds-theme-stable-lightRoseWebex`

Descendant Lit components can read the current theme by consuming `ThemeProvider.Context`.

For how these classes are generated, how tokens resolve per theme (modes, brand accents, inverted vs. common), and how to add a theme, see the tokens package [Theming](../../../../../assets/tokens/knowledge-base/theming.md) guide.

### Limitations

- **Exact class match required** — `themeclass` must exactly match the class on the loaded theme stylesheet, or the CSS variables it depends on stay undefined.
- **Stylesheet must be present** — the provider only toggles classes; the matching Momentum theme stylesheet has to be loaded for tokens to resolve.
- **No visible UI** — the provider applies styling context to its subtree and renders nothing of its own.

## Accessibility

### Built-in features

The theme provider has no role, exposes no ARIA attributes, and does not appear in the accessibility tree. It is purely a styling wrapper, so it neither adds nor removes semantics for the content inside it.

### Implementation requirements

#### General

- Choose a theme that provides sufficient color contrast for the content rendered inside the provider.
- Keep semantics on the actual content components; the provider itself contributes nothing to the accessibility tree.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-text` | Consumes the color and font tokens this provider supplies. |
| `mdc-motionprovider` | Parallel context provider that scopes motion and animation tokens. |
| `mdc-iconprovider` | Parallel context provider that configures `mdc-icon`. |
| `mdc-illustrationprovider` | Parallel context provider that configures `mdc-illustration`. |
