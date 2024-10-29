import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('subcomponent-focusring');

const DEFAULTS = {
  SHAPE: 'button' as const,
};

const SHAPES = ['button', 'radio', 'checkbox'];

export { DEFAULTS, TAG_NAME, SHAPES };
