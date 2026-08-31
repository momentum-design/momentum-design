---
title: Accordion Button
summary: Usage, guidelines, and accessibility for the mdc-accordionbutton component — a vertically stacked component with a fully clickable header and an expandable/collapsible body section.
tier: 3
component: accordionbutton
---

## Overview

`mdc-accordionbutton` stacks a titled header above a collapsible panel, and the whole header toggles that panel open or closed. It lets people scan a set of section titles first and expand only what they need, which keeps long or space-constrained layouts short.

### When to use

- Use `mdc-accordionbutton` for content that splits into independent sections people open one at a time, rather than reading everything at once or in a fixed order.
- Use `mdc-accordionbutton` for a section whose header needs only a title (and optionally a `prefix-icon`), so the entire header can toggle the panel with nothing competing for the click.
- Use `mdc-accordionbutton` to shorten a long page when the collapsed content is secondary and not critical to read straight away.

### When not to use

- Do not use `mdc-accordionbutton` when the header must also hold interactive controls such as buttons, chips, or badges. Use `mdc-accordion` instead — a fully clickable header nests those controls inside the toggle and makes their activation ambiguous for keyboard and screen-reader users.
- Do not use `mdc-accordionbutton` for content that must all stay visible at once, or when the hidden content is critical. Render the content inline instead.
- Do not use `mdc-accordionbutton` for content people switch between constantly; the repeated open and close disrupts reading. Use `mdc-tablist`, or plain sections, instead.
- Do not use separate `mdc-accordionbutton` instances to manage several related sections. Use `mdc-accordiongroup` instead so shared styling and single-open behavior stay coordinated.

## Guidelines

### Developer usage

Register the custom element, or import the React wrapper:

```tsx
import "@momentum-design/components/dist/components/accordionbutton/index.js"; // custom element registration
// or via React wrapper
import { AccordionButton } from '@momentum-design/components/dist/react';
```

The default slot holds the body; `header-text` sets the title:

```html
<mdc-accordionbutton header-text="Section title">
  Body content goes here.
</mdc-accordionbutton>
```

### Content guidance

- Write `header-text` as a short, specific summary of the panel — it is the only cue people scan before expanding. The header does not truncate, so keep it to a few words.
- Keep phrasing parallel across sibling sections so the set reads as one group.
- Body copy can run to multiple paragraphs, lists, or nested components; lead with the information people most likely came for, and cut filler.

The `header-text` also serves as the component's accessible name; the naming mechanism is covered in Accessibility → Labeling.

### Property/Attribute details

| Option | Intent |
|---|---|
| `variant="default"` (default) | Bordered, rounded container. Use when the accordion is a distinct object on the page. |
| `variant="borderless"` | No outer border; bottom divider when collapsed. Use when embedded in structured layouts. |
| `size="small"` (default) | 16px padding. Default for most contexts. |
| `size="large"` | 24px padding. Use when the accordion is a primary content block or touch targets need more space. |
| `toggle-position="trailing"` (default) | Chevron at the end (right in LTR). Standard pattern. |
| `toggle-position="leading"` | Chevron at the start. Use only when layout or RTL patterns require it; trailing is the default users expect. |
| `expanded` | Controls panel visibility. Defaults to `false` (collapsed). The body stays in the DOM while collapse motion runs (`--mds-transition-collapse` + `--mds-transition-fade-out`), then unmounts. Expand mounts then animates (`--mds-transition-expand` + `--mds-transition-fade-in`). With `prefers-reduced-motion: reduce`, the body still mounts and unmounts, without the CSS transition. |
| `data-aria-level` | Sets the header's heading level (default `3`). Match the page's heading hierarchy. |
| `prefix-icon` | Optional decorative or context icon before the header text. Must be a valid icon name. |
| `disabled` | Prevents toggle; hides the body even if `expanded` is set. |

**Note:** `stacked`, `contained`, and group `borderless` are `mdc-accordiongroup` variants, not `mdc-accordionbutton` props.

### Limitations

- **Long titles don't truncate** — `header-text` wraps instead of truncating, so a long title can crowd the chevron. Keep titles short.
- **No internal panel scroll** — panels have no minimum or maximum height and render content in full. Keep scrolling at the page or container level and size content to avoid horizontal scrolling.
- **`disabled` hides the body** — the body stays hidden even when `expanded` is `true`, so a disabled accordion cannot reveal content. Remove `disabled` to expose the body.
- **Collapse keeps the body in the DOM until the height transition ends** — `shown` and `aria-expanded` update on toggle. With reduced motion, the body unmounts immediately.
- **Chevron can't be customized** — the chevron is component-managed (`arrow-down-bold` collapsed, `arrow-up-bold` expanded, `arrow-down-bold` when disabled) and cannot be hidden or replaced. Use a different component if you need a custom toggle affordance.
- **Initial `expanded` moves focus** — setting `expanded` on first render can move screen-reader focus unexpectedly. Prefer starting collapsed unless the open section is the primary content.

### Notes

- The `shown` event (React `onShown`) fires on every toggle with `{ expanded }` in its detail and bubbles, which is how `mdc-accordiongroup` coordinates single-open behavior.

## Accessibility

### Built-in features

The header is exposed as a heading, the toggle as a button, and both are linked to the panel; state stays in sync automatically and the control is fully keyboard-operable.

- Enter and Space toggle the panel while the header is focused.
- The chevron direction reflects the expanded state without extra work.

#### Internal ARIA managed by the component

- The header is wrapped in a `role="heading"` element whose `aria-level` follows `data-aria-level` (default 3).
- The header's interactive region has `role="button"` with `aria-expanded` set to the current state and `aria-controls` pointing at the panel's `id`.
- The expanded panel has `role="region"` and is `aria-labelledby` the header text. The region remains in the DOM while collapse motion runs.
- When `disabled`, the host reflects `aria-disabled="true"`.

### Implementation requirements

#### General

- Set `data-aria-level` to match the surrounding heading hierarchy (for example `data-aria-level="2"` when the accordion sits directly under an H1 section). An incorrect level misrepresents the document outline to screen-reader users.

#### Labeling

- The visible `header-text` is the accessible name of both the heading and the toggle (via `aria-labelledby`); provide a meaningful `header-text` and no additional label is needed. `mdc-accordionbutton` has no icon-only mode, so it never requires an `aria-label`.

## Related components

| Component | Relationship |
|---|---|
| `mdc-accordion` | Same visual family, extending `mdc-accordionbutton` with a separate toggle button. Use when the header needs interactive controls (icon buttons, chips, badges) beside the title. |
| `mdc-accordiongroup` | Wrapper for multiple `mdc-accordionbutton` or `mdc-accordion` items. Owns group layout (`stacked`, `borderless`, `contained`) and `allow-multiple`. |
