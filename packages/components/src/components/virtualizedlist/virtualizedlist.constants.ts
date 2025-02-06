import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('virtualizedlist');

const VIRTUALIZED_LIST_DEFAULTS = {
  COUNT: 0,
  ESTIMATE_SIZE: () => 0,
};

export { TAG_NAME, VIRTUALIZED_LIST_DEFAULTS };
