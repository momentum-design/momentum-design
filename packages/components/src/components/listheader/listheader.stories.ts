import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import '../button';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-listheader
    prefix-icon="${args['prefix-icon']}"
    postfix-icon="${args['postfix-icon']}"
    header-text="${args['header-text']}"
    ?disabled="${args.disabled}"
    class="${args.class}"
    style="${args.style}"
  >
    ${args.children === 'Button'
      ? html`<mdc-button size="24" variant="secondary" ?disabled="${args.disabled}">${args.children}</mdc-button>`
      : ''}
  </mdc-listheader>
`;

const meta: Meta = {
  title: 'Components/listheader',
  tags: ['autodocs'],
  component: 'mdc-listheader',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    'prefix-icon': { control: 'text' },
    'postfix-icon': { control: 'text' },
    'header-text': { control: 'text' },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: { type: 'select' },
      options: ['Button', 'None'],
      description: 'Content for the default slot (e.g., button)',
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'prefix-icon': 'placeholder-bold',
    'header-text': 'List Header',
    'postfix-icon': 'placeholder-bold',
    children: '',
  },
};
