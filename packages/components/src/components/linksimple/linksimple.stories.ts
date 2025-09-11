import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import { hideControls, readOnlyControls, textControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html`<mdc-linksimple
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    ?disabled="${args.disabled}"
    ?inline="${args.inline}"
    ?inverted="${args.inverted}"
    href="${args.href}"
    target="${args.target}"
    rel="${args.rel}"
    download="${args.download}"
    ping="${args.ping}"
    hreflang="${args.hreflang}"
    type="${args.type}"
    referrerpolicy="${args.referrerpolicy}"
    data-aria-label="${args['data-aria-label']}"
    >${args.children}</mdc-linksimple
  >`;

const renderWithInvertedBackground = (args: Args) =>
  html` <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${render(args)}
  </div>`;

const meta: Meta = {
  title: 'Components/linksimple',
  tags: ['autodocs'],
  component: 'mdc-linksimple',
  render,
  parameters: {
    badges: ['stable'],
  },
  argTypes: {
    children: {
      description: 'Text content to be displayed.',
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    inline: {
      control: 'boolean',
    },
    inverted: {
      control: 'boolean',
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
    ...hideControls(['handleNavigation']),
    ...textControls([
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
  },
};

export default meta;

const defaultArgs = {
  children: 'Visit Linksimple',
  disabled: false,
  inline: false,
  inverted: false,
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
