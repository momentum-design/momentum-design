Feature: Combobox component

  Background:
    Given I am on the page with the combobox component
    And the combobox component has a label "Top Countries list"
    And the combobox component has a placeholder "Start typing to search"
    And the combobox component has the following options:
      | value      | label      |
      | argentina  | Argentina  |
      | austria    | Austria    |
      | australia  | Australia  |
      | bangladesh | Bangladesh |
      | brazil     | Brazil     |
      | canada     | Canada     |

  Rule: ✅ Mouse Interactions

    Scenario: User opens the combobox dropdown using the mouse
      Given that I see the combobox component with the label "Top Countries list"
      When I click on the combobox input text with placeholder "Start typing to search" using the mouse
      Then I see the dropdown open with options "Argentina", "Austria", "Australia", "Bangladesh", "Brazil", and "Canada"
      And the dropdown icon should get updated from the name 'arrow-down' to 'arrow-up'

    Scenario: User closes the combobox dropdown using the mouse
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I click on the combobox input text again using the mouse
      Then the combobox dropdown should be closed
      And I should not see any options
      And the dropdown icon should get updated from the name 'arrow-up' to 'arrow-down'

    Scenario: User closes the combobox dropdown by clicking outside the dropdown
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I click outside the combobox dropdown
      Then the combobox dropdown should be closed
      And I should not see any options
      And the dropdown icon should get updated from the name 'arrow-up' to 'arrow-down'

  Rule: ✅ Keyboard Interactions

    Scenario: User opens the combobox dropdown using the keyboard
      Given that I see the combobox component with the label "Top Countries list"
      When I focus on the combobox input text with placeholder "Start typing to search" using the Tab key
      And I press the Arrow Down key to open the dropdown
      Then I see the dropdown open with options "Argentina", "Austria", "Australia", "Bangladesh", "Brazil", and "Canada"
      And the visual focus should be on the first option "Argentina" on the dropdown
      And the dropdown icon should get updated from the name 'arrow-down' to 'arrow-up'

    Scenario: User closes the combobox dropdown using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I press the Arrow Up key to open the dropdown
      Then I see the dropdown open with options "Argentina", "Austria", "Australia", "Bangladesh", "Brazil", and "Canada"
      And the visual focus should be on the last option "Canada" on the dropdown
      And the dropdown icon should get updated from the name 'arrow-up' to 'arrow-down'

    Scenario: User types a character in the combobox input text using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "a"
      Then I see the dropdown open with options "Argentina", "Austria" and "Australia"
      And there should be no visual focus on any option on the dropdown

    Scenario: User continues typing a character in the combobox input text using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "au"
      Then I see the dropdown open with options "Austria" and "Australia"
      And there should be no visual focus on any option on the dropdown

    Scenario: User selects an option from the dropdown using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "au"
      Then I see the dropdown open with options "Austria" and "Australia"
      And I press the Arrow Down key to navigate in the dropdown option
      Then the visual focus should move to the first option "Austria"
      And I press the Arrow Down key to navigate in the dropdown option
      Then the visual focus should move to the second option "Australia"
      And I press the Enter key to select the option "Australia"
      Then the combobox input text should be updated to "Australia" from "au"
      And the dropdown should be closed
      And the DOM focus should always remain on the combobox input text

    Scenario: User types text on combobox input while navigating in between options of the dropdown using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "b"
      Then I see the dropdown open with options "Bangladesh" and "Brazil"
      And I press the Arrow Down key to navigate in the dropdown option
      Then the visual focus should move to the first option "Bangladesh"
      And I press the Arrow Down key to navigate in the dropdown option
      Then the visual focus should move to the second option "Brazil"
      And I press the character "a" key on the combobox input text
      Then I see the dropdown gets updated with option "Bangladesh"
      When I press the down arrow key to navigate in the dropdown option
      Then the visual focus should move to the first and only option "Bangladesh"
      And I press the Enter key to select the option "Bangladesh"
      Then the combobox input text should be updated to "Bangladesh" from "ba"
      And the dropdown should be closed
      And the DOM focus should always remain on the combobox input text

    Scenario: User navigates between the combobox input text using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "aus"
      Then I see the dropdown open with options "Austria" and "Australia"
      And I press the Arrow Down key to navigate in the dropdown option
      Then the visual focus should move to the first option "Austria"
      And I press the Arrow Left key
      Then the visual focus should move back to the combobox input text
      And the text caret should be positioned after the "u" character in the "aus" text
      When I press the Arrow Down key to navigate in the dropdown option
      Then the visual focus should move to the first option "Austria"
      And I press the Arrow Right key
      Then the visual focus should move back to the combobox input text
      And the text caret should be positioned after the "s" character in the "aus" text
      And the DOM focus should always remain on the combobox input text

    Scenario: User clears entered combobox input text using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "aus"
      Then I see the dropdown open with options "Austria" and "Australia"
      When I press the Backspace key twice
      Then the combobox input text should be updated to "a"
      And the dropdown options should be updated to "Argentina", "Austria" and "Australia"
      When I press the Backspace key once
      Then the combobox input text should be updated to "" (empty string)
      And the dropdown options should be updated to "Argentina", "Austria", "Australia", "Bangladesh", "Brazil", and "Canada"
      And the DOM focus should always remain on the combobox input text

    Scenario: User leaves the combobox with valid input text using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "aus"
      And I see the dropdown open with options "Austria" and "Australia"
      And I press Tab key once
      Then the combobox input text should still have "aus"
      And the dropdown should be closed
      And the DOM focus should not be on the combobox

    Scenario: User leaves the combobox with valid input text and navigates to the first option using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "aus"
      And I see the dropdown open with options "Austria" and "Australia"
      Then I press Arrow Down to focus the first option ("Austria")
      And I press Tab key once
      Then the combobox input text should get updated to "Austria"
      And the dropdown should be closed
      And the DOM focus should not be on the combobox

    Scenario: User leaves the combobox with invalid input text using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "as"
      And the dropdown should be closed
      And I press Tab key once
      Then the combobox input text should remain "as"
      And the dropdown should be closed
      And the DOM focus should not be on the combobox

    Scenario: User leaves the combobox while navigating dropdown options using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I press the Arrow Down key to open the dropdown
      Then I see the dropdown open with options "Argentina", "Austria", "Australia", "Bangladesh", "Brazil", and "Canada"
      And the first option "Argentina" should be visually focused
      Then I press Tab key once
      Then the combobox input text should be updated to "Argentina"
      And the dropdown should be closed
      And the DOM focus should not be on the combobox

    Scenario: User leaves the combobox without making any section of dropdown options using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When there is no input text entered
      And I press the Escape key
      Then the dropdown should be closed
      And the DOM focus should be on the combobox

    Scenario: User leaves the combobox with input text using the keyboard
      Given I have opened the combobox component with the placeholder "Start typing to search"
      When I type the character "aus"
      And I see the dropdown open with options "Austria" and "Australia"
      And I press Escape key once
      Then the dropdown should be closed
      When I press Escape key again
      Then the combobox input text should be cleared
      And the DOM focus should be on the combobox
