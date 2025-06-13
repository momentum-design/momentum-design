Feature: MenuPopover Accessibility and User Interaction

    Background:
        Given the MenuPopover component is rendered on the page
        And the trigger element (button) labeled "Options" is mounted, visible, and focusable
        And the trigger element has aria-haspopup="menu"
        And the MenuPopover content is initially hidden and not rendered in the accessibility tree
        And the MenuPopover contains:
            | Item          | Type     | State    |
            | Profile       | menuitem | normal   |
            | Settings      | menuitem | normal   |
            | Notifications | menuitem | normal   |
            | Logout        | menuitem | disabled |
        And all ARIA roles, attributes, and relationships are correctly applied

    Rule: ✅ Opening the MenuPopover

        Scenario: Clicking disabled trigger does nothing
            Given the trigger is disabled
            When I click on the trigger
            Then nothing should happen
            And the MenuPopover should not open

        Scenario: Open the popover using mouse
            Given the MenuPopover is closed
            When I click on the trigger element with the mouse
            Then the MenuPopover should open and display a list of menuitems

        Scenario: Open the popover using keyboard
            Given the MenuPopover is closed
            When I navigate to the trigger element using the keyboard (Tab)
            And I press "Enter" or "Space"
            Then the MenuPopover should open and display a list of menuitems

    Rule: ✅ Closing the MenuPopover

        Scenario: Close the popover by clicking outside
            Given the MenuPopover is open
            When I click anywhere outside the MenuPopover
            Then the MenuPopover should close

        Scenario: Close the popover using Escape key
            Given the MenuPopover is open
            When I press "Escape"
            Then the MenuPopover should close

    Rule: ✅ Selecting menuitems

        Scenario: Select menuitem using mouse
            Given the MenuPopover is open
            When I click on a menuitem
            Then the menuitem’s associated action should be triggered
            And the MenuPopover should close

        Scenario: Select menuitem using keyboard
            Given the MenuPopover is open
            And focus is on a menuitem
            When I press "Enter" or "Space"
            Then the menuitem’s associated action should be triggered
            And the MenuPopover should close

        Scenario: Disabled menuitems are non-interactive using mouse
            Given the MenuPopover is open
            And a menuitem is visually disabled
            When I click on the disabled menuitem
            Then no action should be triggered
            And the MenuPopover should remain open

        Scenario: Disabled menuitems are non-interactive using keyboard
            Given the MenuPopover is open
            And a menuitem is visually disabled
            When I navigate using the keyboard
            Then keyboard navigation should skip the disabled menuitem
            And no action should be triggered
            And the MenuPopover should remain open

    Rule: ✅ Keyboard Navigation

        Scenario: Navigate menuitems using Home and End keys
            Given the MenuPopover is open
            And focus is on a menuitem
            When I press "Home"
            Then focus should move to the first menuitem
            When I press "End"
            Then focus should move to the last menuitem

        Scenario: Move focus downward using ArrowDown key
            Given the MenuPopover is open
            And focus is on a menuitem
            When I press "ArrowDown"
            Then focus should move to the next menuitem

        Scenario: Move focus upward using ArrowUp key
            Given the MenuPopover is open
            And focus is on a menuitem
            When I press "ArrowUp"
            Then focus should move to the previous menuitem

        Scenario: Loop focus downward within menuitems
            Given the MenuPopover is open
            And focus is on the last menuitem
            When I press "ArrowDown"
            Then focus should move to the first menuitem

        Scenario: Loop focus upward within menuitems
            Given the MenuPopover is open
            And focus is on the first menuitem
            When I press "ArrowUp"
            Then focus should move to the last menuitem

    Rule: ✅ Nested Submenus

        Scenario: Open nested submenu with mouse
            Given the MenuPopover is open
            And a menuitem contains a nested submenu
            When I click on that menuitem
            Then the nested submenu should appear adjacent to the parent menuitem
            And it should open on the correct side (right in LTR, left in RTL)

        Scenario: Open nested submenu using keyboard
            Given the MenuPopover is open
            And a menuitem contains a nested submenu
            When I focus the menuitem and press:
            - "Right Arrow" in LTR
            - "Left Arrow" in RTL
            - "Enter" or "Space" in any direction
            Then the nested submenu should open
            And focus should move to the first menuitem in the nested submenu

        Scenario: Navigate back from nested submenu using keyboard
            Given a nested submenu is open
            And focus is inside of it
            When I press:
            - "Left Arrow" in LTR
            - "Right Arrow" in RTL
            - "Escape" in any direction
            Then the nested submenu should close
            And focus should return to the parent menuitem

        Scenario: Selecting a nested menuitem using keyboard
            Given the MenuPopover is open
            And a submenu inside it is open and visible
            And focus is on a nested menuitem
            When I press "Enter" or "Space"
            Then the nested item's action is executed
            And the nested submenu closes
            And all parent MenuPopovers close

        Scenario: Selecting a nested menuitem using mouse
            Given the MenuPopover is open
            And a submenu inside it is open and visible
            When I click on a nested menuitem
            Then the nested item's action is executed
            And the nested submenu closes
            And all parent MenuPopovers close

    Rule: ✅ Separator and Group Handling

        Scenario: Skipping separator during navigation
            Given the MenuPopover is open
            And it includes visual separators
            When I navigate with arrow keys
            Then focus should skip over the separator

        Scenario: Grouped menuitems have headings
            Given the MenuPopover includes grouped menuitems
            Then each group has a visible or accessible heading
            And focus moves normally between menuitems across groups

    Rule: ✅ Menuitem Types

        Scenario: Toggle menuitemcheckbox using mouse
            Given the MenuPopover is open
            And a menuitem with role "menuitemcheckbox" is present
            When I click on the menuitem
            Then its checked state toggles
            And the visual indicator reflects the state
            And the MenuPopover remains open

        Scenario: Toggle menuitemcheckbox using keyboard
            Given the MenuPopover is open
            And focus is on a "menuitemcheckbox"
            When I press "Enter" or "Space"
            Then its checked state toggles
            And the visual indicator reflects the state
            And the MenuPopover remains open

        Scenario: Select one menuitemradio from a group using mouse
            Given the MenuPopover is open
            And a group of "menuitemradio" is present
            When I click on one radio item
            Then it becomes selected
            And other items in the group become deselected
            And the MenuPopover remains open

        Scenario: Select one menuitemradio from a group using keyboard
            Given the MenuPopover is open
            And focus is on a "menuitemradio" in a group
            When I press "Enter" or "Space"
            Then it becomes selected
            And other items in the group become deselected
            And the MenuPopover remains open

    Rule: ✅ Focus Behavior

        Scenario: Focus moves to first menuitem on open
            Given the MenuPopover is closed
            When I open it using keyboard
            Then focus moves to the first focusable menuitem

        Scenario: Focus returns to trigger on close
            Given the MenuPopover was opened using keyboard
            When I close it using keyboard
            Then focus returns to the trigger element

        Scenario: Escape key closes nested submenus step-by-step
            Given I have navigated into a nested submenu
            When I press "Escape"
            Then only the current submenu closes
            And focus returns to the parent menuitem
            And pressing Escape again closes parent MenuPopovers upward

    Rule: ✅ ScreenReader Accessibility

        Scenario: VoiceOver opens MenuPopover and moves focus to first menuitem
            Given the user is navigating with VoiceOver
            And focus moves to the trigger button labeled "Options"
            Then VoiceOver announces: "Options, button, collapsed, menu"

            When the user activates the button (VO + Space / Enter)
            Then the MenuPopover opens
            And VoiceOver announces: "Options, button, expanded, menu"

            When the MenuPopover is rendered
            Then the user starts interacting with VoiceOver (VO + Shift + Down)
            And VoiceOver announces: "Menu, 4 items"
            Then VoiceOver automatically moves focus to the first menuitem "Profile"
            And VoiceOver announces: "Profile, menu item"

        Scenario: VoiceOver navigates through menuitems
            Given VoiceOver interaction is active inside the MenuPopover
            When VoiceOver navigates right (VO + Right) to "Profile"
            Then VoiceOver announces: "Profile, menu item"

            When VoiceOver navigates right (VO + Right) to "Settings"
            Then VoiceOver announces: "Settings, menu item"

            When VoiceOver navigates right (VO + Right) to "Notifications"
            Then VoiceOver announces: "Notifications, 3 new, menu item"

            When VoiceOver navigates right (VO + Right) to "Logout"
            Then VoiceOver announces: "Logout, menu item, dimmed"

        Scenario: VoiceOver reads aria-label or group headings if present
            Given the MenuPopover contains grouped sections with headings
            When VoiceOver navigates into a group
            Then VoiceOver announces the group heading label
            And as the user navigates right, VoiceOver announces each menuitem's label and role

        Scenario: VoiceOver skips separators
            Given the MenuPopover contains separators between groups
            When VoiceOver navigates through the menu
            Then VoiceOver skips the separator and announces the next menuitem directly

        Scenario: VoiceOver announces submenu state
            Given the MenuPopover contains a submenu under "Settings"
            When VoiceOver navigates to "Settings"
            Then VoiceOver announces: "Settings, menu item, has submenu, collapsed"

            When the user expands the submenu (VO + Space / Enter)
            Then VoiceOver announces: "Settings, menu item, has submenu, expanded"

        Scenario: VoiceOver announces checkbox and radio states
            Given the MenuPopover contains menuitemcheckbox and menuitemradio items
            When VoiceOver navigates right (VO + Right) to "Email Notifications" checkbox
            Then VoiceOver announces: "Email Notifications, menu item checkbox, checked"

            When VoiceOver navigates right (VO + Right) to "Dark Mode" radio item
            Then VoiceOver announces: "Dark Mode, menu item radio, selected"

        Scenario: VoiceOver exits MenuPopover
            Given VoiceOver interaction is active inside the MenuPopover
            When the user stops interacting (VO + Shift + Up)
            Then VoiceOver announces: "Out of Menu"
            And focus remains on the MenuPopover container

            When the user collapses the MenuPopover (VO + Space / Escape)
            Then VoiceOver announces: "Options, button, collapsed, menu"
