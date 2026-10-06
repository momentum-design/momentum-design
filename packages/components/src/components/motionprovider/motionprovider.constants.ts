import utils from '../../utils/tag-name';

import type { MotionMode } from './motionprovider.types';

const TAG_NAME = utils.constructTagName('motionprovider');

const MOTION_SCOPE_CLASSES = ['mds-motion', 'mds-animation'] as const;
const MOTION_MODE_CLASSES = {
  full: ['mds-motion-full', 'mds-animation-full'],
  reduce: ['mds-motion-reduce', 'mds-animation-reduce'],
  system: [],
} as const satisfies Record<MotionMode, readonly string[]>;

const DEFAULTS = {
  MOTION: 'full' as const satisfies MotionMode,
} as const;

const VALID_MOTION_VALUES: MotionMode[] = ['full', 'reduce', 'system'];

export { DEFAULTS, MOTION_MODE_CLASSES, MOTION_SCOPE_CLASSES, TAG_NAME, VALID_MOTION_VALUES };
