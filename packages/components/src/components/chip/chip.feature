Feature: Chip Accessibility, Appearance, and User Interaction

  Background:
    Given the Chip component is rendered on the page
    And the chip has role="button"
    And the chip is focusable with tabindex="0"
    And the chip has default color="default"
    And the chip contains:
      | Property         | Value                | State    |
      | ---------------- | -------------------- | -------- |
      | Label            | "Label"              | Normal   |
      | Icon Name        | "icon-name"          | Optional |
      | Color            | default/cobalt/...   | Optional |
      | Disabled State   | true/false           | Optional |
      | Auto Focus       | true/false           | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render chip with label only
      Given the chip has a label "Label"
      When the chip is rendered
      Then the label should be visible
      And the chip should have proper ARIA attributes

    Scenario: Render chip with icon and label
      Given the chip has a label "Label"
      And the chip has icon-name set
      When the chip is rendered
      Then the icon should be visible before the label
      And the layout should be properly aligned

    Scenario: Render chip with different colors
      Given the chip has color attribute set to each supported value
      When the chip is rendered
      Then the chip should display the correct color

    Scenario: Render disabled chip
      Given the chip has disabled attribute set
      When the chip is rendered
      Then the chip should appear visually disabled
      And the chip should have aria-disabled="true"
      And the chip should not be focusable

  Rule: ✅ Mouse Interactions

    Scenario: Click on normal chip
      Given the chip is in normal state
      When I click on the chip
      Then a click event should be triggered

    Scenario: Click on disabled chip
      Given the chip is disabled
      When I click on the chip
      Then no click event should be triggered

  Rule: ✅ Keyboard Interactions

    Scenario: Focus chip using Tab navigation
      Given the chip is rendered in a focusable context
      When I navigate using Tab key
      Then the chip should receive focus
      And the chip should be visually focused

    Scenario: Activate chip using Enter key
      Given the chip is focused
      When I press "Enter" or "Space"
      Then a click event should be triggered

  Rule: ✅ ARIA and Accessibility

    Scenario: Default ARIA attributes
      Given the chip is rendered
      Then the chip should have role="button"
      And the chip should have tabindex="0"
      And the chip should have color="default"

    Scenario: Disabled state ARIA attributes
      Given the chip is disabled
      Then the chip should have aria-disabled="true"
      And the chip should not be in tab order

  Rule: ✅ ScreenReader Accessibility

    Scenario: VoiceOver reads chip content
      Given the chip has label and icon
      When VoiceOver navigates to the chip
      Then VoiceOver should announce the role as "button"
      And VoiceOver should read the label
      And VoiceOver should read the icon if present

    Scenario: VoiceOver announces disabled state
      Given the chip is disabled
      When VoiceOver navigates to the chip
      Then VoiceOver should announce "disabled" or "dimmed"

    Scenario: VoiceOver activates chip
      Given the chip is focused by VoiceOver
      When VoiceOver activates the chip
      Then the associated action should execute
      And appropriate feedback should be provided
