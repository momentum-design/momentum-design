import type {
  Direction,
  RectWithMidPoint,
  DirectionAxis,
  ElementDistance,
  ShortestDistanceWeights,
} from './spatialnavigationprovider.types';

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
 * The degree of displacement in dir between the reference and the candidate
 * @param ref - Focused element
 * @param candidate - Next possible focused element
 * @param dirAxis - Direction axis (horizontal or vertical)
 */
const orthogonalDisplacement = (ref: RectWithMidPoint, candidate: RectWithMidPoint, dirAxis: DirectionAxis): number =>
  dirAxis === 'horizontal' ? Math.abs(candidate.yMid - ref.yMid) : Math.abs(candidate.xMid - ref.xMid);

/**
 * The bias to be added to the displacement in the direction orthogonal to dir
 *
 * @param ref - Focused element
 * @param dirAxis - Direction axis (horizontal or vertical)
 */
const orthogonalBias = (ref: RectWithMidPoint, dirAxis: DirectionAxis): number =>
  dirAxis === 'horizontal' ? ref.height / 2 : ref.width / 2;

/**
 * The size of the overlap between the reference and the candidate in the direction orthogonal to dir
 * @param ref - Focused element
 * @param candidate - Next possible focused element
 * @param dirAxis - Direction axis (horizontal or vertical)
 */
const overlap = (ref: RectWithMidPoint, candidate: RectWithMidPoint, dirAxis: DirectionAxis): number =>
  dirAxis === 'horizontal'
    ? Math.max(0, Math.min(ref.bottom, candidate.bottom) - Math.max(ref.top, candidate.top))
    : Math.max(0, Math.min(ref.right, candidate.right) - Math.max(ref.left, candidate.left));

/**
 * The alignment bias based on the overlap size
 * @param ref - Focused element
 * @param dirAxis - Direction axis (horizontal or vertical)
 * @param overlap - Overlap size
 */
const alignBias = (ref: RectWithMidPoint, dirAxis: DirectionAxis, overlap: number) =>
  dirAxis === 'horizontal' ? overlap / ref.height : overlap / ref.width;

/**
 * https://www.w3.org/TR/css-nav-1/#find-the-shortest-distance
 *
 * @param ref - Focused element
 * @param candidate - Next possible focused element
 * @param dirAxis - Direction axis (horizontal or vertical)
 * @param weights - Weights for the distance calculation
 */
const findTheShortestDistance = (
  ref: RectWithMidPoint,
  candidate: RectWithMidPoint,
  dirAxis: DirectionAxis,
  weights: ShortestDistanceWeights,
): number => {
  const dx = candidate.xMid - ref.xMid;
  const dy = candidate.yMid - ref.yMid;
  const euclideanDistance = Math.sqrt(dx * dx + dy * dy);

  const displacement =
    orthogonalDisplacement(ref, candidate, dirAxis) + orthogonalBias(ref, dirAxis) * weights.orthogonalWeight[dirAxis];

  const overlapSize = overlap(ref, candidate, dirAxis);

  const alignment = alignBias(ref, dirAxis, overlapSize) * weights.alignWeight;

  return euclideanDistance + displacement - alignment - Math.sqrt(overlapSize);
};

/**
 * Order focusable elements by distance from the active element in the given direction
 *
 * @param activeElement - Currently focused element
 * @param focusableElements - All focusable elements within the spatial navigation scope
 * @param direction - Navigation direction (up, down, left, right)
 * @param weights - Weights for the distance calculation
 * @returns Ordered array of focusable elements with their distance from the active element
 */
export const orderElementsByDistance = (
  activeElement: HTMLElement,
  focusableElements: HTMLElement[],
  direction: Direction,
  weights: ShortestDistanceWeights,
): Array<ElementDistance> => {
  // No other focusable elements
  if (!activeElement || focusableElements.length === 0) return [];

  // Only one focusable element
  if (focusableElements.length === 1) {
    return focusableElements[0] === activeElement ? [] : [{ candidate: focusableElements[0], distance: 0 }];
  }
  const reference = getElementRectWithMidPoint(activeElement);
  const dirAxis: DirectionAxis = direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical';

  return focusableElements
    .reduce((acc, candidate) => {
      // Skip the active element
      if (candidate === activeElement) return acc;

      const cr = getElementRectWithMidPoint(candidate);
      // Filter out elements that are not in the navigation direction
      if (direction === 'left' && cr.right > reference.xMid) return acc;
      if (direction === 'right' && cr.left < reference.xMid) return acc;
      if (direction === 'up' && cr.bottom > reference.yMid) return acc;
      if (direction === 'down' && cr.top < reference.yMid) return acc;

      // Calculate distance
      const distance = findTheShortestDistance(reference, cr, dirAxis, weights);
      acc.push({ candidate, distance });
      return acc;
    }, [] as ElementDistance[])
    .sort((a, b) => a.distance - b.distance);
};
