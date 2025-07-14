import { v4 as uuidv4 } from 'uuid';

const generateTooltipId = () => `listitem-tooltip-popover-${uuidv4()}`;

const generateNewListItemId = () => `listitem-tooltip-triggerid-${uuidv4()}`;

export { generateTooltipId, generateNewListItemId };
