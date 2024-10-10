import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

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
    role="img"
  ></mdc-icon>
`;

const meta: Meta = {
  title: 'Work In Progress/icon',
  tags: ['autodocs'],
  component: 'mdc-icon',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {
    name: 'accessibility-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 16px;',
  },
};

export const Accessibility: StoryObj = {
  render: renderAccessibility,
  args: {
    'aria-label': 'This is the accessibility icon',
    name: 'accessibility-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 16px;',
    role: 'img',
  },
};
