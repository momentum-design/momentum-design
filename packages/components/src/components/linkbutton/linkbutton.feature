Feature: LinkButton Accessibility and User Interaction

    Background:
        Given the LinkButton component is rendered on the page
        And the linkbutton has role="button"
        And the linkbutton is focusable with tabindex="0"
        And the linkbutton has default size="large"
        And the linkbutton contains:
            | Property         | Value                | State    |
            | ---------------- | -------------------- | -------- |
            | Children         | "LinkButton"         | Normal   |
            | Icon Name        | "icon-name"          | Optional |
            | Inline           | true/false           | Optional |
            | Inverted         | true/false           | Optional |
            | Disabled         | true/false           | Optional |
            | Active           | true/false           | Optional |
            | Autofocus        | true/false           | Optional |
            | aria-label       | "Accessible label"   | Optional |
            | ariaStateKey     | "state-key"          | Optional |

    Rule: ✅ Rendering and Visual States

        Scenario: Render linkbutton with children slot only
            Given the linkbutton has children slot content "LinkButton"
            When the linkbutton is rendered
            Then the children slot content should be visible

        Scenario: Render linkbutton with icon-name attribute
            Given the linkbutton has icon-name set to "icon-name"
            When the linkbutton is rendered
            Then the icon should be rendered with the name "icon-name"

        Scenario: Render linkbutton with different sizes
            Given the linkbutton has children slot content "LinkButton"
            And the linkbutton has icon-name set
            When the linkbutton size is set to "small"
            Then the icon should have the small size
            When the linkbutton size is set to "midsize"
            Then the icon should have the midsize size
            When the linkbutton size is set to "large"
            Then the icon should have the large size

        Scenario: Render linkbutton with inline and block layout
            Given the linkbutton has inline attribute set to true
            When the linkbutton is rendered
            Then the linkbutton should appear inline with surrounding content
            When the linkbutton does not have inline attribute
            Then the linkbutton should be block-level

        Scenario: Render linkbutton with inverted color
            Given the linkbutton has inverted attribute set to true
            When the linkbutton is rendered
            Then the linkbutton should use the inverted color scheme

        Scenario: Render disabled linkbutton
            Given the linkbutton has disabled attribute set
            When the linkbutton is rendered
            Then the linkbutton should appear visually disabled
            And the linkbutton should have aria-disabled="true"
            And the linkbutton should not be focusable

        Scenario: Render linkbutton with active state
            Given the linkbutton has active attribute set to true
            When the linkbutton is rendered
            Then the linkbutton should have the active visual state

        Scenario: Render linkbutton with autofocus
            Given the linkbutton has autofocus attribute set to true
            When the linkbutton is rendered
            Then the linkbutton should receive focus automatically

    Rule: ✅ Mouse Interactions

        Scenario: Click on normal linkbutton
            Given the linkbutton is in normal state
            When I click on the linkbutton
            Then a click event should be triggered
            And the associated action should execute

        Scenario: Click on disabled linkbutton
            Given the linkbutton is disabled
            When I click on the linkbutton
            Then no click event should be triggered
            And no action should execute

    Rule: ✅ Keyboard Interactions

        Scenario: Focus and blur events
            Given the linkbutton is rendered
            When the linkbutton receives focus
            Then a focus event should be triggered
            When the linkbutton loses focus
            Then a blur event should be triggered

        Scenario: Focus linkbutton using Tab navigation
            Given the linkbutton is rendered in a focusable context
            When I navigate using Tab key
            Then the linkbutton should receive focus
            And the linkbutton should be visually focused

        Scenario: Activate linkbutton using Enter key
            Given the linkbutton is focused
            When I press "Enter"
            Then a click event should be triggered on keydown
            And the associated action should execute

        Scenario: Activate linkbutton using Space key
            Given the linkbutton is focused
            When I press "Space" key
            Then a click event should be triggered on keyup
            And the associated action should execute

        Scenario: Disabled linkbutton keyboard behavior
            Given the linkbutton is disabled
            When I try to focus the linkbutton using Tab
            Then the linkbutton should be skipped in focus order
            When I try to activate with Enter or Space
            Then no events should be triggered

    Rule: ✅ ARIA and Accessibility

        Scenario: Default ARIA attributes
            Given the linkbutton is rendered
            Then the linkbutton should have role="button"
            And the linkbutton should have tabindex="0"
            And the linkbutton should have size="large"

        Scenario: Disabled state ARIA attributes
            Given the linkbutton is disabled
            Then the linkbutton should have aria-disabled="true"
            And the linkbutton should not be in tab order

        Scenario: Render linkbutton with aria-label
            Given the linkbutton has aria-label set to "Accessible label"
            When the linkbutton is rendered
            Then the linkbutton should have aria-label="Accessible label"

        Scenario: Render linkbutton with ariaStateKey
            Given the linkbutton has ariaStateKey set to "state-key"
            When the linkbutton is rendered
            Then the linkbutton should have ariaStateKey="state-key"

    Rule: ✅ ScreenReader Accessibility

        Scenario: VoiceOver reads linkbutton content
            Given the linkbutton has children slot content "LinkButton"
            When VoiceOver navigates to the linkbutton
            Then VoiceOver should announce the role as "button"
            And VoiceOver should read the children slot content

        Scenario: VoiceOver announces disabled state
            Given the linkbutton is disabled
            When VoiceOver navigates to the linkbutton
            Then VoiceOver should announce "disabled" or "dimmed"

        Scenario: VoiceOver activates linkbutton
            Given the linkbutton is focused by VoiceOver
            When VoiceOver activates the linkbutton
            Then the associated action should execute
            And appropriate feedback should be provided
