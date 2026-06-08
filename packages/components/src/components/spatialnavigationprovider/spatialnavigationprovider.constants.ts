import utils from '../../utils/tag-name';

import { ShortestDistanceWeights, SpatialNavigationActionToKeyMap } from './spatialnavigationprovider.types';

export const TAG_NAME = utils.constructTagName('spatialnavigationprovider');

export const SPATIAL_NAVIGATION_DIRECTION_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export const DATA_ATTRIBUTES = {
  DIRECTION_LEFT: 'data-spatial-left',
  DIRECTION_RIGHT: 'data-spatial-right',
  DIRECTION_UP: 'data-spatial-up',
  DIRECTION_DOWN: 'data-spatial-down',
  GO_BACK: 'data-spatial-go-back',
  FOCUSABLE: 'data-spatial-focusable',
  EXCLUDE: 'data-spatial-exclude',
  NO_SCROLL: 'data-spatial-noscroll',
  SCROLL_PARENT: 'data-spatial-scroll-parent',
};

export const DEFAULTS = {
  SPATIAL_NAVIGATION_KEY_MAPPING: {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    up: 'ArrowUp',
    down: 'ArrowDown',
    escape: 'Escape',
    enter: 'Enter',
  } as SpatialNavigationActionToKeyMap,
  WEIGHTS: {
    alignWeight: 5,
    orthogonalWeight: {
      vertical: 2,
      horizontal: 30,
    },
  } as ShortestDistanceWeights,
} as const;
