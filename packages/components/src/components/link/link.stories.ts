import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { LINK_SIZES } from './link.constants';
import { disableControls, hideControls, readOnlyControls } from '../../../config/storybook/utils';

const render = (args: Args) => html`<mdc-link
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
    tabindex="${args.tabIndex}"
    >${args.children}</mdc-link>`;

const renderWithInvertedBackground = (args: Args) => html`
    <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
      ${render(args)}
    </div>`;

const meta: Meta = {
  title: 'Components/link',
  tags: ['autodocs'],
  component: 'mdc-link',
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
    tabIndex: {
      control: 'number',
    },
    ...hideControls(['handleNavigation']),
    ...disableControls([
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
      '--mdc-link-text-decoration-disabled',
    ]),
  },
};

export default meta;

const defaultArgs = {
  children: 'Link',
  disabled: false,
  'icon-name': 'placeholder-bold',
  inline: false,
  inverted: false,
  size: 'large',
  href: 'https://www.webex.com',
  target: '_blank',
  rel: 'noopener noreferrer',
  tabIndex: 0,
};

export const Example: StoryObj = {
  render,
  args: {
    ...defaultArgs,
  },
};

export const StandaloneLink: StoryObj = {
  render,
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
  render,
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
