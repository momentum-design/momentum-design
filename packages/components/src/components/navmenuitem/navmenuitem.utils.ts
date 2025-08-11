import { v4 } from 'uuid';

const generateNaviMenuItemId = () => `mdc-navmenuitem-${v4()}`;

const generateNaviMenuItemTooltipId = () => `mdc-navmenuitem-tooltip-${v4()}`;

export { generateNaviMenuItemId, generateNaviMenuItemTooltipId };
