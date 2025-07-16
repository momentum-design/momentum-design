Feature: MenuPopover Accessibility and User Interaction

  Background:
    Given the MenuPopover component is rendered on the page
    And the trigger element (button) labeled "Options" is mounted, visible, and focusable
    Then the trigger element has aria-haspopup="menu"
    And the MenuPopover contains:
      | Item          | Type     | State    |
      | Profile       | menuitem | normal   |
      | Settings      | menuitem | normal   |
      | Notifications | menuitem | normal   |
      | Logout        | menuitem | disabled |

  Rule: ✅ Opening the MenuPopover

    Scenario: Clicking disabled trigger does nothing
      Given the trigger is disabled
      When I click on the trigger
      Then the MenuPopover should not open

    Scenario: Open the popover using mouse
      Given the MenuPopover is closed
      When I click on the trigger element with the mouse
      Then the MenuPopover should open and display a list of menuitems

    Scenario: Open the popover using keyboard
      Given the MenuPopover is closed
      When I navigate to the trigger element using the keyboard (Tab)
      And I press "Enter" or "Space"
      Then the MenuPopover should open and display a list
      And focus moves to the first focusable menuitem

  Rule: ✅ Closing the MenuPopover

    Scenario: Close the popover by clicking outside
      Given the MenuPopover is open
      When I click anywhere outside the MenuPopover
      Then the MenuPopover should close

    Scenario: Close the popover by clicking the trigger again
      Given the MenuPopover is open
      When I click on the trigger element again
      Then the MenuPopover should close

    Scenario: Close the popover using Escape key
      Given the MenuPopover is open
      When I press "Escape"
      Then the MenuPopover should close
      And focus returns to the trigger element

  Rule: ✅ Selecting menuitems

    Scenario: Select menuitem using mouse
      Given the MenuPopover is open
      When I click on a menuitem
      Then the action associated with the menuitem should execute
      And action event should dispatch
      And the MenuPopover should close

    Scenario: Select menuitem using keyboard
      Given the MenuPopover is open
      And focus is on a menuitem
      When I press "Enter" or "Space"
      Then the action associated with the menuitem should execute
      And action event should dispatch
      And the MenuPopover should close

    Scenario: Disabled menuitems are non-interactive using mouse
      Given the MenuPopover is open
      And a menuitem is visually disabled
      When I click on the disabled menuitem
      Then no action should be triggered
      And the MenuPopover should remain open

    Scenario: Disabled menuitems are non-interactive using keyboard
      Given the MenuPopover is open
      And the focus is on the first menuitem
      When the next menuitem is disabled
      And I press "ArrowDown" to navigate to the next menuitem
      Then focus should skip the disabled menuitem
      And no action should be triggered
      And the MenuPopover should remain open

  Rule: ✅ Keyboard Navigation

    Scenario: Navigate menuitems using Home key
      Given the MenuPopover is open
      And focus is on Settings menuitem
      When I press "Home"
      Then focus should move to the first menuitem (Profile)

    Scenario: Navigate menuitems using End key
      Given the MenuPopover is open
      And focus is on Settings menuitem
      When I press "End"
      Then focus should move to the last menuitem (Logout)

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

    Scenario: Focus trap keeps focus inside MenuPopover
      Given the MenuPopover is open
      And the focus is on first menuitem
      When I press "Tab" repeatedly
      Then nothing happens
      And focus still remains on the first menuitem

    Scenario: Skip separator during navigation
      Given the MenuPopover is open
      And it includes visual separators
      When I navigate with arrow keys
      Then focus should skip over the separator

    Scenario: Moves focus correctly across groups
      Given the MenuPopover includes grouped menuitems
      When I navigate with arrow keys
      Then focus should move sequentially through all menuitems, regardless of groups

  Rule: ✅ Nested Submenu Interaction

    Background:
      Given the MenuPopover contains a nested submenu under "Settings"
      And the nested submenu contains:
        | Item     | Type     | State    |
        | Account  | menuitem | normal   |
        | Privacy  | menuitem | normal   |
        | Security | menuitem | normal   |
        | Advanced | menuitem | disabled |
      And the nested submenu is closed by default
      And the MenuPopover is open

    Scenario: Open nested submenu with mouse
      Given the focus is on Settings menuitem
      When I click on that menuitem
      Then the nested submenu should appear adjacent to the parent menuitem
      And it should open on the correct side (right in LTR, left in RTL)

    Scenario Outline: Scenario: Open nested submenu using keyboard
      Given the focus is on Settings menuitem
      When I press <key> in <dir>
      Then the nested submenu should open
      And focus should move to the first menuitem in the nested submenu

      Examples:
        | key        | dir |
        | Enter      | LTR |
        | Space      | LTR |
        | ArrowRight | LTR |
        | Enter      | RTL |
        | Space      | RTL |
        | ArrowLeft  | RTL |

    Scenario Outline: Navigate back from nested submenu using keyboard
      Given a nested submenu is open from Settings menuitem
      And focus is on the first menuitem in the nested submenu
      When I press <key> in <dir>
      Then the nested submenu should close
      And focus should return to the Settings menuitem

      Examples:
        | key        | dir |
        | Escape     | LTR |
        | Escape     | RTL |
        | ArrowLeft  | LTR |
        | ArrowRight | RTL |

    Scenario: Selecting a nested menuitem using keyboard
      Given the MenuPopover is open
      And a submenu inside it is open and visible
      And focus is on a nested menuitem
      When I press "Enter" or "Space"
      Then the nested item's action is executed
      And the nested submenu closes
      And all parent MenuPopovers close
      And action event should dispatch
      And focus returns to the trigger element

    Scenario: Selecting a nested menuitem using mouse
      Given the MenuPopover is open
      And a submenu inside it is open and visible
      When I click on a nested menuitem
      Then the nested item's action is executed
      And the nested submenu closes
      And action event should dispatch
      And all parent MenuPopovers close

    Scenario: Escape key closes nested submenus step-by-step
      Given I have navigated into a nested submenu
      When I press "Escape"
      Then only the current submenu closes
      And focus returns to the parent menuitem
      And pressing Escape again closes parent MenuPopovers upward

    Scenario: Close the nested popover by clicking outside
      Given I have navigated into a nested submenu
      When I click anywhere outside the MenuPopover
      Then all the MenuPopover should close at once
      And no action event should dispatch

    Scenario: Close all children submenu and open the parent submenu using mouse
      Given I have navigated into multiple nested submenus
      When I click on one of the root parent menuitems which has a nested submenu
      Then all of the opened nested submenus (upto that level) should close
      And the parent submenu should open

  Rule: ✅ Menuitem Types

    Scenario: Toggle menuitemcheckbox using mouse
      Given the MenuPopover is open
      And a menuitem with role "menuitemcheckbox" is present
      When I click on the menuitem
      Then its checked state toggles
      And the visual indicator reflects the state
      And change event should dispatch
      And the MenuPopover closes

    Scenario Outline: Toggle menuitemcheckbox using keyboard
      Given the MenuPopover is open
      And focus is on a "menuitemcheckbox"
      When I press <key>
      Then its checked state toggles
      And the visual indicator reflects the state
      And change event should dispatch
      And the MenuPopover <menu popover state>

      Examples:
        | key   | menu popover state |
        | Enter | closes             |
        | Space | remain open        |

    Scenario: Select one menuitemradio from a group using mouse
      Given the MenuPopover is open
      And a group of "menuitemradio" is present
      When I click on one radio item
      Then it becomes selected
      And change event should dispatch
      And other items in the group become deselected
      And the MenuPopover closes

    Scenario Outline: Select one menuitemradio from a group using keyboard
      Given the MenuPopover is open
      And focus is on a "menuitemradio" in a group
      When I press <key>
      Then it becomes selected
      And change event should dispatch
      And other items in the group become deselected
      And the MenuPopover <menu popover state>

      Examples:
        | key   | menu popover state |
        | Enter | closes             |
        | Space | remain open        |

  Rule: ✅ ScreenReader Accessibility

    Scenario: VoiceOver opens MenuPopover and moves focus to first menuitem
      Given the user is navigating with VoiceOver
      When focus is moved to the trigger button labeled "Options"
      Then VoiceOver announces: "Options, button, collapsed, menu"
      When the user activates the button (VO + Space)
      Then the MenuPopover opens and focus moves to first menuitem "Profile"
      And VoiceOver announces: "Profile, menu item (1 of 4)"

    Scenario Outline: VoiceOver navigates through menuitems
      Given VoiceOver interaction is active inside the MenuPopover
      When VoiceOver navigates to the "<menuitem>" menuitem
      Then VoiceOver announces: "<announcement>"

      Examples:
        | menuitem      | announcement                    |
        | Profile       | Profile, menu item              |
        | Settings      | Settings, menu item             |
        | Notifications | Notifications, 3 new, menu item |
        | Logout        | Logout, menu item, dimmed       |

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
