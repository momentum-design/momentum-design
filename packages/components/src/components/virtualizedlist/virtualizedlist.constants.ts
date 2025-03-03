import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('virtualizedlist');
const VIRTUALIZED_WRAPPER_TAG_NAME = utils.constructTagName('virtualizedwrapper');

const DEFAULTS = {
  VIRTUALIZER_PROPS: {
    count: 0,
    estimateSize: () => 0,
  },
};

export { TAG_NAME, DEFAULTS, VIRTUALIZED_WRAPPER_TAG_NAME };
