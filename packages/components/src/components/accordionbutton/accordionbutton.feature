Feature: Accordion Button Component

  Background:
    Given the Accordion Button component is rendered on the page
    And the accordion button contains:
      | Property      | Value                  | State    |
      | ------------- | ---------------------- | -------- |
      | Prefix Icon   | icon name              | Optional |
      | Header Text   | string                 | Optional |
      | Expanded      | true/false             | Required |
      | Size          | 'small'/'large'        | Optional |
      | Variant       | 'default'/'borderless' | Optional |
      | Disabled      | true/false             | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render accordion button with default settings
      Given the accordion button has default settings
      When the accordion button is rendered
      Then the accordion button should have proper ARIA attributes
      And the header text should be visible
      And the accordion button should be collapsed by default

    Scenario: Render accordion button with prefix icon
      Given the accordion button has a prefix icon
      And the icon name is valid
      When the accordion button is rendered
      Then the icon should be visible before the header text
      And the icon should be properly aligned

  Rule: ✅ User Interaction

    Scenario: Clicking accordion button header
      Given the accordion button is rendered
      When clicking the header
      Then the button should toggle visibility
      And a "shown" event should be dispatched
      And aria-expanded state should be updated

    Scenario: Keyboard navigation
      Given the accordion button is focused
      When pressing enter or space
      Then the accordion button should toggle visibility
      And a "shown" event should be dispatched
      And focus should remain on the accordion button

    Scenario: Programmatic control
      Given the accordion button is rendered
      When programmatically setting visible state
      Then the accordion button should toggle visibility
      And aria-expanded state should be updated
      And the UI should reflect the change

  Rule: ✅ Accessibility

    Scenario: ARIA attributes
      Given the accordion button is rendered
      Then the accordion button should have role="heading" with the aria-level of "3"
      And the inside the heading, the role should be "button"
      And proper aria-controls should be set to the body section id
      And proper aria-expanded states should be maintained

    Scenario: Keyboard accessibility
      Given the accordion button is focused
      When using keyboard navigation
      Then focus should be properly managed
      And keyboard shortcuts should work
      And screen reader announcements should be correct

    Scenario: Disabled state
      Given the accordion button is disabled
      When interacting with the accordion button
      Then the accordion button should not respond to clicks
      And keyboard navigation should skip the accordion button
      And proper aria-disabled states should be set

  Rule: ✅ Size Variants

    Scenario: Different sizes
      Given the accordion button has size="small"
      When the accordion button is rendered
      Then the accordion button should have proper sizing
      And the layout should be compact

  Rule: ✅ Event Handling

    Scenario: Header click event
      Given the accordion button is rendered
      When clicking the header
      Then a "shown" event should be dispatched
      And the event should bubble up
      And the event should be cancelable

  Rule: ✅ Content Slots

    Scenario: Default slot content
      Given the accordion button has content in the default slot
      When the accordion button is expanded
      Then the content should be visible
      And the content should be properly positioned
      And the content should be accessible

    Scenario: Empty content
      Given the accordion button has no content
      When the button is expanded
      Then the button should still be visible
      And proper ARIA states should be maintained

  Rule: ✅ State Management

    Scenario: Initial visibility state
      Given the accordion button is rendered with expanded=true
      When the component initializes
      Then the button should be expanded
      And aria-expanded state should be true
      And content should be visible

    Scenario: Toggle state persistence
      Given the accordion button is rendered
      When toggling visibility multiple times
      Then the state should persist
      And aria-expanded state should be properly updated
      And the UI should reflect the state changes

  Rule: ✅ Error Handling

    Scenario: Invalid icon name
      Given the accordion button has an invalid icon name
      When the accordion button is rendered
      Then the icon should not be displayed
      And no error should be thrown
      And the accordion button should render properly without the Icon
