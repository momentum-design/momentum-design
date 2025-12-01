import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import brandVisualsManifest from '@momentum-design/brand-visuals/dist/manifest.json';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html`<div role="main">
    <mdc-brandvisual
      @load="${action('load')}"
      @error="${action('error')}"
      alt-text="${args['alt-text']}"
      class="${args.class}"
      name="${args.name}"
      style="${args.style}"
    ></mdc-brandvisual>
  </div>`;

const meta: Meta = {
  title: 'Components/brandvisual',
  tags: ['autodocs'],
  component: 'mdc-brandvisual',
  render,
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(brandVisualsManifest),
    },
    'alt-text': {
      control: 'text',
    },
    ...hideControls(['brandVisualData']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    name: 'momentum-design-logo-dark-color-vertical',
    'alt-text': 'Momentum design vertical logo',
    style: 'display: block; height: 100px; width: 100px;',
  },
};

export const BrandVisualImage: StoryObj = {
  args: {
    name: 'device-ip-phone-sixninezeroone',
    'alt-text': 'Momentum design device ip phone',
  },
};

export const BrandVisualSvg: StoryObj = {
  args: {
    name: 'webex-app-icon-color-container',
    'alt-text': 'Webex app icon color logo',
  },
};
