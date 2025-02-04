import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';
import { VirtualItem } from '@tanstack/virtual-core';
import { ref } from 'lit/directives/ref.js';
import { StyleInfo, styleMap } from 'lit/directives/style-map.js';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';

const sentences = new Array(1000)
  .fill(true)
  .map((_, index) => `sentence number ${index}`);

const render = (args: Args) => html`
<div style="height: 500px; width: 500px;">
  <mdc-virtualizedlist
    .virtualizerprops="${args.virtualizerprops}"
    .renderlist=${args.renderlist}
    .onScroll=${args.onScroll}
  ></mdc-virtualizedlist></div>`;

const meta: Meta = {
  title: 'Work In Progress/virtualizedlist',
  tags: ['autodocs'],
  component: 'mdc-virtualizedlist',
  render,
  parameters: {
    badges: ['wip'],
  },
  argTypes: {
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    onScroll: () => console.log('hello'),
    virtualizerprops: { count: 200, estimateSize: () => 100 },
    renderlist: (
      virtualItems: Array<VirtualItem>,
      measureElement: (node: Element | null | undefined) => void,
      style: Readonly<StyleInfo>,
    ) =>
      html`<ul style=${styleMap(style)}>${virtualItems.map((virtualItem: VirtualItem) =>
        html`<li key=${virtualItem.key} data-index=${virtualItem.index} ref=${ref(measureElement)}>
          ${sentences[virtualItem.index]}</li>`)}</ul>`,
  },
};
