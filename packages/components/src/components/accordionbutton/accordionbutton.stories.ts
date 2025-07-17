import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import '../button';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VARIANT, SIZE } from '../accordiongroup/accordiongroup.constants';

const defaultChildren = html`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, <mdc-button>Control Button</mdc-button> quis nostrud
  exercitation ullamco laboris nisi ut aliqui p ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.`;

const render = (args: Args) =>
  html` <mdc-accordionbutton
    ?disabled=${args.disabled}
    ?expanded=${args.expanded}
    data-aria-level="${args['data-aria-level']}"
    header-text="${args['header-text']}"
    prefix-icon="${args['prefix-icon']}"
    size="${args.size}"
    variant="${args.variant}"
  >
    ${defaultChildren}
  </mdc-accordionbutton>`;

const meta: Meta = {
  title: 'Work In Progress/accordion/accordionbutton',
  tags: ['autodocs'],
  component: 'mdc-accordionbutton',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    'data-aria-level': {
      control: 'number',
    },
    'header-text': {
      control: 'text',
    },
    'prefix-icon': {
      control: 'text',
    },
    size: {
      control: 'select',
      options: Object.values(SIZE),
    },
    disabled: {
      control: 'boolean',
    },
    expanded: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: Object.values(VARIANT),
    },
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'data-aria-level': 3,
    'header-text': 'Heading',
    'prefix-icon': 'placeholder-regular',
    disabled: false,
    size: SIZE.SMALL,
    expanded: true,
    variant: VARIANT.BORDERLESS,
  },
};
