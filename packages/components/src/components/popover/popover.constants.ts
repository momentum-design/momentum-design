import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('popover');

const PLACEMENT = {
  AUTO: 'auto',
  AUTO_START: 'auto-start',
  AUTO_END: 'auto-end',
  LEFT_START: 'left-start',
  LEFT: 'left',
  LEFT_END: 'left-end',
  RIGHT_START: 'right-start',
  RIGHT: 'right',
  RIGHT_END: 'right-end',
  TOP_START: 'top-start',
  TOP: 'top',
  TOP_END: 'top-end',
  BOTTOM_START: 'bottom-start',
  BOTTOM: 'bottom',
  BOTTOM_END: 'bottom-end',
} as const;

export { TAG_NAME, PLACEMENT };
