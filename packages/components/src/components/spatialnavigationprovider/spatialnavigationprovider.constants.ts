import utils from '../../utils/tag-name';

import { ShortestDistanceWeights, SpatialNavigationKeyMapping } from './spatialnavigationprovider.types';

export const TAG_NAME = utils.constructTagName('spatialnavigationprovider');

export const SPATIAL_NAVIGATION_DIRECTION_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export const DEFAULTS = {
  SPATIAL_NAVIGATION_KEY_MAPPING: {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    up: 'ArrowUp',
    down: 'ArrowDown',
    back: 'Escape',
    enter: 'Enter',
  } as SpatialNavigationKeyMapping,
  WEIGHTS: {
    alignWeight: 5,
    orthogonalWeight: {
      vertical: 2,
      horizontal: 30,
    },
  } as ShortestDistanceWeights,
} as const;
