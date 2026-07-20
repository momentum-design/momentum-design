---
title: Tab
summary: Usage, guidelines, and accessibility for the mdc-tab component — an individual tab control used inside mdc-tablist.
tier: 3
component: tab
---

## Overview

`mdc-tab` is a single tab control inside an `mdc-tablist`, representing one panel of related content the user can switch to. It shows which panel is currently active, while the parent `mdc-tablist` owns focus movement and selection.

### When to use

- Use `mdc-tab` inside an `mdc-tablist` to represent one panel of related content the user can switch to.
- Use `mdc-tab` `pill` for the primary level of tabs, and `line` for a secondary level nested within a pill-tab view.

### When not to use

- Do not use `mdc-tab` to navigate between separate pages. Use `mdc-sidenavigation` or `mdc-appheader` navigation instead.
- Do not use `mdc-tab` on its own outside an `mdc-tablist`. Place it inside `mdc-tablist` or `mdc-verticaltablist` instead, which own roving focus and selection.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/tab/index.js"; // custom element registration
// or via React wrapper
import { Tab } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-tablist data-aria-label="Account sections">
  <mdc-tab tab-id="overview" text="Overview" icon-name="info-circle-regular" active></mdc-tab>
  <mdc-tab tab-id="activity" text="Activity" icon-name="activity-regular">
    <mdc-badge slot="postfix" type="dot"></mdc-badge>
  </mdc-tab>
</mdc-tablist>
```

### Content guidance

- Keep labels short, clear, and on a single line — content must fit inside the tab without truncating or wrapping to a second line; reword an over-long label (with a content designer) rather than shortening with an ellipsis.
- Use consistent casing across the tabs in one set so they read as a group.
- Use icons on every tab in a set or none at all — do not add an icon to only a few tabs.

### Property/Attribute details

| Option | Intent |
|---|---|
| `variant="pill"` (default) | Sets background and indicator styling and signals hierarchy. Use `pill` for the primary level of tabs, `line` for a secondary level nested inside a pill-tab view, and `glass` only for high-contrast surfaces where that treatment is called for. |
| `size="32"` (default) | Row height: `32` (2rem) for standard density, `28` (1.75rem) for compact contexts. |
| `tab-id` (required) | Unique identifier the parent `mdc-tablist` uses to track selection; duplicates make the list report an error. |
| `text` | The visible label. When omitted, the tab shows only its icon and you must supply an `aria-label` (see Content guidance and Labeling). |
| `icon-name` | Regular icon rendered in the prefix; the component renders the matching `-filled` icon and swaps to it when the tab is active. |
| `active` (default `false`) | Toggles the visual active state and mirrors it to `aria-selected`. Selection is normally driven by the parent list, not set per tab. |
| `disabled` | Removes the tab from the tab order and marks it `aria-disabled`; the parent list skips it during arrow-key navigation. |
| `soft-disabled` | Looks disabled but stays focusable and clickable with `aria-disabled="true"`; you must prevent the action yourself. |

The tab dispatches native `click` / `keydown` / `keyup` / `focus` events, plus `activechange` (`detail: { tabId, active }`). Inside `mdc-tablist`, listen to the list's `change` event rather than `activechange`. Slots: `prefix` (defaults to the `icon-name` icon) and `postfix` (a badge or chip — see Limitations).

### Limitations

- **Needs a tablist** — a tab has no roving focus or selection wiring on its own; place it inside `mdc-tablist` or `mdc-verticaltablist`.
- **Badge or chip, not both** — the `postfix` slot takes an `mdc-badge` or an `mdc-chip`, not both in the same tab.
- **Selection lives on the list** — the list owns the active tab, so listen to its `change` event; the tab's own `activechange` will double-fire if you also handle it.

## Accessibility

### Built-in features

- The host element exposes `role="tab"`.
- The active state is mirrored to `aria-selected` on the host (the `ariaStateKey` is set to `aria-selected`, so `active="true"` writes `aria-selected="true"`, `false` writes `aria-selected="false"`, and `undefined` removes the attribute).
- Enter activates the tab; Space activates on key-up. The host also listens for blur to clear the visual `pressed` state if the key is released outside the element.
- The native form `type` attribute is cleared on connect so the tab does not submit forms when nested inside one.
- When `disabled` is set, the tab is removed from the tab order, marked `aria-disabled="true"`, and the parent list skips it during arrow-key navigation.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host element | `role` | `tab` |
| Host element | `aria-selected` | `true` when `active`, `false` when not active, removed when `active` is `undefined` |
| Host element | `aria-disabled` | `true` when `disabled` or `soft-disabled` |
| Host element | `aria-pressed` | not used (overridden to `aria-selected`) |

### Implementation requirements

#### General

- Wire each tab to its panel by setting `aria-controls` on the tab pointing at the panel element's `id`.
- The corresponding content panel element must have `role="tabpanel"` and `aria-labelledby` referencing the tab's `id`.
- If a tab opens a popup menu, set `aria-haspopup` on it to either `menu` or `true`.

#### Labeling

- When `text` is omitted, provide an `aria-label` on the tab so screen reader users hear a meaningful name.

### Notes

- When the tab lives inside `mdc-tablist`, listen to the list's `change` event for selection changes rather than the tab's `activechange` event to avoid duplicate handlers.

## Related components

| Component | Relationship |
|---|---|
| `mdc-tablist` | Horizontal container that owns focus and selection for these tabs. |
| `mdc-verticaltablist` | Vertical container for stacked tabs (line variant only). |
| `mdc-badge` | Status indicator slotted into `postfix`. |
| `mdc-chip` | Metadata slotted into `postfix` (not alongside a badge). |
| `mdc-sidenavigation` | Use for page-to-page navigation instead of tabs. |
