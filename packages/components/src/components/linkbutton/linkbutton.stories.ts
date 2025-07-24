import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';

import { DEFAULTS, LINK_SIZES } from '../link/link.constants';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls, hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html`<mdc-linkbutton
    @click="${action('onclick')}"
    @keydown="${action('onkeydown')}"
    @focus="${action('onfocus')}"
    @blur="${action('onblur')}"
    ?active="${args.active}"
    ?disabled="${args.disabled}"
    ?inline="${args.inline}"
    ?inverted="${args.inverted}"
    icon-name="${args['icon-name']}"
    size="${args.size}"
    tabindex="${args.tabIndex}"
    ?autofocus="${args.autofocus}"
    aria-label="${args['aria-label']}"
    ariaStateKey="${ifDefined(args.ariaStateKey)}"
    >${args.children}</mdc-linkbutton>`;

const renderWithInvertedBackground = (args: Args) =>
  html`<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${render(args)}
  </div>`;

const meta: Meta = {
  title: 'Work In Progress/linkbutton',
  tags: ['autodocs'],
  component: 'mdc-linkbutton',
  render,
  parameters: {
    badges: ['wip'],
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
    'icon-name': {
      control: 'text',
    },
    active: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: Object.values(LINK_SIZES),
    },
    tabIndex: {
      control: 'number',
    },
    ariaStateKey: {
      control: 'text',
    },
    autofocus: {
      control: 'boolean',
    },
    ...classArgType,
    ...styleArgType,
    ...hideControls(['role', 'type', 'soft-disabled']),
    ...disableControls([
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
  children: 'LinkButton',
  disabled: false,
  'icon-name': 'placeholder-bold',
  inline: false,
  inverted: false,
  size: DEFAULTS.LINK_SIZE,
  tabIndex: 0,
};

export const Example: StoryObj = {
  args: {
    ...defaultArgs,
  },
};

export const StandaloneLinkButton: StoryObj = {
  args: {
    ...defaultArgs,
  },
  argTypes: {
    inline: { control: false },
    inverted: { control: false },
  },
};

export const StandaloneLinkButtonInverted: StoryObj = {
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true,
  },
  argTypes: {
    inline: { control: false },
    inverted: { control: { disabled: true } },
  },
};

export const InlineLinkButton: StoryObj = {
  args: {
    ...defaultArgs,
    inline: true,
  },
  argTypes: {
    inverted: { control: false },
    inline: { control: { disabled: true } },
  },
};

export const InlineLinkButtonInverted: StoryObj = {
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true,
  },
  argTypes: {
    inline: { control: { disabled: true } },
    inverted: { control: { disabled: true } },
  },
};
