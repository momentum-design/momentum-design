Feature: Stepper context propagation, child filtering, and integration
  As a developer, I want the stepper to automatically provide orientation and variant context to connector and
  stepperitem components.
  As a user, I want the stepper to visually connect steps with connectors that reflect the current orientation and
  variant.
  As a user, I want the stepper to support both horizontal and vertical layouts, and both inline and stacked variants.
  As a user, I want the stepper to update connector and stepperitem context when orientation or variant changes.
  As a developer, I want to ensure that only valid children (mdc-stepperitem, mdc-connector) are rendered inside the
  stepper.
  As a developer, I want the stepper to act as a context provider for its children.

  Scenario: Stepper provides horizontal orientation to connectors
    Given a stepper with orientation set to horizontal
    When the stepper renders connector children
    Then each connector should have orientation set to horizontal

  Scenario: Stepper provides vertical orientation to connectors
    Given a stepper with orientation set to vertical
    When the stepper renders connector children
    Then each connector should have orientation set to vertical

  Scenario: Stepper provides stacked variant to stepperitems
    Given a stepper with variant set to stacked
    When the stepper renders stepperitem children
    Then each stepperitem should have variant set to stacked

  Scenario: Stepper provides inline variant to stepperitems
    Given a stepper with variant set to inline
    When the stepper renders stepperitem children
    Then each stepperitem should have variant set to inline

  Scenario: Stepper updates connector orientation on change
    Given a stepper with orientation set to horizontal
    When the orientation is changed to vertical
    Then all connector children should update their orientation to vertical

  Scenario: Stepper updates stepperitem variant on change
    Given a stepper with variant set to inline
    When the variant is changed to stacked
    Then all stepperitem children should update their variant to stacked

  Scenario: Stepper integrates stepperitem and connector visually
    Given a stepper with multiple stepperitem and connector children
    When the stepper is rendered
    Then the connectors visually connect the stepperitems according to orientation

  Scenario: Stepper accessibility
    Given a stepper with stepperitem and connector children
    When the stepper is rendered
    Then the stepper should have appropriate ARIA roles and attributes for navigation
