# Screen Reader

## VoiceOver: Select Component & Shadow DOM Observations

- When using the select component, VoiceOver on macOS reveals that:
  - The `combobox` role can locate its associated `listbox` even if they exist
    in different shadow roots.
  - The `listbox` role, however, cannot find its child `option` elements if
    those options are inside its own shadow root.
  - Adding `aria-owns` does not resolve this, as it does not work across shadow
    root boundaries.

### Implementation Update

To address this, the select component now considers all options provided through
the default slot and wraps them inside a `listbox`. This wrapping is performed
within the `connectedCallback` lifecycle method, ensuring that screen readers
can properly recognize the relationship between the listbox and its options.

### Form-Associated Custom Elements: Native Behavior & Event Suppression

When a custom element is form-associated, it inherits native form control behavior.
This includes automatic suppression of user interaction events when the element is disabled.
That said, you do not need to manually prevent these events — the browser enforces this behavior automatically, just like it does for native elements like <input disabled> or <button disabled>.
