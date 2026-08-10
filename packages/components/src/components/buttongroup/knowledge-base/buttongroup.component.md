---
title: ButtonGroup
summary: Usage, guidelines, and accessibility for the mdc-buttongroup component — a container that groups related buttons into a visually unified, segmented control with shared size and variant.
tier: 3
component: buttongroup
---

## Overview

The buttongroup arranges related `mdc-button` instances into a single segmented control. It applies a shared `size` and `variant` to each slotted button so the group reads as one unit, and supports horizontal or vertical layouts plus a compact mode for space-constrained surfaces.

### When to use

- Use `mdc-buttongroup` to cluster related actions that operate on the same target, such as a formatting toolbar, a zoom in/out pair, or a "select / clear" duo.
- Use `mdc-buttongroup` when visually unifying several `mdc-button` controls communicates that they belong together and share sizing and style.

### When not to use

- Do not use `mdc-buttongroup` for a single action. Use a standalone `mdc-button`.
- Do not use `mdc-buttongroup` for switching between panels of content. Use `mdc-tablist`, which carries the right tab semantics.
- Do not use `mdc-buttongroup` for a mutually exclusive selection that should be announced as one form value. Use `mdc-radiogroup` (or a `role="radiogroup"` pattern) instead.
- Do not use `mdc-buttongroup` for actions that belong in a menu. Use `mdc-menupopover` or `mdc-menubar`.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/buttongroup/index.js"; // custom element registration
// or via React wrapper
import { ButtonGroup } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-buttongroup orientation="horizontal" variant="secondary" size="32">
  <mdc-button prefix-icon="bold-bold" aria-label="Bold"></mdc-button>
  <mdc-button prefix-icon="italic-bold" aria-label="Italic"></mdc-button>
  <mdc-button prefix-icon="underline-bold" aria-label="Underline"></mdc-button>
</mdc-buttongroup>
```

### Content guidance

- Slot only `mdc-button` elements as direct children. Other content is not styled by the group and breaks the segmented appearance.
- Keep the buttons inside a group conceptually related. If the actions are unrelated, render them as standalone buttons.
- Mix icon-only and pill buttons sparingly — a consistent button shape reads more clearly as a set.

### Property/Attribute details

| Option | Intent |
|---|---|
| `variant="primary"` (default) / `variant="secondary"` | Applied to every child button, overriding each button's own `variant`, so the group reads as one unit. Set the shared style here, not on the individual buttons. |
| `orientation="horizontal"` (default) / `orientation="vertical"` | Lays the buttons in a row or a stack. Use `vertical` only when the surrounding layout is column-oriented. |
| `compact` | Forces every button to a fixed 24px height regardless of `size`. Use for dense surfaces such as toolbars in tight headers. |

**Note:** `size` (`24`/`28` (default)/`32`/`40`) is applied to every child button, overriding each button's own `size`.

### Limitations

- **Only `mdc-button` children styled** — the group manages direct `mdc-button` children only; any other slotted element keeps its own styling and can break the segmented look. Slot buttons directly.
- **Group overrides children** — `size` and `variant` set on the group always override the same attributes on the slotted buttons. Set them on the group, not the button.
- **No roving focus or selection** — the group does not manage roving `tabindex` or selection state. Add `role="toolbar"` with arrow-key navigation, or use `mdc-radiogroup` for selection, when those patterns are needed.

## Accessibility

### Built-in features

The buttongroup is a presentational wrapper: it renders a generic container and does not set a role, label, or keyboard behavior on the host. Each slotted `mdc-button` retains its own `role="button"`, tab stop, and ARIA contract.

#### Internal ARIA managed by the component

| Element | Attribute | Value                       |
| ------- | --------- | --------------------------- |
| Host    | `role`    | None set by the component   |

### Implementation requirements

#### General

- When the group represents a labeled toolbar of actions, wrap or annotate it with `role="toolbar"` and an `aria-label` (or `aria-labelledby`) describing what the toolbar controls. Apply this on the host, not on the inner buttons.
- If the buttons in the group represent a mutually exclusive selection (radio-style segmented control), use `mdc-radiogroup` or implement `role="radiogroup"` semantics with `aria-checked` on each option — `mdc-buttongroup` alone does not convey selection state.
- When using a `role="toolbar"` pattern, implement arrow-key navigation between the buttons (`ArrowLeft`/`ArrowRight` for horizontal, `ArrowUp`/`ArrowDown` for vertical) so users do not have to tab through each item.

#### Labeling

- Always label icon-only buttons inside the group with `aria-label` (for example `aria-label="Bold"`) — the icon glyph alone is not announced.
- When the group as a whole represents a single function (for example "Text formatting"), expose that name via `aria-label` on the host so the surrounding toolbar context is clear to assistive technology users.

## Related components

| Component | Relationship |
|---|---|
| `mdc-button` | The child element a group arranges. Use alone when there is only one action. |
| `mdc-radiogroup` | Announces a single selected value. Use instead when the segmented buttons are a mutually exclusive choice. |
| `mdc-tablist` | Switches between content panels. Use instead when the group would control tabbed views. |
| `mdc-menupopover` | Houses actions in a menu surface. Use instead of a persistent toolbar group when actions belong in a menu. |
