Feature: AlertChip Accessibility, Appearance, and User Interaction

  Background:
    Given the AlertChip component is rendered on the page
    And the alertchip has role="button"
    And the alertchip is focusable with tabindex="0"
    And the alertchip has default variant="neutral"
    And the alertchip contains:
      | Property         | Value                | State    |
      | ---------------- | -------------------- | -------- |
      | Label            | "Label"              | Normal   |
      | Variant          | neutral/warning/...  | Optional |
      | Auto Focus       | true/false           | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render alertchip with label only
      Given the alertchip has a label "Label"
      When the alertchip is rendered
      Then the label should be visible
      And the alertchip should have proper ARIA attributes

    Scenario: Render alertchip with different variants
      Given the alertchip has variant attribute set to each supported value
      When the alertchip is rendered
      Then the alertchip should display the correct icon and color for the variant

  Rule: ✅ Mouse Interactions

    Scenario: Click on normal alertchip
      Given the alertchip is in normal state
      When I click on the alertchip
      Then a click event should be triggered

  Rule: ✅ Keyboard Interactions

    Scenario: Focus alertchip using Tab navigation
      Given the alertchip is rendered in a focusable context
      When I navigate using Tab key
      Then the alertchip should receive focus
      And the alertchip should be visually focused

    Scenario: Activate alertchip using Enter key
      Given the alertchip is focused
      When I press "Enter" or "Space"
      Then a click event should be triggered

  Rule: ✅ ARIA and Accessibility

    Scenario: Default ARIA attributes
      Given the alertchip is rendered
      Then the alertchip should have role="button"
      And the alertchip should have tabindex="0"
      And the alertchip should have variant="neutral"

  Rule: ✅ ScreenReader Accessibility

    Scenario: VoiceOver reads alertchip content
      Given the alertchip has label and icon
      When VoiceOver navigates to the alertchip
      Then VoiceOver should announce the role as "button"
      And VoiceOver should read the label
      And VoiceOver should read the icon for the variant

    Scenario: VoiceOver activates alertchip
      Given the alertchip is focused by VoiceOver
      When VoiceOver activates the alertchip
      Then the associated action should execute
      And appropriate feedback should be provided
