---
title: Card radio
summary: Usage, guidelines, and accessibility for the mdc-cardradio component — a card surface behaving as a radio option; only one card per name group can be selected at a time.
tier: 3
component: cardradio
---

## Overview

The card radio looks like a card (image, header with icon/title/subtitle, body) but behaves as a single radio option. Cards sharing the same `name` form a group: clicking, pressing `Enter`, or pressing `Space` on one card selects it and clears the others. Arrow keys move focus and selection between enabled cards in the group.

### When to use

- Use `mdc-cardradio` when each option in a single-select group needs the visual weight of a card (image, title, supporting copy) rather than a small inline control.
- Use it inside a labelled radio-group container (`role="radiogroup"` + `aria-label` / `aria-labelledby`) when several card radios belong to the same selection set.

### When not to use

- Use `mdc-card` when the surface is a static container and should not represent a selection.
- Use `mdc-cardbutton` when activating the card should trigger an action rather than select an option.
- Use `mdc-cardcheckbox` when more than one card in the group can be selected at the same time.
- Use `mdc-radio` (or `mdc-radiogroup`) when a plain control is enough and the card surface is unnecessary.
- Use `mdc-listitem` inside `mdc-list` when the content is a row of a scrolling list rather than a standalone selectable tile.

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

- Always provide a `card-title` — it is the accessible name of the radio.
- Use the body to differentiate the option from its siblings (price, speed, capacity), not to repeat the title.
- Group related card radios visually inside one container with `role="radiogroup"` and a label so assistive technologies announce the option set.

### Property/Attribute details

- `checked` — selection state. Defaults to `false`. Reflected on the host as `aria-checked`.
- `name` — radio-group name. All `mdc-cardradio` elements in the document that share the same `name` form one mutually-exclusive group. **Required**.
- `disabled` — when `true`, the card cannot be selected and is removed from both the tab order and the arrow-key navigation. Reflected as `aria-disabled="true"`.
- `card-title` — primary header text rendered through `mdc-text`. Ignored if the `title` slot has content. **Required** for accessibility.
- `subtitle` — secondary header text. Ignored if the `subtitle` slot has content.
- `title-tag-name` / `subtitle-tag-name` — DOM tag used for the rendered title/subtitle `mdc-text` (e.g. `h2`, `h3`, `span`). Default: `span`.
- `image-src` — URL of the image rendered above the header. When empty, no image is rendered.
- `image-alt` — alt text for the image. Required for non-decorative images.
- `icon-name` — name of the leading icon shown in the header. When empty, no icon is rendered.
- `variant` — border treatment. `border` (default), `ghost`, or `promotional`.
- `orientation` — `vertical` (default, min-width 20rem) or `horizontal` (min-width 40rem).

### Limitations

- Slot content must remain non-interactive. The card itself is the selection target, so nested buttons, links, or form controls create overlapping interactive regions and break keyboard/assistive-technology behaviour — use `mdc-card` if the surface needs actionable children.
- Grouping is global to the document: every `mdc-cardradio[name="…"]` is considered part of the same group regardless of where it lives in the DOM. Use distinct `name` values when multiple radio groups appear on the same page.
- The card radio is not form-associated. To submit the selected value in a native form, mirror the selected card's identifier into a `<input type="hidden">` (or use `mdc-radiogroup` directly) and update it from the `change` event.
- `card-title` is required for an accessible name; there is no fallback if both `card-title` and the `title` slot are empty.

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

#### Labelling

- Provide a meaningful `card-title` (or `title` slot) — it is the default accessible name of the radio.
- When the title alone is ambiguous (e.g. icon-driven cards, repeated titles disambiguated by context), set `aria-label` (or `aria-labelledby`) on the host so the announcement matches the option.
- Set `image-alt` for informative images and `image-alt=""` for decorative ones to avoid double-announcing the visual.
- Pick `title-tag-name` / `subtitle-tag-name` to match the surrounding heading outline only when the title functions as a heading; otherwise leave the default `span`.
