import {
  Direction,
  ExpandedBoundingRect,
  SpatialNavigationFarEdge,
  Rect,
  RectWithMidPoint,
  RelativeElementDistance,
} from './spatialnavigationprovider.types';

const DIRECTIONS = ['left', 'right', 'up', 'down'] as const;
const FAR_EDGE_VALUES: SpatialNavigationFarEdge[] = ['none', 'horizontal', 'vertical', 'both'] as const;

const NESTED_FOCUSABLE_DIRECTION_MAP: Record<string, SpatialNavigationFarEdge> = {
  'mdc-listitem': 'horizontal',
  '.md-tree-node-base-wrapper': 'horizontal',
  'md-meeting-list-item-wrapper': 'horizontal',
};

const FOCUSABLE_ELEMENT_SELECTORS = 'a[href], button, mdc-button, input, textarea, select, details, [tabindex]';

/**
 * Returns all focusable child elements as an Element Array
 *
 * An element focusable if it:
 * - it is interactive element (anchor with href, button, input, textarea, select and details)
 * - it is not disabled
 * - it is not hidden
 * - it or any of its parents do not have `aria-hidden=true` attribute
 * - it or any of its parents do not have `data-preserve-tabindex` attribute
 * - it has "-1" tabindex
 *
 * @remarks
 * Element with 0 tabindex can be tabbed to, while elements with any tabindex value can be
 * manually focused
 *
 * @param root - Element lookup starts from this element
 */
export function getKeyboardFocusableElements<T extends HTMLElement>(root: T): Array<HTMLElement> {
  const preserveTabindexContainers = Array.from(root.querySelectorAll('[data-preserve-tabindex]'));

  // Exclude elements with `aris-hidden=true` attribute and all their children
  const ariaHiddenContainers = Array.from(root.querySelectorAll('[aria-hidden="true"]'));

  return Array.from(root.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)).filter(
    el =>
      !el.hasAttribute('disabled') &&
      el.getAttribute('hidden') === null &&
      el.getAttribute('tabindex') !== '-1' &&
      !el.hasAttribute('data-exclude-focus') &&
      // note: container.contains(container) is true
      !preserveTabindexContainers.some(p => p.contains(el)) &&
      !ariaHiddenContainers.some(p => p.contains(el)),
  ) as Array<HTMLElement>;
}

/**
 * Calculate the center point of the element
 */
export const getElementRectWithMidPoint = (element: HTMLElement): RectWithMidPoint => {
  const { x, y, width, height, left, top, right, bottom } = element.getBoundingClientRect();
  const xMid = x + width / 2;
  const yMid = y + height / 2;

  return { x, y, width, height, left, top, right, bottom, xMid, yMid };
};

/**
 * Complex components can have nested focusable items, for example
 * List or Tree nodes
 *
 * Spatial navigation can process 4 cases:
 * - none - no nested focusable item (default)
 * - horizontal - the focusable items are in a row
 * - vertical -  the focusable items are in a column
 * - both -  the focusable items are in a grid
 *
 * @param el - checked element
 */
export const getNestedFocusableDirection = (el: HTMLElement): SpatialNavigationFarEdge => {
  const farEdge = el.dataset.spatialNestedFocusableDirection as SpatialNavigationFarEdge;

  if (farEdge && FAR_EDGE_VALUES.includes(farEdge)) return farEdge;

  const key = Object.keys(NESTED_FOCUSABLE_DIRECTION_MAP).find(el.matches, el);

  if (key) return NESTED_FOCUSABLE_DIRECTION_MAP[key];

  return 'none';
};

/**
 * Calculate distance between the closest edges of the passed bounding boxes for the specified direction
 *
 * @param a - bounding box 1
 * @param b - bounding box 2
 * @param dir - direction specify which edge measured
 * @param farEdge -
 * @returns distance
 */
export const getEdgeDistance = (
  a: Rect,
  b: Rect,
  dir: Direction,
  farEdge: SpatialNavigationFarEdge = 'none',
): number => {
  if (dir === 'left') {
    if (farEdge === 'horizontal' || farEdge === 'both') {
      return a.right - b.right;
    }
    return a.left - b.right;
  }
  if (dir === 'right') {
    if (farEdge === 'horizontal' || farEdge === 'both') {
      return b.left - a.left;
    }
    return b.left - a.right;
  }
  if (dir === 'up') {
    if (farEdge === 'vertical' || farEdge === 'both') {
      return a.bottom - b.bottom;
    }
    return a.top - b.bottom;
  }
  if (dir === 'down') {
    if (farEdge === 'vertical' || farEdge === 'both') {
      return b.top - a.top;
    }
    return b.top - a.bottom;
  }
  return 0;
};

/**
 * Calculate expanded bounding boxes in all four directions with the specified size
 *
 * @param baseRect -
 * @param size -
 */
export const getExpandedRect = (baseRect: Rect, size: number): ExpandedBoundingRect =>
  DIRECTIONS.reduce((acc, dir) => {
    const x = dir === 'left' ? baseRect.x - size : baseRect.x;
    const width = dir === 'right' || dir === 'left' ? baseRect.width + size : baseRect.width;
    const y = dir === 'up' ? baseRect.y - size : baseRect.y;
    const height = dir === 'down' || dir === 'up' ? baseRect.height + size : baseRect.height;

    acc[dir] = {
      x,
      y,
      width,
      height,
      left: x,
      top: y,
      right: x + width,
      bottom: y + height,
    };
    return acc;
  }, {} as ExpandedBoundingRect);

/**
 * Rectangle overlap check
 *
 * @param a - first rectangle
 * @param b - second rectangle
 * @return `true` when the two rectangles overlap otherwise `false`
 */
export const isRectOverlap = (a: Rect, b: Rect): boolean => {
  const xOverlap = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
  const yOverlap = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  return xOverlap * yOverlap > 0;
};

/**
 * Get the relative position of the element from the active element.
 *
 * @remarks
 *  - `edgeDistance` is a distance between the closest edge of the `element` and one of active element's edge
 *     the actual edge depends on the `farEdge` parameter
 *  - `distance` is `infinite` when `element` is not in the specified `direction`
 *  - `edgeDistance` is `infinite` when the `element` does not overlap the active element's expanded bounding rect
 *     on the specified `direction`
 *  - in the return value both `edgeDistance` and `distance` are the square of the real distance
 *
 * @param element -
 * @param direction -
 * @param activeElementMidPoint -
 * @param activeElementExpandedRects -
 * @param farEdge -
 */
export const getElementRelativeDistances = (
  element: HTMLElement,
  direction: Direction,
  activeElementMidPoint: RectWithMidPoint,
  activeElementExpandedRects: ExpandedBoundingRect,
  farEdge: SpatialNavigationFarEdge,
): RelativeElementDistance => {
  const extendedBoundRect = activeElementExpandedRects[direction];
  const elementRect = getElementRectWithMidPoint(element);

  let edgeDistance = Math.round(getEdgeDistance(activeElementMidPoint, elementRect, direction, farEdge) * 1.2);

  if (edgeDistance < 0) {
    return { element, distance: Infinity, edgeDistance };
  }
  edgeDistance = isRectOverlap(elementRect, extendedBoundRect) ? edgeDistance * edgeDistance : Infinity;

  const x = elementRect.xMid - activeElementMidPoint.xMid;
  const y = elementRect.yMid - activeElementMidPoint.yMid;
  const distance = x * x + y * y;

  return { element, distance, edgeDistance };
};

/**
 * Calculate the distance of the focusable elements form the active element
 * and return the sorted list of elements based on the distance.
 * The first element is the closest.
 *
 * @param activeEl -  Active/focused Dom element
 * @param focusableElements - All focusable elements
 * @param direction - Direction of the navigation
 */
export const orderElementsByDistance = (
  activeEl: HTMLElement,
  focusableElements: HTMLElement[],
  direction: Direction,
): RelativeElementDistance[] => {
  const active = getElementRectWithMidPoint(activeEl);
  const farEdge = getNestedFocusableDirection(activeEl);
  const expandedBoundingRects = getExpandedRect(active, window.innerWidth / 2);

  return focusableElements
    .map(el => getElementRelativeDistances(el, direction, active, expandedBoundingRects, farEdge))
    .filter(({ element, edgeDistance }) => element !== activeEl && edgeDistance >= 0)
    .sort((a, b) => a.edgeDistance - b.edgeDistance || a.distance - b.distance);
};

/**
 * This function helps to visually debug spatial navigation
 *
 * Press Shift + Arrow keys to inspect navigation in the given direction.
 * Pressing any other key hide the debug layer
 *
 * Legends:
 * - red rectangle - focused element
 * - green rectangle - expanded bounding box of the focused element for edge distance calculation
 * - blue rectangle - considered as next focusable elements
 * - white/gray dot - mid-point of the element for distance calculation, it fades based on the distance
 * - # - order number #1 will be the next focused element
 * - ed - edge distance
 * - d - distance
 */
export const visualDebugger = (root = document.body): void => {
  if (document.getElementById('spatialNavigationVisualDebugger')) return;

  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.id = 'spatialNavigationVisualDebugger';

  root.appendChild(canvas);

  const draw = (direction?: Direction) => {
    if (!direction) {
      canvas.hidden = true;
      return;
    }
    canvas.hidden = false;

    const currentActiveElement = document.activeElement as HTMLElement;
    const active = getElementRectWithMidPoint(currentActiveElement);
    const expandedBoundingRects = getExpandedRect(active, window.innerWidth / 2);
    const elements = getKeyboardFocusableElements(root);

    const results = orderElementsByDistance(currentActiveElement, elements, direction);

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(8,99,134,0.75)';
    ctx.font = '15px sans-serif';
    results.forEach(({ element, edgeDistance, distance }, idx) => {
      const rect = getElementRectWithMidPoint(element);
      ctx.fillStyle = `rgba(255, 255, 255, ${1 - idx / elements.length})`;
      ctx.fillText(
        `#${idx + 1}, ed: ${Math.round(Math.sqrt(edgeDistance))} d: ${Math.round(Math.sqrt(distance))} `,
        rect.x,
        rect.y - 10,
      );
      ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

      ctx.beginPath();
      ctx.arc(rect.xMid, rect.yMid, 10, 0, 2 * Math.PI);
      ctx.fill();
    });

    const exRect = expandedBoundingRects[direction];
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(19,87,5,0.75)';
    ctx.strokeRect(exRect.x, exRect.y, exRect.width, exRect.height);

    // active
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'rgba(87,5,5,0.75)';
    ctx.strokeRect(active.x, active.y, active.width, active.height);
  };

  document.addEventListener('keydown', evt => {
    if (!evt.shiftKey || !evt.key.startsWith('Arrow')) {
      return draw();
    }

    switch (evt.key) {
      case 'ArrowLeft':
        return draw('left');
      case 'ArrowUp':
        return draw('up');
      case 'ArrowDown':
        return draw('down');
      case 'ArrowRight':
        return draw('right');
      default:
        return undefined;
    }
  });
};
