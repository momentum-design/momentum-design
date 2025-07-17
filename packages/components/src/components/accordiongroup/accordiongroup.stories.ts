import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import '../accordionbutton';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { DEFAULTS, SIZE, VARIANT } from './accordiongroup.constants';

const defaultChildren = `Loreum impusm sit amet, consectetur adipiscing elit.`;

const render = (args: Args) =>
  html` <mdc-accordiongroup size="${args.size}" variant="${args.variant}">
    <mdc-accordionbutton header-text="Heading 1" prefix-icon="placeholder-bold" expanded
      >${defaultChildren}</mdc-accordionbutton
    >
    <mdc-accordionbutton header-text="Heading 2" prefix-icon="placeholder-bold">${defaultChildren}</mdc-accordionbutton>
    <mdc-accordionbutton header-text="Heading 3" prefix-icon="placeholder-bold">${defaultChildren}</mdc-accordionbutton>
  </mdc-accordiongroup>`;

const meta: Meta = {
  title: 'Work In Progress/accordion/accordiongroup',
  tags: ['autodocs'],
  component: 'mdc-accordiongroup',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
    size: {
      control: 'select',
      options: Object.values(SIZE),
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
    size: DEFAULTS.SIZE,
    variant: DEFAULTS.VARIANT,
  },
};
