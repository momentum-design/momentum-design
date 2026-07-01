---
title: Card
summary: Usage, guidelines, and accessibility for the mdc-card component — a static container grouping related information into image, header, body, and footer with link and button slots.
tier: 3
component: card
---

## Overview

The card groups related content — image, title and subtitle, body text, header action icons, and footer link/buttons — into a single visually contained surface. It is a static container: it has no built-in click handler or selection state, and is laid out either vertically (default, narrow) or horizontally (wide).

### When to use

- Use `mdc-card` to present a self-contained piece of content (a record, a tile in a gallery, an information panel) with consistent padding, header, body, and footer regions.
- Use the `promotional` variant for marketing, upsell, or feature-highlight surfaces; use `ghost` when the surrounding layout already provides the visual container; otherwise keep the default `border` variant.

### When not to use

- Use `mdc-cardbutton` when the entire card should act as a single click target.
- Use `mdc-cardcheckbox` or `mdc-cardradio` when the card represents a selectable option inside a form (multi-select / single-select).
- Use `mdc-listitem` inside `mdc-list` when the content is a row of a scrolling list rather than a standalone tile.
- Use `mdc-banner` or `mdc-toast` when the content is a transient or status message rather than a persistent record.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/card/index.js"; // custom element registration
// or via React wrapper
import { Card } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-card
  card-title="Weekly sync"
  subtitle="Wednesdays · 10:00 AM"
  icon-name="calendar-bold"
  image-src="/img/team.png"
  image-alt="Photo of the project team"
  variant="border"
  orientation="vertical"
>
  <mdc-button slot="icon-button" prefix-icon="more-bold" aria-label="More options"></mdc-button>

  <mdc-text slot="body">Quick alignment on roadmap, blockers, and demos.</mdc-text>

  <mdc-link slot="footer-link" href="/events/weekly-sync">Open event</mdc-link>
  <mdc-button slot="footer-button-secondary">Decline</mdc-button>
  <mdc-button slot="footer-button-primary">Join</mdc-button>
</mdc-card>
```

### Content guidance

- Keep the title short and scannable; let `subtitle` carry supporting metadata (time, owner, status).
- Prefer the `title`/`subtitle` slots over `card-title`/`subtitle` attributes when the content needs custom markup (links, icons, badges) inside the header.
- Limit `icon-button` slot entries to at most three; additional buttons cause the header to feel crowded.
- Use the `footer-link` slot for navigation cues and `footer-button-primary` / `footer-button-secondary` for actions — only use the generic `footer` slot when the standard layout cannot express what you need.

### Property/Attribute details

- `card-title` — primary header text. Rendered through `mdc-text`; ignored if the `title` slot has content.
- `subtitle` — secondary header text below the title. Ignored if the `subtitle` slot has content.
- `title-tag-name` / `subtitle-tag-name` — DOM tag used for the rendered title/subtitle `mdc-text`. Accepts any tag supported by `mdc-text` (e.g. `h2`, `h3`, `span`). Default: `span`.
- `image-src` — URL of the image rendered in the `image` slot region. When empty, no image is rendered.
- `image-alt` — alt text for the image. Required for non-decorative images.
- `icon-name` — name of the leading icon shown in the header. When empty, no icon is rendered.
- `variant` — border treatment. `border` (default), `ghost` (no border), `promotional` (promotional styling that also re-themes the footer buttons).
- `orientation` — layout direction. `vertical` (default, min-width 20rem) or `horizontal` (min-width 40rem).

The header `icon-button` slot accepts up to three `mdc-button` entries. Each slotted button is automatically coerced to `variant="tertiary"` and `size="32"` so they integrate visually with the header.

### Limitations

- `mdc-card` is non-interactive — it has no role, focus, or activation. Use `mdc-cardbutton`, `mdc-cardcheckbox`, or `mdc-cardradio` when the whole card needs to be actionable or selectable.
- The header `icon-button` slot enforces tertiary 32px buttons; other variants/sizes are overridden.
- The `footer` slot bypasses the layout for `footer-link`, `footer-button-primary`, and `footer-button-secondary` — mixing them produces an inconsistent footer.

## Accessibility

### Built-in features

The card renders as a generic container — no role, label, or focus management is applied to the host. Interactive children (header `icon-button`, footer link, footer buttons) keep their own focus, keyboard behaviour, and ARIA contract. The card's own title is rendered through `mdc-text` with a consumer-chosen tag, so you can promote it to a real heading (`h2`/`h3`/…) when the surrounding page needs heading-level navigation.

#### Internal ARIA managed by the component

| Element                       | Attribute | Value                                                        |
| ----------------------------- | --------- | ------------------------------------------------------------ |
| Host                          | `role`    | None set by the component                                    |
| Rendered `<img>` (image slot) | `alt`     | Mirrors the `image-alt` attribute set by the consumer        |

### Implementation requirements

#### General

- The card itself is not focusable. If the whole tile must be activatable, use `mdc-cardbutton`/`mdc-cardcheckbox`/`mdc-cardradio` instead of wiring click handlers onto `mdc-card`.
- Each interactive child must be independently labelled. Icon-only buttons in the `icon-button`, `footer-button-primary`, or `footer-button-secondary` slots require an `aria-label` describing the action.
- When the card sits inside a list of similar tiles, make the surrounding container an actual list (`<ul>`/`<li>` or `role="list"`/`role="listitem"`) so assistive technologies announce the count and position.

#### Labelling

- Provide a meaningful `card-title` (or `title` slot) — it is what users skim when navigating between cards.
- Always set `image-alt` for informative images. For purely decorative imagery, set `image-alt=""` so screen readers skip the image.
- Pick `title-tag-name` / `subtitle-tag-name` to match the surrounding heading outline (e.g. `h3` if the cards live in an `h2` section). Leaving the default `span` is fine when the card's title is not a section heading in the page outline.
