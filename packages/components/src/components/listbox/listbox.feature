Feature: List box component

  Background:
    Given I am on the page with the listbox component
    And the listbox component has a label "Headquarters Location"
    And the listbox component has the following options:
      | value   | label       |
      | london  | London UK   |
      | newyork | New York NY |
      | tokyo   | Tokyo HQ    |

  Scenario: User selects an option from the listbox
    Given I focused on the first option of the listbox component
    When I select the option "New York NY" from the list
    Then the listbox component should have "New York NY" selected
    And there should be a checkmark next to "New York NY" indicating it is selected

  Scenario: User navigates through options using the keyboard
    Given I focused on the first option of the listbox component
    And "London UK" is in focus
    When I press the Down Arrow key
    Then the focus should move to "New York NY"
    When I press the Down Arrow key again
    Then the focus should move to "Tokyo HQ"
    When I press the Down Arrow key again
    Then the focus will still be on "Tokyo HQ" (no more options)
    When I press the Up Arrow key
    Then the focus should move back to "New York NY"
    When I press the Up Arrow key again
    Then the focus should move back to "London UK"
    When I press the Up Arrow key again
    Then the focus will still be on "London UK" (no more options)

  Scenario: User selects an option using the keyboard
    Given I focused on the first option of the listbox component
    And first option is not selected
    When I press the Down Arrow key to focus on "New York NY"
    When I press the Enter key to select "London UK"
    Then the listbox component should have "London UK" selected
    And the select dropdown should be closed
    And I should see the selected option "London UK"
    And the value of selected option should be reflected on the listbox component itself.
    When I click on the listbox component again
    Then I should see the options "London UK", "New York NY", and "Tokyo HQ"
    And the focus should be on the selected option "London UK"
    And there should be a checkmark next to "London UK" indicating it is selected

  Scenario: Listbox component with default selected option
    Given the listbox component has a default selected option "Tokyo HQ"
    When I see the listbox component with the label "Headquarters Location"
    Then the listbox component should show "Tokyo HQ" as the selected option
    And there should be a checkmark next to "Tokyo HQ" indicating it is selected
    And no change event should be fired on the initial load

  Scenario: Screen reader reads the listbox component
    Given I am using a screen reader
    When I focus on the listbox component with the label "Headquarters Location"
    Then the screen reader should announce "Headquarters Location, Select your headquarters, London UK, New York NY, Tokyo HQ"

  Scenario: Navigate to listbox component using screen reader
    Given I am using a screen reader
    When I navigate to the listbox component using the screen reader
    Then the screen reader should announce "Headquarters Location, Select your headquarters"
    And the screen reader focus should be on the listbox component

  Scenario: Navigate through options using screen reader
    Given I focused on the first option of the listbox component using the screen reader
    When I navigate to the next option using the screen reader
    Then the screen reader should announce "New York NY"
    When I navigate to the next option again
    Then the screen reader should announce "Tokyo HQ"
    When I navigate back to the previous option
    Then the screen reader should announce "New York NY"
    When I navigate back to the first option
    Then the screen reader should announce "London UK"

  Scenario: Screen reader reads selected option on focus
    Given I focused on the first option of the listbox component using the screen reader
    When I navigate to the next option using the screen reader
    Then the screen reader should announce "New York NY"
    When I select the option "New York NY" using the screen reader
    Then the screen reader should announce "Headquarters Location, New York NY selected"
    And the screen reader focus should be on the selected option "New York NY"

  Scenario: Accessibility check for listbox component
    Given I have opened the page with the listbox component
    Then the listbox container should have the role of "listbox"
    And each option in the select dropdown should have the role of "option"

  Scenario: Accessibility attributes on select combobox
    Given I have a select container with role of combobox
    And this container should have aria-invalid attribute set to "true" if there is an error message

  Scenario: Accessibility attributes on select options
    Given I focused on the first option of the listbox component
    Then the combobox container should have aria-activedescendant attribute set to the id of the currently focused option
    And the value of aria-activedescendant will get updated to the currently focused option, when the user navigates through the options
