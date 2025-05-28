import { createContext } from '@lit/context';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import type NavItem from '../navitem/navitem.component';
import { TAG_NAME as NAVITEM_TAGNAME } from '../navitem/navitem.constants';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { TAG_NAME } from './sidenavigation.constants';

class SideNavigationContext {
  public variant?: string;

  public customerName?: string;

  public expanded?: boolean;

  private currentActiveNavItem?: NavItem;

  public parentNavTooltipText?: string;

  public static context = createContext<SideNavigationContext>(TAG_NAME);

  constructor(
    defaultVariant?: string,
    defaultCustomerName?: string,
    defaultExpanded?: boolean,
    defaultParentNavTooltipText?: string,
  ) {
    this.variant = defaultVariant;
    this.customerName = defaultCustomerName;
    this.expanded = defaultExpanded;
    this.parentNavTooltipText = defaultParentNavTooltipText;
  }

  public hasSiblingWithTriggerId(navItem: NavItem | undefined) {
    const id = navItem?.getAttribute('id');
    if (!id) return false;

    const siblings = Array.from(navItem?.parentElement?.children ?? []);
    return siblings.some((sibling) =>
      sibling !== navItem
    && sibling.tagName.toLowerCase() === MENUPOPOVER_TAGNAME
    && sibling.getAttribute('triggerid') === id);
  }

  private getParentNavItems(navItem: NavItem | undefined): NavItem[] {
    if (!navItem) return [];

    const parents: NavItem[] = [];
    let current = navItem;

    while (current) {
      // Walk up to find the menupopover
      const popover = current?.closest(MENUPOPOVER_TAGNAME);
      if (!popover) break;

      const triggerId = popover.getAttribute('triggerid');
      if (!triggerId) break;

      // Find the NavItem that triggered this menupopover
      const triggeringNavItem = document.getElementById(triggerId) as NavItem | null;
      if (triggeringNavItem && triggeringNavItem.tagName.toLowerCase() === NAVITEM_TAGNAME) {
        parents.push(triggeringNavItem);
        current = triggeringNavItem;
      } else {
        break;
      }
    }

    return parents;
  }

  public setCurrentActiveNavItem(navItem: NavItem | undefined) {
    const shouldSkip = navItem?.noAriaCurrent || this.hasSiblingWithTriggerId(navItem);

    if (this.currentActiveNavItem?.navId === navItem?.navId || shouldSkip) {
      return;
    }

    this.currentActiveNavItem?.removeAttribute('aria-current');
    this.currentActiveNavItem?.removeAttribute('active');
    const parents = this.getParentNavItems(this.currentActiveNavItem);
    parents.forEach((parent) => {
      parent.removeAttribute('tooltip-text');
      parent.removeAttribute('active');
    });

    if (navItem) {
      this.currentActiveNavItem = navItem;
      navItem.setAttribute('aria-current', 'page');
      navItem.setAttribute('active', '');
      const parents = this.getParentNavItems(navItem);
      parents.forEach((parent) => {
        parent.setAttribute('tooltip-text', this.parentNavTooltipText || '');
        parent.setAttribute('tooltip-placement', POPOVER_PLACEMENT.BOTTOM);
        parent.setAttribute('active', '');
      });
    }
  }
}

export default SideNavigationContext;
