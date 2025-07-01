# AI-Assisted
Feature: StepperItem Accessibility and User Interaction

  Background:
    Given the StepperItem component is rendered on the page
    And the stepperitem has role="listitem" or appropriate role for step navigation
    And the stepperitem is focusable with correct tabindex based on status
    And the stepperitem contains:
      | Property       | Value                              | State    |
      | -------------- | ---------------------------------- | -------- |
      | Label          | "Step Label"                       | Normal   |
      | Optional Label | "Optional"                         | Optional |
      | Step Number    | "1"                                | Optional |
      | Status         | completed/error/future/current     | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render stepperitem with label only
      Given the stepperitem has a label "Step Label"
      When the stepperitem is rendered
      Then the label should be visible

    Scenario: Render stepperitem with optional label
      Given the stepperitem has a label "Step Label"
      And the stepperitem has an optional label "Optional"
      When the stepperitem is rendered
      Then the optional label should be visible in parentheses

    Scenario: Render stepperitem with step number
      Given the stepperitem has a status "current" or "future-clickable" or "future-disabled"
      And the stepperitem has a step number "2"
      When the stepperitem is rendered
      Then the step number should be visible in the status container

    Scenario: Render stepperitem with completed status
      Given the stepperitem has status "completed"
      When the stepperitem is rendered
      Then a completed icon should be visible in the status container
      And the label should be visible

    Scenario: Render stepperitem with error status
      Given the stepperitem has status "error"
      And the stepperitem has an optional label "Error message"
      When the stepperitem is rendered
      Then an error icon should be visible in the status container
      And the optional label should display the error message (not in parentheses)

    Scenario: Render stepperitem with future/disabled status
      Given the stepperitem has status "future-disabled"
      When the stepperitem is rendered
      Then the stepperitem should not be focusable (tabindex="-1")
      And the label should be visible but visually dimmed

  Rule: ✅ Keyboard and Focus Management

    Scenario: Focus stepperitem using Tab navigation
      Given the stepperitem is rendered and focusable
      When I navigate using Tab key
      Then the stepperitem should receive focus if status is not future-disabled
      And the stepperitem should be visually focused

    Scenario: Skip future-disabled stepperitem in focus order
      Given the stepperitem has status "future-disabled"
      When I navigate using Tab key
      Then the stepperitem should be skipped in the focus order

  Rule: ✅ Mouse and Keyboard Interactions

    Scenario: Click on stepperitem
      Given the stepperitem is rendered and not future-disabled
      When I click on the stepperitem
      Then a click event should be triggered

    Scenario: Click on stepperitem using Enter key
      Given the stepperitem is focused and not future-disabled
      When I press "Enter"
      Then a click event should be triggered

    Scenario: Click on stepperitem using Space key
      Given the stepperitem is focused and not future-disabled
      When I press "Space"
      Then a click event should be triggered

    Scenario: Disabled/future stepperitem does not respond to click or keyboard
      Given the stepperitem has status "future-disabled"
      When I try to click or activate with keyboard
      Then no events should be triggered

  Rule: ✅ ARIA and Accessibility

    Scenario: Default ARIA attributes
      Given the stepperitem is rendered
      Then the stepperitem should have role="listitem" or appropriate role
      And the stepperitem should have correct tabindex based on status
      When status is "current"
      Then the stepperitem should have aria-current="step"

    Scenario: Optional label accessibility
      Given the stepperitem has an optional label
      When the stepperitem is rendered
      Then the optional label should be associated with the stepperitem for screen readers

    Scenario: Step number accessibility
      Given the stepperitem has a step number
      When the stepperitem is rendered
      Then the step number should be announced by screen readers

    Scenario: Error message accessibility
      Given the stepperitem has status "error" and an optional label
      When the stepperitem is rendered
      Then the error message should be announced by screen readers

  Rule: ✅ ScreenReader Accessibility

    Scenario: VoiceOver reads stepperitem content
      Given the stepperitem has label, optional label, and step number
      When VoiceOver navigates to the stepperitem
      Then VoiceOver should announce the role, label, step number, and optional label

    Scenario: VoiceOver announces completed and error status
      Given the stepperitem has status "completed" or "error"
      When VoiceOver navigates to the stepperitem
      Then VoiceOver should announce the status (e.g., "completed" or "error")
      And announce the icon as appropriate

    Scenario: VoiceOver skips future-disabled stepperitem
      Given the stepperitem has status "future-disabled"
      When VoiceOver navigates through the stepper
      Then the stepperitem should be skipped in the navigation order

    Scenario: VoiceOver announces active stepperitem
      Given the stepperitem has status "active"
      When VoiceOver navigates to the stepperitem
      Then VoiceOver should announce it as the current step

# End AI-Assisted