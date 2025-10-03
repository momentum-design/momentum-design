import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { invert } from 'lodash';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import illustrationManifest from '@momentum-design/illustrations/dist/manifest.json';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-illustration
    name="${args.name}"
    aria-label="${ifDefined(args['aria-label'])}"
    class="${args.class}"
    style="${args.style}"
  ></mdc-illustration>
`;

const meta: Meta = {
  title: 'Components/illustration',
  tags: ['autodocs'],
  component: 'mdc-illustration',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(invert(illustrationManifest)),
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    ...hideControls(['illustrationData', 'illustrationProviderContext', 'abortController']),
    ...disableControls(['aria-labelledby']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    name: 'astronaut-avatar-onetwozero-default',
    'aria-label': 'This is the accessibility illustration',
    'aria-labelledby': null,
    class: 'custom-classname',
    style: 'margin: 0px;',
  },
};

export const Decorative: StoryObj = {
  argTypes: {
    'aria-label': {
      table: {
        disable: true,
      },
    },
    'aria-labelledby': {
      table: {
        disable: true,
      },
    },
  },
  args: {
    name: 'astronaut-avatar-onetwozero-default',
    class: 'custom-classname',
    style: 'margin: 0px;',
  },
};

export const Informative: StoryObj = {
  args: {
    'aria-label': 'This is the accessibility illustration',
    name: 'astronaut-avatar-onetwozero-default',
    class: 'custom-classname',
    style: 'margin: 0px;',
  },
};
