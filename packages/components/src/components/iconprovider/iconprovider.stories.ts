import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import './iconprovider.stories.utils';
import { html } from 'lit';
import { ALLOWED_LENGTH_UNITS, ALLOWED_FILE_EXTENSIONS } from './iconprovider.constants';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-iconprovider 
    url=${args.url}
    file-extension=${args.fileExtension}
    length-unit=${args.lengthUnit}
    size=${args.size}>
    <mdc-subcomponent-icon></mdc-subcomponent-icon>
  </mdc-iconprovider>
`;

const meta: Meta = {
  title: 'Work In Progress/iconprovider',
  tags: ['autodocs'],
  component: 'mdc-iconprovider',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    fileExtension: {
      options: ALLOWED_FILE_EXTENSIONS,
      control: { type: 'radio' },
    },
    lengthUnit: {
      options: ALLOWED_LENGTH_UNITS,
      control: { type: 'inline-radio' },
    },
    ...disableControls(['Context', 'default']),
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    url: './icons/svg',
    fileExtension: 'svg',
    lengthUnit: 'em',
    size: 1,
  },
};
