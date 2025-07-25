Feature: StepperConnector status display
  As a user, I want to see the status of each step in a stepper.
  And I want to know which steps are completed and which are incomplete.

  Scenario: StepperConnector displays status
    Given a stepper with multiple steps
    When a step is completed
    Then the connector between steps should visually indicate completion

  Scenario: StepperConnector status attribute
    Given a connector component
    When the status attribute is set to complete
    Then the connector should visually indicate completion
    When the status attribute is set to incomplete
    Then the connector should visually indicate incompletion

  Scenario: StepperConnector orientation
    Given a connector component
    When the orientation is set to vertical
    Then the connector should be displayed vertically
    When the orientation is set to horizontal
    Then the connector should be displayed horizontally

  Scenario: Visual only
    Given a connector component
    Then it should not contain any accessibility attributes
