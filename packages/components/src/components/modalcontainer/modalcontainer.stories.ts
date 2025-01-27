import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { COLOR, DEFAULTS, ELEVATION, ROLE } from './modalcontainer.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
<mdc-modalcontainer
  color="${args.color}"
  elevation="${args.elevation}"
  role="${args.role}"
  aria-label="${args['aria-label']}"
>
  ${args.children}
</mdc-modalcontainer>
`;

const meta: Meta = {
  title: 'Internal/modalcontainer',
  tags: ['autodocs'],
  component: 'mdc-modalcontainer',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Text for the modal container (passed into "default" slot)',
    },
    color: {
      control: 'select',
      options: Object.values(COLOR),
    },
    elevation: {
      control: 'select',
      options: Object.values(ELEVATION),
    },
    role: {
      control: 'radio',
      options: Object.values(ROLE),
    },
    'aria-label': {
      control: 'text',
      description: 'Aria label for the modal container. Required for accessibility.',
    },
    ...classArgType,
    ...styleArgType,
    ...disableControls([
      '--mdc-modalcontainer-primary-background-color',
      '--mdc-modalcontainer-border-color',
      '--mdc-modalcontainer-inverted-background-color',
      '--mdc-modalcontainer-inverted-border-color',
      '--mdc-modalcontainer-inverted-text-color',
    ]),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    color: COLOR.CONTRAST,
    elevation: ELEVATION[0],
    role: DEFAULTS.ROLE,
    'aria-label': 'Modal container',
    children: DEFAULTS.CHILDREN,
  },
};
