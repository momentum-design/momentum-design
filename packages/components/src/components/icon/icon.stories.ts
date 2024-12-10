import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-icon
    class="${args.class}"
    name="${args.name}"
    size="${args.size}"
    style="${args.style}"
  ></mdc-icon> `;
const renderAccessibility = (args: Args) => html`
  <mdc-icon
    aria-label="${args['aria-label']}"
    class="${args.class}"
    name="${args.name}"
    size="${args.size}"
  ></mdc-icon>
`;

const meta: Meta = {
  title: 'Components/icon',
  tags: ['autodocs'],
  component: 'mdc-icon',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    ...disableControls([
      'iconData',
      'lengthUnitFromContext',
      'sizeFromContext',
      'iconProviderContext',
      'computedIconSize',
      '--mdc-icon-fill-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    'aria-label': 'This is the accessibility icon',
    name: 'placeholder-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;',
  },
};

export const Decorative: StoryObj = {
  argTypes: {
    'aria-label': {
      table: {
        disable: true,
      },
    },
  },
  args: {
    name: 'placeholder-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;',
  },
};

export const Informative: StoryObj = {
  render: renderAccessibility,
  args: {
    'aria-label': 'This is the accessibility icon',
    name: 'placeholder-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;',
  },
};
