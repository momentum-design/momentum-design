---
title: Card checkbox
summary: Usage, guidelines, and accessibility for the mdc-cardcheckbox component — a card surface that behaves as a single checkbox, toggling on click or Enter/Space.
tier: 3
component: cardcheckbox
---

## Overview

The card checkbox looks like a card (image, header with icon/title/subtitle, body) but behaves as a single checkbox. Clicking anywhere on the card, pressing `Enter`, or pressing `Space` toggles the `checked` state and dispatches a `change` event. Multiple card checkboxes in a group can be checked at the same time.

### When to use

- Use `mdc-cardcheckbox` when each option in a multi-select group needs the visual weight of a card (image, title, supporting copy) rather than a small inline control.
- Use it inside a labelled group container (`role="group"` + `aria-label` / `aria-labelledby`) when several card checkboxes belong to the same selection set.

### When not to use

- Use `mdc-card` when the surface is a static container and should not toggle a selection state.
- Use `mdc-cardbutton` when activating the card should trigger an action rather than toggle a selection.
- Use `mdc-cardradio` when only one card in the group can be selected at a time.
- Use `mdc-checkbox` (or `mdc-staticcheckbox`) when a plain control is enough and the card surface is unnecessary.
- Use `mdc-listitem` inside `mdc-list` when the content is a row of a scrolling list rather than a standalone selectable tile.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/cardcheckbox/index.js"; // custom element registration
// or via React wrapper
import { CardCheckbox } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<div role="group" aria-label="Notification channels">
  <mdc-cardcheckbox
    card-title="Email"
    subtitle="Daily digest at 8:00 AM"
    icon-name="email-bold"
    selection-type="checkbox"
    checked
  >
    <mdc-text slot="body">Receive a summary of activity in your inbox.</mdc-text>
  </mdc-cardcheckbox>

  <mdc-cardcheckbox
    card-title="Push"
    subtitle="On all signed-in devices"
    icon-name="bell-bold"
    selection-type="checkbox"
  ></mdc-cardcheckbox>
</div>
```

Listen for the `change` event to react to toggles; the new state is available on `event.target.checked`.

### Content guidance

- Always provide a `card-title` — it is the accessible name of the checkbox.
- Use the body to describe the consequence of selecting the option, not to repeat the title.
- When grouping multiple card checkboxes, wrap them in a container with `role="group"` and a label so assistive technologies announce the set.

### Property/Attribute details

- `checked` — selection state. Defaults to `false`. Reflected to the host as `aria-checked`.
- `selection-type` — visual indicator. `check` (default) renders an `mdc-icon` that appears/changes when selected; `checkbox` renders an `mdc-staticcheckbox` that is always visible and reflects both states.
- `disabled` — when `true`, the card cannot be toggled and is removed from the tab order. Also reflected as `aria-disabled="true"`.
- `card-title` — primary header text rendered through `mdc-text`. Ignored if the `title` slot has content. **Required** for accessibility.
- `subtitle` — secondary header text. Ignored if the `subtitle` slot has content.
- `title-tag-name` / `subtitle-tag-name` — DOM tag used for the rendered title/subtitle `mdc-text` (e.g. `h2`, `h3`, `span`). Default: `span`.
- `image-src` — URL of the image rendered above the header. When empty, no image is rendered.
- `image-alt` — alt text for the image. Required for non-decorative images.
- `icon-name` — name of the leading icon shown in the header. When empty, no icon is rendered.
- `variant` — border treatment. `border` (default), `ghost`, or `promotional`.
- `orientation` — `vertical` (default, min-width 20rem) or `horizontal` (min-width 40rem).

### Limitations

- Slot content must remain non-interactive. The card itself is the toggle target, so nested buttons, links, or form controls create overlapping interactive regions and break keyboard/assistive-technology behaviour — use `mdc-card` if the surface needs actionable children.
- The card checkbox is not form-associated. To submit its state in a native form, mirror `checked` into a `<input type="hidden">` (or use `mdc-checkbox` directly) and update it from the `change` event.
- `card-title` is required for an accessible name; there is no fallback if both `card-title` and the `title` slot are empty.

## Accessibility

### Built-in features

The host renders with `role="checkbox"` and is focusable (single tab stop per card; `tabindex` is set to `0` when enabled, `-1` when disabled). The component manages `aria-checked` to mirror the `checked` property and `aria-disabled` to mirror `disabled`.

Keyboard interaction follows the checkbox pattern:

- `Enter` toggles the checked state on `keydown` and dispatches a `change` event.
- `Space` toggles the checked state on `keyup` and dispatches a `change` event. `Space` is suppressed on `keydown` so the page does not scroll.
- Click toggles the checked state and dispatches a `change` event.

When `disabled` is `true`, click/keyboard activation is suppressed, the host is removed from the tab order, and `aria-disabled="true"` is set.

The `card-title` (or `title` slot) provides the accessible name. The visual selection indicator (`mdc-icon` for `selection-type="check"`, `mdc-staticcheckbox` for `selection-type="checkbox"`) is decorative — state is conveyed via `aria-checked` on the host.

#### Internal ARIA managed by the component

| Element | Attribute       | Value                                                                       |
| ------- | --------------- | --------------------------------------------------------------------------- |
| Host    | `role`          | `checkbox`                                                                  |
| Host    | `tabindex`      | `0` when enabled; `-1` when `disabled`                                      |
| Host    | `aria-checked`  | `true` / `false`, mirrors the `checked` property                            |
| Host    | `aria-disabled` | `true` / `false`, mirrors the `disabled` property                           |

### Implementation requirements

#### General

- Wrap related card checkboxes in a container with `role="group"` and a label (`aria-label` or `aria-labelledby`) so assistive technologies announce the option set.
- Keep every slotted child presentational. If you need actionable content alongside the option, switch to `mdc-card` and use `mdc-checkbox` for the selection.
- Use `disabled` (not `aria-hidden` or visual cues alone) when an option must not be selectable, so the state is exposed to assistive technology.

#### Labelling

- Provide a meaningful `card-title` (or `title` slot) — it is the default accessible name of the checkbox.
- When the title alone is ambiguous (e.g. icon-driven cards, repeated titles disambiguated by context), set `aria-label` (or `aria-labelledby`) on the host so the announcement matches the option.
- Set `image-alt` for informative images and `image-alt=""` for decorative ones to avoid double-announcing the visual.
- Pick `title-tag-name` / `subtitle-tag-name` to match the surrounding heading outline only when the title functions as a heading; otherwise leave the default `span`.
