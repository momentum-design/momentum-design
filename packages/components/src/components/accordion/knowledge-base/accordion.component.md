---
title: Accordion
summary: Usage, guidelines, and accessibility for the mdc-accordion component — a vertically stacked component whose header holds interactive controls beside a dedicated expand/collapse toggle button.
tier: 3
component: accordion
---

## Overview

`mdc-accordion` stacks a header above a collapsible panel and expands or collapses it through one dedicated toggle button, leaving the rest of the header free for other controls. It exists for sections that need their own chips, badges, or icon buttons next to the title without those controls fighting the expand/collapse action.

### When to use

- Use `mdc-accordion` for a section whose header must carry interactive controls — icon buttons, chips, badges — alongside the expand/collapse behavior, so a separate toggle button keeps each control's action unambiguous.
- Use `mdc-accordion` for a section that needs a status indicator or quick action beside the title without that control opening the panel.

### When not to use

- Do not use `mdc-accordion` when the header only needs a title and the whole header should toggle the panel. Use `mdc-accordionbutton` instead — it is simpler and needs no separate toggle label.
- Do not use `mdc-accordion` for content that must all stay visible at once, or when the hidden content is critical. Render the content inline instead.
- Do not use separate `mdc-accordion` instances to manage several related sections. Use `mdc-accordiongroup` instead so shared styling and single-open behavior stay coordinated.

## Guidelines

### Developer usage

Register the custom element, or import the React wrapper:

```tsx
import "@momentum-design/components/dist/components/accordion/index.js"; // custom element registration
// or via React wrapper
import { Accordion } from '@momentum-design/components/dist/react';
```

The default slot holds the body; slot header controls into `leading-controls` and `trailing-controls`, and always label the toggle:

```html
<mdc-accordion
  header-text="Section title"
  open-button-aria-label="Expand section"
  close-button-aria-label="Collapse section"
>
  <mdc-button slot="trailing-controls" prefix-icon="settings-bold" aria-label="Section settings"></mdc-button>
  Body content goes here.
</mdc-accordion>
```

### Content guidance

- Keep `header-text` a short, specific summary of the panel — it is the cue people scan before expanding. The header does not truncate, so keep it to a few words.
- Give every control you slot into the header a concise, action-led visible label so its purpose reads independently of the accordion.

### Property/Attribute details

| Option | Intent |
|---|---|
| `open-button-aria-label` / `close-button-aria-label` | Accessible names for the icon-only toggle in its collapsed and expanded states. Provide both — the toggle has no visible text. |
| `variant="default"` (default) | Bordered, rounded container. Use when the accordion is a distinct object on the page. |
| `variant="borderless"` | No outer border; bottom divider when collapsed. Use when embedded in structured layouts. |
| `size="small"` (default) | 16px padding. Default for most contexts. |
| `size="large"` | 24px padding. Use when the accordion is a primary content block or touch targets need more space. |
| `toggle-position="trailing"` (default) | Chevron at the end (right in LTR). Standard pattern. |
| `toggle-position="leading"` | Chevron at the start. Use only when layout or RTL patterns require it. |
| `expanded` | Controls panel visibility. Defaults to `false` (collapsed). Inherited AccordionButton motion applies: the body stays mounted through collapse, then unmounts. Reduced motion skips the CSS transition but still mounts and unmounts. |
| `data-aria-level` | Sets the header's heading level (default `3`). Match the page's heading hierarchy. |
| `prefix-icon` | Optional decorative icon before the header text. Use the header control slots for interactive icons. |
| `disabled` | Prevents toggle; hides the body even if `expanded` is set, and disables slotted header controls. |

**Note:** Inside `mdc-accordiongroup`, the group sets `size` and `variant` for every child.

### Limitations

- **Header text won't toggle** — only the dedicated toggle button expands or collapses the panel; clicking the header text or a slotted control does not, by design, so header controls keep their own actions. Use `mdc-accordionbutton` to make the whole header toggle.
- **Long titles don't truncate** — `header-text` wraps instead of truncating, so a long title can crowd the header controls. Keep titles short.
- **No internal panel scroll** — panels have no minimum or maximum height and render content in full. Keep scrolling at the page or container level and size content to avoid horizontal scrolling.
- **`disabled` hides the body** — the body stays hidden even when `expanded` is `true`, and all slotted header controls are disabled too. Remove `disabled` to expose the body and re-enable the controls.
- **Collapse keeps the body in the DOM until the height transition ends** — same as AccordionButton. `shown` still fires on toggle so AccordionGroup can close siblings without waiting for motion.
- **Header `shown` events don't bubble** — a `shown` event from a slotted header control is stopped at the header, so it is not confused with the accordion's own `shown` event.
- **Initial `expanded` moves focus** — setting `expanded` on first render can move screen-reader focus unexpectedly. Prefer starting collapsed unless the open section is the primary content.

### Notes

- The accordion's own `shown` event (React `onShown`) fires on every toggle with `{ expanded }` in its detail and bubbles, which is how `mdc-accordiongroup` coordinates single-open behavior.

## Accessibility

### Built-in features

The header text is exposed as a heading and the toggle as a button linked to the panel; state stays in sync automatically. Because the header is not itself clickable, each slotted control keeps its own focus and action.

#### Internal ARIA managed by the component

- The header text is wrapped in a `role="heading"` element whose `aria-level` follows `data-aria-level` (default 3).
- The toggle button has `aria-expanded` set to the current state and `aria-controls` pointing at the panel's `id`, and takes its `aria-label` from `open-button-aria-label` or `close-button-aria-label` depending on state.
- The expanded panel is exposed as a region tied to the header.

### Implementation requirements

#### General

- Set `data-aria-level` to match the surrounding heading hierarchy (for example `data-aria-level="2"` when the accordion sits directly under an H1 section). An incorrect level misrepresents the document outline to screen-reader users.
- Ensure every interactive control you slot into the header carries its own accessible name.

#### Labeling

- **Always** provide both `open-button-aria-label` and `close-button-aria-label`, and write them as clear state actions ("Expand section" / "Collapse section"). The toggle is icon-only, so without them screen-reader users cannot tell what the button does. The visible `header-text` names the heading, not the toggle.

## Related components

| Component | Relationship |
|---|---|
| `mdc-accordionbutton` | Same visual family, but the whole header toggles the panel and it needs no separate toggle label. Use when the header only needs a title. |
| `mdc-accordiongroup` | Wrapper for multiple `mdc-accordion` or `mdc-accordionbutton` items. Owns group layout (`stacked`, `borderless`, `contained`) and `allow-multiple`. |
