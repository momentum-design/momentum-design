import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

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
    tabindex="${args.tabIndex}"
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
    tabIndex: {
      control: 'number',
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
  tabIndex: 0,
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
