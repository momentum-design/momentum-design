import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import './illustrationprovider.stories.utils';
import { html } from 'lit';

import { hideControls } from '../../../config/storybook/utils';

import { ALLOWED_FILE_EXTENSIONS } from './illustrationprovider.constants';

const render = (args: Args) => html`
  <mdc-illustrationprovider
    url=${args.url}
    illustration-set=${args['illustration-set']}
    file-extension=${args['file-extension']}
    cache-strategy=${args['cache-strategy']}
    cache-name=${args['cache-name']}
  >
    <mdc-subcomponent-illustration illustration-name=${args['illustration-name']}></mdc-subcomponent-illustration>
  </mdc-illustrationprovider>
`;

const meta: Meta = {
  title: 'Components/illustrationprovider',
  tags: ['autodocs'],
  component: 'mdc-illustrationprovider',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    'illustration-set': {
      control: 'select',
      options: ['momentum-illustrations', 'custom-illustrations'],
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
    'illustration-name': {
      control: { type: 'text' },
      description:
        'Name of the illustration to be rendered underneath IllustrationProvider (not part of IllustrationProvider component)',
    },
    ...hideControls(['Context']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'illustration-set': 'momentum-illustrations',
    url: './illustrations/svg',
    'file-extension': 'svg',
    'cache-strategy': undefined,
    'cache-name': 'my-illustration-cache',
    'illustration-name': 'astronaut-avatar-onetwozero-empty-secondary',
  },
};
