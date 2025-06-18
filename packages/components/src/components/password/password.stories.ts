import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-password
    show-hide-button-aria-label="${args['show-hide-button-aria-label']}"
    class="${args.class}"
    style="${args.style}"
    @click="${action('click')}"
  ></mdc-password>
`;

const meta: Meta = {
  title: 'Work In Progress/password',
  tags: ['autodocs'],
  component: 'mdc-password',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    'show-hide-button-aria-label': {
      control: 'text',
      description: 'Aria label for the show/hide button',
      table: { category: 'Attributes' },
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
    'show-hide-button-aria-label': 'Show or hide password',
  },
};
