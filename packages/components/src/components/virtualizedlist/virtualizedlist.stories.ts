import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import './helpers/chatExample.stories.utils';
import './helpers/virtualizedDynamicList.stories.utils';
import './helpers/virtualizedDynamicListContent.stories.utils';
import './helpers/virtualizedWrapper.stories.utils';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-virtualizedwrapper
    .virtualizerProps=${args.virtualizerProps}
    .onscroll=${action('scroll')}
    story=${args.story}
    initial-focus="${args['initial-focus'] || 0}"
  ></mdc-virtualizedwrapper>`;

const meta: Meta = {
  title: 'Components/virtualizedlist',
  tags: ['autodocs'],
  component: 'mdc-virtualizedlist',
  render,
  argTypes: {
    ...hideControls([
      'virtualizerController',
      'virtualizer',
      'scrollElementRef',
      'focusTrapRef',
      'loop',
      'role',
      'itemsStore',
    ]),
    ...hideControls(['story']), // This is only used in the test helper to switch between list types
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    virtualizerProps: { count: 200, estimateSize: () => 36, overscan: 30 },
    story: 'text',
  },
};

export const Interactive: StoryObj = {
  args: {
    virtualizerProps: { count: 200, estimateSize: () => 48 },
    story: 'interactive',
  },
};

export const InteractiveStartAtBottom: StoryObj = {
  argTypes: {
    ...hideControls(['initial-focus']),
  },
  args: {
    virtualizerProps: { count: 200, estimateSize: () => 48 },
    story: 'interactive',
    'initial-focus': 199,
  },
};

export const Dynamic: StoryObj = {
  render: () => html` <mdc-virtualizeddynamiclist></mdc-virtualizeddynamiclist>`,
};

export const Chat: StoryObj = {
  render: () => html` <mdc-virtualizedlist-chat-example></mdc-virtualizedlist-chat-example>`,
};

export const DynamicContent: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: html`<p>AI chat like example to test revers list with dynamically changing content height.</p>
          <p>Every second message is an "AI" answer updated over time.</p>`,
      },
    },
  },
  render: () => html` <mdc-virtualizeddynamiclistcontent></mdc-virtualizeddynamiclistcontent>`,
};

export const WithPaddingAndGaps: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: html`<p>
            If padding is required at the top or bottom of the scrollable region (for example if the focus ring is being
            cut off), use the <code>paddingStart</code> and <code>paddingEnd</code> attributes on the virtualizerProps
            property to add the required padding in pixels. Do not set anything in CSS.
          </p>
          <p>
            If a gap between listitems are required, define the gap using CSS (either with margins on the listitem or
            set a gap on the container CSS part), and use the <code>gap</code> attribute on the virtualizerProps
            property to tell the virtualizer to take the gap into account when calculating scroll height.
          </p>`,
      },
    },
  },
  render: () =>
    html`<mdc-virtualizedwrapper
        .virtualizerProps=${{
          count: 200,
          estimateSize: () => 36,
          paddingStart: 8,
          paddingEnd: 8,
          gap: 8,
        }}
        story="text"
      ></mdc-virtualizedwrapper>
      <style>
        #VirtualizedWrapper--wrapper {
          height: 300px;
        }
        mdc-listitem:not(:first-child) {
          margin-top: 0.25rem;
        }
        mdc-listitem:not(:last-child) {
          margin-bottom: 0.25rem;
        }
      </style> `,
};
