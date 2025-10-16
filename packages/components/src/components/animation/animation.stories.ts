import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { invert } from 'lodash';
import { html } from 'lit';
import animationManifest from '@momentum-design/animations/dist/manifest';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';

import { DEFAULTS } from './animation.constants';

const render = (args: Args) =>
  html` <mdc-animation
    style="${args.style}"
    class="${args.class}"
    name="${args.name}"
    loop="${args.loop}"
    ?autoplay="${args.autoplay}"
  ></mdc-animation>`;

const meta: Meta = {
  title: 'Components/animation',
  tags: ['autodocs'],
  component: 'mdc-animation',
  render,
  argTypes: {
    ...hideControls(['lottieInstance', 'containerRef', 'animation', 'onCompleteHandler', 'ariaLabelledby']),
    name: {
      control: 'select',
      options: Object.values(invert(animationManifest)),
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    loop: {
      control: 'text',
      table: {
        defaultValue: { summary: `"${DEFAULTS.LOOP}"` },
      },
    },
    autoplay: {
      control: 'boolean',
      table: {
        defaultValue: { summary: `${DEFAULTS.AUTO_PLAY}` },
      },
    },
    ...classArgType,
    ...styleArgType,
  },
  args: {
    name: 'celebrate',
    loop: DEFAULTS.LOOP,
    autoplay: DEFAULTS.AUTO_PLAY,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {},
};
