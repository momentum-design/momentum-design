import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { BUTTON_COLORS, PILL_BUTTON_SIZES, BUTTON_VARIANTS,
  BUTTON_TYPE, ICON_BUTTON_SIZES } from '../button/button.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`
  <mdc-buttonlink
  @click="${action('onclick')}"
  @keydown="${action('onkeydown')}"
  @keyup="${action('onkeyup')}"
  @focus="${action('onfocus')}"
  ?disabled="${args.disabled}"
  prefix-icon="${args['prefix-icon']}"
  postfix-icon="${args['postfix-icon']}"
  buttonlink-size="${args['buttonlink-size']}"
  href="${args.href}"
  target="${args.target}"
  rel="${args.rel}"
  variant="${args.variant}"
  color="${args.color}"
  type="${args.type}"
  tabindex="${args.tabIndex}"
  aria-label="${args['aria-label']}"
  >${args.children}</mdc-buttonlink>`;

const meta: Meta = {
  title: 'Work In Progress/buttonlink',
  tags: ['autodocs'],
  component: 'mdc-buttonlink',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    children: {
      description: 'Text label for the buttonLink.',
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'prefix-icon': {
      control: 'text',
    },
    'postfix-icon': {
      control: 'text',
    },
    'buttonlink-size': {
      control: 'select',
      options: Object.values(PILL_BUTTON_SIZES),
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
    variant: {
      control: 'select',
      options: Object.values(BUTTON_VARIANTS),
    },
    color: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
    type: {
      control: 'select',
      options: Object.values(BUTTON_TYPE),
    },
    ...hideControls(['icon-name', 'size', 'inline', 'inverted', 'handleNavigation',
      '--mdc-link-border-radius',
      '--mdc-link-color-active',
      '--mdc-link-color-disabled',
      '--mdc-link-color-hover',
      '--mdc-link-color-normal',
      '--mdc-link-icon-margin-left',
      '--mdc-link-inverted-color-active',
      '--mdc-link-inverted-color-disabled',
      '--mdc-link-inverted-color-hover',
      '--mdc-link-inverted-color-normal',
      '--mdc-link-text-decoration-disabled']),
    ...disableControls([
    ]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  render,
  args: {
    children: 'VisitLink',
    disabled: false,
    'buttonlink-size': PILL_BUTTON_SIZES[32],
    href: 'https://www.webex.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    variant: BUTTON_VARIANTS.PRIMARY,
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
  },
};

export const PillButtonLink: StoryObj = {
  render,
  args: {
    ...Example.args,
  },
};

export const PillWithPrefixIcon: StoryObj = {
  render,
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold',
  },
};

export const PillWithPostfixIcon: StoryObj = {
  render,
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold',
  },
};

export const IconButton: StoryObj = {
  argTypes: {
    'buttonlink-size': {
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
    'buttonlink-size': ICON_BUTTON_SIZES[32],
    'aria-label': 'icon buttonLink',
  },
};
