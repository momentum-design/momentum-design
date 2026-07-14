---
title: Tab List
summary: Usage, guidelines, and accessibility for the mdc-tablist component — the container that organizes mdc-tab elements with roving focus and overflow scrolling.
tier: 3
component: tablist
---

## Overview

The tab list organises a row of `mdc-tab` elements into a horizontal container. It implements the WAI-ARIA tabs pattern: roving focus with arrow keys, click or Enter/Space activation, and automatic scroll arrow buttons when the tabs overflow their container.

### When to use

- Use to switch between several related content panels in the same view.
- Use when one panel is visible at a time and the user can move between them.

### When not to use

- Do not use for primary navigation between pages.
- Do not use when there is only one panel or when the panels are conceptually unrelated.

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

### Property/Attribute details

- `data-aria-label` (string) — label for the tablist container. Used when a visible label is not present and surfaced as the `aria-label` of the inner `tablist` element.
- Active tab is tracked internally via the child tab `tab-id`. If no tab starts active, the first non-disabled tab is activated after the first render.

The component dispatches:

- `change` — bubbling `CustomEvent` fired when the user changes the active tab. The new tab id is on `event.detail.tabId`.

Slots:

- Default slot accepts `mdc-tab` elements. Disabled tabs are skipped during arrow-key navigation and from initial-active selection.

### Limitations

- A tab list with no child `mdc-tab` elements reports an error via `onerror` and skips initialization.
- Every child tab must have a unique `tab-id`; duplicates trigger an `onerror` report.

## Accessibility

### Built-in features

- The inner container exposes `role="tablist"` with `tabindex="-1"` and the `aria-label` from `data-aria-label`.
- Arrow Left/Right move focus between tabs with roving `tabindex` (the focused tab gets `tabindex="0"`, all others `tabindex="-1"`).
- Home/End jump to the first or last tab (handled by the shared list navigation behaviour).
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

#### Labelling

- Provide `data-aria-label` when the tablist does not have a visible heading directly above it.

### Notes

- The tablist defines tabs semantics (`tablist`, `tab`, `aria-selected`) implicitly. Consumers must explicitly provide the panel semantics, the tab/panel wiring (`aria-controls` and `aria-labelledby`), and the accessible label for the list.
