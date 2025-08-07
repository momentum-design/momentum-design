import { ROLE } from '../../utils/roles';

import { TAG_NAME as MENUPOPOVER_TAGNAME } from './menupopover.constants';
import type MenuPopover from './menupopover.component';

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

export { isValidMenuItem, isValidMenuPopover };
