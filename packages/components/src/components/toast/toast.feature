Feature: Toast Accessibility and User Interaction

  Background:
    Given the toast component is mounted to the page
    And it has a close button
    And it has primary and secondary buttons
    And it has a link button
    And it has showMoreText and showLessText set to "Show more" and "Show less"
    And it is not focus-trapped

  Rule: ✅ Attributes

    Scenario: Toast sets default attributes
      Given the toast component is mounted
      Then the toast should have the "header-tag-name" attribute set to "h2"
      And the header text should be wrapped in an h2 element

    Scenario: Toast sets the header-text attribute
      Given the header-text is set to "Action Completed"
      Then the toast should have the "header-text" attribute set to "Action Completed"
      And the header should display "Action Completed"

    Scenario Outline: Toast accepts allowed variant values
      Given the variant is set to "<variant>"
      When the toast is rendered
      Then the toast should display the "<icon/slot content>" as appropriate

      Examples:
        | variant | icon/slot content |
        | success | icon              |
        | warning | icon              |
        | error   | icon              |
        | custom  | slot              |

    Scenario: Toast sets the aria-label attribute
      Given the aria-label is set to "Toast notification"
      Then the toast should have the "aria-label" attribute set to "Toast notification"

    Scenario: Toast sets the close-button-aria-label attribute
      Given the close-button-aria-label is set to "Dismiss notification"
      Then the close button should have the "aria-label" set to "Dismiss notification"

    Scenario: Toast sets the header-tag-name attribute
      Given the header-tag-name is set to "span"
      Then the toast should have the "header-tag-name" attribute set to "span"
      And the text should be wrapped in a span element

    Scenario: Toast sets the show-more-text and show-less-text attributes
      Given the show-more-text is set to "Expand details"
      And the show-less-text is set to "Collapse details"
      Then the toast should have the "show-more-text" attribute set to "Expand details"
      And the toast should have the "show-less-text" attribute set to "Collapse details"
      And the link button should display "Expand details" when collapsed
      And the link button should display "Collapse details" when expanded

  Rule: ✅ Rendering and Visual States

    Scenario: Toast renders only normal content
      Given the normal body text is "Your files are now available in the dashboard"
      Then the toast should render the normal body text
      And the link button should not be visible

    Scenario: Toast renders normal and detailed body content
      Given the normal body text is "Your files are now available in the dashboard"
      And the detailed body text is "This is detailed content."
      Then the toast should render the normal body text
      And the link button should be visible with showMoreText
      And the detailed body content should be hidden by default

  Rule: ✅ Mouse Interactions

    Scenario: User manually dismisses the toast
      Given the toast is visible
      When the close button is clicked
      Then the "close" event should be emitted

    Scenario: User expands toast body using mouse
      Given the toast is visible with long content and a link button with showMoreText
      When the link button is clicked
      Then the body should expand to reveal full content
      And the link button text should change to showLessText

    Scenario: User collapses toast body using mouse
      Given the toast is visible and expanded with a showLestText link button
      When the link button is clicked
      Then the body should collapse to show only the short content
      And the link button text should change back to showMoreText

  Rule: ✅ Keyboard Interactions

    Scenario Outline: User navigates toast using <direction> key
      Given the toast is visible and the focus is on the <start>
      When <key> is pressed
      Then the focus should move to <end>

      Examples: Forward tabbing (Tab)
        | direction | key | start            | end              |
        | forward   | Tab | close button     | tertiary button  |
        | forward   | Tab | tertiary button  | secondary button |
        | forward   | Tab | secondary button | primary button   |
        | forward   | Tab | primary button   | out of the toast |

      Examples: Reverse tabbing (Shift+Tab)
        | direction | key       | start            | end              |
        | backward  | Shift+Tab | primary button   | secondary button |
        | backward  | Shift+Tab | secondary button | tertiary button  |
        | backward  | Shift+Tab | tertiary button  | close button     |
        | backward  | Shift+Tab | close button     | out of the toast |

    Scenario: User closes toast with keyboard
      Given the toast is visible and the close button is focused
      When Enter or Space is pressed
      Then the "close" event should be emitted

    Scenario: User expands toast body with keyboard
      Given the toast is visible with long content and a "Show more" link button focused
      When Enter or Space is pressed
      Then the body should expand to show full content
      And the link button text should change to "Show less"
      And focus should remain on the link button

    Scenario: User collapses toast body with keyboard
      Given the toast is visible, expanded, and the "Show less" link button is focused
      When Enter or Space is pressed
      Then the body should collapse to show short content
      And the link button text should change back to "Show more"
      And focus should remain on the link button

  Rule: ✅ Accessibility and ARIA

    Scenario: Close button is accessible
      Given the toast is visible and the close button has aria-label "Dismiss notification"
      Then it should have the same aria-label
      And a screen reader should announce "Dismiss notification" when focused

  Rule: ✅ Styling

    Scenario: Toast has fixed width and adaptive height
      Given the toast is visible
      Then the width of the toast should be 21.25rem
      And the height should adapt to content length

    Scenario: Toast header truncates to two lines
      Given the toast is visible and has a long header
      Then it should be visually truncated to two lines
      And ellipsis applied if it overflows
      And it should not overflow the container
