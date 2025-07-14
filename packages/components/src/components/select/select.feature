Feature: Select component

  Background:
    Given I am on the page with the select component
    And the select component has a label "Headquarters Location"
    And the select component has a placeholder "Select your headquarters"
    And the select component has the following options:
      | value   | label       |
      | london  | London UK   |
      | newyork | New York NY |
      | tokyo   | Tokyo HQ    |

  # Interactions using the mouse
  Scenario: User opens the select dropdown using the mouse
    Given that I see the select component with the label "Headquarters Location"
    When I click on the select dropdown with placeholder "Select your headquarters" using the mouse
    Then I see the options "London UK", "New York NY", and "Tokyo HQ"

  Scenario: User closes the select dropdown using the mouse
    Given I have opened the select dropdown with the placeholder "Select your headquarters"
    When I click on the select dropdown again using the mouse
    Then the select dropdown should be closed
    And I should not see the options "London UK", "New York NY", and "Tokyo HQ"

  Scenario: User closes the select dropdown by clicking outside the dropdown
    Given I have opened the select dropdown with the placeholder "Select your headquarters"
    When I click outside the select dropdown
    Then the select dropdown should be closed
    And I should not see the options "London UK", "New York NY", and "Tokyo HQ"

  Scenario: User selects an option from the select dropdown
    Given I have opened the select dropdown with the placeholder "Select your headquarters"
    When I select the option "New York NY" from the dropdown
    Then the select component should have "New York NY" selected
    And the select dropdown should be closed
    And I should see the selected option "New York NY"
    And the value of selected option should be reflected on the select component itself.
    When I click on the select component again
    Then I should see the options "London UK", "New York NY", and "Tokyo HQ"
    And there should be a checkmark next to "New York NY" indicating it is selected

  # Interactions using the keyboard
  Scenario: User opens the select dropdown using the keyboard
    Given I see the select component with the label "Headquarters Location" and placeholder "Select your headquarters"
    When I focus on the select component using the Tab key
    And I press the Space/Enter key to open the dropdown
    Then I should see the options "London UK", "New York NY", and "Tokyo HQ"
    And the focus moves to the first option "London UK"

  Scenario: User closes the select dropdown using the keyboard
    Given I have opened the select dropdown and the focus is on the first option "London UK"
    When I press the Escape key
    Then the select dropdown should be closed and the focus should return to the select component
    And I should not see the options "London UK", "New York NY", and "Tokyo HQ"
    And the select component should show the placeholder "Select your headquarters"

  Scenario: User navigates through options using the keyboard
    Given I have opened the select dropdown and the focus is on the first option "London UK"
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
    Given I have opened the select dropdown with the placeholder "Select your headquarters"
    And the focus is on the first option "London UK"
    When I press the Enter key to select "London UK"
    Then the select component should have "London UK" selected
    And the select dropdown should be closed
    And I should see the selected option "London UK"
    And the value of selected option should be reflected on the select component itself.
    When I click on the select component again
    Then I should see the options "London UK", "New York NY", and "Tokyo HQ"
    And the focus should be on the selected option "London UK"
    And there should be a checkmark next to "London UK" indicating it is selected

  # Other attributes and behaviors
  Scenario: Select component has a been marked as required
    Given the select component has been marked as required
    When I see the select component with the label "Headquarters Location"
    Then I should see a red asterisk indicating that this field is required
    When I try to submit the form without selecting an option
    Then I should see a validation error message indicating that the selection is required

  Scenario: Select component has a toggletip information
    Given the select component has a toggletip with the text "you can choose your headquarters location"
    When I click on the info icon button next to the label "Headquarters Location"
    Then I should see the toggletip with the text "you can choose your headquarters location"
    When I click on the info icon button again
    Then the toggletip should be closed

  Scenario: Navigate using keyboard on a select component with toggletip
    Given the select component has a toggletip with the text "you can choose your headquarters location"
    When I focus press the tab key
    Then the focus should be set on the info icon button next to the label "Headquarters Location"
    When I press the Space/Enter key to open the toggletip
    Then I should see the toggletip with the text "you can choose your headquarters location"
    When I press the Escape key
    Then the toggletip should be closed
    When I press the Tab key again
    Then the focus should return to the select component with the label "Headquarters Location"
    And the toggletip should not be visible

  Scenario: Select component with help text
    Given the select component has help text "Please select your headquarters location"
    When I see the select component with the label "Headquarters Location"
    Then I should see the help text "Please select your headquarters location" below the select component

  Scenario: Select component with error message
    Given the select component has an error message "Invalid selection"
    When I see the select component
    Then I should see the error message "Invalid selection" below the select component in red
    And the border of the select component should be red

  Scenario: Select component is marked as disabled
    Given the select component is marked as disabled
    When I see the select component with the label "Headquarters Location"
    And a placeholder of "Select your headquarters"
    And I try to interact with the select component using the mouse or keyboard
    Then the select component should be visually styled as disabled
    And I will not be able to open the select dropdown

  # Screen reader interactions
  Scenario: Screen reader reads the select component
    Given I am using a screen reader
    When I focus on the select component with the label "Headquarters Location"
    Then the screen reader should announce "Headquarters Location, Select your headquarters, London UK, New York NY, Tokyo HQ"
    And the screen reader should indicate that the select component is required if it is marked as such

  Scenario: Navigate to select component using screen reader
    Given I am using a screen reader
    When I navigate to the select component using the screen reader
    Then the screen reader should announce "Headquarters Location, Select your headquarters"
    And the screen reader focus should be on the select component

  Scenario: Open select dropdown using screen reader
    Given I have focused on the select component using the screen reader
    When I activate the select component using the screen reader
    Then the screen reader should announce "Select your headquarters, London UK, New York NY, Tokyo HQ"
    And the screen reader focus should be on the first option "London UK"

  Scenario: Navigate through options using screen reader
    Given I have opened the select dropdown using the screen reader
    When I navigate to the next option using the screen reader
    Then the screen reader should announce "New York NY"
    When I navigate to the next option again
    Then the screen reader should announce "Tokyo HQ"
    When I navigate back to the previous option
    Then the screen reader should announce "New York NY"
    When I navigate back to the first option
    Then the screen reader should announce "London UK"

  Scenario: Screen reader reads selected option on focus
    Given I have opened the select dropdown using the screen reader
    When I navigate to the next option using the screen reader
    Then the screen reader should announce "New York NY"
    When I select the option "New York NY" using the screen reader\
    Then the screen reader should announce "Headquarters Location, New York NY selected"
    And the dropdown should be closed
    And the screen reader focus should be on the selected option "New York NY"

  Scenario: Select dropdown closes on pressing Escape key
    Given I have opened the select dropdown using the screen reader
    When I press the Escape key
    Then the select dropdown should be closed
    And the screen reader focus should return to the select component
    And the screen reader should announce "Headquarters Location, Select your headquarters"
    And the screen reader should not announce any options

  # Accessibility checks
  Scenario: Accessibility check for select component
    Given I have opened the page with the select component
    Then the select container should have the role of "combobox"
    And the select dropdown should have the role of "listbox"
    And each option in the select dropdown should have the role of "option"

  Scenario: Accessibility attributes on select combobox
    Given I have a select container with role of combobox
    Then this container should have aria-haspopup attribute set to "listbox"
    And this container should have aria-expanded attribute set to "false" (since its closed)
    And this container should have aria-required attribute set to "true" if the select component is marked as required
    And this container should have aria-invalid attribute set to "true" if there is an error message

  Scenario: Accessibility attributes on select options
    Given I have a select container with the dropdown open
    Then the combobox container should have aria-activedescendant attribute set to the id of the currently focused option when opened
    And the value of aria-activedescendant will get updated to the currently focused option, when the user navigates through the options
