Feature: Slider

  Background:
    Given a slider (single-value or range) is rendered with a label
    And the slider has a defined minimum and maximum value
    And if range is false, there is a thumb to drag that lets the value change continuously
    And if range is true, there are two thumbs to drag, one for the start value and one for the end value, that let the values change continuously

  # Single-value slider user stories
  # As a user I want to select a single value using a slider so that I can easily choose a value within a defined range
  Scenario: User selects a value using the slider
    Given the slider is displayed with min and max values defined
    When the user drags the slider thumb or uses keyboard navigation
    Then the selected value should update to match the thumb's position
    And the current value should be displayed in a tooltip using value-label attribute

  Scenario: Slider with 2 icons
    Given a slider with leading-icon and trailing-icon defined
    When the slider is rendered
    Then both icons should be visible on the slider track
    And the leading-icon should be positioned at the start of the track
    And the trailing-icon should be positioned at the end of the track

  Scenario: Slider with timeline values
    Given a slider with label-start and label-end defining the start and end of timeline
    Then the label-start should be positioned below the start of the slider track
    And the label-end should be positioned below the end of the slider track
    And value will represent the timeline value in seconds
    And the tooltip will have the corresponding timeline value in "xx:xx" format

  Scenario Outline: slider Thumb Visual States
    Given a slider thumb
    When the thumb is in the "<state>" state
    Then its visual appearance should clearly indicate the "<state>" state

    Examples:
      | state   |
      | rest    |
      | hover   |
      | pressed |
      | focused |

  Scenario: Slider Disabled State
    Given a slider
    When the slider is disabled
    Then the slider thumb should be unresponsive to any user interaction
    And its visual appearance should indicate a disabled state
    And the associated number input should be uneditable

  Scenario: Slider Soft-disabled State
    Given a slider
    When the slider is soft-disabled
    Then the slider thumb should be visually distinct to indicate a soft-disabled state
    And the associated number input should be uneditable

  Scenario: Slider with defined Step
    Given a slider with min=0, max=100 and step=20
    When the user drags the slider thumb or uses keyboard navigation
    Then the selected value should snap to the nearest tick mark (multiple of 20)
    And the value should be displayed in a tooltip
    And the slider should show 5 tick marks spread uniformly around the slider component

  Scenario: Slider without tooltip
    Given a slider with hide-tooltip set to true
    When the user hovers or focuses on the slider thumb
    Then the tooltip should not be visible

  Scenario: Accessibility related attributes
    Given a slider with min and max value defined to 0 and 100
    When the value is set to 35
    Then aria-valuemin will be set to 0
    And aria-valuemax will be set to 100
    And aria-valuenow will be set to 35

  Scenario Outline: Continuous Slider Keyboard Navigation
    Given the continuous slider is focused
    When the user presses the "<key>" key
    Then the slider value should "<action>"

    Examples:
      | key        | action               |
      | ArrowRight | increase by one step |
      | ArrowUp    | increase by one step |
      | ArrowLeft  | decrease by one step |
      | ArrowDown  | decrease by one step |
      | Home       | set to minimum value |
      | End        | set to maximum value |

  Scenario Outline: Stepped Slider Keyboard Navigation
    Given the stepped slider is focused
    And the step value is 5
    When the user presses the "<key>" key
    Then the slider value should "<action>"

    Examples:
      | key        | action               |
      | ArrowRight | increase by 5 steps  |
      | ArrowUp    | increase by 5 steps  |
      | ArrowLeft  | decrease by 5 steps  |
      | ArrowDown  | decrease by 5 steps  |
      | Home       | set to minimum value |
      | End        | set to maximum value |

  Scenario: Step value is 5, user sets an even number
    Given a slider with min=0, max=100, step=5
    When the user sets the value to an even number (e.g., 42)
    Then the slider should snap the value to the nearest valid step (i.e. 40)
    And the thumb position should reflect the snapped value

  Scenario: User provides a value out of range
    Given a slider with min=0, max=100
    When the user sets the value to 120 (greater than max)
    Then the slider should set the value to the maximum (100)
    And the thumb should be positioned at the end of the track
    When the user sets the value to -10 (less than min)
    Then the slider should set the value to the minimum (0)
    And the thumb should be positioned at the start of the track

  Scenario: User provides a non-numeric value (NaN or other)
    Given a slider with min=0, max=100
    When the user sets the value to NaN or a non-numeric input
    Then the slider should not update the value
    And the thumb should remain at its default valid position
    And the component should ignore the invalid input

  Scenario: Screen Reader Interaction with Slider
    Given a user is navigating to the slider component using a screen reader
    When the slider receives focus
    Then the screen reader should announce the slider's label, current value, and range
    And the screen reader should read out "Slider, [label], [current value], minimum [min value], maximum [max value]"
    When the user changes the slider value using keyboard navigation
    Then the screen reader should announce the updated value each time it changes

  # Range slider user stories
  # As a user I want to select a range of values using a slider with two thumbs so that I can easily choose a start and end value within a defined range
  Scenario: User selects a range using the slider
    Given the slider is displayed with min and max values defined and range is set to true
    When the user drags either slider thumb or uses keyboard navigation (using tab to focus the thumb)
    Then the selected start and end values should update to match the thumbs' positions
    And the current start and end values should be displayed in tooltips using value-label-start and value-label-end attributes

  Scenario: Slider with 2 icons in range mode
    Given a range slider with leading-icon and trailing-icon defined
    When the slider is rendered
    Then both icons should be visible on the slider track
    And the leading-icon should be positioned at the start of the track
    And the trailing-icon should be positioned at the end of the track

  Scenario: Slider with timeline values in range mode
    Given a range slider with label-start and label-end defining the start and end of timeline
    Then the label-start should be positioned below the start of the slider track
    And the label-end should be positioned below the end of the slider track
    And value-start and value-end will represent the timeline values in seconds
    And the tooltips will have the corresponding timeline values in "xx:xx" format

  Scenario Outline: Slider Thumb Visual States in range mode
    Given a range slider thumb <whichThumb>
    When the thumb is in the "<state>" state
    Then its visual appearance should clearly indicate the "<state>" state

    Examples:
      | whichThumb | state   |
      | start      | rest    |
      | start      | hover   |
      | start      | pressed |
      | start      | focused |
      | end        | rest    |
      | end        | hover   |
      | end        | pressed |
      | end        | focused |

  Scenario: Range Slider Disabled State
    Given a range slider
    When the slider is disabled
    Then both slider thumbs should be unresponsive to any user interaction
    And their visual appearance should indicate a disabled state
    And the associated number inputs should be uneditable

  Scenario: Range Slider Soft-disabled State
    Given a range slider
    When the slider is soft-disabled
    Then both slider thumbs should be visually distinct to indicate a soft-disabled state
    And the associated number inputs should be uneditable

  Scenario: Range Slider with defined Step
    Given a range slider with min=0, max=100, step=20, and range is set to true
    When the user drags either slider thumb or uses keyboard navigation
    Then the selected start and end values should snap to the nearest tick mark (multiple of 20)
    And the values should be displayed in tooltips
    And the slider should show 5 tick marks spread uniformly around the slider component

  Scenario: Range slider with end thumb meeting the start thumb
    Given a range slider with min=0, max=100, step=10, value-start=50, and value-end=60
    When the user drags the end thumb to the left
    Then the end value should update to match the new position and have value-end=50
    And the start value should not change
    And dragging the end thumb anymore to the left will not change value-end

  Scenario: Range slider with start thumb meeting the end thumb
    Given a range slider with min=0, max=100, step=10, value-start=50, and value-end=60
    When the user drags the start thumb to the right
    Then the start value should update to match the new position and have value-start=60
    And the end value should not change
    And dragging the start thumb anymore to the right will not change value-start

  Scenario: Accessibility related attributes for range slider
    Given a range slider with min and max value defined to 0 and 100
    When the start value is set to 20 and end value is set to 80
    Then aria-valuemin will be set to 0 for both thumbs
    And aria-valuemax will be set to 100 for both thumbs
    And aria-valuenow will be set to 20 for the start thumb and 80 for the end thumb
    And aria-label-start and aria-label-end will be set if provided
    And aria-valuetext-start and aria-valuetext-end will be set if provided

  Scenario Outline: Range Slider Keyboard Navigation
    Given the range slider's <whichThumb> thumb is focused
    When the user presses the "<key>" key
    Then the <whichThumb> value should "<action>"

    Examples:
      | whichThumb | key        | action               |
      | start      | ArrowRight | increase by one step |
      | start      | ArrowUp    | increase by one step |
      | start      | ArrowLeft  | decrease by one step |
      | start      | ArrowDown  | decrease by one step |
      | start      | Home       | set to minimum value |
      | start      | End        | set to end value     |
      | end        | ArrowRight | increase by one step |
      | end        | ArrowUp    | increase by one step |
      | end        | ArrowLeft  | decrease by one step |
      | end        | ArrowDown  | decrease by one step |
      | end        | Home       | set to start value   |
      | end        | End        | set to maximum value |

  Scenario: Screen Reader Interaction with Range Slider
    Given a user is navigating to the range slider component using a screen reader
    When the slider receives focus
    Then the screen reader should announce the slider's label, current start and end values, and range
    And the screen reader should read out "Slider, [label], [start value], [end value], minimum [min value], maximum [max value]"
    When the user changes either slider value using keyboard navigation
    Then the screen reader should announce the updated value each time it changes
