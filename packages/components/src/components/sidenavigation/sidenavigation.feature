Feature: SideNavigation Accessibility and User Interaction

  Background:
    Given the flexible SideNavigation component is rendered on the page
    And the SideNavigation contains 2 sections: scrollable and fixed
    And the scrollable section has 2 menubars, fixed section has 1 menubar
    And the sidenavgation has a toggle button to collapse/expand
    And in Left-To-Right (LTR) layouts, it appears on the left side of the page
    And in Right-To-Left (RTL) layouts, it appears on the right side of the page
    And the SideNavigation container has role="navigation" with aria-label="Main Navigation"

  Rule: ✅ Expand/Collapse Behavior

    Scenario: Collapse the sidenavigation using mouse
      Given the sidenavigation is expanded and fully visible
      And the collapse button is visible and enabled
      When I click on the arrow (collapse) button with the mouse
      Then the sidenavigation collapses and displays only icons
      And toggle event is fired

    Scenario: Collapse the sidenavigation using keyboard
      Given the sidenavigation is expanded and fully visible
      And the arrow (collapse) button is reachable via Tab
      When I focus the arrow button using keyboard
      And I press the "Enter" or "Space" key
      Then the sidenavigation collapses and displays only icons
      And focus remains on the arrow button after collapsing
      And toggle event is fired

    Scenario: Expand the sidenavigation using mouse
      Given the sidenavigation is collapsed
      And the expand button is visible and enabled
      When I click on the arrow (expand) button with the mouse
      Then the sidenavigation expands and shows labels next to icons
      And toggle event is fired

    Scenario: Expand the sidenavigation using keyboard
      Given the sidenavigation is collapsed
      And the arrow (expand) button is reachable via Tab
      When I focus the arrow button using keyboard
      And I press the "Enter" or "Space" key
      Then the sidenavigation expands and shows labels next to icons
      And focus remains on the arrow button after expanding
      And toggle event is fired

  Rule: ✅ Scroll Behavior

    Scenario: Scroll to reveal more top menuitems using mouse
      Given the sidenavigation contains more menuitems than fit vertically
      And a fixed section exists at the bottom containing menuitems
      When I scroll using mouse wheel
      Then upper menuitems scroll to reveal hidden content
      And the bottom fixed section remains pinned and does not scroll out of view

  Rule: ✅ Menuitems Selection, selecting a top level menuitem

    Scenario: Navigating to a new page section by mouse click
      Given the sidenavigation is visible
      And a menuitem without submenu is visible
      When I click that menuitem
      Then the main content section of the page updates to reflect the selection
      And that item receives `aria-current="page"`
      And any previously selected menuitem loses `aria-current`

    Scenario: Navigating to a new page section by keyboard
      Given the sidenavigation is visible
      And focus is on a menuitem without submenu
      When I press "Enter" or "Space"
      Then the main content section of the page updates to reflect the selection
      And that item receives `aria-current="page"`
      And any previously selected menuitem loses `aria-current`

    Scenario: Triggering an action by clicking a menuitem
      Given the sidenavigation is visible
      And a menuitem performs an action (e.g., opens dialog, alert)
      When I click that menuitem
      Then the corresponding action is performed
      And no page navigation occurs
      And `aria-current` remains unchanged

    Scenario: Triggering an action via keyboard
      Given the sidenavigation is visible
      And focus is on an actionable menuitem
      When I press "Enter" or "Space"
      Then the corresponding action is performed
      And `aria-current` remains unchanged
      And focus remains on the on this menuitem in sidenavigation

  Rule: Selecting a nested menuitem (considering 1st and 2nd level submenus)

    Scenario: Open 1st submenu to reveal nested menuitems
      Given the SideNavigation is visible
      And the 1st level submenu is collapsed
      And the 1st level parent menuitem has `aria-expanded="false"`
      When I activate the 1st level parent menuitem
      Then the 1st level submenu opens
      And 1st level parent menuitem has `aria-expanded="true"`

    Scenario: Select 1st level nested menuitem with mouse or keyboard
      Given the 1st level submenu is open
      And the 1st level parent menuitem has `aria-expanded="true"`
      And the nested menuitem inside it is visible and focusable
      When I activate the 1st level nested menuitem
      Then page navigation occurs
      And that nested menuitem receives `aria-current="page"`
      And any previously selected menuitem loses `aria-current`
      And the 1st level parent menuitem's style would change to active
      And the 1st level submenu closes
      And the 1st level parent menuitem has `aria-expanded="false"`
      And the 1st level parent menuitem receives focus (if using keyboard)
      And a tooltip appears on the 1st level parent menuitem indicating an active nested item (if using keyboard)

    Scenario: Open 2nd level submenu from 1st level submenu
      Given the 1st level submenu is open
      And the 1st level parent menuitem has `aria-expanded="true"`
      And a 2nd level parent menuitem's submenu is collapsed
      And the 2nd level parent menuitem has `aria-expanded="false"`
      When I activate the 2nd level parent menuitem
      Then the 2nd level submenu opens
      And 2nd level parent menuitem has `aria-expanded="true"`

    Scenario: Select 2nd level nested menuitem with mouse or keyboard
      Given the 2nd level submenu is open
      And the 2nd level parent menuitem has `aria-expanded="true"`
      And the nested menuitem inside it is visible and focusable
      When I activate the 2nd level nested menuitem
      Then page navigation occurs
      And that 2nd level nested menuitem receives `aria-current="page"`
      And any previously selected menuitem loses `aria-current`
      And the 1st and 2nd level parent menuitem's style would change to active
      And both the 1st and 2nd level submenu closes
      And both the 1st and 2nd level parent menuitem has `aria-expanded="false"`
      And the 1st level parent menuitem receives focus (if using keyboard)
      And a tooltip appears on the 1st level parent menuitem indicating an active nested item (if using keyboard)

  Rule: Re-engaging with previously selected parent (1st or 2nd level submenu)

    Scenario: Hovering with mouse over parent menuitem shows tooltip
      Given the submenu is closed
      And a nested menuitem (at any level) has `aria-current="page"`
      When I hover over its parent menuitem with mouse
      Then a tooltip appears indicating a nested item is active

    Scenario: Focusing over parent menuitem shows tooltip
      Given the submenu is closed
      And a nested menuitem (at any level) has `aria-current="page"`
      When I focus on its parent menuitem using keyboard
      Then a tooltip appears indicating an active nested item

  Rule: ✅ Focus Management and Tab Behavior

    Scenario: Tabbing into the SideNavigation
      Given focus is before the SideNavigation in page order
      When I press `Tab`
      Then focus moves to the first menuitem inside the first Menubar in the SideNavigation

    Scenario: Tabbing from first Menubar to second Menubar
      Given focus is on the first menuitem inside the first Menubar
      When I press `Tab`
      Then focus moves to the first menuitem inside the second Menubar in the SideNavigation

    Scenario: Tabbing from second Menubar to SideNavigation toggle button
      Given focus is on the first menuitem inside the second Menubar
      When I press `Tab`
      Then focus moves to the SideNavigation toggle button

    Scenario: Tabbing out of the SideNavigation
      Given focus is on the SideNavigation toggle button
      When I press `Tab`
      Then focus moves to the next focusable element outside the SideNavigation

    Scenario: Shift+Tab moves backward through focusable elements inside the SideNavigation
      Given focus is inside the fixed section of the SideNavigation
      When I press `Shift+Tab`
      Then focus moves to the last focusable element inside the scrollable section
      And it maintains the roving index behavior

    Scenario: Close submenu using Escape
      Given a submenu is open
      And the focus is on one of the menuitems
      When I press `Escape`
      Then that submenu closes
      And focus returns to its parent menuitem

  Rule: ✅ Screen Reader Accessibility (VoiceOver on macOS)

    Scenario: VoiceOver moves focus to SideNavigation
      Given VoiceOver is inside the web content area
      When I press `VO + Shift + ↓` until focus reaches the sidenavigation
      Then VoiceOver announces: "Main Navigation, navigation"

    Scenario: VoiceOver announces 1st menubar inside the Sidenavigation
      Given VoiceOver focus is on sidenavigation
      When I press `VO + →`
      And focus reaches first menubar inside it
      Then VoiceOver announces: "menu bar. <aria-label>, 13 items"

    Scenario: VoiceOver announces 1st menubar menuitem
      Given VoiceOver focus is on 1st menubar inside the sidenavigation
      When I press `VO + →`
      And focus reaches first focussable menuitem inside it
      Then VoiceOver announces: "<aria-label>, menu item, group (1 of 13)"

    Scenario: VoiceOver announces exit of 1st menubar inside the Sidenavigation
      Given VoiceOver focus is on the last menuitem of the 1st menubar inside the sidenavigation
      When I press `VO + →`
      Then the focus returns to the 1st menubar
      And VoiceOver announces: "end of menu bar"

    Scenario: VoiceOver announces 2nd menubar inside the Sidenavigation
      Given VoiceOver focus is at the end of 1st menubar sidenavigation
      When I press `VO + →`
      And focus reaches 2nd menubar inside it
      Then VoiceOver announces: "menu bar. <aria-label>, 2 items"

    Scenario: VoiceOver announces 2nd menubar menuitem
      Given VoiceOver focus is on 2nd menubar inside the sidenavigation
      When I press `VO + →`
      And focus reaches first focussable menuitem inside it
      Then VoiceOver announces: "<aria-label>, menu item, group (1 of 2)"

    Scenario: VoiceOver announces exit of 2nd menubar inside the Sidenavigation
      Given VoiceOver focus is the last menuitem of 2nd menubar inside the sidenavigation
      When I press `VO + →`
      Then the focus returns to the 2nd menubar
      And VoiceOver announces: "end of menu bar"

    Scenario: VoiceOver announces Sidenavgation toggle button
      Given VoiceOver focus is at the end of 2nd menubar inside the sidenavigation (end of menu bar)
      When I press `VO + →`
      Then focus reaches the sidenavigation toggle button
      And VoiceOver announces: "<aria-label>, button"
      And the button has `aria-expanded="false"` if sidenavigation is collapsed
      And the button has `aria-expanded="true"` if sidenavigation is expanded

    Scenario: VoiceOver collapses the SideNavigation
      Given VoiceOver focus is on sidenavgation toggle button
      When I press `VO + Space`
      Then the sidenavigation collapses
      Then VoiceOver announces: "<aria-label>, collapsed, button"

    Scenario: VoiceOver exits SideNavigation
      Given VoiceOver focus is on sidenavgation toggle button
      When I press `VO + →`
      And focus reaches sidenavigation back again
      Then VoiceOver announces: "end of navigation"
