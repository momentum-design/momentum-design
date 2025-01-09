import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { LINK_SIZES } from './link.constants';

const render = (args: Args) => {
  // To allow the children to be rendered as html anchor tag, we need to parse it first
  const htmlContent = html`${new DOMParser().parseFromString(args.children, 'text/html').body.firstChild}`;

  return html`<mdc-link
    ?disabled="${args.disabled}"
    ?inline="${args.inline}"
    ?inverted="${args.inverted}"
    size="${args.size}"
    icon-name="${args['icon-name']}"
    >${htmlContent}</mdc-link>`;
};

const renderWithInvertedBackground = (args: Args) => html`
    <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
      ${render(args)}
    </div>`;

const meta: Meta = {
  title: 'Work In Progress/link',
  tags: ['autodocs'],
  component: 'mdc-link',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    children: {
      description: 'Anchor tag to be displayed as link.',
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
  },
};

export default meta;

export const Example: StoryObj = {
  render,
  args: {
    children: '<a href="https://www.webex.com">Link</a>',
    disabled: false,
    'icon-name': 'pop-out-regular',
    inline: false,
    inverted: false,
    size: 'large',
  },
};

export const StandaloneLink: StoryObj = {
  render,
  args: {
    children: '<a href="https://www.webex.com">Link</a>',
    disabled: false,
    'icon-name': 'pop-out-regular',
    inline: false,
    inverted: false,
    size: 'large',
  },
};

export const StandaloneLinkInverted: StoryObj = {
  render: renderWithInvertedBackground,
  args: {
    children: '<a href="https://www.webex.com">Link</a>',
    disabled: false,
    'icon-name': 'pop-out-regular',
    inline: false,
    inverted: true,
    size: 'large',
  },
};

export const InlineLink: StoryObj = {
  render,
  args: {
    children: '<a href="https://www.webex.com">Link</a>',
    disabled: false,
    'icon-name': 'pop-out-regular',
    inline: true,
    inverted: false,
    size: 'large',
  },
};

export const InlineLinkInverted: StoryObj = {
  render: renderWithInvertedBackground,
  args: {
    children: '<a href="https://www.webex.com">Link</a>',
    disabled: false,
    'icon-name': 'pop-out-regular',
    inline: true,
    inverted: true,
    size: 'large',
  },
};
