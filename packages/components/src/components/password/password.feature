Feature: Password Component
  As a user, I want the password component to work the same way as the input component.

  Scenario: Password component behaves like input
    Given I use the password component
    Then it should have all functionalities of the input component except the type should be "password" by default
    And it should have a trailing button to toggle password visibility
    And the trailing button will be shown only when the input is not empty

  Scenario: Show/Hide button replaces Clear button
    Given the password component is rendered
    Then the trailing button should be a show/hide button instead of a clear button
    And the button should use the showButtonAriaLabel & hideButtonAriaLabel attribute for accessibility

  Scenario: Toggle password visibility
    Given the password component is rendered
    When I click the trailing show/hide button
    Then the input type should toggle between "text" and "password"
    And the icon should switch between "show-bold" and "hide-bold"

  Scenario: Password component validation with custom error messages
    Given the password component is rendered with custom error messages for minlength, maxlength, and pattern
    When I enter a password that does not meet the minlength requirement
    Then the component should show the custom minlength error message
    When I enter a password that does not meet the maxlength requirement
    Then the component should show the custom maxlength error message
    When I enter a password that does not match the pattern
    Then the component should show the custom pattern error message
    When I enter a valid password
    Then the component should not show any error messages

  Scenario: Password component validation with native error messages
    Given the password component is rendered with native validation error messages and no custom error messages
    When I enter a password that does not meet the required attribute
    Then the component should show the native required error message
    When I enter a password that does not meet the minlength requirement
    Then the component should show the native minlength error message
    When I enter a password that does not meet the maxlength requirement
    Then the component should show the native maxlength error message
    When I enter a password that does not match the pattern
    Then the component should show the native pattern error message
    When I enter a valid password
    Then the component should not show any error messages
