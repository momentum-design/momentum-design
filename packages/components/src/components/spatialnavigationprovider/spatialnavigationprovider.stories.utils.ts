import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components';

import '.';
import { visualDebugger } from './spatialnavigationprovider.utils';
import { DEFAULTS } from './spatialnavigationprovider.constants';
import type { SpatialNavigationActionToKeyMap } from './spatialnavigationprovider.types';

export const spatialNavigationWrapperRenderFn = (mapping: SpatialNavigationActionToKeyMap, content: any) => {
  visualDebugger(document.body, DEFAULTS.WEIGHTS);

  return html`<style>
      mdc-spatialnavigationprovider {
        width: calc(100vw - 2rem);
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows: 1fr 8fr 1fr;
        gap: 0.5rem;
      }
      div {
        display: flex;
      }
      .snp-btn {
        width: 8rem;
        margin: auto;
      }
      .mdc-component {
        width: 100%;
      }
      .mdc-component > * {
        max-height: 500rem;
        margin: auto;
      }
    </style>

    <mdc-spatialnavigationprovider .navigationKeyMapping=${mapping}>
      <div><mdc-button class="snp-btn" variant="secondary">Top Left</mdc-button></div>
      <div><mdc-button class="snp-btn" variant="secondary">Top</mdc-button></div>
      <div><mdc-button class="snp-btn" variant="secondary">Top Right</mdc-button></div>
      <div><mdc-button class="snp-btn" variant="secondary">Left</mdc-button></div>

      <div class="mdc-component">${content}</div>

      <div><mdc-button class="snp-btn" variant="secondary">Right</mdc-button></div>
      <div><mdc-button class="snp-btn" variant="secondary">Bottom Left</mdc-button></div>
      <div><mdc-button class="snp-btn" variant="secondary">Bottom</mdc-button></div>
      <div><mdc-button class="snp-btn" variant="secondary">Bottom Right</mdc-button></div>
    </mdc-spatialnavigationprovider>`;
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
      return storyObj?.render?.(args, context);
    },
  };
};
