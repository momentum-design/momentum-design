import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import './iconprovider.stories.utils';
import { html } from 'lit';

import { hideControls } from '../../../config/storybook/utils';

import { ALLOWED_LENGTH_UNITS, ALLOWED_FILE_EXTENSIONS } from './iconprovider.constants';

const render = (args: Args) => html`
  <mdc-iconprovider
    url=${args.url}
    icon-set=${args['icon-set']}
    file-extension=${args['file-extension']}
    cache-strategy=${args['cache-strategy']}
    cache-name=${args['cache-name']}
    length-unit=${args['length-unit']}
    size=${args.size}
  >
    <mdc-subcomponent-icon icon-name=${args['icon-name']}></mdc-subcomponent-icon>
  </mdc-iconprovider>
`;

const meta: Meta = {
  title: 'Components/iconprovider',
  tags: ['autodocs'],
  component: 'mdc-iconprovider',
  render,

  argTypes: {
    'icon-set': {
      control: 'select',
      options: ['momentum-icons', 'custom-icons'],
    },
    'file-extension': {
      options: ALLOWED_FILE_EXTENSIONS,
      control: { type: 'radio' },
    },
    'length-unit': {
      options: ALLOWED_LENGTH_UNITS,
      control: { type: 'inline-radio' },
    },
    'cache-strategy': {
      control: 'select',
      options: ['in-memory-cache', 'web-cache-api'],
    },
    'cache-name': {
      control: { type: 'text' },
    },
    'icon-name': {
      control: { type: 'text' },
      description: 'Name of the icon to be rendered underneath IconProvider (not part of IconProvider component)',
    },
    ...hideControls(['Context']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'icon-set': 'momentum-icons',
    url: './icons/svg',
    'file-extension': 'svg',
    'length-unit': 'em',
    'cache-strategy': undefined,
    'cache-name': 'my-icon-cache',
    size: 1,
    'icon-name': 'accessibility-regular',
  },
};
