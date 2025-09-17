Feature: Banner Accessibility, Appearance, and User Interaction

    Background:
        Given the banner component is mounted to the page
        And it has default variant="custom"

    Rule: ✅ Attributes

        Scenario: Banner sets default attributes
            Given the banner component is mounted
            Then the banner should have the "variant" attribute set to "custom"

    Rule: ✅ Rendering and Visual States

        Scenario: Banner accepts allowed variant values
            Given the variant is set to "success" or "warning" or "error" or "informational"
            When the banner is rendered
            Then the banner should display the the appropriate icon and styling as expected

        Scenario: Banner renders custom content for custom variant
            Given the banner variant is "custom"
            When the banner is rendered
            Then no default leading icon should be displayed

        Scenario: Banner renders with title only
            Given the title is set to "System Update"
            And no subtitle is provided
            Then the banner should render the title
            And no subtitle should be visible

        Scenario: Banner renders with both title and subtitle
            Given the banner has title "Main Title"
            And the banner has subtitle "Supporting subtitle"
            When the banner is rendered
            Then both title and subtitle should be visible

        Scenario: Banner does not render subtitle without title
            Given the banner has no title attribute
            And the banner has subtitle "Some subtitle text"
            When the banner is rendered
            Then no title should be visible
            And no subtitle should be visible

        Scenario: Banner renders with short width and auto-shrinking content (no need to write e2e test, already covered in Visual tests)
            Given the banner has a short width
            And the banner has long title and subtitle
            And the banner has trailing actions
            When the banner is rendered
            Then both title and subtitle should wrap to multiple lines
            And no content should overflow the banner boundaries

    Rule: ✅ Slot Functionality

        Scenario: Banner uses custom slots to override default content
            Given the banner provides custom content in the leading-icon, leading-text, and trailing-actions slots
            And the banner has a title and subtitle set via properties
            When the banner is rendered
            Then the custom icon should be displayed before the text content, overriding the variant-based icon
            And the custom text content should be displayed, overriding the title and subtitle properties
            And the custom actions should be displayed in place of the default trailing actions

        Scenario: Banner uses complete content slot override
            Given the banner has overrides the content slot
            When the banner is rendered
            Then only the custom content should be displayed
            And all default banner structure (leading, content, trailing) should be overridden

        Scenario: Banner provides hybrid approach flexibility
            Given the banner uses properties for title and subtitle
            And the banner uses slots for leading-icon and trailing-actions
            When the banner is rendered
            Then both property-based and slot-based content should be displayed
            And the banner should display leading section with icon and text
            And the text content should contain title and subtitle from properties
            And the trailing section should contain custom action buttons

    Rule: ✅ Focus Management and Navigation

        Scenario: Focus management with trailing actions
            Given the banner has interactive trailing actions (buttons)
            When I navigate using Tab key
            Then focus should move to the first trailing action
            When I press Tab again
            Then focus should move to the next trailing action
            When I press Tab again
            Then focus should move out of the banner

        Scenario: Reverse focus navigation with Shift+Tab (start it from outside)
            Given the banner has multiple interactive trailing actions (buttons)
            When I press Shift+Tab
            Then focus should move to the previous trailing action
            When I press Shift+Tab again
            Then focus should move to the first trailing action
            When I press Shift+Tab again
            Then focus should move out of the banner

        Scenario: Skip banner when no interactive content
            Given the banner has only text content (no buttons or interactive elements)
            When I navigate using Tab key
            Then the banner should not receive focus

    Rule: ✅ Mouse Interactions

        Scenario: Click on trailing action buttons (interactive elements)
            Given the banner has trailing action buttons
            When I click on a trailing action button
            Then a click event should be triggered on the button
            And the button's action should execute
            And no additional banner events should be triggered

    Rule: ✅ Keyboard Interactions

        Scenario: User activates custom actions using keyboard
            Given the banner has custom action buttons via trailing-actions slot
            And a custom action button is focused
            When "Enter" or "Space" is pressed
            Then the custom action should be activated

    Rule: ✅ ARIA and Screen Reader Accessibility

        Scenario: Screen reader reads banner content
            Given the banner has title and subtitle
            When a screen reader navigates to the banner
            Then the screen reader should read the title content
            And the screen reader should read the subtitle content
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