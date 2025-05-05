import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import '../divider';
import '../menuitem';

const menuItemsList = html`
  <mdc-menuitem label="New"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menuitem label="Open"></mdc-menuitem>
  <mdc-menuitem label="Save"></mdc-menuitem>
  <mdc-divider></mdc-divider>
  <mdc-menuitem label="Close"></mdc-menuitem>
  <mdc-menuitem label="Exit"></mdc-menuitem>
`;

const render = (args: Args) => html`
  <mdc-menu header-text="${args['header-text']}" data-aria-label="${args['data-aria-label']}">
    ${menuItemsList}
  </mdc-menu>`;

const meta: Meta = {
  title: 'Work In Progress/menu/menu',
  tags: ['autodocs'],
  component: 'mdc-menu',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    'header-text': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['default', 'listItems']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'header-text': 'Menu Header',
    'data-aria-label': 'This is an Aria Label',
  },
};

export const MenuWithoutHeader: StoryObj = {
  render: () => html`<mdc-menu>${menuItemsList}</mdc-menu>`,
};
