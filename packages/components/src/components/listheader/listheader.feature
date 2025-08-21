Feature: Listheader component
  As a user of the Momentum Design System
  I want to use the listheader component to visually separate groups in lists
  So that I can provide clear visual grouping in my UI

  Scenario: Listheader displays icons and text visually only
    Given I provide a prefix-icon, postfix-icon and header-text
    Then the icons and text are rendered visually
    And the icons and text are hidden from screen readers

  Scenario: Listheader allows actionable content in slot
    Given I pass actionable elements (e.g., button) into the default slot
    Then those elements remain focusable and visible to screen readers
