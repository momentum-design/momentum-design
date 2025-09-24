import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls, readOnlyControls, textControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-icon
    aria-label="${ifDefined(args['aria-label'])}"
    class="${args.class}"
    name="${args.name}"
    size="${args.size}"
    style="${args.style}"
    tabindex="${ifDefined(args.tabindex)}"
  ></mdc-icon>
`;

const meta: Meta = {
  title: 'Components/icon',
  tags: ['autodocs'],
  component: 'mdc-icon',
  render,

  argTypes: {
    ...hideControls([
      'iconData',
      'lengthUnitFromContext',
      'sizeFromContext',
      'iconProviderContext',
      'computedIconSize',
      'abortController',
    ]),
    ...textControls(['--mdc-icon-fill-color', '--mdc-icon-size', '--mdc-icon-border-radius']),
    ...readOnlyControls(['tabindex']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  argTypes: {
    tabindex: {
      table: { disable: true },
    },
  },
  args: {
    'aria-label': 'This is the accessibility icon',
    name: 'placeholder-regular',
    size: 2,
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
    tabindex: {
      table: { disable: true },
    },
  },

  args: {
    name: 'placeholder-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;',
  },
};

export const Informative: StoryObj = {
  argTypes: {
    tabindex: {
      table: { disable: true },
    },
  },
  args: {
    'aria-label': 'This is the accessibility icon',
    name: 'placeholder-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;',
  },
};

export const InformativeStandalone: StoryObj = {
  argTypes: {
    tabindex: {
      description: 'The tabindex of the icon, set to 0 to make it focusable',
      table: {
        category: 'Storybook only',
        readonly: true,
      },
    },
  },
  args: {
    'aria-label': 'This is the accessibility icon',
    name: 'placeholder-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;',
    tabindex: 0,
  },
};
