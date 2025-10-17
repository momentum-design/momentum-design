Feature: Accordion Component

  Background:
    Given the Accordion component is rendered on the page
    And the accordion header has role="heading"
    And the accordion contains:
      | Property         | Value                  | State    |
      | ---------------- | ---------------------- | -------- |
      | Header Text      | string                 | Optional |
      | Leading Label    | string                 | Optional |
      | Trailing Label   | string                 | Optional |
      | Expanded         | true/false             | Required |
      | Disabled         | true/false             | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render accordion with default settings
      Given the accordion has default settings
      When the accordion is rendered
      Then the accordion should have proper ARIA attributes
      And the header text should be visible
      And the accordion should be collapsed by default

    Scenario: Render accordion with labels
      Given the accordion has leading and trailing labels in the slots
      When the accordion is rendered
      Then both labels should be visible as chips in the leading and trailing sections
      And the labels should be properly positioned

  Rule: ✅ Content Slots and Layout

    Scenario: Leading controls slot
      Given the accordion has content in slot="leading-controls"
      When the accordion is rendered
      Then the leading controls should be positioned after the header text
      And the layout should be properly aligned

    Scenario: Trailing controls slot
      Given the accordion has content in slot="trailing-controls"
      When the accordion is rendered
      Then the trailing controls should be positioned before the arrow up/down icon
      And the layout should be properly aligned

  Rule: ✅ User Interaction

    Scenario: Clicking accordion header button
      Given the accordion is rendered
      When clicking the header button
      Then the accordion should toggle visibility
      And a "shown" event should be dispatched
      And aria-expanded state should be updated

    Scenario: Keyboard navigation
      Given the accordion header button is focused
      When pressing enter or space
      Then the accordion should toggle visibility
      And focus should remain on the accordion header button

  Rule: ✅ Accessibility

    Scenario: ARIA attributes
      Given the accordion is rendered
      Then the accordion header button should have role="button"
      And proper aria-expanded states should be maintained
      And proper aria-controls should reference the content section
      And an accessible name provided by aria-label or aria-labelledby is given to the trigger button

    Scenario: Disabled state
      Given the accordion is disabled
      When interacting with the accordion header button
      Then the accordion should not respond to clicks
      And keyboard navigation should skip the accordion
      And all controls inside the header slots should be disabled

  Rule: ✅ Content

    Scenario: Content visibility
      Given the accordion is expanded
      When the content is present
      Then the content should be visible
      And the content should be properly positioned

    Scenario: Empty content
      Given the accordion has no content
      When the accordion is expanded
      Then the accordion header should still be visible
      And proper ARIA states should be maintained

  Rule: ✅ State Management

    Scenario: Initial expanded state
      Given the accordion is rendered with expanded=true
      When the component initializes
      Then the accordion should be expanded
      And aria-expanded state should be true
      And aria-label of trigger button should be about closing the accordion
      And content should be visible

    Scenario: Toggle state persistence
      Given the accordion is rendered
      When toggling visibility multiple times
      Then the state should persist
      And aria-expanded state should be properly updated
      And aria-label of trigger button should be proparly updated

  Rule: ✅ Error Handling

    Scenario: Invalid icon name
      Given the accordion has an invalid icon name
      When the accordion is rendered
      Then the icon should not be displayed
      And no error should be thrown
      And the accordion should render properly without the icon
