import { TAG_NAME as MENUITEM_TAGNAME } from '../menuitem/menuitem.constants';
import { TAG_NAME as MENUITEMCHECKBOX_TAGNAME } from '../menuitemcheckbox/menuitemcheckbox.constants';
import { TAG_NAME as MENUITEMRADIO_TAGNAME } from '../menuitemradio/menuitemradio.constants';

import { TAG_NAME as MENUPOPOVER_TAGNAME } from './menupopover.constants';
import type MenuItem from '../menuitem';
import type MenuPopover from './menupopover.component';

/**
 * Checks if the given menu item is a valid menu item.
 * @param menuItem - The menu item to check.
 * @returns True if the menu item is a valid menu item, false otherwise.
 */
const isValidMenuItem = (menuItem: Element | null): boolean =>
  [MENUITEM_TAGNAME, MENUITEMCHECKBOX_TAGNAME, MENUITEMRADIO_TAGNAME].includes(
    menuItem?.tagName?.toLowerCase?.() as typeof MENUITEM_TAGNAME,
  );

const isValidPopover = (el: Element | null): el is MenuPopover => el?.tagName?.toLowerCase() === MENUPOPOVER_TAGNAME;

const isActiveMenuItem = (menuItem: Element | null): menuItem is MenuItem =>
  menuItem?.tagName?.toLowerCase?.() === MENUITEM_TAGNAME && !menuItem.hasAttribute('disabled');

export { isValidMenuItem, isValidPopover, isActiveMenuItem };
