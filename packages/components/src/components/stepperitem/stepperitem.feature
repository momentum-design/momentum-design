Feature: StepperItem Accessibility and User Interaction

  Background:
    Given the StepperItem component is rendered on the page
    And the stepperitem has role="listitem" or appropriate role for step navigation
    And the stepperitem is focusable with correct tabindex based on status
    And the stepperitem contains:
      | Property       | Value        | State    |
      | -------------- | ------------ | -------- |
      | label          | "Step Label" | Normal   |
      | help-text      | "Help"       | Optional |
      | step-number    | "1"          | Optional |
      | status         | current      | Optional |

  Rule: ✅ Rendering and Visual States

    Scenario: Render stepperitem with label-text only
      Given the stepperitem has a label-text "Step Label"
      When the stepperitem is rendered
      Then the label-text should be visible

    Scenario: Render stepperitem with help-text
      Given the stepperitem has a label-text "Step Label"
      And the stepperitem has a help-text "Help text"
      When the stepperitem is rendered
      Then the help-text should be visible

    Scenario: Render stepperitem with step-number
      Given the stepperitem has a status "not-started" or "error-incomplete"
      And the stepperitem has a step-number "2"
      When the stepperitem is rendered
      Then the step-number should be visible in the status container

    Scenario: Render stepperitem with completed status
      Given the stepperitem has status "completed"
      When the stepperitem is rendered
      Then a completed icon should be visible in the status container
      And the label-text should be visible

    Scenario: Render stepperitem with current or error-current status
      Given the stepperitem has status "error-current" or "current"
      And the stepperitem has a help-text
      When the stepperitem is rendered
      Then a pencil icon should be visible in the status container
      And the help-text should be visible
      And the color of help-text should be appropriate for the status

    Scenario: Render stepperitem as stacked variant
      Given the stepperitem is rendered as a stacked variant
      When the stepperitem is rendered
      Then the stepperitem should have the icon on top
      And the label-text should be visible below the icon
      And the help-text should be visible below the label-text
      And the help-text and the icon alignment should follow LTR/RTL.

    Scenario: Render stepperitem as inline variant
      Given the stepperitem is rendered as an inline variant
      When the stepperitem is rendered
      Then the stepperitem should have the icon on the left
      And the label-text should be visible to the right of the icon
      And the help-text should be visible below the label-text
      And the help-text and the icon alignment should follow LTR/RTL.

  Rule: ✅ Keyboard and Focus Management

    Scenario: Focus stepperitem using Tab navigation
      Given the stepperitem is rendered and focusable
      When I navigate using Tab key
      Then the stepperitem should receive focus
      And the stepperitem should be visually focused

  Rule: ✅ Mouse and Keyboard Interactions

    Scenario: Click on stepperitem
      Given the stepperitem is rendered
      When I click on the stepperitem
      Then a click event should be triggered

    Scenario: Click on stepperitem using Enter key
      Given the stepperitem is focused
      When I press "Enter"
      Then a click event should be triggered

    Scenario: Click on stepperitem using Space key
      Given the stepperitem is focused
      When I press "Space"
      Then a click event should be triggered

  Rule: ✅ ARIA and Accessibility

    Scenario: Default ARIA attributes
      Given the stepperitem is rendered
      Then the stepperitem should have role="listitem" or appropriate role
      And the stepperitem should have correct tabindex based on status

    Scenario: Having aria-current attribute
      Given the stepperitem has status "current" or "error-current"
      When the stepperitem is rendered
      Then the stepperitem should have aria-current="step"

    Scenario: help-text accessibility
      Given the stepperitem has a help-text
      When the stepperitem is rendered
      Then the help-text should be associated with the stepperitem for screen readers

    Scenario: Step number accessibility
      Given the stepperitem has a step number
      When the stepperitem is rendered
      Then the step number should be announced by screen readers

    Scenario: Error message accessibility
      Given the stepperitem has status "error" and a help-text
      When the stepperitem is rendered
      Then the error message should be announced by screen readers

  Rule: ✅ ScreenReader Accessibility

    Scenario: VoiceOver reads stepperitem content
      Given the stepperitem has label, help-text, and step number
      When VoiceOver navigates to the stepperitem
      Then VoiceOver should announce the role, label, step number, and help-text

    Scenario: VoiceOver announces completed and error status
      Given the stepperitem has status "completed" or "error"
      When VoiceOver navigates to the stepperitem
      Then VoiceOver should announce the status (e.g., "completed" or "error")
      And announce the icon as appropriate

    Scenario: VoiceOver announces active stepperitem
      Given the stepperitem has status "active"
      When VoiceOver navigates to the stepperitem
      Then VoiceOver should announce it as the current step
