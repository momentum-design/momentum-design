Feature: Password Component
  As a user, I want the password component to work the same way as the input component.

  Scenario: Password component behaves like input
    Given I use the password component
    Then it should have all functionalities of the input component except the type should be "password" by default
    Then it should not have a trailing button by default

  Scenario: Show/Hide button replaces Clear button
    Given the password component is rendered
    Then the trailing button should be a show/hide button instead of a clear button
    And the button should use the showHideButtonAriaLabel attribute
    And the button should toggle the prefixIcon attribute accordingly

  Scenario: Toggle password visibility
    Given the password component is rendered
    When I click the trailing show/hide button
    Then the input type should toggle between "text" and "password"
    And the icon should switch between "show-bold" and "hide-bold" by setting the prefix-icon attribute on the button

  Scenario: Password component validation minlength
    Given the password component is rendered with validation minlength set to 8
    When I enter a password shorter than 8 characters
    Then the component should show an error state with the message "Password must be at least 8 characters long"
    When I enter a password that meets the minimum length requirement
    Then the component should not show an error state

  Scenario: Password component validation maxlength
    Given the password component is rendered with validation maxlength set to 20
    When I enter a password longer than 20 characters
    Then the component should show an error state with the message "Password must be at most 20 characters long"
    When I enter a password that meets the maximum length requirement
    Then the component should not show an error state
