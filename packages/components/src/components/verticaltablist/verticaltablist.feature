Feature: mdc-verticaltablist

  Background:
    Given the mdc-verticaltablist component is rendered

  Scenario: Example
    Given the vertical tablist is rendered with tab children
    Then the vertical tablist should display tabs in a vertical layout
    And the tablist element should have role tablist
    And the tablist element should have aria-orientation vertical
    And the first tab should be active by default when no active-tab-id is set
    And keyboard navigation with Up and Down arrow keys should move focus between tabs
    And pressing Home should focus the first tab
    And pressing End should focus the last tab

  Scenario: TablistWithPanels
    Given the vertical tablist is rendered with tabs and associated tab panels
    When the user clicks on a tab
    Then the active-tab-id should update to the clicked tab id
    And a change event should be dispatched with the new tab id
    And the corresponding panel should be shown
    And the previously active panel should be hidden
    When the active-tab-id attribute is set programmatically
    Then the corresponding tab should become active with aria-selected true
    And all other tabs should have aria-selected false
    And a change event should be dispatched with the new tab id
