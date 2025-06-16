Feature: SideNavigation Accessibility and User Interaction

    Background:
        Given the SideNavigation component is rendered on the page
        And in Left-To-Right (LTR) layouts, it appears on the left side of the page
        And in Right-To-Left (RTL) layouts, it appears on the right side of the page
        And the SideNavigation container has role="navigation" with aria-label="Main Navigation"

    Rule: ✅ Expand/Collapse Behavior

        Scenario: Collapse the sidenavigation using mouse
            Given the sidenavigation is expanded and fully visible
            And the collapse button is visible and enabled
            When I click on the arrow (collapse) button with the mouse
            Then the sidenavigation collapses and displays only icons

        Scenario: Collapse the sidenavigation using keyboard
            Given the sidenavigation is expanded and fully visible
            And the arrow (collapse) button is reachable via Tab
            When I focus the arrow button using keyboard
            And I press the "Enter" or "Space" key
            Then the sidenavigation collapses and displays only icons
            And focus remains on the arrow button after collapsing

        Scenario: Expand the sidenavigation using mouse
            Given the sidenavigation is collapsed
            And the expand button is visible and enabled
            When I click on the arrow (expand) button with the mouse
            Then the sidenavigation expands and shows labels next to icons

        Scenario: Expand the sidenavigation using keyboard
            Given the sidenavigation is collapsed
            And the arrow (expand) button is reachable via Tab
            When I focus the arrow button using keyboard
            And I press the "Enter" or "Space" key
            Then the sidenavigation expands and shows labels next to icons
            And focus remains on the arrow button after expanding

    Rule: ✅ Scroll Behavior

        Scenario: Scroll to reveal more top menuitems using mouse
            Given the sidenavigation contains more menuitems than fit vertically
            And a fixed section exists at the bottom containing menuitems
            When I scroll using mouse wheel
            Then upper menuitems scroll to reveal hidden content
            And the bottom fixed section remains pinned and does not scroll out of view

    Rule: ✅ Menuitems Selection

    Feature: Selecting a Top-Level menuitem

        Scenario: Navigating to a new page by mouse click
            Given the sidenavigation is visible
            And a menuitem without submenu is visible
            When I click that menuitem
            Then page navigation occurs
            And that item receives `aria-current="page"`
            And any previously selected menuitem loses `aria-current`

        Scenario: Navigating to a new page by keyboard
            Given the sidenavigation is visible
            And focus is on a menuitem without submenu
            When I press "Enter" or "Space"
            Then page navigation occurs
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

    Feature: Selecting a nested menuitem

        Scenario: Open submenu to reveal nested menuitems
            Given the SideNavigation is visible
            And the parent menuitem's submenu is collapsed
            When I activate the parent menuitem
            Then the submenu opens

        Scenario: Select nested menuitem with mouse or keyboard
            Given the submenu is open
            And the nested menuitem is visible and focusable
            When I activate the nested menuitem
            Then page navigation occurs
            And that nested menuitem receives `aria-current="page"`
            And any previously selected menuitem loses `aria-current`
            And all the parent menu item's style would change to active
            And the submenu closes

        Scenario: Return focus to parent after keyboard activation
            Given the nested menuitem was activated using keyboard
            When the submenu closes
            Then focus returns to the parent menuitem

    Feature: Re-engaging with previously selected parent

        Scenario: Parent menuitem reflects active state due to selected child
            Given a nested menuitem has `aria-current="page"`
            Then the parent menuitem visually shows active state

        Scenario: Hovering over parent menuitem shows tooltip
            Given the submenu is closed
            And a nested menuitem has `aria-current="page"`
            When I hover over the parent menuitem
            Then a tooltip appears indicating an active nested item

        Scenario: Reopen submenu from active parent menuitem
            Given the submenu is closed
            And a nested menuitem has `aria-current="page"`
            When I activate the parent menuitem
            Then the submenu reopens
            And the previously selected nested menuitem still has `aria-current="page"`
            And parent menuitem has `aria-expanded="true"`

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
            Given focus is anywhere inside the SideNavigation
            When I press `Shift+Tab`
            Then focus moves to the previous focusable element in reverse tab order

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
            Given VoiceOver focus is on 1st menubar inside the sidenavigation
            When I press `VO + →` until focus reaches the 1st menubar back again
            Then VoiceOver announces: "end of menu bar"

        Scenario: VoiceOver announces 2nd menubar inside the Sidenavigation
            Given VoiceOver focus is on sidenavigation
            When I press `VO + →`
            And focus reaches 2nd menubar inside it
            Then VoiceOver announces: "menu bar. <aria-label>, 2 items"

        Scenario: VoiceOver announces 2nd menubar menuitem
            Given VoiceOver focus is on 2nd menubar inside the sidenavigation
            When I press `VO + →`
            And focus reaches first focussable menuitem inside it
            Then VoiceOver announces: "<aria-label>, menu item, group (1 of 2)"

        Scenario: VoiceOver announces exit of 2nd menubar inside the Sidenavigation
            Given VoiceOver focus is on 2nd menubar inside the sidenavigation
            When I press `VO + →` until focus reaches the 2nd menubar back again
            Then VoiceOver announces: "end of menu bar"

        Scenario: VoiceOver announces Sidenavgation toggle button
            Given VoiceOver focus is on 2nd menubar inside the sidenavigation (end of menu bar)
            When I press `VO + →` until focus reaches sidenavgation toggle button
            Then VoiceOver announces: "<aria-label>, expanded, button"

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


