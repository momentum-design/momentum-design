import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '.';
import '../accordion';
import '../accordionbutton';
import '../avatarbutton';
import '../chip';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

import { DEFAULTS, SIZE, VARIANT } from './accordiongroup.constants';

const defaultChildren = html`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`;

const render = (args: Args) =>
  html` <mdc-accordiongroup
    size="${ifDefined(args.size)}"
    variant="${ifDefined(args.variant)}"
    ?allow-multiple="${args['allow-multiple']}"
  >
    <mdc-accordionbutton header-text="Why is the moon sometimes out during the day?"
      >${defaultChildren}</mdc-accordionbutton
    >
    <mdc-accordionbutton header-text="Why is the sky blue?">${defaultChildren}</mdc-accordionbutton>
    <mdc-accordionbutton header-text="Will we ever discover aliens?">${defaultChildren}</mdc-accordionbutton>
    <mdc-accordionbutton header-text="How much does the Earth weigh?">${defaultChildren}</mdc-accordionbutton>
    <mdc-accordionbutton header-text="How do airplanes stay up?">${defaultChildren}</mdc-accordionbutton>
  </mdc-accordiongroup>`;

const meta: Meta = {
  title: 'Components/accordion/accordiongroup',
  tags: ['autodocs'],
  component: 'mdc-accordiongroup',
  render,
  argTypes: {
    ...classArgType,
    ...styleArgType,
    'allow-multiple': {
      control: 'boolean',
    },
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
    'allow-multiple': false,
  },
};

export const StackedVariant: StoryObj = {
  args: {
    variant: VARIANT.STACKED,
    size: SIZE.SMALL,
  },
};

export const ContainedVariant: StoryObj = {
  args: {
    variant: VARIANT.CONTAINED,
    size: SIZE.SMALL,
  },
};

export const BorderlessVariant: StoryObj = {
  args: {
    variant: VARIANT.BORDERLESS,
    size: SIZE.SMALL,
  },
};

export const SmallSize: StoryObj = {
  args: {
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED,
  },
};

export const LargeSize: StoryObj = {
  args: {
    size: SIZE.LARGE,
    variant: VARIANT.CONTAINED,
  },
};

export const MultiInteractiveAccordion: StoryObj = {
  args: {
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED,
    'allow-multiple': false,
  },
  render: (args: Args) => html`
    <mdc-accordiongroup size="${args.size}" variant="${args.variant}" ?allow-multiple="${args['allow-multiple']}">
      <mdc-accordion header-text="Identify Your Goals" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 1"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #1" slot="trailing-controls" initials="#1"></mdc-avatarbutton>
        ${defaultChildren}
      </mdc-accordion>
      <mdc-accordion header-text="Write Your Goals" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 2"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #2" slot="trailing-controls" initials="#2"></mdc-avatarbutton>
        ${defaultChildren}
      </mdc-accordion>
      <mdc-accordion header-text="Need Analysis" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 3"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #3" slot="trailing-controls" initials="#3"></mdc-avatarbutton>
        ${defaultChildren}
      </mdc-accordion>
      <mdc-accordion header-text="List Objectives" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 4"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #4" slot="trailing-controls" initials="#4"></mdc-avatarbutton>
        ${defaultChildren}
      </mdc-accordion>
    </mdc-accordiongroup>
  `,
};
