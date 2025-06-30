Feature: MenuItemCheckbox Accessibility and User Interaction

  Background:
    Given a Menu is rendered with MenuItemCheckbox items
    Then the MenuItemCheckbox elements should have role="menuitemcheckbox"
    And the MenuItemCheckbox elements should have appropriate aria-checked states

  Rule: ✅ Basic Functionality

    Scenario: Default state
      Given a MenuItemCheckbox is rendered
      Then it should not be checked by default
      And it should have aria-checked="false"

    Scenario: Checked state
      Given a MenuItemCheckbox is rendered with checked="true"
      Then it should be visually checked
      And it should have aria-checked="true"

    Scenario: Disabled state
      Given a MenuItemCheckbox is rendered with disabled="true"
      Then it should not be clickable
      And it should have aria-disabled="true"

  Rule: ✅ Selection Behavior

    Scenario: Toggle MenuItemCheckbox using mouse
      Given a MenuItemCheckbox is rendered
      When I click on an unchecked MenuItemCheckbox
      Then it should become checked
      And it should dispatch a change event
      When I click on the checked MenuItemCheckbox
      Then it should become unchecked
      And it should dispatch a change event

    Scenario: Toggle MenuItemCheckbox using keyboard
      Given a MenuItemCheckbox is rendered
      When focus is on the MenuItemCheckbox
      And I press "Space"
      Then it should become checked
      And it should dispatch a change event
      When I press "Space" again
      Then it should become unchecked
      And it should dispatch a change event

  Rule: ✅ Indicator Types

    Scenario: Checkbox indicator
      Given a MenuItemCheckbox with indicator="checkbox"
      Then it should display a checkbox indicator
      When it is checked
      Then the checkbox should be checked

    Scenario: Checkmark indicator
      Given a MenuItemCheckbox with indicator="checkmark"
      Then it should display a checkmark indicator when checked
      And it should not display a checkmark when unchecked

    Scenario: Toggle indicator
      Given a MenuItemCheckbox with indicator="toggle"
      Then it should display a toggle switch indicator
      When it is checked
      Then the toggle switch should be in the "on" position
      When it is unchecked
      Then the toggle switch should be in the "off" position

  Rule: ✅ Accessibility

    Scenario: Screen reader support
      Given a MenuItemCheckbox is rendered with a label
      Then it should be properly labeled for screen readers
      And its state should be announced when changed

    Scenario: Keyboard accessibility
      Given a MenuItemCheckbox is rendered
      Then it should be focusable with the keyboard
      And it should be toggleable with the Space or Enter key
