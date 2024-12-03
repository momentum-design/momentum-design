import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { DIVIDER_ARROW_DIRECTION, DIVIDER_ORIENTATION, DIVIDER_VARIANT } from './divider.constants';

const render = (args: Args) => html`
    <div style="height: 250px">
      <mdc-divider 
        orientation=${args.orientation} 
        variant=${args.variant}
        aria-label=${args['aria-label'] || ''} 
        aria-expanded=${args['aria-expanded'] || ''} 
        arrow-direction=${args['arrow-direction'] || ''}
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
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the divider.',
    },
    'aria-expanded': {
      control: 'boolean',
      description: 'Accessible expand state for the divider.',
    },
    'arrow-direction': {
      control: 'select',
      options: Object.values(DIVIDER_ARROW_DIRECTION),
      description: 'Direction of the arrow for grabber dividers.',
    },
  }
};

export default meta;

export const primary: StoryObj = {
  args: {
    orientation: DIVIDER_ORIENTATION.HORIZONTAL,
    variant: DIVIDER_VARIANT.SOLID,
  },
  argTypes: {
    hasButton: { table: { disable: true } },
    'aria-label': { table: { disable: true } },
    'aria-expanded': { table: { disable: true } },
    'arrow-direction': { table: { disable: true } },
  }
};

export const textDivider: StoryObj = {
  argTypes: {
    ...primary.argTypes,
    orientation: {
      control: 'radio',
      options: ['horizontal'],
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the divider.',
    },
  },
  args: {
    ...primary.args,
    slotContent: html`<mdc-text tagname="h1">Label</mdc-text>`,
    'aria-label': 'Divider with text',
  },
};

export const grabberButtonDivider: StoryObj = {
  argTypes: {
    ...primary.argTypes,
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the divider.',
    },
    'aria-expanded': {
      control: 'boolean',
      description: 'Accessible expand for the divider.',
    },
    'arrow-direction': {
      control: 'radio',
      options: Object.values(DIVIDER_ARROW_DIRECTION),
      description: 'Direction of the arrow for grabber dividers.',
    },
  },
  args: {
    ...primary.args,
    slotContent: html`<mdc-button></mdc-button>`,
    'aria-label': 'Divider with grabber button',
    'aria-expanded': false,
    'arrow-direction': DIVIDER_ARROW_DIRECTION.POSITIVE,
  },
};
