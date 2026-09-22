Feature: Number Input Component
  As a user, I want to enter and adjust a numeric value using the number input component.

  Scenario: Typing a number into the input field
    Given the number component is rendered
    When I type a valid number into the input field
    Then the value of the number component should update to reflect what I typed

  Scenario: Value exceeds the maximum
    Given the number component is rendered with a "max" attribute set
    When I enter a number greater than the maximum and commit the change
    Then the entered value should remain unchanged
    And the component should report a range overflow validation error

  Scenario: Value is below the minimum
    Given the number component is rendered with a "min" attribute set
    When I enter a number less than the minimum and commit the change
    Then the entered value should remain unchanged
    And the component should report a range underflow validation error

  Scenario: Showing the spinner buttons by default
    Given the number component is rendered without the "hide-spinner-buttons" attribute
    Then the increment and decrement spinner buttons should be displayed next to the input field

  Scenario: Hiding the spinner buttons
    Given the "hide-spinner-buttons" attribute is set on the number component
    Then the increment and decrement spinner buttons should not be displayed

  Scenario: Incrementing the value with the plus spinner button
    Given the number component is rendered with the spinner buttons shown
    When I click the plus spinner button
    Then the value should increase by the "step" amount

  Scenario: Decrementing the value with the minus spinner button
    Given the number component is rendered with the spinner buttons shown
    When I click the minus spinner button
    Then the value should decrease by the "step" amount

  Scenario: Adjusting the step amount
    Given the number component is rendered with a "step" attribute set to a custom value
    When I click the plus or minus spinner button
    Then the value should change by that custom step amount

  Scenario: Stepping in decimal increments
    Given the number component is rendered with a "step" attribute set to a decimal value
    When I click the plus or minus spinner button
    Then the value should change precisely by that decimal amount

  Scenario: Allowing any decimal value
    Given the number component is rendered with the "step" attribute set to "any"
    When I type a decimal value that does not align to a whole step
    Then the value should be accepted without a step-mismatch validation error

  Scenario: Incrementing the value with the up arrow key
    Given the number component is rendered and focused
    When I press the up arrow key
    Then the value should increase by the "step" amount

  Scenario: Decrementing the value with the down arrow key
    Given the number component is rendered and focused
    When I press the down arrow key
    Then the value should decrease by the "step" amount
