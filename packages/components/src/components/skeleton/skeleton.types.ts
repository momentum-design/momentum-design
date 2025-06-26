import type { ValueOf } from '../../utils/types';

import { SKELETON_VARIANTS } from './skeleton.constants';

type SkeletonVariant = ValueOf<typeof SKELETON_VARIANTS>;

export type { SkeletonVariant };
