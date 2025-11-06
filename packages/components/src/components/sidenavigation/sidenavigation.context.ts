/* eslint-disable no-param-reassign */
import { createContext } from '@lit/context';

import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import type NavMenuItem from '../navmenuitem/navmenuitem.component';
import { TAG_NAME as NAVMENUITEM_TAGNAME } from '../navmenuitem/navmenuitem.constants';

import { TAG_NAME } from './sidenavigation.constants';

class SideNavigationContext {
  public variant?: string;

  public expanded?: boolean;

  private currentActiveNavMenuItem?: NavMenuItem;

  public static context = createContext<SideNavigationContext>(TAG_NAME);

  constructor(defaultVariant?: string, defaultExpanded?: boolean) {
    this.variant = defaultVariant;
    this.expanded = defaultExpanded;
  }

  public hasSiblingWithTriggerId(navMenuItem: NavMenuItem | undefined) {
    const id = navMenuItem?.getAttribute('id');
    if (!id) return false;

    const siblings = Array.from(navMenuItem?.parentElement?.children ?? []);
    return siblings.some(
      sibling =>
        sibling !== navMenuItem &&
        sibling.tagName.toLowerCase() === MENUPOPOVER_TAGNAME &&
        sibling.getAttribute('triggerid') === id,
    );
  }

  private getParentNavMenuItems(navMenuItem: NavMenuItem | undefined): NavMenuItem[] {
    if (!navMenuItem) return [];

    const parents: NavMenuItem[] = [];
    let current = navMenuItem;

    while (current) {
      // Walk up to find the menupopover
      const popover = current?.closest(MENUPOPOVER_TAGNAME);
      if (!popover) break;

      const triggerId = popover.getAttribute('triggerid');
      if (!triggerId) break;

      // Find the NavMenuItem that triggered this menupopover
      const triggeringNavMenuItem = document.getElementById(triggerId) as NavMenuItem | null;
      if (triggeringNavMenuItem && triggeringNavMenuItem.tagName.toLowerCase() === NAVMENUITEM_TAGNAME) {
        parents.push(triggeringNavMenuItem);
        current = triggeringNavMenuItem;
      } else {
        break;
      }
    }

    return parents;
  }

  public setCurrentActiveNavMenuItem(navMenuItem: NavMenuItem | undefined) {
    const isSameItem = this.currentActiveNavMenuItem?.navId === navMenuItem?.navId;
    const shouldSkip =
      navMenuItem?.cannotActivate || this.hasSiblingWithTriggerId(navMenuItem) || navMenuItem?.softDisabled;

    if (isSameItem || shouldSkip) return;

    // Clean up previous active item
    if (this.currentActiveNavMenuItem) {
      this.currentActiveNavMenuItem.removeAttribute('aria-current');
      this.currentActiveNavMenuItem.removeAttribute('active');

      const previousParents = this.getParentNavMenuItems(this.currentActiveNavMenuItem);
      previousParents.forEach(parent => {
        parent.hasActiveChild = false;
        parent.removeAttribute('active');
      });
    }

    // Apply attributes to new active item
    if (!navMenuItem) return;

    this.currentActiveNavMenuItem = navMenuItem;
    if (!navMenuItem?.disableAriaCurrent) {
      navMenuItem.setAttribute('aria-current', 'page');
    }
    navMenuItem.setAttribute('active', '');

    const newParents = this.getParentNavMenuItems(navMenuItem);
    newParents.forEach(parent => {
      parent.hasActiveChild = true;
      parent.setAttribute('active', '');
    });
  }
}

export default SideNavigationContext;
