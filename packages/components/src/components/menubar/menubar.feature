Feature: Vertical Menubar Accessibility and User Interaction

  Background:
    Given the Vertical Menubar component is rendered on the page
    And the Menubar container has role="menubar" with aria-orientation="vertical"
    And the Menubar contains the following menuitems:
      | Menuitem      | Has Submenu   | State      |
      | ------------- | ------------- | ---------- |
      | File          | No            | Normal     |
      | Edit          | Yes           | Normal     |
      | View          | Yes           | Normal     |
      | Preferences   | No            | Disabled   |
      | Help          | No            | Normal     |
    And each item uses role="menuitem"
    And focus is managed using Roving tabindex
    And in RTL layouts, horizontal arrow keys behave reversed: ArrowRight and ArrowLeft swap functionality

  Rule: ✅ Mouse Interactions

    Scenario: Click on menubar menuitem that doesn't have submenu
      Given the menubar menuitem does not have a submenu
      When I click a menubar menuitem (File)
      Then its associated action is triggered
      And no submenu opens

    Scenario: Click on menubar menuitem that has a submenu
      Given the menubar menuitem has a submenu
      When I click the menubar menuitem (Edit)
      Then its submenu opens
      And menuitem has aria-expanded="true"

    Scenario: Clicking disabled menubar menuitem
      Given the menubar menuitem is disabled
      When I click the disabled menubar menuitem (Preferences)
      Then no action is triggered
      And no submenu opens

    Scenario: Switch submenu by clicking another menubar menuitem that has a submenu
      Given a submenu of the View menuitem is open
      When I click on the Edit menuitem which also has a submenu
      Then the submenu of the View menuitem closes
      And the submenu of the Edit menuitem opens
      And the Edit menubar menuitem has aria-expanded="true"
      And the View menubar menuitem has aria-expanded="false"

    Scenario: Switch submenu by clicking another menubar menuitem that doesn't have a submenu
      Given a submenu of Edit menuitem is open
      And the Help menubar menuitem does not have a submenu
      When I click the Help menubar menuitem
      Then the submenu of Edit menuitem closes
      And the Help menubar menuitem's associated action is triggered

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

    Scenario: Open submenu using ArrowRight (LTR)/ ArrowLeft (RTL)
      Given the keyboard focus is on a menubar menuitem with a submenu
      When I press `Enter` or `Space` or ArrowRight (LTR) or ArrowLeft (RTL)
      Then its submenu opens
      And focus moves to the first focusable menuitem inside the submenu

    Scenario: Navigate disabled menubar menuitems
      Given the keyboard focus is on a View menuitem
      And Preferences menuitem is the next menuitem
      When I press `Down Arrow`
      Then focus moves to the Preferences menuitem which is disabled
      When I press `Enter` or `Space`
      Then no action is triggered
      And no submenu opens

    Scenario: Home and End keys navigate vertical menubar
      Given the keyboard focus is on one of the menubar menuitem
      When I press `Home`
      Then focus moves to the first menubar menuitem
      When I press `End`
      Then focus moves to the last menubar menuitem

    Scenario: Tab exits Menubar and returns focus on Shift+Tab
      Given the keyboard focus is on a Edit menuitem
      And the submenu of Edit is open
      When I press `Tab`
      Then focus moves to the next focusable element outside of the Menubar
      And all open submenus close
      When I press `Shift+Tab`
      Then focus returns to the Edit menuitem
      And the submenu of Edit remains closed

  Rule: ✅ Submenu Keyboard Interactions

    Scenario: Navigate submenu menuitems vertically
      Given the keyboard focus is on a menuitem inside a submenu
      When I press `Down Arrow`
      Then focus moves to the next submenu menuitem (loops if at end)
      When I press `Up Arrow`
      Then focus moves to the previous submenu menuitem (loops if at beginning)

    Scenario: Close nested submenu using ArrowLeft (LTR)/ ArrowRight (RTL)
      Given the keyboard focus is inside a nested submenu
      When I press `ArrowLeft` (LTR) or `ArrowRight` (RTL)
      Then nested submenu closes
      And focus returns to its parent menuitem

    Scenario: Close submenu using Escape
      Given the keyboard focus is on a menuitem within an opened submenu
      When I press `Escape`
      Then that submenu closes
      And focus returns to its parent menubar menuitem

  Rule: ✅ Cross-Menubar Navigation from Submenu in LTR direction

    Scenario: Move to next menubar menuitem from submenu using ArrowRight (target menuitem has no submenu)*
      Given the keyboard focus is on a menuitem within an open submenu
      And the menuitem does not have a nested submenu
      And the next menubar menuitem does not have a submenu
      When I press `ArrowRight`
      Then the current submenu closes
      And focus moves to the next menubar menuitem in the menubar (wraps to first if at end)
      And no submenu opens

    Scenario: Move to next menubar menuitem from submenu using ArrowRight (target menuitem has submenu)*
      Given the keyboard focus is on a menuitem within an open submenu
      And the menuitem does not have a nested submenu
      And the next menubar menuitem has a submenu
      When I press `ArrowRight`
      Then the current submenu closes
      And focus moves to the next menubar menuitem (wraps to first if at end)
      And its submenu opens
      And focus moves to the first focusable menuitem inside the submenu

    Scenario: Move to previous menubar menuitem from submenu using ArrowLeft (target menuitem has no submenu)*
      Given the keyboard focus is on a menuitem within an open submenu
      And the submenu is associated directly to the menubar menuitem (not nested)
      And the previous menubar menuitem does not have a submenu
      When I press `ArrowLeft`
      Then the current submenu closes
      And focus moves to the previous menubar menuitem (wraps to last if at beginning)
      And no submenu opens

    Scenario: Move to previous menubar menuitem from submenu using ArrowLeft (target menuitem has a submenu)*
      Given the keyboard focus is on a menuitem within an open submenu
      And the menuitem does not have a nested submenu
      And the previous menubar menuitem has a submenu
      When I press `ArrowLeft`
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
      When I press `VO + →` or `VO + ↓`
      Then VoiceOver announces: "<next submenu item label>, menu item"

    Scenario: Navigating backward inside submenu
      Given VoiceOver focus is on any submenu item
      When I press `VO + ←` or `VO + ↑`
      Then VoiceOver announces: "<previous submenu item label>, menu item"

    Scenario: Exiting submenu interaction
      Given VoiceOver is inside View submenu
      When I press `Escape`
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
