Feature: NavItemList Accessibility and User Interaction

  Background:
    Given the flexible SideNavigation component is rendered on the page
    And the SideNavigation contains a scrollable section with a NavItemList containing 5 menuitems
      | Item      | Type     | State         |
      | Dashboard | menuitem | normal        |
      | Reports   | menuitem | normal        |
      | Settings  | menuitem | soft-disabled |
      | Help      | menuitem | normal        |
      | Logout    | menuitem | normal        |
    And the NavItemList has an aria-label "Main Section"
    And the SideNavigation reflects expanded or collapsed state

  Rule: ✅ Container Structure and Layout

    Scenario: Render navitemlist with multiple menuitems
      Given the navitemlist contains multiple menuitems
      When the navitemlist is rendered
      Then all menuitems should be properly organized
      And the navitemlist should maintain proper spacing and alignment
      And the navitemlist should have role="menubar"

    Scenario: Render navitemlist with mixed content
      Given the navitemlist contains menuitems, dividers, and section headers
      When the navitemlist is rendered
      Then all content should be properly displayed
      And the navitemlist structure should be maintained

  Rule: ✅ Section headers Visibility based on SideNavigation state

    Scenario: Show section headers when SideNavigation is expanded
      Given the SideNavigation is expanded
      When the NavItemList is visible
      And the NavItemList contains section headers
      Then all section headers inside the NavItemList are visible

    Scenario: Hide section headers when SideNavigation is collapsed
      Given the SideNavigation is collapsed
      When the NavItemList is visible
      And the NavItemList contains section headers
      Then all section headers inside the NavItemList are hidden

  Rule: ✅ Menuitem Selection within NavItemList

    Scenario: Selecting a menuitem by mouse click
      Given the NavItemList contains enabled menuitems
      When I click a menuitem inside the NavItemList
      Then that menuitem becomes active
      And any previously activated menuitem becomes inactive

    Scenario: Selecting a menuitem by keyboard
      Given the NavItemList contains enabled menuitems
      And focus is on a menuitem inside the NavItemList
      When I press "Enter" or "Space"
      Then that menuitem becomes active
      And any previously activated menuitem becomes inactive

    Scenario: Selecting a soft disabled menuitem does not trigger active state
      Given the NavItemList contains disabled menuitems
      When I interact with a soft disabled menuitem through mouse or keyboard
      Then the soft disabled menuitem does not become active

  Rule: ✅ Accessibility for Screen Readers

    Scenario: Default ARIA attributes for navitemlist
      Given the navitemlist is rendered
      Then the navitemlist should have role="menubar"
      And the navitemlist should inherit proper MenuBar ARIA attributes
      And the navitemlist should be focusable for keyboard navigation

    Scenario: Custom ARIA label for navitemlist
      Given the navitemlist has aria-label set to "Main Navigation"
      When the navitemlist is rendered
      Then the navitemlist should have aria-label="Main Navigation"
      And screen readers should announce the custom label
