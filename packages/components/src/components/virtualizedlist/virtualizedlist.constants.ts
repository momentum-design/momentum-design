import utils from '../../utils/tag-name';

export const TAG_NAME = utils.constructTagName('virtualizedlist');
export const VIRTUALIZED_WRAPPER_TAG_NAME = utils.constructTagName('virtualizedwrapper');
export const DEFAULTS = {
  VIRTUALIZER_PROPS: {
    count: 0,
    estimateSize: () => 0,
    getItemKey: (index: number) => index,
  },
  LOOP: 'false',
  SCROLL_ANCHORING: false,
  IS_AT_BOTTOM_THRESHOLD: 16,
} as const;
