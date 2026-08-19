---
title: Card radio
summary: Usage, guidelines, and accessibility for the mdc-cardradio component — a card surface behaving as a radio option; only one card per name group can be selected at a time.
tier: 3
component: cardradio
---

## Overview

The card radio turns a whole card into a single radio option, letting a content-rich tile serve as one choice within a mutually exclusive group. It exists for single-select choices that need the visual weight of a card rather than a small inline control.

### When to use

- Use `mdc-cardradio` when each option in a single-select group needs the visual weight of a card (image, title, supporting copy) rather than a small inline control.
- Use `mdc-cardradio` for choosing one option from a small set where each choice benefits from a picture or supporting detail — plan tiers, delivery speeds, or theme options.

### When not to use

- Do not use `mdc-cardradio` for a static container that should not represent a selection. Use `mdc-card` instead.
- Do not use `mdc-cardradio` when activating the card should trigger an action rather than select an option. Use `mdc-cardbutton` instead.
- Do not use `mdc-cardradio` when more than one card in the group can be selected at the same time. Use `mdc-cardcheckbox` instead.
- Do not use `mdc-cardradio` when a plain control is enough and the card surface is unnecessary. Use `mdc-radio` (or `mdc-radiogroup`) instead.
- Do not use `mdc-cardradio` for a row of a scrolling list. Use `mdc-listitem` inside `mdc-list` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/cardradio/index.js"; // custom element registration
// or via React wrapper
import { CardRadio } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<div role="radiogroup" aria-label="Delivery speed">
  <mdc-cardradio
    name="delivery"
    card-title="Standard"
    subtitle="3–5 business days"
    icon-name="truck-bold"
    checked
  >
    <mdc-text slot="body">Free for all orders.</mdc-text>
  </mdc-cardradio>

  <mdc-cardradio
    name="delivery"
    card-title="Express"
    subtitle="Next business day"
    icon-name="bolt-bold"
  >
    <mdc-text slot="body">$12 flat fee.</mdc-text>
  </mdc-cardradio>
</div>
```

Listen for the `change` event to react to selection changes; the newly selected card is the event target.

### Content guidance

- Always give the `card-title` a clear, specific label that names the option on its own.
- Use the body to differentiate the option from its siblings (price, speed, capacity), not to repeat the title.
- Keep titles parallel across the group (all nouns, or all short phrases) so the choices scan as a set.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | Selection state (default `false`), reflected as `aria-checked`. Set it on the option that starts selected. |
| `name` (required) | Radio-group name. Cards sharing a `name` form one mutually exclusive group; selecting one clears the rest. |
| `disabled` | Removes the card from the tab order and arrow-key navigation; sets `aria-disabled="true"`. Use for options that are not currently available. |
| `card-title` (required) | Accessible name and heading of the option. Provide meaningful text; there is no fallback if both this and the `title` slot are empty. |

**Note:** shares `mdc-card`'s content properties (`subtitle`, `image-src`/`image-alt`, `icon-name`, `variant`, `orientation`, and the title/subtitle tag-name props). `mdc-cardradio` always shows an `mdc-staticradio` indicator — there is no `selection-type` choice.

### Limitations

- **Children must be presentational** — the card is the selection target, so nested buttons, links, or form controls create overlapping interactive regions and break keyboard and assistive-technology behavior. Use `mdc-card` if the surface needs actionable children.
- **Grouping is document-global** — every `mdc-cardradio` with the same `name` joins one group regardless of DOM location. Use distinct `name` values for unrelated groups on the same page.
- **Not form-associated** — the selected value is not submitted with a native form. Mirror the selection into a hidden input from the `change` event, or use `mdc-radiogroup`.
- **Accessible name required** — `card-title` (or the `title` slot) is the only source of the name, with no fallback. Always provide one.

## Accessibility

### Built-in features

The host renders with `role="radio"` and is focusable (single tab stop per card; `tabindex` is set to `0` when enabled, `-1` when disabled). The component manages `aria-checked` to mirror the `checked` property and `aria-disabled` to mirror `disabled`.

Keyboard interaction follows the radio pattern:

- `ArrowDown` / `ArrowRight` moves focus to the next enabled card in the same group and selects it (wrapping at the end).
- `ArrowUp` / `ArrowLeft` moves focus to the previous enabled card in the same group and selects it (wrapping at the start).
- `Enter` selects the focused card and dispatches a `change` event.
- `Space` selects the focused card on `keyup` and dispatches a `change` event. `Space` is suppressed on `keydown` so the page does not scroll.
- Click selects the card and dispatches a `change` event.

Selecting a card automatically clears `checked` on every other card sharing the same `name`, so only one card per group is selected at any time. When `disabled` is `true`, the card is removed from the tab order and from arrow-key navigation, and `aria-disabled="true"` is set.

The `card-title` (or `title` slot) provides the accessible name. The `mdc-staticradio` rendered in the header is decorative — state is conveyed via `aria-checked` on the host.

#### Internal ARIA managed by the component

| Element | Attribute       | Value                                                                       |
| ------- | --------------- | --------------------------------------------------------------------------- |
| Host    | `role`          | `radio`                                                                     |
| Host    | `tabindex`      | `0` when enabled; `-1` when `disabled`                                      |
| Host    | `aria-checked`  | `true` / `false`, mirrors the `checked` property                            |
| Host    | `aria-disabled` | `true` / `false`, mirrors the `disabled` property                           |

### Implementation requirements

#### General

- Wrap related card radios in a container with `role="radiogroup"` and a label (`aria-label` or `aria-labelledby`) so assistive technologies announce the option set and its current selection.
- Give every group of card radios a unique `name`. Avoid placing two unrelated groups in the document with the same `name` — they will merge into a single mutually-exclusive group.
- Keep every slotted child presentational. If you need actionable content alongside the option, switch to `mdc-card` and use `mdc-radio` / `mdc-radiogroup` for the selection.
- Use `disabled` (not `aria-hidden` or visual cues alone) when an option must not be selectable, so the state is exposed to assistive technology and arrow navigation skips it correctly.

#### Labeling

- Provide a meaningful `card-title` (or `title` slot) — it is the default accessible name of the radio.
- When the title alone is ambiguous (e.g. icon-driven cards, repeated titles disambiguated by context), set `aria-label` (or `aria-labelledby`) on the host so the announcement matches the option.
- Set `image-alt` for informative images and `image-alt=""` for decorative ones to avoid double-announcing the visual.
- Pick `title-tag-name` / `subtitle-tag-name` to match the surrounding heading outline only when the title functions as a heading; otherwise leave the default `span`.

## Related components

| Component | Relationship |
|---|---|
| `mdc-cardcheckbox` | Multi-select card. Use when several options per group can be selected. |
| `mdc-card` | Static container. Use when the surface should not represent a selection. |
| `mdc-cardbutton` | Action card. Use when the card triggers a command instead of a selection. |
| `mdc-radio` / `mdc-radiogroup` | Inline radio control or group. Use when the card surface is unnecessary. |
| `mdc-listitem` | Row within `mdc-list`. Use for scrolling lists rather than standalone tiles. |
