import type { NavBackEvent, NavBeforeFocusEvent, NavBeforeProcessEvent } from './spatialnavigationprovider.events';

/**
 * Navigation direction actions
 */
export type Direction = 'up' | 'down' | 'left' | 'right';

export type DirectionAxis = 'horizontal' | 'vertical';

/**
 * All navigation actions
 */
export type SpatialNavigationActions = 'enter' | 'escape' | Direction;

/**
 * Printable representation of the key
 * @see [KeyboardEvent: key property](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
 */
type KeyName = string;

/**
 * Map spatial navigation to printable representation of the key
 * @see [KeyboardEvent: key property](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
 */
export type SpatialNavigationActionToKeyMap = { [T in SpatialNavigationActions]: KeyName };

/**
 * Map key name to navigation action
 */
export type SpatialNavigationKeyToActionMap = Record<KeyName, SpatialNavigationActions>;

/** Spatial navigation values sheared via context */
export type SpatialNavigationContextValue =
  | {
      /** Map navigation actions to keys */
      actionToKeyMap: SpatialNavigationActionToKeyMap;
      /** Map keys to navigation actions */
      keyToActionMap: SpatialNavigationKeyToActionMap;
    }
  | undefined;

/** Simplified DOMRect without toJSON method */
export type Rect = Omit<DOMRect, 'toJSON'>;

/**
 * Element rectangle with center point coordinates
 */
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

/**
 * Weights used in the distance calculation algorithm
 * @see https://www.w3.org/TR/css-nav-1/#find-the-shortest-distance
 */
export type ShortestDistanceWeights = {
  orthogonalWeight: Record<DirectionAxis, number>;
  alignWeight: number;
};

export interface Events {
  onNavBackEvent: NavBackEvent;
  onNavBeforeProcessEvent: NavBeforeProcessEvent;
  onNavBeforeFocusEvent: NavBeforeFocusEvent;
}

declare global {
  interface GlobalEventHandlersEventMap {
    navback: NavBackEvent;
    navbeforeprocess: NavBeforeProcessEvent;
    navbeforefocus: NavBeforeFocusEvent;
  }
}
