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
      Given the list contains items with interactive leading and trailing controls
      When I press Tab
      Then the first list item should receive focus
      When I press Tab repeatedly
      Then focus should move from the list item to each control in order

    Scenario: Using Arrow Down for navigation
      Given the list contains five items and the keyboard focus is on the fourth listitem
      When I press ArrowDown
      Then focus should move to the last item
      When I press ArrowDown on the last item
      Then focus should move to the first item

    Scenario: Using Arrow Up for navigation
      Given the list contains five items and the keyboard focus is on the second listitem
      When I press ArrowUp
      Then focus should move to the first item
      When I press ArrowUp on the first item
      Then focus should move to the last item

  Rule: ✅ Mouse Interactions

    Scenario: Click to focus list items
      Given the list contains multiple items
      When I click on a specific list item
      Then that list item should fire click event

  Rule: ✅ Disabled and Enabled States

    Scenario: Focus skips disabled list items
      Given the list contains five items:
        | index | label    | disabled |
        | 1     | "Item 1" | false    |
        | 2     | "Item 2" | true     |
        | 3     | "Item 3" | false    |
        | 4     | "Item 4" | true     |
        | 5     | "Item 5" | false    |
      When I press Tab
      Then focus should move to "Item 1"
      When I press ArrowDown
      Then focus should move to "Item 3"
      When I press ArrowDown
      Then focus should move to "Item 5"
      When I press ArrowDown
      Then focus should cycle back to "Item 1"
      And focus should never land on disabled items ("Item 2" or "Item 4")

    Scenario: Focus all items in user flow
      Given the list contains five items
      When I press Tab
      Then the first list item is focused.
      When I press ArrowDown
      Then the second list item should receive focus
      When I press ArrowUp
      Then focus should move back through the first list item

    Scenario: Rowing index preserves focus on Shift+Tab
      Given the list contains five items with rowing index enabled
      And focus is on the third list item
      When I press Tab to move to the next focusable element outside the list
      And I press Shift+Tab
      Then focus should return to the third list item

  Rule: ✅ ARIA and Accessibility Attributes

    Scenario: List and items have correct ARIA roles
      Given the list is rendered
      Then the list should have role="list"
      And each item should have role="listitem"
      And disabled items should have aria-disabled="true"
