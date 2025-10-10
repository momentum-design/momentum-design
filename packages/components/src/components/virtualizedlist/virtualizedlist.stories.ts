import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { action } from 'storybook/actions';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import './helpers/chatExample';
import './helpers/virtualizedDynamicList';
import './helpers/virtualizedDynamicListContent';
import './helpers/virtualizedWrapper';
import { hideControls } from '../../../config/storybook/utils';

const render = (args: Args) =>
  html` <mdc-virtualizedwrapper
    .virtualizerProps=${args.virtualizerProps}
    story=${args.story}
    .onscroll=${action('scroll')}
    initial-focus="90"
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
