# AI-Assisted
Feature: Navitem Navigation and User Interaction

  Background:
    Given the Navitem component is rendered on the page
    And the navitem has role="menuitem"
    And the navitem is focusable with tabindex="0"
    And the navitem contains:
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

    Scenario: Render navitem with label and icon
      Given the navitem has a label "Navigation Item"
      And the navitem has an icon "placeholder-regular"
      And the navitem has show-label set to true
      When the navitem is rendered
      Then the label should be visible
      And the icon should be visible
      And the navitem should have proper ARIA attributes

    Scenario: Render active navitem
      Given the navitem has active attribute set to true
      When the navitem is rendered
      Then the navitem should have active attribute
      And the icon should be modified to filled variant (placeholder-filled)
      And the navitem should have aria-current="page"

    Scenario: Render navitem without label (collapsed state)
      Given the navitem has show-label set to false
      And the navitem has aria-label attribute set
      When the navitem is rendered
      Then the text label should not be visible
      And the icon should be visible
      And the navitem should have aria-label for accessibility

    Scenario: Render navitem with dot badge
      Given the navitem has badge-type set to "dot"
      When the navitem is rendered
      Then a dot badge should be visible
      And the badge should have type="dot"

    Scenario: Render navitem with counter badge
      Given the navitem has badge-type set to "counter"
      And the navitem has counter set to a number
      When the navitem is rendered
      Then a counter badge should be visible
      And the badge should display the correct count
      And the badge should have type="counter"

    Scenario: Render navitem with high counter and max-counter
      Given the navitem has badge-type set to "counter"
      And the navitem has counter set to 150
      And the navitem has max-counter set to 99
      When the navitem is rendered
      Then the badge should respect the max-counter limit
      And the badge should display "99+" for values above max-counter

    Scenario: Render disabled navitem
      Given the navitem has disabled attribute set
      When the navitem is rendered
      Then the navitem should appear visually disabled
      And the navitem should have aria-disabled="true"
      And the navitem should not be focusable

    Scenario: Render soft-disabled navitem
      Given the navitem has soft-disabled attribute set
      When the navitem is rendered
      Then the navitem should appear visually disabled
      And the navitem should have aria-disabled="true"
      But the navitem should remain focusable with tabindex="0"

  Rule: ✅ Mouse Interactions

    Scenario: Click on normal active navitem
      Given the navitem is in active state
      When I click on the navitem
      Then an activechange event should be emitted
      And the event should contain navId and active state details

    Scenario: Click on disabled navitem
      Given the navitem is disabled
      When I click on the navitem
      Then the navitem should remain disabled
      And no activechange event should be emitted
      And the navitem should have disabled attribute

  Rule: ✅ Keyboard Interactions

    Scenario: Focus navitem using Tab navigation
      Given the navitem is rendered and enabled
      When I navigate using Tab key
      Then the navitem should receive focus
      And the navitem should be visually focused

    Scenario: Activate navitem using Enter key
      Given the navitem is focused and active
      When I press "Enter"
      Then an activechange event should be emitted
      And the event should contain the current active state

    Scenario: Activate navitem using Space key
      Given the navitem is focused and active
      When I press "Space" key
      Then an activechange event should be emitted
      And the event should contain the current active state

    Scenario: Disabled navitem keyboard behavior
      Given the navitem is disabled
      When I try to focus the navitem using Tab
      Then the navitem should not receive focus
      And the navitem should be skipped in focus order

  Rule: ✅ ARIA and Accessibility

    Scenario: Default ARIA attributes
      Given the navitem is rendered
      Then the navitem should have role="menuitem"
      And the navitem should have tabindex="0"

    Scenario: Active state ARIA attributes
      Given the navitem is in active state
      Then the navitem should have aria-current="page"
      And the navitem should maintain proper navigation context

    Scenario: Disabled state ARIA attributes
      Given the navitem is disabled
      Then the navitem should have aria-disabled="true"
      And the navitem should not be in tab order

    Scenario: Soft-disabled state ARIA attributes
      Given the navitem is soft-disabled
      Then the navitem should have aria-disabled="true"
      But the navitem should remain in tab order with tabindex="0"

    Scenario: Collapsed state accessibility
      Given the navitem has show-label set to false
      And the navitem has aria-label attribute
      Then the navitem should have aria-label for screen readers
      And the aria-label should describe the navigation item

  Rule: ✅ Badge Functionality

    Scenario: Badge visibility in expanded state
      Given the navitem has show-label set to true
      And the navitem has a badge configured
      When the navitem is rendered
      Then the badge should be visible
      And the badge should be positioned correctly

    Scenario: Badge visibility in collapsed state
      Given the navitem has show-label set to false
      And the navitem has a badge configured
      When the navitem is rendered
      Then the badge should be visible
      And the badge should be positioned near the icon

    Scenario: Counter badge with max-counter behavior
      Given the navitem has badge-type set to "counter"
      And the navitem has counter greater than max-counter
      When the navitem is rendered
      Then the badge should display the max-counter limit with "+" indicator
      And the badge should not display the actual counter value

  Rule: ✅ Event Handling

    Scenario: ActiveChange event details
      Given the navitem is in active state
      When I interact with the navitem (click, Enter, or Space)
      Then an activechange event should be emitted
      And the event detail should contain navId property
      And the event detail should contain active state property
      And the event should bubble up through the DOM

    Scenario: Focus and blur events
      Given the navitem is rendered
      When I focus the navitem
      Then a focus event should be fired
      When I blur the navitem by pressing Tab
      Then a blur event should be fired

  Rule: ✅ Icon State Management

    Scenario: Icon modification based on active state
      Given the navitem has an icon "placeholder-regular"
      And the navitem is not active
      When the navitem becomes active
      Then the icon should change to "placeholder-filled"
      When the navitem becomes inactive
      Then the icon should revert to "placeholder-regular"

    Scenario: Icon fallback behavior
      Given the navitem has an icon that doesn't have a filled variant
      When the navitem becomes active
      Then the icon should remain unchanged
      And no error should be thrown

  Rule: ✅ Navigation Context Integration

    Scenario: Navitem in side navigation context
      Given the navitem is part of a side navigation
      And the side navigation context is available
      When the navigation is expanded
      Then the navitem should show labels
      When the navigation is collapsed
      Then the navitem should hide labels and show icons only

    Scenario: Arrow indicator for nested navigation
      Given the navitem has siblings with trigger IDs
      When the navitem is rendered
      Then an arrow indicator should be displayed
      And the arrow should indicate expandable content

# End AI-Assisted