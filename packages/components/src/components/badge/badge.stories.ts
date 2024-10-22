import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { DEFAULTS } from './badge.constants';

const render = (args: Args) => html`
  <mdc-badge
    type="${args.type}"
    icon-name="${args.iconName}"
    size="${args.size}"
    length-unit="${args.lengthUnit}"
    text="${args.text}"
    counter="${args.counter}"
    maxCounter="${args.maxCounter}"
    variant="${args.variant}"
  ></mdc-badge>
`;

const meta: Meta = {
  title: 'Work In Progress/badge',
  tags: ['autodocs'],
  component: 'mdc-badge',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {},
};

export default meta;

export const Primary: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    iconName: 'error-legacy-filled',
    size: 1,
    lengthUnit: 'rem',
    text: '99+',
    counter: 1,
    maxCounter: 99,
    variant: DEFAULTS.VARIANT,
  },
};
