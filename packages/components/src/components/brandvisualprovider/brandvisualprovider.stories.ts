import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../brandvisual';
import './brandvisualprovider.stories.utils';
import { html } from 'lit';

import { hideControls } from '../../../config/storybook/utils';

import { ALLOWED_FILE_EXTENSIONS } from './brandvisualprovider.constants';

const render = (args: Args) => html`
  <mdc-brandvisualprovider
    url=${args.url}
    brand-visual-set=${args['brand-visual-set']}
    file-extension=${args['file-extension']}
    cache-strategy=${args['cache-strategy']}
    cache-name=${args['cache-name']}
  >
    <mdc-subcomponent-brandvisual brand-visual-name=${args['brand-visual-name']}></mdc-subcomponent-brandvisual>
  </mdc-brandvisualprovider>
`;

const meta: Meta = {
  title: 'Providers/Brand Visual Provider',
  tags: ['autodocs'],
  component: 'mdc-brandvisualprovider',
  render,
  argTypes: {
    'brand-visual-set': {
      control: 'select',
      options: ['momentum-brand-visuals', 'custom-brand-visuals'],
    },
    'file-extension': {
      options: ALLOWED_FILE_EXTENSIONS,
      control: { type: 'radio' },
    },
    'cache-strategy': {
      control: 'select',
      options: ['in-memory-cache', 'web-cache-api'],
    },
    'cache-name': {
      control: { type: 'text' },
    },
    'brand-visual-name': {
      control: { type: 'text' },
      description:
        'Name of the brand visual to be rendered underneath BrandVisualProvider (not part of BrandVisualProvider component)',
    },
    ...hideControls(['Context']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'brand-visual-set': 'momentum-brand-visuals',
    url: './brandvisuals/svg',
    'file-extension': 'svg',
    'cache-strategy': undefined,
    'cache-name': 'my-brand-visual-cache',
    'brand-visual-name': 'cisco-logo-light-color',
  },
};

/**
 * Vector visuals are fetched over HTTP and inlined, so nothing from the
 * `@momentum-design/brand-visuals` package has to be bundled by the consumer.
 */
export const CustomSetSvg: StoryObj = {
  args: {
    ...Example.args,
    'brand-visual-set': 'custom-brand-visuals',
    url: './brandvisuals/svg',
    'file-extension': 'svg',
    'brand-visual-name': 'webex-app-icon-color-container',
  },
};

/**
 * The device visuals only ship as raster images, so they are served from the `png` folder and
 * rendered through an `img` element rather than being inlined.
 */
export const CustomSetPng: StoryObj = {
  args: {
    ...Example.args,
    'brand-visual-set': 'custom-brand-visuals',
    url: './brandvisuals/png',
    'file-extension': 'png',
    'brand-visual-name': 'device-deskphone-eighteightsevenfour',
  },
};
