import { html } from 'lit';

import '../../../src/components/spatialnavigationprovider';
import { spatialNavigationWrapperRenderFn } from '../../../src/components/spatialnavigationprovider/spatialnavigationprovider.stories.utils';

const MAPPING_ARROWS = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  enter: 'Enter',
  escape: 'Escape',
};

const MAPPING_AWSD = {
  up: 'w',
  down: 's',
  left: 'a',
  right: 'd',
  enter: 'e',
  escape: 'q',
};

export const withSpatialNavigationProvider = (story, context) => {
  /** @type string */
  const state = context.globals.spatialNavigation;
  const spatialNavEnabled = state !== 'disabled';

  if (spatialNavEnabled) {
    const mapping = state.includes('arrows') ? MAPPING_ARROWS : MAPPING_AWSD;
    const hasWrapper = state.includes('Wrapper');

    if (hasWrapper) {
      return spatialNavigationWrapperRenderFn(mapping, story());
    }
    return html` <mdc-spatialnavigationprovider id="spatial-navigation-provider" .navigationKeyMapping=${mapping}>
      ${story()}
    </mdc-spatialnavigationprovider>`;
  }
  return story();
};
