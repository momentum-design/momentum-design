import type { ValueOf } from '../../utils/types';
import { SKELETON_TYPES } from './skeleton.constants';

type SkeletonType = ValueOf<typeof SKELETON_TYPES>;

export type { SkeletonType };
