---
title: Control type provider
summary: Usage and guidelines for the mdc-controltypeprovider component — a context provider setting whether descendant form controls behave as controlled or uncontrolled.
status: draft
tier: 3
component: controltypeprovider
---

## Overview

The control type provider is a context provider used to set whether descendant form controls operate as **controlled** or **uncontrolled** components.

- `uncontrolled` (default) — each control manages its own state. Toggling a checkbox, picking a combobox option, or moving a slider updates the control's internal value and dispatches a `change` event.
- `controlled` — each control delegates state to its parent. The control emits `input` and `change` with the requested new value but does not update its own value; the parent component is expected to update the control's `value` attribute in response.

This mirrors the React controlled/uncontrolled pattern at the web-component level so the same component can be embedded in either consumer style without forking the API.

It is rendered as a transparent wrapper — the provider does not produce any visible UI.

### When to use

- Wrap a tree of form controls (combobox, select, checkbox, etc.) in `mdc-controltypeprovider control-type="controlled"` when the parent owns the canonical state and the controls must always reflect what the parent passes in.
- Use it when integrating with state-management libraries (React, Redux, signals, etc.) that need every user interaction to flow through the consumer's update cycle.

### When not to use

- Leave the provider out (or rely on the default `uncontrolled`) when each control should own its own state and the consumer just listens to `change`.
- Do not nest providers to switch modes mid-tree unless absolutely necessary — descendant controls subscribe to the context once and do not re-subscribe when the value changes.

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

### Content guidance

The provider has no visible content of its own. Place form controls (or higher-level layouts) inside it. Avoid using it as a generic layout wrapper — its only purpose is to broadcast `control-type` to the descendants that consume it.

### Property/Attribute details

- `control-type` — `controlled` or `uncontrolled` (default). Determines how descendant controls handle user interaction.

### Limitations

- The provider broadcasts `control-type` once at mount; descendants do **not** react to runtime changes of the attribute. If you must switch modes after mount, remount the descendant tree (e.g. by toggling its `key` in React) so it reads the new value.
- Only components that use the `ControlTypeMixin` consume this context — currently the combobox and other form controls that opt in. Components that have no need for the controlled/uncontrolled distinction ignore the provider.

## Accessibility

### Built-in features

The provider does not render any visible content or accept focus. It does not set ARIA attributes on itself or its descendants and therefore has no direct accessibility surface.

The provider does affect the **behaviour** of consuming form controls — in controlled mode, a control will not update its own `value` in response to user interaction, so the consumer must drive the value through the parent. If the parent forgets to update the value, the control will appear unresponsive to keyboard and pointer input, which is an accessibility regression. Always wire the `input` / `change` handlers when using `control-type="controlled"`.

#### Internal ARIA managed by the component

The provider does not manage any ARIA attributes.

### Implementation requirements

#### General

- Place the provider as high in the tree as the controlled/uncontrolled decision applies; nesting two providers with different `control-type` values is supported but rarely needed.
- In controlled mode, always handle `input` and `change` events from descendant form controls and update their `value` (or `checked`) attribute — otherwise the controls will look broken to assistive technology users.
