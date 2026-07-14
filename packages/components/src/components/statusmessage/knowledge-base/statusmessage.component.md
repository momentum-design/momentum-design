---
title: Status Message
summary: Usage, guidelines, and accessibility for the mdc-statusmessage component - an inline severity message with optional icon.
status: draft
tier: 3
component: statusmessage
---

## Overview

The status message is a compact inline message used to communicate helper, validation, or status text with an optional severity icon. It is intentionally lightweight and does not behave like an alert or live region by default.

### When to use

- Use `mdc-statusmessage` for short inline messages that sit near a related control, setting, or content region.
- Use a severity when the message needs a visual state such as error, warning, success, or priority.
- Use the `icon` slot when a custom visual icon is required instead of the built-in severity icon.

### When not to use

- Use `mdc-banner`, `mdc-toast`, or `mdc-announcementdialog` when the message needs more prominence, actions, dismissal, or system-level announcement behaviour.
- Use form components' `help-text` APIs for standard field helper or validation text; those components compose `mdc-statusmessage` internally.
- Use plain `mdc-text` when no severity styling or icon treatment is needed.

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

Use the default slot when the message needs markup or should not be provided through an attribute:

```html
<mdc-statusmessage severity="error">
  Choose a password with at least 12 characters.
</mdc-statusmessage>
```

Use the `icon` slot to override the built-in severity icon:

```html
<mdc-statusmessage severity="priority" message="Review before publishing">
  <mdc-icon slot="icon" name="info-badge-filled"></mdc-icon>
</mdc-statusmessage>
```

### Content guidance

- Keep messages concise and actionable.
- Prefer direct wording that tells the user what happened or what to do next.
- Do not rely on color or icon alone; the text should carry the meaning of the severity.

### Property/Attribute details

- `severity` — controls color and the default icon. Supported values are `default`, `error`, `warning`, `success`, and `priority`. `default` renders no icon.
- `message` — text fallback rendered when no meaningful default slot content is provided.
- Default slot — message content. Meaningful slotted content takes precedence over the `message` attribute.
- `icon` slot — custom icon content. When provided, it replaces the built-in severity icon.

### Limitations

- The component does not set `role`, `aria-live`, or alert semantics automatically.
- The component is not a container for long-form guidance; use concise text that can sit inline with surrounding UI.

## Accessibility

### Built-in features

The component renders visible message text and an optional icon, but does not add live-region or alert semantics on its own. This keeps it reusable for static helper text and non-urgent inline status messages.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host (`mdc-statusmessage`) | `role` | None set by the component |
| Host (`mdc-statusmessage`) | `aria-live` | None set by the component |

### Implementation requirements

#### General

- Add `role`, `aria-live`, or `aria-describedby` on the consuming surface when the message needs to be announced or associated with another control.
- For form fields, prefer the field component's helper-text API so the component can keep its own label and helper-text ARIA wiring consistent.
- Treat icons as supporting visuals; the message text must communicate the actual state.

#### Labelling

- If a custom icon carries additional meaning beyond the visible message text, provide an accessible name on the icon or include that meaning in the message text.
- If the icon is decorative, leave it unnamed and ensure the visible message is complete on its own.
