import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import { VARIANTS } from './alertchip.constants';

const render = (args: Args) => html`
  <mdc-alertchip 
  @click="${action('onclick')}"
  @keydown="${action('onkeydown')}"
  @keyup="${action('onkeyup')}"
  @focus="${action('onfocus')}"
    variant="${args.variant}"
    label="${args.label}"
  ></mdc-alertchip>`;

const meta: Meta = {
  title: 'Work In Progress/chip/alert',
  tags: ['autodocs'],
  component: 'mdc-alertchip',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(VARIANTS),
    },
    label: {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['soft-disabled', 'size', 'role', 'type', 'active', 'disabled']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert',
  },
};

export const AllVariants: StoryObj = {
  render: () => html`
  <div style="display: flex; gap: 0.5rem;">
    ${Object.values(VARIANTS).map((variant) => html`
      <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip>
    `)}
  </div>`,
};
