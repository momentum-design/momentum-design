import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import brandVisualsManifest from '@momentum-design/brand-visuals/dist/manifest.json';
import { action } from 'storybook/actions';

import { ROLE } from '../../utils/roles';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html`<div role="${ROLE.MAIN}">
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
    style: 'width: 6.25rem;',
  },
};

export const BrandVisualImage: StoryObj = {
  args: {
    name: 'device-deskphone-eighteightsevenfour',
    'alt-text': 'Momentum design device desk phone',
    style: 'width: 25rem;',
  },
};

export const BrandVisualSvg: StoryObj = {
  args: {
    name: 'webex-app-icon-color-container',
    'alt-text': 'Webex app icon color logo',
    style: 'width: 10rem;',
  },
};
