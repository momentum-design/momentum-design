---
title: Status message
summary: Usage, guidelines, and accessibility for the mdc-statusmessage component — a compact inline severity message with an optional icon, used for helper, validation, and status text.
tier: 3
component: statusmessage
---

## Overview

The status message is a compact inline message that pairs short text with an optional severity icon to communicate helper, validation, or status information next to the content it describes. It is the primitive behind form-field helper and validation text, and stays intentionally lightweight — it does not act like an alert or live region on its own.

### When to use

- Use `mdc-statusmessage` for a short inline message placed next to a related control, setting, or content region.
- Use `mdc-statusmessage` `error`, `warning`, `success`, or `priority` to give the message a severity state with a matching icon.

### When not to use

- Do not use `mdc-statusmessage` for standard field helper or validation text authored by hand. Use the form field's `help-text` / `help-text-type` API instead, which renders `mdc-statusmessage` for you.
- Do not use `mdc-statusmessage` when the message needs prominence, actions, or dismissal. Use `mdc-banner` instead.
- Do not use `mdc-statusmessage` for transient, auto-dismissing feedback. Use `mdc-toast` instead.
- Do not use `mdc-statusmessage` for a message that must block progress until acknowledged. Use `mdc-dialog` or `mdc-announcementdialog` instead.
- Do not use `mdc-statusmessage` when no severity styling or icon is needed. Use `mdc-text` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/statusmessage/index.js"; // custom element registration
// or via React wrapper
import { StatusMessage } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-statusmessage severity="warning" message="Connection is unstable"></mdc-statusmessage>
```

Use the default slot when the message needs markup or should not come through an attribute:

```html
<mdc-statusmessage severity="error">
  Choose a password with at least 12 characters.
</mdc-statusmessage>
```

### Composition

- Provide the message through the default slot (when it needs markup) or the `message` attribute; slotted content takes precedence over `message`.
- Override the built-in severity icon with the `icon` slot; the `default` severity renders no icon, so slot one in if a text-only message still needs a visual.

```html
<mdc-statusmessage severity="priority" message="Review before publishing">
  <mdc-icon slot="icon" name="info-badge-filled"></mdc-icon>
</mdc-statusmessage>
```

### Content guidance

- Keep messages short and actionable — say what happened or what to do next.
- Write the text so it carries the meaning on its own; do not rely on color or the icon to convey the severity.
- Keep the message inline-length; move long-form guidance to a surface built for it.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `severity` | Sets the color and default icon: `default` (text only, no icon), `error` (blocking problem), `warning` (caution), `success` (confirmation), `priority` (must-see notice). Match it to what the message means, not just its color. |
| `message` | Text fallback rendered when no meaningful default-slot content is provided. |

### Limitations

- **No live-region semantics** — the component sets no `role` or `aria-live`; announce it from the consuming surface if the message must be heard when it appears.
- **Inline scale only** — it is sized for short inline text, not long-form guidance; keep the copy brief.
- **Default is text-only** — only `error`, `warning`, `success`, and `priority` show a built-in icon; `default` renders none unless you provide one through the `icon` slot.

## Accessibility

### Built-in features

The component renders visible message text and an optional icon but adds no live-region or alert semantics of its own. This keeps it reusable for static helper text and non-urgent inline status, and leaves announcement behavior to the consuming surface.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host (`mdc-statusmessage`) | `role` | None set by the component |
| Host (`mdc-statusmessage`) | `aria-live` | None set by the component |

### Implementation requirements

#### General

- Add `role`, `aria-live`, or `aria-describedby` on the consuming surface when the message needs to be announced or associated with another control.
- For form fields, prefer the field component's helper-text API so label and helper-text ARIA wiring stay consistent.

#### Labeling

- If a custom icon carries meaning beyond the visible text, give the icon an accessible name or fold that meaning into the message text.
- If the icon is decorative, leave it unnamed and make sure the visible message reads completely on its own.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-formfieldwrapper` | Composes `mdc-statusmessage` to render the helper/validation text shared by every form field. |
| `mdc-banner` | For a prominent, persistent in-page message with actions or dismissal. |
| `mdc-toast` | For transient, auto-dismissing feedback that needs its own surface. |
| `mdc-text` | For plain inline text that needs no severity styling or icon. |
| `mdc-icon` | The glyph rendered for each severity and the element you slot in to override it. |
