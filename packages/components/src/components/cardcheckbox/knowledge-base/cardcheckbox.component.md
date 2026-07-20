---
title: Card checkbox
summary: Usage, guidelines, and accessibility for the mdc-cardcheckbox component — a card surface that behaves as a single checkbox, toggling on click or Enter/Space.
tier: 3
component: cardcheckbox
---

## Overview

The card checkbox turns a whole card into a single checkbox, letting a content-rich tile serve as one selectable option. It exists for multi-select choices that need the visual weight of a card rather than a small inline control.

### When to use

- Use `mdc-cardcheckbox` when each option in a multi-select group needs the visual weight of a card (image, title, supporting copy) rather than a small inline control.
- Use `mdc-cardcheckbox` for opt-in choices where the option is easier to recognize with a picture or icon — notification channels, feature toggles, or categories of interest.

### When not to use

- Do not use `mdc-cardcheckbox` for a static container that should not toggle a selection. Use `mdc-card` instead.
- Do not use `mdc-cardcheckbox` when activating the card should trigger an action rather than toggle a selection. Use `mdc-cardbutton` instead.
- Do not use `mdc-cardcheckbox` when only one card in the group can be selected. Use `mdc-cardradio` instead.
- Do not use `mdc-cardcheckbox` when a plain control is enough and the card surface is unnecessary. Use `mdc-checkbox` (or `mdc-staticcheckbox`) instead.
- Do not use `mdc-cardcheckbox` for a row of a scrolling list. Use `mdc-listitem` inside `mdc-list` instead.

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

- Always give the `card-title` a clear, specific label that names the option on its own.
- Use the body to describe the consequence of selecting the option, not to repeat the title.
- Keep titles parallel across the group (all nouns, or all short phrases) so the choices scan as a set.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | Selection state (default `false`), reflected as `aria-checked`. Set it on the option(s) that start selected. |
| `selection-type="check"` (default) | Shows a check icon that appears when selected. Use for a lightweight selection affordance. |
| `selection-type="checkbox"` | Shows an always-visible `mdc-staticcheckbox` reflecting both states. Use when users should see the unselected state explicitly. |
| `disabled` | Blocks toggling and removes the card from the tab order; sets `aria-disabled="true"`. Use for options that are not currently available. |
| `card-title` (required) | Accessible name and heading of the option. Provide meaningful text; there is no fallback if both this and the `title` slot are empty. |

**Note:** shares `mdc-card`'s content properties (`subtitle`, `image-src`/`image-alt`, `icon-name`, `variant`, `orientation`, and the title/subtitle tag-name props).

### Limitations

- **Children must be presentational** — the card is the toggle target, so nested buttons, links, or form controls create overlapping interactive regions and break keyboard and assistive-technology behavior. Use `mdc-card` if the surface needs actionable children.
- **Not form-associated** — the checked state is not submitted with a native form. Mirror `checked` into a hidden input from the `change` event, or use `mdc-checkbox`.
- **No built-in group** — the component provides no group container or group label. Wrap related cards in an element with `role="group"` and a label so the set is announced.
- **Accessible name required** — `card-title` (or the `title` slot) is the only source of the name, with no fallback. Always provide one.

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

#### Labeling

- Provide a meaningful `card-title` (or `title` slot) — it is the default accessible name of the checkbox.
- When the title alone is ambiguous (e.g. icon-driven cards, repeated titles disambiguated by context), set `aria-label` (or `aria-labelledby`) on the host so the announcement matches the option.
- Set `image-alt` for informative images and `image-alt=""` for decorative ones to avoid double-announcing the visual.
- Pick `title-tag-name` / `subtitle-tag-name` to match the surrounding heading outline only when the title functions as a heading; otherwise leave the default `span`.

## Related components

| Component | Relationship |
|---|---|
| `mdc-cardradio` | Single-select card. Use when only one option per group applies. |
| `mdc-card` | Static container. Use when the surface should not toggle a selection. |
| `mdc-cardbutton` | Action card. Use when the card triggers a command instead of a selection. |
| `mdc-checkbox` / `mdc-staticcheckbox` | Inline or decorative checkbox. Use when the card surface is unnecessary. |
| `mdc-formfieldgroup` | Group wrapper for inline form controls. Use to label and group `mdc-checkbox` options. |
