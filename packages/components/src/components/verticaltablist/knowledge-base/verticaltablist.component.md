---
title: Verticaltablist
summary: Usage, guidelines, and accessibility for the mdc-verticaltablist component — a vertically oriented tablist for switching between content panels.
tier: 3
component: verticaltablist
---

## Overview

`mdc-verticaltablist` is the vertical counterpart to `mdc-tablist`, stacking `mdc-tab` elements down the side of their content so users can switch panels when horizontal space is limited. It owns selection and active-tab semantics while the consumer renders the matching `tabpanel` content elsewhere in the DOM.

### When to use

- Use `mdc-verticaltablist` to switch between sibling content panels stacked vertically (settings categories, side-by-side detail views).
- Use `mdc-verticaltablist` when horizontal space is constrained or the related content sits beside the tab list.

### When not to use

- Do not use `mdc-verticaltablist` for a horizontal row of tabs. Use `mdc-tablist` instead.
- Do not use `mdc-verticaltablist` for top-level navigation between pages or views. Use `mdc-sidenavigation` instead.
- Do not use `mdc-verticaltablist` to pick a value rather than switch visible panels. Use `mdc-listbox` or `mdc-select` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/verticaltablist/index.js"; // custom element registration
// or via React wrapper
import { Verticaltablist } from '@momentum-design/components/dist/react';
```

Minimal markup example. Each `mdc-tab` must point at its associated panel via `aria-controls`, and each panel must point back via `aria-labelledby`:

```html
<mdc-verticaltablist data-aria-label="Settings sections">
  <mdc-tab id="tab-account" tab-id="account" text="Account" aria-controls="panel-account" active></mdc-tab>
  <mdc-tab id="tab-billing" tab-id="billing" text="Billing" aria-controls="panel-billing"></mdc-tab>
</mdc-verticaltablist>

<section id="panel-account" role="tabpanel" aria-labelledby="tab-account">...</section>
<section id="panel-billing" role="tabpanel" aria-labelledby="tab-billing" hidden>...</section>
```

### Content guidance

- Keep the tab labels parallel — the same kind of phrase and a similar length across the set — so the group reads as one unit.
- Keep each label to a single short line; in a vertical stack a label long enough to wrap is more disruptive than in a horizontal row. Reword an over-long label rather than truncating it.
- Lead with the most important or most frequently used panel; when no tab is preset as active, the first enabled tab is selected by default.

### Property/Attribute details

| Option | Intent |
|---|---|
| `active-tab-id` | ID of the selected tab; reflects the active tab and updates as the user switches. When unset, the first enabled tab is selected by default. Set it to preselect or control the active tab. |
| `data-aria-label` | Accessible name for the tab group, surfaced as the tablist's `aria-label`. Always set it so screen-reader users understand the group's purpose (see Labeling). |
| `initial-focus="0"` (default) | Index of the tab focused when the component first renders; out-of-range values clamp to a valid index. Set it when the most useful starting tab is not the first. |
| `loop="true"` (default) | Whether Up/Down arrow navigation wraps at the ends. Keep `true` for continuous cycling; set `false` when the ends should stop. |

The `change` event (`onChange`) fires when the active tab changes, with the new tab id on `event.detail.tabId`. Place only `mdc-tab` elements in the default slot.

### Limitations

- **Line variant only** — the component forces `variant="line"` on every child tab on insertion, so any other variant set on a child has no effect.
- **Vertical orientation only** — for a horizontal row of tabs use `mdc-tablist`.
- **Consumer renders panels** — the component owns tab selection but not the panels; render a `role="tabpanel"` element per tab and toggle visibility from the selected tab.

## Accessibility

### Built-in features

- The host element exposes the tablist semantics required by WCAG: `role="tablist"`, `aria-orientation="vertical"`, and `aria-label` from `data-aria-label`.
- The active tab is given the `aria-selected="true"` state by the surrounding tab management; all other tabs receive `aria-selected="false"`.
- Keyboard navigation: Up/Down arrow keys move between tabs (with optional wrap-around via `loop`), Home jumps to the first tab, End to the last, and clicks select a tab. Enter and Space activate the focused tab.
- Roving tabindex: only the currently selected tab is in the tab order (`tabindex="0"`); the others receive `tabindex="-1"` so Tab moves out of the tablist instead of through every tab.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host (`mdc-verticaltablist`) | `role` | `tablist` |
| Host | `aria-orientation` | `vertical` |
| Host | `aria-label` | The value of `data-aria-label` |
| Inner container slot | `role` | `presentation` (kept out of the accessibility tree) |
| Each `mdc-tab` | `role` | `tab` |
| Active `mdc-tab` | `aria-selected` | `true` |
| Inactive `mdc-tab` | `aria-selected` | `false` |
| Each `mdc-tab` | `tabindex` | `0` for the active tab, `-1` for the others |

### Implementation requirements

#### General

- Render a separate element with `role="tabpanel"` for each tab and toggle its visibility based on the selected tab.
- Reflect the active tab's selection in the application state so the rendered panel matches the user's choice.

#### Labeling

- Always set `data-aria-label` so the tablist has an accessible name; otherwise screen readers cannot describe the purpose of the tab group.
- Each tab needs an `aria-controls` attribute pointing at the id of its panel; each panel needs `aria-labelledby` pointing at its tab.

## Related components

| Component | Relationship |
|---|---|
| `mdc-tablist` | Horizontal counterpart for a row of tabs. |
| `mdc-tab` | The individual tab controls placed in the default slot (line variant only). |
| `mdc-sidenavigation` | Use for page-to-page navigation rather than in-page panel switching. |
| `mdc-listbox` / `mdc-select` | Use to pick a value rather than switch visible panels. |
