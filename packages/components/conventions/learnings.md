# Screen Reader (VoiceOver) & Select Component: Shadow DOM Observations

- When using the select component, VoiceOver on macOS reveals that:
  - The `combobox` role can locate its associated `listbox` even if they exist
    in different shadow roots.
  - The `listbox` role, however, cannot find its child `option` elements if
    those options are inside its own shadow root.
  - Adding `aria-owns` does not resolve this, as it does not work across shadow
    root boundaries.

## Implementation Update

To address this, the select component now considers all options provided through
the default slot and wraps them inside a `listbox`. This wrapping is performed
within the `connectedCallback` lifecycle method, ensuring that screen readers
can properly recognize the relationship between the listbox and its options.
