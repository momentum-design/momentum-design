import type { TypedCustomEvent } from '../../utils/types';

import type SpatialNavigationProvider from './spatialnavigationprovider.component';

/**
 * Navigation direction actions
 */
export type Direction = 'up' | 'down' | 'left' | 'right';

export type DirectionAxis = 'horizontal' | 'vertical';

/**
 * All navigation actions
 */
export type SpatialNavigationActions = 'enter' | 'back' | Direction;

/**
 * Printable representation of the key
 * @see [KeyboardEvent: key property](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
 */
type KeyName = string;

/**
 * Map spatial navigation to printable representation of the key
 * @see [KeyboardEvent: key property](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
 */
export type SpatialNavigationKeyMapping = { [T in SpatialNavigationActions]: KeyName };

export type SpatialNavigationContextValue =
  | (SpatialNavigationKeyMapping & {
      directionKeys: KeyName[];
    })
  | undefined;

export type Rect = Omit<DOMRect, 'toJSON'>;

export type RectWithMidPoint = Rect & {
  xMid: number;
  yMid: number;
};

/**
 * Distance between 2 elements
 */
export type ElementDistance = {
  /**
   * The target element (not the active)
   */
  candidate: HTMLElement;
  /**
   * Distance between the two elements
   */
  distance: number;
};

export interface Events {
  onNavBackEvent: TypedCustomEvent<SpatialNavigationProvider, { goBackElement: HTMLElement | undefined }>;
  onNavFocusNextEvent: TypedCustomEvent<
    SpatialNavigationProvider,
    {
      direction: Direction;
      nextActiveElement: HTMLElement;
    }
  >;
}

export type ShortestDistanceWeights = {
  orthogonalWeight: Record<DirectionAxis, number>;
  alignWeight: number;
};
