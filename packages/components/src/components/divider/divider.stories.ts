import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { DIVIDER_ORIENTATION, DIVIDER_VARIANT, DIRECTIONS } from './divider.constants';
import { disableControls, hideControls } from '../../../config/storybook/utils';

const contentMap: Record<string, ReturnType<typeof html>> = {
  text: html`<mdc-text tagname="h1">Label</mdc-text>`,
  grabber: html`<mdc-button></mdc-button>`,
  primary: html``,
};

const render = (args: Args) => {
  const content = contentMap[args.typeOfChildren] || html``;

  return html`
    <div style="height: 85vh">
      <mdc-divider
        orientation=${args.orientation}
        variant=${args.variant}
        aria-label=${args['aria-label'] || ''}
        aria-expanded=${args['aria-expanded'] || ''}
        arrow-direction=${args['arrow-direction'] || ''}
        button-position=${args['button-position'] || ''}
      >
        ${content}
      </mdc-divider>
    </div>
  `;
};

const meta: Meta = {
  title: 'Work In Progress/divider',
  tags: ['autodocs'],
  component: 'mdc-divider',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    typeOfChildren: {
      control: 'radio',
      options: ['primary', 'text', 'grabber'],
      description: 'Choose the type of content to render inside the divider',
    },
    orientation: {
      control: 'radio',
      options: Object.values(DIVIDER_ORIENTATION),
    },
    variant: {
      control: 'radio',
      options: Object.values(DIVIDER_VARIANT),
    },
    'aria-label': {
      control: 'text',
    },
    'aria-expanded': {
      control: 'boolean',
    },
    'arrow-direction': {
      control: 'select',
      options: Object.values(DIRECTIONS),
    },
    'button-position': {
      control: 'select',
      options: Object.values(DIRECTIONS),
    },
    ...disableControls([
      '--mdc-divider-background-color',
      '--mdc-divider-width',
      '--mdc-divider-horizontal-gradient',
      '--mdc-divider-vertical-gradient',
      '--mdc-divider-text-size',
      '--mdc-divider-text-color',
      '--mdc-divider-text-margin',
      '--mdc-divider-grabber-button-border-radius',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    typeOfChildren: 'primary',
    orientation: DIVIDER_ORIENTATION.HORIZONTAL,
    variant: DIVIDER_VARIANT.SOLID,
    'aria-label': 'Divider label',
    'aria-expanded': 'false',
    'arrow-direction': DIRECTIONS.NEGATIVE,
    'button-position': DIRECTIONS.NEGATIVE,
  },
};

export const primary: StoryObj = {
  argTypes: {
    ...meta.argTypes,
    typeOfChildren: {
      control: 'radio',
      options: ['primary'],
      description: 'Primary type is selected',
    },
    ...hideControls(['aria-label', 'aria-expanded', 'arrow-direction', 'button-position']),
  },
  args: {
    typeOfChildren: 'primary',
    orientation: DIVIDER_ORIENTATION.HORIZONTAL,
    variant: DIVIDER_VARIANT.SOLID,
  },
};

export const textDivider: StoryObj = {
  argTypes: {
    ...meta.argTypes,
    typeOfChildren: {
      control: 'radio',
      options: ['text'],
      description: 'Text type is selected',
    },
    orientation: {
      control: 'radio',
      options: [DIVIDER_ORIENTATION.HORIZONTAL],
      description: 'Only horizontal orientation with 0.063rem width is allowed',
    },
    ...hideControls(['aria-expanded', 'arrow-direction', 'button-position']),
  },
  args: {
    ...primary.args,
    typeOfChildren: 'text',
    'aria-label': 'Divider with text',
  },
};

export const grabberButtonDivider: StoryObj = {
  argTypes: {
    ...meta.argTypes,
    typeOfChildren: {
      control: 'radio',
      options: ['grabber'],
      description: 'Grabber Button type is selected',
    },
  },
  args: {
    ...primary.args,
    typeOfChildren: 'grabber',
    'aria-label': 'Divider with grabber button',
    'aria-expanded': 'false',
    'arrow-direction': DIRECTIONS.NEGATIVE,
    'button-position': DIRECTIONS.NEGATIVE,
  },
};
