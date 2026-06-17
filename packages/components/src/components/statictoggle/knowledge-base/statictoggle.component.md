---
title: Static Toggle
summary: Usage, guidelines, and accessibility for the mdc-statictoggle component — a decorative non-interactive toggle switch used to display on/off state visually.
status: draft
tier: 3
component: statictoggle
---

## Overview

The static toggle is a decorative, non-interactive toggle switch used for visual presentation. It shares the same styling as the interactive `mdc-toggle` but does not provide user interaction or form participation.

### When to use

- Use to display toggle state in read-only contexts such as summary views, confirmation screens, or list rows where state is reported but not editable.
- Use as a visual building block inside custom interactive components (e.g. composed inside a list item that handles the click).

### When not to use

- Do not use as a replacement for an interactive toggle in forms — use `mdc-toggle` instead.
- Do not use when users need to change the value directly on this control.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/statictoggle/index.js"; // custom element registration
// or via React wrapper
import { StaticToggle } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-statictoggle checked size="default"></mdc-statictoggle>
```

### Property/Attribute details

- `checked` (boolean, default `false`) — controls the visual state. `true` renders the "on" state with the check icon; `false` renders the "off" state.
- `size` (`'default' | 'compact'`, default `'default'`) — `'default'` renders a 1.5rem-tall switch; `'compact'` renders a 1rem-tall switch with a smaller icon.
- `readonly` (boolean, default `false`) — applies the read-only visual style. Decorative only.
- `soft-disabled` (boolean, default `false`) — applies the soft-disabled visual style. Decorative only; the element stays in the visual flow but reads as inactive.
- `disabled` (boolean) — applies the disabled visual style. Decorative only on this component.

### Limitations

- The component is non-interactive: it does not emit `click`/`change` events of its own, it is not focusable by default, and it is not form-associated. Wire interaction and form participation on the parent element that hosts the static toggle.

## Accessibility

### Notes

- Because the component is purely decorative, it exposes no ARIA state on its own. When embedded inside an interactive parent, that parent is responsible for setting the appropriate role (e.g. `switch`, `checkbox`) and state attributes (`aria-checked`, `aria-disabled`, etc.) so assistive technologies announce the value correctly.
- Do not rely on this component to convey state to assistive technologies on its own.
