import { ROLE } from '../../utils/roles';
import { TAG_NAME as NAVMENUITEM_TAGNAME } from '../navmenuitem/navmenuitem.constants';
import { TAG_NAME as MENUITEM_TAGNAME } from '../menuitem/menuitem.constants';
import { DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import type { PopoverPlacement } from '../popover/popover.types';

import { TAG_NAME as MENUPOPOVER_TAGNAME } from './menupopover.constants';
import type MenuPopover from './menupopover.component';

const isSubmenuTriggerTag = (tagName: string): boolean =>
  tagName === MENUITEM_TAGNAME || tagName === NAVMENUITEM_TAGNAME;

/**
 * Checks if the given menu item is a valid menu item.
 * @param menuItem - The menu item to check.
 * @returns True if the menu item is a valid menu item, false otherwise.
 */
const isValidMenuItem = (menuItem: Element | null): boolean => {
  if (!menuItem) return false;
  const role = menuItem.getAttribute('role')?.toLowerCase();
  return role === ROLE.MENUITEM || role === ROLE.MENUITEMCHECKBOX || role === ROLE.MENUITEMRADIO;
};

const isValidMenuPopover = (el: Element | null): el is MenuPopover =>
  el?.tagName?.toLowerCase() === MENUPOPOVER_TAGNAME;

const getPlacementSide = (placement: PopoverPlacement): string => placement.split('-')[0];

const getParentPanelInset = (parentMenuPopover: Element, side: string): number => {
  const contentEl = parentMenuPopover.shadowRoot?.querySelector('[part="popover-content"]') as HTMLElement | null;
  if (!contentEl) return 0;

  const contentStyles = getComputedStyle(contentEl);
  const hostStyles = getComputedStyle(parentMenuPopover as HTMLElement);

  switch (side) {
    case 'right':
      return (
        parseFloat(contentStyles.paddingInlineEnd || contentStyles.paddingRight) +
        parseFloat(hostStyles.borderInlineEndWidth || hostStyles.borderRightWidth)
      );
    case 'left':
      return (
        parseFloat(contentStyles.paddingInlineStart || contentStyles.paddingLeft) +
        parseFloat(hostStyles.borderInlineStartWidth || hostStyles.borderLeftWidth)
      );
    case 'bottom':
      return (
        parseFloat(contentStyles.paddingBlockEnd || contentStyles.paddingBottom) +
        parseFloat(hostStyles.borderBlockEndWidth || hostStyles.borderBottomWidth)
      );
    case 'top':
      return (
        parseFloat(contentStyles.paddingBlockStart || contentStyles.paddingTop) +
        parseFloat(hostStyles.borderBlockStartWidth || hostStyles.borderTopWidth)
      );
    default:
      return 0;
  }
};

/**
 * Computes the offset needed for a submenu to sit `panelGap` px away from its parent menu panel edge.
 * Returns null when the trigger is not a nested submenu (non-menu-item trigger or no parent menupopover).
 */
const calculateSubmenuOffset = (
  triggerElement: HTMLElement,
  placement: PopoverPlacement,
  panelGap = POPOVER_DEFAULTS.OFFSET,
): number | null => {
  if (!isSubmenuTriggerTag(triggerElement.tagName.toLowerCase())) {
    return null;
  }

  const parentMenuPopover = triggerElement.closest(MENUPOPOVER_TAGNAME);
  if (!parentMenuPopover) {
    return null;
  }

  return getParentPanelInset(parentMenuPopover, getPlacementSide(placement)) + panelGap;
};

export { isValidMenuItem, isValidMenuPopover, calculateSubmenuOffset };
