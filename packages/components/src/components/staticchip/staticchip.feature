Feature: StaticChip Accessibility, Appearance, and User Interaction

  Background:
    Given the staticchip component is rendered on the page
    And the staticchip has default color="default"
    And the staticchip contains:
      | Property         | Value                | State    |
      | ---------------- | -------------------- | -------- |
      | Label            | "Label"              | Normal   |
      | Icon Name        | "icon-name"          | Optional |
      | Color            | default/cobalt/...   | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render staticchip with label only
      Given the staticchip has a label "Label"
      When the staticchip is rendered
      Then the label should be visible

    Scenario: Render staticchip with icon and label
      Given the staticchip has a label "Label"
      And the staticchip has icon-name set
      When the staticchip is rendered
      Then the icon should be visible before the label
      And the layout should be properly aligned

    Scenario: Render staticchip with different colors
      Given the staticchip has color attribute set to each supported value
      When the staticchip is rendered
      Then the staticchip should display the correct color
