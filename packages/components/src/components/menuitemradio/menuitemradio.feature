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
      Given a MenuItemRadio is rendered with checked="true"
      Then it should be visually checked
      And it should have aria-checked="true"

    Scenario: Disabled state
      Given a MenuItemRadio is rendered with disabled="true"
      Then it should not be clickable
      And it should have aria-disabled="true"
      And it should have appropriate visual styling for disabled state

    Scenario: Default state with checkmark indicator
      Given a MenuItemRadio is rendered
      Then there should be no checkmark indicator visible
      And it should have aria-checked="false"

    Scenario: Checked state with checkmark indicator
      Given a MenuItemRadio is rendered with checked="true" and indicator="checkmark"
      Then it should display a checkmark indicator
      And it should have aria-checked="true"

  Rule: ✅ Selection Behavior

    Scenario: Select MenuItemRadio using mouse
      Given a group of MenuItemRadio components with the same name
      When I click on an unchecked MenuItemRadio
      Then it should become checked
      And other MenuItemRadio components in the same group should become unchecked
      And it should dispatch a change event

    Scenario: Select MenuItemRadio using keyboard
      Given a group of MenuItemRadio components with the same name
      And focus is on the first MenuItemRadio
      When I press "Space" or "Enter"
      Then the focused MenuItemRadio should become checked
      And other MenuItemRadio components in the same group should become unchecked

  Rule: ✅ Grouping and Naming

    Scenario: Grouped MenuItemRadio items
      Given multiple groups of MenuItemRadio items with different names
      When I select a MenuItemRadio in one group
      Then only MenuItemRadio items with the same name should be affected
      And MenuItemRadio items with different names should maintain their state

    Scenario: Indicator types
      Given a MenuItemRadio with checked="true" and indicator="radio"
      Then it should display a radio button indicator
      When the indicator is set to "checkmark"
      Then it should display a checkmark indicator instead
