Feature: InputChip Accessibility, Appearance, and User Interaction

  Background:
    Given the InputChip component is rendered on the page
    And the inputchip is focusable if not disabled
    And the inputchip has default state (not error, not disabled)
    And the inputchip contains:
      | Property         | Value                | State    |
      | ---------------- | -------------------- | -------- |
      | Label            | "Label"              | Normal   |
      | Icon Name        | "icon-name"          | Optional |
      | Error State      | true/false           | Optional |
      | Disabled State   | true/false           | Optional |
      | Clear Aria Label | "Clear"              | Required |

  Rule: ✅ Rendering and Visual States

    Scenario: Render inputchip with label only
      Given the inputchip has a label "Label"
      When the inputchip is rendered
      Then the label should be visible

    Scenario: Render inputchip with icon and label
      Given the inputchip has a label "Label"
      And the inputchip has icon-name set
      When the inputchip is rendered
      Then the icon should be visible before the label

    Scenario: Render inputchip in error state
      Given the inputchip has error attribute set
      When the inputchip is rendered
      Then the inputchip should appear visually in error state

    Scenario: Render inputchip in disabled state
      Given the inputchip has disabled attribute set
      When the inputchip is rendered
      Then the inputchip should appear visually disabled
      And the inputchip should have aria-disabled="true"
      And the inputchip should not be focusable

    Scenario: Render inputchip with close button
      Given the inputchip has clear-aria-label set
      When the inputchip is rendered
      Then the close button should be visible
      And the close button should have the correct aria-label

  Rule: ✅ Mouse Interactions

    Scenario: Click on normal inputchip
      Given the inputchip is in normal state
      When I click on the inputchip
      Then a click event should be triggered
      And the associated action should execute

    Scenario: Click on disabled inputchip
      Given the inputchip is disabled
      When I click on the inputchip
      Then no click event should be triggered
      And no action should execute

    Scenario: Click on close button
      Given the inputchip is rendered with close button
      When I click on the close button
      Then the remove event should be triggered
      And the chip should be removed from the DOM

  Rule: ✅ Keyboard Interactions

    Scenario: Focus inputchip using Tab navigation
      Given the inputchip is rendered in a focusable context
      When I navigate using Tab key
      Then the close button should receive focus
      And the inputchip should be visually focused if not disabled

    Scenario: Activate inputchip using Enter key
      Given the close button is focused
      When I press "Enter"
      Then the remove event should be triggered
      And the chip should be removed from the DOM

  Rule: ✅ ARIA and Accessibility

    Scenario: Default ARIA attributes
      Given the inputchip is rendered
      Then the inputchip should have accessible name
      And the close button should have clear-aria-label

    Scenario: Error state ARIA attributes
      Given the inputchip is in error state
      Then the inputchip should have aria-invalid="true" if applicable

    Scenario: Disabled state ARIA attributes
      Given the inputchip is disabled
      Then the inputchip should have aria-disabled="true"
      And the inputchip should not be in tab order

  Rule: ✅ Event Handling

    Scenario: Click event propagation
      Given the inputchip is in a container
      When I click on the inputchip
      Then the click event should be properly dispatched
      And event details should be accessible

    Scenario: Remove event propagation
      Given the inputchip is rendered with close button
      When I click on the close button
      Then the remove event should be properly dispatched
      And event details should be accessible

    Scenario: Keyboard event propagation
      Given the close button is focused
      When I press any key
      Then keydown events should be properly dispatched
      And keyup events should be properly dispatched
      And event details should be accessible

    Scenario: Focus event
      Given the inputchip is rendered
      When the inputchip receives focus
      Then a focus event should be triggered

  Rule: ✅ ScreenReader Accessibility

    Scenario: VoiceOver reads inputchip content
      Given the inputchip has label and icon
      When VoiceOver navigates to the inputchip
      Then VoiceOver should read the label
      And VoiceOver should read the icon if present
      And VoiceOver should announce the close button with correct aria-label

    Scenario: VoiceOver announces error and disabled state
      Given the inputchip is in error or disabled state
      When VoiceOver navigates to the inputchip
      Then VoiceOver should announce "error" or "disabled" as appropriate

    Scenario: VoiceOver removes inputchip
      Given the close button is focused by VoiceOver
      When VoiceOver activates the close button
      Then the remove event should be triggered
      And appropriate feedback should be provided
