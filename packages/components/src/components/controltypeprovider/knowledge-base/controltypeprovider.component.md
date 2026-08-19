---
title: Control type provider
summary: Usage, guidelines, and accessibility for the mdc-controltypeprovider component — a context provider setting whether descendant form controls behave as controlled or uncontrolled.
tier: 3
component: controltypeprovider
---

## Overview

The control type provider sets whether the form controls beneath it behave as controlled or uncontrolled, mirroring the React controlled/uncontrolled pattern at the web-component level. It lets the same controls integrate with a parent-owned state model or manage their own state without forking their API.

### When to use

- Use `mdc-controltypeprovider` `control-type="controlled"` to make descendant form controls defer their state to a parent that owns the canonical value.
- Use `mdc-controltypeprovider` when integrating with a state library (React, Redux, signals) that must see every interaction flow through its update cycle.

### When not to use

- Do not use `mdc-controltypeprovider` when each control should own its own state. Rely on the default uncontrolled behavior instead.
- Do not use `mdc-controltypeprovider` to switch modes mid-tree at runtime. Remount the descendant tree instead, since descendants read the context once.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/controltypeprovider/index.js"; // custom element registration
// or via React wrapper
import { ControlTypeProvider } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-controltypeprovider control-type="controlled">
  <mdc-combobox label="Country" name="country"> … </mdc-combobox>
  <mdc-checkbox label="Subscribe"></mdc-checkbox>
</mdc-controltypeprovider>
```

In controlled mode, listen for `input` / `change` on each form control and drive its `value` (or `checked`) attribute from the parent state.

### Composition

- Wrap the form controls (or a higher-level layout) that should share one control mode; the provider renders no UI of its own.
- Only controls that consume the control-type context via `ControlTypeMixin` are affected; other components ignore the provider.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `control-type` | `uncontrolled` (default) — each control manages its own state and dispatches `change` on interaction. `controlled` — each control emits `input`/`change` with the requested value but does not update its own value; the parent must set `value` (or `checked`) in response. |

### Limitations

- **Set once at mount** — descendants do not react to runtime `control-type` changes; remount the tree (for example by toggling its `key` in React) to switch modes.
- **Opt-in consumers only** — only controls using `ControlTypeMixin` read the context; components with no controlled/uncontrolled distinction ignore the provider.
- **Controlled mode needs wiring** — in `controlled` mode a control will not update its own value, so unhandled `input`/`change` events leave it looking unresponsive.

## Accessibility

### Built-in features

The provider renders nothing visible, takes no focus, and sets no ARIA on itself or its descendants, so it has no direct accessibility surface. It does change the behavior of consuming controls: in controlled mode a control will not update its own value on interaction, so a parent that fails to update the value makes the control appear unresponsive to keyboard and pointer users.

### Implementation requirements

#### General

- Place the provider as high in the tree as the controlled/uncontrolled decision applies; nesting two providers with different `control-type` values is supported but rarely needed.
- In controlled mode, always handle `input` and `change` from descendant controls and update their `value` (or `checked`) — otherwise the controls look broken to assistive technology users.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-combobox` | A form control that consumes this context to run in controlled or uncontrolled mode. |
| `mdc-toggle` | A form control that consumes this context to run in controlled or uncontrolled mode. |
| `mdc-searchfield` | A form control that consumes this context to run in controlled or uncontrolled mode. |
