import { createContext } from '@lit/context';

import { TAG_NAME } from './sidenavigation.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import type NavItem from '../navitem/navitem.component.ts';

class SideNavigationContext {
  public variant?: string;

  public customerName?: string;

  public expanded?: boolean;

  public static context = createContext<SideNavigationContext>(TAG_NAME);

  public hasSiblingWithTriggerId(navItem: NavItem) {
    const id = navItem.getAttribute('id');
    if (!id) return false;
    const siblings = Array.from(navItem.parentElement?.children || []);
    return siblings.some((sibling) =>
      sibling !== navItem
      && sibling.tagName.toLowerCase() === MENUPOPOVER_TAGNAME
      && sibling.getAttribute('triggerid') === id);
  }

  // Constructor to allow setting default values
  constructor(
    defaultVariant?: string,
    defaultCustomerName?: string,
    defaultExpanded?: boolean,
  ) {
    this.variant = defaultVariant;
    this.customerName = defaultCustomerName;
    this.expanded = defaultExpanded;
  }
}

export default SideNavigationContext;
