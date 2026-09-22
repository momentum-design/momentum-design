Feature: Number Component
  As a user, I want to enter and adjust a numeric value using the number component.

  Scenario: Typing a number into the input field
    Given the number component is rendered
    When I type a valid number into the input field
    Then the value of the number component should update to reflect what I typed

  Scenario: Value exceeds the maximum
    Given the number component is rendered with a "max" attribute set
    When I enter a number greater than the maximum and commit the change
    Then the value should automatically be set to the maximum

  Scenario: Value is below the minimum
    Given the number component is rendered with a "min" attribute set
    When I enter a number less than the minimum and commit the change
    Then the value should automatically be set to the minimum

  Scenario: Showing the steppers by default
    Given the number component is rendered without the "hide-steppers" attribute
    Then the increment and decrement stepper buttons should be displayed next to the input field

  Scenario: Hiding the steppers
    Given the "hide-steppers" attribute is set on the number component
    Then the increment and decrement stepper buttons should not be displayed

  Scenario: Incrementing the value with the plus stepper
    Given the number component is rendered with the steppers shown
    When I click the plus stepper button
    Then the value should increase by the "step" amount

  Scenario: Decrementing the value with the minus stepper
    Given the number component is rendered with the steppers shown
    When I click the minus stepper button
    Then the value should decrease by the "step" amount

  Scenario: Adjusting the step amount
    Given the number component is rendered with a "step" attribute set to a custom value
    When I click the plus or minus stepper button
    Then the value should change by that custom step amount

  Scenario: Stepping in decimal increments
    Given the number component is rendered with a "step" attribute set to a decimal value
    When I click the plus or minus stepper button
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
