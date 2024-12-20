import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { COLOR, ELEVATION } from './modalcontainer.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
<mdc-modalcontainer
  color="${args.color}"
  elevation="${args.elevation}"
  role="${args.role}"
  aria-modal="${args['aria-modal']}"
><mdc-text>Lorem ipsum dolor sit amet.</mdc-text></mdc-modalcontainer>
`;

const meta: Meta = {
  title: 'Work In Progress/modalcontainer',
  tags: ['autodocs'],
  component: 'mdc-modalcontainer',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(COLOR),
    },
    elevation: {
      control: 'select',
      options: Object.values(ELEVATION),
    },
    role: {
      control: 'text',
    },
    'aria-modal': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    color: COLOR.CONTRAST,
    elevation: ELEVATION[0],
  },
};
