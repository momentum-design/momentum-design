Feature: FilterChip Accessibility, Appearance, and User Interaction

  Background:
    Given the FilterChip component is rendered on the page
    And the filterchip has role="button"
    And the filterchip is focusable with tabindex="0"
    And the filterchip has default color="default"
    And the filterchip contains:
      | Property         | Value                | State    |
      | ---------------- | -------------------- | -------- |
      | Label            | "Label"              | Normal   |
      | Selected State   | true/false           | Optional |
      | Disabled State   | true/false           | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render filterchip with label only
      Given the filterchip has a label "Label"
      When the filterchip is rendered
      Then the label should be visible
      And the filterchip should have proper ARIA attributes

    Scenario: Render filterchip in selected state
      Given the filterchip has selected attribute set
      When the filterchip is rendered
      Then the filterchip should appear visually selected
      And the filterchip should have aria-pressed="true"
      And the selected icon should be visible

    Scenario: Render filterchip in disabled state
      Given the filterchip has disabled attribute set
      When the filterchip is rendered
      Then the filterchip should appear visually disabled
      And the filterchip should have aria-disabled="true"
      And the filterchip should not be focusable

    Scenario: Render filterchip in selected and disabled state
      Given the filterchip has selected and disabled attributes set
      When the filterchip is rendered
      Then the filterchip should appear visually selected and disabled
      And the filterchip should have aria-pressed="true"
      And the filterchip should have aria-disabled="true"

  Rule: ✅ Mouse Interactions

    Scenario: Click on normal filterchip
      Given the filterchip is in normal state
      When I click on the filterchip
      Then the selected state should toggle

    Scenario: Click on disabled filterchip
      Given the filterchip is disabled
      When I click on the filterchip
      Then no state should change

  Rule: ✅ Keyboard Interactions

    Scenario: Focus filterchip using Tab navigation
      Given the filterchip is rendered in a focusable context
      When I navigate using Tab key
      Then the filterchip should receive focus
      And the filterchip should be visually focused

    Scenario: Toggle filterchip using Enter and Space keys
      Given the filterchip is focused
      When I press "Enter"
      Then the selected state should toggle
      When I press "Space"
      Then the selected state should toggle

  Rule: ✅ ARIA and Accessibility

    Scenario: Default ARIA attributes
      Given the filterchip is rendered
      Then the filterchip should have role="button"
      And the filterchip should have tabindex="0"
      And the filterchip should have color="default"

    Scenario: Selected state ARIA attributes
      Given the filterchip is selected
      Then the filterchip should have aria-pressed="true"

    Scenario: Disabled state ARIA attributes
      Given the filterchip is disabled
      Then the filterchip should not be in tab order
