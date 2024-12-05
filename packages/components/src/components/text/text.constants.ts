import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('text');

const TYPE = {
  BODY_SMALL_REGULAR: 'body-small-regular',
  BODY_SMALL_MEDIUM: 'body-small-medium',
  BODY_SMALL_BOLD: 'body-small-bold',
  BODY_MIDSIZE_REGULAR: 'body-midsize-regular',
  BODY_MIDSIZE_MEDIUM: 'body-midsize-medium',
  BODY_MIDSIZE_BOLD: 'body-midsize-bold',
  BODY_LARGE_REGULAR: 'body-large-regular',
  BODY_LARGE_MEDIUM: 'body-large-medium',
  BODY_LARGE_BOLD: 'body-large-bold',
  BODY_SMALL_REGULAR_UNDERLINE: 'body-small-regular-underline',
  BODY_SMALL_MEDIUM_UNDERLINE: 'body-small-medium-underline',
  BODY_MIDSIZE_REGULAR_UNDERLINE: 'body-midsize-regular-underline',
  BODY_MIDSIZE_MEDIUM_UNDERLINE: 'body-midsize-medium-underline',
  BODY_LARGE_REGULAR_UNDERLINE: 'body-large-regular-underline',
  BODY_LARGE_MEDIUM_UNDERLINE: 'body-large-medium-underline',
  HEADING_SMALL_REGULAR: 'heading-small-regular',
  HEADING_SMALL_MEDIUM: 'heading-small-medium',
  HEADING_SMALL_BOLD: 'heading-small-bold',
  HEADING_MIDSIZE_REGULAR: 'heading-midsize-regular',
  HEADING_MIDSIZE_MEDIUM: 'heading-midsize-medium',
  HEADING_MIDSIZE_BOLD: 'heading-midsize-bold',
  HEADING_LARGE_REGULAR: 'heading-large-regular',
  HEADING_LARGE_MEDIUM: 'heading-large-medium',
  HEADING_LARGE_BOLD: 'heading-large-bold',
  HEADING_XLARGE_REGULAR: 'heading-xlarge-regular',
  HEADING_XLARGE_MEDIUM: 'heading-xlarge-medium',
  HEADING_XLARGE_BOLD: 'heading-xlarge-bold',
  HEADLINE_SMALL_LIGHT: 'headline-small-light',
  HEADLINE_SMALL_REGULAR: 'headline-small-regular',
} as const;

const VALID_TEXT_TAGS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
  SMALL: 'small',
  SPAN: 'span',
  DIV: 'div',
} as const;

const DEFAULTS = {
  TYPE: TYPE.BODY_LARGE_REGULAR,
  TEXT_ELEMENT_TAGNAME: VALID_TEXT_TAGS.P,
  CSS_PART_TEXT: 'text',
  CHILDREN: 'The quick brown fox jumps over the lazy dog',
} as const;

export { TAG_NAME, DEFAULTS, TYPE, VALID_TEXT_TAGS };
