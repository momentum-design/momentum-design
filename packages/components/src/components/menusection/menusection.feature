Feature: MenuSection Accessibility and Grouping

  Background:
    Given a Menu is rendered with a MenuSection
    Then the MenuSection should have role="group"
    And it should be properly labeled for screen readers

  Rule: ✅ Basic Structure

    Scenario: Default state
      Given a MenuSection is rendered
      Then it should be accessible
      And it should not have a header by default
      And it should be able to contain menu items

    Scenario: With header text
      Given a MenuSection is rendered with header-text="Section Title"
      Then it should display "Section Title" as the header
      And the header should have appropriate styling

  Rule: ✅ Grouping Behavior

    Scenario: Grouping menu items
      Given a MenuSection containing multiple menu items
      Then it should visually group the items together
      And it should maintain proper spacing and borders around the group

    Scenario: With radio button items
      Given a MenuSection containing multiple MenuItemRadio items with the same name
      When I select a MenuItemRadio in the section
      Then it should maintain single-selection behavior within the section
      And it should not affect MenuItemRadio items in other sections

    Scenario: With checkbox items
      Given a MenuSection containing multiple MenuItemCheckbox items
      When I interact with a MenuItemCheckbox in the section
      Then it should not affect other MenuItemCheckbox items
      And each checkbox should maintain its own state

  Rule: ✅ Accessibility

    Scenario: Screen reader support
      Given a MenuSection with header-text="Options"
      Then screen readers should announce the section header
      And the relationship between the header and menu items should be clear

    Scenario: Keyboard navigation
      Given a MenuSection containing multiple focusable menu items
      When navigating with keyboard (up/down keys)
      Then focus should move sequentially through all items in the section
      And the section header should not be focusable
