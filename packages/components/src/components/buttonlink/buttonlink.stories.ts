import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import iconsManifest from '@momentum-design/icons/dist/manifest.json';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';

import { BUTTON_COLORS, PILL_BUTTON_SIZES, BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { hideControls } from '../../../config/storybook/utils';
import { ROLE } from '../../utils/roles';

const render = (args: Args) =>
  html`<div role="${ROLE.MAIN}">
    <mdc-buttonlink
      @click="${action('onclick')}"
      @keydown="${action('onkeydown')}"
      @focus="${action('onfocus')}"
      @blur="${action('onblur')}"
      ?disabled="${args.disabled}"
      ?soft-disabled="${args['soft-disabled']}"
      prefix-icon="${ifDefined(args['prefix-icon'])}"
      postfix-icon="${ifDefined(args['postfix-icon'])}"
      size="${ifDefined(args.size)}"
      color="${ifDefined(args.color)}"
      variant="${ifDefined(args.variant)}"
      href="${ifDefined(args.href)}"
      target="${ifDefined(args.target)}"
      rel="${ifDefined(args.rel)}"
      download="${ifDefined(args.download)}"
      ping="${ifDefined(args.ping)}"
      hreflang="${ifDefined(args.hreflang)}"
      type="${ifDefined(args.type)}"
      referrerpolicy="${ifDefined(args.referrerpolicy)}"
      data-aria-label="${ifDefined(args['data-aria-label'])}"
      >${args.children}</mdc-buttonlink
    >
  </div>`;

const meta: Meta = {
  title: 'Components/buttonlink',
  tags: ['autodocs'],
  component: 'mdc-buttonlink',
  render,
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
      control: 'select',
      options: Object.keys(iconsManifest),
    },
    'postfix-icon': {
      control: 'select',
      options: Object.keys(iconsManifest),
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
    download: {
      control: 'text',
    },
    ping: {
      control: 'text',
    },
    hreflang: {
      control: 'text',
    },
    type: {
      control: 'text',
    },
    referrerpolicy: {
      control: 'text',
    },
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls(['icon-name', 'inline', 'inverted', 'handleNavigation']),
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
  },
  args: {
    ...Example.args,
    children: '',
    'prefix-icon': 'placeholder-bold',
    size: ICON_BUTTON_SIZES[32],
    'data-aria-label': 'icon buttonLink',
  },
};
