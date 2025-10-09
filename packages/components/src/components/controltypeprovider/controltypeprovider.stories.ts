import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import './controltypeprovider.stories.utils';
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
  title: 'Components/controltypeprovider',
  tags: ['autodocs'],
  component: 'mdc-controltypeprovider',
  render,
  argTypes: {
    'control-type': {
      control: 'select',
      options: ['controlled', 'uncontrolled'],
    },
  },
};

export default meta;

export const Uncontrolled: StoryObj = {
  args: {
    'control-type': 'uncontrolled',
  },
};

export const Controlled: StoryObj = {
  args: {
    'control-type': 'controlled',
  },
};
