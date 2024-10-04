import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

const render = (args: Args) => html` <mdc-icon name="${args.name}" size="${args.size}"></mdc-icon> `;
const renderAccessibility = (args: Args) => html`
  <mdc-icon name="${args.name}" size="${args.size}" role="${args.role}" aria-label="${args['aria-label']}"></mdc-icon>
`;

const meta: Meta = {
  title: 'Work In Progress/icon',
  tags: ['autodocs'],
  component: 'mdc-icon',
  render,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {
    name: 'accessibility-regular',
    size: 1,
  },
};

export const Accessibility: StoryObj = {
  render: renderAccessibility,
  args: {
    name: 'accessibility-regular',
    size: 1,
    role: 'graphics-document',
    'aria-label': 'This is the accessibility icon',
  },
};
