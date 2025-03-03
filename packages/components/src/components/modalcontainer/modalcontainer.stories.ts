import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { COLOR, DEFAULTS, ELEVATION } from './modalcontainer.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
<mdc-modalcontainer
  color="${args.color}"
  elevation="${args.elevation}"
  data-role="${args['data-role']}"
  data-aria-label="${args['data-aria-label']}"
  data-aria-labelledby="${args['data-aria-labelledby']}"
  data-aria-describedby="${args['data-aria-describedby']}"
  data-arial-modal="${args['data-aria-modal']}"
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
    badges: ['internal'],
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
    'data-role': {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
      description: 'Aria label for the modal container. Required for accessibility.',
    },
    'data-aria-labelledby': {
      control: 'text',
    },
    'data-aria-describedby': {
      control: 'text',
    },
    'data-aria-modal': {
      control: 'boolean',
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
    'data-aria-label': 'Modal container',
    'data-role': DEFAULTS.ROLE,
    'data-aria-modal': DEFAULTS.ARIA_MODAL,
    children: DEFAULTS.CHILDREN,
  },
};
