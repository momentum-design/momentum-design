Feature: Toast Accessibility and User Interaction

    Background:
        Given I am on a page with the toast component
        And the toast component has a close button

    Rule: ✅ Attributes

        Scenario: Toast sets default attributes
            Given the toast component is mounted to the page
            Then the toast should have the "header-tag-name" attribute set to "h2"
            And the "variant" attribute should not be present
            And the "aria-label" attribute should not be present

        Scenario: Toast sets the header-text attribute
            Given the toast component is mounted to the page
            When I set the header-text to "Action Completed"
            Then the toast should have the "header-text" attribute set to "Action Completed"

        Scenario: Toast accepts allowed variant values
            Given the toast component is mounted to the page
            When I set the variant to "success"
            Then the toast should have the "variant" attribute set to "success"
            When I set the variant to "warning"
            Then the toast should have the "variant" attribute set to "warning"
            When I set the variant to "error"
            Then the toast should have the "variant" attribute set to "error"

        Scenario: Toast sets the aria-label attribute when provided
            Given the toast component is mounted to the page
            When I set the aria-label to "Toast notification"
            Then the toast should have the "aria-label" attribute set to "Toast notification"

        Scenario: Toast sets the close-button-aria-label attribute when provided
            Given the toast component is mounted to the page
            When I set the close button aria-label to "Dismiss notification"
            Then the close button should have the "aria-label" attribute set to "Dismiss notification"

        Scenario: Toast sets the header-tag-name attribute when provided
            Given the toast component is mounted to the page
            When I set the header tag name to "h3"
            Then the toast should have the "header-tag-name" attribute set to "h3"

    Rule: ✅ Rendering and Visual States

        Scenario: Toast emits "shown" event when displayed
            Given the toast component is mounted to the page
            When the toast becomes visible
            Then the "shown" event should be emitted

        Scenario: Toast renders custom content in content-prefix slot for custom variant
            Given the toast component has the variant set to "custom"
            And I provide custom content (icon, avatar, or spinner) in the content-prefix slot
            Then the toast should render the provided content in the content-prefix slot

        Scenario: Toast sets normal and detailed body content
            Given I provide normal body text "Your files are now available in the dashboard"
            And I provide detailed body text "This is detailed content."
            Then the toast should render the normal body text
            And the detailed body text should be hidden by default

        Scenario: Toast renders custom action buttons
            Given I provide custom action buttons in the toast
            Then the toast should render the provided buttons

    Rule: ✅ Mouse Interactions

        Scenario: User manually dismisses a toast using the mouse
            Given the toast component is visible
            When I click the close button
            Then the "onclose" event should be emitted

        Scenario: User expands toast body using the mouse
            Given the toast body has long content
            And the toast displays a "Show more" button
            When I click the "Show more" button
            Then the body should expand to reveal the full content
            And the "Show more" button should change to "Show less"

        Scenario: User collapses expanded toast body using the mouse
            Given the toast body is expanded
            And the toast displays a "Show less" button
            When I click the "Show less" button
            Then the body should collapse to show only the short content
            And the button should change back to "Show more"

        Scenario: User activates custom action button using the mouse
            Given the toast is visible and has a custom action button
            When I click the custom action button
            Then the corresponding action event should be emitted

        Scenario: User activates custom action link using the mouse
            Given the toast is visible and has a custom action link
            When I click the custom action link
            Then the link should be followed
            And the corresponding action event should be emitted if applicable

    Rule: ✅ Keyboard Interactions

        Scenario: User navigates through toast using Tab and Shift+Tab
            Given the toast component is visible
            When I press the Tab key
            Then the focus should move to the close button
            When I press Shift+Tab
            Then the focus should move to the previous interactive element

        Scenario: User activates close button using keyboard
            Given the toast component is visible
            When I press Tab to focus on the close button
            And I press Enter or Space
            Then the "onclose" event should be emitted

        Scenario: User expands toast body using keyboard
            Given the toast body has long content
            And the toast displays a "Show more" button
            When I press Tab to focus on the "Show more" button
            And I press Enter or Space
            Then the body should expand to reveal the full content
            And the button should change to "Show less"

        Scenario: User collapses expanded toast body using keyboard
            Given the toast body is expanded
            And the toast displays a "Show less" button
            When I press Tab to focus on the "Show less" button
            And I press Enter or Space
            Then the body should collapse to show only the short content
            And the button should change back to "Show more"

        Scenario: User activates custom action button using keyboard
            Given the toast is visible and has a custom action button
            When I press Tab to focus on the custom action button
            And I press Enter or Space
            Then the corresponding action event should be emitted

        Scenario: User activates custom action link using keyboard
            Given the toast is visible and has a custom action link
            When I press Tab to focus on the custom action link
            And I press Enter or Space
            Then the link should be followed
            And the corresponding action event should be emitted if applicable

    Rule: ✅ Accessibility and ARIA

        Scenario: Screen reader announces aria-label when header is absent
            Given the toast component is visible
            And it has no header
            And the aria-label is "Upload successful"
            Then the screen reader should announce "Upload successful"

        Scenario: Close button has accessible label
            Given the toast component is visible
            And the close button has aria-label "Dismiss notification"
            Then the close button should have aria-label "Dismiss notification"
            And a screen reader should announce "Dismiss notification" when the close button is focused

    Rule: ✅ Styling

        Scenario: Toast has fixed width
            Given the toast is visible
            Then the width of the toast should be 21.25rem
            And the height should adapt based on the content

        Scenario: Toast header truncates to 2 lines
            Given the toast is visible and has a long header
            Then the header text should be visually truncated to 2 lines
