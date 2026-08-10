---
title: App Header
summary: Usage, guidelines, and accessibility for the mdc-appheader component — a structured app header layout with leading, center, and trailing sections.
tier: 3
component: appheader
---

## Overview

`mdc-appheader` is the top-level shell bar of an application, giving branding, global search or navigation, and account controls a consistent three-section layout. It typically stays visible as the user moves between pages, so global controls remain in one predictable place.

### When to use

- Use `mdc-appheader` as the top-level bar of an application to host branding, primary navigation or search, and account or action controls in a consistent layout.
- Use `mdc-appheader` for controls that should persist across pages, so they stay in a fixed location as the main view changes.

### When not to use

- Do not use `mdc-appheader` for a simple top bar that needs no leading/center/trailing structure. Use a plain `<header>` element instead.
- Do not use `mdc-appheader` for primary section-to-section navigation down the side of the page. Use `mdc-sidenavigation` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/appheader/index.js"; // custom element registration
// or via React wrapper
import { Appheader } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-appheader>
  <mdc-brandvisual slot="leading" name="logo"></mdc-brandvisual>
  <mdc-searchfield slot="center"></mdc-searchfield>
  <mdc-avatarbutton slot="trailing" initials="AB"></mdc-avatarbutton>
</mdc-appheader>
```

### Property/Attribute details

The component exposes no attributes; it is configured entirely through its three slots, each with a fixed alignment.

| Option | Intent |
|---|---|
| `leading` slot (left-aligned) | Brand identity and wayfinding — the brand logo or name, or a menu/back control. |
| `center` slot (center-aligned) | Global search, primary navigation links, or quick action controls. |
| `trailing` slot (right-aligned) | Account-level controls — profile avatar, settings, notifications, or actions. |

### Limitations

- **Layout only** — the header arranges slotted content but adds no navigation, search, or account behavior; each slotted control owns its own logic and accessible name.
- **One per page** — use a single `mdc-appheader` at the top of the document; more than one `banner` landmark confuses assistive technologies.

## Accessibility

### Built-in features

The component renders its container as a `<header>` landmark element, exposing the app header as a `banner` landmark to assistive technologies by default when used at the top of the document.

#### Internal ARIA managed by the component

| Element              | Attribute | Value                                       |
| -------------------- | --------- | ------------------------------------------- |
| Container (`header`) | `role`    | Implicit `banner` (from the `<header>` tag) |

### Implementation requirements

#### General

- Use only one `mdc-appheader` per page; multiple `banner` landmarks confuse assistive technologies.

#### Labeling

- Provide accessible names for any interactive controls slotted into the header (logos, buttons, search field) — the header itself does not label its contents.

## Related components

| Component | Relationship |
|---|---|
| `mdc-sidenavigation` | Primary section-to-section navigation, paired with the header in the app shell. |
| `mdc-brandvisual` | Brand logo commonly slotted into `leading`. |
| `mdc-searchfield` | Global search commonly slotted into `center`. |
| `mdc-avatarbutton` | Account entry point commonly slotted into `trailing`. |
| `mdc-button` | Action and icon controls slotted across the sections. |
