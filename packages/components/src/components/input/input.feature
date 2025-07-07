Feature: Input Component
  As a user, I want the input component to provide robust form input functionality with validation, accessibility, and
  user-friendly interactions.

  Scenario: Input component renders with all attributes
    Given I use the input component
    Then it should render with all provided attributes such as id, placeholder, maxlength, minlength, readonly, required, and disabled

  Scenario: Input component with prefix text
    Given the input component is rendered with prefixText set
    Then the prefix text should be displayed before the input field
    And the prefix text should be truncated to a maximum of 10 characters
    And the prefix text should not be announced by screen readers
    And the input should use data-aria-label for accessible naming if provided

  Scenario: Input component with leading icon
    Given the input component is rendered with leadingIcon set
    Then the leading icon should be displayed before the input field

  Scenario: Input component with label
    Given the input component is rendered with a label
    Then the label should be displayed above the input field
    And the label should be associated with the input for accessibility
    And the label should be announced by screen readers

  Scenario: Input component with help text
    Given the input component is rendered with helpText set
    Then the help text should be displayed below the input field
    And the help text should be associated with the input for accessibility
    And the help text should be announced by screen readers if present

  Scenario: Input component with help text type
    Given the input component is rendered with helpText and helpTextType set
    Then the help text should be displayed below the input field
    And the help text type should determine the visual style and icon (e.g. error, warning, success)
    And the correct helper icon should be shown for each helpTextType
    And aria-invalid should be set to true when helpTextType is "error"
    And the help text and icon should be announced by screen readers if present

  Scenario: Input component clear button behavior
    Given the input component is rendered with the trailingButton attribute set to true
    And the input value is empty
    Then the clear button should not be visible
    When I type a value in the input
    Then the clear button should be visible
    When I click the clear button
    Then the input value should be cleared and the input should remain focused
    And the clear button should not be visible
    And the clear button should not be focusable when the input is readonly or disabled

  Scenario: Input component validation with custom error messages
    Given the input component is rendered with custom validation messages for required, minlength, and maxlength
    When I submit the form with an empty input
    Then the component should show the custom required error message
    When I enter a value shorter than minlength
    Then the component should show the custom minlength error message
    When I erase the input
    Then the component should show the custom required error message

  Scenario: Input component validation with native error messages
    Given the input component is rendered with native validation error messages and no custom error messages
    When I submit the form with an empty input
    Then the component should show the native required error message
    When I enter a value shorter than minlength
    Then the component should show the native minlength error message
    When I enter a value longer than maxlength
    Then the component should show the native maxlength error message

  Rule: ✅ Accessibility and Screen Reader Support

    Scenario: Input is accessible by keyboard
      Given the input component is rendered
      When I navigate to the input using the keyboard (Tab)
      Then the input should receive focus
      And the user can type and erase text using the keyboard
      And the clear button (if present) is reachable by keyboard
      And the input supports all standard keyboard interactions (Tab, Shift+Tab, Enter)

    Scenario: Input announces label and help text to screen readers
      Given the input component is rendered with a label and help text
      When a screen reader user focuses the input
      Then the input's label is announced
      And the help text is announced if present

    Scenario: Input announces validation and error states to screen readers
      Given the input component is rendered with a validation error
      When a screen reader user focuses the input
      Then the error message is announced
      And aria-invalid is set to true

    Scenario: Input clear button is accessible to screen readers
      Given the input component is rendered with the clear button visible
      When a screen reader user navigates to the clear button
      Then the clear button has an appropriate aria-label
      And activating the clear button clears the input and announces the change

    Scenario: Input prefix text is not announced by screen readers
      Given the input component is rendered with prefix text
      When a screen reader user focuses the input
      Then the prefix text is not announced
      And the input uses data-aria-label for accessible naming if provided

    Scenario: Input supports required and disabled states for accessibility
      Given the input component is rendered as required or disabled
      When a screen reader user focuses the input
      Then the required or disabled state is announced appropriately
