import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-progressspinner
   value="${args.value}" 
   ?error="${args.error}" 
   data-aria-label="${args['data-aria-label']}">
  </mdc-progressspinner>`;

const meta: Meta = {
  title: 'Work In Progress/progressspinner',
  tags: ['autodocs'],
  component: 'mdc-progressspinner',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    value: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls(['help-text-type',
      'required-label',
      'label', 'disabled',
      'help-text',
      'variant',
      'id',
      'label-info',
      '--mdc-progressbar-default-background-color',
      '--mdc-progressbar-default-active-background-color',
      '--mdc-progressbar-success-background-color',
      '--mdc-progressbar-error-background-color',
      '--mdc-progressbar-height',
      '--mdc-progressbar-border-radius',
      '--mdc-progressbar-label-color',
      '--mdc-progressbar-label-lineheight',
      '--mdc-progressbar-label-fontsize',
      '--mdc-progressbar-label-fontweight',
      '--mdc-progressbar-help-text-color',
    ]),
    ...disableControls([
      '--mdc-spinner-size',
      '--mdc-track-color',
      '--mdc-progress-color',
      '--mdc-progress-success-color',
      '--mdc-progress-error-color',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    value: 25,
    'data-aria-label': 'progress spinner',
  },
};

export const Error: StoryObj = {
  args: {
    value: 25,
    error: true,
    'data-aria-label': 'Error progress spinner',
  },
};

export const Success: StoryObj = {
  args: {
    value: 100,
    error: false,
    'data-aria-label': 'Success progress spinner',
  },
};
