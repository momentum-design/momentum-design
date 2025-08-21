Feature: Accordion Group Component

  Background:
    Given the Accordion Group component is rendered on the page
    And the group contains multiple accordion items
    And the group manages the state of its accordion items
    And the group can be configured with:
      | Property             | Value                              | State    |
      | -------------------- | ---------------------------------- | -------- |
      | Size                 | 'small'/'large'                    | Optional |
      | Variant              | 'stacked'/'contained'/'borderless' | Optional |
      | Allow Multiple       | true/false                         | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render accordion group with multiple items
      Given the accordion group has 3 accordion items
      When the group is rendered
      Then all accordion items should be visible
      And no accordion item should be expanded by default

    Scenario: Render with size and variant
      Given the accordion group has a size and variant
      When the group is rendered
      Then all child accordions should have the same size and variant

  Rule: ✅ Single/Multiple Expansion - Allow Multiple

    Scenario: Single item expansion (default)
      Given the accordion group is in single expansion mode (i.e. allow-multiple = false)
      When I expand a second accordion item
      Then the first item should collapse
      And only one item should be expanded at a time

    Scenario: Multiple item expansion
      Given the accordion group is in multiple expansion mode (i.e. allow-multiple = true)
      When I expand multiple accordion items
      Then all clicked items should remain expanded

  Rule: ✅ Keyboard Navigation

    Scenario: Navigate between accordions
      Given the accordion group is focused
      When I use tab and shift+tab keys to navigate
      Then focus should move between accordions

    Scenario: Toggle accordion with keyboard
      Given an accordion header is focused
      When I press Enter or Space
      Then the accordion should toggle its expanded state
