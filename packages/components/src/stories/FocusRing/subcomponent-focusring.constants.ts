/* eslint-disable implicit-arrow-linebreak */
import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('subcomponent-focusring');

const DEFAULTS = {
  SHAPE: 'mds-button' as const,
};

const SHAPES = ['mds-button', 'mds-radio', 'mds-checkbox'];

export { DEFAULTS, TAG_NAME, SHAPES };
