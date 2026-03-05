Feature: TimePicker component

  Background:
    Given I am on the page with the timepicker component
    And the timepicker component has a label "Start time"
    And the timepicker component has a value "08:30"
    And the timepicker component uses 12-hour format

  Scenario: User sees the timepicker with correct initial value
    Given that I see the timepicker component with the label "Start time"
    Then I should see the hours spinbutton displaying "08"
    And I should see the minutes spinbutton displaying "30"
    And I should see the period displaying "AM"

  Scenario: User opens the dropdown using the dropdown button
    Given that I see the timepicker component with the label "Start time"
    When I click on the dropdown arrow button
    Then I should see the dropdown menu with time intervals
    And the currently selected time "8:30 AM" should have a checkmark

  Scenario: User closes the dropdown by clicking outside
    Given I have opened the timepicker dropdown
    When I click outside the dropdown
    Then the dropdown should be closed

  Scenario: User closes the dropdown using Escape key
    Given I have opened the timepicker dropdown
    When I press the Escape key
    Then the dropdown should be closed
    And focus should return to the timepicker input

  Scenario: User selects a time from the dropdown
    Given I have opened the timepicker dropdown
    When I click on the option "9:00 AM"
    Then the timepicker value should be "09:00"
    And the hours spinbutton should display "09"
    And the minutes spinbutton should display "00"
    And the period should display "AM"
    And the dropdown should be closed

  Scenario: User increments hours using arrow up key
    Given that I focus on the hours spinbutton
    When I press the Arrow Up key
    Then the hours spinbutton should display "09"

  Scenario: User decrements hours using arrow down key
    Given that I focus on the hours spinbutton
    When I press the Arrow Down key
    Then the hours spinbutton should display "07"

  Scenario: Hours wrap around at maximum value in 12-hour format
    Given the timepicker has value "12:30" in 12-hour format showing "12" hours
    When I focus on the hours spinbutton
    And I press the Arrow Up key
    Then the hours spinbutton should display "01"

  Scenario: Hours wrap around at minimum value in 12-hour format
    Given the timepicker has value "01:30" in 12-hour format showing "01" hours
    When I focus on the hours spinbutton
    And I press the Arrow Down key
    Then the hours spinbutton should display "12"

  Scenario: User increments minutes using arrow up key
    Given that I focus on the minutes spinbutton
    When I press the Arrow Up key
    Then the minutes spinbutton should display "31"

  Scenario: User decrements minutes using arrow down key
    Given that I focus on the minutes spinbutton
    When I press the Arrow Down key
    Then the minutes spinbutton should display "29"

  Scenario: Minutes wrap around at 59
    Given the timepicker has minutes set to "59"
    When I focus on the minutes spinbutton
    And I press the Arrow Up key
    Then the minutes spinbutton should display "00"

  Scenario: User toggles AM/PM using arrow keys
    Given the period is set to "AM"
    When I focus on the period spinbutton
    And I press the Arrow Up key
    Then the period should display "PM"

  Scenario: User types AM/PM using keyboard
    Given that I focus on the period spinbutton
    When I press the "p" key
    Then the period should display "PM"
    When I press the "a" key
    Then the period should display "AM"

  Scenario: User enters hours by typing digits
    Given that I focus on the hours spinbutton
    When I type "1" followed by "0"
    Then the hours spinbutton should display "10"
    And focus should move to the minutes spinbutton

  Scenario: User enters a single digit that exceeds max first digit
    Given that I focus on the hours spinbutton in 12-hour format
    When I type "5"
    Then the hours spinbutton should display "05"
    And focus should auto-advance to the minutes spinbutton

  Scenario: User navigates between spinbuttons using arrow keys
    Given that I focus on the hours spinbutton
    When I press the Arrow Right key
    Then focus should move to the minutes spinbutton
    When I press the Arrow Right key
    Then focus should move to the period spinbutton
    When I press the Arrow Left key
    Then focus should move to the minutes spinbutton

  Scenario: Timepicker displays in 24-hour format
    Given the timepicker is configured with 24-hour format
    And the value is "20:30"
    Then the hours spinbutton should display "20"
    And the minutes spinbutton should display "30"
    And the period spinbutton should not be visible

  Scenario: Dropdown shows 24-hour format options
    Given the timepicker is configured with 24-hour format
    When I open the dropdown
    Then I should see options like "20:30", "21:00", "21:30"
    And the options should not include AM/PM

  Scenario: Custom interval of 15 minutes
    Given the timepicker has an interval of 15 minutes
    When I open the dropdown
    Then I should see options at 15-minute intervals like "8:30 AM", "8:45 AM", "9:00 AM"

  Scenario: Timepicker is disabled
    Given the timepicker is disabled
    Then the spinbuttons should not be interactive
    And the dropdown button should not be clickable
    And the timepicker should have disabled styling

  Scenario: Timepicker is readonly
    Given the timepicker is readonly
    Then the spinbuttons should not accept input
    And the dropdown button should not be clickable

  Scenario: Timepicker with validation error
    Given the timepicker has help-text-type set to "error"
    And the timepicker has help-text "Please select a valid time"
    Then the timepicker border should reflect the error state
    And the error message should be displayed below the input

  Scenario: Custom value not matching interval is allowed
    Given the timepicker has value "08:33"
    When I open the dropdown
    Then no option should have a checkmark
    And the spinbuttons should display "08" and "33"

  Scenario: Value is always stored in 24-hour format
    Given the timepicker uses 12-hour format
    And I select "2:30 PM" from the dropdown
    Then the component value attribute should be "14:30"

  Scenario: User opens the menu using Enter key on dropdown button
    Given that I focus on the dropdown arrow button
    When I press the Enter key
    Then the dropdown menu should open
    And the selected menu item "8:30 AM" should be focused

  Scenario: User opens the menu using Space key on dropdown button
    Given that I focus on the dropdown arrow button
    When I press the Space key
    Then the dropdown menu should open
    And the selected menu item "8:30 AM" should be focused

  Scenario: Menu opens with first item focused when no value is selected
    Given the timepicker has no value set
    When I open the dropdown
    Then the first menu item should be focused

  Scenario: Menu opens with selected item focused when value matches an interval
    Given the timepicker has value "08:30"
    When I open the dropdown
    Then the menu item "8:30 AM" should be focused

  Scenario: User navigates down through menu items with Arrow Down
    Given I have opened the timepicker dropdown
    And the first menu item is focused
    When I press the Arrow Down key
    Then the next menu item should be focused
    And the timepicker input becomes defocused

  Scenario: User navigates up through menu items with Arrow Up
    Given I have opened the timepicker dropdown
    And a menu item below the first is focused
    When I press the Arrow Up key
    Then the previous menu item should be focused

  Scenario: Menu navigation wraps from last to first with Arrow Down
    Given I have opened the timepicker dropdown
    And the last menu item is focused
    When I press the Arrow Down key
    Then the first menu item should be focused

  Scenario: Menu navigation wraps from first to last with Arrow Up
    Given I have opened the timepicker dropdown
    And the first menu item is focused
    When I press the Arrow Up key
    Then the last menu item should be focused

  Scenario: User selects a menu item using Enter key
    Given I have opened the timepicker dropdown
    And the menu item "9:00 AM" is focused
    When I press the Enter key
    Then the timepicker value should be "09:00"
    And the dropdown should be closed
    And focus should return to the timepicker input

  Scenario: User closes the menu with Escape without changing value
    Given I have opened the timepicker dropdown
    And the menu item "9:00 AM" is focused
    When I press the Escape key
    Then the dropdown should be closed
    And the timepicker value should remain "08:30"
    And focus should return to the timepicker input

  Scenario: Spinbutton values do not affect each other
    Given that I focus on the minutes spinbutton
    And the minutes display "30"
    When I press the Arrow Down key repeatedly until minutes show "00"
    Then the hours spinbutton should still display "08"

  Scenario: Tab key navigates through component elements
    Given the timepicker is in its default state
    When I press the Tab key
    Then focus should move to the hours spinbutton
    When I press the Tab key again
    Then focus should move to the minutes spinbutton
    When I press the Tab key again
    Then focus should move to the period spinbutton
    When I press the Tab key again
    Then focus should move to the dropdown arrow button

  Scenario: Screen reader announces hours spinbutton with instructions (empty)
    Given the timepicker has no value set
    When I focus on the hours spinbutton
    Then the screen reader should announce "Start time, required, hh:mm --, hours, edit, spinbutton, To set value, use the up/down arrow keys or type a value"

  Scenario: Screen reader announces hours spinbutton with value (typed)
    Given the timepicker has value "08:30" in 12-hour format
    When I focus on the hours spinbutton
    Then the screen reader should announce "Start time, required, 08:30 AM, hours, spinbutton, 08, To set value, use the up/down arrow keys or type a value"

  Scenario: Screen reader announces minutes spinbutton
    Given the timepicker has value "08:30"
    When I focus on the minutes spinbutton
    Then the screen reader should announce "minutes, spinbutton, 30, To set value, use the up/down arrow keys or type a value"

  Scenario: Screen reader announces period spinbutton
    Given the timepicker has value "08:30" in 12-hour format
    When I focus on the period spinbutton
    Then the screen reader should announce "period, spinbutton, AM, To set value, use the up/down arrow keys or type a value"

  Scenario: Screen reader announces dropdown button
    Given the timepicker has value "08:30"
    When I focus on the dropdown arrow button
    Then the screen reader should announce "Show time picker, button, has popup"

  Scenario: Screen reader announces unselected listbox option with position
    Given the timepicker has no value set
    And the dropdown is open
    When the first option receives focus
    Then the screen reader should announce "8:30 AM, 1 of 48, unselected"

  Scenario: Screen reader announces selected listbox option with position
    Given the timepicker has value "08:30"
    And the dropdown is open
    When the selected option receives focus
    Then the screen reader should announce "8:30 AM, 18 of 48, selected"

  Scenario: Screen reader announces next option when navigating down
    Given the timepicker has value "08:30"
    And the dropdown is open with the selected option focused
    When I press the Arrow Down key
    Then the screen reader should announce "9:00 AM, 19 of 48, unselected"
