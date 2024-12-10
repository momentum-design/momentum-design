import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import './iconprovider.stories.utils';
import { html } from 'lit';
import { ALLOWED_LENGTH_UNITS, ALLOWED_FILE_EXTENSIONS } from './iconprovider.constants';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
<mdc-iconprovider 
  url=${args.url}
  file-extension=${args['file-extension']}
  length-unit=${args['length-unit']}
  size=${args.size}>
  <mdc-subcomponent-icon></mdc-subcomponent-icon>
</mdc-iconprovider>
`;

const meta: Meta = {
  title: 'Components/iconprovider',
  tags: ['autodocs'],
  component: 'mdc-iconprovider',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    'file-extension': {
      options: ALLOWED_FILE_EXTENSIONS,
      control: { type: 'radio' },
    },
    'length-unit': {
      options: ALLOWED_LENGTH_UNITS,
      control: { type: 'inline-radio' },
    },
    ...disableControls(['Context']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    url: './icons/svg',
    'file-extension': 'svg',
    'length-unit': 'em',
    size: 1,
  },
};
