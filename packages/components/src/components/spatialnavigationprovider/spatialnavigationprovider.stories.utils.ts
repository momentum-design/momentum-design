import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components';

import '.';
import { visualDebugger } from './spatialnavigationprovider.utils';

/**
 * Renders a 3x3 grid layout with buttons surrounding the provided template or component.
 *
 * @param storyObj - original Storybook story object.
 * @returns storybook object where the render function wrapped with spatial navigation layout.
 */
export const spatialNavigationStoryWrapper = (storyObj: StoryObj): StoryObj => {
  const render: StoryObj['render'] = (...args) => {
    visualDebugger();

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
        .mdc-component > * {
          max-height: 500rem;
          margin: auto;
        }
      </style>

      <mdc-spatialnavigationprovider>
        <div><mdc-button class="snp-btn" variant="secondary">Top Left</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Top</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Top Right</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Left</mdc-button></div>

        <div class="mdc-component">${storyObj?.render?.(...args)}</div>

        <div><mdc-button class="snp-btn" variant="secondary">Right</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Bottom Left</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Bottom</mdc-button></div>
        <div><mdc-button class="snp-btn" variant="secondary">Bottom Right</mdc-button></div>
      </mdc-spatialnavigationprovider>`;
  };

  return {
    ...storyObj,
    render,
    parameters: {
      docs: {
        description: {
          story: html`Use the <kbd>arrow keys</kbd> to move focus between the components. Use
            <kbd>Shift+Arrow keys</kbd>to show visual debugger.`,
        },
      },
    },
  };
};
