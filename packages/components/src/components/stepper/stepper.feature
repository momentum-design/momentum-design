Feature: Stepper context propagation, child filtering, and integration
  As a user, I want the stepper to visually connect steps with connectors that reflect the current orientation and
  variant.
  And I want the stepper to update stepperconnector and stepperitem context when orientation or variant changes.

  Scenario: Stepper provides horizontal orientation to connectors
    Given a stepper with orientation set to horizontal
    When the stepper renders with stepperconnector children
    Then each stepperconnector should have orientation set to horizontal

  Scenario: Stepper provides vertical orientation to connectors
    Given a stepper with orientation set to vertical
    When the stepper renders with stepperconnector children
    Then each stepperconnector should have orientation set to vertical

  Scenario: Stepper provides stacked variant to stepperitems
    Given a stepper with variant set to stacked
    When the stepper renders stepperitem children
    Then each stepperitem should have variant set to stacked

  Scenario: Stepper provides inline variant to stepperitems
    Given a stepper with variant set to inline
    When the stepper renders stepperitem children
    Then each stepperitem should have variant set to inline

  Scenario: Stepper updates stepperconnector orientation on change
    Given a stepper with orientation set to horizontal
    When the orientation is changed to vertical
    Then all stepperconnector children should update their orientation to vertical

  Scenario: Stepper updates stepperitem variant on change
    Given a stepper with variant set to inline
    When the variant is changed to stacked
    Then all stepperitem children should update their variant to stacked

  Scenario: Stepper integrates stepperitem and stepperconnector visually
    Given a stepper with multiple stepperitem and stepperconnector children
    When the stepper is rendered
    Then the connectors visually connect the stepperitems according to orientation

  Scenario: Stepper accessibility
    Given a stepper with stepperitem and stepperconnector children
    When the stepper is rendered
    Then the stepper should have role="list" 
    And each stepperitem should have role="listitem"

