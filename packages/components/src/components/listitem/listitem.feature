Feature: Listitem Accessibility and User Interaction

  Background:
    Given the Listitem component is rendered on the page
    And the listitem has role="listitem"
    And the listitem is focusable with tabindex="0"
    And the listitem has default variant="full-width"
    And the listitem contains:
      | Property           | Value                    | State    |
      | ------------------ | ------------------------ | -------- |
      | Primary Label      | "Primary Label"          | Normal   |
      | Secondary Label    | "Secondary Label"        | Optional |
      | Tertiary Label     | "Tertiary Label"         | Optional |
      | Side Header Text   | "Header Text"            | Optional |
      | Subline Text       | "Subline Text"           | Optional |
      | Disabled State     | true/false               | Optional |
      | Soft-Disabled      | true/false               | Optional |
      | Leading Controls   | checkboxes/radio/icons   | Optional |
      | Trailing Controls  | buttons/toggles/badges   | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render listitem with primary label only
      Given the listitem has a primary label "Primary Label"
      When the listitem is rendered
      Then the primary label should be visible
      And the listitem should have proper ARIA attributes

    Scenario: Render listitem with multiple text labels
      Given the listitem has a primary label "Primary Label"
      And the listitem has a secondary label "Secondary Label"
      And the listitem has a tertiary label "Tertiary Label"
      When the listitem is rendered
      Then all labels should be visible in their correct positions
      And the text hierarchy should be properly maintained

    Scenario: Render listitem with side header and subline text
      Given the listitem has side header text "Header Text"
      And the listitem has subline text "Subline Text"
      When the listitem is rendered
      Then the side header should be visible in the trailing area
      And the subline text should be visible in the trailing area
      And the layout should be properly aligned

    Scenario: Render listitem with leading controls
      Given the listitem has a primary label
      And the listitem has leading controls in slot="leading-controls"
      When the leading controls contain interactive elements
      Then the interactive element should be visible before the label
      And the layout should be properly aligned

    Scenario: Render listitem with trailing controls
      Given the listitem has a primary label
      And the listitem has trailing controls in slot="trailing-controls"
      When the trailing controls contain interactive elements
      Then the interactive element should be visible after the label
      And the layout should be properly aligned

    Scenario: Render listitem with mixed leading and trailing controls
      Given the listitem has multiple text labels
      And the listitem has multiple leading controls
      And the listitem has multiple trailing controls
      When the listitem is rendered
      Then all controls should be properly positioned
      And the layout should be balanced and aligned
      And spacing should be consistent

    Scenario: Render listitem with text truncation
      Given the listitem has a very long primary label
      And the listitem has a fixed width constraint
      When the listitem is rendered
      Then the long text should be truncated appropriately
      And truncation should not affect the layout of controls

    Scenario: Render disabled listitem
      Given the listitem has disabled attribute set
      When the listitem is rendered
      Then the listitem should appear visually disabled
      And the listitem should have aria-disabled="true"
      And the listitem should not be focusable

    Scenario: Render soft-disabled listitem
      Given the listitem has soft-disabled attribute set
      When the listitem is rendered
      Then the listitem should appear visually disabled
      And the listitem should have aria-disabled="true"
      But the listitem should remain focusable
      And any controls within should be disabled

    Scenario: Render listitem with short width and auto-shrinking content
      Given the listitem has a short width
      When the listitem is rendered
      Then all labels and controls should be visible within the boundaries
      And the leading and trailing text should auto-shrink
      And no content should overflow the listitem boundaries
      And text truncation should occur as needed without layout breakage

  Rule: ✅ Focus Management and Navigation

    Scenario: Focus listitem using Tab navigation
      Given the listitem is rendered without interactive controls
      When I navigate using Tab key
      Then the listitem should receive focus
      And the listitem should be visually focused

    Scenario: Focus management with leading controls
      Given the listitem has interactive leading controls (checkbox, button)
      When I navigate using Tab key
      Then focus should move to the listitem first
      When I press Tab again
      Then focus should move to the first leading control (checkbox)
      When I press Tab again
      Then focus should move to the next leading control (button)
      When I press Tab again
      Then focus should move out of the listitem (since there are not trailing controls

    Scenario: Focus management with trailing controls
      Given the listitem has interactive trailing controls
      When I navigate through the listitem with Tab
      Then focus should follow the logical order: listitem → leading controls → trailing controls

    Scenario: Focus management with soft-disabled state
      Given the listitem is soft-disabled
      And the listitem has interactive controls
      When I navigate using Tab key
      Then the listitem should receive focus normally
      But the interactive controls should be disabled and not focusable

    Scenario: Skip disabled listitem in focus order
      Given the listitem is disabled along with its controls in the disabled state
      When I navigate using Tab key
      Then the listitem should not receive focus
      And the interactive controls within the listitem also skips the focus
      And focus should move to the next focusable element

  Rule: ✅ Mouse Interactions

    Scenario: Click on listitem without controls
      Given the listitem has no interactive controls
      When I click on the listitem
      Then a click event should be triggered on the listitem
      And the associated action should execute

    Scenario: Click on leading controls
      Given the listitem has leading controls (checkbox, radio, button)
      When I click on a leading control
      Then a click event should be triggered on the control
      But no click event should be triggered on the listitem
      And the control's action should execute

    Scenario: Click on trailing controls
      Given the listitem has trailing controls (button, toggle, badge)
      When I click on a trailing control
      Then a click event should be triggered on the control
      But no click event should be triggered on the listitem
      And the control's action should execute

    Scenario: Click on listitem text area with controls present
      Given the listitem has both leading and trailing controls
      When I click on the text area between the controls
      Then a click event should be triggered on the listitem
      But no events should be triggered on the controls

  Rule: ✅ Keyboard Interactions

    Scenario: Navigate with keyboard within listitem
      Given the listitem is focused
      When I press "Enter" or "Space"
      Then keyboard events should be triggered on the listitem
      And the associated action should execute

    Scenario: Navigate to leading controls with keyboard
      Given the listitem has leading controls
      And the listitem is focused
      When I press Tab
      Then focus should move to the first leading control
      When I activate the control with Enter or Space
      Then the control's action should execute

    Scenario: Navigate to trailing controls with keyboard
      Given the listitem has trailing controls
      And all leading controls are already focused
      When I press Tab
      Then focus should move to the first trailing control
      When I activate the control with Enter or Space
      Then the control's action should execute

    Scenario: Keyboard events on controls vs listitem
      Given the listitem has interactive controls
      When a control is focused and activated
      Then keyboard events should be triggered on the control
      But no keyboard events should be triggered on the listitem

    Scenario: Soft-disabled listitem keyboard behavior
      Given the listitem is soft-disabled
      When I navigate using Tab key
      Then the listitem should receive focus
      When I try to activate controls with keyboard
      Then the controls should not respond (being disabled)
      But the listitem itself should still respond to keyboard events

  Rule: ✅ ARIA and Accessibility Attributes

    Scenario: Default ARIA attributes
      Given the listitem is rendered
      Then the listitem should have role="listitem"
      And the listitem should have tabindex="0"
      And the listitem should have variant="full-width"

    Scenario: Disabled state ARIA attributes
      Given the listitem is disabled
      Then the listitem should have aria-disabled="true"
      And the listitem should not be in tab order

    Scenario: Soft-disabled state ARIA attributes
      Given the listitem is soft-disabled
      Then the listitem should have aria-disabled="true"
      But the listitem should remain in tab order
      And controls within should have disabled attributes

    Scenario: Text labels accessibility
      Given the listitem has multiple text labels
      Then each label should be properly associated with the listitem
      And screen readers should announce all labels in logical order

  Rule: ✅ Content Slots and Layout Management

    Scenario: Leading controls slot management
      Given the listitem has content in slot="leading-controls"
      When multiple controls are added to the slot
      Then all controls should be positioned before the text
      And spacing between controls should be consistent
      And the slot should not interfere with text layout

    Scenario: Trailing controls slot management
      Given the listitem has content in slot="trailing-controls"
      When multiple controls are added to the slot
      Then all controls should be positioned after the text
      And spacing between controls should be consistent
      And the slot should align properly with text content

    Scenario: Mixed content with complex layouts
      Given the listitem has multiple text labels
      And the listitem has multiple leading controls
      And the listitem has multiple trailing controls
      When the listitem is rendered
      Then all elements should be properly positioned
      And the hierarchy should be visually clear
      And spacing should follow design guidelines

  Rule: ✅ ScreenReader Accessibility

    Scenario: VoiceOver reads listitem content
      Given the listitem has multiple text labels
      When VoiceOver navigates to the listitem
      Then VoiceOver should announce the role as "listitem"
      And VoiceOver should read all labels in logical order
      And VoiceOver should indicate if controls are present

    Scenario: VoiceOver announces disabled state
      Given the listitem is disabled
      When VoiceOver navigates to the listitem
      Then VoiceOver should announce "disabled" or "dimmed"

    Scenario: VoiceOver announces soft-disabled state
      Given the listitem is soft-disabled
      When VoiceOver navigates to the listitem
      Then VoiceOver should announce "disabled" state
      But should still allow interaction with the listitem itself

    Scenario: VoiceOver navigates to controls
      Given the listitem has interactive controls
      When VoiceOver enters the listitem
      Then VoiceOver should announce available controls
      And should allow navigation to each control
      And should announce the purpose of each control

    Scenario: VoiceOver activates listitem and controls
      Given the listitem is focused by VoiceOver
      When VoiceOver activates the listitem
      Then the associated action should execute
      When VoiceOver activates controls within
      Then the control's action should execute
      And appropriate feedback should be provided
