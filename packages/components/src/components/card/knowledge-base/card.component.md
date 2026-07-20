---
title: Card
summary: Usage, guidelines, and accessibility for the mdc-card component — a static container grouping related information into image, header, body, and footer with link and button slots.
tier: 3
component: card
---

## Overview

The card groups the content and actions for a single concept — a record, a gallery tile, or an information panel — into one contained, scannable surface. It is a static container, so it presents and organizes content without acting as a control itself.

### When to use

- Use `mdc-card` to hold the information and actions for a single concept, object, or record on one contained surface with consistent header, body, and footer regions.
- Use `mdc-card` to present several similar objects together — a gallery, dashboard, or grid of tiles — so users can scan and compare them quickly.
- Use `mdc-card` `promotional` for marketing, upsell, or feature-highlight surfaces.
- Use `mdc-card` `ghost` when the surrounding layout already provides the visual container; otherwise keep the default `border`.

### When not to use

- Do not use `mdc-card` for long-form or complex content. Keep card content simple and scannable, and move dense text or intricate relationships to a full page or a dedicated visualization instead.
- Do not use `mdc-card` when the whole surface should be a single click target. Use `mdc-cardbutton` instead.
- Do not use `mdc-card` for selectable options in a form. Use `mdc-cardcheckbox` (multi-select) or `mdc-cardradio` (single-select) instead.
- Do not use `mdc-card` for a row of a scrolling list. Use `mdc-listitem` inside `mdc-list` instead.
- Do not use `mdc-card` for transient or status messages. Use `mdc-banner` or `mdc-toast` instead.
- Do not use `mdc-card` as a primary navigation mechanism. Use `mdc-menupopover` or `mdc-tablist` instead.

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

Composition notes:

- Prefer the `title`/`subtitle` slots over the `card-title`/`subtitle` attributes when the header needs custom markup (links, icons, badges); use the attributes for plain text.
- Use the `footer-link` slot for navigation and `footer-button-primary`/`footer-button-secondary` for actions; reserve the generic `footer` slot for layouts the standard slots cannot express.

### Content guidance

- Keep the title short and scannable; let `subtitle` carry supporting metadata (time, owner, status).
- Keep body copy concise — a card is a summary surface, so lead with the point rather than a paragraph of detail.
- Write footer link labels as destinations ("View report") and footer button labels as actions ("Join"), so the footer's two roles read differently.

### Property/Attribute details

| Option | Intent |
|---|---|
| `card-title` | Primary header text, rendered through `mdc-text`. Use it as the card's scannable heading; ignored when the `title` slot has content. |
| `subtitle` | Secondary header text below the title. Use for supporting metadata (time, owner, status); ignored when the `subtitle` slot has content. |
| `title-tag-name` / `subtitle-tag-name` (default `span`) | DOM tag for the rendered title/subtitle. Promote to `h2`/`h3` to fit the page's heading outline; leave `span` when the title is not a section heading. |
| `image-src` / `image-alt` | Image rendered in the `image` slot region. Give informative images meaningful `image-alt`; set `image-alt=""` for decorative images. |
| `icon-name` | Leading header icon. Use to reinforce the card's category; omit when it adds no meaning. |
| `variant="border"` (default) | Bordered container. Use as the standard card on a plain background. |
| `variant="ghost"` | No border. Use when the surrounding layout already frames the card. |
| `variant="promotional"` | Emphasized styling that also re-themes the footer buttons. Use for marketing or feature-highlight surfaces. |
| `orientation="vertical"` (default) | Stacked layout, min-width 20rem. Use in grids of similar cards. |
| `orientation="horizontal"` | Side-by-side layout, min-width 40rem. Use for wide media-plus-text tiles. |

**Note:** the header `icon-button` slot accepts up to three `mdc-button` entries; each is automatically coerced to `variant="tertiary"` and `size="32"`.

### Limitations

- **Not interactive** — `mdc-card` has no role, focus, or activation. Use `mdc-cardbutton`, `mdc-cardcheckbox`, or `mdc-cardradio` when the whole surface must be actionable or selectable.
- **Header actions are capped** — the `icon-button` slot forces tertiary 32px buttons and accepts at most three; other variants and sizes are overridden. Keep header actions to three.
- **Footer slot bypasses layout** — the generic `footer` slot ignores the `footer-link`/`footer-button-primary`/`footer-button-secondary` layout, so mixing them looks inconsistent. Use the dedicated footer slots unless the standard layout cannot express the need.
- **Content stays lightweight** — the card is a summary surface, not a document. Move extensive text or complex relationships to a full page or a dedicated visualization.

## Accessibility

### Built-in features

The card renders as a generic container — no role, label, or focus management is applied to the host. Interactive children (header `icon-button`, footer link, footer buttons) keep their own focus, keyboard behavior, and ARIA contract. The card's own title is rendered through `mdc-text` with a consumer-chosen tag, so you can promote it to a real heading (`h2`/`h3`/…) when the surrounding page needs heading-level navigation.

#### Internal ARIA managed by the component

| Element                       | Attribute | Value                                                        |
| ----------------------------- | --------- | ------------------------------------------------------------ |
| Host                          | `role`    | None set by the component                                    |
| Rendered `<img>` (image slot) | `alt`     | Mirrors the `image-alt` attribute set by the consumer        |

### Implementation requirements

#### General

- The card itself is not focusable. If the whole tile must be activatable, use `mdc-cardbutton`/`mdc-cardcheckbox`/`mdc-cardradio` instead of wiring click handlers onto `mdc-card`.
- Each interactive child must be independently labeled. Icon-only buttons in the `icon-button`, `footer-button-primary`, or `footer-button-secondary` slots require an `aria-label` describing the action.
- When the card sits inside a list of similar tiles, make the surrounding container an actual list (`<ul>`/`<li>` or `role="list"`/`role="listitem"`) so assistive technologies announce the count and position.

#### Labeling

- Provide a meaningful `card-title` (or `title` slot) — it is what users skim when navigating between cards.
- Always set `image-alt` for informative images. For purely decorative imagery, set `image-alt=""` so screen readers skip the image.
- Pick `title-tag-name` / `subtitle-tag-name` to match the surrounding heading outline (e.g. `h3` if the cards live in an `h2` section). Leaving the default `span` is fine when the card's title is not a section heading in the page outline.

## Related components

| Component | Relationship |
|---|---|
| `mdc-cardbutton` | Card-shaped surface that acts as one large button. Use when the whole tile triggers a single action. |
| `mdc-cardcheckbox` | Card as a multi-select option. Use when several cards in a group can be selected at once. |
| `mdc-cardradio` | Card as a single-select option. Use when only one card per group can be selected. |
| `mdc-listitem` | Row within `mdc-list`. Use for scrolling lists rather than standalone tiles. |
| `mdc-banner` / `mdc-toast` | Transient or status messaging. Use for temporary notices rather than persistent records. |
