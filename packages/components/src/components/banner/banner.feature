Feature: Banner Accessibility, Appearance, and User Interaction

    Background:
        Given the banner component is mounted to the page
        And it has default variant="custom"

    Rule: Attributes

        Scenario: Banner sets default attributes
            Given the banner component is mounted
            Then the banner should have the "variant" attribute set to "custom"

    Rule: Rendering and Visual States

        Scenario: Banner accepts allowed variant values
            Given the variant is set to "success" or "warning" or "error" or "informational"
            When the banner is rendered
            Then the banner should display the appropriate icon and styling as expected

        Scenario: Banner renders custom content for custom variant
            Given the banner variant is "custom"
            When the banner is rendered
            Then no default leading icon should be displayed

        Scenario: Banner renders with label only
            Given the label is set to "System Update"
            And no secondary label is provided
            Then the banner should render the label
            And no secondary label should be visible

        Scenario: Banner renders with both label and secondary label
            Given the banner has label "Main Label"
            And the banner has secondary label "Supporting secondary label"
            When the banner is rendered
            Then both label and secondary label should be visible

        Scenario: Banner does not render secondary label without label
            Given the banner has no label attribute
            And the banner has secondary label "Some secondary label text"
            When the banner is rendered
            Then no label should be visible
            And no secondary label should be visible

        Scenario: Banner renders with constrained width and wrapping content
            Given the banner has a constrained width
            And the banner has long label and secondary label
            And the banner has trailing actions
            When the banner is rendered
            Then both title and subtitle should wrap to multiple lines
            And no content should overflow the banner boundaries
        # Note: This scenario is covered by visual regression tests

    Rule: Slot Functionality

        Scenario: Banner uses custom slots to override default content
            Given the banner provides custom content in the leading-icon, leading-text, and trailing-actions slots
            And the banner has a label and secondary label set via properties
            When the banner is rendered
            Then the custom icon should be displayed before the text content, overriding the variant-based icon
            And the custom text content should be displayed, overriding the label and secondary label properties
            And the custom actions should be displayed in place of the default trailing actions

        Scenario: Banner uses complete content slot override
            Given the banner overrides the content slot
            When the banner is rendered
            Then only the custom content should be displayed
            And all default banner structure (leading, content, trailing) should be overridden

        Scenario: Banner provides hybrid approach flexibility
            Given the banner uses properties for label and secondary label
            And the banner uses slots for leading-icon and trailing-actions
            When the banner is rendered
            Then both property-based and slot-based content should be displayed
            And the banner should display leading section with icon and text
            And the text content should contain label and secondary label from properties
            And the trailing section should contain custom action buttons

    Rule: Focus Management and Navigation

        Scenario: Focus management with trailing actions
            Given the banner has interactive trailing actions (buttons)
            And there is a focusable element before the banner
            When I focus on the element before the banner
            And I navigate using Tab key
            Then focus should move to the first trailing action
            When I press Tab again
            Then focus should move to the next trailing action
            When I press Tab again
            Then focus should move to the last trailing action
            When I press Tab again
            Then focus should move out of the banner to the element after it

        Scenario: Reverse focus navigation with Shift+Tab (start from outside)
            Given the banner has multiple interactive trailing actions (buttons)
            And there is a focusable element after the banner
            When I focus on the element after the banner
            And I press Shift+Tab
            Then focus should move to the last trailing action in the banner
            When I press Shift+Tab again
            Then focus should move to the previous trailing action
            When I press Shift+Tab again
            Then focus should move to the first trailing action
            When I press Shift+Tab again
            Then focus should move out of the banner to the element before it

        Scenario: Skip banner when no interactive content
            Given the banner has only text content (no buttons or interactive elements)
            And there are focusable elements before and after the banner
            When I focus on the element before the banner
            And I navigate using Tab key
            Then focus should skip the banner and move directly to the element after it
            And the banner itself should not receive focus

    Rule: Mouse Interactions

        Scenario: Click on trailing action buttons (interactive elements)
            Given the banner has trailing action buttons
            When I click on a trailing action button
            Then a click event should be triggered on the button
            And the button's action should execute
            And no additional banner events should be triggered

    Rule: Keyboard Interactions

        Scenario: User activates custom actions using keyboard
            Given the banner has custom action buttons via trailing-actions slot
            And a custom action button is focused
            When "Enter" or "Space" is pressed
            Then the custom action should be activated

    Rule: ARIA and Screen Reader Accessibility

        Scenario: Screen reader reads banner content
            Given the banner has label and secondary label
            When a screen reader navigates to the banner
            Then the screen reader should read the label content
            And the screen reader should read the secondary label content
            And the screen reader should read them in the correct order

        Scenario: Screen reader interacts with banner actions
            Given the banner has trailing action buttons
            When a screen reader navigates to the banner
            Then the screen reader should announce the banner content
            And the screen reader should allow navigation to each action button
            And should announce the purpose of each button
            When the screen reader activates a button
            Then the button's action should execute
            And appropriate feedback should be provided