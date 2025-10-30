/**
 * Navigation direction actions
 */
export type Direction = 'up' | 'down' | 'left' | 'right';

export type SpatialNavigationFarEdge = 'none' | 'horizontal' | 'vertical' | 'both';

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
export type RelativeElementDistance = {
  /**
   * The target element (not the active)
   */
  element: HTMLElement;
  /**
   * Distance between the two elements
   */
  distance: number;
  /**
   * vertical or horizontal distance between 2 elements closest edges
   */
  edgeDistance: number;
};

export type ExpandedBoundingRect = Record<Direction, Rect>;
