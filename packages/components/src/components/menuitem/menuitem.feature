Feature: Menuitem Accessibility and User Interaction

  Background:
    Given the Menuitem component is rendered on the page
    And the menuitem has role="menuitem"
    And the menuitem is focusable with tabindex="0"
    And the menuitem has default variant="inset-rectangle"
    And the menuitem contains:
      | Property         | Value              | State    |
      | ---------------- | ------------------ | -------- |
      | Primary Label    | "Primary Label"    | Normal   |
      | Secondary Label  | "Secondary Label"  | Optional |
      | Arrow Position   | leading/trailing   | Optional |
      | Tooltip Text     | "Tooltip content"  | Optional |
      | Disabled State   | true/false         | Optional |
      | Soft-Disabled    | true/false         | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render menuitem with primary label only
      Given the menuitem has a primary label "Primary Label"
      When the menuitem is rendered
      Then the primary label should be visible
      And the menuitem should have proper ARIA attributes

    Scenario: Render menuitem with primary and secondary labels
      Given the menuitem has a primary label "Primary Label"
      And the menuitem has a secondary label "Secondary Label"
      When the menuitem is rendered
      Then both labels should be visible
      And the secondary label should be properly positioned

    Scenario: Render menuitem with leading icon controls
      Given the menuitem has a primary label
      And the menuitem has leading icon controls in slot="leading-controls"
      When the menuitem is rendered
      Then the leading icon should be visible before the label
      And the layout should be properly aligned

    Scenario: Render menuitem with trailing controls (icons/badges)
      Given the menuitem has a primary label
      And the menuitem has trailing controls in slot="trailing-controls"
      When the menuitem is rendered
      Then the trailing controls should be visible after the label
      And the layout should be properly aligned

    Scenario: Render menuitem with arrow indicator
      Given the menuitem has an arrow-position attribute
      When arrow-position is set to "leading"
      Then a leading arrow icon should be visible
      When arrow-position is set to "trailing"
      Then a trailing arrow icon should be visible

    Scenario: Render disabled menuitem
      Given the menuitem has disabled attribute set
      When the menuitem is rendered
      Then the menuitem should appear visually disabled
      And the menuitem should have aria-disabled="true"
      And the menuitem should not be focusable

    Scenario: Render soft-disabled menuitem
      Given the menuitem has soft-disabled attribute set
      When the menuitem is rendered
      Then the menuitem should appear visually disabled
      And the menuitem should have aria-disabled="true"
      But the menuitem should remain focusable

  Rule: ✅ Mouse Interactions

    Scenario: Click on normal menuitem
      Given the menuitem is in normal state
      When I click on the menuitem
      Then a click event should be triggered
      And the associated action should execute

    Scenario: Click on disabled menuitem
      Given the menuitem is disabled
      When I click on the menuitem
      Then no click event should be triggered
      And no action should execute

    Scenario: Click on soft-disabled menuitem
      Given the menuitem is soft-disabled
      When I click on the menuitem
      Then a click event should be triggered
      And the associated action should execute

    Scenario: Hover over menuitem with tooltip
      Given the menuitem has tooltip associated with it
      When I hover over the menuitem
      Then the tooltip should become visible
      And the tooltip should display the correct text

  Rule: ✅ Keyboard Interactions

    Scenario: Focus menuitem using Tab navigation
      Given the menuitem is rendered in a focusable context
      When I navigate using Tab key
      Then the menuitem should receive focus
      And the menuitem should be visually focused

    Scenario: Activate menuitem using Enter key
      Given the menuitem is focused
      When I press "Enter"
      Then a click event should be triggered on keydown
      And the associated action should execute

    Scenario: Activate menuitem using Space key
      Given the menuitem is focused
      When I press "Space" key
      Then a click event should be triggered on keyup
      And the associated action should execute

    Scenario: Disabled menuitem keyboard behavior
      Given the menuitem is disabled
      When I try to focus the menuitem using Tab
      Then the menuitem should be skipped in focus order
      When I try to activate with Enter or Space
      Then no events should be triggered

    Scenario: Soft-disabled menuitem keyboard behavior
      Given the menuitem is soft-disabled
      When I navigate using Tab key
      Then the menuitem should receive focus
      When I press "Enter" or "Space"
      Then events should be triggered normally
      And the associated action should execute

  Rule: ✅ ARIA and Accessibility

    Scenario: Default ARIA attributes
      Given the menuitem is rendered
      Then the menuitem should have role="menuitem"
      And the menuitem should have tabindex="0"
      And the menuitem should have variant="inset-rectangle"

    Scenario: Disabled state ARIA attributes
      Given the menuitem is disabled
      Then the menuitem should have aria-disabled="true"
      And the menuitem should not be in tab order

    Scenario: Soft-disabled state ARIA attributes
      Given the menuitem is soft-disabled
      Then the menuitem should have aria-disabled="true"
      But the menuitem should remain in tab order

    Scenario: Arrow indicator ARIA attributes
      Given the menuitem has an arrow position
      When the arrow indicates expandable content
      Then appropriate ARIA attributes should be set for submenus

  Rule: ✅ Content Slots and Layout

    Scenario: Leading controls slot
      Given the menuitem has content in slot="leading-controls"
      When the menuitem is rendered
      Then the leading controls should be positioned before the text
      And the layout should be properly aligned

    Scenario: Trailing controls slot
      Given the menuitem has content in slot="trailing-controls"
      When the menuitem is rendered
      Then the trailing controls should be positioned after the text
      And the layout should be properly aligned

    Scenario: Mixed content with icons and badges
      Given the menuitem has leading icons
      And the menuitem has trailing badges
      When the menuitem is rendered
      Then all elements should be properly positioned
      And the spacing should be consistent

  Rule: ✅ Event Handling

    Scenario: Click event propagation
      Given the menuitem is in a container
      When I click on the menuitem
      Then the click event should be properly dispatched
      And event details should be accessible

    Scenario: Keyboard event propagation
      Given the menuitem is focused
      When I press any key
      Then keydown events should be properly dispatched
      And keyup events should be properly dispatched
      And event details should be accessible

    Scenario: Focus and blur events
      Given the menuitem is rendered
      When the menuitem receives focus
      Then a focus event should be triggered
      When the menuitem loses focus
      Then a blur event should be triggered

  Rule: ✅ ScreenReader Accessibility

    Scenario: VoiceOver reads menuitem content
      Given the menuitem has primary and secondary labels
      When VoiceOver navigates to the menuitem
      Then VoiceOver should announce the role as "menuitem"
      And VoiceOver should read the primary label
      And VoiceOver should read the secondary label if present

    Scenario: VoiceOver announces disabled state
      Given the menuitem is disabled
      When VoiceOver navigates to the menuitem
      Then VoiceOver should announce "disabled" or "dimmed"

    Scenario: VoiceOver announces arrow indicators
      Given the menuitem has arrow indicators
      When VoiceOver navigates to the menuitem
      Then VoiceOver should announce expandable content if applicable

    Scenario: VoiceOver activates menuitem
      Given the menuitem is focused by VoiceOver
      When VoiceOver activates the menuitem
      Then the associated action should execute
      And appropriate feedback should be provided
