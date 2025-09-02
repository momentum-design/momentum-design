Feature: Staticchip Accessibility, Appearance, and User Interaction

  Background:
    Given the Staticchip component is rendered on the page
    And the Staticchip has default color="default"
    And the Staticchip contains:
      | Property         | Value                | State    |
      | ---------------- | -------------------- | -------- |
      | Label            | "Label"              | Normal   |
      | Icon Name        | "icon-name"          | Optional |
      | Color            | default/cobalt/...   | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render Staticchip with label only
      Given the Staticchip has a label "Label"
      When the Staticchip is rendered
      Then the label should be visible

    Scenario: Render Staticchip with icon and label
      Given the Staticchip has a label "Label"
      And the Staticchip has icon-name set
      When the Staticchip is rendered
      Then the icon should be visible before the label
      And the layout should be properly aligned

    Scenario: Render Staticchip with different colors
      Given the Staticchip has color attribute set to each supported value
      When the Staticchip is rendered
      Then the Staticchip should display the correct color
