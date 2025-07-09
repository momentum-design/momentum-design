Feature: MenuItemRadio Accessibility and User Interaction

  Background:
    Given a Menu is rendered with MenuItemRadio items
    Then the MenuItemRadio elements should have role="menuitemradio"
    And the MenuItemRadio elements should have appropriate aria-checked states

  Rule: ✅ Basic Functionality

    Scenario: Default state
      Given a MenuItemRadio is rendered
      Then it should not be checked by default
      And it should have aria-checked="false"

    Scenario: Checked state
      Given a MenuItemRadio is rendered with checked set to true
      Then it should be visually checked
      And it should have aria-checked="true"

    Scenario: Disabled state
      Given a MenuItemRadio is rendered with disabled set to true
      Then it should not be clickable
      And it should have aria-disabled="true"
      And it should have appropriate visual styling for disabled state

    Scenario: Soft disabled state
      Given a MenuItemRadio is rendered with softDisabled set to true
      Then it should not be clickable
      And it should have aria-disabled="true"
      And it should be focusable

    Scenario: Default state with checkmark indicator
      Given a MenuItemRadio is rendered
      Then there should be no checkmark indicator visible
      And it should have aria-checked="false"

    Scenario: Checked state with checkmark indicator
      Given a MenuItemRadio is rendered with checked and indicator="checkmark"
      Then it should display a checkmark indicator
      And it should have aria-checked="true"

  Rule: ✅ Selection Behavior

    Scenario Outline: Select MenuItemRadio using <input_method>
      Given a group of MenuItemRadio components with the same name
      And focus is on the first MenuItemRadio
      When I <action> on an unchecked MenuItemRadio
      Then the selected MenuItemRadio should become checked
      And other MenuItemRadio components in the same group should become unchecked
      And it should dispatch a change event

      Examples:
        | input_method | action  |
        | mouse        | click   |
        | keyboard     | "Space" |
        | keyboard     | "Enter" |

  Rule: ✅ Grouping and Naming

    Scenario: Grouped MenuItemRadio items
      Given multiple groups of MenuItemRadio items with different names
      When I select a MenuItemRadio in one group
      Then only MenuItemRadio items with the same name should be affected
      And MenuItemRadio items with different names should maintain their state

    Scenario Outline: MenuItemRadio indicator types
      Given a MenuItemRadio is rendered with checked and indicator="<indicator>"
      Then it should display a <expected_indicator> indicator
      And it should have aria-checked="true"

      Examples:
        | indicator | expected_indicator |
        | radio     | radio button       |
        | checkmark | checkmark          |
        | none      | nothing            |
