import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../menuitem';
import '../menuitemcheckbox';
import { html } from 'lit';

const render = (args: Args) => html`
  <mdc-controltypeprovider control-type="${args['control-type']}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`;

const meta: Meta = {
  title: 'Components/spatialnavigationprovider',
  tags: ['autodocs'],
  component: 'mdc-spatialnavigationprovider',
  render,
  argTypes: {
    navigationKeyMapping: {
      control: 'select',
      options: ['controlled', 'uncontrolled'],
    },
  },
};

export default meta;

export const Uncontrolled: StoryObj = {};

export const Controlled: StoryObj = {};
