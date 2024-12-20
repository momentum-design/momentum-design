import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { MARKER_VARIANTS } from './marker.constants';
import { disableControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <div style="height: 6.25rem">
    <mdc-marker variant="${ifDefined(args.variant)}"></mdc-marker>
  </div> 
`;

const meta: Meta = {
  title: 'Components/decorator/marker',
  tags: ['autodocs'],
  component: 'mdc-marker',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: Object.values(MARKER_VARIANTS),
    },
    ...disableControls([
      '--mdc-marker-solid-background-color',
      '--mdc-marker-striped-color',
      '--mdc-marker-striped-background-color',
      '--mdc-marker-width',
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: MARKER_VARIANTS.SOLID,
  },
};
