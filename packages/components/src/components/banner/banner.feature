Feature: Banner Accessibility, Appearance, and User Interaction

    Background:
        Given the banner component is mounted to the page
        And it has default variant="custom"

    Rule: ✅ Attributes

        Scenario: Banner sets default attributes
            Given the banner component is mounted
            Then the banner should have the "variant" attribute set to "custom"

        Scenario Outline: Banner accepts allowed variant values
            Given the variant is set to "<variant>"
            When the banner is rendered
            Then the banner should display the appropriate "<visual_style>" and "<icon>" for the variant

            Examples:
                | variant       | visual_style | leading_icon |
                | custom        | custom       | none         |
                | informational | info         | info         |
                | warning       | warning      | warning      |
                | error         | error        | error        |
                | success       | success      | success      |

    Rule: ✅ Rendering and Visual States

        Scenario: Banner renders with title only
            Given the title is set to "System Update"
            And no subtitle is provided
            Then the banner should render the title
            And no subtitle should be visible

        Scenario: Banner renders with subtitle only
            Given the subtitle is set to "Please check your settings"
            And no title is provided
            Then the banner should render the subtitle
            And no title should be visible

        Scenario: Banner renders with both title and subtitle
            Given the banner has title "Main Title"
            And the banner has subtitle "Supporting subtitle"
            When the banner is rendered
            Then both title and subtitle should be visible

        Scenario: Banner renders with long title that wraps
            Given the banner has a very long title "This is an extremely long title that should wrap to multiple lines when the banner has a constrained width"
            And the banner has a fixed width constraint
            When the banner is rendered
            Then the title text should wrap to multiple lines
            And the text should remain readable and properly aligned
            And the layout should accommodate the wrapped text

        Scenario: Banner renders with long subtitle that wraps
            Given the banner has title "Short Title"
            And the banner has a very long subtitle "This is an extremely long subtitle that contains a lot of descriptive text and should wrap to multiple lines when the banner has a constrained width"
            And the banner has a fixed width constraint
            When the banner is rendered
            Then the subtitle text should wrap to multiple lines
            And the text hierarchy should be maintained
            And the wrapped subtitle should not interfere with other elements

        Scenario: Banner renders with both long title and subtitle
            Given the banner has a very long title "This is an extremely long title that should wrap to multiple lines"
            And the banner has a very long subtitle "This is also a very long subtitle with extensive descriptive text that should wrap appropriately"
            And the banner has a fixed width constraint
            When the banner is rendered
            Then both title and subtitle should wrap to multiple lines
            And the text hierarchy should remain clear
            And proper spacing should be maintained between wrapped lines

        Scenario: Banner renders custom content for custom variant
            Given the banner variant is "custom"
            When the banner is rendered
            Then no default leading icon should be displayed

        Scenario: Banner renders with short width and auto-shrinking content
            Given the banner has a short width
            And the banner has title and subtitle
            And the banner has trailing actions
            When the banner is rendered
            Then all content should be visible within the boundaries
            And text should wrap as needed
            And no content should overflow the banner boundaries
            And the layout should remain functional
            And action buttons should remain accessible

    Rule: ✅ Slot Functionality

        Scenario: Banner uses custom leading-icon slot
            Given the banner has custom content in the leading-icon slot
            When the banner is rendered
            Then the custom icon should be displayed
            And the variant-based icon should be overridden
            And the icon should be positioned before the text content
            And the slot should not interfere with text layout
            And proper spacing should be maintained

        Scenario: Banner uses custom leading-title slot
            Given the banner has overrides the leading-title slot
            When the banner is rendered
            Then the custom title content should be displayed
            And the title property should be overridden

        Scenario: Banner uses custom leading-subtitle slot
            Given the banner has overrides the leading-subtitle slot
            When the banner is rendered
            Then the custom subtitle content should be displayed
            And the subtitle property should be overridden

        Scenario: Banner uses custom trailing-actions slot
            Given the banner has overrides the trailing-actions slot
            When the banner is rendered
            Then the custom actions should be displayed
            And all buttons should be positioned after the text content
            And spacing between buttons should be consistent
            And the slot should align properly with text content

        Scenario: Banner uses complete content slot override
            Given the banner has overrides the content slot
            When the banner is rendered
            Then only the custom content should be displayed
            And all default banner structure (leading, content, trailing) should be overridden
            And the content slot provides complete layout control
            And CSS parts should still be available for styling

        Scenario: Banner provides hybrid approach flexibility
            Given the banner uses properties for title and subtitle
            And the banner uses slots for leading-icon and trailing-actions
            When the banner is rendered
            Then both property-based and slot-based content should be displayed
            And the component should maintain proper accessibility
            And the banner should display leading section with icon
            And the content section should contain title and subtitle text
            And the trailing section should contain custom action buttons
            And all sections should be properly separated
            And all elements should be properly positioned
            And the hierarchy should be visually clear
            And spacing should follow design guidelines

    Rule: ✅ Focus Management and Navigation

        Scenario: Focus management with trailing actions
            Given the banner has interactive trailing actions (buttons)
            When I navigate using Tab key
            Then focus should move to the first trailing action
            When I press Tab again
            Then focus should move to the next trailing action
            When I press Tab again
            Then focus should move out of the banner

        Scenario: Reverse focus navigation with Shift+Tab
            Given the banner has multiple interactive trailing actions (buttons)
            And focus is on the last trailing action
            When I press Shift+Tab
            Then focus should move to the previous trailing action
            When I press Shift+Tab again
            Then focus should move to the first trailing action
            When I press Shift+Tab again
            Then focus should move out of the banner (backwards)

        Scenario: Skip banner when no interactive content
            Given the banner has only text content (no buttons or interactive elements)
            When I navigate using Tab key
            Then the banner should not receive focus
            And focus should move to the next focusable element on the page

    Rule: ✅ Mouse Interactions

        Scenario: Click on banner content area without actions
            Given the banner has only text content (no interactive elements)
            When I click on the banner text area
            Then no specific action should be triggered
            And the banner should not capture the click event

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

        Scenario: Banner action buttons have proper accessibility
            Given the banner has custom action buttons via trailing-actions slot
            Then the action buttons should have proper aria-labels
            And buttons should be keyboard accessible
            And users are responsible for proper accessibility implementation

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