Feature: Popover Component

  Rule: Default Behavior

    Scenario: Toggle popover on trigger element click (mouse)
      Given a trigger element such as a button,
      When the user clicks on the button,
      Then the popover should become visible if it was hidden,
      And the popover should become hidden if it was already visible.

    Scenario: Toggle popover on trigger element activation (keyboard)
      Given a trigger element is focused,
      When the user presses the **Space** or **Enter** key,
      Then the popover should become visible if it was hidden,
      And the popover should become hidden if it was already visible.

    Scenario: Initial visibility
      Given a popover component, which is hidden by default,
      When the `visible` attribute is set to `true`,
      Then the popover should be visible (if closed).
      When the `visible` attribute is set to `false,
      Then the popover should be hidden (if opened).

  Rule: Attributes

    Scenario: Role attribute
      Given a popover component,
      Then its default role should be set to `dialog`,
      And the role can be customized using the `role` attribute.

    Scenario: Placement attribute
      Given a popover component,
      Then it should be placed below the trigger element by default,
      And the placement can be modified using the `placement` attribute to top, left, right, bottom, etc.

    Scenario: Disable Flip attribute
      Given a popover component which is visible,
      When the `disable-flip` attribute is set to `false`,
      Then the floating popover should change the placement based on the availability of viewport.

    Scenario: Display arrow
      Given a popover component,
      When the `show-arrow` attribute is set to `true`,
      Then an arrow should be displayed connecting the popover visually to its trigger.
      When the `show-arrow` attribute is set to `false`,
      Then no arrow should be displayed connecting the popover visually to its trigger.

    Scenario: Hide on outside click
      Given a popover component,
      When the `hide-on-outside-click` attribute is set to `true`,
      And the user clicks outside of the popover,
      Then the popover should close.

    Scenario: Backdrop attribute with hide on outside click
      Given two popover components with two trigger buttons mounted,
      And the first popover component has both `backdrop` and `hide-on-outside-click` set to `true`.
      And the first popover is opened.
      When the user clicks on the second popover's trigger once.
      Then the first popover should get closed.
      And the second popover should not open.
      When the user clicks on second popover's trigger again.
      Then the second popover should open.

    Scenario: Hide on blur (focus out)
      Given the `hide-on-blur` attribute is set to `true`,
      When the user shifts focus away from the popover,
      Then the popover should close.

    Scenario: Hide on escape (keyboard)
      Given the `hide-on-escape` attribute is set to `true`,
      When the user press **Escape** key on the popover,
      Then the popover should close.

    Scenario: Hide on escape (keyboard) inside a dialog
      Given the `hide-on-escape` attribute is set to `true`,
      And the `propagate-event-on-escape` attribute is set to `false`,
      When the popover is open inside a dialog,
      When the user press **Escape** key on the popover,
      Then the popover should close,
      And the dialog should remain open.

    Scenario: Focus back to trigger element
      Given the `focus-back-to-trigger` attribute is set to `true`.
      When the open popover gets closed,
      Then the trigger element should be focused.

    Scenario: Focus trap inside popover
      Given the popover contains interactive content,
      When the `focus-trap` attribute is set to `true`,
      Then the user should not be able to move focus outside of the popover until it is closed.

    Scenario: Prevent outside scroll
      Given the `prevent-scroll` attribute is set,
      When the popover is open,
      Then scrolling the background page should be disabled.

    Scenario: Close button inside popover
      Given the `close-button` attribute is set,
      Then an "X" icon button should appear inside the popover on top right corner.
      When the user clicks the close button,
      Then the popover should close.
      And the close button can have an accessible label via `close-button-aria-label`.

  Rule: Accessibility

    Scenario: Default accessibility attributes
      Given a popover component,
      Then it should have a default role of `dialog`.
      And the `aria-modal` attribute should be set to `true`
      And it can support `aria-label`, `aria-labelledby`, and `aria-describedby`.
      When the popover is open,
      Then the trigger should have `aria-expanded="true"`.
      When the popover is closed,
      Then the trigger should have `aria-expanded="false"`.

    Scenario: Accessibility on interactive popover
      Given a popover component
      When the popover has `interactive` attribute set to `true`,
      Then the trigger should have `aria-haspopup` set to `dialog` (by default),
      And the user can override `aria-haspopup` if needed.

    Scenario: Popover with disabled aria expanded
      Given a popover component
      When the `disable-aria-expanded` attribute is set to `true`
      Then the `aria-expanded` attribute should not be removed.

  Rule: Accessibility with screen readers

    Scenario: Announcing popover content
      Given a popover component is closed,
      When the popover trigger element is focused using screen reader
      Then the screen reader should announce as a button which has an action.
      When the trigger element is clicked,
      Then the popover should open,
      And screen readers should announce the text content inside the popover.

    Scenario: Navigation inside popover content
      Given a popover component with list items inside it.
      When the popover trigger element is activated using screen reader,
      Then the popover should open and screen reader focus moves to the 1st list item.
      And screen readers should read the text of first list item.
      When the user navigates to next item with **Tab** key,
      Then screen readers should read the text of the second list item.
      When the user press **Escape** key then popover should get closed.

  Rule: Styling

    Scenario: Color attribute
      Given a popover component,
      Then its default `color` should be set to `tonal`,
      And the `color` can be updated to `contrast` with the `color` attribute.

    Scenario: Offset attribute
      Given a popover component,
      Then the distance between the trigger element and floating element should be set to `4` by default,
      And the `offset` attribute can be used to adjust the distance.

    Scenario: Size attribute
      Given a popover component,
      Then it's default size is set to `false`.
      And the `size` attribute can be set to `true` to change the popover size to keep it in view when scrolling.

    Scenario: zIndex attribute
      Given a popover component,
      Then it's default z-index is set to `1000`.
      And the `z-index` attribute can be set to any number to update the z-order of a positioned popover.

  Rule: ✅ Nested Popovers

    Scenario: Close only child popover on outside click
      Given a parent popover and a nested child popover are both open,
      And both have the `hide-on-outside-click` attribute set,
      When the user clicks outside the child popover,
      Then only the child popover should close,
      And the parent popover should remain open.
      When the user clicks outside again,
      Then the parent popover should close.

  Rule: ✅ Menus in Popover

    Scenario: Close only child popover on outside click
      Given a parent popover and a nested menu popover are both open,
      When the user clicks outside the menu popover,
      Then only the menu popover should close,
      And the parent popover should remain open.
      When the user clicks outside again,
      Then the parent popover should close.

  Rule: ✅ Multiple Popovers attached to same trigger

    Scenario: Multiple popovers with same trigger using mouse
      Given a trigger element with two popovers attached, one on hover and one on click,
      When the user hovers over the trigger,
      Then the first popover should open.
      When the user clicks on the trigger,
      Then the second popover should open.
      And the first popover should remain open. (since cursor is on the trigger)
      When the user moves the cursor away from the trigger,
      Then the first popover should close.
      And the second popover should remain open.

    Scenario: Multiple popovers with same trigger using keyboard
      Given a trigger element with two popovers attached, one on hover and one on click,
      When the focus is on the trigger,
      Then the first popover should open.
      When the user presses **Space** or **Enter** on the trigger,
      Then the second popover should open.
      And the first popover should close (since focus is now on the second popover).
      When the user presses **Escape** key,
      Then the second popover should close,
      And the first popover should open (since focus is back on the trigger).

    Scenario: Tooltip and Popover on same trigger with keepConnectedTooltipOpen attribute as false
      Given a trigger element with a popover and a tooltip attached
      When the trigger is clicked,
      Then the popover should open,
      And the tooltip should closed.
      When the popover is open
      And the trigger is hovered again,
      Then the tooltip should not open
      And the popover should remain open.
      When the user clicks outside the popover,
      Then the popover should close,
      And the tooltip should remain closed.

    Scenario: Popover and Tooltip on same trigger and Dialog opens
      Given a trigger element with a popover and a tooltip attached,
      And the popover has a action inside where a dialog opens which takes focus
      When the focus is on the trigger,
      Then the tooltip should open.
      When the user presses **Space** or **Enter** on the trigger,
      Then the popover should open
      And focus moves inside
      When the user presses Space or Enter on the action inside the popover that opens a dialog,
      Then the dialog should open,
      And the popover should close,
      And the tooltip should close
      And the focus move into the dialog.
