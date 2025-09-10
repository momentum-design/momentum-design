import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { BUTTON_COLORS, PILL_BUTTON_SIZES, BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-buttonlink
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    ?disabled="${args.disabled}"
    ?soft-disabled="${args['soft-disabled']}"
    prefix-icon="${args['prefix-icon']}"
    postfix-icon="${args['postfix-icon']}"
    size="${args.size}"
    color="${args.color}"
    variant="${args.variant}"
    href="${args.href}"
    target="${args.target}"
    rel="${args.rel}"
    tabindex="${args.tabIndex}"
    aria-label="${args['aria-label']}"
    >${args.children}</mdc-buttonlink
  >`;

const meta: Meta = {
  title: 'Components/buttonlink',
  tags: ['autodocs'],
  component: 'mdc-buttonlink',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    children: {
      description: 'Text label for the buttonLink.',
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'soft-disabled': {
      control: 'boolean',
    },
    'prefix-icon': {
      control: 'text',
    },
    'postfix-icon': {
      control: 'text',
    },
    size: {
      control: 'select',
      options: Object.values(PILL_BUTTON_SIZES),
    },
    color: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
    variant: {
      control: 'select',
      options: Object.values(BUTTON_VARIANTS),
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
    rel: {
      control: 'text',
    },
    ...hideControls([
      'icon-name',
      'inline',
      'inverted',
      'handleNavigation',
      '--mdc-link-border-radius',
      '--mdc-link-color-active',
      '--mdc-link-color-disabled',
      '--mdc-link-color-hover',
      '--mdc-link-color-normal',
      '--mdc-link-inverted-color-active',
      '--mdc-link-inverted-color-disabled',
      '--mdc-link-inverted-color-hover',
      '--mdc-link-inverted-color-normal',
    ]),
    ...disableControls([]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    children: 'VisitLink',
    disabled: false,
    'soft-disabled': false,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    variant: BUTTON_VARIANTS.PRIMARY,
    href: 'https://www.webex.com',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};

export const PillButtonLink: StoryObj = {
  args: {
    ...Example.args,
  },
};

export const PillWithPrefixIcon: StoryObj = {
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold',
  },
};

export const PillWithPostfixIcon: StoryObj = {
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold',
  },
};

export const IconButtonLink: StoryObj = {
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES),
    },
    'aria-label': {
      description: 'Aria label for the icon buttonLink. Required for accessibility.',
    },
  },
  args: {
    ...Example.args,
    children: '',
    'prefix-icon': 'placeholder-bold',
    size: ICON_BUTTON_SIZES[32],
    'aria-label': 'icon buttonLink',
  },
};
