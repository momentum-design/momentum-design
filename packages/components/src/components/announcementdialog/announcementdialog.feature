Feature: Announcement Dialog Component
  As a user
  I want to use an announcement dialog
  So that I can display important announcements with illustrations

  Background:
    Given I am using the announcement dialog component
    And it extends the Dialog component

  Scenario: Display announcement dialog with illustration
    Given I have an announcement dialog
    When I set an illustration attribute
    Then the dialog should display with the specified illustration
    And it should maintain all the functionality of the base Dialog component

  Scenario: Announcement dialog inherits Dialog behavior
    Given I have an announcement dialog
    When I interact with the dialog
    Then it should behave exactly like a Dialog component
    And all Dialog properties and methods should be available

  Scenario: Illustration attribute configuration
    Given I have an announcement dialog
    When I provide an illustration value
    Then the illustration should be rendered within the dialog
    And the dialog should adjust its layout accordingly
