import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { DIVIDER_ORIENTATION, DIVIDER_VARIANT } from './divider.constants';
import { disableControls, hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <div style="height: 85vh">
    <mdc-divider
      orientation=${args.orientation}
      variant=${args.variant}
      aria-label=${args['aria-label'] || ''}
      aria-expanded=${args['aria-expanded'] || ''}
      arrow-direction=${args['arrow-direction'] || ''}
      button-position=${args['button-position'] || ''}
    >
      ${args.slotContent}
    </mdc-divider>
  </div>
`;

const meta: Meta = {
  title: 'Work In Progress/divider',
  tags: ['autodocs'],
  component: 'mdc-divider',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: Object.values(DIVIDER_ORIENTATION),
    },
    variant: {
      control: 'radio',
      options: Object.values(DIVIDER_VARIANT),
    },
    ...disableControls([
      '--mdc-divider-background-color',
      '--mdc-divider-width',
      '--mdc-divider-horizontal-gradient',
      '--mdc-divider-vertical-gradient',
      '--mdc-divider-text-font-size',
      '--mdc-divider-text-font-color',
      '--mdc-divider-text-margin',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const primary: StoryObj = {
  argTypes: {
    ...meta.argTypes,
    ...hideControls(['aria-label', 'aria-expanded', 'arrow-direction', 'button-position']),
  },
  args: {
    orientation: DIVIDER_ORIENTATION.HORIZONTAL,
    variant: DIVIDER_VARIANT.SOLID,
  },
};

export const textDivider: StoryObj = {
  argTypes: {
    ...meta.argTypes,
    orientation: {
      control: 'radio',
      options: [DIVIDER_ORIENTATION.HORIZONTAL],
      description: 'Only horizontal orientation with 0.063rem width is allowed',
    },
    'aria-label': {
      control: 'text',
    },
    ...hideControls(['slotContent', 'aria-expanded', 'arrow-direction', 'button-position']),
  },
  args: {
    ...primary.args,
    slotContent: html`<mdc-text tagname="h1">Label</mdc-text>`,
    'aria-label': 'Divider with text',
  },
};

export const grabberButtonDivider: StoryObj = {
  argTypes: {
    ...meta.argTypes,
    'aria-label': {
      control: 'text',
    },
    'aria-expanded': {
      control: 'boolean',
    },
    'arrow-direction': {
      control: 'select',
      options: ['positive', 'negative'],
    },
    'button-position': {
      control: 'select',
      options: ['positive', 'negative'],
    },
    ...hideControls(['slotContent']),
  },
  args: {
    ...primary.args,
    slotContent: html`<mdc-button></mdc-button>`,
    'aria-label': 'Divider with grabber button',
    'aria-expanded': false,
    'arrow-direction': 'negative',
    'button-position': 'negative',
  },
};
