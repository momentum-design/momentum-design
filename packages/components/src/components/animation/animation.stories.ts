import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { invert } from 'lodash';
import { html } from 'lit';
import animationManifest from '@momentum-design/animations/dist/manifest';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import '../button';
import '../buttongroup';
import { hideAllControls } from '../../../config/storybook/utils';
import {
  BUTTON_GROUP_ORIENTATION,
  BUTTON_GROUP_SIZE,
  BUTTON_GROUP_VARIANT,
} from '../buttongroup/buttongroup.constants';

import { DEFAULTS } from './animation.constants';
import type { AnimationNames } from './animation.types';

const render = (args: Args) =>
  html` <mdc-animation
    @load="${action('load')}"
    @complete="${action('complete')}"
    @error="${action('error')}"
    name="${args.name}"
    loop="${args.loop}"
    ?autoplay="${args.autoplay}"
    aria-label="${args['aria-label']}"
    aria-labelledby="${args['aria-labelledby']}"
  ></mdc-animation>`;

const meta: Meta = {
  title: 'Components/animation',
  tags: ['autodocs'],
  component: 'mdc-animation',
  render,
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(invert(animationManifest)),
    },
    loop: {
      control: 'text',
    },
    autoplay: {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
    },
    'aria-labelledby': {
      control: 'text',
    },
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    name: 'celebrate',
    loop: DEFAULTS.LOOP,
    autoplay: DEFAULTS.AUTO_PLAY,
    'aria-label': '',
    'aria-labelledby': '',
  },
};

export const AnimationInButton: StoryObj = {
  render: (args: Args) => html`
    <mdc-button inverted>
      Like
      <mdc-animation
        slot="postfix"
        name="${args.name}"
        loop="${args.loop}"
        ?autoplay="${args.autoplay}"
        style="width: 1rem; height: 1rem;"
      ></mdc-animation>
    </mdc-button>
  `,
  args: {
    ...Example.args,
    name: 'thumb_up_yellow',
    loop: '3',
  },
};

export const EmojiAnimationGroup: StoryObj = {
  render: () => html`
    <mdc-buttongroup
      variant="${BUTTON_GROUP_VARIANT.SECONDARY}"
      size="${BUTTON_GROUP_SIZE[40]}"
      orientation="${BUTTON_GROUP_ORIENTATION.HORIZONTAL}"
    >
      ${['thumb_up_yellow', 'smile', 'wow', 'sad', 'slow_down', 'speed_up', 'raise_hand_yellow'].map(
        animationName =>
          html` <mdc-button inverted>
            <mdc-animation
              name="${animationName as AnimationNames}"
              slot="prefix"
              style="height: 1.5rem; width: 1.5rem; flex-shrink: 0;"
            ></mdc-animation>
          </mdc-button>`,
      )}
    </mdc-buttongroup>
  `,
  ...hideAllControls(),
};
