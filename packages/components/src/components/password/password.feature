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
