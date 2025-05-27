import { createContext } from '@lit/context';
import { TAG_NAME } from './sidenavigation.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import type NavItem from '../navitem/navitem.component';

class SideNavigationContext {
  public variant?: string;

  public customerName?: string;

  public expanded?: boolean;

  private currentActiveNavItem?: NavItem;

  public static context = createContext<SideNavigationContext>(TAG_NAME);

  constructor(
    defaultVariant?: string,
    defaultCustomerName?: string,
    defaultExpanded?: boolean,
  ) {
    this.variant = defaultVariant;
    this.customerName = defaultCustomerName;
    this.expanded = defaultExpanded;
  }

  public hasSiblingWithTriggerId(navItem: NavItem) {
    const id = navItem.getAttribute('id');
    if (!id) return false;
    const siblings = Array.from(navItem.parentElement?.children || []);
    return siblings.some((sibling) =>
      sibling !== navItem
      && sibling.tagName.toLowerCase() === MENUPOPOVER_TAGNAME
      && sibling.getAttribute('triggerid') === id);
  }

  public setCurrentActiveNavItem(navItem: NavItem | undefined) {
    const shouldSkip = navItem?.noAriaCurrent || this.hasSiblingWithTriggerId(navItem);

    if (this.currentActiveNavItem?.navId === navItem?.navId || shouldSkip) {
      return;
    }

    this.currentActiveNavItem?.removeAttribute('aria-current');
    this.currentActiveNavItem?.removeAttribute('active');

    if (navItem) {
      this.currentActiveNavItem = navItem;
      navItem.setAttribute('aria-current', 'page');
      navItem.setAttribute('active', '');
    }
  }
}

export default SideNavigationContext;
