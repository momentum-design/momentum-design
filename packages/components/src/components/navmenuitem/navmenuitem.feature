# AI-Assisted
Feature: NavMenuItem Navigation and User Interaction

  Background:
    Given the NavMenuItem component is rendered on the page
    And the navmenuitem has role="menuitem"
    And the navmenuitem is focusable with tabindex="0"
    And the navmenuitem contains:
      | Property         | Value                 | State    |
      | ---------------- | ------------------    | -------- |
      | Label            | "Navigation Item"     | Required |
      | Icon Name        | "placeholder-regular" | Required |
      | Nav ID           | "nav-item-1"          | Required |
      | Active State     | true/false            | Optional |
      | Show Label       | true/false            | Optional |
      | Badge Type       | dot/counter           | Optional |
      | Counter          | number                | Optional |
      | Disabled State   | true/false            | Optional |
      | Soft-Disabled    | true/false            | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render navmenuitem with label and icon
      Given the navmenuitem has a label "Navigation Item"
      And the navmenuitem has an icon "placeholder-regular"
      And the navmenuitem has show-label set to true
      When the navmenuitem is rendered
      Then the label should be visible
      And the icon should be visible

    Scenario: Render active navmenuitem
      Given the navmenuitem has active attribute set to true
      When the navmenuitem is rendered
      Then the navmenuitem should have active attribute
      And the icon should be modified to filled variant (placeholder-filled)
      When disable-aria-current is not set to true
      Then the navmenuitem should have aria-current="page"

    Scenario: Render navmenuitem without label (collapsed state)
      Given the navmenuitem has show-label set to false
      And the navmenuitem has aria-label attribute set
      When the navmenuitem is rendered
      Then the text label should not be visible
      And the icon should be visible
      And the navmenuitem should have aria-label for accessibility

    Scenario: Render navmenuitem with dot badge
      Given the navmenuitem has badge-type set to "dot"
      When the navmenuitem is rendered
      Then a dot badge should be visible
      And the badge should have type="dot"

    Scenario: Render navmenuitem with counter badge
      Given the navmenuitem has badge-type set to "counter"
      And the navmenuitem has counter set to a number
      When the navmenuitem is rendered
      Then a counter badge should be visible
      And the badge should display the correct count
      And the badge should have type="counter"

    Scenario: Render navmenuitem with high counter and max-counter
      Given the navmenuitem has badge-type set to "counter"
      And the navmenuitem has counter set to 150
      And the navmenuitem has max-counter set to 99
      When the navmenuitem is rendered
      Then the badge should respect the max-counter limit
      And the badge should display "99+" for values above max-counter

    Scenario: Render disabled navmenuitem
      Given the navmenuitem has disabled attribute set
      When the navmenuitem is rendered
      Then the navmenuitem should appear visually disabled
      And the navmenuitem should have aria-disabled="true"
      And the navmenuitem should not be focusable

    Scenario: Render soft-disabled navmenuitem
      Given the navmenuitem has soft-disabled attribute set
      When the navmenuitem is rendered
      Then the navmenuitem should appear visually disabled
      And the navmenuitem should have aria-disabled="true"
      But the navmenuitem should remain focusable

  Rule: ✅ Mouse Interactions

    Scenario: Click on normal active navmenuitem
      Given the navmenuitem is in active state
      When I click on the navmenuitem
      Then an activechange event should be emitted
      And the event should contain navId and active state details

    Scenario: Click on disabled navmenuitem
      Given the navmenuitem is disabled
      When I click on the navmenuitem
      Then the navmenuitem should remain disabled
      And no activechange event should be emitted
      And the navmenuitem should have disabled attribute

  Rule: ✅ Keyboard Interactions

    Scenario: Focus navmenuitem using Tab navigation
      Given the navmenuitem is rendered and enabled
      When I navigate using Tab key
      Then the navmenuitem should receive focus
      And the navmenuitem should be visually focused

    Scenario: Disabled navmenuitem keyboard behavior
      Given the navmenuitem is disabled
      When I try to focus the navmenuitem using Tab
      Then the navmenuitem should not receive focus
      And the navmenuitem should be skipped in focus order

    Scenario: Soft-disabled navmenuitem keyboard behavior
      Given the navmenuitem is soft-disabled
      When I navigate using Tab key
      Then the navmenuitem should receive focus
      And the navmenuitem should be visually focused

  Rule: ✅ ARIA and Accessibility

    Scenario: Default ARIA attributes
      Given the navmenuitem is rendered
      Then the navmenuitem should have role="menuitem"
      And the navmenuitem should have tabindex="0"

    Scenario: Active state ARIA attributes
      Given the navmenuitem is in active state
      Then the navmenuitem should have aria-current="page"
      And the navmenuitem should maintain proper navigation context

    Scenario: Disabled state ARIA attributes
      Given the navmenuitem is disabled
      Then the navmenuitem should have aria-disabled="true"
      And the navmenuitem should not be in tab order

    Scenario: Soft-disabled state ARIA attributes
      Given the navmenuitem is soft-disabled
      Then the navmenuitem should have aria-disabled="true"
      But the navmenuitem should remain in tab order with tabindex="0"

    Scenario: Collapsed state accessibility
      Given the navmenuitem has show-label set to false
      And the navmenuitem has aria-label attribute
      Then the navmenuitem should have aria-label for screen readers
      And the aria-label should describe the navigation item

    Scenario: Disable aria-current attribute for active navmenuitem
      Given the navmenuitem is in active state
      And the navmenuitem has disable-aria-current set to true
      When the navmenuitem is rendered
      Then the navmenuitem should be visually active
      But the navmenuitem should not have aria-current="page" attribute

  Rule: ✅ Badge Functionality

    Scenario: Badge visibility in expanded state
      Given the navmenuitem has show-label set to true
      And the navmenuitem has a badge configured
      When the navmenuitem is rendered
      Then the badge should be visible
      And the badge should be positioned correctly

    Scenario: Badge visibility in collapsed state
      Given the navmenuitem has show-label set to false
      And the navmenuitem has a badge configured
      When the navmenuitem is rendered
      Then the badge should be visible
      And the badge should be positioned near the icon

    Scenario: Counter badge with max-counter behavior
      Given the navmenuitem has badge-type set to "counter"
      And the navmenuitem has counter greater than max-counter
      When the navmenuitem is rendered
      Then the badge should display the max-counter limit with "+" indicator
      And the badge should not display the actual counter value

  Rule: ✅ Event Handling

    Scenario: ActiveChange event details
      Given the navmenuitem is in active state
      When I interact with the navmenuitem (click, Enter, or Space)
      Then an activechange event should be emitted
      And the event detail should contain navId property
      And the event detail should contain active state property
      And the event should bubble up through the DOM

  Rule: ✅ Icon State Management

    Scenario: Icon modification based on active state
      Given the navmenuitem has an icon "placeholder-regular"
      And the navmenuitem is not active
      When the navmenuitem becomes active
      Then the icon should change to "placeholder-filled"
      When the navmenuitem becomes inactive
      Then the icon should revert to "placeholder-regular"

    Scenario: Icon fallback behavior
      Given the navmenuitem has an icon that doesn't have a filled variant
      When the navmenuitem becomes active
      Then the icon should remain unchanged
      And no error should be thrown

  Rule: ✅ Navigation Context Integration

    Scenario: NavMenuItem in side navigation context
      Given the navmenuitem is part of a side navigation
      And the side navigation context is available
      When the navigation is expanded
      Then the navmenuitem should show labels
      When the navigation is collapsed
      Then the navmenuitem should hide labels and show icons only

    Scenario: Arrow indicator for nested navigation
      Given the navmenuitem has siblings with trigger IDs
      When the navmenuitem is rendered
      Then an arrow indicator should be displayed
      And the arrow should indicate expandable content

# End AI-Assisted