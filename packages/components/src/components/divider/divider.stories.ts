import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import '../button';
import '../text';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

import { DIVIDER_ORIENTATION, DIVIDER_VARIANT, DIRECTIONS } from './divider.constants';

const contentMap = (args: Args): Record<string, ReturnType<typeof html>> => ({
  text: html`<mdc-text tagname="h1">${args.childrenText}</mdc-text>`,
  // button role has been specifically added for managing storybook A11y.
  grabber: html`<mdc-button role="button" aria-label="divider label" aria-expanded="false"></mdc-button>`,
  noChildren: html``,
});

const render = (args: Args) => {
  const content = contentMap(args)[args.typeOfChildren] || html``;

  return html`
    <div style="height: 25rem; margin: 1rem">
      <mdc-divider
        orientation=${args.orientation}
        variant=${args.variant}
        arrow-direction=${args['arrow-direction']}
        button-position=${args['button-position']}
      >
        ${content}
      </mdc-divider>
    </div>
  `;
};

const meta: Meta = {
  title: 'Components/decorator/divider',
  tags: ['autodocs'],
  component: 'mdc-divider',
  render,

  argTypes: {
    typeOfChildren: {
      control: 'radio',
      options: ['noChildren', 'text', 'grabber'],
      description: 'Choose the type of content to render inside the divider',
    },
    childrenText: {
      control: 'text',
      description: 'Text content for the text divider',
      if: { arg: 'typeOfChildren', eq: 'text' },
    },
    orientation: {
      control: 'radio',
      options: Object.values(DIVIDER_ORIENTATION),
    },
    variant: {
      control: 'radio',
      options: Object.values(DIVIDER_VARIANT),
    },
    'arrow-direction': {
      control: 'select',
      options: Object.values(DIRECTIONS),
    },
    'button-position': {
      control: 'select',
      options: Object.values(DIRECTIONS),
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['observer']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    typeOfChildren: 'noChildren',
    childrenText: 'Divider Text',
    orientation: DIVIDER_ORIENTATION.HORIZONTAL,
    variant: DIVIDER_VARIANT.SOLID,
    'arrow-direction': DIRECTIONS.NEGATIVE,
    'button-position': DIRECTIONS.NEGATIVE,
  },
  decorators: [
    (Story, context) => {
      // Enforce horizontal orientation when typeOfChildren is 'text'
      if (context.args.typeOfChildren === 'text' && context.args.orientation === DIVIDER_ORIENTATION.VERTICAL) {
        context.args.orientation = DIVIDER_ORIENTATION.HORIZONTAL;
      }
      return Story();
    },
  ],
};

export const noChildrenDivider: StoryObj = {
  argTypes: {
    ...meta.argTypes,
    typeOfChildren: {
      control: 'radio',
      options: ['noChildren'],
      description: 'NoChildren type is selected',
    },
    ...hideControls(['arrow-direction', 'button-position']),
  },
  args: {
    typeOfChildren: 'noChildren',
    childrenText: 'Divider Text',
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
      description: `Only horizontal orientation with 0.0625rem width is allowed. 
      We do not support "Vertical Text Divider" as of now.`,
    },
    ...hideControls(['arrow-direction', 'button-position']),
  },
  args: {
    ...noChildrenDivider.args,
    typeOfChildren: 'text',
    childrenText: 'Divider Text',
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
    ...noChildrenDivider.args,
    typeOfChildren: 'grabber',
    childrenText: 'Divider Text',
    'arrow-direction': DIRECTIONS.NEGATIVE,
    'button-position': DIRECTIONS.NEGATIVE,
  },
};
