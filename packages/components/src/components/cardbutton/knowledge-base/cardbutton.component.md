---
title: Card button
summary: Usage, guidelines, and accessibility for the mdc-cardbutton component — a card-shaped surface that behaves as a single button, so clicking or activating anywhere on the card fires the click event.
tier: 3
component: cardbutton
---

## Overview

The card button gives a whole card the behavior of a single button, letting an entire content tile act as one activation target. It exists for cases where the whole surface represents one action rather than a container of separate controls.

### When to use

- Use `mdc-cardbutton` when the whole tile is a single clickable target — a navigation tile, a "create new" surface, or an action card in a grid where users expect to click anywhere on the card.
- Use `mdc-cardbutton` when the action benefits from card content a plain button can't carry — an image, icon, title, and supporting line — such as a dashboard launch tile or a template picker.

### When not to use

- Do not use `mdc-cardbutton` for a static container whose children are individually interactive. Use `mdc-card` instead.
- Do not use `mdc-cardbutton` for a multi-select option in a form. Use `mdc-cardcheckbox` instead.
- Do not use `mdc-cardbutton` for a single-select option in a group. Use `mdc-cardradio` instead.
- Do not use `mdc-cardbutton` for a compact action with no card content. Use `mdc-button` instead.
- Do not use `mdc-cardbutton` for a row of a scrolling list. Use `mdc-listitem` inside `mdc-list` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/cardbutton/index.js"; // custom element registration
// or via React wrapper
import { CardButton } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-cardbutton
  card-title="Create new project"
  subtitle="Start from a blank template"
  icon-name="plus-bold"
  variant="border"
  orientation="vertical"
  name="action"
  value="create-project"
>
  <mdc-text slot="body">Spin up a fresh project with the default settings.</mdc-text>
</mdc-cardbutton>
```

### Content guidance

- Use the `card-title` and body to describe the single action the card performs — the entire surface activates one thing, so keep the copy focused on that outcome.
- Keep the title action-oriented and specific ("Create new project"), not a bare noun, so the button's purpose is clear from the label alone.

### Property/Attribute details

| Option | Intent |
|---|---|
| `type` (default `button`) | Native button type. Use `submit` or `reset` only when the card button lives in a form. |
| `name` / `value` | Form field name and submitted value. Required for the card button to participate in form submission. |
| `disabled` | Removes the card from the tab order and blocks activation. Use when the action is unavailable and users need no explanation. |
| `soft-disabled` | Looks disabled and announces as disabled but stays focusable. Use when keyboard or screen-reader users should still discover the control. |

**Note:** shares `mdc-card`'s content properties (`card-title`, `subtitle`, `image-src`/`image-alt`, `icon-name`, `variant`, `orientation`, and the title/subtitle tag-name props). The `active` and `size` properties inherited from `mdc-buttonsimple` are reset on connect and have no effect.

### Limitations

- **Children must be presentational** — the whole surface is the click target, so nested buttons, links, or inputs create overlapping interactives and break assistive technology. Use `mdc-card` when the surface needs actionable children.
- **Not a toggle button** — `active` and `size` from `mdc-buttonsimple` are reset on connect, so the card button neither toggles nor resizes. Use `mdc-cardcheckbox` or `mdc-cardradio` for a selectable card.
- **One action per card** — the card represents a single command with no room for secondary actions inside it. Move any secondary action outside the card.

## Accessibility

### Built-in features

The host renders with `role="button"` and is focusable via the keyboard (single tab stop). It follows the standard button keyboard contract: `Enter` activates on `keydown`, `Space` activates on `keyup`, and both dispatch the `click` event. Focus is managed by `mdc-buttonsimple`, including the visible focus ring.

When `disabled` is `true`, the card is removed from the tab order and pointer/keyboard activation is suppressed. When `soft-disabled` is `true`, the card stays focusable but is announced as disabled and does not activate — use this when you need screen-reader users to discover the control and learn why it is unavailable.

The card title rendered through `mdc-text` provides the accessible name of the button by default. When the title alone is not descriptive enough (for example when the image carries meaning), provide an explicit `aria-label` on the host so the announcement matches the intent of the surface.

When the card participates in a form, `mdc-buttonsimple` registers it as a form-associated element via `ElementInternals`, so the `name`/`value` are submitted like a native `<button>`.

#### Internal ARIA managed by the component

| Element | Attribute       | Value                                                                                 |
| ------- | --------------- | ------------------------------------------------------------------------------------- |
| Host    | `role`          | `button`                                                                              |
| Host    | `tabindex`      | `0` when enabled and not soft-disabled; removed/`-1` otherwise                        |
| Host    | `aria-disabled` | `true` when `disabled` or `soft-disabled` is set; attribute removed otherwise         |

### Implementation requirements

#### General

- Make sure every slotted element is presentational. If you need actionable children alongside card content, switch to `mdc-card` (multiple actions) or keep the card button and move the secondary action out of the card.
- Use `disabled` to prevent activation when the action is genuinely unavailable; use `soft-disabled` only when the user still needs to be able to discover the control with the keyboard or screen reader.
- When the card sits in a list of similar tiles, wrap the collection in a real list (`<ul>`/`<li>` or `role="list"`/`role="listitem"`) so assistive technologies announce the count and position.

#### Labeling

- Provide a meaningful `card-title` (or `title` slot) — it is the default accessible name of the button.
- When the title is not enough on its own (e.g. icon-driven cards or repeating titles disambiguated by context), set `aria-label` (or `aria-labelledby`) on the host so the announcement describes the action precisely.
- Set `image-alt` for informative images and `image-alt=""` for decorative ones so screen readers do not double-announce the visual.
- Pick `title-tag-name` / `subtitle-tag-name` to match the surrounding heading outline only when the title functions as a heading; otherwise leave the default `span`.

## Related components

| Component | Relationship |
|---|---|
| `mdc-card` | Static container. Use when only specific children are interactive. |
| `mdc-cardcheckbox` | Multi-select card option. Use when the card toggles a selection instead of firing an action. |
| `mdc-cardradio` | Single-select card option. Use when one card per group is chosen. |
| `mdc-button` | Standard button. Use for compact actions that don't need a card-sized surface. |
| `mdc-listitem` | Row within `mdc-list`. Use for scrolling lists rather than standalone tiles. |
