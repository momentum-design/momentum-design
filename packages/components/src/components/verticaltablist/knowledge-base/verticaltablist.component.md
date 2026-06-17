---
title: Verticaltablist
summary: Usage, guidelines, and accessibility for the mdc-verticaltablist component — a vertically oriented tablist for switching between content panels.
tier: 3
component: verticaltablist
---

## Overview

`mdc-verticaltablist` organises a set of tabs vertically and lets users move between them with the up/down arrow keys, Home, End, and by clicking. It manages tab selection state and the active-tab semantics while the consumer renders the corresponding `tabpanel` content elsewhere in the DOM.

### When to use

- Provide vertical navigation between sibling content panels (settings categories, side-by-side detail views).
- When horizontal space is constrained or when the related content is naturally laid out beside the tab list.

### When not to use

- Use `mdc-tablist` for a horizontal arrangement of tabs.
- Use `mdc-sidenavigation` for top-level navigation between different pages or views rather than between related panels of the same view.
- Use `mdc-listbox` / `mdc-select` for selection of a value rather than switching between visible panels.

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

- Place only `mdc-tab` elements in the default slot. The component sets `variant="line"` automatically on any tab that is added; only the `line` variant is supported in vertical orientation.

### Property/Attribute details

- `data-aria-label` — accessible name applied to the tablist via `aria-label`. Required for screen-reader users to understand the purpose of the tab group.
- `initial-focus` — index of the tab that should receive focus when the component is first rendered (default `0`). Out-of-range values are clamped to a valid index.
- `loop` — `"true"` (default) or `"false"`. When `"true"`, arrow navigation wraps around at the ends of the list; when `"false"`, navigation stops at the first or last tab.
- The `change` event (`onChange`) is dispatched when the active tab changes. The new tab id is available on `event.detail.tabId`:

  ```ts
  tablist.addEventListener('change', (event) => {
    handleTabChange(event.detail.tabId);
  });
  ```

### Limitations

- Only the `line` variant of `mdc-tab` is supported; setting another variant on a child tab has no effect because the component overrides it on insertion.

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

#### Labelling

- Always set `data-aria-label` so the tablist has an accessible name; otherwise screen readers cannot describe the purpose of the tab group.
- Each tab needs an `aria-controls` attribute pointing at the id of its panel; each panel needs `aria-labelledby` pointing at its tab.
