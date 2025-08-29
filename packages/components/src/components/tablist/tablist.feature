Feature: Tablist component

  Background:
    Given I am on the page with the tablist component
    And the tablist component has 5 tabs: "Calls", "Videos", "Music", "Documents", "Meetings"
    And each tab has an icon and an aria-label
    And the tablist component is rendered with the default variant

  Scenario: Tablist visual regression
    Given the tablist component is rendered
    Then the visual appearance should match the design for default, glass, line, and icon-only variants

  Scenario: Tablist attributes and active tab
    Given the tablist component is rendered
    Then the first tab should be active by default
    And the first tab should have tabindex "0" and aria-selected "true"
    When I set the active-tab-id to "meetings-tab"
    Then the last tab should be active and have aria-selected "true"
    And the first tab should not be active
    When I set the data-aria-label to "Media types tabs"
    Then the tablist container should have aria-label "Media types tabs"

  Scenario: Change active tab by clicking
    Given the tablist component is rendered
    When I click on the second tab
    Then the second tab should be active and have aria-selected "true"
    And the first tab should not be active and have aria-selected "false"
    And the active-tab-id should be "videos-tab"

  Scenario: Change active tab by keyboard (space/enter)
    Given the tablist component is rendered
    When I focus the first tab using the Tab key
    And I press the Enter key
    Then the first tab should be active and have aria-selected "true"

  Scenario: Fire change event when active tab changes
    Given the tablist component is rendered
    When I change the active tab using the keyboard
    Then a change event should be fired

  Scenario: Keyboard navigation between tabs
    Given the tablist component is rendered
    When I focus the first tab using the Tab key
    And I press the ArrowRight key repeatedly
    Then the focus should move through tabs in order: second, third, fourth, fifth, first
    When I press the ArrowLeft key repeatedly
    Then the focus should move through tabs in reverse order: fifth, fourth, third, second, first

  Scenario: Keyboard navigation using Home and End
    Given the tablist component is rendered
    When I focus the first tab using the Tab key
    And I press the ArrowRight key twice to focus on the third tab
    And I press the Home key
    Then the focus should be on the first tab
    When I press the End key
    Then the focus should be on the last tab

  Scenario: Select tab by keyboard navigation and Enter
    Given the tablist component is rendered
    When I focus the first tab using the Tab key
    And I press the ArrowRight key to focus on the second tab
    And I press the Enter key
    Then the second tab should be active and have aria-selected "true"
    And the active-tab-id should be "videos-tab"

  Scenario: Tablist with arrow buttons in small viewport
    Given the tablist component is rendered in a small viewport
    When I focus the first tab using the Tab key
    And I press the ArrowRight key repeatedly
    Then the focus should move through tabs
    When I press the Space key on the fourth tab
    Then the fourth tab should be active and have aria-selected "true"
    And the active-tab-id should be "documents-tab"
    When I press the Tab key
    Then the last arrow button should be focused
    When I press Shift+Tab
    Then the fourth tab should be focused
    When I press Shift+Tab again
    Then the first arrow button should be focused

  Scenario: Arrow button focus returns to active tab when buttons disappear
    Given the tablist component is rendered in a small viewport
    When I focus the last arrow button
    And the viewport is resized to a larger size
    Then the active tab should gain focus

  Scenario: Scroll tabs using arrow buttons
    Given the tablist component is rendered in a small viewport
    When I focus the first tab using the Tab key
    And I press the ArrowRight key
    Then the second tab should be focused
    When I press the ArrowLeft key
    Then the first tab should be focused
    When I press the Enter key
    Then the first tab should be active and have aria-selected "true"
    And the active-tab-id should be "calls-tab"
    When I press the Tab key
    Then the last arrow button should be focused
    When I press Enter or Space on the arrow buttons
    Then the tablist should visually update to show the scrolled tabs
    And there should be no accessibility violations
