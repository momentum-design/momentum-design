Feature: List Accessibility, User Interaction, and Focus Management

  Background:
    Given the List component is rendered on the page
    And the list has role="list"
    And the list contains one or more list items
    And each list item has role="listitem"
    And the list supports optional header, divider, and controls

  Rule: ✅ Rendering and Visual States

    Scenario: Render list with a single item
      Given the list contains one list item with label "List Item 1"
      When the list is rendered
      Then the list item should be visible
      And the list should have proper ARIA attributes

    Scenario: Render list with header and multiple items
      Given the list contains a header with text "List Header"
      And the list contains six list items with controls
      When the list is rendered
      Then the header should be visible above the items
      And all list items and controls should be visible

    Scenario: Render list with divider
      Given the list contains a header "List With Divider"
      And two list items, followed by a divider, then two more list items
      When the list is rendered
      Then the divider should visually separate the items

  Rule: ✅ Accessibility

    Scenario: List passes accessibility checks
      Given the list is rendered with default items
      When accessibility checks are performed
      Then there should be no accessibility violations

  Rule: ✅ Focus Management and Keyboard Navigation

    Scenario: Focus list items using Tab and Arrow keys
      Given the list contains five items
      When I press Tab
      Then the first list item should receive focus
      When I press ArrowDown
      Then focus should move to the next list item
      When I press End
      Then focus should move to the last list item
      When I press Home
      Then focus should return to the first list item

    Scenario: Focus controls within list items
      Given the list contains items with leading and trailing controls
      When I press Tab repeatedly
      Then focus should move from the list item to each control in order
      When I press ArrowUp on the first item
      Then focus should move to the last item

  Rule: ✅ Mouse Interactions

    Scenario: Click to focus list items
      Given the list contains multiple items
      When I click on a specific list item
      Then that list item should receive focus

  Rule: ✅ Disabled and Enabled States

    Scenario: Focus skips disabled list items
      Given the list contains five items, some with disabled attribute
      When I press Tab
      Then focus should skip disabled items and move to the next enabled item
      When I press ArrowDown
      Then focus should cycle through enabled items only

    Scenario: Visual indication of disabled items
      Given the list contains disabled items
      When the list is rendered
      Then disabled items should appear visually disabled
      And have aria-disabled="true"

  Rule: ✅ User Flows

    Scenario: Focus all items in user flow
      Given the list contains five items
      When I press Tab and ArrowDown repeatedly
      Then each item should receive focus in order
      When I press ArrowUp
      Then focus should move back through the items

    Scenario: Take visual regression screenshots for user flows
      Given the list is rendered with disabled items
      When I navigate to the last enabled item
      Then a screenshot should be taken for visual regression

  Rule: ✅ ARIA and Accessibility Attributes

    Scenario: List and items have correct ARIA roles
      Given the list is rendered
      Then the list should have role="list"
      And each item should have role="listitem"
      And disabled items should have aria-disabled="true"

    Scenario: Controls have appropriate ARIA labels
      Given the list contains items with controls
      Then each control should have appropriate aria-label or data-aria-label
