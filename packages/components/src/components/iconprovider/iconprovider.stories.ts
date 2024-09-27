import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import './iconprovider.stories.utils';
import { html } from 'lit';

const render = (args: Args) => html`
  <mdc-iconprovider url="${args.url}" file-extension="${args.fileExtension}" length-unit="${args.lengthUnit}">
    <mdc-subcomponent-icon></mdc-subcomponent-icon>
  </mdc-iconprovider>
`;

const meta: Meta = {
  title: 'Work In Progress/iconprovider',
  tags: ['autodocs'],
  component: 'mdc-iconprovider',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {
    url: '/test',
    fileExtension: 'svg',
    lengthUnit: 'em',
  },
};
