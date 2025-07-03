import { ROLE } from '../../utils/roles';

import { TAG_NAME as MENUPOPOVER_TAGNAME } from './menupopover.constants';

/**
 * Checks if the given menu item is a valid menu item.
 * @param menuItem - The menu item to check.
 * @returns True if the menu item is a valid menu item, false otherwise.
 */
const isValidMenuItem = (el: Element | null): boolean => {
  if (!el) return false;
  const role = el.getAttribute('role')?.toLowerCase();
  return role === ROLE.MENUITEM || role === ROLE.MENUITEMCHECKBOX || role === ROLE.MENUITEMRADIO;
};

const isValidPopover = (menuItem: Element | null): boolean => menuItem?.tagName?.toLowerCase() === MENUPOPOVER_TAGNAME;

const isActiveMenuItem = (el: Element | null): boolean => {
  const role = el?.getAttribute('role')?.toLowerCase();
  return !!el && (role === ROLE.MENUITEM) && !el.hasAttribute('disabled');
};

export { isValidMenuItem, isValidPopover, isActiveMenuItem };

