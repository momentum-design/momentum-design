import { findFocusable } from '../../utils/dom';

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

/**
 * This function helps to visually debug spatial navigation
 *
 * Press Shift + Arrow keys to inspect navigation in the given direction.
 * Pressing any other key hide the debug layer
 *
 * Legends:
 * - red rectangle - focused element
 * - blue rectangle - considered as next focusable elements
 * - white/gray dot - mid-point of the element for distance calculation, it fades based on the distance
 * - # - order number #1 will be the next focused element
 * - d - distance
 */
export const visualDebugger = (root: HTMLElement, weights: ShortestDistanceWeights): void => {
  if (document.getElementById('spatialNavigationVisualDebugger')) return;
  let lastDirection: Direction | undefined;

  const drawStar = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    outerRadius: number,
    innerRadius: number = -1,
    spikes = 5,
  ) => {
    const ir = innerRadius === -1 ? outerRadius / 2 : innerRadius;
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i += 1) {
      const r = i % 2 === 0 ? outerRadius : ir;
      const angle = (Math.PI / spikes) * i - Math.PI / 2;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'yellow';
    ctx.fill();
  };

  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  canvas.id = 'spatialNavigationVisualDebugger';

  root.appendChild(canvas);

  const draw = (direction?: Direction) => {
    lastDirection = direction;

    if (!direction) {
      canvas.hidden = true;
      return;
    }
    canvas.hidden = false;

    const currentActiveElement = document.activeElement as HTMLElement;
    const active = getElementRectWithMidPoint(currentActiveElement);
    const elements = findFocusable(root, {
      includeSelectors: [
        '[data-spatial-focusable]',
        'mdc-menuitem',
        'mdc-menuitemcheckbox',
        'mdc-menuitemradio',
        'mdc-listitem',
      ],
    });

    const results = orderElementsByDistance(currentActiveElement, elements, direction, weights);

    const ctx = canvas.getContext('2d');

    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // active
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'rgba(87,5,5,0.75)';
    ctx.strokeRect(active.x, active.y, active.width, active.height);

    ctx.font = 'bold 15px sans-serif';
    results.forEach(({ candidate, distance }, idx) => {
      const fadeOut = 1 - idx / results.length;
      const rect = getElementRectWithMidPoint(candidate);

      // Focusable items highlight
      ctx.lineWidth = 1;
      ctx.strokeStyle = idx === 0 ? 'rgba(189,151,9,0.75)' : 'rgba(8,99,134,0.75)';
      ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

      // Mid-point
      ctx.beginPath();
      ctx.arc(rect.xMid, rect.yMid, 4, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255, 255, 255, ${fadeOut})`;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = `rgba(0,0,0, ${fadeOut})`;
      ctx.stroke();

      // Legend
      const txt = `#${idx + 1}, D: ${distance.toFixed(2)} `;

      const metrics = ctx.measureText(txt);
      const textWidth = metrics.width;

      // Draw semi-transparent rectangle
      ctx.fillStyle = `rgba(0, 0, 0, ${0.8 * fadeOut})`;
      ctx.fillRect(rect.x - 10, rect.y - 25, textWidth + 20, 18);

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'black';
      ctx.strokeText(txt, rect.x, rect.y - 10);
      ctx.fillStyle = `rgba(255, 255, 255, ${fadeOut})`;
      ctx.fillText(txt, rect.x, rect.y - 10);

      // highlight the closest element
      if (idx === 0) {
        drawStar(ctx, rect.x - 10, rect.y - 15, 7.5);
      }
    });
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

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    draw(lastDirection);
  });
};
