import utils from '../../utils/tag-name';

import type { MotionMode } from './motionprovider.types';

const TAG_NAME = utils.constructTagName('motionprovider');

const MOTION_SCOPE_CLASSES = ['mds-motion', 'mds-animation'] as const;

const DEFAULTS = {
  MOTION: 'full' as const satisfies MotionMode,
} as const;

const VALID_MOTION_VALUES: MotionMode[] = ['full', 'reduce', 'system'];

export { DEFAULTS, MOTION_SCOPE_CLASSES, TAG_NAME, VALID_MOTION_VALUES };
