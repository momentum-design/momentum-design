import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components';

import '.';
import { findFocusable, getDomActiveElement } from '../../utils/dom';

import { DEFAULTS } from './spatialnavigationprovider.constants';
import type {
  Direction,
  ShortestDistanceWeights,
  SpatialNavigationActionToKeyMap,
} from './spatialnavigationprovider.types';
import { getElementRectWithMidPoint, orderElementsByDistance } from './spatialnavigationprovider.utils';

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
export const visualDebugger = (
  root: HTMLElement,
  keyMapping: SpatialNavigationActionToKeyMap,
  weights: ShortestDistanceWeights,
): void => {
  if (document.getElementById('spatialNavigationVisualDebugger')) return;

  const directions = [keyMapping.left, keyMapping.right, keyMapping.up, keyMapping.down];
  let lastDirection: Direction | undefined;

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

    const currentActiveElement = (getDomActiveElement(document) as HTMLElement | null) || document.body;
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

    const candidates =
      currentActiveElement === document.body
        ? [{ distance: 0, candidate: elements[0] }]
        : orderElementsByDistance(currentActiveElement, elements, direction, weights);

    const ctx = canvas.getContext('2d');

    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // active
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'rgba(87,5,5,0.75)';
    ctx.strokeRect(active.x, active.y, active.width, active.height);

    ctx.font = 'bold 15px sans-serif';
    candidates.reverse().forEach(({ candidate, distance }, index) => {
      // needed to render the last item on first
      const idx = candidates.length - 1 - index;
      const fadeOut = 1 - idx / candidates.length;
      const rect = getElementRectWithMidPoint(candidate);

      // Focusable items highlight
      ctx.lineWidth = 3;
      ctx.strokeStyle = idx === 0 ? 'rgba(189,151,9,0.75)' : 'rgba(8,99,134,0.75)';
      ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

      // Mid-point
      ctx.beginPath();
      ctx.arc(rect.xMid, rect.yMid, 4, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255, 255, 255, ${fadeOut})`;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(0,0,0, ${fadeOut})`;
      ctx.stroke();

      // Legend
      const txt = `#${idx + 1}, D: ${distance.toFixed(2)} `;

      const metrics = ctx.measureText(txt);
      const textWidth = metrics.width;

      // Draw semi-transparent rectangle
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'white';
      ctx.strokeRect(rect.x - 10, rect.y - 25, textWidth + 20, 18);
      ctx.fillStyle = `rgba(0, 0, 0, ${0.8 * fadeOut})`;
      ctx.fillRect(rect.x - 10, rect.y - 25, textWidth + 20, 18);

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'black';
      ctx.strokeText(txt, rect.x, rect.y - 10);
      ctx.fillStyle = `rgba(255, 255, 255, ${fadeOut})`;
      ctx.fillText(txt, rect.x, rect.y - 10);
    });
  };

  document.addEventListener(
    'keydown',
    evt => {
      const key = evt.key.length === 1 ? evt.key.toLowerCase() : evt.key;
      if (!evt.shiftKey || !directions.includes(key)) {
        return draw();
      }
      evt.stopImmediatePropagation();
      evt.preventDefault();

      switch (key) {
        case keyMapping.left:
          return draw('left');
        case keyMapping.up:
          return draw('up');
        case keyMapping.down:
          return draw('down');
        case keyMapping.right:
          return draw('right');
        default:
          return undefined;
      }
    },
    { capture: true },
  );

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    draw(lastDirection);
  });
};

export const spatialNavigationWrapperRenderFn = (mapping: SpatialNavigationActionToKeyMap, content: any) => {
  visualDebugger(document.body, mapping, DEFAULTS.WEIGHTS);

  return html`<style>
      .mdc-snp-wrapper {
        display: flex;
        height: 100%;
      }
      mdc-spatialnavigationprovider {
        width: 100vmin;
        aspect-ratio: 16/9;
        margin: auto;
        display: grid;
        grid-template-columns: 150px 1fr 150px;
        grid-template-rows: 54px 1fr 54px;
        gap: 0.5rem;
        box-shadow:
          0 2px 10px rgba(0, 0, 0, 0.5),
          0 2px 3px rgba(0, 0, 0, 0.5);
        border: 2px solid var(--mds-color-theme-background-solid-quaternary-normal);
        border-radius: 3px;
      }
      mdc-spatialnavigationprovider > div {
        display: flex;
      }
      .snp-btn {
        margin: auto;
        width: 130px;
      }
      .snp-component-container {
        width: calc(100% - 0.5rem);
        overflow: auto;
        padding: 0.25rem;
      }
      .snp-component-container > :not(.dialog-backdrop) {
        max-height: 40vmin;
        margin: auto !important;
      }
    </style>

    <div class="mdc-snp-wrapper">
      <mdc-spatialnavigationprovider .navigationKeyMapping=${mapping}>
        <div><mdc-button class="snp-btn" variant="secondary">Top Left</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Top</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Top Right</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Left</mdc-button></div>

        <div class="snp-component-container">${content}</div>

        <div><mdc-button class="snp-btn" variant="secondary">Right</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Bottom Left</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Bottom</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Bottom Right</mdc-button></div>
      </mdc-spatialnavigationprovider>
    </div>`;
};

/**
 * Renders a 3x3 grid layout with buttons surrounding the provided template or component.
 *
 * @param storyObj - original Storybook story object.
 * @returns storybook object where the render function wrapped with spatial navigation layout.
 */
export const spatialNavigationStoryWrapper = (storyObj: StoryObj): StoryObj => {
  const mapping = {
    up: 'w',
    down: 's',
    left: 'a',
    right: 'd',
    enter: 'e',
    escape: 'q',
  };

  return {
    ...storyObj,
    render: (args, context) => {
      if (context.globals.spatialNavigation === 'disabled') {
        return spatialNavigationWrapperRenderFn(mapping, storyObj?.render?.(args, context));
      }
      return storyObj?.render?.(args, context) ?? '';
    },
  };
};
