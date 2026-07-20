---
title: Tab List
summary: Usage, guidelines, and accessibility for the mdc-tablist component — the container that organizes mdc-tab elements with roving focus and overflow scrolling.
tier: 3
component: tablist
---

## Overview

`mdc-tablist` is the container that turns a set of `mdc-tab` elements into an accessible tabs pattern, owning focus movement and selection across them. It keeps one panel selectable at a time and adds scroll controls automatically when the tabs overflow their width.

### When to use

- Use `mdc-tablist` to switch between several related content panels in the same view.
- Use `mdc-tablist` when one panel is visible at a time and the user can move between them.

### When not to use

- Do not use `mdc-tablist` for primary navigation between pages. Use `mdc-sidenavigation` or `mdc-appheader` navigation instead.
- Do not use `mdc-tablist` for a single panel or unrelated content. Show the content directly, or split it into separate pages or sections instead.
- Do not use `mdc-tablist` when the tabs must stack vertically. Use `mdc-verticaltablist` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/tablist/index.js"; // custom element registration
import "@momentum-design/components/dist/components/tab/index.js";
// or via React wrapper
import { TabList, Tab } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-tablist data-aria-label="Account sections">
  <mdc-tab tab-id="overview" text="Overview" active></mdc-tab>
  <mdc-tab tab-id="activity" text="Activity"></mdc-tab>
  <mdc-tab tab-id="billing" text="Billing"></mdc-tab>
</mdc-tablist>

<section id="overview-panel" role="tabpanel" aria-labelledby="overview">…</section>
```

Wire selection by listening to `change`:

```js
document.querySelector('mdc-tablist').addEventListener('change', (e) => {
  showPanel(e.detail.tabId);
});
```

For each tab, set `aria-controls="<panel-id>"` and on each panel set `role="tabpanel"` and `aria-labelledby="<tab-id>"`.

### Content guidance

- Keep the tab labels parallel — the same kind of phrase and a similar length across the set — so the group reads as one unit.
- Keep each label to a single short line; content must fit inside the tab without truncating or wrapping. Reword an over-long label rather than truncating it.
- Lead with the most important or most frequently used panel; when no tab is preset as active, the first enabled tab is selected by default.

### Property/Attribute details

| Option | Intent |
|---|---|
| `active-tab-id` | ID of the selected tab; reflects the active tab and updates as the user switches. When unset, the first enabled tab is selected by default. Set it to preselect or control the active tab. |
| `data-aria-label` | Accessible name for the tablist container, surfaced as the inner `tablist` element's `aria-label`. Set it when there is no visible heading above the tabs (see Labeling). |

The active tab is tracked by `active-tab-id`; if none is set, the first non-disabled tab activates after the first render. The default slot accepts `mdc-tab` elements (disabled tabs are skipped during navigation and initial selection). The list dispatches `change` (a bubbling `CustomEvent` with the new tab id on `event.detail.tabId`) when the user switches tabs — listen to this rather than each tab's own event.

### Limitations

- **Needs at least one tab** — an empty tab list reports an error via `onerror` and skips initialization.
- **Unique tab ids required** — duplicate `tab-id` values across children trigger an `onerror` report.
- **Horizontal only** — the list lays tabs out in a row; use `mdc-verticaltablist` when they must stack vertically.

## Accessibility

### Built-in features

- The inner container exposes `role="tablist"` with `tabindex="-1"` and the `aria-label` from `data-aria-label`.
- Arrow Left/Right move focus between tabs with roving `tabindex` (the focused tab gets `tabindex="0"`, all others `tabindex="-1"`).
- Home/End jump to the first or last tab (handled by the shared list navigation behavior).
- Disabled tabs are skipped during arrow-key navigation.
- The active tab is the only one with `aria-selected="true"`; all other tabs have `aria-selected="false"` (set by `mdc-tab`).
- Calling `.focus()` on the host forwards focus to the currently active tab rather than the shadow host. The list also uses `delegatesFocus` on its shadow root.
- When focus enters the tablist from outside, focus is moved to the active tab automatically.
- Forward/backward scroll arrow buttons appear automatically when the tabs overflow their container. Their visibility is recalculated via a `ResizeObserver`. The buttons swap sides in RTL layouts. If the focused arrow button is hidden, focus moves to the other arrow button, or to the active tab when both arrows disappear.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Inner container | `role` | `tablist` |
| Inner container | `tabindex` | `-1` |
| Inner container | `aria-label` | value of `data-aria-label` (when set) |
| Scroll arrow `mdc-button` | `aria-label` | "Scroll tabs left" / "Scroll tabs right" (direction reflects LTR/RTL) |
| Each child `mdc-tab` | `tabindex` | `0` for the active/focused tab, `-1` for all others (roving tabindex) |
| Each child `mdc-tab` | `aria-selected` | `true` when active, `false` otherwise |

### Implementation requirements

#### General

- Each tab must have an `aria-controls` attribute pointing at the `id` of its associated panel.
- Each panel element must have `role="tabpanel"` and `aria-labelledby` referencing its tab.
- If a tab opens a popup menu, set `aria-haspopup` on that tab to `menu` or `true`.

#### Labeling

- Provide `data-aria-label` when the tablist does not have a visible heading directly above it.

### Notes

- The tablist defines tabs semantics (`tablist`, `tab`, `aria-selected`) implicitly. Consumers must explicitly provide the panel semantics, the tab/panel wiring (`aria-controls` and `aria-labelledby`), and the accessible label for the list.

## Related components

| Component | Relationship |
|---|---|
| `mdc-tab` | The individual tab controls placed in the default slot. |
| `mdc-verticaltablist` | Vertical counterpart for stacked tabs. |
| `mdc-sidenavigation` | Use for page-to-page navigation rather than in-page panel switching. |
