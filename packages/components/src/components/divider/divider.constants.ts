import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('divider');

const DIVIDER_TYPE_INTERNAL = {
    PRIMARY: 'primary',
    TEXT: 'text',
    GRABBER_BUTTON: 'grabber-button'
  } as const;

  const DIVIDER_ORIENTATION = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical'
  } as const;

  const DIVIDER_VARIANT = {
    SOLID: 'solid',
    GRADIENT: 'gradient',
  } as const;

  const DIVIDER_ARROW_DIRECTION = {
    POSITIVE: 'positive',
    NEGATIVE: 'negative',
  } as const;

  const DEFAULTS = {
    TYPE_INTERNAL: DIVIDER_TYPE_INTERNAL.PRIMARY,
    ORIENTATION: DIVIDER_ORIENTATION.HORIZONTAL,
    VARIANT: DIVIDER_VARIANT.SOLID,
    ARROW_DIRECTION: DIVIDER_ARROW_DIRECTION.POSITIVE
  } as const;

export { TAG_NAME, DEFAULTS, DIVIDER_TYPE_INTERNAL, DIVIDER_VARIANT, DIVIDER_ORIENTATION, DIVIDER_ARROW_DIRECTION };
