import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { hideControls, readOnlyControls } from '../../../config/storybook/utils';

import { DEFAULTS, LINK_SIZES } from './link.constants';

const render = (args: Args) =>
  html`<mdc-link
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    ?disabled="${args.disabled}"
    icon-name="${args['icon-name']}"
    ?inline="${args.inline}"
    ?inverted="${args.inverted}"
    size="${args.size}"
    href="${args.href}"
    target="${args.target}"
    rel="${args.rel}"
    data-aria-label="${args['data-aria-label']}"
    >${args.children}</mdc-link
  >`;

const renderWithInvertedBackground = (args: Args) =>
  html` <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${render(args)}
  </div>`;

const meta: Meta = {
  title: 'Components/link',
  tags: ['autodocs'],
  component: 'mdc-link',
  render,

  argTypes: {
    children: {
      description: 'Text content to be displayed.',
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    'icon-name': {
      control: 'text',
    },
    inline: {
      control: 'boolean',
    },
    inverted: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: Object.values(LINK_SIZES),
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
    'data-aria-label': {
      control: 'text',
    },
    ...hideControls(['handleNavigation']),
  },
};

export default meta;

const defaultArgs = {
  children: 'Link',
  disabled: false,
  'icon-name': 'placeholder-bold',
  inline: false,
  inverted: false,
  size: DEFAULTS.LINK_SIZE,
  href: 'https://www.webex.com',
  target: '_blank',
  rel: 'noopener noreferrer',
};

export const Example: StoryObj = {
  args: {
    ...defaultArgs,
  },
};

export const StandaloneLink: StoryObj = {
  args: {
    ...defaultArgs,
  },
  argTypes: {
    ...hideControls(['inline', 'inverted']),
  },
};

export const StandaloneLinkInverted: StoryObj = {
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true,
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted']),
  },
};

export const InlineLink: StoryObj = {
  args: {
    ...defaultArgs,
    inline: true,
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline']),
  },
};

export const InlineLinkInverted: StoryObj = {
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true,
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted']),
  },
};
