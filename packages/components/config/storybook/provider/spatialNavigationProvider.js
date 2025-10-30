import { html } from 'lit';
import '../../../src/components/spatialnavigationprovider';

const MAPPING_ARROWS = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  enter: 'Enter',
  back: 'Escape',
};

const MAPPING_AWSD = {
  up: 'w',
  down: 's',
  left: 'a',
  right: 'd',
  enter: 'e',
  back: 'q',
};

export const withSpatialNavigationProvider = (story, context) => {
  const state = context.globals.spatialNavigation;
  const spatialNavEnabled = state !== 'disabled';

  if (spatialNavEnabled) {
    const mapping = state === 'arrows' ? MAPPING_ARROWS : MAPPING_AWSD;

    return html` <mdc-spatialnavigationprovider id="spatial-navigation-provider" .navigationKeyMapping=${mapping}>
      ${story()}
    </mdc-spatialnavigationprovider>`;
  }
  return story();
};
