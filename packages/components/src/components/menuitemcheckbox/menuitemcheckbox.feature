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
      Given a MenuItemCheckbox is rendered with checked is true
      Then it should be visually checked
      And it should have aria-checked="true"

    Scenario: Disabled state
      Given a MenuItemCheckbox is rendered with disabled set to true
      Then it should not be clickable
      And it should have aria-disabled="true"

    Scenario: Soft disabled state
      Given a MenuItemCheckbox is rendered with softDisabled set to true
      Then it should not be clickable
      And it should have aria-disabled="true"
      And it should be focusable

  Rule: ✅ Indicator Types & Selection Behavior

    Scenario Outline: Check MenuItemCheckbox with indicator
      Given a MenuItemCheckbox is rendered with <indicator>
      When I <interact> on an unchecked MenuItemCheckbox
      Then it should become checked
      And the indicator should be <checked_result>
      And it should dispatch a change event

      Examples:
        | interact | indicator | checked_result    |
        | click    | checkbox  | checkbox checked  |
        | space    | checkbox  | checkbox checked  |
        | enter    | checkbox  | checkbox checked  |
        | click    | none      | checked           |
        | space    | none      | checked           |
        | enter    | none      | checked           |
        | click    | checkmark | checkmark checked |
        | space    | checkmark | checkmark checked |
        | enter    | checkmark | checkmark checked |
        | click    | toggle    | toggle on         |
        | space    | toggle    | toggle on         |

    Scenario Outline: Uncheck MenuItemCheckbox with indicator
      Given a MenuItemCheckbox is rendered with <indicator> and is checked
      When I <interact> on a checked MenuItemCheckbox
      Then it should become unchecked
      And the indicator should be <unchecked_result>
      And it should dispatch a change event

      Examples:
        | interact | indicator | unchecked_result    |
        | click    | checkbox  | checkbox unchecked  |
        | space    | checkbox  | checkbox unchecked  |
        | enter    | checkbox  | checkbox unchecked  |
        | click    | none      | unchecked           |
        | space    | none      | unchecked           |
        | enter    | none      | unchecked           |
        | click    | checkmark | checkmark unchecked |
        | space    | checkmark | checkmark unchecked |
        | enter    | checkmark | checkmark unchecked |
        | click    | toggle    | toggle off          |
        | space    | toggle    | toggle off          |
        | enter    | toggle    | toggle off          |

  Rule: ✅ Accessibility

    Scenario: Screen reader support
      Given a MenuItemCheckbox is rendered with a label
      Then it should be properly labeled for screen readers
      And its state should be announced when changed

    Scenario: Keyboard accessibility
      Given a MenuItemCheckbox is rendered
      Then it should be focusable with the keyboard
      And it should be toggleable with the Space or Enter key
