import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-navitemlist aria-label="${args['aria-label']}">
    <mdc-navitem nav-id="1" icon-name="placeholder-bold" active>Dashboard</mdc-navitem>
    <mdc-navitem nav-id="2" icon-name="placeholder-bold" disabled>Settings</mdc-navitem>
    <mdc-navitem nav-id="3" icon-name="placeholder-bold">Settings</mdc-navitem>
  </mdc-navitemlist>
`;

const meta: Meta = {
  title: 'Work In Progress/navitemlist',
  tags: ['autodocs'],
  component: 'mdc-navitemlist',
  render,
  parameters: {
    controls: { expanded: true },
    badges: ['wip'],
  },
  argTypes: {
    'aria-label': {
      control: 'text',
      description: 'Aria-label for accessibility. Used to describe the nav item list to assistive technologies.',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'aria-label': 'navItemList label',
  },
};

export const WithoutAriaLabel: StoryObj = {
  args: {
    'aria-label': null,
  },
};
