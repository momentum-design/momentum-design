---
title: Theme Provider
summary: Usage, guidelines, and accessibility for the mdc-themeprovider component — the context wrapper that applies a Momentum theme class to its subtree.
tier: 3
component: themeprovider
---

## Overview

The theme provider applies a Momentum theme class to its host element and exposes it as a context for descendant Lit components. CSS variables defined by the theme class drive token-based styling (colour, fonts, scrollbar). It also sets sensible defaults for text rendering (font family, weight, default text colour).

### When to use

- Wrap the section of the app that should render with Momentum tokens. A single provider at the application root is the most common pattern.
- Use nested providers to render a region (for example a modal or preview pane) with a different theme — switching themes adds the new class and removes the previous one automatically.

### When not to use

- Do not use to scope behaviour unrelated to theming.

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

### Property/Attribute details

- `themeclass` (string, default `'mds-theme-stable-darkWebex'`) — fully qualified class name(s) that match the theme stylesheet. Space-separated values are supported; on each change, every class from the previous value is removed from the host `classList` and every class from the new value is added.

Available Momentum theme classes:

- `mds-theme-stable-darkWebex`, `mds-theme-stable-lightWebex`
- `mds-theme-stable-darkBronzeWebex`, `mds-theme-stable-lightBronzeWebex`
- `mds-theme-stable-darkIndigoWebex`, `mds-theme-stable-lightIndigoWebex`
- `mds-theme-stable-darkJadeWebex`, `mds-theme-stable-lightJadeWebex`
- `mds-theme-stable-darkLavenderWebex`, `mds-theme-stable-lightLavenderWebex`
- `mds-theme-stable-darkRoseWebex`, `mds-theme-stable-lightRoseWebex`

Descendant Lit components can read the current theme by consuming `ThemeProvider.Context`.

### Limitations

- The `themeclass` value must exactly match the class on the matching theme stylesheet — otherwise the CSS variables it depends on remain undefined.

## Accessibility

### Notes

- The theme provider has no role, exposes no ARIA attributes, and does not appear in the accessibility tree. It is purely a visual/styling wrapper.
- Ensure that the chosen theme provides sufficient colour contrast for the content rendered inside.
