---
title: FocusTrap
summary: Traps keyboard focus within a container, preventing users from tabbing outside its bounds and ensuring focus is restored when the trap is deactivated.
tier: 3
component: focustrap
---

## Overview

FocusTrap is a container component that manages keyboard focus within a specified region. It prevents focus from moving outside the container via Tab/Shift+Tab and optionally restores focus to the previously focused element when the trap is deactivated. Commonly used in modals, dialogs, popovers, and other overlay patterns to improve accessibility and user experience.

### When to use

- **Custom Modals and dialogs** – Trap focus so users interact only with the dialog content.
- **Custom Popovers and menus** – Keep focus within an overlay component.
- **Custom Dropdown menus** – Ensure focus stays within menu options while open.
- **Multi-step forms** – Control focus flow between steps or sub-sections.
- **Accessible disclosure widgets** – Any collapsible or hidden content that should capture focus when revealed.

### When not to use

- **Full-page navigation** – Do not trap focus on the main page; only use on transient overlays.
- **Optional or advisory overlays** – If users can dismiss the overlay and continue with the page, consider whether focus trapping is necessary.
- **Nested focus traps** – Avoid nesting multiple FocusTrap instances; the innermost trap will dominate focus behavior. MDC Dialog, popover and menu components already implement FocusTrap internally, so wrapping them in another FocusTrap is unnecessary and may cause unexpected behavior.

## Guidelines

### Developer usage

Import and use the `<mdc-focustrap>` web component to wrap any focusable content:

```html
<mdc-focustrap disabled="false" auto-focus="false">
  <input type="text" placeholder="First input" />
  <input type="text" placeholder="Second input" />
  <button>Submit</button>
</mdc-focustrap>
```

**React / TypeScript integration:**

```tsx
import { FocusTrap } from '@momentum-design/components/react';

export function MyModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <FocusTrap
        disabled={false}
        disableRestoreFocus={false}
        autoFocus={true}
      >
        <h2>Modal Title</h2>
        <input type="text" placeholder="Name" />
        <button onClick={() => setIsOpen(false)}>Close</button>
      </FocusTrap>
    )
  );
}
```

**Package import:** `@momentum-design/components`  
**Custom element tag:** `mdc-focustrap`

### Property/Attribute details

- **`disabled`** (boolean, default: `false`)  
  When `true`, focus trapping is disabled. When `false`, focus is trapped within the component. This is the inverse of the `contain` prop in `@react-aria/focus`.

- **`disable-restore-focus` / `disableRestoreFocus`** (boolean, default: `false`)  
  When `true`, focus is not restored to the previously focused element when the trap is deactivated or the component is removed from the DOM. When `false`, focus returns to the element that had focus before the trap was activated.

- **`auto-focus` / `autoFocus`** (boolean, default: `false`)  
  When `true`, the first focusable element inside the container automatically receives focus when focus trapping is enabled. When `false`, no automatic focus is set.

- **`should-focus-trap-wrap` / `shouldFocusTrapWrap`** (boolean, default: `true`)  
  When `true` (default), Tab from the last focusable element wraps to the first, and Shift+Tab from the first wraps to the last. When `false`, Tab/Shift+Tab does not wrap; focus exits the trap.

### Limitations

- **Single trap per overlay** – Multiple nested FocusTrap instances may produce unexpected behavior. Only the innermost trap will fully control focus.
- **Required focusable content** – The FocusTrap requires at least one focusable element (button, input, link, etc.) inside it. An empty or content-only container has no effect.
- **Focus management outside content** – The trap manages focus within its slot content only. External DOM elements or adjacent overlays are not affected.
- **Slotted content only** – The FocusTrap does not trap focus on direct child elements added programmatically after render; slot-based content is required.

### Notes

FocusTrap is built on the `FocusTrapMixin` utility and is designed to complement accessible overlay patterns. For complex focus scenarios (such as multiple overlays or programmatic focus control), consider pairing with higher-level patterns or frameworks. Focus restoration respects the `disableRestoreFocus` flag and is automatically triggered on component disconnect.

## Accessibility

### Built-in features

- **Focus containment** – Prevents keyboard navigation from leaving the trap boundaries, ensuring users remain focused on the intended content.
- **Focus wrapping** – By default, Tab from the last focusable element returns to the first, and vice versa, creating a continuous focus cycle.
- **Focus restoration** – Restores focus to the previously focused element when the trap is deactivated (unless `disableRestoreFocus` is `true`), maintaining context for screen-reader users and sighted users alike.

#### Internal ARIA managed by the component

The FocusTrap component does not apply ARIA roles or properties itself. It relies on semantic HTML and standard focus behavior. The consumer must ensure focusable elements inside the trap have appropriate roles and labels.

### Implementation requirements

#### Labelling

FocusTrap itself does not require a label. However, the container and its content must follow standard labelling practices:

- **Modal dialogs** – Use `role="dialog"` on a wrapper element and include `aria-labelledby` pointing to the dialog's title.
- **Popover or menu** – Use `role="menu"` or similar, with `aria-label` or `aria-labelledby` as appropriate.
- **Focusable children** – Ensure all interactive children (buttons, inputs, links) have visible or accessible labels via `<label>`, `aria-label`, or `aria-labelledby`.

**Example with proper semantics:**

```html
<div role="dialog" aria-labelledby="dialog-title" aria-modal="true">
  <h2 id="dialog-title">Confirm Action</h2>
  <mdc-focustrap disabled="false" auto-focus="true">
    <p>Are you sure?</p>
    <button>Cancel</button>
    <button class="primary">Confirm</button>
  </mdc-focustrap>
</div>
```

#### General

- Ensure the context in which FocusTrap is used (e.g., a modal overlay) is semantically marked with `role="dialog"`, `role="menu"`, or another appropriate role.
- Provide a way for users to dismiss or deactivate the focus trap (e.g., a Close button or Escape key handler), and restore focus to the triggering element on dismissal.
- Test focus behavior with keyboard navigation and screen readers to verify that focus enters, cycles, and exits the trap as expected.

### Notes

Focus trapping is a critical accessibility pattern for overlays and modals. Always test with actual assistive technology (NVDA, JAWS, VoiceOver) to ensure focus announcements and navigation feel natural. Pair FocusTrap with semantic markup and appropriate ARIA roles to provide the full accessibility contract.
