import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const render = (args: Args) => html`
  <mdc-radio-group label="${args.label}"></mdc-radio-group>`;

const meta: Meta = {
  title: 'Work In Progress/radio-group',
  tags: ['autodocs'],
  component: 'mdc-radio-group',
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

export const Example: StoryObj = {
  args: {
    label: 'Select your team captain',
  },
};

export const RadioGroupWithDescription: StoryObj = {
  args: {
    label: 'Select your team captain',
    description: 'The team captain should have previous experience leading the team through challenging situations.',
  },
};
