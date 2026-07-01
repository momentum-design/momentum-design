---
title: ButtonGroup
summary: Usage, guidelines, and accessibility for the mdc-buttongroup component — a container that groups related buttons into a visually unified, segmented control with shared size and variant.
tier: 3
component: buttongroup
---

## Overview

The buttongroup arranges related `mdc-button` instances into a single segmented control. It applies a shared `size` and `variant` to each slotted button so the group reads as one unit, supports horizontal or vertical layouts, and offers a compact mode for space-constrained surfaces.

### When to use

- Use `mdc-buttongroup` to cluster mutually related actions that operate on the same target (for example a toolbar of formatting actions, a zoom in/out pair, or a "select / clear" duo).
- Use it when the visual unification of multiple buttons communicates that they belong together and share styling.

### When not to use

- Use a single `mdc-button` when there is only one action to present.
- Use `mdc-tablist` with `mdc-tab` when the controls switch between panels of content — tabs carry the right semantics for that pattern.
- Use `mdc-toggle` or `mdc-radiogroup` when the buttons represent a mutually exclusive selection that should be announced as a single form value.
- Use `mdc-menubar` or `mdc-menupopover` when the actions belong inside a menu surface rather than a persistent toolbar.

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
- Mix icon-only and pill buttons sparingly — when mixed, ensure every icon-only button has an `aria-label` so the group remains accessible.

### Property/Attribute details

- `orientation` — layout direction of the slotted buttons.
  - `horizontal` (default) — buttons are arranged in a row.
  - `vertical` — buttons are stacked top-to-bottom.
- `variant` — visual style applied to every child button, overriding their individual `variant`.
  - `primary` (default) — solid background.
  - `secondary` — transparent background with border.
  - `tertiary` — text/icon only, no background or border.
- `size` — pixel-derived height applied to every child button, overriding their individual `size`. Supported values: `24`, `28` (default), `32`, `40`.
- `compact` — when `true`, forces every button to a fixed 24px height regardless of `size`. Useful for dense layouts. Defaults to `false`.

### Limitations

- The group only manages direct `mdc-button` children. Any other slotted element keeps its own styling and may visually break the segmented look.
- `size` and `variant` on the group always override matching attributes on the slotted buttons — set those on the group, not on the individual button.
- The component does not manage roving tabindex or selection state; arrow-key navigation between the grouped buttons is up to the consumer when that pattern is desired (see Accessibility).

## Accessibility

### Built-in features

The buttongroup is a presentational wrapper: it renders a generic container and does not set a role, label, or keyboard behaviour on the host. Each slotted `mdc-button` retains its own `role="button"`, tab stop, and ARIA contract.

#### Internal ARIA managed by the component

| Element | Attribute | Value                       |
| ------- | --------- | --------------------------- |
| Host    | `role`    | None set by the component   |

### Implementation requirements

#### General

- When the group represents a labelled toolbar of actions, wrap or annotate it with `role="toolbar"` and an `aria-label` (or `aria-labelledby`) describing what the toolbar controls. Apply this on the host, not on the inner buttons.
- If the buttons in the group represent a mutually exclusive selection (radio-style segmented control), use `mdc-radiogroup` or implement `role="radiogroup"` semantics with `aria-checked` on each option — `mdc-buttongroup` alone does not convey selection state.
- When using a `role="toolbar"` pattern, implement arrow-key navigation between the buttons (`ArrowLeft`/`ArrowRight` for horizontal, `ArrowUp`/`ArrowDown` for vertical) so users do not have to tab through each item.

#### Labelling

- Always label icon-only buttons inside the group with `aria-label` (e.g. `aria-label="Bold"`) — the icon glyph alone is not announced.
- When the group as a whole represents a single function (e.g. "Text formatting"), expose that name via `aria-label` on the host so the surrounding toolbar context is clear to assistive technology users.
