---
title: Card button
summary: Usage, guidelines, and accessibility for the mdc-cardbutton component — a card-shaped surface that behaves as a single button, so clicking or activating anywhere on the card fires the click event.
status: draft
tier: 3
component: cardbutton
---

## Overview

The card button looks like a card (image, header with icon/title/subtitle, body) but acts as one large button. Clicking, pressing `Enter`, or pressing `Space` anywhere on the card surface dispatches a `click` event. Use it when the entire tile should be a single activation target.

### When to use

- Use `mdc-cardbutton` when the whole tile is a clickable target — a navigation tile, a "create new" surface, or an action card in a grid where the user expects to click anywhere on the card.
- Use the `name` and `value` attributes when the card button needs to participate in a form submission.

### When not to use

- Use `mdc-card` when the surface is a static container and only specific children are interactive.
- Use `mdc-cardcheckbox` when the card represents a multi-select option inside a form.
- Use `mdc-cardradio` when the card represents a single-select option inside a group.
- Use `mdc-listitem` inside `mdc-list` when the content is a row of a scrolling list rather than a standalone tile.
- Use `mdc-button` when the action does not warrant a card-sized surface (no image, no header, no body content).

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

- Keep slot content non-interactive. Nested buttons, links, or form controls inside the card body create overlapping click targets and break assistive technology behaviour.
- Use the `card-title` and body to describe the single action the card performs — the entire surface activates one thing.

### Property/Attribute details

- `card-title` — primary header text rendered through `mdc-text`. Ignored if the `title` slot has content.
- `subtitle` — secondary header text. Ignored if the `subtitle` slot has content.
- `title-tag-name` / `subtitle-tag-name` — DOM tag used for the rendered title/subtitle `mdc-text` (e.g. `h2`, `h3`, `span`). Default: `span`.
- `image-src` — URL of the image rendered in the `image` slot region. When empty, no image is rendered.
- `image-alt` — alt text for the image. Required for non-decorative images.
- `icon-name` — name of the leading icon shown in the header. When empty, no icon is rendered.
- `variant` — border treatment. `border` (default), `ghost`, or `promotional`.
- `orientation` — `vertical` (default, min-width 20rem) or `horizontal` (min-width 40rem).
- `type` — inherited from `mdc-buttonsimple`; `button` (default), `submit`, or `reset` when used inside a form.
- `name` / `value` — form name and value submitted when the card button is inside a form. Required for form participation.
- `disabled` — when `true`, the card is not interactive and is removed from the tab order.
- `soft-disabled` — when `true`, the card looks disabled and announces as disabled to assistive tech but stays focusable so screen-reader users can still discover it.

### Limitations

- The `active` and `size` properties from `mdc-buttonsimple` are reset on connect; the card button is not a toggle button and does not respond to button sizing.
- Slot content must remain non-interactive. The card itself is the click target, so nested buttons/links/inputs create nested interactives and are not supported — use `mdc-card` when you need actionable children inside the surface.

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

#### Labelling

- Provide a meaningful `card-title` (or `title` slot) — it is the default accessible name of the button.
- When the title is not enough on its own (e.g. icon-driven cards or repeating titles disambiguated by context), set `aria-label` (or `aria-labelledby`) on the host so the announcement describes the action precisely.
- Set `image-alt` for informative images and `image-alt=""` for decorative ones so screen readers do not double-announce the visual.
- Pick `title-tag-name` / `subtitle-tag-name` to match the surrounding heading outline only when the title functions as a heading; otherwise leave the default `span`.
