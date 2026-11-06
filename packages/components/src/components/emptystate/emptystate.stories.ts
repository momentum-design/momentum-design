import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { VALID_TEXT_TAGS } from '../text/text.constants';
import { hideControls } from '../../../config/storybook/utils';

import { DEFAULTS, LAYOUT, SIZE } from './emptystate.constants';

const render = (args: Args) =>
  html` <mdc-emptystate
    layout="${ifDefined(args.layout)}"
    size="${ifDefined(args.size)}"
    heading="${ifDefined(args.heading)}"
    heading-tag-name="${ifDefined(args['heading-tag-name'])}"
    description="${ifDefined(args.description)}"
    >${args.children}</mdc-emptystate
  >`;

const meta: Meta = {
  title: 'Components/emptystate',
  tags: ['autodocs'],
  component: 'mdc-emptystate',
  render,
  argTypes: {
    layout: {
      control: 'select',
      options: Object.values(LAYOUT),
    },
    size: {
      control: 'select',
      options: Object.values(SIZE),
    },
    heading: {
      control: 'text',
    },
    'heading-tag-name': {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
    },
    description: {
      control: 'text',
      required: true,
    },
    ...hideControls(['children']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    heading: 'No messages yet',
    'heading-tag-name': DEFAULTS.HEADING_TAG_NAME,
    description: 'Messages you send to your team will appear here.',
    children: html`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-button slot="actions">Start a conversation</mdc-button>
      <mdc-link slot="actions" href="#invite-people">Invite people</mdc-link>
    `,
  },
};

export const RichHeading: StoryObj = {
  args: {
    description: 'Choose a template to begin.',
    children: html`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-text slot="heading" role="heading" aria-level="2" tagname="span" type="heading-small-medium">
        Start your first project <span aria-hidden="true">✨</span>
      </mdc-text>
      <mdc-button slot="actions">Choose a template</mdc-button>
    `,
  },
};

export const Horizontal: StoryObj = {
  args: {
    layout: LAYOUT.HORIZONTAL,
    heading: 'No files yet',
    description: 'Files shared in this conversation will appear here.',
    children: html`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-button slot="actions">Add files</mdc-button>
      <mdc-link slot="actions" href="#shared-files">Learn about shared files</mdc-link>
    `,
  },
};

export const Large: StoryObj = {
  args: {
    size: SIZE.LARGE,
    heading: 'No upcoming meetings',
    description: 'When a meeting is scheduled, its details will appear here.',
    children: html`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
      <mdc-button slot="actions">Schedule a meeting</mdc-button>
      <mdc-link slot="actions" href="#calendar">View calendar</mdc-link>
    `,
  },
};

export const NoActions: StoryObj = {
  args: {
    heading: 'No tasks yet',
    description: 'Tasks created for this project will appear here.',
    children: html`
      <mdc-illustration slot="illustration" name="ants-content-oneninetwo-empty-primary"></mdc-illustration>
    `,
  },
};

export const TextOnly: StoryObj = {
  args: {
    heading: 'No notifications yet',
    description: 'You’re all caught up. New notifications will appear here.',
  },
};

export const IconInIllustrationSlot: StoryObj = {
  args: {
    heading: 'No saved items yet',
    description: 'Bookmark items to find them here later.',
    children: html` <mdc-icon slot="illustration" name="bookmark-regular" size="2"></mdc-icon> `,
  },
};
