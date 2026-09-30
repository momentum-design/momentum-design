---
title: AI Assistant Prompt
summary: Usage, guidelines, and accessibility for the mdc-aiassistantprompt component — a composer field with a native textarea and header and footer regions inside one field chrome.
tier: 3
component: aiassistantprompt
---

## Overview

The `mdc-aiassistantprompt` gives people a single composer field for an assistant prompt so contextual chips and actions can sit in the same chrome as the typeable area. It exists for AI input that needs more structure than a plain textarea while remaining a reusable, product-agnostic field.

### When to use

- Use `mdc-aiassistantprompt` when people compose an assistant prompt and related chips or actions must stay inside the same field chrome.
- Use `mdc-aiassistantprompt` when removable tokens such as `mdc-inputchip` should sit above the typeable area without leaving the field.
- Use `mdc-aiassistantprompt` when footer actions such as add, source, voice, and send should sit inside the field, split between left- and right-aligned groups.

### When not to use

- Do not use `mdc-aiassistantprompt` for a standard multi-line form field. Use `mdc-textarea` instead.
- Do not use `mdc-aiassistantprompt` for a single-line form field. Use `mdc-input` instead.
- Do not use `mdc-aiassistantprompt` when search results or a filtered option list should be owned by the field as a combobox. Use `mdc-searchpopover` or `mdc-combobox` instead.
- Do not use `mdc-aiassistantprompt` if you need the widget to own menus, chip removal, or voice state. Those behaviors stay with the consuming product.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import '@momentum-design/components/dist/components/aiassistantprompt/index.js';
// or via React wrapper
import { AIAssistantPrompt } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-aiassistantprompt
  name="prompt"
  placeholder="Ask about the Example project"
  data-aria-label="AI assistant prompt"
>
  <mdc-inputchip slot="header" label="Today's Tasks" clear-aria-label="Remove Today's Tasks"></mdc-inputchip>
  <mdc-button slot="footer-left" variant="tertiary" size="24" prefix-icon="plus-bold" aria-label="Add to prompt"></mdc-button>
  <mdc-button slot="footer-right" variant="primary" size="32" prefix-icon="arrow-tail-up-bold" aria-label="Send prompt"></mdc-button>
</mdc-aiassistantprompt>
```

Listen for native `input` on each keystroke and `change` when the value is committed on blur. Place flyouts such as `mdc-menupopover` as siblings of the host, not inside the slots.

### Composition

- Put contextual tokens in the `header` slot. `mdc-inputchip` is the usual child; the prompt does not remove chips when their close control is activated.
- Put left-aligned actions in `footer-left` and right-aligned actions in `footer-right`. Typical children are `mdc-button` instances.
- Keep menus, suggestion lists, and other overlays outside the host. The field chrome uses `overflow: hidden`, so a slotted popover is clipped.
- When a suggestion is chosen, set the prompt `value` from the item label. The widget does not fill the field for you.
- Leave a slot empty when that region should not appear; empty header and footer columns are hidden.

### Content guidance

- Write the placeholder as a short, specific invitation to ask, such as “Ask about the Example project”, not a generic “Type here”.
- Keep header chip labels to a short noun phrase in sentence case, and pair each with a matching `clear-aria-label` such as “Remove Today's Tasks”.
- Name icon-only footer buttons by the action they start, such as “Add to prompt”, “Start voice input”, or “Send prompt”.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `placeholder` | Hint shown when the textarea is empty. Use it to name the topic people can ask about. |
| `rows` (default `1`) | Visible line count of the native textarea. Keep the default for a compact composer; raise it only when the product always expects a taller starting field. |
| `disabled` | Blocks typing and chrome hover or focus styling. Use it when the prompt is unavailable. |
| `readonly` | Allows reading the value without editing. Use it when the prompt should be visible but not changed. |
| `data-aria-label` | Accessible name forwarded to the inner textarea. Required when there is no other name for the field. |
| `name` / `value` | Form field identity and current text. The host is form-associated and submits `value`. |

### Limitations

- **Flyouts must be siblings** — the prompt chrome clips overflow, so `mdc-menupopover` and `mdc-popover` will not paint correctly if slotted inside. Place them next to the host and point `triggerID` at the slotted trigger or the prompt id.
- **Menus and chips are yours** — the widget does not open menus, toggle voice icons, or remove chips. Listen for the child's events and update your own DOM.
- **Native textarea, not `mdc-textarea`** — header and footer must share one chrome with the typeable area, so the inner control is a native `<textarea>`. Do not replace it with `mdc-textarea`.
- **Empty regions hide** — without slotted header or footer content, those parts are not shown. Slot at least one node when the region should appear.

## Accessibility

### Built-in features

The typeable area is a native `<textarea>` inside the field chrome. `data-aria-label` is forwarded as `aria-label` on that textarea. Clicking the chrome focuses the textarea unless the click lands on the header or footer, so people can start typing without hunting for the inner control. `disabled` and `readonly` use the native textarea attributes. The host is form-associated, so the current `value` participates in form submit, reset, and restore.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Inner `<textarea>` | `aria-label` | Mirrors `data-aria-label` when set |
| Inner `<textarea>` | `disabled` | Mirrors host `disabled` |
| Inner `<textarea>` | `readonly` | Mirrors host `readonly` |
| Inner `<textarea>` | `name` | Mirrors host `name` |

### Implementation requirements

#### Labeling

- Set `data-aria-label` on the host so the inner textarea has an accessible name (for example “AI assistant prompt”).
- Give every icon-only slotted button its own `aria-label` that names the action.
- Give each header `mdc-inputchip` a `clear-aria-label` that names the chip being removed.
- Give consumer-owned popovers and menus their own `aria-label`; the prompt does not name those overlays.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-textarea` | Standard multi-line form field without in-chrome header or footer regions. |
| `mdc-input` | Single-line form field; use it when the prompt does not need multiple lines or in-field actions. |
| `mdc-inputchip` | Typical `header` slot child for removable context tokens; the prompt does not own chip removal. |
| `mdc-button` | Typical `footer-left` and `footer-right` child for composer actions. |
| `mdc-menupopover` | Overlay for add, adjust, and source menus; keep it as a sibling of the prompt so it is not clipped. |
| `mdc-searchpopover` | Search field that owns a results popover; use it for search, not for composing an assistant prompt. |
