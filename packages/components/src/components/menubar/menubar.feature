Feature: Vertical Menubar Accessibility and User Interaction

    Background:

        Given the Vertical Menubar component is rendered on the page
        And the Menubar container has role="menubar" with aria-orientation="vertical"
        And the Menubar contains the following menuitems:
            | Menuitem      | Has Submenu   | State      |
            | ------------- | ------------- | ---------- |
            | File          | No            | Normal     |
            | Edit          | Yes           | Normal     |
            | View          | No            | Normal     |
            | Help          | No            | Normal     |
            | Preferences   | No            | Disabled   |
        And each item uses role="menuitem"
        And focus is managed using Roving tabindex
        And in RTL layouts, horizontal arrow keys behave reversed: Right Arrow and Left Arrow swap functionality

    Rule: ✅ Mouse Interactions

        Scenario: Click on menubar menuitem that doesn't have submenu
            Given the menubar menuitem does not have a submenu
            When I click a menubar menuitem
            Then its associated action is triggered
            And no submenu opens

        Scenario: Click on menubar menuitem that has a submenu
            Given the menubar menuitem has a submenu
            When I click the menubar menuitem
            Then its submenu opens
            And menuitem has aria-expanded="true"

        Scenario: Clicking disabled menubar menuitem
            Given the menubar menuitem is disabled
            When I click the disabled menubar menuitem
            Then nothing happens

        Scenario: Switch submenu by clicking another menubar menuitem that has a submenu
            Given a submenu of a menubar menuitem is open
            And the other menubar menuitem has a submenu
            When I click the other menubar menuitem
            Then the previous submenu closes
            And the new submenu opens
            And the new menubar menuitem has aria-expanded="true"

        Scenario: Switch submenu by clicking another menubar menuitem that doesn't have a submenu
            Given a submenu of a menubar menuitem is open
            And the oth



    Rule: ✅ Mouse Interactions

        Scenario: Click on menubar menuitem that doesn't have submenu
            Given the menubar menuitem does not have a submenu
            When I click a menubar menuitem
            Then its associated action is triggered
            And no submenu opens

        Scenario: Click on menubar menuitem that has a submenu
            Given the menubar menuitem has a submenu
            When I click the menubar menuitem
            Then its submenu opens
            And menuitem would have `aria-expanded="true"`.

        Scenario: Clicking disabled menubar menuitem
            Given the menubar menuitem is disabled
            When I click the disabled menubar menuitem
            Then nothing happens

        Scenario: Switch submenu by clicking another menubar menuitem that has a submenu
            Given a submenu of a menubar menuitem is open
            And the other menubar menuitem has a submenu
            When I click the other menubar menuitem
            Then the previous submenu closes
            And the new submenu opens
            And the new menubar menuitem has `aria-expanded="true"`

        Scenario: Switch submenu by clicking another menubar menuitem that doesn't have a submenu
            Given a submenu of a menubar menuitem is open
            And the other menubar menuitem does not have a submenu
            When I click the other menubar menuitem
            Then the previous submenu closes
            And the clicked menubar menuitem's associated action is triggered
            And no new submenu opens

        Scenario: Moving between menuitems on a menubar
            Given a submenu of a menubar menuitem is open
            When I hover over another menubar menuitem that has a submenu
            Then no submenu opens automatically

        Scenario: Click outside to close all open menus
            Given one or more submenus are open
            When I click anywhere outside the Menubar
            Then all open submenus, including nested submenus, close


    Rule: ✅ Keyboard Interactions

        Scenario: Navigate vertical menubar menuitems with Up/Down Arrow
            Given the keyboard focus is on the first menubar menuitem
            When I press `Down Arrow`
            Then focus moves to the next menubar menuitem (wraps to first if at end)
            When I press `Up Arrow`
            Then focus moves to the previous menubar menuitem (wraps to last if at beginning)

        Scenario: Activate menubar menuitem without submenu
            Given the keyboard focus is on a menubar menuitem without a submenu
            When I press `Enter` or `Space`
            Then its associated action is triggered
            And no submenu opens

        Scenario: Open submenu using Right Arrow (LTR)
            Given the keyboard focus is on a menubar menuitem with a submenu
            When I press `Right Arrow`, `Enter` or `Space`
            Then its submenu opens
            And focus moves to the first focusable menuitem inside the submenu

        Scenario: Navigate disabled menubar menuitems
            Given the keyboard focus is on a disabled menubar menuitem
            When I press `Enter` or `Space`
            Then no action is triggered
            And no submenu opens

        Scenario: Home and End keys navigate vertical menubar
            Given the keyboard focus is on one of the menubar menuitem
            When I press `Home`
            Then focus moves to the first menubar menuitem
            When I press `End`
            Then focus moves to the last menubar menuitem

        Scenario: Tab exits Menubar even from submenus
            Given the keyboard focus is inside any open submenu at any nesting level
            When I press `Tab`
            Then all open submenus close
            And focus moves to the next focusable element outside of the Menubar

        Scenario: Shift+Tab exits Menubar even from submenus
            Given the keyboard focus is inside any open submenu at any nesting level
            When I press `Shift+Tab`
            Then all open submenus close
            And focus moves to the previous focusable element outside of the Menubar


    Rule:  ✅ Submenu Keyboard Interactions

        Scenario: Navigate submenu menuitems vertically
            Given the keyboard focus is on a menuitem inside a submenu
            When I press `Down Arrow`
            Then focus moves to the next submenu menuitem (loops if at end)
            When I press `Up Arrow`
            Then focus moves to the previous submenu menuitem (loops if at beginning)

        Scenario: Close nested submenu using Left Arrow (LTR)
            Given the keyboard focus is inside a nested submenu
            When I press `Left Arrow`
            Then nested submenu closes
            And focus returns to its parent menuitem

        Scenario: Close submenu using Escape
            Given the keyboard focus is inside any open submenu
            When I press `Escape`
            Then that submenu closes
            And focus returns to its parent menubar menuitem


    Rule:  ✅ Cross-Menubar Navigation from Submenu (LTR)

        Scenario: Move to next menubar menuitem from submenu using Right Arrow (target menuitem has no submenu)*
            Given the keyboard focus is on a menuitem within an open submenu
            And the menuitem does not have a nested submenu
            And the next menubar menuitem does not have a submenu
            When I press `Right Arrow`
            Then the current submenu closes
            And focus moves to the next menubar menuitem (wraps to first if at end)
            And no submenu opens

        Scenario: Move to next menubar menuitem from submenu using Right Arrow (target menuitem has submenu)*
            Given the keyboard focus is on a menuitem within an open submenu
            And the menuitem does not have a nested submenu
            And the next menubar menuitem has a submenu
            When I press `Right Arrow`
            Then the current submenu closes
            And focus moves to the next menubar menuitem (wraps to first if at end)
            And its submenu opens
            And focus moves to the first focusable menuitem inside the submenu

        Scenario: Move to next menubar menuitem from submenu using Left Arrow (target menuitem has no submenu)*
            Given the keyboard focus is on a menuitem within an open submenu
            And the menuitem does not have a nested submenu
            And the previous menubar menuitem does not have a submenu
            When I press `Left Arrow`
            Then the current submenu closes
            And focus moves to the previous menubar menuitem (wraps to last if at beginning)
            And no submenu opens

        Scenario: Move to next menubar menuitem from submenu using Left Arrow (target menuitem has a submenu)*
            Given the keyboard focus is on a menuitem within an open submenu
            And the menuitem does not have a nested submenu
            And the previous menubar menuitem has a submenu
            When I press `Left Arrow`
            Then the current submenu closes
            And focus moves to the previous menubar menuitem (wraps to last if at beginning)
            And its submenu opens
            And focus moves to the first focusable menuitem inside the submenu


    Rule: ✅ ScreenReader Accessibility (VoiceOver on macOS)

        Scenario: VoiceOver moves focus to Menubar
            Given VoiceOver is inside the web content area
            When I press `VO + Shift + ↓` until focus reaches the Menubar
            Then VoiceOver announces: "Application Menubar, vertical menubar"

        Scenario: VoiceOver navigates to File menuitem
            Given VoiceOver focus is on the Menubar
            When I press `VO + →`
            And focus reaches the first focussable menuitem
            Then VoiceOver announces: "File, menu item"

        Scenario: VoiceOver navigates to View menuitem (has submenu)
            Given VoiceOver focus is on the Menubar
            When I press `VO + →` twice
            Then VoiceOver announces: "View, menu item, has popup menu, collapsed"

        Scenario: Expanding submenu via VoiceOver
            Given VoiceOver focus is on View (submenu collapsed)
            When I press `VO + Space`
            Then submenu opens
            And VoiceOver announces: "View, menu item, has popup menu, expanded"
            And VoiceOver automatically moves into the submenu
            And VoiceOver announces: "<first submenu item label>, menu item"

        Scenario: Navigating inside submenu with VoiceOver
            Given VoiceOver is inside the File submenu
            When I press `VO + →`
            Then VoiceOver announces: "<next submenu item label>, menu item"

        Scenario: Navigating backward inside submenu
            Given VoiceOver focus is on any submenu item
            When I press `VO + ←`
            Then VoiceOver announces: "<previous submenu item label>, menu item"

        Scenario: Exiting submenu interaction
            Given VoiceOver is inside View submenu
            When I press `VO + Shift + ↑`
            Then VoiceOver announces: "Out of menu"
            And focus returns to the View menuitem

        Scenario: Collapsing submenu using VoiceOver
            Given submenu is open and VoiceOver focus is on View
            When I press `VO + Space`
            Then submenu closes
            And VoiceOver announces: "File, menu item, has popup menu, collapsed"

        Scenario: Disabled menuitem is announced
            Given VoiceOver focus is on a disabled menubar menuitem labeled Preferences
            Then VoiceOver announces: "Preferences, menu item, dimmed"
