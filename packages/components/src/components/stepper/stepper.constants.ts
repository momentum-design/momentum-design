import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('stepper');

const ORIENTATION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

const STATUS = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'in-progress',
  NOT_STARTED: 'not-started',
} as const;

const DEFAULT = {
  ORIENTATION: ORIENTATION.HORIZONTAL,
  STATUS: STATUS.NOT_STARTED,
};
export { TAG_NAME, ORIENTATION, STATUS, DEFAULT };
