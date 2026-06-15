---
title: App Header
summary: Usage, guidelines, and accessibility for the mdc-appheader component — a structured app header layout with leading, center, and trailing sections.
status: draft
tier: 3
component: appheader
---

## Overview

The app header provides a structured layout for the top of an application with three sections: leading, center, and trailing. Each section automatically handles flex alignment — leading aligns left, center aligns center, trailing aligns right.

### When to use

- Use `mdc-appheader` as the top-level bar of an application to host branding, primary navigation/search, and account or action controls in a consistent layout.

### When not to use

- Use a plain `<header>` element when you only need a simple top bar without the leading/center/trailing three-section structure.

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

### Content guidance

- **Leading** — typically the brand logo, brand name, or a menu/back icon.
- **Center** — search bar, primary navigation links, or quick action controls.
- **Trailing** — profile avatar, settings, notifications, or other account-level controls.

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
- Provide accessible names for any interactive controls slotted into the header (logos, buttons, search field) — the header itself does not label its contents.
